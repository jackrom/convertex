<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useAuditStore } from "@/@store/audit.store"

// Store de auditoría
const store = useAuditStore()

// Paginación
const currentPage = ref(1)
const itemsPerPage = ref(10) // Puedes cambiarlo o luego poner un VSelect si quieres

const totalItems = computed(() => store.entries.length)

// Número total de páginas
const totalPages = computed(() => {
  return totalItems.value
    ? Math.ceil(totalItems.value / itemsPerPage.value)
    : 1
})

// Entradas de la página actual
const paginatedEntries = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value

  return store.entries.slice(start, end)
})

// Texto "Mostrando X a Y de Z"
const paginationData = computed(() => {
  const total = totalItems.value

  const firstIndex = total
    ? (currentPage.value - 1) * itemsPerPage.value + 1
    : 0

  const lastIndex = total
    ? Math.min(currentPage.value * itemsPerPage.value, total)
    : 0

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ total } registros`
})

// Ajustar la página actual si cambia el total de páginas
watch(totalPages, newLength => {
  if (currentPage.value > newLength) {
    currentPage.value = newLength
  }
})

// Cargar datos al montar el componente
onMounted(async () => {
  await store.load()
})
</script>

<template>
  <VCard>
    <VCardTitle>Auditoría del Sistema</VCardTitle>

    <!-- Tabla con datos -->
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Usuario</th>
          <th>Módulo</th>
          <th>Acción</th>
          <th>Empresa</th>
          <th>Periodo</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="entry in paginatedEntries"
          :key="entry.id"
        >
          <td>{{ entry.timestamp }}</td>
          <td>{{ entry.usuario }}</td>
          <td>{{ entry.modulo }}</td>
          <td>{{ entry.accion }}</td>
          <td>{{ entry.empresaId }}</td>
          <td>{{ entry.periodoId }}</td>
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
