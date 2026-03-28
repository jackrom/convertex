// src/@store/tutorials.store.js
import { defineStore } from "pinia"
import { useTutorialsService } from "@/services/tutorials.service"

export const useTutorialsStore = defineStore("tutorials", {
  state: () => ({
    items: [],
    grouped: {},
    categories: [],
    soporteItems: [],
    loading: false,
    loaded: false,
    soporteLoaded: false,
  }),

  getters: {
    /** Lista de categorías únicas en orden */
    categoryList: state => Object.keys(state.grouped),

    /** Obtener tutoriales de una categoría */
    byCategory: state => cat => state.grouped[cat] ?? [],

    /** Tutoriales destacados */
    featured: state => state.items.filter(t => t.destacado),
  },

  actions: {
    async fetchActive() {
      if (this.loaded) return

      this.loading = true
      try {
        const svc = useTutorialsService()
        const { items, grouped } = await svc.getActive()

        this.items = items
        this.grouped = grouped
        this.categories = Object.keys(grouped)
        this.loaded = true
      } catch (err) {
        console.error("[tutorials] Error cargando:", err)
      } finally {
        this.loading = false
      }
    },

    async fetchSoporte() {
      if (this.soporteLoaded) return

      this.loading = true
      try {
        const svc = useTutorialsService()

        this.soporteItems = await svc.getSoporte()
        this.soporteLoaded = true
      } catch (err) {
        console.error("[tutorials] Error cargando soporte:", err)
      } finally {
        this.loading = false
      }
    },

    invalidate() {
      this.loaded = false
      this.soporteLoaded = false
      this.items = []
      this.grouped = {}
      this.categories = []
      this.soporteItems = []
    },
  },
})
