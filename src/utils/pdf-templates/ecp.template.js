export function ecpTemplate(ecp) {
  return {
    table: {
      widths: ["*", "auto"],
      body: [
        ["Patrimonio Inicial", ecp.patrimonioInicial],
        ["Reservas", ecp.reservas],
        ["Capital Adicional", ecp.capitalAdicional],
        ["Resultados Acumulados", ecp.resultadosAcumulados],
        ["Resultado del Ejercicio", ecp.resultadoEjercicio],
        ["Dividendos", ecp.dividendos],
        ["Ajustes Patrimoniales", ecp.ajustesPatrimoniales],
        [{ text: "Patrimonio Final", bold: true }, ecp.patrimonioFinal],
      ],
    },
    layout: "lightHorizontalLines",
  }
}
