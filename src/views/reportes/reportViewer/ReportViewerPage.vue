<!-- src/views/reportes/reportViewer/ReportViewerPage.vue -->
<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useSafeI18n } from "@/composables/useSafeI18n"
import { useReportViewerStore } from "@/@store/reportViewer.store"
import ReportSectionByValues from "./ReportSectionByValues.vue"
import TxtMapeo101PA from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo101PA.vue"
import TxtMapeo1 from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo1.vue"
import TxtEstadosDeCambiosEnElPatrimonio from "@/views/reportes/reportViewer/components/ecp/TxtEstadosDeCambiosEnElPatrimonio.vue"
import ResumenERI from "@/views/reportes/reportViewer/components/ResumenERI.vue"
import ResumenESF from "@/views/reportes/reportViewer/components/ResumenESF.vue"
import ResumenSaldosInicialesECP from "@/views/reportes/reportViewer/components/ResumenSaldosInicialesECP.vue"
import ResumenSaldosFinalesECP from "@/views/reportes/reportViewer/components/ResumenSaldosFinalesECP.vue"
import ResumenEFE from "@/views/reportes/reportViewer/components/ResumenEFE.vue"

const route = useRoute()
const store = useReportViewerStore()

window.__store = store

const { safeT } = useSafeI18n("global")

const currentTab = ref("esf")

const hasPendingChanges = computed(() => store.hasPendingChanges)
const pendingChangesCount = computed(() => store.pendingChangesCount)
const saving = computed(() => store.saving)
const reporte = computed(() => store.current)
const loading = computed(() => store.loading)

const esfValues = computed(
  () => reporte.value?.values?.esfvalues ?? [],
)

const ecpValues = computed(
  () => reporte.value?.values?.ecpvalues ?? [],
)

const efeValues = computed(
  () => reporte.value?.values?.efemdvalues ?? [],
)

// Lista reactiva de ERI
const eriValues = computed(
  () => reporte.value?.values?.erivalues ?? [],
)

// Info cabecera
const empresaNombre = computed(
  () => reporte.value?.empresa?.nombre ?? reporte.value?.empresaid ?? "",
)

const esfOk = ref(false)
const eriOk = ref(false)
const ecpOk = ref(false)
const efeOk = ref(false)

let cuadreTimer = null
let cuadreTimer2 = null

const refreshCuadres = () => {
  if (cuadreTimer) clearTimeout(cuadreTimer)
  if (cuadreTimer2) clearTimeout(cuadreTimer2)

  // Primera pasada: después de que debounces terminen (300ms + margen)
  cuadreTimer = setTimeout(() => {
    esfOk.value = store.calculateEsfCuadre() === 1
    eriOk.value = store.calculateEriCuadre() === 1
    ecpOk.value = store.calculateEcpCuadre() === 1
    efeOk.value = store.calculateEfeCuadre() === 1
  }, 800)

  // Segunda pasada: por si las fórmulas EFE tardaron más en propagarse
  cuadreTimer2 = setTimeout(() => {
    efeOk.value = store.calculateEfeCuadre() === 1
    console.log('efeOk: ', store.calculateEfeCuadre())
  }, 1500)
}

watch(
  [esfValues, eriValues, ecpValues, efeValues],
  () => {
    refreshCuadres()
  },
  { immediate: true },
)

const showResumenEsf = ref(false)
const showEriResumen = ref(false)
const showResumenEcpSI = ref(false)
const showResumenEcpSF = ref(false)
const showResumenEfe = ref(false)



const activePanel = ref('')

// --- HELPERS PARA RESUMEN --------------------------------------

const panel = ref(0)
const panel2 = ref(19)
const panel3 = ref(19)
const panel4 = ref(19)
const panel5 = ref(19)
const panel6 = ref(0)
const panel7 = ref(0)

// let patrimonio = ref('0')

const periodoTexto = computed(() =>
  String(reporte.value?.periodo?.periodo ?? reporte.value?.periodoid ?? ""),
)

const esConsolidado = computed(() => {
  // prioridad: si el reporte trae el flag directo
  if (typeof reporte.value?.esconsolidado !== "undefined")
    return Boolean(reporte.value.esconsolidado)

  // fallback: si el flag viene en el periodo asociado
  if (typeof reporte.value?.periodo?.esconsolidado !== "undefined")
    return Boolean(reporte.value.periodo.esconsolidado)

  // si no hay nada, asumir NO consolidado
  return false
})

function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    )

    return JSON.parse(jsonPayload)
  } catch {
    return null
  }
}

const token = sessionStorage.getItem("accessToken") // o donde lo guardes
const claims = parseJwt(token)

const displayName =
  claims?.name ||
  claims?.preferred_username ||
  [claims?.given_name, claims?.family_name].filter(Boolean).join(" ") ||
  claims?.email ||
  claims?.sub ||
  "—"



// Cargar al montar
onMounted(async () => {
  const paramId = route.query.reporteid ?? route.params.reporteid
  const reporteId = typeof paramId === "string" ? Number(paramId) : paramId

  if (!Number.isFinite(reporteId)) {
    console.error("[ReportViewer] reporteid inválido en ruta:", paramId)

    return
  }

  try {
    await store.load(reporteId)
  } catch (err) {
    console.error("[ReportViewer] error al cargar reporte", err)
  }
})

// Si cambia el :reporteid en la URL, recargar sin recrear el componente
watch(
  () => route.query.reporteid,
  async newId => {
    const reporteId = typeof newId === "string" ? Number(newId) : newId

    if (!Number.isFinite(reporteId))
      return

    await store.load(reporteId)
  },
)


// Maneja los cambios emitidos por ReportSectionByValues (Individuales y en Batch)
const onChangeValue = payload => {
  console.log("onChangeValue", payload)

  // ✅ Soporte para import masivo
  if (payload && Array.isArray(payload.batch)) {
    for (const p of payload.batch) {
      const tipoModel = p.tipo === "efe" ? "efemd" : p.tipo
      const nombrecampo = p.row?.nombrecampo ?? p.id
      if (!nombrecampo) continue
      store.updateValue(tipoModel, nombrecampo, p.valor, p.meta || {})
    }

    return
  }

  // ✅ Caso normal (un solo cambio)
  const tipoModel = payload.tipo === "efe" ? "efemd" : payload.tipo
  const nombrecampo = payload.row?.nombrecampo ?? payload.id
  if (!nombrecampo) return

  store.updateValue(tipoModel, nombrecampo, payload.valor, payload.meta || {})
}
</script>

<template>
  <section class="report-viewer">
    <!-- ================= CABECERA STICKY ================= -->
    <VCard class="report-header">
      <VCardTitle class="d-flex align-center justify-space-between">
        <div class="d-flex align-center gap-2">
          <span>
            TXT Convertex – Reporte #{{ reporte?.reporteid ?? route.params.reporteid }}
          </span>

          <VChip
            v-if="reporte"
            size="small"
            :color="esConsolidado ? 'primary' : 'secondary'"
            variant="flat"
            class="text-caption"
          >
            <VIcon
              :icon="esConsolidado ? 'tabler-building-bank' : 'tabler-user'"
              start
              size="16"
            />
            {{ esConsolidado ? 'Consolidado' : 'Individual' }}
          </VChip>
        </div>

        <!-- 🔔 Estado de sincronización -->
        <div class="d-flex align-center gap-2">
          <!-- Mostramos cuando hay cambios pendientes -->
          <VChip
            v-if="hasPendingChanges"
            size="small"
            color="warning"
            variant="flat"
            class="text-caption"
          >
            <VIcon
              icon="tabler-cloud-off"
              start
              size="16"
            />
            {{ pendingChangesCount }} cambios pendientes
          </VChip>

          <!-- Opcional: feedback cuando está guardando -->
          <VChip
            v-else-if="saving"
            size="small"
            color="primary"
            variant="outlined"
            class="text-caption"
          >
            <VIcon
              icon="tabler-cloud-upload"
              start
              size="16"
            />
            Sincronizando…
          </VChip>
        </div>
      </VCardTitle>

      <VCardText>
        <div class="d-flex flex-wrap gap-4 align-center">
          <div>
            <div class="text-caption text-medium-emphasis">
              Empresa
            </div>
            <div class="text-subtitle-1">
              {{ empresaNombre || '—' }}
            </div>
          </div>

          <div>
            <div class="text-caption text-medium-emphasis">
              Periodo
            </div>
            <div class="text-subtitle-1">
              {{ periodoTexto || '—' }}
            </div>
          </div>

          <div>
            <div class="text-caption text-medium-emphasis">
              Tipo
            </div>
            <div class="text-subtitle-1">
              {{ esConsolidado ? 'Consolidado' : 'Individual' }}
            </div>
          </div>

          <div>
            <div class="text-caption text-medium-emphasis">
              Usuario
            </div>
            <div class="text-subtitle-1">
              {{ displayName }}
            </div>
          </div>

          <div>
            <div class="text-caption text-medium-emphasis">
              Módulo
            </div>
            <div class="text-subtitle-1">
              <span style="color: #D87E3A;" class="text-uppercase">{{ currentTab }}</span>
            </div>
          </div>

          <div>
            <div class="text-caption text-medium-emphasis">
              Panel Activo
            </div>
            <div class="text-subtitle-1">
              <span class="text-uppercase">{{ (activePanel) ? activePanel : 'NO PANEL ACTIVO' }}</span>
            </div>
          </div>
        </div>
      </VCardText>
    </VCard>

    <!-- ================= CONTENIDO SCROLLEABLE ================= -->
    <!-- TABS ESF / ERI / ECP / EFE -->
    <main class="report-content">
      <VCard>
        <VTabs v-model="currentTab">
          <VTab value="mapeo1">
            MAPEO101
          </VTab>
          <VTab value="esf">
            ESF
            <VIcon
              v-if="esfOk"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <VTab value="eri">
            ERI
            <VIcon
              v-if="eriOk"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <VTab value="ecp">
            ECP
            <VIcon
              v-if="ecpOk"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <VTab value="efe">
            EFE
            <VIcon
              v-if="efeOk"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
        </VTabs>

        <VDivider />

        <VCardText>
          <VWindow v-model="currentTab">
            <!-- MAPEO 1 -->
            <VWindowItem value="mapeo1" eager>
              <h3
                class="ml-4"
                style="color:#DB7E3A"
              >
                Si deseas IMPORTAR mediante EXCEL la información del Estado de Situación Financiera (ESF) y Estado de Resultado Integral (ERI) utilice esta opción. Caso contrario, puede ingresar el ESF y ERI la información manualmente.
              </h3>
              <VDivider />
              <VExpansionPanels
                v-model="panel7"
                eager
              >
                <VExpansionPanel eager>
                  <VExpansionPanelTitle>
                    DATOS PERIODO ACTUAL
                  </VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <TxtMapeo1
                      :ecp-values="ecpValues"
                      :esf-values="esfValues"
                      :efe-values="efeValues"
                      :eri-values="eriValues"
                      :periodo="periodoTexto"
                      :empresa="empresaNombre"
                      @change-value="onChangeValue"
                    />
                  </VExpansionPanelText>
                </VExpansionPanel>
                <VExpansionPanel eager>
                  <VExpansionPanelTitle>
                    DATOS PERIODO ANTERIOR
                  </VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <TxtMapeo101PA
                      :ecp-values="ecpValues"
                      :esf-values="esfValues"
                      :efe-values="efeValues"
                      :eri-values="eriValues"
                      :periodo="periodoTexto"
                      :empresa="empresaNombre"
                      @change-value="onChangeValue"
                    />
                  </VExpansionPanelText>
                </VExpansionPanel>
              </VExpansionPanels>
            </VWindowItem>
            <!-- ESF -->
            <VWindowItem value="esf" eager>
              <div class="sticky-actions">
                <VBtn
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="button-resumen"
                  @click="showResumenEsf = true"
                >
                  <VIcon
                    icon="tabler-report-analytics"
                    start
                  />
                  Resumen ESF
                </VBtn>
              </div>

              <ReportSectionByValues
                :active-panel="activePanel"
                tipo="esf"
                :title="safeT('supercias.reports.esfTitle', 'Estado de Situación Financiera (ESF)')"
                :values="esfValues"
                :loading="loading"
                :current-tab="currentTab"
                @update:active-panel="activePanel = $event"
                @change-value="onChangeValue"
              />
            </VWindowItem>

            <!-- ERI -->
            <VWindowItem value="eri" eager>
              <!-- Botón para abrir resumen ERI -->
              <div class="sticky-actions">
                <VBtn
                  class="button-resumen"
                  size="small"
                  variant="outlined"
                  prepend-icon="tabler-file-description"
                  @click="showEriResumen = true"
                >
                  Ver resumen ERI
                </VBtn>
              </div>

              <ReportSectionByValues
                :active-panel="activePanel"
                tipo="eri"
                title="Estado de Resultados Integrales (ERI)"
                :values="eriValues"
                :loading="loading"
                :current-tab="currentTab"
                @change-value="onChangeValue"
                @update:active-panel="activePanel = $event"
              />
            </VWindowItem>

            <!-- ECP -->
            <VWindowItem value="ecp" eager>
              <div class="sticky-actions">
                <VBtn
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="button-resumen-ecp-si"
                  @click="showResumenEcpSI = true"
                >
                  <VIcon
                    icon="tabler-report-analytics"
                    start
                  />
                  ECP Saldos Iniciales
                </VBtn>
                <VBtn
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="button-resumen-ecp-sf"
                  @click="showResumenEcpSF = true"
                >
                  <VIcon
                    icon="tabler-report-analytics"
                    start
                  />
                  ECP Saldos Finales
                </VBtn>
              </div>
              <TxtEstadosDeCambiosEnElPatrimonio
                :active-panel="activePanel"
                tipo="ecp"
                :values="ecpValues"
                :periodo="periodoTexto"
                :empresa="empresaNombre"
                :data="reporte?.patrimonio ?? {}"
                :current-tab="currentTab"
                title=""
                @change-value="onChangeValue"
                @update:active-panel="activePanel = $event"
              />
            </VWindowItem>

            <!-- EFE MD -->
            <VWindowItem value="efe" eager>
              <div class="sticky-actions">
                <VBtn
                  size="small"
                  color="primary"
                  variant="outlined"
                  class="button-resumen"
                  @click="showResumenEfe = true"
                >
                  <VIcon
                    icon="tabler-report-analytics"
                    start
                  />
                  Resumen EFE
                </VBtn>
              </div>
              <ReportSectionByValues
                :active-panel="activePanel"
                tipo="efe"
                :title="safeT('supercias.reports.efeMdTitle', 'Estado de Flujos de Efectivo (EFE) – Método Directo')"
                :values="efeValues"
                :loading="loading"
                :current-tab="currentTab"
                @change-value="onChangeValue"
                @update:active-panel="activePanel = $event"
              />
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </main>


    <!-- DIALOGO RESUMEN ESF -->
    <ResumenESF
      v-model="showResumenEsf"
      :esf-cuadre="esfOk"
      :values="esfValues"
      @update:show-resumen-esf="showResumenEsf = $event"
    />

    <!-- Diálogo resumen ERI -->
    <ResumenERI
      v-model="showEriResumen"
      :eri-cuadre="eriOk"
      :values="eriValues"
      @update:show-eri-resumen="showEriResumen = $event"
    />

    <!-- Diálogo resumen ECP -->
    <ResumenSaldosInicialesECP
      v-model="showResumenEcpSI"
      :esf-values="esfValues"
      :ecp-values="ecpValues"
      @update:showResumenEcpSI="showResumenEcpSI = $event"
      @update:ecpSICuadre="ecpSICuadre = $event"
    />

    <ResumenSaldosFinalesECP
      v-model="showResumenEcpSF"
      :esf-values="esfValues"
      :ecp-values="ecpValues"
      @update:showResumenEcpSF="showResumenEcpSF = $event"
      @update:ecpSFCuadre="ecpSFCuadre = $event"
    />

    <ResumenEFE
      v-model="showResumenEfe"
      :efe-cuadre="efeOk"
      :esf-values="esfValues"
      :eri-values="eriValues"
      :efe-values="efeValues"
      :showResumenEfe="showResumenEfe"
      @update:showResumenEfe="showResumenEfe = $event"
      @update:efeCuadre="efeCuadre = $event"
    />
  </section>
</template>

<style scoped>
.report-viewer {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.report-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid #eee;
}

.report-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0px;
}

.sticky-actions {
  position: sticky;
  top: 8px;
  z-index: 10;
  background: white;
  padding-bottom: 8px;
}

.button-resumen {
  position: fixed;
  z-index: 9999;
  background-color: rgb(255, 255, 255);
  margin-top: -60px;
  right: 80px;
}

.button-resumen-ecp-si {
  position: fixed;
  z-index: 9999;
  background-color: rgb(255, 255, 255);
  margin-top: -60px;
  right: 350px;
}

.button-resumen-ecp-sf {
  position: fixed;
  z-index: 9999;
  background-color: rgb(255, 255, 255);
  margin-top: -60px;
  right: 80px;
}
</style>
