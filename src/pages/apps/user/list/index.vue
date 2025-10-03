<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"

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

const empresasEliminadas = ref([])
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasIfluc = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)

let userId
try {
  userId = JSON.parse(sessionStorage.getItem('userData')).id
} catch (error) {
  console.error("Error al obtener userData del sessionStorage:", error)
}

const fetchEmpresasIfluc = () => {
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
    console.log(response)
    empresasEliminadas.value = response.data.empresas
    totalPage.value = response.data.totalPage
    totalEmpresasEliminadasIfluc.value = response.data.totalEmpresasEliminadasIfluc

    console.log("totalEmpresasEliminadasIfluc: ", totalEmpresasEliminadasIfluc.value)
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresasIfluc)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed(() => {
  const firstIndex = empresasEliminadas.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = empresasEliminadas.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalEmpresasEliminadasIfluc.value } registros`
})
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Registros">
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
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  RUC
                </th>
                <th scope="col">
                  EMPRESA
                </th>
                <th scope="col">
                  CIUDAD
                </th>
                <th scope="col">
                  PROVINCIA
                </th>
                <th scope="col">
                  USUARIO
                </th>
                <th scope="col">
                  FECHA CREACIÓN
                </th>
                <th scope="col">
                  FECHA ELIMINACIÓN
                </th>
              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="empresa in empresasEliminadas"
                :key="empresa.id"
                style="height: 3.75rem;"
              >
                <td>
                  <span class="text-capitalize text-base">{{ empresa.ruc }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base font-weight-semibold">{{ empresa.nombre }}</span>
                </td>
                <td>
                  <span class="text-base">{{ empresa.ciudad }}</span>
                </td>
                <td>
                  {{ empresa.provincia }}
                </td>
                <td>
                  {{ empresa.userId }}
                </td>
                <td>
                  {{ empresa.fechaCreacion }}
                </td>
                <td>
                  {{ empresa.createdAt }}
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
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
