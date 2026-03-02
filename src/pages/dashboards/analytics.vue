<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'

const items = [
  'Ingrese valores únicamente hasta con 2 decimales',
  'Para la separación decimal utilizar punto',
  'No utilizar ni coma ni punto para la separación de miles',
  'Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar',
]

const empresasEliminadas = ref([])
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasConvertex = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)

const userId = (() => {
  try {
    const raw = sessionStorage.getItem('sub')

    // si no hay nada, devolvemos null
    return raw ?? null
  } catch (err) {
    console.error('Error al obtener sub del sessionStorage:', err)

    return null
  }
})()

const fetchEmpresasConvertex = async () => {
  if (!userId) {
    console.warn('Sin sub en sessionStorage, no se consultan empresas eliminadas')

    return
  }

  try {
    const response = await empresasEliminadasListStore.fetchEmpresasEliminadasConvertex({
      q: searchQuery.value,
      status: selectedStatus.value,
      plan: selectedPlan.value,
      role: selectedRole.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
      user: userId,
      origen: 'convertex',
    })

    const data = response?.data || response || {}

    empresasEliminadas.value = data.empresas || []
    totalPage.value = data.totalPage || 1
    totalEmpresasEliminadasConvertex.value = data.totalEmpresasEliminadasConvertex || empresasEliminadas.value.length

    console.log('totalEmpresasEliminadasConvertex: ', totalEmpresasEliminadasConvertex.value)
  } catch (error) {
    // ignorar abortos / timeouts (p.e. cambio de ruta, login, etc.)
    if (error.code === 'ECONNABORTED' || error.message === 'Request aborted') {
      console.warn('Request de empresas eliminadas abortado (redirect / timeout).')

      return
    }

    console.error('Error al cargar empresas eliminadas de Convertex:', error)
  }
}

onMounted(() => {
  fetchEmpresasConvertex()
})

watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed(() => {
  const firstIndex = empresasEliminadas.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0

  const lastIndex = empresasEliminadas.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${firstIndex} a ${lastIndex} de ${
    totalEmpresasEliminadasConvertex.value
  } registros`
})
</script>

<template>
  <div>
    <VCard title="IMPORTANTE 🙌">
      <VCardText><h2>Recomendaciones para un óptimo funcionamiento:</h2></VCardText>
      <VCardText>
        <VList :items="items" />
      </VCardText>
    </VCard>
  </div>

  <VDivider style="margin-bottom: 10px" />

  <div>
    <VCard title="EMPRESAS ELIMINADAS">

      <VTable
        class="text-no-wrap"
        style="margin-top:20px;"
      >
        <head>
          <tr>
            <th>RUC</th>
            <th>EMPRESA</th>
            <th>CIUDAD</th>
            <th>PROVINCIA</th>
            <th>USUARIO</th>
            <th>FECHA CREACIÓN</th>
            <th>FECHA ELIMINACIÓN</th>
          </tr>
        </head>

        <tbody>
          <tr
            v-for="empresa in empresasEliminadas"
            :key="empresa.id"
            style="height: 3.75rem;"
          >
            <td><span class="text-capitalize text-base">{{ empresa.ruc }}</span></td>
            <td>
              <span class="text-capitalize text-base font-weight-semibold">
                {{ empresa.nombre }}
              </span>
            </td>
            <td><span class="text-base">{{ empresa.ciudad }}</span></td>
            <td>{{ empresa.provincia }}</td>
            <td>{{ empresa.userId }}</td>
            <td>{{ empresa.fechaCreacion }}</td>
            <td>{{ empresa.createdAt }}</td>
          </tr>
        </tbody>

        <tfoot v-show="!empresasEliminadas.length">
          <tr>
            <td
              colspan="7"
              class="text-center"
            >
              No existen empresas eliminadas aún
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>
  </div>
</template>

<route lang="yaml">
meta:
requiresConvertex: true
</route>
