import { useIndexedDBService } from "@/services/indexeddb.service"

export function useConvertexCache() {
  const idb = useIndexedDBService()

  async function getOrFetch(store, apiFn, normalizeFn) {
    const local = await idb.getAll(store)

    if (local.length > 0) return local

    const remote = await apiFn()
    const normalized = remote.map(normalizeFn)

    await idb.bulkPut(store, normalized)

    return normalized
  }

  return {
    getEmpresas: () => getOrFetch("empresas", apiFn.empresas.fetch, normalizeEmpresa),
    getPeriodos: () => getOrFetch("periodos", apiFn.periodos.fetch, normalizePeriodo),
    getReportes: () => getOrFetch("reportes", apiFn.reportes.fetch, normalizeReporte),

    invalidateEmpresas: () => idb.clear("empresas"),
    invalidatePeriodos: () => idb.clear("periodos"),
    invalidateReportes: () => idb.clear("reportes"),
  }
}
