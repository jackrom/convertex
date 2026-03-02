<script setup>
import AddNewPeriodoDrawer from '@/views/pages/periodos/list/AddNewPeriodo.vue'
import { usePeriodoListStore } from '@/views/pages/periodos/usePeriodoListStore'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import ConfirmDialog from '@core/components/ConfirmDialog.vue'
import ConfirmDuplicatePeriodoDialog from "@core/components/ConfirmDuplicatePeriodoDialog.vue"
import { ref } from "vue"

const router = useRouter()

const periodoListStore = usePeriodoListStore()
const empresaListStore = useEmpresaListStore()
const superciasListStore = useSuperciasListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
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
const reporteActualDelPeriodoAnteriorADuplicar = ref()
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

const fetchEmpresas = () => {
  empresaListStore.fetchEmpresas({ user: userId })
    .then(response => {
      console.log('respuesta empresas', response.data)

      const { data, meta } = response.data   // 👈 desestructuramos

      empresas.value = data                  // 👈 aquí va el array
      totalEmpresas.value = data.length
      totalPage.value = Math.ceil(data.length / 10)
    })
    .catch(error => {
      console.error(error)
    })
}

// watchEffect(fetchEmpresas)

// 👉 Fetching periodos
const fetchPeriodos = () => {
  periodoListStore.fetchPeriodos({
    user: userId,
    // si quieres filtros/paginación:
    // q: searchQuery.value || '',
    // perPage: rowPerPage.value,
    // currentPage: currentPage.value,
  })
    .then(response => {
      const { periodos: lista, totalPage: tp, totalPeriodos: tot } = response.data

      console.log('periodos API:', response.data)

      periodos.value = Array.isArray(lista) ? lista : []
      totalPage.value = tp || 1
      totalPeriodos.value = tot || periodos.value.length

      // eslint-disable-next-line sonarjs/no-unused-collection
      let periodosRevisados = []

      periodos.value.forEach(periodoExterno => {
        const periodoSiguiente = periodoExterno.periodo + 1

        periodoExterno.isDuplicated = periodos.value.some(
          periodoInterno =>
            periodoInterno.periodo === periodoSiguiente &&
            periodoInterno.empresaid === periodoExterno.empresaid, // 👈 campo correcto
        )
      })
    })
    .catch(error => {
      console.error(error)
    })
}


// watchEffect(fetchPeriodos)


const isAddNewPeriodoDrawerVisible = ref(false)

onMounted(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value

  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value

  fetchEmpresas()
  fetchPeriodos()
})


// 👉 Computing pagination data
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

    // router.replace('/pages/supercias/txt')
  })
}

const duplicarPeriodo = (periodo, index) => {
  loading.value[index] = true

  console.log("periodo", periodo)
  console.log("index", index)
}

const eliminarPeriodo = id => {
  isConfirmDialogOpen.value = true
}

const confirmarDuplicarPeriodo = (id, index) => {
  try {
    loading.value[index] = true
    indice.value[index] = 60
    counter.value[index] = setInterval(() => {
      indice.value[index] --
    }, 1000)

    indiceDuplicarPeriodo.value = index
    isConfirmDialogoDuplicateOpen.value = true

  } catch (error) {
    console.error('Error al descargar el reporte Excel:', error)
  }
}

const addNewPeriodo = periodoData => {
  localStorage.removeItem('reporteId')
  periodoListStore.addPeriodo(periodoData)

  fetchPeriodos()
}

const addNewReporte = (reporteData, index) => {
  superciasListStore.addReporteSupercias(reporteData)
    .then(res => {
      localStorage.clear()
      loading.value[index] = false

      // emit('update:isDrawerOpen', false)
      router.replace('/pages/supercias/list')


    })
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Periodos">
          <span class="text-sm ml-20" style="color:red;margin-left: 23px;margin-top: -20px;position: absolute;" v-if="totalEmpresas < 1">DEBE CREAR UNA EMPRESA PARA GENERAR UN PERIODO</span>
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div
              class="me-3"
              style="width: 80px;"
            >
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <!-- 👉 Search  -->
              <div style="width: 10rem;">
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                />
              </div>

              <!-- 👉 Add user button -->
              <VBtn
                v-if="totalEmpresas > 0"
                prepend-icon="tabler-plus"
                @click="isAddNewPeriodoDrawerVisible = true"
              >
                Nuevo Periodo
              </VBtn>
              <VBtn
                v-else
                prepend-icon="tabler-plus"
                disabled
              >
                Nuevo Periodo
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  EMPRESA
                </th>
                <th scope="col">
                  PERIODO
                </th>
                <th scope="col">
                  FECHA CREACIÓN
                </th>
                <th scope="col">
                  ACCIONES
                </th>
              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="(periodo, index) in periodos"
                :key="periodo.id"
                style="height: 3.75rem;"
              >
                <!-- 👉 Plan -->
                <td>
                  <span class="text-capitalize text-base font-weight-semibold">{{ periodo.empresa.nombre }}<br/>RUC: <span style="font-size:12px;">{{periodo.empresaid}}</span></span>
                </td>

                <!-- 👉 Billing -->
                <td>
                  <span class="text-base">{{ periodo.periodo }}</span>
                </td>

                <!-- 👉 Status -->
                <td>
                  {{ periodo.createdat }}
                </td>

                <!-- 👉 Actions -->
                <td
                  class="text-center"
                  style="width: 5rem;"
                >
                  <span v-if="loading[index]" class="text-error" style="margin-right: 10px;">Espere ... {{ indice[index] }}</span>
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                    :disabled="periodo.isDuplicated"
                    @click="idPeriodo = periodo; confirmarDuplicarPeriodo(periodo.id, index);"
                    :loading="loading[index]"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-copy"
                    />
                  </VBtn>
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="idPeriodo = periodo.id; eliminarPeriodo(periodo.id);"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-trash"
                    />
                  </VBtn>
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!periodos.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                  No existen periodos creados
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled">
              {{ paginationData }}
            </span>

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


    <!-- Confirm Dialog -->
    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="Estas seguro de que lo que deseas es eliminar este periodo?, al hacerlo se eliminaran todos los datos relacionados. Esta acción no es reversible"
      :id-periodo="idPeriodo"
      @confirm="deletePeriodoDB(idPeriodo)"
    />

    <!-- Confirm Dialog -->
    <ConfirmDuplicatePeriodoDialog
      v-model:isDialogVisible="isConfirmDialogoDuplicateOpen"
      confirmation-msg="Está seguro de que desea duplicar este periodo?, tal acción generará que se cree un nuevo periodo, donde los datos del periodo actual pasan a periodo anterior"
      :id-periodo="idPeriodo"
      :indice-duplicar-periodo="indiceDuplicarPeriodo"
      @confirm="duplicarPeriodo(idPeriodo, indiceDuplicarPeriodo)"
    />

    <!-- 👉 Agregar Periodo -->
    <AddNewPeriodoDrawer
      v-model:isDrawerOpen="isAddNewPeriodoDrawerVisible"
      @user-data="addNewPeriodo"
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

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>


<route lang="yaml">
meta:
layout: vertical-nav
public: true    # 👈 TEMPORAL
</route>
