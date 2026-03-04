import { useIndexedDBService } from "@/services/indexeddb.service"
import { normalizeReporte } from "@/utils/reporte-normalizer"

export function useReporteCache() {
  const idb = useIndexedDBService()

  async function getOrFetch(periodoId, apiFn) {
    // 1. Buscar en IndexedDB por periodo
    const todos = await idb.getAll("reportes")
    const local = todos.find(r => r.periodoId === periodoId)

    if (local) return normalizeReporte(local)

    // 2. API
    const remotos = await apiFn(periodoId)
    if (!remotos.length) return null

    const reporte = normalizeReporte(remotos[0])

    await idb.put("reportes", reporte)

    return reporte
  }

  async function save(reporte) {
    await idb.put("reportes", reporte)
  }

  async function invalidate(periodoId) {
    const todos = await idb.getAll("reportes")
    const borrar = todos.filter(r => r.periodoId === periodoId)

    for (const r of borrar) await idb.delete("reportes", r.id)
  }

  return { getOrFetch, save, invalidate }
}
