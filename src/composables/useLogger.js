import { useLogStore } from "@/@store/log.store"

export function useLogger() {
  const logStore = useLogStore()

  function buildEntry(level, message, meta = {}) {
    return {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      level, // info, warn, error, debug
      message,
      meta
    }
  }

  function info(message, meta = {}) {
    logStore.add(buildEntry("info", message, meta))
  }

  function warn(message, meta = {}) {
    logStore.add(buildEntry("warn", message, meta))
  }

  function error(message, meta = {}) {
    logStore.add(buildEntry("error", message, meta))
  }

  function debug(message, meta = {}) {
    logStore.add(buildEntry("debug", message, meta))
  }

  return {
    info,
    warn,
    error,
    debug,
  }
}
