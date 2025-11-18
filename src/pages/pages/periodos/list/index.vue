<script setup>
import AddNewPeriodoDrawer from '@/views/pages/periodos/list/AddNewPeriodo.vue'
import { usePeriodoListStore } from '@/views/pages/periodos/usePeriodoListStore'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import ConfirmDialog from '@core/components/ConfirmDialog.vue'
import ConfirmDuplicatePeriodoDialog from "@core/components/ConfirmDuplicatePeriodoDialog.vue"
import { ref, computed, watchEffect, onMounted } from "vue"
import { saveData, loadData } from '@/composables/useIndexedDB' // Helper functions for IndexedDB

const router = useRouter()

const periodoListStore = usePeriodoListStore()
const empresaListStore = useEmpresaListStore()
const superciasListStore = useSuperciasListStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalPeriodos = ref(0)
const totalEmpresas = ref(0)
const periodos = ref([])
const empresas = ref([])
const loading = ref([])
const indice = ref([])
const counter = ref([])
const indiceDuplicarPeriodo = ref()

let userData = null
try {
  const raw = sessionStorage.getItem('userData')
  userData = raw ? JSON.parse(raw) : null
} catch (err) {
  console.error('No se pudo parsear userData de sessionStorage:', err)
  sessionStorage.removeItem('userData')
  userData = null
}

// sub: NO se parsea, es un string plano
const userId = sessionStorage.getItem('sub') || null

const fetchEmpresas = async () => {
  try {
    const response = await empresaListStore.fetchEmpresas({ user: userId })
    const empresasArray = Array.isArray(response?.data) ? response.data : []
    empresas.value = empresasArray
    totalEmpresas.value = empresasArray.length
    totalPage.value = Math.max(1, Math.ceil(empresasArray.length / rowPerPage.value))
    await saveData('empresas', empresasArray)  // Save empresas data to IndexedDB
  } catch (error) {
    console.error('Error fetchEmpresas (index.vue):', error)
  }
}

// Watch Effect to load empresas from IndexedDB
onMounted(async () => {
  const savedEmpresas = await loadData('empresas')
  if (savedEmpresas) {
    empresas.value = savedEmpresas
  } else {
    fetchEmpresas() // Fetch empresas from API if no data in IndexedDB
  }
})

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value
})

// Fetching periodos from server or IndexedDB
const fetchPeriodos = async () => {
  try {
    const response = await periodoListStore.fetchPeriodos({ user: userId })
    const lista = Array.isArray(response?.periodos) ? response.periodos : []
    const tp = response?.totalPage ?? 1
    const tot = response?.totalPeriodos ?? lista.length

    periodos.value = lista
    totalPage.value = tp
    totalPeriodos.value = tot

    periodos.value.forEach(periodoExterno => {
      const periodoSiguiente = periodoExterno.periodo + 1
      periodoExterno.isDuplicated = periodos.value.some(
        periodoInterno =>
          periodoInterno.periodo === periodoSiguiente &&
          periodoInterno.empresaid === periodoExterno.empresaid,
      )
    })
    await saveData('periodos', lista)  // Save periodos to IndexedDB
  } catch (error) {
    console.error('Error fetchPeriodos (index.vue):', error)
  }
}

onMounted(async () => {
  const savedPeriodos = await loadData('periodos')
  if (savedPeriodos) {
    periodos.value = savedPeriodos
  } else {
    fetchPeriodos() // Fetch periodos from API if no data in IndexedDB
  }
})

watchEffect(fetchPeriodos)

const isAddNewPeriodoDrawerVisible = ref(false)

onMounted(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value
})

// Computing pagination data
const paginationData = computed(() => {
  const firstIndex = periodos.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = periodos.value.length + (currentPage.value - 1) * rowPerPage.value
  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalPeriodos.value } registros`
})

// Eliminar Periodo
const isConfirmDialogOpen = ref(false)
const isConfirmDialogoDuplicateOpen = ref(false)
const idPeriodo = ref('0')

const deletePeriodoDB = id => {
  periodoListStore.eliminarPeriodoSeleccionado(id).then(res => {
    fetchPeriodos()
  })
}

const duplicarPeriodo = (periodo, index) => {
  loading.value[index] = true
}

const eliminarPeriodo = id => {
  isConfirmDialogOpen.value = true
}

const confirmarDuplicarPeriodo = (id, index) => {
  try {
    loading.value[index] = true
    indice.value[index] = 60
    counter.value[index] = setInterval(() => {
      indice.value[index]--
    }, 1000)

    indiceDuplicarPeriodo.value = index
    isConfirmDialogoDuplicateOpen.value = true
  } catch (error) {
    console.error('Error al duplicar el periodo:', error)
  }
}

const addNewPeriodo = periodoData => {
  localStorage.removeItem('reporteId')
  periodoListStore.addPeriodo(periodoData)
  fetchPeriodos()
}

</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Periodos">
          <span class="text-sm ml-20" style="color:red;margin-left: 23px;margin-top: -20px;position: absolute;" v-if="totalEmpresas < 1">DEBE CREAR UNA EMPRESA PARA GENERAR UN PERIODO</span>
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div class="me-3" style="width: 80px;">
              <VSelect v-model="rowPerPage" density="compact" variant="outlined" :items="[10, 20, 30, 50]" />
            </div>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <div style="width: 10rem;">
                <VTextField v-model="searchQuery" placeholder="Search" density="compact" />
              </div>

              <VBtn v-if="totalEmpresas > 0" prepend-icon="tabler-plus" @click="isAddNewPeriodoDrawerVisible = true">
                Nuevo Periodo
              </VBtn>
              <VBtn v-else prepend-icon="tabler-plus" disabled>
                Nuevo Periodo
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <thead>
            <tr>
              <th scope="col">EMPRESA</th>
              <th scope="col">PERIODO</th>
              <th scope="col">FECHA CREACIÓN</th>
              <th scope="col">ACCIONES</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(periodo, index) in periodos" :key="periodo.id" style="height: 3.75rem;">
              <td>
                <span class="text-capitalize text-base font-weight-semibold">{{ periodo.empresa.nombre }}<br/>RUC: <span style="font-size:12px;">{{periodo.empresaid}}</span></span>
              </td>
              <td><span class="text-base">{{ periodo.periodo }}</span></td>
              <td>{{ periodo.createdat }}</td>
              <td class="text-center" style="width: 5rem;">
                <span v-if="loading[index]" class="text-error" style="margin-right: 10px;">Espere ... {{ indice[index] }}</span>
                <VBtn icon size="x-small" color="default" variant="text" :disabled="periodo.isDuplicated" @click="idPeriodo = periodo; confirmarDuplicarPeriodo(periodo.id, index);" :loading="loading[index]">
                  <VIcon size="22" icon="tabler-copy" />
                </VBtn>
                <VBtn icon size="x-small" color="default" variant="text" @click="idPeriodo = periodo.id; eliminarPeriodo(periodo.id);">
                  <VIcon size="22" icon="tabler-trash" />
                </VBtn>
              </td>
            </tr>
            </tbody>
            <tfoot v-show="!periodos.length">
            <tr>
              <td colspan="7" class="text-center">No existen periodos creados</td>
            </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled">{{ paginationData }}</span>
            <VPagination v-model="currentPage" size="small" :total-visible="5" :length="totalPage" />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialog v-model:isDialogVisible="isConfirmDialogOpen" confirmation-msg="Estas seguro de que lo que deseas es eliminar este periodo?, al hacerlo se eliminaran todos los datos relacionados. Esta acción no es reversible" :id-periodo="idPeriodo" @confirm="deletePeriodoDB(idPeriodo)" />
    <ConfirmDuplicatePeriodoDialog v-model:isDialogVisible="isConfirmDialogoDuplicateOpen" confirmation-msg="Está seguro de que desea duplicar este periodo?, tal acción generará que se cree un nuevo periodo, donde los datos del periodo actual pasan a periodo anterior" :id-periodo="idPeriodo" :indice-duplicar-periodo="indiceDuplicarPeriodo" @confirm="duplicarPeriodo(idPeriodo, indiceDuplicarPeriodo)" />
    <AddNewPeriodoDrawer v-model:isDrawerOpen="isAddNewPeriodoDrawerVisible" @user-data="addNewPeriodo" />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>

<route lang="yaml">
meta:
layout: vertical-nav
public: true    # 👈 TEMPORAL
</route>
