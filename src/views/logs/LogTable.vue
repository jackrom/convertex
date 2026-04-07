<script setup>
import { ref, computed, watch } from "vue"
import { useLogStore } from "@/@store/log.store"
import { useLogsDashboard } from "@/composables/useLogsDashboard"

const store = useLogStore()
const { openDetail } = useLogsDashboard()

// Paginación
const currentPage = ref(1)
const itemsPerPage = ref(10)

const totalItems = computed(() => store.filtered.length)

const totalPages = computed(() => {
  return totalItems.value
    ? Math.ceil(totalItems.value / itemsPerPage.value)
    : 1
})

// Ajustar página actual cuando cambie la cantidad de registros filtrados
watch(
  () => totalItems.value,
  () => {
    if (!totalItems.value) {
      currentPage.value = 1
      return
    }

    const lastPage = Math.max(1, Math.ceil(totalItems.value / itemsPerPage.value))
    if (currentPage.value > lastPage) currentPage.value = lastPage
  },
  { immediate: true },
)

// Registros de la página actual
const paginatedEntries = computed(() => {
  if (!totalItems.value) return []

  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value

  return store.filtered.slice(start, end)
})

// Texto "Mostrando X a Y de Z"
const paginationData = computed(() => {
  const total = totalItems.value
  if (!total) return "Sin registros"

  const firstIndex = (currentPage.value - 1) * itemsPerPage.value + 1
  const lastIndex = Math.min(currentPage.value * itemsPerPage.value, total)

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ total } registros`
})
</script>

<template>
  <VCard class="mt-4">
    <VCardTitle>Logs del Sistema</VCardTitle>

    <VTable class="text-no-wrap">
      <thead>
      <tr>
        <th>Fecha</th>
        <th>Nivel</th>
        <th>Mensaje</th>
      </tr>
      </thead>

      <tbody>
      <tr
        v-for="entry in paginatedEntries"
        :key="entry.id"
        @click="openDetail(entry)"
        style="cursor: pointer;"
      >
        <td>{{ entry.timestamp }}</td>
        <td>{{ entry.level }}</td>
        <td>{{ entry.message }}</td>
      </tr>

      <tr v-if="!totalItems">
        <td
          colspan="3"
          class="text-center"
        >
          No hay logs registrados
        </td>
      </tr>
      </tbody>
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
        :length="totalPages"
      />
    </VCardText>
  </VCard>
</template>
