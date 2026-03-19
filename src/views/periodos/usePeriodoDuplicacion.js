/**
 * usePeriodoDuplicacion.js
 *
 * Composable que centraliza las reglas de duplicación de periodos/reportes.
 * Determina si un periodo puede ser duplicado según su tipo y estado.
 */

import { computed } from "vue"

const TIPO_REPORTE = {
  FLUJO: "flujo",
  INICIAL: "inicial",
}

/**
 * @param {Object} options
 * @param {import('vue').Ref|import('vue').ComputedRef} options.periodo - El periodo a evaluar
 * @param {import('vue').Ref|import('vue').ComputedRef} options.todosLosPeriodos - Lista completa de periodos de la empresa
 */
export function usePeriodoDuplicacion({ periodo, todosLosPeriodos }) {
  /**
   * Indica si el periodo es de tipo "inicial"
   */
  const esInicial = computed(() => {
    return periodo.value?.tiporeporte === TIPO_REPORTE.INICIAL
  })

  /**
   * Indica si ya existe un periodo del mismo tipo para el mismo año
   * (relevante solo para flujos con variantes consolidado/individual)
   */
  const existeVarianteComplementaria = computed(() => {
    const p = periodo.value
    if (!p) return false

    const mismoAnio = (todosLosPeriodos.value ?? []).filter(
      other =>
        other.id !== p.id &&
        Number(other.periodo) === Number(p.periodo) &&
        other.tiporeporte === p.tiporeporte,
    )

    // Para flujos: verificar si ya existe la variante opuesta
    if (p.tiporeporte === TIPO_REPORTE.FLUJO) {
      return mismoAnio.some(other => other.esconsolidado !== p.esconsolidado)
    }

    return false
  })

  /**
   * Determina si el botón de duplicar debe estar habilitado
   */
  const puedeDuplicar = computed(() => {
    // Periodos iniciales NUNCA se pueden duplicar
    if (esInicial.value) return false

    // Periodos de flujo sí se pueden duplicar
    return true
  })

  /**
   * Texto explicativo para el tooltip del botón de duplicar
   */
  const duplicarTooltip = computed(() => {
    if (esInicial.value) {
      return "Los periodos iniciales no se pueden duplicar. Solo puede existir uno por año."
    }

    return "Duplicar este periodo"
  })

  /**
   * Color/estado visual del chip de tipo de reporte
   */
  const tipoReporteDisplay = computed(() => {
    const p = periodo.value
    if (!p) return { label: "—", color: "default", icon: "" }

    if (p.tiporeporte === TIPO_REPORTE.INICIAL) {
      return {
        label: "Periodo Inicial",
        color: "info",
        icon: "tabler-calendar-check",
      }
    }

    return {
      label: p.esconsolidado ? "Consolidado" : "Individual",
      color: p.esconsolidado ? "primary" : "secondary",
      icon: p.esconsolidado ? "tabler-building-bank" : "tabler-user",
    }
  })

  return {
    esInicial,
    existeVarianteComplementaria,
    puedeDuplicar,
    duplicarTooltip,
    tipoReporteDisplay,
    TIPO_REPORTE,
  }
}
