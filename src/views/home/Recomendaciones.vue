<!-- src/views/home/Recomendaciones.vue -->
<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useI18n } from "vue-i18n"
import { useEmpresasDeletedStore } from "@/@store/empresasDeleted.store"
import { useRecommendationsStore } from "@/@store/recommendations.store"

const { messages, locale } = useI18n({ useScope: "global" })

const getRawMessage = key => {
  const all = messages.value?.[locale.value]
  if (!all || !key) return undefined
  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) return acc[part]
    return undefined
  }, all)
}

const safeT = (key, fallback) => {
  const raw = getRawMessage(key)
  if (typeof raw === "string") return raw
  return fallback ?? key
}

const recoStore  = useRecommendationsStore()
const deletedStore = useEmpresasDeletedStore()

const rowPerPage   = ref(10)
const currentPage  = ref(1)
const searchQuery  = ref("")

const totalEmpresas = computed(() => deletedStore.empresas.length)

const filteredEmpresas = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return deletedStore.empresas
  return deletedStore.empresas.filter(e =>
    (e.nombre ?? "").toLowerCase().includes(q) ||
    (e.ruc    ?? "").toLowerCase().includes(q) ||
    (e.ciudad ?? "").toLowerCase().includes(q),
  )
})

const totalPage = computed(() =>
  filteredEmpresas.value.length > 0
    ? Math.ceil(filteredEmpresas.value.length / rowPerPage.value)
    : 1,
)

const empresasPaginadas = computed(() => {
  const start = (currentPage.value - 1) * rowPerPage.value
  return filteredEmpresas.value.slice(start, start + rowPerPage.value)
})

const paginationText = computed(() => {
  const total = filteredEmpresas.value.length
  if (!total) return "Sin registros"
  const first = (currentPage.value - 1) * rowPerPage.value + 1
  const last  = Math.min(currentPage.value * rowPerPage.value, total)
  return `${first}–${last} de ${total}`
})

const formatDate = raw => {
  if (!raw) return "—"
  try {
    return new Date(raw).toLocaleDateString("es-EC", {
      day: "2-digit", month: "2-digit", year: "numeric",
    })
  } catch {
    return String(raw).substring(0, 10)
  }
}

watch(totalPage, n => {
  if (currentPage.value > n) currentPage.value = n
}, { immediate: true })

watch(searchQuery, () => { currentPage.value = 1 })

onMounted(async () => {
  recoStore.fetchActive()
  if (!deletedStore.loaded) {
    try { await deletedStore.load() }
    catch (err) { console.error("Error cargando empresas eliminadas", err) }
  }
})

const stats = computed(() => [
  {
    label: "Empresas eliminadas",
    value: totalEmpresas.value,
    icon:  "tabler-trash",
    color: "error",
    bg:    "rgba(244, 67, 54, 0.08)",
  },
  {
    label: "Recomendaciones activas",
    value: recoStore.items.length,
    icon:  "tabler-bulb",
    color: "warning",
    bg:    "rgba(212, 136, 74, 0.08)",
  },
])
</script>

<template>
  <section class="hm">

    <!-- ═══════════════════════════════════════════════════════════════
         WELCOME HEADER
    ═══════════════════════════════════════════════════════════════ -->
    <div class="hm-welcome">
      <div class="hm-welcome__bg" />
      <div class="hm-welcome__content">
        <div class="hm-welcome__text">
          <h1 class="hm-welcome__title">
            Bienvenido a <span class="hm-welcome__brand">Convertex</span>
          </h1>
          <p class="hm-welcome__sub">
            Panel principal de tu herramienta de preparación de reportes financieros.
            Revisa las recomendaciones antes de comenzar.
          </p>
        </div>

        <div class="hm-welcome__stats">
          <div
            v-for="(s, i) in stats"
            :key="i"
            class="hm-stat"
          >
            <div class="hm-stat__icon" :style="{ background: s.bg }">
              <VIcon :icon="s.icon" :color="s.color" size="22" />
            </div>
            <div class="hm-stat__info">
              <div class="hm-stat__value">{{ s.value }}</div>
              <div class="hm-stat__label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════
         RECOMMENDATIONS
    ═══════════════════════════════════════════════════════════════ -->
    <div class="hm-section">
      <div class="hm-section__head">
        <div class="hm-section__icon-wrap">
          <VIcon size="20" color="#D4884A">tabler-alert-triangle</VIcon>
        </div>
        <div>
          <h2 class="hm-section__title">Importante</h2>
          <p class="hm-section__desc">Recomendaciones para un uso óptimo de Convertex</p>
        </div>
      </div>

      <!-- Desde el backend -->
      <div v-if="recoStore.items.length" class="hm-reco-list">
        <div
          v-for="(rec, idx) in recoStore.items"
          :key="rec.id ?? idx"
          class="hm-reco"
        >
          <div class="hm-reco__num">{{ idx + 1 }}</div>
          <VIcon :icon="rec.icono || 'tabler-circle-check-filled'" size="20" color="#477130" />
          <span class="hm-reco__text">{{ rec.texto }}</span>
        </div>
      </div>

      <!-- Fallback hardcoded -->
      <div v-else-if="!recoStore.loading" class="hm-reco-list">
        <div
          v-for="(txt, i) in [
            'Ingrese valores únicamente hasta con 2 decimales.',
            'Para la separación decimal utilizar punto.',
            'No utilizar ni coma ni punto para la separación de miles.',
            'Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar.',
          ]"
          :key="i"
          class="hm-reco"
        >
          <div class="hm-reco__num">{{ i + 1 }}</div>
          <VIcon icon="tabler-circle-check-filled" size="20" color="#477130" />
          <span class="hm-reco__text">{{ txt }}</span>
        </div>
      </div>

      <!-- Skeleton -->
      <div v-else class="hm-reco-list">
        <VSkeletonLoader v-for="i in 4" :key="i" type="text" class="mb-2" />
      </div>
    </div>

    <!-- DELETED COMPANIES ── tabla autónoma con scroll propio -->
    <div class="hm-section">

      <div class="hm-section__head">
        <div class="hm-section__icon-wrap hm-section__icon-wrap--navy">
          <VIcon size="20" color="#2C3555">tabler-building-skyscraper</VIcon>
        </div>
        <div class="hm-section__head-text">
          <h2 class="hm-section__title">Empresas eliminadas</h2>
          <p class="hm-section__desc">Registro de empresas eliminadas del sistema</p>
        </div>
        <div class="hm-section__head-actions">
          <VTextField
            v-model="searchQuery"
            placeholder="Buscar por nombre, RUC o ciudad..."
            variant="outlined" density="compact" hide-details
            prepend-inner-icon="tabler-search" clearable
            class="hm-search"
          />
        </div>
      </div>

      <!-- Caja con scroll propio — se autocontiene sin depender del padre -->
      <div class="hm-box">

        <!-- thead sticky -->
        <div class="hm-box__head">
          <span class="hm-bh hm-bh--ruc">RUC</span>
          <span class="hm-bh hm-bh--nom">Empresa</span>
          <span class="hm-bh hm-bh--ciu">Ciudad</span>
          <span class="hm-bh hm-bh--pro">Provincia</span>
          <span class="hm-bh hm-bh--usr">Usuario</span>
          <span class="hm-bh hm-bh--dat">Creación</span>
          <span class="hm-bh hm-bh--dat">Eliminación</span>
        </div>

        <!-- rows -->
        <div class="hm-box__body">
          <div v-if="!deletedStore.loaded" class="hm-box__empty">
            <VProgressCircular indeterminate size="20" color="primary" />
            Cargando...
          </div>
          <div v-else-if="!empresasPaginadas.length" class="hm-box__empty">
            {{ searchQuery ? 'Sin resultados' : 'No hay registros' }}
          </div>
          <div
            v-for="e in empresasPaginadas"
            v-else
            :key="e.id"
            class="hm-brow"
          >
            <span class="hm-bd hm-bh--ruc hm-bd--mono">{{ e.ruc }}</span>
            <span class="hm-bd hm-bh--nom hm-bd--bold">{{ e.nombre }}</span>
            <span class="hm-bd hm-bh--ciu">{{ e.ciudad }}</span>
            <span class="hm-bd hm-bh--pro">{{ e.provincia }}</span>
            <span class="hm-bd hm-bh--usr hm-bd--sm">{{ e.userid ?? e.userId }}</span>
            <span class="hm-bd hm-bh--dat hm-bd--sm">{{ formatDate(e.createdat) }}</span>
            <span class="hm-bd hm-bh--dat hm-bd--sm">{{ formatDate(e.deletedat) }}</span>
          </div>
        </div>

        <!-- footer paginación — sticky dentro del box -->
        <div class="hm-box__foot">
          <span class="hm-box__info">{{ paginationText }}</span>
          <div class="hm-box__nav">
            <button class="hm-btn" :disabled="currentPage <= 1" @click="currentPage--">
              ‹
            </button>
            <button
              v-for="p in totalPage" :key="p"
              class="hm-btn" :class="{'hm-btn--on': p === currentPage}"
              @click="currentPage = p"
            >{{ p }}</button>
            <button class="hm-btn" :disabled="currentPage >= totalPage" @click="currentPage++">
              ›
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════════════════
   TOKENS — mismo sistema de diseño que el resto de la app
   ═══════════════════════════════════════════════════════════════ */
.hm {
  --hm-navy:  #2C3555;
  --hm-amber: #D4884A;
  --hm-green: #477130;
  --hm-r:     10px;
  --hm-ff:    "DM Sans", "Outfit", -apple-system, sans-serif;
  --hm-fd:    "Instrument Serif", "DM Serif Display", Georgia, serif;

  font-family: var(--hm-ff);
  color: var(--hm-navy);
  padding: 0 0 32px;
  /* ✅ FIX: desacoplarse del contenedor padre con height fijo.
     display:block + width:100% garantiza que ocupa el ancho
     sin depender del flex/grid del layout padre */
  display: block;
  width: 100%;
  height: auto !important;
  min-height: 0;
  /* Sin overflow propio — dejar que el layout padre o el body hagan scroll */
  overflow: visible;
}

/* ═══════════════════════════════════════════════════════════════
   WELCOME — sin cambios
   ═══════════════════════════════════════════════════════════════ */
.hm-welcome {
  position: relative;
  padding: 40px 36px 32px;
  background: var(--hm-navy);
  border-radius: 0 0 16px 16px;
  overflow: hidden;
  margin-bottom: 24px;
}

.hm-welcome__bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse at 15% 80%, rgba(212,136,74,.1) 0%, transparent 45%),
    radial-gradient(ellipse at 90% 20%, rgba(212,136,74,.06) 0%, transparent 40%);
}

.hm-welcome__content {
  position: relative; z-index: 1;
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 32px;
}

.hm-welcome__title {
  font-family: var(--hm-fd);
  font-size: 28px; font-weight: 400;
  color: rgba(255,255,255,.92); margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.hm-welcome__brand { color: var(--hm-amber); }

.hm-welcome__sub {
  font-size: 13.5px; line-height: 1.6;
  color: rgba(255,255,255,.4); max-width: 420px; margin: 0;
}

.hm-welcome__stats { display: flex; gap: 14px; flex-shrink: 0; }

.hm-stat {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 18px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: var(--hm-r);
  backdrop-filter: blur(6px);
  min-width: 180px;
}

.hm-stat__icon {
  width: 42px; height: 42px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 10px; flex-shrink: 0;
}

.hm-stat__value { font-size: 22px; font-weight: 700; color: rgba(255,255,255,.9); line-height: 1; }
.hm-stat__label { font-size: 11px; color: rgba(255,255,255,.35); margin-top: 2px; }

/* ═══════════════════════════════════════════════════════════════
   SECTIONS — mismo patrón que PeriodoList .pl-section
   ═══════════════════════════════════════════════════════════════ */
.hm-section {
  background: white;
  border: 1px solid rgba(44,53,85,.05);
  border-radius: 12px;
  padding: 24px 28px;
  margin: 0 16px 20px;
  /* ✅ FIX: crece con el contenido, sin clip */
  display: block;
  width: 100%;
  height: auto !important;
  min-height: 0;
  overflow: visible;
}

/* La sección de tabla no necesita padding-bottom extra, la paginación lo da */
.hm-section--table { padding-bottom: 0; }

.hm-section__head {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 20px; flex-wrap: wrap;
}

.hm-section__head-text { flex: 1; min-width: 200px; }
.hm-section__head-actions { flex-shrink: 0; }

.hm-section__icon-wrap {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(212,136,74,.08);
  border-radius: 10px; flex-shrink: 0;
}

.hm-section__icon-wrap--navy { background: rgba(44,53,85,.06); }

.hm-section__title {
  font-size: 16px; font-weight: 600; color: var(--hm-navy);
  margin: 0; letter-spacing: -0.01em;
}

.hm-section__desc { font-size: 12.5px; color: rgba(44,53,85,.45); margin: 2px 0 0; }

/* ═══════════════════════════════════════════════════════════════
   RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */
.hm-reco-list { display: flex; flex-direction: column; gap: 6px; }

.hm-reco {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px;
  background: rgba(44,53,85,.015);
  border: 1px solid rgba(44,53,85,.04);
  border-radius: 8px;
  transition: all .15s ease;
}

.hm-reco:hover { background: rgba(44,53,85,.03); border-color: rgba(44,53,85,.08); }

.hm-reco__num {
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(212,136,74,.1); color: var(--hm-amber);
  border-radius: 6px; font-size: 11px; font-weight: 700; flex-shrink: 0;
}

.hm-reco__text { font-size: 13.5px; color: rgba(44,53,85,.75); line-height: 1.4; }

/* SEARCH */
.hm-search { width: 280px; }
.hm-search :deep(.v-field) { border-radius: 8px !important; font-size: 13px; }

/* ═══════════════════════════════════════════════════════════════
   BOX — contenedor autónomo con scroll interno
   Cabecera sticky + body scrolleable + footer sticky
   Todo auto-contenido, no depende del overflow del layout padre
   ═══════════════════════════════════════════════════════════════ */
.hm-box {
  border: 1px solid rgba(44,53,85,.07);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* Altura fija = 10 filas ~44px + header 38px + footer 44px */
  max-height: 520px;
  overflow: hidden;           /* clip solo para border-radius */
}

/* Header — sticky */
.hm-box__head {
  display: flex;
  align-items: center;
  background: rgba(44,53,85,.025);
  border-bottom: 1.5px solid rgba(44,53,85,.08);
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1;
}

.hm-bh {
  padding: 10px 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  color: rgba(44,53,85,.42);
  white-space: nowrap;
  overflow: hidden;
}

/* Body — el único que hace scroll */
.hm-box__body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.hm-box__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 36px 16px;
  color: rgba(44,53,85,.35);
  font-size: 13px;
}

/* Filas */
.hm-brow {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(44,53,85,.04);
  transition: background .1s;
}
.hm-brow:last-child { border-bottom: none; }
.hm-brow:hover { background: rgba(44,53,85,.018); }

.hm-bd {
  padding: 11px 12px;
  font-size: 12.5px;
  color: rgba(44,53,85,.7);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hm-bd--bold { font-weight: 600; color: #2C3555; }
.hm-bd--mono { font-family: "SF Mono","Fira Code",monospace; font-size: 11px; color: rgba(44,53,85,.4); }
.hm-bd--sm   { font-size: 11.5px; color: rgba(44,53,85,.38); }

/* Anchos de columna */
.hm-bh--ruc { flex: 0 0 130px; }
.hm-bh--nom { flex: 1 1 160px; }
.hm-bh--ciu { flex: 0 0 82px; }
.hm-bh--pro { flex: 0 0 95px; }
.hm-bh--usr { flex: 1 1 200px; }
.hm-bh--dat { flex: 0 0 88px; }

/* Footer — sticky al fondo */
.hm-box__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-top: 1px solid rgba(44,53,85,.07);
  background: rgba(44,53,85,.015);
  flex-shrink: 0;
}

.hm-box__info { font-size: 11.5px; color: rgba(44,53,85,.38); }

.hm-box__nav { display: flex; gap: 3px; align-items: center; }

.hm-btn {
  min-width: 28px; height: 28px; padding: 0 6px;
  border: 1px solid rgba(44,53,85,.14);
  border-radius: 5px;
  background: white;
  color: rgba(44,53,85,.55);
  font-size: 13px; font-weight: 500;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all .15s;
  font-family: inherit;
  line-height: 1;
}
.hm-btn:hover:not(:disabled) { border-color: #D4884A; color: #D4884A; background: rgba(212,136,74,.04); }
.hm-btn:disabled { opacity: .3; cursor: not-allowed; }
.hm-btn--on { background: #2C3555 !important; border-color: #2C3555 !important; color: white !important; }

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .hm-welcome           { padding: 28px 20px; }
  .hm-welcome__content  { flex-direction: column; }
  .hm-welcome__stats    { width: 100%; }
  .hm-stat              { flex: 1; min-width: 140px; }
  .hm-welcome__title    { font-size: 22px; }
  .hm-section           { margin: 0 8px 16px; padding: 18px 16px; }
  .hm-search            { width: 100%; }
  .hm-section__head     { flex-direction: column; align-items: flex-start; }
  .hm-section__head-actions { width: 100%; }
}
</style>
