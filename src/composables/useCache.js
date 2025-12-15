// src/composables/useCache.js
import { useIndexedDBService } from "@/services/indexeddb.service"

/**
 * Sistema de caché unificado para Convertex.
 */
export function useCache() {
  const idb = useIndexedDBService()

  /**
   * Obtiene datos desde IndexedDB si existen,
   * o desde la API si no existen. Luego los guarda en la DB local.
   */
  async function getOrFetch(store, apiFn, { force = false } = {}) {
    // 1. Si force=true → ignorar cache
    if (force) {
      const remote = await apiFn()
      if (Array.isArray(remote)) {
        await idb.clear(store)
        await idb.bulkPut(store, remote)
      }

      return remote
    }

    // 2. Intentar cargar desde IndexedDB
    const local = await idb.getAll(store)
    if (local && local.length > 0) {
      return local
    }

    // 3. Fallback → cargar desde API
    const remote = await apiFn()
    if (Array.isArray(remote)) {
      await idb.bulkPut(store, remote)
    }

    return remote
  }


  /**
   * Guarda un valor en el store indicado (sobrescribe todo)
   * usado cuando eliminamos la última empresa.
   */
  async function set(store, value) {
    await idb.clear(store)

    if (Array.isArray(value)) {
      return idb.bulkPut(store, value)
    }

    return idb.put(store, value)
  }

  /**
   * Leer un store completo o un registro por ID
   */
  async function get(store, key = null) {
    if (key == null) return idb.getAll(store)

    return idb.get(store, key)
  }

  return {
    getOrFetch,
    get,
    set,

    // invalidadores
    invalidateEmpresas: () => idb.clear("empresas"),
    invalidatePeriodos: () => idb.clear("periodos"),
    invalidateReportes: () => idb.clear("reportes"),
  }
}
