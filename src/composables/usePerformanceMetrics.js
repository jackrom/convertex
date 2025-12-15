import { onMounted, onBeforeUnmount } from "vue"
import { usePerformanceStore } from "@/@store/performance.store"

export function usePerformanceMetrics(componentName) {
  const store = usePerformanceStore()
  const start = performance.now()

  onMounted(() => {
    const duration = performance.now() - start

    store.addComponentTime({
      component: componentName,
      duration,
      timestamp: new Date().toISOString(),
    })
  })

  onBeforeUnmount(() => {
    // Se podrían medir desmontajes
  })
}
