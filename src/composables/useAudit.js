import { useAuditStore } from "@/@store/audit.store";
import { useSessionUser } from "@/composables/useSessionUser"

export function useAudit() {
  const store = useAuditStore()
  const user = useSessionUser()

  function registrar({
    modulo,
    accion,
    targetId,
    antes,
    despues,
    empresaId,
    periodoId,
    meta = {},
  }) {
    const entry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      usuario: user.email || user.id || "desconocido",
      modulo,
      accion,            // create, update, delete, import, export
      targetId,
      empresaId,
      periodoId,
      antes: antes ? JSON.parse(JSON.stringify(antes)) : null,
      despues: despues ? JSON.parse(JSON.stringify(despues)) : null,
      meta,
    }

    store.add(entry)
  }

  return { registrar }
}
