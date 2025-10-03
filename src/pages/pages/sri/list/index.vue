<script setup>
import AddNewReporteSriDrawer from '@/views/pages/sri/list/AddNewReporte.vue'
import { useSriListStore } from '@/views/pages/sri/useSriListStore'
import { avatarText } from '@core/utils/formatters'

const reporteSriListStore = useSriListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalReporteSri = ref(0)
const reportes = ref([])

// 👉 Fetching empresas
const fetchReportesSri = () => {
  reporteSriListStore.fetchReportesSri({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: 'txtsupercias',
  }).then(response => {
    console.log(response)
    reportes.value = response.data.reportes
    totalPage.value = response.data.totalPage
    totalReporteSri.value = response.data.totalReporteSri
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchReportesSri)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

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

const resolveUserRoleVariant = role => {
  if (role === 'subscriber')
    return {
      color: 'warning',
      icon: 'tabler-user',
    }
  if (role === 'author')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (role === 'maintainer')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }
  if (role === 'editor')
    return {
      color: 'info',
      icon: 'tabler-pencil',
    }
  if (role === 'admin')
    return {
      color: 'secondary',
      icon: 'tabler-device-laptop',
    }

  return {
    color: 'primary',
    icon: 'tabler-user',
  }
}

const resolveUserStatusVariant = stat => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'

  return 'primary'
}

const isAddNewReporteSriDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = reportes.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = reportes.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalReporteSri.value } registros`
})

const addNewReporteSri = reporteData => {
  reporteSriListStore.addReporteSri(reporteData)

  // refetch Empresa
  fetchReportesSri()
}

// 👉 List
const userListMeta = [
  {
    icon: 'tabler-user',
    color: 'primary',
    title: 'Session',
    stats: '21,459',
    percentage: +29,
    subtitle: 'Total Users',
  },
  {
    icon: 'tabler-user-plus',
    color: 'error',
    title: 'Paid Users',
    stats: '4,567',
    percentage: +18,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'tabler-user-check',
    color: 'success',
    title: 'Active Users',
    stats: '19,860',
    percentage: -14,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'tabler-user-exclamation',
    color: 'warning',
    title: 'Pending Users',
    stats: '237',
    percentage: +42,
    subtitle: 'Last week analytics',
  },
]
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Reportes SRI">
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


              <!-- 👉 Export button -->
              <VBtn
                variant="tonal"
                color="secondary"
                prepend-icon="tabler-screen-share"
              >
                Exportar
              </VBtn>
              <!-- 👉 Add user button -->
              <VBtn
                prepend-icon="tabler-plus"
                :to="{ name: 'apps-invoice-add' }"
              >
                Reporte F-101
              </VBtn>

              <!-- 👉 Search
              <div style="width: 10rem;">
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                />
              </div>
               -->

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
            <!-- 👉 table body -->
            <tbody>
            <tr
              v-for="reporte in reportes"
              :key="reporte.id"
              style="height: 3.75rem;"
            >
              <!-- 👉 Role -->
              <td>
                <span class="text-capitalize text-base">{{ reporte.empresareportesri.nombre }}</span>
              </td>

              <!-- 👉 Plan -->
              <td>
                <span class="text-capitalize text-base font-weight-semibold">{{ reporte.periodosreportesri.periodo }}</span>
              </td>

              <!-- 👉 Billing -->
              <td>
                <span class="text-base">{{ reporte.nombre_reporte }}</span>
              </td>

              <!-- 👉 Status -->
              <td>
                {{ reporte.createdAt }}
              </td>

              <!-- 👉 Actions -->
              <td
                class="text-center"
                style="width: 5rem;"
              >
                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                >
                  <VIcon
                    size="22"
                    icon="tabler-edit"
                  />
                </VBtn>

                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                >
                  <VIcon
                    size="22"
                    icon="tabler-trash"
                  />
                </VBtn>

                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                >
                  <VIcon
                    size="22"
                    icon="tabler-dots-vertical"
                  />

                  <VMenu activator="parent">
                    <VList>
                      <VListItem
                        title="View"
                        :to="{ name: 'apps-user-view-id', params: { id: empresa.id } }"
                      />
                      <VListItem
                        title="Suspend"
                        href="javascript:void(0)"
                      />
                    </VList>
                  </VMenu>
                </VBtn>
              </td>
            </tr>
            </tbody>

            <!-- 👉 table footer  -->
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

    <!-- 👉 Add New User -->
    <AddNewReporteSriDrawer
      v-model:isDrawerOpen="isAddNewReporteSriDrawerVisible"
      @user-data="addNewReporteSri"
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
