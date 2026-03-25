<!-- src/views/reportes/ReportList.vue (CONVERTEX) -->
<script setup>
import { computed, onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { useReportesStore } from "@/@store/reportes.store"
import { useRouter } from "vue-router"
import { useReportesService } from "@/services/reportes.service"
import { useReportViewerStore } from "@/@store/reportViewer.store"


const router = useRouter()

const reportStore = useReportesStore()
const reportesService = useReportesService()

const isLoading = computed(() => !reportStore.loaded)

const loadingsXls = ref([])
const loadingsPdf = ref([])
const loadingsTxt = ref([])

const { reportes: reportes, loaded } = storeToRefs(reportStore)

onMounted(async () => {
  if (!loaded.value) await reportStore.load({ force: true })
})

const ensureFlush = async reporteid => {
  const viewerStore = useReportViewerStore()

  if (
    viewerStore.reporte?.reporteid === reporteid &&
    viewerStore.hasPendingChanges
  ) {
    console.log(`[ReportList] Flushing ${viewerStore.pendingChangesCount} pending changes for reporte ${reporteid}...`)
    await viewerStore.flushNow()

    // Esperar 500ms para que el backend procese los últimos cambios
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log('[ReportList] Flush completado, procediendo con descarga')
  }
}


// ----------------------
// Acciones
// ----------------------

const exportarPdf = async (rep, index) => {
  loadingsPdf.value[index] = true

  try {
    // ✅ FIX: Flush cambios pendientes antes de descargar
    await ensureFlush(rep.reporteid)

    await reportesService.downloadPdf(rep.reporteid, {
      forceRefresh: true,
    })
  } catch (err) {
    console.error("Error descargando PDF:", err)
  } finally {
    loadingsPdf.value[index] = false
  }
}

const exportarXls = async (rep, index) => {
  loadingsXls.value[index] = true

  try {
    // ✅ FIX: Flush cambios pendientes antes de descargar
    await ensureFlush(rep.reporteid)

    await reportesService.downloadExcel(rep.reporteid, {
      forceRefresh: true,
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
    // ✅ FIX: Flush cambios pendientes antes de descargar
    await ensureFlush(rep.reporteid)

    const tipos = ["esf", "eri", "efe", "ecp"]

    await Promise.all(
      tipos.map(tipo =>
        reportesService.downloadTxt(rep.reporteid, {
          tipo,
          forceRefresh: true,
        }),
      ),
    )
  } catch (err) {
    console.error("Error descargando TXT SRI:", err)
  } finally {
    loadingsTxt.value[index] = false
  }
}

const editarReporte = rep => {
  router.push(`/reportes/reportviewer/ReportViewerPage?action=editar&reporteid=${rep.reporteid}`)
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
                <!-- 🟡 FIX: colspan corregido de 4 → 5 -->
                <td
                  colspan="5"
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
                    size="x-small"
                    :color="
                      (rep.tiporeporte || rep.periodo?.tiporeporte) === 'inicial' ? 'info' :
                      (rep.tiporeporte || rep.periodo?.tiporeporte) === 'consolidado' ? 'primary' :
                      'secondary'
                    "
                    variant="flat"
                  >
                    <VIcon
                      :icon="
                        (rep.tiporeporte || rep.periodo?.tiporeporte) === 'inicial' ? 'tabler-calendar-check' :
                        (rep.tiporeporte || rep.periodo?.tiporeporte) === 'consolidado' ? 'tabler-building-bank' :
                        'tabler-user'
                      "
                      start
                      size="14"
                    />
                    {{
                      (rep.tiporeporte || rep.periodo?.tiporeporte) === 'inicial' ? 'Inicial' :
                      (rep.tiporeporte || rep.periodo?.tiporeporte) === 'consolidado' ? 'Consolidado' :
                      'Individual'
                    }}
                  </VChip>
                </td>
                <td>{{ rep.createdat }}</td>

                <td class="d-flex gap-2">
                  <VBtn
                    icon
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

              <tr v-if="!isLoading && !reportes.length">
                <!-- 🟡 FIX: colspan corregido de 4 → 5 -->
                <td
                  colspan="5"
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
