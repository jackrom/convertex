<script setup>
import { useReportesListStore } from "@/views/pages/supercias/useReportesListStore"
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"
import { ref, watchEffect, computed, onMounted } from 'vue'
import ConfirmDialogReporte from "@core/components/ConfirmDialogReporte.vue"
import { useReportStore } from "@/@store/reportStore"
import { borrarDataDeOtrosPeriodos } from "@core/utils/formatters"
import { descargarPDF, descargarExcel, generarEsfTxt, generarEriTxt, generarEfeTxt, generarEcpTxt } from "@core/utils/Export2Excel"
import { useRouter } from 'vue-router'
import { useIndexedDB } from '@/composables/useIndexedDB'

// ───────────────────────────────
// IndexedDB
// ───────────────────────────────
const { getAll, addItem, clearStore } = useIndexedDB()

// ───────────────────────────────
// Estado de carga para acciones
// ───────────────────────────────
const loadingsXls = ref([])
const loadingsPdf = ref([])
const loadingsTxt = ref([])
const loadingsTurboNotas = ref([])
const loadingsInformeSocietario = ref([])
const totalReporteSupercias = ref(0)
const router = useRouter()

// ───────────────────────────────
// userData / sub
// ───────────────────────────────
let userData = null
try {
  const raw = sessionStorage.getItem('userData')

  userData = raw ? JSON.parse(raw) : null
} catch (err) {
  console.error('No se pudo parsear userData de sessionStorage:', err)
  sessionStorage.removeItem('userData')
  userData = null
}

const aplicaciones = ref(userData?.applications ?? [])
const userId = sessionStorage.getItem('sub') || null

// ───────────────────────────────
// Stores
// ───────────────────────────────
const reportStore = useReportStore()
const empresaListStore = useEmpresaListStore()
const periodoListStore = usePeriodoListStore()
const reporteListStore = useReportesListStore()

// ───────────────────────────────
// Estado de la vista
// ───────────────────────────────
const reportes = ref([])
const empresas = ref([])
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)

const loadings = ref([])
const indice = ref([])
let message = ref(false)
let messageText = ref('')
const counter = ref([])

// ───────────────────────────────
// Helpers IndexedDB para reportes
// ───────────────────────────────
const syncReportesToIndexedDB = async lista => {
  try {
    await clearStore('reportes')

    for (const rep of lista) {
      // asumimos que cada reporte tiene un id único (reporteId o id)
      const key = rep.id ?? rep.reporteId
      if (!key) {
        console.warn('[IndexedDB] Reporte sin id/reporteId, se omite:', rep)
        continue
      }
      await addItem('reportes', { ...rep, _localSyncedAt: new Date().toISOString() }, key)
    }
  } catch (error) {
    console.error('Error sincronizando reportes en IndexedDB:', error)
  }
}

const loadReportesFromIndexedDB = async () => {
  try {
    const stored = await getAll('reportes', null, 1000)

    if (stored.length > 0) {
      reportes.value = stored
      totalReporteSupercias.value = stored.length
      totalPage.value = Math.max(1, Math.ceil(totalReporteSupercias.value / rowPerPage.value))
    } else {
      await fetchReportesFromServer()
    }
  } catch (error) {
    console.error('Error al cargar reportes desde IndexedDB:', error)
    await fetchReportesFromServer()
  }
}

// ───────────────────────────────
// Fetch desde la API + sync IndexedDB
// ───────────────────────────────
const fetchReportesFromServer = async () => {
  if (!userId) {
    console.warn('[Reportes] No hay userId en sesión')
    reportes.value = []
    totalReporteSupercias.value = 0
    totalPage.value = 1

    return
  }

  try {
    const response = await reporteListStore.fetchReportes({ user: userId })

    console.log(response)

    reportes.value = response?.data.data
    totalReporteSupercias.value = reportes.value.length
    totalPage.value = Math.max(1, Math.ceil(totalReporteSupercias.value / rowPerPage.value))

    // Sincronizar en IndexedDB
    await syncReportesToIndexedDB(reportes.value)
  } catch (error) {
    console.error('Error en fetchReportesFromServer (reportes index.vue):', error)
  }
}

// ───────────────────────────────
// Montaje inicial: primero IndexedDB, luego API si hace falta
// ───────────────────────────────
onMounted(() => {
  loadReportesFromIndexedDB()
})

// Asegurar que currentPage no supere totalPage
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// ───────────────────────────────
// Paginación (solo texto, no corta el array)
// ───────────────────────────────
const paginationData = computed(() => {
  const firstIndex = reportes.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0

  const lastIndex = reportes.value.length
    ? Math.min(currentPage.value * rowPerPage.value, totalReporteSupercias.value)
    : 0

  return `Mostrando ${firstIndex} a ${lastIndex} de ${totalReporteSupercias.value} registros`
})

// ───────────────────────────────
// Export Functions
// ───────────────────────────────
const downloadReporteXls = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteListStore.fetchReporteIflucActual(rep),
      reporteListStore.fetchReporteIflucAnterior(rep),
    ])

    const activos = reportStore.getReportData('activoscorrientesifluc')
    if (activos) {
      await descargarExcel()
    } else {
      console.error('No se encontraron datos de activoscorrientes.')
    }
  } catch (error) {
    console.error('Error al descargar el reporte Excel:', error)
  } finally {
    loadings.value[index] = false
  }
}

const downloadReportePdf = async (reporte, index) => {
  console.log('downloadReportePdf', reporte, index)

  try {
    loadingsPdf.value[index] = true

    // 1) Hidratar datos ACTUALES (primero IndexedDB, luego API si no hay nada)
    await useReportesListStore().hydrateReportFromIndexedDBOrApi(reporte)

    // 2) Hidratar datos ANTERIORES (IndexedDB o API)
    await useReportesListStore().hydrateReportAnteriorFromIndexedDBOrApi(reporte)

    // 3) Generar el PDF usando lo que ya está en reportStore
    await descargarPDF(reporte.empresa, reporte.periodo)
  } catch (error) {
    console.error('Error al descargar el reporte PDF:', error)
  } finally {
    loadingsPdf.value[index] = false
  }
}

const downloadReporteTxt = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteListStore.fetchReporteIflucActual(rep),
      reporteListStore.fetchReporteIflucAnterior(rep),
    ])
    await generarEsfTxt()
    await generarEriTxt()
    await generarEfeTxt()
    await generarEcpTxt()
  } catch (error) {
    console.error('Error al descargar el reporte TXT:', error)
  } finally {
    loadings.value[index] = false
  }
}

const downloadReporteTurboNotas = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteListStore.fetchReporteIflucActual(rep),
      reporteListStore.fetchReporteIflucAnterior(rep),
    ])

    const activos = reportStore.getReportData('activoscorrientesifluc')
    if (activos) {
      // Lógica para TurboNotas
    }
  } catch (error) {
    console.error('Error al descargar TurboNotas:', error)
  } finally {
    loadings.value[index] = false
  }
}

// ───────────────────────────────
// Cargar reporte TXT en la pantalla de edición
// ───────────────────────────────
const loadReporteTxt = (reporte, index) => {
  loadings.value[index] = true
  indice.value[index] = 60
  counter.value[index] = setInterval(() => {
    indice.value[index]--
  }, 1000)

  message.value = true
  messageText.value = "Iniciando carga de reporte solicitado"

  borrarDatosOtrosPeriodos()
  buscarReporte(reporte)
}

const borrarDatosOtrosPeriodos = () => {
  borrarDataDeOtrosPeriodos()
}

const buscarReporte = async reporte => {
  message.value = true
  messageText.value = "Buscando y Cargando reporte solicitado"

  /*
  await Promise.all([
    reporteListStore.fetchReporteIflucActual(reporte),
    reporteListStore.fetchReporteIflucAnterior(reporte),
  ])
  */

  messageText.value = "Carga de reporte completada"
  await router.replace('/pages/supercias/txt')
}

const cargarReporteSeleccionado = async reporte => {
  await Promise.all([
    reporteListStore.fetchReporteIflucActual(reporte),
    reporteListStore.fetchReporteIflucAnterior(reporte),
  ])
}

// ───────────────────────────────
// Confirm Dialog Management
// ───────────────────────────────
const isConfirmDialogOpen = ref(false)
const idReporte = ref(0)
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Reportes">
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div
              class="me-3"
              style="width: 80px"
            >
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <VTextField
                v-model="searchQuery"
                placeholder="Search"
                density="compact"
              />
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <thead>
              <tr>
                <th scope="col">
                  EMPRESA
                </th>
                <th scope="col">
                  PERIODO
                </th>
                <th scope="col">
                  NOMBRE
                </th>
                <th scope="col">
                  FECHA
                </th>
                <th scope="col">
                  ACCIONES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(reporte, index) in reportes"
                :key="reporte.reporteId || reporte.id"
              >
                <td class="font-weight-semibold">
                  {{ reporte.empresa?.nombre }}<br>
                  RUC:
                  <span style="font-size:12px;">{{ reporte.empresa?.ruc }}</span>
                </td>
                <td>{{ reporte.periodo?.periodo }}</td>
                <td>txt convertex</td>
                <td>{{ reporte?.createdat }}</td>
                <td
                  class="text-center"
                  style="width: 5rem"
                >
                  <span
                    v-if="loadings[index] || loadingsXls[index] || loadingsTxt[index] || loadingsPdf[index] || loadingsTurboNotas[index] || loadingsInformeSocietario[index]"
                    class="text-error"
                    style="margin-right: 10px;"
                  >
                    Espere ... {{ indice[index] }}
                  </span>

                  <VBtn
                    icon
                    :loading="loadings[index]"
                    :disabled="loadings[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="loadReporteTxt(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-edit"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsXls[index]"
                    :disabled="loadingsXls[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteXls(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-xls"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsTxt[index]"
                    :disabled="loadingsTxt[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteTxt(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-txt"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsPdf[index]"
                    :disabled="loadingsPdf[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReportePdf(reporte, index)">
                    <VIcon
                      size="22"
                      icon="tabler-file-type-pdf"
                    />
                  </VBtn>
                </td>
              </tr>
            </tbody>

            <tfoot v-show="!reportes.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                  No existen reportes creados
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled">{{ paginationData }}</span>
            <VPagination
              v-model="currentPage"
              size="small"
              :total-visible="5"
              :length="totalPage"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialogReporte
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="Estas seguro de que lo que deseas es eliminar este reporte?"
      :id-reporte="idReporte"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}
.text-capitalize {
  text-transform: capitalize;
}
</style>
