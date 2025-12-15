import { onMounted, onUnmounted } from "vue"
import { usePerformanceStore } from "@/@store/performance.store"

export function usePerformance() {
  const store = usePerformanceStore()
  let frame = 0
  let lastTime = performance.now()

  function trackFPS() {
    frame++

    const now = performance.now()

    if (now - lastTime >= 1000) {
      store.setFPS(frame)
      frame = 0
      lastTime = now
    }

    requestAnimationFrame(trackFPS)
  }

  function trackMemory() {
    if (performance.memory) {
      store.setMemory({
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
      })
    }
  }

  function trackLongTasks() {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        store.addLongTask({
          duration: entry.duration,
          start: entry.startTime,
        })
      }
    })

    observer.observe({ type: "longtask", buffered: true })
  }

  onMounted(() => {
    trackFPS()
    setInterval(trackMemory, 3000)
    trackLongTasks()
  })

  onUnmounted(() => {
    // Se pueden limpiar observers si se requiere
  })
}
