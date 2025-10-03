<script setup>
import AddNewEmpresaDrawer from '@/views/pages/empresas/list/AddNewEmpresa.vue'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { avatarText } from '@core/utils/formatters'
import ConfirmDialogEmpresa from "@core/components/ConfirmDialogEmpresa.vue"
import { ref, computed, watchEffect } from 'vue'

const empresaListStore = useEmpresaListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalEmpresas = ref(0)
const empresas = ref([])
const userData = JSON.parse(sessionStorage.getItem('userData') || '{}')
const aplicaciones = ref(userData ? userData.aplicaciones : [])
const storage = ref(0)
const limiteexcedido = ref(false)
const sePermiteEliminar = ref(true)

const empresasEliminadas = ref([])
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasIfluc = ref(0)

const isAddNewEmpresaDrawerVisible = ref(false)

let userId
try {
  userId = JSON.parse(sessionStorage.getItem('userData')).id
} catch (error) {
  console.error("Error al obtener userData del sessionStorage:", error)
}

if (aplicaciones.value && aplicaciones.value.length > 0) {
  aplicaciones.value.forEach(app => {
    if (app.aplicacionId === 4) {
      storage.value = app.storage
    }
  })
}


// 👉 Fetching empresas
const fetchEmpresas = () => {
  empresaListStore.fetchEmpresas({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: "ifluc",
  }).then(response => {
    console.log(response.data.empresas)
    empresas.value = response.data.empresas
    totalPage.value = 1
    totalEmpresas.value = response.data.empresas.length

    if (totalEmpresas.value < storage.value) {
      limiteexcedido.value = false
    } else {
      limiteexcedido.value = true
      sePermiteEliminar.value = false
    }
  }).catch(error => {
    console.error(error)
  })
}

const fetchEmpresasEliminadasIfluc = () => {
  empresasEliminadasListStore.fetchEmpresasEliminadasIfluc({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: userId,
    origen: 'ifluc',
  }).then(response => {
    empresasEliminadas.value = response.data.empresas
    totalEmpresasEliminadasIfluc.value = response.data.totalEmpresasEliminadasIfluc
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresas)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

watchEffect(fetchEmpresasEliminadasIfluc)

// 👉 search filters
const roles = [
  {
    title: 'Admin',
    value: 'admin',
  },
  {
    title: 'Author',
    value: 'author',
  },
  {
    title: 'Editor',
    value: 'editor',
  },
  {
    title: 'Maintainer',
    value: 'maintainer',
  },
  {
    title: 'Subscriber',
    value: 'subscriber',
  },
]

const plans = [
  {
    title: 'Basic',
    value: 'basic',
  },
  {
    title: 'Company',
    value: 'company',
  },
  {
    title: 'Enterprise',
    value: 'enterprise',
  },
  {
    title: 'Team',
    value: 'team',
  },
]

const status = [
  {
    title: 'Pending',
    value: 'pending',
  },
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Inactive',
    value: 'inactive',
  },
]

const crearNuevaEmpresa = empresaData => {
  limiteexcedido.value = totalEmpresas.value >= storage.value

  isAddNewEmpresaDrawerVisible.value = true
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = empresas.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = empresas.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalEmpresas.value } registros`
})

const addNewEmpresa = empresaData => {
  empresaListStore.addEmpresa(empresaData)

  fetchEmpresas
}

const isConfirmDialogOpen = ref(false)
const idEmpresa = ref('0')

const eliminarEmpresa = id => {
  isConfirmDialogOpen.value = true
}

if (limiteexcedido.value) {
  sePermiteEliminar.value = false
}
if (storage.value === 1) {
  sePermiteEliminar.value = false
}
if (storage.value === 3 && totalEmpresasEliminadasIfluc.value >= 3) {
  sePermiteEliminar.value = false
}
if (storage.value === 10 && totalEmpresasEliminadasIfluc.value >= 5) {
  sePermiteEliminar.value = false
}


let aplicacion = aplicaciones.value.find(app => app.aplicacionId === 4)
const fechaCaducidad = aplicacion.fechapago
const fecha = new Date(fechaCaducidad)
const dia = fecha.getDate()
let mes = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : (fecha.getMonth() + 1)
const anio = fecha.getFullYear()

switch (mes) {
case '01':
  mes = 'Enero'
  break
case '02':
  mes = 'Febrero'
  break
case '03':
  mes = 'Marzo'
  break
case '04':
  mes = 'Abril'
  break
case '05':
  mes = 'Mayo'
  break
case '06':
  mes = 'Junio'
  break
case '07':
  mes = 'Julio'
  break
case '08':
  mes = 'Agosto'
  break
case '09':
  mes = 'Septiembre'
  break
case '10':
  mes = 'Octubre'
  break
case '11':
  mes = 'Noviembre'
  break
case '12':
  mes = 'Diciembre'
  break
}

const fechaProximoPago = dia + '-' + mes + '-' + anio
const fechaactual = new Date()
const unDia = 24 * 60 * 60 * 1000 // Milisegundos en un día
const diasFaltantes = Math.ceil((fecha - fechaactual) / unDia)
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard
          title="Empresas"
        >
          <template v-slot:subtitle>
            <span style="color: #477130;">Usted puede crear hasta: {{ storage }} empresas</span>
            <p>Su acceso a iFluc finaliza el: {{ fechaProximoPago }}<br/>
              Le quedan {{diasFaltantes}} días para que renueve su licencia</p>
          </template>
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
                <th scope="col">
                  EMPRESA
                </th>
                <th scope="col">
                  GERENTE
                </th>
                <th scope="col">
                  RUC
                </th>
                <th scope="col">
                  CIUDAD
                </th>
                <th scope="col">
                  PROVINCIA
                </th>
                <th v-if="!limiteexcedido" scope="col">
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
-->
