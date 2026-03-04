import { defineStore } from "pinia"
import { useIndexedDBService } from "@/services/indexeddb.service"

export const useAuditStore = defineStore("auditoria", {
  state: () => ({
    entries: [],
  }),

  actions: {
    async load() {
      const idb = useIndexedDBService()

      this.entries = await idb.getAll("auditoria")
      console.log("Entradas de auditoría cargadas:", this.entries)
    },

    async add(entry) {
      const idb = useIndexedDBService()

      this.entries.push(entry)
      await idb.put("auditoria", entry)
    },

    async clear() {
      const idb = useIndexedDBService()
      const all = await idb.getAll("auditoria")
      for (const log of all) await idb.delete("auditoria", log.id)
      this.entries = []
    },
  },
})
