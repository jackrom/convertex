// src/modules/txt-report/composables/useEcpModule.ts
import { reactive, watch } from 'vue'
import { useTxtReportStore } from '@/stores/txtReportStore'

/**
 * Estructura genérica para ECP:
 * clave: código de ECP (ej. "990101_301")
 * valor: número o null
 */
export interface EcpMap {
  [code: string]: number | null
}

export function useEcpModule() {
  const reportStore = useTxtReportStore()

  // Objeto reactivo que usará la vista (v-model)
  const ecp = reactive<EcpMap>({})

  // -------- Helpers internos --------

  function clearEcp() {
    Object.keys(ecp).forEach(key => {
      delete ecp[key]
    })
  }

  function hydrateFromSource(source?: EcpMap | null) {
    clearEcp()

    if (!source) return

    for (const [code, value] of Object.entries(source)) {
      // Normalizamos: si viene undefined, lo tratamos como null
      ecp[code] = value ?? null
    }
  }

  // -------- Carga inicial desde IndexedDB / API --------
  // Aquí asumimos que el store ya está sincronizado con IndexedDB
  // como en ESF/ERI, y que txtReport.ecp es un objeto plano
  watch(
    () => reportStore.currentReport?.ecp as EcpMap | undefined | null,
    newRawEcp => {
      hydrateFromSource(newRawEcp ?? null)
    },
    { immediate: true }
  )

  // -------- Guardado en tiempo real hacia IndexedDB / API --------
  // Igual patrón que en los otros módulos: deep watch sobre ecp
  watch(
    ecp,
    newVal => {
      const report = reportStore.currentReport
      if (!report?.id) return

      // Clon plano para no pasar el objeto reactivo directamente
      const payload: EcpMap = {}
      for (const [code, value] of Object.entries(newVal)) {
        payload[code] = value ?? null
      }

      // 🔁 Aquí llamas a lo mismo que ya usas para ESF/ERI
      // Ejemplo genérico (ajústalo a tus nombres reales):
      reportStore.updateModuleFromUi({
        id: report.id,
        module: 'ecp',
        data: payload,
      })
      // Internamente ese método ya actualiza IndexedDB + API
    },
    { deep: true }
  )

  return {
    ecp,
  }
}
