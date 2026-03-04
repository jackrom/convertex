import { defineStore } from "pinia"

export const useUiStore = defineStore("ui", {
  state: () => ({
    loading: false,
    message: null,
    error: null,
  }),

  actions: {
    showLoading(msg) {
      this.loading = true
      this.message = msg ?? null
    },

    hideLoading() {
      this.loading = false
      this.message = null
    },

    showError(msg) {
      this.error = msg
    },

    clearError() {
      this.error = null
    },
  },
})
