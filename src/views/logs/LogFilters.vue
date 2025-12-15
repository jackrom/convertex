<script setup>
import { useLogStore } from "@/@store/log.store"

const store = useLogStore()

function update() {
  store.applyFilters()
}
</script>

<template>
  <VRow class="mb-4">
    <VCol cols="4">
      <VSelect
        label="Nivel"
        :items="['error','warn','info','debug']"
        v-model="store.filters.level"
        clearable
        density="compact"
        @update:modelValue="update"
      />
    </VCol>

    <VCol cols="4">
      <VTextField
        label="Buscar"
        v-model="store.filters.search"
        density="compact"
        clearable
        @update:modelValue="update"
      />
    </VCol>

    <VCol cols="2">
      <VTextField
        label="Desde"
        type="date"
        v-model="store.filters.dateFrom"
        density="compact"
        @update:modelValue="update"
      />
    </VCol>

    <VCol cols="2">
      <VTextField
        label="Hasta"
        type="date"
        v-model="store.filters.dateTo"
        density="compact"
        @update:modelValue="update"
      />
    </VCol>
  </VRow>
</template>
