// src/@store/uiSnackbar.store.js
import { defineStore } from "pinia"

export const useUiSnackbarStore = defineStore("uiSnackbar", {
  state: () => ({
    visible: false,
    message: "",
    color: "info",
    timeout: 6000,
  }),

  actions: {
    show({ message, color = "info", timeout = 6000 }) {
      this.message = message
      this.color = color
      this.timeout = timeout
      this.visible = true
    },

    hide() {
      this.visible = false
    },
  },
})
