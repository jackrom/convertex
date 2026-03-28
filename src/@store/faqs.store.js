// src/@store/faqs.store.js
import { defineStore } from "pinia"
import { useFaqsService } from "@/services/faqs.service"

export const useFaqsStore = defineStore("faqs", {
  state: () => ({
    items: [],
    loading: false,
    loaded: false,
  }),

  actions: {
    async fetchActive() {
      if (this.loaded) return
      this.loading = true
      try {
        const svc = useFaqsService()

        this.items = await svc.getActive()
        this.loaded = true
      } catch (err) {
        console.error("[faqs] Error cargando:", err)
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
