import { ref } from "vue"

export function useSessionUser() {
  const raw = sessionStorage.getItem("userData")
  let parsed = null

  try {
    parsed = raw ? JSON.parse(raw) : null
  } catch {
    sessionStorage.removeItem("userData")
  }

  const userId = sessionStorage.getItem("sub") || null
  const aplicaciones = parsed?.applications ?? []
  const convertexApp = aplicaciones.find(a => a.application?.app_key === "convertex")

  console.log("aplicaciones", aplicaciones)

  return {
    userId,
    aplicaciones,
    storage: convertexApp?.storage ?? 0,
    fechaPago: convertexApp?.fechapago ?? null,
  }
}
