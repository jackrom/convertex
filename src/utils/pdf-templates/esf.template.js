export function esfTemplate(esf) {
  return {
    table: {
      widths: ["*", "auto"],
      body: [
        [{ text: "ACTIVO", bold: true }, ""],

        ["Efectivo", esf.activoCorriente.efectivo],
        ["Cuentas por Cobrar", esf.activoCorriente.cuentasPorCobrar],
        ["Inventarios", esf.activoCorriente.inventarios],
        ["Otros Activos", esf.activoCorriente.otrosActivos],
        [{ text: "Total Activo Corriente", bold: true }, esf.activoCorriente.total],

        ["", ""],
        ["Propiedades y Equipo", esf.activoNoCorriente.propiedadesEquipo],
        ["Intangibles", esf.activoNoCorriente.intangibles],
        ["Inversiones", esf.activoNoCorriente.inversiones],
        ["Otros Activos", esf.activoNoCorriente.otrosActivos],
        [{ text: "Total Activo No Corriente", bold: true }, esf.activoNoCorriente.total],

        [{ text: "TOTAL ACTIVO", bold: true }, esf.totalActivo],

        ["", ""],
        [{ text: "PASIVO", bold: true }, ""],

        ["Proveedores", esf.pasivoCorriente.proveedores],
        ["Obligaciones CP", esf.pasivoCorriente.obligacionesCortoPlazo],
        ["Otros Pasivos", esf.pasivoCorriente.otrosPasivos],
        [{ text: "Total Pasivo Corriente", bold: true }, esf.pasivoCorriente.total],

        ["Obligaciones LP", esf.pasivoNoCorriente.obligacionesLargoPlazo],
        ["Provisiones", esf.pasivoNoCorriente.provisiones],
        ["Otros Pasivos", esf.pasivoNoCorriente.otrosPasivos],
        [{ text: "Total Pasivo No Corriente", bold: true }, esf.pasivoNoCorriente.total],

        [{ text: "TOTAL PASIVO", bold: true }, esf.totalPasivo],

        ["", ""],
        [{ text: "PATRIMONIO", bold: true }, ""],

        ["Capital", esf.patrimonio.capital],
        ["Reservas", esf.patrimonio.reservas],
        ["Resultados Acumulados", esf.patrimonio.resultadosAcumulados],
        ["Resultado del Ejercicio", esf.patrimonio.resultadoEjercicio],
        [{ text: "Total Patrimonio", bold: true }, esf.patrimonio.total],

        ["", ""],
        [{ text: "TOTAL PASIVO + PATRIMONIO", bold: true }, esf.totalPasivoPatrimonio],
      ],
    },
    layout: "lightHorizontalLines",
  }
}
