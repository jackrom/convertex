<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useSafeI18n } from '@/composables/useSafeI18n'

const { t, safeT } = useSafeI18n('global')
const { tm } = useI18n({ useScope: 'global' })


// 🔹 Recomendaciones: se leen como ARRAY desde i18n usando `tm`
const items = computed(() => {
  const raw = tm('convertex.deletedCompanies.recommendations.items')

  console.log('[i18n] tm items →', raw)

  return Array.isArray(raw) ? raw : []
})

const empresasEliminadas = ref([])
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasConvertex = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const rowPerPage = ref(10)

// Si luego quieres usar filtros de búsqueda/paginación, los dejas:
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

const userId = (() => {
  try {
    const raw = sessionStorage.getItem('sub')

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
      user: userId,
    })

    // Asumimos respuesta tipo { data: { empresas, totalPage, totalEmpresasEliminadasConvertex } }
    const payload = response?.data || response || {}

    console.log('data analytics: ', payload)

    empresasEliminadas.value = payload.empresas || []
    totalPage.value = payload.totalPage || 1
    totalEmpresasEliminadasConvertex.value =
      payload.totalEmpresasEliminadasConvertex ?? empresasEliminadas.value.length

    console.log('totalEmpresasEliminadasConvertex: ', totalEmpresasEliminadasConvertex.value)
  } catch (error) {
    console.error('Error al cargar empresas eliminadas de Convertex:', error)

    if (error.code === 'ECONNABORTED' || error.message === 'Request aborted') {
      console.warn('Request de empresas eliminadas abortado (redirect / timeout).')
    }
  }
}

watchEffect(() => {
  fetchEmpresasConvertex()
})

watchEffect(
  () => currentPage.value,
  () => {
    if (currentPage.value > totalPage.value)
      currentPage.value = totalPage.value
  },
)

const paginationData = computed(() => {
  const firstIndex = empresasEliminadas.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0

  const lastIndex =
    empresasEliminadas.value.length + (currentPage.value - 1) * rowPerPage.value

  return t('convertex.deletedCompanies.pagination', {
    first: firstIndex,
    last: lastIndex,
    total: totalEmpresasEliminadasConvertex.value,
  })
})
</script>

<template>
  <div>
    <VCard :title="safeT('dashboards.analytics.title', 'Analytics')">
      <VCardText>
        <h2>{{ safeT('dashboards.analytics.subtitle', 'Resumen') }}</h2>
      </VCardText>

      <VCardText>
        <VList>
          <VListItem>Ingrese valores únicamente hasta con 2 decimales</VListItem>
          <VListItem>Para la separación decimal utilizar punto</VListItem>
          <VListItem>No utilizar ni coma ni punto para la separación de miles</VListItem>
          <VListItem>Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar</VListItem>
        </VList>
      </VCardText>
    </VCard>
  </div>

  <VDivider style="margin-bottom: 10px" />

  <div>
    <VCard :title="safeT('convertex.deletedCompanies.tableTitle', 'Empresas eliminadas')">
      <VTable
        class="text-no-wrap"
        style="margin-top:20px;"
      >
        <thead>
          <tr>
            <th>{{ safeT('convertex.deletedCompanies.headers.ruc', 'RUC') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.company', 'Empresa') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.city', 'Ciudad') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.province', 'Provincia') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.user', 'Usuario') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.createdAt', 'Fecha creación') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.deletedAt', 'Fecha eliminación') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="empresa in empresasEliminadas"
            :key="empresa.id"
            style="height: 3.75rem;"
          >
            <td>
                <span class="text-capitalize text-base">
                  {{ empresa.ruc }}
                </span>
            </td>

            <td>
                <span class="text-capitalize text-base font-weight-semibold">
                  {{ empresa.nombre }}
                </span>
            </td>

            <td>
                <span class="text-base">
                  {{ empresa.ciudad }}
                </span>
            </td>

            <td>{{ empresa.provincia }}</td>
            <td>{{ empresa.userId }}</td>
            <td>{{ empresa.createdat }}</td>
            <td>{{ empresa.deletedat }}</td>
          </tr>
          </tbody>

          <tfoot v-show="!empresasEliminadas.length">
          <tr>
            <td
              colspan="7"
              class="text-center"
            >
              {{ safeT('convertex.deletedCompanies.noData', 'No hay registros') }}
            </td>
          </tr>
        </tfoot>
      </VTable>

      <!-- Si quieres mostrar la paginación:
      <VCardText>
        <span>{{ paginationData }}</span>
      </VCardText>
      -->
    </VCard>
  </div>
</template>



