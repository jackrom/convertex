import { useAlertStore } from "@/@store/alert.store"

export function useAlerts() {
  const store = useAlertStore()

  function success(msg, timeout = 3000) {
    store.trigger(msg, 'success', timeout)
  }

  function error(msg, timeout = 5000) {
    store.trigger(msg, 'error', timeout)
  }

  function warning(msg, timeout = 4000) {
    store.trigger(msg, 'warning', timeout)
  }

  function info(msg, timeout = 3000) {
    store.trigger(msg, 'info', timeout)
  }

  return {
    success,
    error,
    warning,
    info,
  }
}
