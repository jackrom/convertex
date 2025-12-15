export function eriTemplate(eri) {
  return {
    table: {
      widths: ["*", "auto"],
      body: [
        ["Ingresos", eri.ingresos],
        ["Costos", eri.costos],
        [{ text: "Utilidad Bruta", bold: true }, eri.utilidadBruta],
        ["Gastos Administrativos", eri.gastosAdm],
        ["Gastos de Ventas", eri.gastosVentas],
        ["Otros Gastos", eri.otrosGastos],
        ["Otros Ingresos", eri.otrosIngresos],
        [{ text: "Utilidad Operativa", bold: true }, eri.utilidadOperativa],
        ["Gastos Financieros", eri.gastosFinancieros],
        ["Ingresos Financieros", eri.ingresosFinancieros],
        [{ text: "Utilidad Antes de Impuestos", bold: true }, eri.utilidadAntesImpuestos],
        ["Impuesto a la Renta", eri.impuestoRenta],
        [{ text: "Utilidad Neta", bold: true }, eri.utilidadNeta],
        ["Otros Resultados", eri.otrosResultados],
        [{ text: "Resultado Integral", bold: true }, eri.resultadoIntegral],
      ],
    },
    layout: "lightHorizontalLines",
  }
}
