export function useReporteLogic() {
  function mergeConTxt(reporte, dataTxt) {
    return {
      ...reporte,
      ecp: dataTxt.ecp ?? reporte.ecp,
      eri: dataTxt.eri ?? reporte.eri,
      esf: dataTxt.esf ?? reporte.esf,
      notas: dataTxt.notas ?? reporte.notas,
      sector: dataTxt.sector ?? reporte.sector,
      origen: "txt",
    }
  }

  function validarReporte(reporte) {
    if (!reporte.periodoId) throw new Error("Reporte sin periodoId")
    if (!reporte.empresaId) throw new Error("Reporte sin empresaId")
  }

  return {
    mergeConTxt,
    validarReporte,
  }
}
