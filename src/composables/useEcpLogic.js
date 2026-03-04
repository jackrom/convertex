import { ECP_MODEL } from "@/utils/ecp-model"

export function useEcpLogic() {

  function calcularPatrimonioFinal(ecp) {
    return (
      ecp.patrimonioInicial +
      ecp.reservas +
      ecp.capitalAdicional +
      ecp.resultadosAcumulados +
      ecp.resultadoEjercicio +
      ecp.ajustesPatrimoniales -
      ecp.dividendos
    )
  }

  function normalizarECP(raw) {
    return {
      ...ECP_MODEL,
      ...raw,
      patrimonioFinal: raw.patrimonioFinal ?? calcularPatrimonioFinal(raw),
    }
  }

  function validarECP(ecp) {
    if (ecp.patrimonioFinal < 0) {
      throw new Error("El patrimonio final no puede ser negativo.")
    }
  }

  return {
    calcularPatrimonioFinal,
    normalizarECP,
    validarECP,
  }
}
