import { ERI_MODEL } from "@/utils/eri-model"

export function useEriLogic() {

  function calcularUtilidadBruta(eri) {
    return eri.ingresos - eri.costos
  }

  function calcularUtilidadOperativa(eri) {
    return (
      eri.utilidadBruta -
      (eri.gastosAdm + eri.gastosVentas + eri.otrosGastos) +
      eri.otrosIngresos
    )
  }

  function calcularUtilidadAntesImpuestos(eri) {
    return (
      eri.utilidadOperativa -
      eri.gastosFinancieros +
      eri.ingresosFinancieros
    )
  }

  function calcularUtilidadNeta(eri) {
    return eri.utilidadAntesImpuestos - eri.impuestoRenta
  }

  function calcularResultadoIntegral(eri) {
    return eri.utilidadNeta + eri.otrosResultados
  }

  function normalizarERI(raw) {
    const eri = { ...ERI_MODEL, ...raw }

    eri.utilidadBruta = calcularUtilidadBruta(eri)
    eri.utilidadOperativa = calcularUtilidadOperativa(eri)
    eri.utilidadAntesImpuestos = calcularUtilidadAntesImpuestos(eri)
    eri.utilidadNeta = calcularUtilidadNeta(eri)
    eri.resultadoIntegral = calcularResultadoIntegral(eri)

    return eri
  }

  return {
    normalizarERI,
    calcularUtilidadBruta,
    calcularUtilidadOperativa,
    calcularUtilidadAntesImpuestos,
    calcularUtilidadNeta,
    calcularResultadoIntegral,
  }
}
