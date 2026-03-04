import { ref } from "vue"
import { useLogger } from "@/composables/useLogger"

export function useErrorBoundary(componentName) {
  const hasError = ref(false)
  const errorInfo = ref(null)
  const logger = useLogger()

  function captureError(err) {
    hasError.value = true
    errorInfo.value = err

    logger.error(`Error en componente: ${componentName}`, {
      message: err.toString(),
      stack: err.stack,
    })
  }

  function reset() {
    hasError.value = false
    errorInfo.value = null
  }

  return {
    hasError,
    errorInfo,
    captureError,
    reset,
  }
}
