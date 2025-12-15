<script setup>
import AddNewPeriodoDrawer from '@/views/pages/periodos/list/AddNewPeriodo.vue'
import { usePeriodoListStore } from '@/views/pages/periodos/usePeriodoListStore'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useReportesListStore } from '@/views/pages/supercias/useReportesListStore'
import ConfirmDialog from '@core/components/ConfirmDialog.vue'
import ConfirmDuplicatePeriodoDialog from '@core/components/ConfirmDuplicatePeriodoDialog.vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useIndexedDB } from '@/composables/useIndexedDB'

const router = useRouter()

// IndexedDB
const { addItem, getAll, clearStore } = useIndexedDB()

// Stores
const periodoListStore = usePeriodoListStore()
const empresaListStore = useEmpresaListStore()
const reportesListStore = useReportesListStore()

// Estado
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

// ref al drawer hijo
const isAddNewPeriodoDrawerVisible = ref(false)
const addNewPeriodoDrawerRef = ref(null)

// userData
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

// ─────────────────────────────────────────────
// Empresas (solo para mostrar info en la tabla)
// ─────────────────────────────────────────────
const fetchEmpresas = async () => {
  try {
    const response = await empresaListStore.fetchEmpresas({ user: userId })
    const empresasArray = Array.isArray(response?.data) ? response.data : []

    empresas.value = empresasArray
    totalEmpresas.value = empresasArray.length
    totalPage.value = Math.max(1, Math.ceil(empresasArray.length / rowPerPage.value))
  } catch (error) {
    console.error('Error fetchEmpresas (index.vue):', error)
  }
}

// ─────────────────────────────────────────────
// Helpers IndexedDB para periodos
// ─────────────────────────────────────────────
const syncPeriodosToIndexedDB = async listaActiva => {
  try {
    await clearStore('periodosconvertexs')

    console.log('listaActiva syncPeriodosToIndexedDB', listaActiva)

    for (const periodo of listaActiva) {
      console.log('periodo syncPeriodosToIndexedDB', periodo)

      if (!periodo?.id) {
        console.warn('Periodo sin id, se omite de IndexedDB:', periodo)
        continue
      }

      await addItem('periodosconvertexs', periodo, periodo.id)
    }
  } catch (error) {
    console.error('Error sincronizando periodos en IndexedDB:', error)
  }
}

// Cargar desde IndexedDB o, si no hay datos, desde el servidor
const loadPeriodosFromIndexedDB = async () => {
  try {
    const storedPeriodos = await getAll('periodosconvertexs', null, 1000)

    if (Array.isArray(storedPeriodos) && storedPeriodos.length > 0) {
      periodos.value = storedPeriodos.filter(p => !p.deletedat)
      totalPeriodos.value = periodos.value.length
      totalPage.value = Math.max(1, Math.ceil(totalPeriodos.value / rowPerPage.value))
    } else {
      await fetchPeriodosFromServer()
    }
  } catch (error) {
    console.error('Error al cargar periodos desde IndexedDB:', error)
    await fetchPeriodosFromServer()
  }
}

// Llamada a la API
const fetchPeriodosFromServer = async () => {
  try {
    const response = await periodoListStore.fetchPeriodos({ user: userId })

    console.log('fetchPeriodosFromServer: ', response)

    const periodosResponse = response?.data?.data
    const tp = periodosResponse?.totalPage ?? 1
    const tot = periodosResponse?.totalPeriodos ?? periodosResponse.length

    const listaActiva = periodosResponse?.filter(p => !p.deletedat) || []

    // Marcar si un periodo ya tiene su siguiente duplicado
    listaActiva.forEach(periodoExterno => {
      const periodoSiguiente = periodoExterno.periodo + 1

      periodoExterno.isDuplicated = listaActiva.some(
        periodoInterno =>
          periodoInterno.periodo === periodoSiguiente &&
          periodoInterno.empresaid === periodoExterno.empresaid,
      )
    })

    periodos.value = listaActiva
    totalPage.value = tp
    totalPeriodos.value = listaActiva.length

    await syncPeriodosToIndexedDB(listaActiva)
  } catch (error) {
    console.error('Error fetchPeriodos (index.vue):', error)
  }
}

onMounted(() => {
  fetchEmpresas()
  loadPeriodosFromIndexedDB()
})

// ─────────────────────────────────────────────
// Paginación
// ─────────────────────────────────────────────
const paginationData = computed(() => {
  const firstIndex = periodos.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0

  const lastIndex = periodos.value.length
    ? Math.min(currentPage.value * rowPerPage.value, totalPeriodos.value)
    : 0

  return `Mostrando ${firstIndex} a ${lastIndex} de ${totalPeriodos.value} registros`
})

// ─────────────────────────────────────────────
// Eliminación lógica de periodos
// ─────────────────────────────────────────────
const isConfirmDialogOpen = ref(false)
const isConfirmDialogoDuplicateOpen = ref(false)
const idPeriodo = ref('0')

const marcarPeriodoEliminadoLocal = async (id, deletedAt) => {
  try {
    const actualizados = periodos.value.map(p =>
      p.id === id ? { ...p, deletedat: deletedAt } : p,
    )

    const activos = actualizados.filter(p => !p.deletedat)

    periodos.value = activos
    totalPeriodos.value = activos.length
    totalPage.value = Math.max(1, Math.ceil(totalPeriodos.value / rowPerPage.value))

    const stored = await getAll('periodosconvertexs', null, 1000)
    const storedArray = Array.isArray(stored) ? stored : []

    const storedActualizados = storedArray.map(p =>
      p.id === id ? { ...p, deletedat: deletedAt } : p,
    )

    const storedActivos = storedActualizados.filter(p => !p.deletedat)

    await syncPeriodosToIndexedDB(storedActivos)
  } catch (error) {
    console.error('Error actualizando borrado lógico en IndexedDB:', error)
  }
}

const deletePeriodoDB = async id => {
  const deletedAt = new Date().toISOString()

  try {
    await periodoListStore.eliminarPeriodoSeleccionado(id)
  } catch (error) {
    console.error('Error al eliminar periodo en el servidor (se mantiene borrado lógico local):', error)
  }

  await marcarPeriodoEliminadoLocal(id, deletedAt)
}

const eliminarPeriodo = id => {
  idPeriodo.value = id
  isConfirmDialogOpen.value = true
}

// ─────────────────────────────────────────────
// Duplicar periodo
// ─────────────────────────────────────────────
const duplicarPeriodo = (periodo, index) => {
  loading.value[index] = true
  console.log('periodo', periodo)
  console.log('index', index)
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
    console.error('Error al preparar duplicación de periodo:', error)
  }
}

// ─────────────────────────────────────────────
// Crear periodo / reporte
// ─────────────────────────────────────────────
const addNewPeriodo = async periodoData => {
  localStorage.removeItem('reporteId')

  console.log('periodo', periodoData)

  try {
    const res = await periodoListStore.addPeriodo(periodoData)

    console.log('Periodo creado (addPeriodo):', res)

    const body = res?.data ?? res

    // Detectar si viene como { data: { periodo: {...} } }
    let nuevoPeriodo = body?.data

    // Asegurar que nuevoPeriodo es un objeto y tiene id
    if (!nuevoPeriodo || typeof nuevoPeriodo !== 'object' || !nuevoPeriodo.id) {
      console.warn('La API no devolvió un periodo válido. Respuesta:', body)
      await fetchPeriodosFromServer()

      // Intentar identificar el periodo recién creado desde el último registro
      const ultimo = periodos.value[periodos.value.length - 1]
      if (ultimo?.id) {
        nuevoPeriodo = ultimo
      } else {
        return
      }
    }

    if (!nuevoPeriodo.id) {
      console.warn('El periodo creado no tiene id, se recarga desde servidor. nuevoPeriodo:', nuevoPeriodo)
      await fetchPeriodosFromServer()

      return
    }

    if (!('deletedat' in nuevoPeriodo)) nuevoPeriodo.deletedat = null

    if (!nuevoPeriodo.empresa && empresas.value?.length) {
      const empresaMatch = empresas.value.find(e => e.id === nuevoPeriodo.empresaid)

      if (empresaMatch) {
        nuevoPeriodo.empresa = { nombre: empresaMatch.nombre }
      }
    }

    const listaActiva = [...periodos.value, nuevoPeriodo].filter(p => !p.deletedat)

    listaActiva.forEach(periodoExterno => {
      const periodoSiguiente = periodoExterno.periodo + 1

      periodoExterno.isDuplicated = listaActiva.some(
        periodoInterno =>
          periodoInterno.periodo === periodoSiguiente &&
          periodoInterno.empresaid === periodoExterno.empresaid,
      )
    })

    periodos.value = listaActiva
    totalPeriodos.value = listaActiva.length
    totalPage.value = Math.max(1, Math.ceil(totalPeriodos.value / rowPerPage.value))

    await syncPeriodosToIndexedDB(listaActiva)

    // 👉 Cerrar el drawer en cuanto el periodo se ha creado
    isAddNewPeriodoDrawerVisible.value = false

    // 👉 Crear el reporte para este periodo en el hijo
    try {
      if (addNewPeriodoDrawerRef.value?.crearReporteParaPeriodo) {
        if (nuevoPeriodo?.id) {
          await addNewPeriodoDrawerRef.value.crearReporteParaPeriodo(nuevoPeriodo.id)

          // await router.replace('/pages/supercias/list')
        } else {
          console.error('NO SE ENCONTRÓ nuevoPeriodo.id')
        }
      } else {
        console.warn('El drawer no expone crearReporteParaPeriodo')
      }
    } catch (err) {
      console.error('Error creando reporte para el nuevo periodo:', err)
    }
  } catch (error) {
    console.error('Error al crear nuevo periodo:', error)
    await fetchPeriodosFromServer()
  }
}

const addNewReporte = (reporteData, index) => {
  reportesListStore.addReporteConvertex(reporteData).then(res => {
    localStorage.clear()
    loading.value[index] = false
    router.replace('/pages/supercias/list')
  })
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Periodos">
          <span
            v-if="totalEmpresas < 1"
            class="text-sm ml-20"
            style="color:red;margin-left: 23px;margin-top: -20px;position: absolute;"
          >
            DEBE CREAR UNA EMPRESA PARA GENERAR UN PERIODO
          </span>

          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div class="me-3" style="width: 80px;">
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <div style="width: 10rem;">
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                />
              </div>

              <VBtn
                v-if="totalEmpresas > 0"
                prepend-icon="tabler-plus"
                @click="isAddNewPeriodoDrawerVisible = true"
              >
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
              <tr
                v-for="(periodo, index) in periodos"
                :key="periodo.id"
                style="height: 3.75rem;"
              >
                <td>
                  <span class="text-capitalize text-base font-weight-semibold">
                    {{ periodo.empresa?.nombre }}
                    <br />
                    RUC:
                    <span style="font-size:12px;">{{ periodo.empresaid }}</span>
                  </span>
                </td>
                <td>
                  <span class="text-base">{{ periodo.periodo }}</span>
                </td>
                <td>
                  {{ periodo.createdat }}
                </td>
                <td class="text-center" style="width: 5rem;">
                  <span
                    v-if="loading[index]"
                    class="text-error"
                    style="margin-right: 10px;"
                  >
                    Espere ... {{ indice[index] }}
                  </span>
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                    :disabled="periodo.isDuplicated"
                    @click="idPeriodo = periodo; confirmarDuplicarPeriodo(periodo.id, index);"
                    :loading="loading[index]"
                  >
                    <VIcon size="22" icon="tabler-copy" />
                  </VBtn>
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="idPeriodo = periodo.id; eliminarPeriodo(periodo.id);"
                  >
                    <VIcon size="22" icon="tabler-trash" />
                  </VBtn>
                </td>
              </tr>
            </tbody>

            <tfoot v-show="!periodos.length">
              <tr>
                <td colspan="7" class="text-center">
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


    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="Estas seguro de que lo que deseas es eliminar este periodo?, al hacerlo se eliminaran todos los datos relacionados. Esta acción no es reversible"
      :id-periodo="idPeriodo"
      @confirm="deletePeriodoDB(idPeriodo)"
    />

    <ConfirmDuplicatePeriodoDialog
      v-model:isDialogVisible="isConfirmDialogoDuplicateOpen"
      confirmation-msg="Está seguro de que desea duplicar este periodo?, tal acción generará que se cree un nuevo periodo, donde los datos del periodo actual pasan a periodo anterior"
      :id-periodo="idPeriodo"
      :indice-duplicar-periodo="indiceDuplicarPeriodo"
      @confirm="duplicarPeriodo(idPeriodo, indiceDuplicarPeriodo)"
    />

    <AddNewPeriodoDrawer
      ref="addNewPeriodoDrawerRef"
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
public: true
</route>
