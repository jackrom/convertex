import { ref } from "vue"
import { useLogStore } from "@/@store/log.store";

export function useLogsDashboard() {
  const store = useLogStore()
  const selectedLog = ref(null)
  const detailOpen = ref(false)

  function openDetail(log) {
    selectedLog.value = log
    detailOpen.value = true
  }

  function exportCSV() {
    const rows = store.filtered.map(l => ({
      timestamp: l.timestamp,
      level: l.level,
      message: l.message,
      meta: JSON.stringify(l.meta),
    }))

    const csv = [
      ["timestamp", "level", "message", "meta"],
      ...rows.map(r => [r.timestamp, r.level, r.message, r.meta])
    ]
      .map(e => e.join(","))
      .join("\n")

    const blob = new Blob([csv], { type: "text/csvcharset=utf-8" })
    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)
    link.download = "logs.csv"
    link.click()
  }

  return {
    selectedLog,
    detailOpen,
    openDetail,
    exportCSV,
  }
}
