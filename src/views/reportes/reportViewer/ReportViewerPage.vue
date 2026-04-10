<!-- src/views/reportes/reportViewer/ReportViewerPage.vue (CONVERTEX) -->
<!-- ══════════════════════════════════════════════════════════════
  CONVERTEX — ReportViewerPage v2

  Cambios sobre v1:
    - Tabs custom (botones nativos) con badges de cuadre
    - Botones de resumen dentro de la barra de tabs (derecha)
    - Floating side buttons al hacer scroll
    - beforeunload handler para no perder datos
    - IntersectionObserver para detectar scroll
    - Indicadores de cuadre en header
    - Estado de sync mejorado
═══════════════════════════════════════════════════════════════ -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from "vue"
import { useRoute } from "vue-router"
import { useSafeI18n } from "@/composables/useSafeI18n"
import { useReportViewerStore } from "@/@store/reportViewer.store"
import { useIndexedDBService } from "@/services/indexeddb.service"
import ReportSectionByValues from "./ReportSectionByValues.vue"
import TxtMapeo101PA from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo101PA.vue"
import TxtMapeo1 from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo1.vue"
import TxtEstadosDeCambiosEnElPatrimonio from "@/views/reportes/reportViewer/components/ecp/TxtEstadosDeCambiosEnElPatrimonio.vue"
import ResumenERI from "@/views/reportes/reportViewer/components/ResumenERI.vue"
import ResumenESF from "@/views/reportes/reportViewer/components/ResumenESF.vue"
import ResumenSaldosInicialesECP from "@/views/reportes/reportViewer/components/ResumenSaldosInicialesECP.vue"
import ResumenSaldosFinalesECP from "@/views/reportes/reportViewer/components/ResumenSaldosFinalesECP.vue"
import ResumenEFE from "@/views/reportes/reportViewer/components/ResumenEFE.vue"

import { useReportReady } from '@/composables/useReportReady'

const route = useRoute()
const store = useReportViewerStore()
const { safeT } = useSafeI18n("global")

const currentTab = ref("esf")
const showFloatingBtns = ref(false)
let headerObserver = null
let _mounted = true

const hasPendingChanges = computed(() => store.hasPendingChanges)
const pendingChangesCount = computed(() => store.pendingChangesCount)
const saving = computed(() => store.saving)
const reporte = computed(() => store.current)
const loading = computed(() => store.loading)

const esfValues = computed(() => reporte.value?.values?.esfvalues ?? [])
const ecpValues = computed(() => reporte.value?.values?.ecpvalues ?? [])
const efeValues = computed(() => reporte.value?.values?.efemdvalues ?? [])
const eriValues = computed(() => reporte.value?.values?.erivalues ?? [])

const empresaNombre = computed(() => reporte.value?.empresa?.nombre ?? reporte.value?.empresaid ?? "")
const periodoTexto = computed(() => String(reporte.value?.periodo?.periodo ?? reporte.value?.periodoid ?? ""))

const esfOk = ref(false)
const eriOk = ref(false)
const ecpOk = ref(false)
const efeOk = ref(false)

let cuadreTimer = null
let cuadreTimer2 = null

const { initStatus, watchReport, stop } = useReportReady()

const refreshCuadres = () => {
  if (cuadreTimer) clearTimeout(cuadreTimer)
  if (cuadreTimer2) clearTimeout(cuadreTimer2)
  cuadreTimer = setTimeout(() => {
    esfOk.value = store.calculateEsfCuadre() === 1
    eriOk.value = store.calculateEriCuadre() === 1
    ecpOk.value = store.calculateEcpCuadre() === 1
    efeOk.value = store.calculateEfeCuadre() === 1
  }, 800)
  cuadreTimer2 = setTimeout(() => {
    efeOk.value = store.calculateEfeCuadre() === 1
  }, 1500)
}

watch([esfValues, eriValues, ecpValues, efeValues], () => refreshCuadres(), { immediate: true })

const showResumenEsf = ref(false)
const showEriResumen = ref(false)
const showResumenEcpSI = ref(false)
const showResumenEcpSF = ref(false)
const showResumenEfe = ref(false)

const activePanel = ref("")
const panel7 = ref(0)

const tipoReporte = computed(() => {
  const r = reporte.value
  if (!r) return "individual"
  if (r.tiporeporte) return r.tiporeporte
  if (r.periodo?.tiporeporte) return r.periodo.tiporeporte
  if (r.esconsolidado || r.periodo?.esconsolidado) return "consolidado"
  
  return "individual"
})

const tipoLabel = computed(() => {
  if (tipoReporte.value === "inicial") return "Inicial"
  if (tipoReporte.value === "consolidado") return "Consolidado"
  
  return "Individual"
})

const tipoGradient = computed(() => {
  if (tipoReporte.value === "inicial") return "linear-gradient(135deg,#6d28d9,#4c1d95)"
  if (tipoReporte.value === "consolidado") return "linear-gradient(135deg,#1a6bb5,#0d3d6b)"
  
  return "linear-gradient(135deg,#d97706,#92400e)"
})

function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    
    const jsonPayload = decodeURIComponent(
      atob(base64).split("").map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""))
    
    return JSON.parse(jsonPayload)
  } catch { return null }
}

const token = sessionStorage.getItem("accessToken")
const claims = parseJwt(token)

const displayName = claims?.name || claims?.preferred_username ||
  [claims?.given_name, claims?.family_name].filter(Boolean).join(" ") ||
  claims?.email || claims?.sub || "—"

// ── Tab status ────────────────────────────────
const tabStatus = computed(() => ({
  esf: esfOk.value, eri: eriOk.value, ecp: ecpOk.value, efe: efeOk.value,
}))

// ── beforeunload handler ──────────────────────
const handleBeforeUnload = e => {
  if (store.reporte) {
    try {
      store._syncReporteValues?.()
      
      const idb = useIndexedDBService()

      const snapshot = JSON.parse(JSON.stringify({
        ...store.reporte,
        values: {
          esfvalues: Object.values(store.values?.esf || {}),
          erivalues: Object.values(store.values?.eri || {}),
          ecpvalues: Object.values(store.values?.ecp || {}),
          efemdvalues: Object.values(store.values?.efemd || {}),
          movvalues: Object.values(store.values?.mov || {}),
          efefdvalues: Object.values(store.values?.efefd || {}),
        },
      }))

      idb.put("reportes", snapshot)
    } catch (err) {
      console.warn('[ReportViewer] Error guardando snapshot en beforeunload:', err)
    }
  }
  if (store.hasPendingChanges) {
    e.preventDefault()
    e.returnValue = 'Tiene cambios sin guardar. ¿Desea salir?'

    return e.returnValue
  }
}

// ── Lifecycle ─────────────────────────────────
onMounted(async () => {
  window.addEventListener('beforeunload', handleBeforeUnload)

  const paramId = route.query.reporteid ?? route.params.reporteid
  const reporteId = typeof paramId === "string" ? Number(paramId) : paramId
  const isNew = route.query.new === '1'
  if (!Number.isFinite(reporteId)) return

  try {
    await store.load(reporteId)
  } catch (err) {
    console.error("[ReportViewer] error al cargar reporte", err)
  }

  // Si es reporte nuevo, hacer polling hasta que init-values termine
  if (isNew) {
    console.log('[ReportViewer] Reporte nuevo — iniciando polling')
    watchReport(reporteId, async status => {
      console.log(`[ReportViewer] init-values: ${status}`)
      if (status === 'ready') {
        try {
          await store.load(reporteId)
        } catch (err) {
          console.error('[ReportViewer] Error recargando:', err)
        }
      }
    })
  }

  // Observer para detectar cuando las tabs salen del viewport
  await nextTick()

  // Intentar encontrar el elemento con un pequeño retry por si el DOM tarda
  const findAndObserve = () => {
    const tabsEl = document.querySelector('.cv-tabs-bar')
    if (tabsEl) {
      headerObserver = new IntersectionObserver(
        ([entry]) => { showFloatingBtns.value = !entry.isIntersecting },
        { threshold: 0 },
      )
      headerObserver.observe(tabsEl)
      console.log('[ReportViewer] IntersectionObserver registrado en .cv-tabs-bar')
    } else {
      console.warn('[ReportViewer] .cv-tabs-bar no encontrado, reintentando...')
      if (_mounted) setTimeout(findAndObserve, 300)
    }
  }
  findAndObserve()
})

onBeforeUnmount(async () => {
  _mounted = false
  window.removeEventListener('beforeunload', handleBeforeUnload)
  if (headerObserver) headerObserver.disconnect()
  stop()  // ← detener polling
  try { await store.flushNow() }
  catch (e) { console.warn('[ReportViewer] Error en flush:', e) }
})

watch(() => route.query.reporteid, async newId => {
  const reporteId = typeof newId === "string" ? Number(newId) : newId
  if (!Number.isFinite(reporteId)) return
  await store.load(reporteId)
})

// ── onChangeValue ─────────────────────────────
const onChangeValue = payload => {
  if (payload && Array.isArray(payload.batch)) {
    for (const p of payload.batch) {
      const tipoModel = p.tipo === "efe" ? "efemd" : p.tipo
      const nombrecampo = p.row?.nombrecampo ?? p.id
      if (!nombrecampo) continue
      const meta = { ...(p.meta || {}), tablaorigen: p.meta?.tablaorigen ?? p.row?.tablaorigen ?? null }

      store.updateValue(tipoModel, nombrecampo, p.valor, meta)
    }

    return
  }
  const tipoModel = payload.tipo === "efe" ? "efemd" : payload.tipo
  const nombrecampo = payload.row?.nombrecampo ?? payload.id
  if (!nombrecampo) return
  const meta = { ...(payload.meta || {}), tablaorigen: payload.meta?.tablaorigen ?? payload.row?.tablaorigen ?? null }
  store.updateValue(tipoModel, nombrecampo, payload.valor, meta)
}
</script>

<template>
  <section class="cv">
    <!-- ══ HEADER ═══════════════════════════════ -->
    <div class="cv-header">
      <div class="cv-header__accent" />
      <div class="cv-header__top">
        <div class="cv-header__identity">
          <div class="cv-header__icon" :style="{ background: tipoGradient }">
            <VIcon icon="tabler-report-analytics" size="18" color="white" />
          </div>
          <div class="cv-header__info">
            <div class="cv-header__empresa">
              {{ empresaNombre || '—' }}
              <span class="cv-header__periodo">/ {{ periodoTexto || '—' }}</span>
            </div>
            <div class="cv-header__meta">
              <span class="cv-chip-tipo" :style="{ background: tipoGradient }">{{ tipoLabel }}</span>
              <span class="cv-header__id">Reporte #{{ reporte?.reporteid ?? route.params.reporteid }}</span>
              <span class="cv-header__sep">·</span>
              <span class="cv-header__user"><VIcon icon="tabler-user-circle" size="13" class="mr-1" />{{ displayName }}</span>
              <span class="cv-header__sep">·</span>
              <span class="cv-header__module">Módulo: <strong>{{ currentTab.toUpperCase() }}</strong></span>
            </div>
          </div>
        </div>

        <div class="cv-header__right">
          <div v-if="hasPendingChanges" class="cv-sync cv-sync--warn">
            <VIcon icon="tabler-cloud-off" size="14" />
            <span>{{ pendingChangesCount }} pendiente{{ pendingChangesCount !== 1 ? 's' : '' }}</span>
          </div>
          <div v-else-if="saving" class="cv-sync cv-sync--saving">
            <VProgressCircular indeterminate size="12" width="2" color="#d97706" />
            <span>Sincronizando…</span>
          </div>
          <div v-else class="cv-sync cv-sync--ok">
            <VIcon icon="tabler-cloud-check" size="14" />
            <span>Guardado</span>
          </div>
        </div>
      </div>

      <!-- Indicadores de cuadre -->
      <div class="cv-header__cuadre">
        <div v-for="(ok, tab) in tabStatus" :key="tab" class="cv-cuadre-item" :class="ok ? 'cv-cuadre-item--ok' : 'cv-cuadre-item--err'">
          <VIcon :icon="ok ? 'tabler-check' : 'tabler-x'" size="11" />
          {{ tab.toUpperCase() }}
        </div>
      </div>
    </div>

    <!-- ══ CONTENIDO ════════════════════════════ -->
    <main class="cv-content">
      <div class="cv-tabs-card">
        <!-- Tabs bar -->
        <div class="cv-tabs-bar">
          <button
            v-for="tab in [
              { val: 'mapeo1', label: 'MAPEO101', icon: 'tabler-table-import' },
              { val: 'esf', label: 'ESF', ok: esfOk },
              { val: 'eri', label: 'ERI', ok: eriOk },
              { val: 'ecp', label: 'ECP', ok: ecpOk },
              { val: 'efe', label: 'EFE', ok: efeOk },
            ]"
            :key="tab.val"
            class="cv-tab"
            :class="{ 'cv-tab--active': currentTab === tab.val }"
            @click="currentTab = tab.val"
          >
            <VIcon v-if="tab.icon" :icon="tab.icon" size="14" class="mr-1" />
            {{ tab.label }}
            <span v-if="tab.ok !== undefined" class="cv-tab__badge" :class="tab.ok ? 'cv-tab__badge--ok' : 'cv-tab__badge--err'">
              <VIcon :icon="tab.ok ? 'tabler-check' : 'tabler-alert-circle'" size="11" />
            </span>
          </button>

          <!-- Spacer + botones de resumen contextuales -->
          <div class="cv-tabs-spacer" />
          <template v-if="currentTab === 'esf'">
            <button class="cv-resumen-btn" @click="showResumenEsf = true">
              <VIcon icon="tabler-report-analytics" size="14" /> Resumen ESF
            </button>
          </template>
          <template v-if="currentTab === 'eri'">
            <button class="cv-resumen-btn" @click="showEriResumen = true">
              <VIcon icon="tabler-file-description" size="14" /> Resumen ERI
            </button>
          </template>
          <template v-if="currentTab === 'ecp'">
            <button class="cv-resumen-btn" @click="showResumenEcpSI = true">
              <VIcon icon="tabler-report-analytics" size="14" /> Saldos Iniciales
            </button>
            <button class="cv-resumen-btn" @click="showResumenEcpSF = true">
              <VIcon icon="tabler-report-analytics" size="14" /> Saldos Finales
            </button>
          </template>
          <template v-if="currentTab === 'efe'">
            <button class="cv-resumen-btn" @click="showResumenEfe = true">
              <VIcon icon="tabler-report-analytics" size="14" /> Resumen EFE
            </button>
          </template>
        </div>

        <div class="cv-tab-divider" />

        <!-- Tab content -->
        <div class="cv-tab-content">
          <VWindow v-model="currentTab">
            <VWindowItem value="mapeo1" eager>
              <p class="cv-mapeo-hint">
                <VIcon icon="tabler-info-circle" size="16" color="#d97706" class="mr-1" />
                Importa mediante Excel la información del ESF y ERI, o ingresa los datos manualmente.
              </p>
              <VExpansionPanels v-model="panel7" eager>
                <VExpansionPanel eager>
                  <VExpansionPanelTitle>DATOS PERIODO ACTUAL</VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <TxtMapeo1 :ecp-values="ecpValues" :esf-values="esfValues" :efe-values="efeValues" :eri-values="eriValues" :periodo="periodoTexto" :empresa="empresaNombre" @change-value="onChangeValue" />
                  </VExpansionPanelText>
                </VExpansionPanel>
                <VExpansionPanel eager>
                  <VExpansionPanelTitle>DATOS PERIODO ANTERIOR</VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <TxtMapeo101PA :ecp-values="ecpValues" :esf-values="esfValues" :efe-values="efeValues" :eri-values="eriValues" :periodo="periodoTexto" :empresa="empresaNombre" @change-value="onChangeValue" />
                  </VExpansionPanelText>
                </VExpansionPanel>
              </VExpansionPanels>
            </VWindowItem>

            <VWindowItem value="esf" eager>
              <ReportSectionByValues :active-panel="activePanel" tipo="esf" :title="safeT('supercias.reports.esfTitle', 'Estado de Situación Financiera (ESF)')" :values="esfValues" :loading="loading" :current-tab="currentTab" @update:active-panel="activePanel = $event" @change-value="onChangeValue" />
            </VWindowItem>

            <VWindowItem value="eri" eager>
              <ReportSectionByValues :active-panel="activePanel" tipo="eri" title="Estado de Resultados Integrales (ERI)" :values="eriValues" :loading="loading" :current-tab="currentTab" @change-value="onChangeValue" @update:active-panel="activePanel = $event" />
            </VWindowItem>

            <VWindowItem value="ecp" eager>
              <TxtEstadosDeCambiosEnElPatrimonio :active-panel="activePanel" tipo="ecp" :values="ecpValues" :periodo="periodoTexto" :empresa="empresaNombre" :data="reporte?.patrimonio ?? {}" :current-tab="currentTab" title="" @change-value="onChangeValue" @update:active-panel="activePanel = $event" />
            </VWindowItem>

            <VWindowItem value="efe" eager>
              <ReportSectionByValues :active-panel="activePanel" tipo="efe" :title="safeT('supercias.reports.efeMdTitle', 'Estado de Flujos de Efectivo (EFE) – Método Directo')" :values="efeValues" :loading="loading" :current-tab="currentTab" @change-value="onChangeValue" @update:active-panel="activePanel = $event" />
            </VWindowItem>
          </VWindow>
        </div>
      </div>
    </main>

    <!-- ══ FLOATING SIDE BUTTONS ═════════════════ -->
    <Transition name="cv-fab-slide">
      <div v-if="showFloatingBtns" class="cv-fab-strip">
        <button v-if="currentTab === 'esf'" class="cv-fab-btn" title="Resumen ESF" @click="showResumenEsf = true">
          <VIcon icon="tabler-report-analytics" size="16" />
          <span class="cv-fab-btn__label">ESF</span>
        </button>
        <button v-if="currentTab === 'eri'" class="cv-fab-btn" title="Resumen ERI" @click="showEriResumen = true">
          <VIcon icon="tabler-file-description" size="16" />
          <span class="cv-fab-btn__label">ERI</span>
        </button>
        <template v-if="currentTab === 'ecp'">
          <button class="cv-fab-btn" title="Saldos Iniciales ECP" @click="showResumenEcpSI = true">
            <VIcon icon="tabler-report-analytics" size="16" />
            <span class="cv-fab-btn__label">SI</span>
          </button>
          <button class="cv-fab-btn" title="Saldos Finales ECP" @click="showResumenEcpSF = true">
            <VIcon icon="tabler-report-analytics" size="16" />
            <span class="cv-fab-btn__label">SF</span>
          </button>
        </template>
        <button v-if="currentTab === 'efe'" class="cv-fab-btn" title="Resumen EFE" @click="showResumenEfe = true">
          <VIcon icon="tabler-report-analytics" size="16" />
          <span class="cv-fab-btn__label">EFE</span>
        </button>
      </div>
    </Transition>

    <!-- ══ DIÁLOGOS ═════════════════════════════ -->
    <ResumenESF v-model="showResumenEsf" :esf-cuadre="esfOk" :values="esfValues" @update:show-resumen-esf="showResumenEsf = $event" />
    <ResumenERI v-model="showEriResumen" :eri-cuadre="eriOk" :values="eriValues" @update:show-eri-resumen="showEriResumen = $event" />
    <ResumenSaldosInicialesECP v-model="showResumenEcpSI" :esf-values="esfValues" :ecp-values="ecpValues" @update:showResumenEcpSI="showResumenEcpSI = $event" @update:ecpSICuadre="() => {}" />
    <ResumenSaldosFinalesECP v-model="showResumenEcpSF" :esf-values="esfValues" :ecp-values="ecpValues" @update:showResumenEcpSF="showResumenEcpSF = $event" @update:ecpSFCuadre="() => {}" />
    <ResumenEFE v-model="showResumenEfe" :efe-cuadre="efeOk" :esf-values="esfValues" :eri-values="eriValues" :efe-values="efeValues" @update:showResumenEfe="showResumenEfe = $event" @update:efeCuadre="() => {}" />
  </section>
</template>

<style scoped>
/* ══ TOKENS ════════════════════════════════════ */
.cv {
  --cv-amber: #d97706;
  --cv-amber-dark: #92400e;
  --cv-green: #2db84b;
  --cv-green-dark: #1a6b2e;
  --cv-ink: #0f1923;
  --cv-ink-mid: #2d3748;
  --cv-ink-faint: #94a3b8;
  --cv-ff: "DM Sans", "Outfit", -apple-system, sans-serif;
  font-family: var(--cv-ff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #faf8f5;
  color: var(--cv-ink);
}

/* ══ HEADER ════════════════════════════════════ */
.cv-header {
  position: sticky; top: 0; z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid rgba(217, 119, 6, 0.12);
  flex-shrink: 0; position: relative; overflow: hidden;
}
.cv-header__accent {
  position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: linear-gradient(180deg, #d97706, #92400e);
}
.cv-header__top {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 12px 20px 10px 22px; flex-wrap: wrap;
}
.cv-header__identity { display: flex; align-items: center; gap: 12px; }
.cv-header__icon {
  width: 36px; height: 36px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 3px 10px rgba(0,0,0,.15);
}
.cv-header__empresa { font-size: 14px; font-weight: 700; color: var(--cv-ink); line-height: 1.2; }
.cv-header__periodo { font-weight: 400; color: var(--cv-ink-faint); margin-left: 4px; }
.cv-header__meta { display: flex; align-items: center; gap: 8px; margin-top: 3px; flex-wrap: wrap; }
.cv-chip-tipo { padding: 2px 8px; border-radius: 20px; font-size: 10px; font-weight: 700; color: white; letter-spacing: 0.04em; }
.cv-header__id { font-size: 11px; color: var(--cv-ink-faint); }
.cv-header__sep { font-size: 11px; color: rgba(0,0,0,.2); }
.cv-header__user { display: flex; align-items: center; font-size: 11px; color: var(--cv-ink-faint); }
.cv-header__module { font-size: 11px; color: var(--cv-ink-faint); }
.cv-header__module strong { color: var(--cv-amber-dark); }

.cv-header__right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.cv-sync { display: flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; }
.cv-sync--ok { background: rgba(45,184,75,.08); color: #1a6b2e; border: 1px solid rgba(45,184,75,.2); }
.cv-sync--warn { background: rgba(245,158,11,.08); color: #92600a; border: 1px solid rgba(245,158,11,.2); }
.cv-sync--saving { background: rgba(217,119,6,.06); color: var(--cv-amber-dark); border: 1px solid rgba(217,119,6,.2); }

/* Cuadre bar */
.cv-header__cuadre {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 22px 8px;
  border-top: 1px solid rgba(217,119,6,.06);
  background: rgba(217,119,6,.02);
}
.cv-cuadre-item {
  display: flex; align-items: center; gap: 3px;
  padding: 2px 8px; border-radius: 20px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em;
}
.cv-cuadre-item--ok { background: rgba(45,184,75,.1); color: #1a6b2e; }
.cv-cuadre-item--err { background: rgba(198,40,40,.08); color: #b91c1c; }

/* ══ CONTENT ═══════════════════════════════════ */
.cv-content { flex: 1; overflow-y: auto; padding: 16px; }
.cv-tabs-card {
  background: white;
  border: 1px solid rgba(217,119,6,.08);
  border-radius: 12px; overflow: hidden;
}

/* ══ TABS BAR ══════════════════════════════════ */
.cv-tabs-bar {
  display: flex; align-items: center; gap: 2px;
  padding: 8px 12px 0;
  overflow-x: auto; scrollbar-width: none;
  background: rgba(217,119,6,.02);
}
.cv-tabs-bar::-webkit-scrollbar { display: none; }

.cv-tab {
  display: flex; align-items: center; gap: 4px;
  padding: 7px 14px;
  border: none; border-bottom: 2px solid transparent;
  background: transparent; border-radius: 6px 6px 0 0;
  font-size: 11.5px; font-weight: 600; font-family: inherit;
  letter-spacing: 0.04em; color: var(--cv-ink-faint);
  cursor: pointer; white-space: nowrap;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}
.cv-tab:hover { background: rgba(217,119,6,.06); color: var(--cv-amber-dark); }
.cv-tab--active {
  color: var(--cv-amber-dark) !important;
  border-bottom-color: var(--cv-amber) !important;
  background: rgba(217,119,6,.07) !important;
}

.cv-tab__badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; border-radius: 50%; margin-left: 2px;
}
.cv-tab__badge--ok { background: rgba(45,184,75,.15); color: #1a6b2e; }
.cv-tab__badge--err { background: rgba(198,40,40,.12); color: #b91c1c; }

.cv-tab-divider { height: 1px; background: rgba(217,119,6,.1); }
.cv-tab-content { padding: 16px; position: relative; }

/* ══ RESUMEN BUTTONS (en tabs bar) ═════════════ */
.cv-tabs-spacer { flex: 1; }
.cv-resumen-btn {
  display: flex; align-items: center; gap: 5px;
  padding: 5px 12px;
  background: rgba(217,119,6,.07);
  border: 1.5px solid rgba(217,119,6,.25);
  border-radius: 6px; color: var(--cv-amber-dark);
  font-size: 11.5px; font-weight: 600;
  font-family: inherit; cursor: pointer;
  white-space: nowrap; transition: all .15s;
  flex-shrink: 0; margin-bottom: 4px;
}
.cv-resumen-btn:hover {
  background: rgba(217,119,6,.14);
  border-color: var(--cv-amber);
}

/* ══ MAPEO HINT ════════════════════════════════ */
.cv-mapeo-hint {
  display: flex; align-items: flex-start; gap: 6px;
  padding: 12px 16px; margin-bottom: 16px;
  background: rgba(217,119,6,.04);
  border: 1px solid rgba(217,119,6,.12);
  border-radius: 8px;
  font-size: 13px; color: var(--cv-ink-mid); line-height: 1.5;
}

/* ══ FLOATING SIDE BUTTONS ═════════════════════ */
.cv-fab-strip {
  position: fixed; right: 0; top: 50%;
  transform: translateY(-50%); z-index: 90;
  display: flex; flex-direction: column; gap: 4px;
  padding: 6px 0 6px 6px;
  background: white;
  border-radius: 10px 0 0 10px;
  border: 1px solid rgba(217,119,6,.15);
  border-right: none;
  box-shadow: -4px 0 16px rgba(0,0,0,.08);
}
.cv-fab-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 10px; border: none; border-radius: 8px;
  background: rgba(217,119,6,.06); color: var(--cv-amber-dark);
  cursor: pointer; font-family: inherit; transition: all 0.15s;
}
.cv-fab-btn:hover {
  background: rgba(217,119,6,.15);
  transform: translateX(-2px);
}
.cv-fab-btn__label {
  font-size: 8px; font-weight: 800;
  letter-spacing: 0.06em; text-transform: uppercase;
}

/* Transition */
.cv-fab-slide-enter-active, .cv-fab-slide-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.cv-fab-slide-enter-from, .cv-fab-slide-leave-to {
  transform: translateY(-50%) translateX(100%); opacity: 0;
}
.cv-fab-slide-enter-to, .cv-fab-slide-leave-from {
  transform: translateY(-50%) translateX(0); opacity: 1;
}
</style>
