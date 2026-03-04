import { computed } from "vue"
import { useReportesStore } from "@/@store/reportes.store"

export function useReportesList() {
  const store = useReportesStore()

  return {
    reportes: computed(() => store.lista),
    load: () => store.load(),
    remove: id => store.delete(id),
    getOne: id => store.get(id),
  }

}
