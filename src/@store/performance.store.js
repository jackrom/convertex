// src/@store/performance.store.js
import { defineStore } from "pinia"

export const usePerformanceStore = defineStore("performance", {
  state: () => ({
    fps: 0,
    memory: {
      used: 0,
      total: 0,
    },
    longTasks: [],
    componentTimes: [],
    apiTimes: [],
    txtImportTimes: [],
    exportTimes: [],
  }),

  actions: {
    setFPS(val) {
      this.fps = val ?? 0
    },

    setMemory(val) {
      this.memory = val || { used: 0, total: 0 }
    },

    addLongTask(task) {
      this.longTasks.push(task)
    },

    addComponentTime(entry) {
      this.componentTimes.push(entry)
    },

    addApiTime(entry) {
      this.apiTimes.push(entry)
    },

    addTxtImport(entry) {
      this.txtImportTimes.push(entry)
    },

    addExport(entry) {
      this.exportTimes.push(entry)
    },

    reset() {
      this.longTasks = []
      this.componentTimes = []
      this.apiTimes = []
      this.txtImportTimes = []
      this.exportTimes = []
    },
  },
})
