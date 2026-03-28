<!-- src/views/home/Recomendaciones.vue -->
<!--
  ══════════════════════════════════════════════════════════════════════
  HOME — Convertex

  Página principal que el usuario ve al entrar a la app.
  - Bienvenida con logo y resumen
  - Recomendaciones parametrizables desde el backend
  - Tabla de empresas eliminadas con paginación
  ══════════════════════════════════════════════════════════════════════
-->
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

// ── Recommendations store ─────────────────────
const recoStore = useRecommendationsStore()

// ── Deleted companies ─────────────────────────
const deletedStore = useEmpresasDeletedStore()
const rowPerPage = ref(10)
const currentPage = ref(1)
const searchQuery = ref("")

const totalEmpresas = computed(() => deletedStore.empresas.length)

const filteredEmpresas = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return deletedStore.empresas

  return deletedStore.empresas.filter(e =>
    (e.nombre ?? "").toLowerCase().includes(q) ||
    (e.ruc ?? "").toLowerCase().includes(q) ||
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
  const last = Math.min(currentPage.value * rowPerPage.value, total)

  return `Mostrando ${first} a ${last} de ${total} registros`
})

watch(totalPage, n => {
  if (currentPage.value > n) currentPage.value = n
}, { immediate: true })

onMounted(async () => {
  recoStore.fetchActive()
  if (!deletedStore.loaded) {
    try { await deletedStore.load() }
    catch (err) { console.error("Error cargando empresas eliminadas", err) }
  }
})

// Stats
const stats = computed(() => [
  {
    label: "Empresas eliminadas",
    value: totalEmpresas.value,
    icon: "tabler-trash",
    color: "error",
    bg: "rgba(244, 67, 54, 0.08)",
  },
  {
    label: "Recomendaciones activas",
    value: recoStore.items.length,
    icon: "tabler-bulb",
    color: "warning",
    bg: "rgba(212, 136, 74, 0.08)",
  },
])
</script>

<template>
  <section class="hm">
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- WELCOME HEADER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
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

        <!-- Stats -->
        <div class="hm-welcome__stats">
          <div
            v-for="(s, i) in stats" :key="i"
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

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- RECOMMENDATIONS -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
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

      <!-- From backend -->
      <div v-if="recoStore.items.length" class="hm-reco-list">
        <div
          v-for="(rec, idx) in recoStore.items"
          :key="rec.id ?? idx"
          class="hm-reco"
        >
          <div class="hm-reco__num">{{ idx + 1 }}</div>
          <VIcon
            :icon="rec.icono || 'tabler-circle-check-filled'"
            size="20" color="#477130"
          />
          <span class="hm-reco__text">{{ rec.texto }}</span>
        </div>
      </div>

      <!-- Fallback hardcoded (while backend not ready) -->
      <div v-else-if="!recoStore.loading" class="hm-reco-list">
        <div class="hm-reco" v-for="(txt, i) in [
          'Ingrese valores únicamente hasta con 2 decimales.',
          'Para la separación decimal utilizar punto.',
          'No utilizar ni coma ni punto para la separación de miles.',
          'Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar.',
        ]" :key="i">
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

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DELETED COMPANIES TABLE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="hm-section">
      <div class="hm-section__head">
        <div class="hm-section__icon-wrap hm-section__icon-wrap--navy">
          <VIcon size="20" color="#2C3555">tabler-building-skyscraper</VIcon>
        </div>
        <div class="hm-section__head-text">
          <h2 class="hm-section__title">
            {{ safeT('convertex.deletedCompanies.tableTitle', 'Empresas eliminadas') }}
          </h2>
          <p class="hm-section__desc">Registro de empresas que han sido eliminadas del sistema</p>
        </div>

        <div class="hm-section__head-actions">
          <VTextField
            v-model="searchQuery"
            placeholder="Buscar por nombre, RUC o ciudad..."
            variant="outlined"
            density="compact"
            hide-details
            prepend-inner-icon="tabler-search"
            class="hm-search"
            clearable
          />
        </div>
      </div>

      <div class="hm-table-wrap">
        <VTable
          class="hm-table"
          density="compact"
        >
          <thead>
            <tr>
              <th>{{ safeT('convertex.deletedCompanies.headers.ruc', 'RUC') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.company', 'Empresa') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.city', 'Ciudad') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.province', 'Provincia') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.user', 'Usuario') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.createdAt', 'Creación') }}</th>
              <th>{{ safeT('convertex.deletedCompanies.headers.deletedAt', 'Eliminación') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="empresa in empresasPaginadas"
              :key="empresa.id"
            >
              <td class="hm-table__ruc">{{ empresa.ruc }}</td>
              <td class="hm-table__name">{{ empresa.nombre }}</td>
              <td>{{ empresa.ciudad }}</td>
              <td>{{ empresa.provincia }}</td>
              <td>{{ empresa.userid ?? empresa.userId }}</td>
              <td class="hm-table__date">{{ empresa.createdat }}</td>
              <td class="hm-table__date">{{ empresa.deletedat }}</td>
            </tr>
          </tbody>
          <tfoot v-if="!filteredEmpresas.length">
            <tr>
              <td colspan="7" class="hm-table__empty">
                <VIcon size="32" color="grey-lighten-1" class="mb-2">tabler-database-off</VIcon>
                <div>{{ searchQuery ? 'Sin resultados para esta búsqueda' : safeT('convertex.deletedCompanies.noData', 'No hay registros') }}</div>
              </td>
            </tr>
          </tfoot>
        </VTable>
      </div>

      <!-- Pagination -->
      <div class="hm-pagination">
        <span class="hm-pagination__text">{{ paginationText }}</span>
        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPage"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════════════════
   TOKENS
   ═══════════════════════════════════════════════════════════════ */
.hm {
  --hm-navy: #2C3555;
  --hm-amber: #D4884A;
  --hm-green: #477130;
  --hm-bg: #F7F7F5;
  --hm-r: 10px;
  --hm-ff: "DM Sans", "Outfit", -apple-system, sans-serif;
  --hm-fd: "Instrument Serif", "DM Serif Display", Georgia, serif;

  font-family: var(--hm-ff);
  color: var(--hm-navy);
  padding: 0 0 32px;
  min-height: 100%;
  overflow-y: auto;
}

/* ═══════════════════════════════════════════════════════════════
   WELCOME
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
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 15% 80%, rgba(212, 136, 74, 0.1) 0%, transparent 45%),
    radial-gradient(ellipse at 90% 20%, rgba(212, 136, 74, 0.06) 0%, transparent 40%);
  pointer-events: none;
}

.hm-welcome__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
}

.hm-welcome__title {
  font-family: var(--hm-fd);
  font-size: 28px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.hm-welcome__brand {
  color: var(--hm-amber);
}

.hm-welcome__sub {
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.4);
  max-width: 420px;
  margin: 0;
}

/* Stats */
.hm-welcome__stats {
  display: flex;
  gap: 14px;
  flex-shrink: 0;
}

.hm-stat {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--hm-r);
  backdrop-filter: blur(6px);
  min-width: 180px;
}

.hm-stat__icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-shrink: 0;
}

.hm-stat__value {
  font-size: 22px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
}

.hm-stat__label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 2px;
}

/* ═══════════════════════════════════════════════════════════════
   SECTIONS
   ═══════════════════════════════════════════════════════════════ */
.hm-section {
  background: white;
  border: 1px solid rgba(44, 53, 85, 0.06);
  border-radius: 12px;
  padding: 24px 28px;
  margin: 0 16px 20px;
}

.hm-section__head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.hm-section__head-text {
  flex: 1;
  min-width: 200px;
}

.hm-section__head-actions {
  flex-shrink: 0;
}

.hm-section__icon-wrap {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 136, 74, 0.08);
  border-radius: 10px;
  flex-shrink: 0;
}

.hm-section__icon-wrap--navy {
  background: rgba(44, 53, 85, 0.06);
}

.hm-section__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--hm-navy);
  margin: 0;
  letter-spacing: -0.01em;
}

.hm-section__desc {
  font-size: 12.5px;
  color: rgba(44, 53, 85, 0.45);
  margin: 2px 0 0;
}

/* ═══════════════════════════════════════════════════════════════
   RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */
.hm-reco-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hm-reco {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(44, 53, 85, 0.015);
  border: 1px solid rgba(44, 53, 85, 0.04);
  border-radius: 8px;
  transition: all 0.15s ease;
}

.hm-reco:hover {
  background: rgba(44, 53, 85, 0.03);
  border-color: rgba(44, 53, 85, 0.08);
}

.hm-reco__num {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 136, 74, 0.1);
  color: var(--hm-amber);
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

.hm-reco__text {
  font-size: 13.5px;
  color: rgba(44, 53, 85, 0.75);
  line-height: 1.4;
}

/* ═══════════════════════════════════════════════════════════════
   SEARCH
   ═══════════════════════════════════════════════════════════════ */
.hm-search {
  width: 280px;
}

.hm-search :deep(.v-field) {
  border-radius: 8px !important;
  font-size: 13px;
}

/* ═══════════════════════════════════════════════════════════════
   TABLE
   ═══════════════════════════════════════════════════════════════ */
.hm-table-wrap {
  border: 1px solid rgba(44, 53, 85, 0.06);
  border-radius: 8px;
}

.hm-table {
  font-size: 13px;
}

.hm-table thead th {
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(44, 53, 85, 0.5) !important;
  background: rgba(44, 53, 85, 0.02);
  border-bottom: 1px solid rgba(44, 53, 85, 0.06) !important;
  padding: 12px 16px !important;
  white-space: nowrap;
}

.hm-table tbody tr {
  transition: background 0.1s;
}

.hm-table tbody tr:hover {
  background: rgba(44, 53, 85, 0.015);
}

.hm-table tbody td {
  padding: 10px 16px !important;
  border-bottom: 1px solid rgba(44, 53, 85, 0.03) !important;
  color: rgba(44, 53, 85, 0.7);
}

.hm-table__ruc {
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 12px;
  color: rgba(44, 53, 85, 0.5) !important;
}

.hm-table__name {
  font-weight: 600 !important;
  color: var(--hm-navy) !important;
}

.hm-table__date {
  font-size: 12px;
  color: rgba(44, 53, 85, 0.4) !important;
}

.hm-table__empty {
  text-align: center;
  padding: 40px 16px !important;
  color: rgba(44, 53, 85, 0.35);
  font-size: 13px;
}

/* ═══════════════════════════════════════════════════════════════
   PAGINATION
   ═══════════════════════════════════════════════════════════════ */
.hm-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.hm-pagination__text {
  font-size: 12px;
  color: rgba(44, 53, 85, 0.4);
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .hm-welcome { padding: 28px 20px; }
  .hm-welcome__content { flex-direction: column; }
  .hm-welcome__stats { width: 100%; }
  .hm-stat { flex: 1; min-width: 140px; }
  .hm-welcome__title { font-size: 22px; }
  .hm-section { margin: 0 8px 16px; padding: 18px 16px; }
  .hm-search { width: 100%; }
  .hm-section__head { flex-direction: column; align-items: flex-start; }
  .hm-section__head-actions { width: 100%; }
}
</style>
