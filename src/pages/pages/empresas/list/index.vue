<script setup>
import { ref, computed, onMounted } from 'vue'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { avatarText } from '@core/utils/formatters'
import ConfirmDialogEmpresa from '@core/components/ConfirmDialogEmpresa.vue'
import AddNewEmpresaDrawer from '@/views/pages/empresas/list/AddNewEmpresa.vue'
import { useIndexedDB } from '@/composables/useIndexedDB'

const { addItem, getAll, clearStore } = useIndexedDB()

// Estado reactivo
const empresaListStore = useEmpresaListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalEmpresas = ref(0)
const totalPeriodos = ref(0)
const empresas = ref([])
const storage = ref(0)
const limiteexcedido = ref(false)
const sePermiteEliminar = ref(true)

const empresasEliminadas = ref([])
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasConvertex = ref(0)

const isAddNewEmpresaDrawerVisible = ref(false)

// Obtener datos de sesión
let userData = null
try {
  const raw = sessionStorage.getItem('userData')

  userData = raw ? JSON.parse(raw) : null
} catch (err) {
  console.error('No se pudo parsear userData de sessionStorage:', err)
  sessionStorage.removeItem('userData')
  userData = null
}

// Obtener aplicaciones
const aplicaciones = ref(userData?.applications ?? [])
const userId = sessionStorage.getItem('sub') || null

if (aplicaciones.value && aplicaciones.value.length > 0) {
  aplicaciones.value.forEach(app => {
    if (app.application?.app_key === 'convertex') {
      storage.value = app.storage
    }
  })
}

// ─────────────────────────────────────────────
// Helpers IndexedDB para EMPRESAS
// ─────────────────────────────────────────────
const syncEmpresasToIndexedDB = async lista => {
  try {
    await clearStore('empresasconvertexs')

    for (const raw of lista) {
      const empresa = {
        ...raw,

        // nos aseguramos de que SIEMPRE haya una clave 'id' para el keyPath
        id: raw.id ?? raw.ruc,
      }

      await addItem('empresasconvertexs', empresa, empresa.id)
    }
  } catch (error) {
    console.error('Error sincronizando empresas en IndexedDB:', error)
  }
}

// Obtener empresas desde IndexedDB o desde el servidor
const loadEmpresasFromIndexedDB = async () => {
  try {
    const storedEmpresas = await getAll('empresasconvertexs', null, 1000)

    if (Array.isArray(storedEmpresas) && storedEmpresas.length > 0) {
      empresas.value = storedEmpresas
      totalEmpresas.value = storedEmpresas.length
      totalPage.value = Math.max(1, Math.ceil(totalEmpresas.value / rowPerPage.value))
    } else {
      await fetchEmpresasFromServer() // Si no están en IndexedDB, cargar desde el servidor
    }
  } catch (error) {
    console.error('Error al cargar empresas desde IndexedDB:', error)
    await fetchEmpresasFromServer()
  }
}

const fetchEmpresasFromServer = async () => {
  if (!userId)
    return

  try {
    const response = await empresaListStore.fetchEmpresas({ user: userId })

    let companies = []

    // Soportar distintas formas de respuesta
    if (Array.isArray(response?.data)) {
      companies = response.data
    } else if (Array.isArray(response?.data?.data)) {
      companies = response.data.data
    } else if (Array.isArray(response)) {
      companies = response
    }

    if (!Array.isArray(companies)) {
      companies = []
    }

    if (companies.length === 0) {
      console.warn('No se encontraron empresas en la respuesta')
    }

    // Normalizar id
    companies = companies.map(c => ({
      ...c,
      id: c.id ?? c.ruc,
    }))

    empresas.value = companies
    totalEmpresas.value = companies.length
    totalPage.value = Math.max(1, Math.ceil(totalEmpresas.value / rowPerPage.value))

    // Sincronizar con IndexedDB
    await syncEmpresasToIndexedDB(companies)
  } catch (error) {
    console.error('Error al obtener empresas desde el servidor:', error)
  }
}

// Alias para usar en eventos (@empresa-creada, etc.)
const fetchEmpresas = () => {
  return fetchEmpresasFromServer()
}

// Llamada inicial
onMounted(() => {
  loadEmpresasFromIndexedDB()
})

// Función de paginación
const paginationData = computed(() => {
  const firstIndex = empresas.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0

  const lastIndex = empresas.value.length
    ? Math.min(currentPage.value * rowPerPage.value, totalEmpresas.value)
    : 0

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalEmpresas.value } registros`
})

// Creación de nueva empresa
const crearNuevaEmpresa = () => {
  limiteexcedido.value = totalEmpresas.value >= storage.value
  isAddNewEmpresaDrawerVisible.value = true
}

const addNewEmpresa = async empresaData => {
  try {
    await empresaListStore.addEmpresa(empresaData)

    // Tras crear en backend, refrescamos desde servidor y re-sincronizamos IndexedDB
    await fetchEmpresasFromServer()
  } catch (error) {
    console.error('Error al crear empresa:', error)
  }
}

// Eliminar empresa
const isConfirmDialogOpen = ref(false)
const idEmpresa = ref('0')

const eliminarEmpresa = id => {
  idEmpresa.value = id
  isConfirmDialogOpen.value = true
}

// Validación del límite (se mantiene tu lógica original)
if (limiteexcedido.value) {
  sePermiteEliminar.value = false
}
if (storage.value === 1) {
  sePermiteEliminar.value = false
}
if (storage.value === 3 && totalEmpresasEliminadasConvertex.value >= 3) {
  sePermiteEliminar.value = false
}
if (storage.value === 10 && totalEmpresasEliminadasConvertex.value >= 5) {
  sePermiteEliminar.value = false
}

// Fecha de pago y días restantes
let aplicacion = aplicaciones.value.find(app => app.aplicacionId === 4 || app.aplicacionid === 4)
let fechaProximoPago = ''
let diasFaltantes = 0

if (aplicacion && aplicacion.fechapago) {
  const fechaCaducidad = aplicacion.fechapago
  const fecha = new Date(fechaCaducidad)
  const dia = fecha.getDate()
  let mes = fecha.getMonth() + 1
  const anio = fecha.getFullYear()

  mes = mes < 10 ? '0' + mes : '' + mes

  switch (mes) {
  case '01': mes = 'Enero'; break
  case '02': mes = 'Febrero'; break
  case '03': mes = 'Marzo'; break
  case '04': mes = 'Abril'; break
  case '05': mes = 'Mayo'; break
  case '06': mes = 'Junio'; break
  case '07': mes = 'Julio'; break
  case '08': mes = 'Agosto'; break
  case '09': mes = 'Septiembre'; break
  case '10': mes = 'Octubre'; break
  case '11': mes = 'Noviembre'; break
  case '12': mes = 'Diciembre'; break
  }

  fechaProximoPago = `${ dia }-${ mes }-${ anio }`

  const fechaactual = new Date()
  const unDia = 24 * 60 * 60 * 1000

  diasFaltantes = Math.ceil((fecha - fechaactual) / unDia)
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Empresas">
          <template #subtitle>
            <span style="color: #477130;">Usted puede crear hasta: {{ storage }} empresas</span>
            <p v-if="fechaProximoPago">
              Su acceso a Convertex finaliza el: {{ fechaProximoPago }}<br>
              Le quedan {{ diasFaltantes }} días para que renueve su licencia
            </p>
          </template>

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
                v-if="!limiteexcedido"
                prepend-icon="tabler-plus"
                @click="crearNuevaEmpresa"
              >
                Empresa
              </VBtn>
            </div>
          </VCardText>

          <div
            v-if="limiteexcedido"
            style="color: red;margin-left:20px;"
          >
            <strong>LIMITE EXCEDIDO:</strong>
            Ha superado el limite permitido de empresas, para actualizar su cuenta, click
            <a
              href="http://www.ifluc.com"
              target="_blank"
              rel="noopener noreferrer"
            >AQUÍ</a>
          </div>

          <VDivider />

          <VTable class="text-no-wrap">
            <thead>
              <tr>
                <th scope="col">EMPRESA</th>
                <th scope="col">GERENTE</th>
                <th scope="col">RUC</th>
                <th scope="col">CIUDAD</th>
                <th scope="col">PROVINCIA</th>
                <th
                  v-if="!limiteexcedido"
                  scope="col"
                >
                  ACCIONES
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="empresa in empresas"
                :key="empresa.id"
                style="height: 3.75rem;"
              >
                <td>
                  <div class="d-flex align-center">
                    <VAvatar
                      variant="tonal"
                      color="primary"
                      class="me-3"
                      size="38"
                    >
                      <VImg
                        v-if="empresa.avatar"
                        :src="empresa.avatar"
                      />
                      <span v-else>{{ avatarText(empresa.nombre) }}</span>
                    </VAvatar>
                    <div class="d-flex flex-column">
                      <h6 class="text-uppercase text-base">
                        {{ empresa.nombre }}
                      </h6>
                      <span class="text-sm text-disabled">{{ empresa.direccion }}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <VAvatar
                    color="primary"
                    icon="tabler-user"
                    variant="tonal"
                    size="30"
                    class="me-4"
                  />
                  <span class="text-capitalize text-base">{{ empresa.gerente }}</span>
                </td>

                <td>
                  <span class="text-capitalize text-base font-weight-semibold">{{ empresa.ruc }}</span>
                </td>

                <td>
                  <span class="text-base">{{ empresa.ciudad }}</span>
                </td>

                <td>
                  {{ empresa.provincia }}
                </td>

                <td
                  v-if="sePermiteEliminar"
                  class="text-center"
                  style="width: 5rem;"
                >
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="idEmpresa = empresa.id; eliminarEmpresa(empresa.id);"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-trash"
                    />
                  </VBtn>
                </td>
              </tr>
            </tbody>

            <tfoot v-show="!empresas.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                  No existen empresas creadas
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
              :total-visible="10"
              :length="totalPage"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialogEmpresa
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="Estas seguro de que lo que deseas es eliminar esta empresa?, al hacerlo se eliminaran todos los datos relacionados. Esta acción no es reversible"
      :id-empresa="idEmpresa"
      @empresa-creada="fetchEmpresas"
    />

    <AddNewEmpresaDrawer
      v-model:isDrawerOpen="isAddNewEmpresaDrawerVisible"
      @user-data="addNewEmpresa"
      @empresa-creada="fetchEmpresas"
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

.subtitle-color {
  color: #477130;
}
</style>

<route lang="yaml">
meta:
layout: vertical-nav
public: true    # 👈 TEMPORAL
</route>
