// src/@store/log.store.js
import { defineStore } from "pinia"
import { useIndexedDBService } from "@/services/indexeddb.service"

export const useLogStore = defineStore("logs", {
  state: () => ({
    logs: [],
    filtered: [],
    filters: {
      level: null,      // error, warn, info, debug
      search: "",
      dateFrom: null,
      dateTo: null,
    },
    loaded: false,
  }),

  actions: {
    async load() {
      if (this.loaded) return

      const idb = useIndexedDBService()

      try {
        this.logs = await idb.getAll("logs")
        this.filtered = [...this.logs]
        this.loaded = true

        console.log("Entradas de logs cargadas:", this.logs)
      } catch (err) {
        console.error("[logs] Error cargando logs desde IndexedDB", err)
      }
    },

    async add(entry) {
      const idb = useIndexedDBService()

      this.logs.push(entry)

      try {
        await idb.put("logs", entry)
      } catch (err) {
        console.warn("[logs] No se pudo guardar log en IndexedDB", err)
      }

      this.applyFilters()
    },

    applyFilters() {
      let list = [...this.logs]

      // level
      if (this.filters.level) {
        list = list.filter(l => l.level === this.filters.level)
      }

      // search
      if (this.filters.search) {
        const term = this.filters.search.toLowerCase()

        list = list.filter(l => {
          const msg  = (l.message ?? "").toString().toLowerCase()
          const meta = JSON.stringify(l.meta ?? "").toLowerCase()

          return msg.includes(term) || meta.includes(term)
        })
      }

      // date filtering
      if (this.filters.dateFrom) {
        list = list.filter(l => new Date(l.timestamp) >= new Date(this.filters.dateFrom))
      }

      if (this.filters.dateTo) {
        list = list.filter(l => new Date(l.timestamp) <= new Date(this.filters.dateTo))
      }

      this.filtered = list
    },

    async clear() {
      const idb = useIndexedDBService()

      try {
        const all = await idb.getAll("logs")

        for (const log of all) {
          await idb.remove("logs", log.id)
        }

        this.logs = []
        this.filtered = []
      } catch (err) {
        console.error("[logs] Error limpiando logs en IndexedDB", err)
      }
    },
  },
})
