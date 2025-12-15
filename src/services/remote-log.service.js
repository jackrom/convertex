import { http } from "@/services/http.service"

export function useRemoteLogService() {

  async function enviarLog(entry) {
    try {
      await http.post("/v1/convertex/logs", entry)
    } catch (err) {
      console.warn("No se pudo enviar log al servidor", err)
    }
  }

  async function enviarLote(entries) {
    try {
      await http.post("/v1/convertex/logs/batch", { logs: entries })
    } catch (err) {
      console.warn("No se pudo enviar lote de logs", err)
    }
  }

  return {
    enviarLog,
    enviarLote,
  }
}
