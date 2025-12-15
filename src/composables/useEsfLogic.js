import { ESF_MODEL } from "@/utils/esf-model"

export function useEsfLogic() {

  function calcularSubtotales(esf) {
    // Activo
    esf.activoCorriente.total =
      esf.activoCorriente.efectivo +
      esf.activoCorriente.cuentasPorCobrar +
      esf.activoCorriente.inventarios +
      esf.activoCorriente.otrosActivos

    esf.activoNoCorriente.total =
      esf.activoNoCorriente.propiedadesEquipo +
      esf.activoNoCorriente.intangibles +
      esf.activoNoCorriente.inversiones +
      esf.activoNoCorriente.otrosActivos

    // Pasivo
    esf.pasivoCorriente.total =
      esf.pasivoCorriente.proveedores +
      esf.pasivoCorriente.obligacionesCortoPlazo +
      esf.pasivoCorriente.otrosPasivos

    esf.pasivoNoCorriente.total =
      esf.pasivoNoCorriente.obligacionesLargoPlazo +
      esf.pasivoNoCorriente.provisiones +
      esf.pasivoNoCorriente.otrosPasivos

    // Patrimonio
    esf.patrimonio.total =
      esf.patrimonio.capital +
      esf.patrimonio.reservas +
      esf.patrimonio.resultadosAcumulados +
      esf.patrimonio.resultadoEjercicio

    return esf
  }

  function calcularTotales(esf) {
    esf.totalActivo =
      esf.activoCorriente.total + esf.activoNoCorriente.total

    esf.totalPasivo =
      esf.pasivoCorriente.total + esf.pasivoNoCorriente.total

    esf.totalPatrimonio = esf.patrimonio.total

    esf.totalPasivoPatrimonio = esf.totalPasivo + esf.totalPatrimonio

    return esf
  }

  function validarBalanceado(esf) {
    if (esf.totalActivo !== esf.totalPasivoPatrimonio) {
      console.warn("⚠ ESF no está balanceado.")
    }
  }

  function normalizarESF(raw) {
    let esf = structuredClone(ESF_MODEL)

    // Mezclar datos del raw con el modelo base
    esf = { ...esf, ...raw }

    // Recalcular todo
    esf = calcularSubtotales(esf)
    esf = calcularTotales(esf)
    validarBalanceado(esf)

    return esf
  }

  return {
    calcularSubtotales,
    calcularTotales,
    validarBalanceado,
    normalizarESF,
  }
}
