import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    show: false,
    message: '',
    color: 'info',  // success, error, warning, info
    timeout: 3500,
  }),

  actions: {
    trigger(message, color = 'info', timeout = 3500) {
      this.message = message
      this.color = color
      this.timeout = timeout
      this.show = true
    },

    hide() {
      this.show = false
    },
  },
})
