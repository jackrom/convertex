// src/@store/recommendations.store.js
import { defineStore } from "pinia"
import { useRecommendationsService } from "@/services/recommendations.service"

export const useRecommendationsStore = defineStore("recommendations", {
  state: () => ({
    items: [],
    loading: false,
    loaded: false,
  }),

  actions: {
    async fetchActive() {
      if (this.loaded) return // cache: solo cargar una vez

      this.loading = true
      try {
        const svc = useRecommendationsService()

        this.items = await svc.getActive()
        this.loaded = true
      } catch (err) {
        console.error("[recommendations] Error cargando:", err)
      } finally {
        this.loading = false
      }
    },

    invalidate() {
      this.loaded = false
      this.items = []
    },
  },
})
