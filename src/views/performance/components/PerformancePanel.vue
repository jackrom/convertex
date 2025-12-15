<script setup>
import { computed } from "vue"
import { usePerformanceStore } from "@/@store/performance.store"

const store = usePerformanceStore()

const memoryUsedMb = computed(() => {
  const used = store.memory?.used ?? 0

  return (used / 1048576).toFixed(2)
})
</script>

<template>
  <VCard class="pa-4 mt-6">
    <VCardTitle>Métricas de Performance</VCardTitle>

    <VRow>
      <VCol cols="12" md="4" lg="3">
        <VAlert type="info">
          FPS: {{ store.fps }}
        </VAlert>
      </VCol>

      <VCol cols="12" md="4" lg="3">
        <VAlert type="warning">
          Memoria usada: {{ memoryUsedMb }} MB
        </VAlert>
      </VCol>

      <VCol cols="12" md="4" lg="3">
        <VAlert type="info">
          Long Tasks: {{ store.longTasks.length }}
        </VAlert>
      </VCol>
    </VRow>
  </VCard>
</template>
