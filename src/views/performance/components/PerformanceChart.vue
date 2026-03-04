<script setup>
import { computed } from "vue"
import { usePerformanceStore } from "@/@store/performance.store"
import ApexChart from "@/pages/charts/apex-chart.vue"

const store = usePerformanceStore()

// Puntos [ { x, y } ]
const points = computed(() =>
  (store.longTasks ?? []).map(t => ({
    x: t.start,
    y: t.duration,
  })),
)

// Series completa que espera ApexCharts
const chartSeries = computed(() => [
  {
    name: "Long Tasks",
    data: points.value,
  },
])
</script>

<template>
  <VCard class="mt-4">
    <VCardTitle>Long Tasks (ms)</VCardTitle>

    <VCardText>

    </VCardText>
  </VCard>
</template>
