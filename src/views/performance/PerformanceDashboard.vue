<template>
  <VContainer>
    <PerformancePanel />
    <PerformanceChart />
    <PerformanceMetrics />
  </VContainer>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import PerformancePanel from "@/views/performance/components/PerformancePanel.vue"
import PerformanceChart from "@/views/performance/components/PerformanceChart.vue"
import PerformanceMetrics from "@/views/performance/components/PerformanceMetrics.vue"
import { usePerformanceStore } from "@/@store/performance.store"

const performanceStore = usePerformanceStore()

onMounted(() => {
  // Si más adelante quieres cargar algo extra, este es el sitio.
  // console.log("[PerformanceDashboard] store:", performanceStore)
})
</script>
