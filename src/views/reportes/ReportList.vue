<script setup>
import { computed, onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { useReportesStore } from "@/@store/reportes.store"
import { useRouter } from "vue-router"
import { useReportesService } from "@/services/reportes.service"


const router = useRouter()

const reportStore = useReportesStore()
const reportesService = useReportesService()

// const { reportes, load, remove, getOne } = useReportesList()

const loadingRow = ref({})
const isLoading = computed(() => !reportStore.loaded)

const loadingsXls = ref([])
const loadingsPdf = ref([])
const loadingsTxt = ref([])
const loadingsTurboNotas = ref([])
const loadingsInformeSocietario = ref([])
const loadings = ref([])
const indice = ref([])
let message = ref(false)
let messageText = ref('')
const counter = ref([])

const { reportes: reportes, loaded } = storeToRefs(reportStore)

onMounted(async () => {
  if (!loaded.value) await reportStore.load({ force: true })
})

console.log('reportes: ', reportes)

// ----------------------
// Acciones
// ----------------------


const exportarPdf = async (rep, index) => {
  loadingsPdf.value[index] = true

  try {
    // 🔹 Si NO envías "tipo" → el backend genera un PDF con TODOS los estados (esf, eri, ecp, efemd)
    await reportesService.downloadPdf(rep.reporteid, {
      // tipo: "esf",      // si algún día quieres solo un estado en concreto
      forceRefresh: true,  // para forzar regeneración; pon false si quieres respetar caché
    })
  } catch (err) {
    console.error("Error descargando PDF:", err)
  } finally {
    loadingsPdf.value[index] = false
  }
}

const exportarXls = async (rep, index) => {
  console.log(rep)

  loadingsXls.value[index] = true

  try {
    await reportesService.downloadExcel(rep.reporteid, {
      forceRefresh: true, // para regenerar siempre
    })
  } catch (err) {
    console.error("Error descargando Excel:", err)
  } finally {
    loadingsXls.value[index] = false
  }
}

const exportarTxt = async (rep, index) => {
  loadingsTxt.value[index] = true

  try {
    // 🔹 Si quieres que el botón siga generando los 4 archivos como antes:
    const tipos = ["esf", "eri", "efe", "ecp"]

    await Promise.all(
      tipos.map(tipo =>
        reportesService.downloadTxt(rep.reporteid, {
          tipo,
          forceRefresh: true, // o false si quieres respetar el caché
        }),
      ),
    )

    // Si quisieras solo ESF, sería simplemente:
    // await reportesService.downloadTxt(rep.reporteid, { tipo: "esf", forceRefresh: true })
  } catch (err) {
    console.error("Error descargando TXT SRI:", err)
  } finally {
    loadingsTxt.value[index] = false
  }
}

const editarReporte = rep => {
  console.log('REPORTE: ', rep)

  // router.push(`/reportes/reportviewer/ReportViewerPage?action=editar&reporteid=${rep.reporteid}`)
  router.push({
    path: '/reportes/reportviewer/ReportViewerPage',
    query: {
      action: 'editar',
      reporteid: rep.reporteid,
    },
  })
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle class="d-flex justify-space-between align-center">
            <span class="text-h6">Reportes creados</span>
          </VCardTitle>

          <VTable>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Periodo</th>
                <th>Tipo EEFF</th>
                <th>Fecha</th>
                <th style="width:180px">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="isLoading">
                <td
                  colspan="4"
                  class="text-center py-6"
                >
                  Cargando reportes...
                </td>
              </tr>
              <tr
                v-for="(rep, index) in reportes"
                v-else
                :key="rep.reporteid"
              >
                <td>
                  {{ rep.empresa?.nombre }} <br>
                  <small>{{ rep.empresa?.ruc }}</small>
                </td>
                <td>{{ rep.periodo?.periodo }}</td>
                <td>
                  <VChip
                    v-if="rep.esconsolidado"
                    size="x-small"
                    color="primary"
                    variant="flat"
                  >
                    Consolidado
                  </VChip>
                  <VChip
                    v-else
                    size="x-small"
                    color="secondary"
                    variant="flat"
                  >
                    Individual
                  </VChip>
                </td>
                <td>{{ rep.createdat }}</td>

                <td class="d-flex gap-2">
                  <VBtn
                    icon
                    :loading="loadings[index]"
                    :disabled="loadings[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    style="margin-top: 13px;"
                    @click="editarReporte(rep)"
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
                    style="margin-top: 13px;"
                    @click="exportarXls(rep, index)"
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
                    style="margin-top: 13px;"
                    @click="exportarTxt(rep, index)"
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
                    style="margin-top: 13px;"
                    @click="exportarPdf(rep, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-pdf"
                    />
                  </VBtn>
                </td>
              </tr>

              <tr v-if="!reportes.length">
                <td
                  colspan="4"
                  class="text-center"
                >
                  No hay reportes creados
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>
