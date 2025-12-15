import { useLogger } from "@/composables/useLogger"

export function installGlobalErrorHandler(app) {
  const logger = useLogger()

  app.config.errorHandler = (err, instance, info) => {
    logger.error("Error Global del Sistema", {
      error: err.toString(),
      stack: err.stack,
      component: instance?.$?.type?.name,
      info,
    })
  }

  window.addEventListener("error", e => {
    logger.error("Error nativo del navegador", {
      message: e.message,
      source: e.filename,
      line: e.lineno,
      col: e.colno,
      error: e.error?.stack,
    })
  })

  window.addEventListener("unhandledrejection", e => {
    logger.error("Promesa sin catch", {
      reason: e.reason,
    })
  })
}
