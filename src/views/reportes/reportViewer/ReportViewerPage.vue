<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useSafeI18n } from "@/composables/useSafeI18n"
import { useReportViewerStore } from "@/@store/reportViewer.store"
import ReportSectionByValues from "./ReportSectionByValues.vue"
import TxtMapeo101PA from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo101PA.vue"
import TxtMapeo1 from "@/views/reportes/reportViewer/components/mapeo/TxtMapeo1.vue"
import TxtEstadosDeCambiosEnElPatrimonio from "@/views/reportes/reportViewer/components/ecp/TxtEstadosDeCambiosEnElPatrimonio.vue"
import { useReportStore } from "@/@store/reportStore"
import ResumenERI from "@/views/reportes/reportViewer/components/ResumenERI.vue"
import ResumenESF from "@/views/reportes/reportViewer/components/ResumenESF.vue"
import ResumenSaldosInicialesECP from "@/views/reportes/reportViewer/components/ResumenSaldosInicialesECP.vue";
import ResumenSaldosFinalesECP from "@/views/reportes/reportViewer/components/ResumenSaldosFinalesECP.vue";
import ResumenEFE from "@/views/reportes/reportViewer/components/ResumenEFE.vue";

const route = useRoute()
const store = useReportViewerStore()
const { safeT } = useSafeI18n("global")

const currentTab = ref("esf")

const hasPendingChanges = computed(() => store.hasPendingChanges)
const pendingChangesCount = computed(() => store.pendingChangesCount)
const saving = computed(() => store.saving)

const ecpCuadre = ref(false)
const efeCuadre = ref(false)
const esfCuadre = ref(false)

const showResumenEsf = ref(false)
const showEriResumen = ref(false)
const showResumenEcpSI = ref(false)
const showResumenEcpSF = ref(false)
const showResumenEfe = ref(false)

// 👇 ahora el store expone "current"
const reporte = computed(() => store.current)
const loading = computed(() => store.loading)

const reportStore = useReportStore()

const activePanel = ref(null)

// --- HELPERS PARA RESUMEN --------------------------------------

const panel = ref(0)
const panel2 = ref(19)
const panel3 = ref(19)
const panel4 = ref(19)
const panel5 = ref(19)
const panel6 = ref(0)
const panel7 = ref(0)

// let patrimonio = ref('0')

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

const periodoTexto = computed(
  () => reporte.value?.periodo?.periodo ?? reporte.value?.periodoid ?? "",
)

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

// Observar los cambios en los valores de ERI
// Watcher para los cambios en ERI
watch(
  () => eriValues.value,
  newValues => {
    // Recalcular el resumen ERI cuando los valores cambien
    // Evitar que se actualice en tiempo real con cada cambio

    // console.log('ERI values have been updated:', newValues)

    // Aquí puedes hacer solo las actualizaciones necesarias de los cálculos relacionados con ERI
    // Solo actualiza valores si se detectan cambios en los campos específicos de ERI
    // No sincronices o recalcules todos los campos de ERI a menos que sea necesario
  },
  { deep: true })

const openResumenEsf = () => {
  console.log("Abriendo el panel Resumen ESF")
  showResumenEsf.value = true

  console.log('showResumenEsf: ', showResumenEsf.value)
}

const openResumenEcpSI = () => {
  console.log("Abriendo el panel Resumen ECP")
  showResumenEcpSI.value = true

  console.log('showResumenEcpSSI: ', showResumenEcpSI.value)
}

const openResumenEcpSF = () => {
  console.log("Abriendo el panel Resumen ECP")
  showResumenEcpSF.value = true

  console.log('showResumenEcpSSI: ', showResumenEcpSF.value)
}

const openResumenEfe = () => {
  console.log("Abriendo el panel Resumen EFE")
  showResumenEfe.value = true

  console.log('showResumenEfe: ', showResumenEfe.value)
}

// Maneja los cambios emitidos por ReportSectionByValues
const onChangeValue = payload => {
  const tipoModel = payload.tipo === "efe" ? "efemd" : payload.tipo
  const nombrecampo = payload.row?.nombrecampo ?? payload.id

  if (!nombrecampo) {
    return
  }

  store.updateValue(tipoModel, nombrecampo, payload.valor, payload.meta || {})
}
</script>

<template>
  <section style="margin-top: 130px;">
    <!-- CABECERA DEL REPORTE -->
    <VCard
      class="mb-4"
      style="position: fixed; z-index: 2; width: 83.5%; margin-top: -150px;"
    >
      <VCardTitle class="d-flex align-center justify-space-between">
        <div>
          TXT Convertex – Reporte #{{ reporte?.reporteid ?? route.params.reporteid }}
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
              Usuario
            </div>
            <div class="text-subtitle-1">
              {{ reporte?.userid ?? '—' }}
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

    <!-- TABS ESF / ERI / ECP / EFE -->
    <VCard>
      <VTabs v-model="currentTab">
        <VTab value="mapeo1">
          MAPEO101
        </VTab>
        <VTab value="esf">
          ESF
          <VIcon
            v-if="esfCuadre"
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
            v-if="eriCuadre"
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
            v-if="ecpCuadre"
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
            v-if="efeCuadre"
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
          <VWindowItem value="mapeo1">
            <h3
              class="ml-4"
              style="color:#477130"
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
                  <TxtMapeo1 />
                </VExpansionPanelText>
              </VExpansionPanel>
              <VExpansionPanel eager>
                <VExpansionPanelTitle>
                  DATOS PERIODO ANTERIOR
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <TxtMapeo101PA />
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VWindowItem>
          <!-- ESF -->
          <VWindowItem value="esf">
            <div class="d-flex justify-end mb-4">
              <VBtn
                size="small"
                color="primary"
                variant="outlined"
                style="position: fixed; z-index: 9999; background-color: #fff; margin-top: -60px;"
                @click="openResumenEsf"
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
          <VWindowItem value="eri">
            <!-- Botón para abrir resumen ERI -->
            <div class="d-flex justify-end mb-2">
              <VBtn
                style="position: fixed; z-index: 9999; background-color: #fff; margin-top: -60px;"
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
          <VWindowItem value="ecp">
            <div class="d-flex justify-end mb-4">
              <VBtn
                size="small"
                color="primary"
                variant="outlined"
                style="position: fixed; display: inline; z-index: 9999; background-color: #fff; margin-top: -60px;"
                @click="openResumenEcpSI"
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
                style="position: fixed; display: inline; z-index: 9999; background-color: #fff; margin-top: -60px; margin-right: 230px;"
                @click="openResumenEcpSF"
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
              :loading="loading"
              :data="reporte?.patrimonio ?? {}"
              :current-tab="currentTab"
              title=""
              @change-value="onChangeValue"
              @update:active-panel="activePanel = $event"
            />
          </VWindowItem>

          <!-- EFE MD -->
          <VWindowItem value="efe">
            <div class="d-flex justify-end mb-4">
              <VBtn
                size="small"
                color="primary"
                variant="outlined"
                style="position: fixed; z-index: 9999; background-color: #fff; margin-top: -60px;"
                @click="openResumenEfe"
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

    <!-- DIALOGO RESUMEN ESF -->
    <ResumenESF
      v-model="showResumenEsf"
      :esf-cuadre="esfCuadre"
      :values="esfValues"
      :showResumenEsf="showResumenEsf"
      @update:showResumenEsf="showResumenEsf = $event"
      @update:esfCuadre="updateEsfCuadre"
    />

    <!-- Diálogo resumen ERI -->
    <ResumenERI
      v-model="showEriResumen"
      :eri-cuadre="eriCuadre"
      :values="eriValues"
      :showEriResumen="showEriResumen"
      @update:showEriResumen="showEriResumen = $event"
      @update:eriCuadre="updateEriCuadre"
    />

    <!-- Diálogo resumen ECP -->
    <ResumenSaldosInicialesECP
      v-model="showResumenEcpSI"
      :esf-values="esfValues"
      :ecp-values="ecpValues"
      :showResumenEcpSI="showResumenEcpSI"
      @update:showResumenEcpSI="showResumenEcpSI = $event"
    />

    <ResumenSaldosFinalesECP
      v-model="showResumenEcpSF"
      :esf-values="esfValues"
      :ecp-values="ecpValues"
      :showResumenEcpSF="showResumenEcpSF"
      @update:showResumenEcpSF="showResumenEcpSF = $event"
    />

    <ResumenEFE
      v-model="showResumenEfe"
      :efe-cuadre="efeCuadre"
      :esf-values="esfValues"
      :eri-values="eriValues"
      :efe-values="efeValues"
      :showResumenEfe="showResumenEfe"
      @update:showResumenEfe="showResumenEfe = $event"
      @update:efeCuadre="efeCuadre = $event"
    />
  </section>
</template>
