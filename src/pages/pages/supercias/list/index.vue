<script setup>
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"
import { ref, watchEffect, computed } from 'vue'
import ConfirmDialogReporte from "@core/components/ConfirmDialogReporte.vue"
import { useReportStore } from "@/@store/reportStore"
import { borrarDataDeOtrosPeriodos } from "@core/utils/formatters"
import { descargarPDF, descargarExcel, generarEsfTxt, generarEriTxt, generarEfeTxt, generarEcpTxt } from "@core/utils/Export2Excel"

import { saveAs } from 'file-saver'

const loadingsXls = ref([])
const loadingsPdf = ref([])
const loadingsTxt = ref([])
const loadingsTurboNotas = ref([])
const loadingsInformeSocietario = ref([])
const totalReporteSupercias = ref(0)
const router = useRouter()

let userData = null
try {
  const raw = sessionStorage.getItem('userData')

  userData = raw ? JSON.parse(raw) : null
} catch (err) {
  console.error('No se pudo parsear userData de sessionStorage:', err)
  sessionStorage.removeItem('userData')
  userData = null
}

console.log('userData', userData)

const aplicaciones = ref(userData?.applications ?? [])

// ───────────────────────────────
// sub de Keycloak (es string, NO JSON)
// ───────────────────────────────
const userId = sessionStorage.getItem('sub') || null

console.log('userId', userId)


const reportStore = useReportStore()
const reportes = ref([])
const empresas = ref([])
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)

// const totalReporteSupercias = ref(0)
const loadings = ref([])

const indice = ref([])
let message = ref(false)
let messageText = ref('')
const counter = ref([])

const empresaListStore = useEmpresaListStore()
const periodoListStore = usePeriodoListStore()
const reporteSuperciasListStore = useSuperciasListStore()

const fetchReportes = async () => {
  try {
    const response = await reporteSuperciasListStore.fetchReportes({ user: userId })

    console.log('respuesta reportes', response.data.data)

    reportes.value = response.data.data
  } catch (error) {
    console.error('Error en fetchEmpresas (index.vue):', error)
  }
}

watchEffect(fetchReportes)

console.log("reportes: ", reportes.value)

watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed(() => {
  const firstIndex = reportes.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = reportes.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalReporteSupercias.value } registros`
})

// Export Functions
const downloadReporteXls = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
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

const downloadReportePdf = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
    ])
    await descargarPDF()
  } catch (error) {
    console.error('Error al descargar el reporte PDF:', error)
  } finally {
    loadings.value[index] = false
  }
}

const downloadReporteTxt = async (rep, index) => {
  try {
    loadings.value[index] = true
    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
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
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
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


const loadReporteTxt = (reporte, index) => {
  console.log(reporte)

  loadings.value[index] = true
  indice.value[index] = 60
  counter.value[index] = setInterval(() => {
    indice.value[index] --
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
    reporteSuperciasListStore.fetchReporteIflucActual(reporte),
    reporteSuperciasListStore.fetchReporteIflucAnterior(reporte),
  ])
   */

  messageText.value = "Carga de reporte completada"
  await router.replace('/pages/supercias/txt')
}

const cargarReporteSeleccionado = async reporte => {
  await Promise.all([
    reporteSuperciasListStore.fetchReporteIflucActual(reporte),
    reporteSuperciasListStore.fetchReporteIflucAnterior(reporte),
  ])
}


// Confirm Dialog Management
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
                :key="reporte.reporteId"
              >
                <td class="font-weight-semibold">
                  {{ reporte.empresa?.nombre }}<br>RUC: <span style="font-size:12px;">{{ reporte.empresa?.ruc }}</span>
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
                  >Espere ... {{ indice[index] }}</span>
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
                    @click="downloadReportePdf(reporte, index)"
                  >
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
