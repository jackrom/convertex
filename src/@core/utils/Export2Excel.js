/* eslint-disable */
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

import {
  copiarPropiedadesDeArray,
  formatearEcp,
  formatearEfe,
  formatearEfe2,
  formatearEri,
  formatearEri2,
  formatearEsf,
  formatearEsf2,
  guardarArchivoDeTexto,
  obtenerValoresSinAnt,
  pasarObjetoEcp,
  pasarObjetoEfe,
  pasarObjetoEri,
  pasarObjetoEsf,
} from "@core/utils/formatters"
import ESF_DATA_JSON from "@/assets/jsondata/esf.json"
import ERI_DATA_JSON from "@/assets/jsondata/eri.json"
import EFE_DATA_JSON from "@/assets/jsondata/efe.json"
import ECP_DATA_JSON from "@/assets/jsondata/ecp.json"
import { useReportStore } from "@/@store/reportStore"


const { jsPDF } = window.jspdf

export const descargarExcel = async () => {
  const reportStore = useReportStore()

  let ecp = {
    ecp: reportStore.getReportData("ecpifluc"),
  }

  setTimeout(async () => {

    let arrayEsf = [
      reportStore.getReportData("activoscorrientesifluc"),
      reportStore.getReportData("activosnocorrientesifluc"),
      reportStore.getReportData("pasivoscorrientesifluc"),
      reportStore.getReportData("pasivosnocorrientesifluc"),
      reportStore.getReportData("patrimonioifluc")
    ]

    let arrayEri = [
      reportStore.getReportData("costosifluc"),
      reportStore.getReportData("ingresosifluc"),
      reportStore.getReportData("otrosingresosifluc"),
      reportStore.getReportData("gastosadministrativosifluc"),
      reportStore.getReportData("gastosdeventasifluc"),
      reportStore.getReportData("gastosfinancierosifluc"),
      reportStore.getReportData("otrosgastosifluc"),
      reportStore.getReportData("resultadosparticipacioncontroladoraifluc"),
      reportStore.getReportData("otrosresultadosintegralifluc"),
      reportStore.getReportData("operacionesdiscontinuadasifluc"),
      reportStore.getReportData("resultadosifluc"),
    ]

    let arrayEfe = [
      reportStore.getReportData("actividadesdeoperacionifluc"),
      reportStore.getReportData("actividadesdeinversionifluc"),
      reportStore.getReportData("actividadesdefinanciamientoifluc"),
      reportStore.getReportData("conciliacionganancianetaifluc"),
    ]

    let esfData = copiarPropiedadesDeArray(arrayEsf)
    let eriData = copiarPropiedadesDeArray(arrayEri)
    let efeData = copiarPropiedadesDeArray(arrayEfe)

    let esfFormateado = formatearEsf(esfData, ESF_DATA_JSON)
    let eriFormateado = formatearEri(eriData, ERI_DATA_JSON)
    let efeFormateado = formatearEfe(efeData, EFE_DATA_JSON)
    formatearEcp(ecp.ecp, ECP_DATA_JSON)

    let arrayEsfAnt = [
      reportStore.getReportData("activoscorrientesifluc_ant", true),
      reportStore.getReportData("activosnocorrientesifluc_ant", true),
      reportStore.getReportData("pasivoscorrientesifluc_ant", true),
      reportStore.getReportData("pasivosnocorrientesifluc_ant", true),
      reportStore.getReportData("patrimonioifluc_ant", true),
    ]

    let arrayEriAnt = [
      reportStore.getReportData("costosifluc_ant", true),
      reportStore.getReportData("ingresosifluc_ant", true),
      reportStore.getReportData("otrosingresosifluc_ant", true),
      reportStore.getReportData("gastosadministrativosifluc_ant", true),
      reportStore.getReportData("gastosdeventasifluc_ant", true),
      reportStore.getReportData("gastosfinancierosifluc_ant", true),
      reportStore.getReportData("otrosgastosifluc_ant", true),
      reportStore.getReportData("resultadosparticipacioncontroladoraifluc_ant", true),
      reportStore.getReportData("otrosresultadosintegralifluc_ant", true),
      reportStore.getReportData("operacionesdiscontinuadasifluc_ant", true),
      reportStore.getReportData("resultadosifluc_ant", true),
    ]

    let arrayEfeAnt = [
      reportStore.getReportData("actividadesdeoperacionifluc_ant", true),
      reportStore.getReportData("actividadesdeinversionifluc_ant", true),
      reportStore.getReportData("actividadesdefinanciamientoifluc_ant", true),
      reportStore.getReportData("conciliacionganancianetaifluc_ant", true),
    ]

    let esfDataFinal = copiarPropiedadesDeArray(arrayEsfAnt)
    let eriDataFinal = copiarPropiedadesDeArray(arrayEriAnt)
    let efeDataFinal = copiarPropiedadesDeArray(arrayEfeAnt)

    let lists = {
      'ESF': formatearEsf2(esfDataFinal, esfFormateado),
      'ERI': formatearEri2(eriDataFinal, eriFormateado),
      'EFE': formatearEfe2(efeDataFinal, efeFormateado),
      'ECP': formatearEcp(ecp.ecp, ECP_DATA_JSON),
    }

    let reporte = "Reporte"

    let wb = XLSX.utils.book_new()

    for(const sheetName in lists) {
      let ws = XLSX.utils.json_to_sheet(lists[sheetName])
      XLSX.utils.book_append_sheet(wb, ws, sheetName)
    }

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: "array" })

    const blob = new Blob([wbout], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })

    saveAs(blob, reporte)

  }, 1000)
}

export const descargarPDF = async () => {
  const reportStore = useReportStore()

  let listaModulos = [];

  setTimeout(async () => {
    let arrayEfe = [
      reportStore.getReportData("actividadesdeoperacionifluc"),
      reportStore.getReportData("actividadesdeinversionifluc"),
      reportStore.getReportData("actividadesdefinanciamientoifluc"),
      reportStore.getReportData("conciliacionganancianetaifluc"),
    ]
    let efeData = copiarPropiedadesDeArray(arrayEfe)
    let efeFormateado = formatearEfe(efeData, EFE_DATA_JSON)
    let listEFE = {
      'EFE': formatearEfe2(efeData, efeFormateado),
    }

    listaModulos.push(listEFE['EFE'])

    let arrayEri = [
      reportStore.getReportData("costosifluc"),
      reportStore.getReportData("ingresosifluc"),
      reportStore.getReportData("otrosingresosifluc"),
      reportStore.getReportData("gastosdeventasifluc"),
      reportStore.getReportData("gastosadministrativosifluc"),
      reportStore.getReportData("gastosfinancierosifluc"),
      reportStore.getReportData("otrosgastosifluc"),
      reportStore.getReportData("resultadosifluc"),
      reportStore.getReportData("operacionesdiscontinuadasifluc"),
      reportStore.getReportData("otrosresultadosintegralifluc"),
      reportStore.getReportData("resultadosparticipacioncontroladoraifluc"),
    ]
    let eriData = copiarPropiedadesDeArray(arrayEri)
    let eriFormateado = formatearEri(eriData, ERI_DATA_JSON)
    let arrayEriAnt = [
      reportStore.getReportData("costosifluc_ant", true),
      reportStore.getReportData("ingresosifluc_ant", true),
      reportStore.getReportData("otrosingresosifluc_ant", true),
      reportStore.getReportData("gastosdeventasifluc_ant", true),
      reportStore.getReportData("gastosadministrativosifluc_ant", true),
      reportStore.getReportData("gastosfinancierosifluc_ant", true),
      reportStore.getReportData("otrosgastosifluc_ant", true),
      reportStore.getReportData("resultadosifluc_ant", true),
      reportStore.getReportData("operacionesdiscontinuadasifluc_ant", true),
      reportStore.getReportData("otrosresultadosintegralifluc_ant", true),
      reportStore.getReportData("resultadosparticipacioncontroladoraifluc_ant", true),
    ]
    let eriDataFinal = copiarPropiedadesDeArray(arrayEriAnt)

    let listERI = {
      'ERI': formatearEri2(eriDataFinal, eriFormateado),
    }

    listaModulos.push(listERI['ERI'])

    let arrayEsf = [
      reportStore.getReportData("activoscorrientesifluc"),
      reportStore.getReportData("activosnocorrientesifluc"),
      reportStore.getReportData("pasivoscorrientesifluc"),
      reportStore.getReportData("pasivosnocorrientesifluc"),
      reportStore.getReportData("patrimonioifluc"),
    ]
    let esfData = copiarPropiedadesDeArray(arrayEsf)
    let esfFormateado = formatearEsf(esfData, ESF_DATA_JSON)
    let arrayEsfAnt = [
      reportStore.getReportData("activoscorrientesifluc_ant", true),
      reportStore.getReportData("activosnocorrientesifluc_ant", true),
      reportStore.getReportData("pasivoscorrientesifluc_ant", true),
      reportStore.getReportData("pasivosnocorrientesifluc_ant", true),
      reportStore.getReportData("patrimonioifluc_ant", true),
    ]
    let esfDataFinal = copiarPropiedadesDeArray(arrayEsfAnt)
    let listESF = {
      'ESF': formatearEsf2(esfDataFinal, esfFormateado),
    }

    listaModulos.push(listESF['ESF'])

    let listaEfe = obtenerValoresSinAnt(listEFE['EFE'])
    const empresa = reportStore.reportData['empresareporteifluc']
    const periodo = reportStore.reportData['periodosreporteifluc']

    const docEfe = new jsPDF();

    const allowedCodesEfe = [
      "9501", "950101", "950102", "950103", "950104", "950105", "950106", "950107", "950108",
      "9502", "950201", "950202", "950203", "950204", "950205", "950206", "950207", "950208",
      "950209", "950210", "950211", "950212", "950213", "950214", "950215", "950216", "950217",
      "950218", "950219", "950220", "950221",
      "9503", "950301", "950302", "950303", "950304", "950305", "950306", "950307", "950308",
      "950309", "950310", "9504", "9505", "9506", "9507",
    ];

    const filteredRowsEfe = listaEfe?.filter(dato => allowedCodesEfe.includes(dato.codigo)) || [];

    docEfe.setFont("Helvetica", "bold");
    docEfe.setFontSize(18);
    docEfe.text(empresa.nombre, 20, 20);

    const headersEfe = [
      [" ", "ESTADO DE FLUJO DE EFECTIVO - DIRECTO", periodo.periodo],
      ["Código", "Nombre", "Actual"]
    ];

    const rowsEfe = filteredRowsEfe.map(dato => [
      dato.codigo || "",
      dato.nombre || "",
      dato.actual || ""
    ]);

    docEfe.autoTable({
      head: headersEfe,
      body: rowsEfe,
      startY: 30,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      rowPageBreak: "auto",
    });

    let pageHeight = docEfe.internal.pageSize.height;
    let marginX = 20;

    let finalY = docEfe.lastAutoTable.finalY || 0;
    let signatureZoneHeight = 50;
    if (finalY + signatureZoneHeight > pageHeight) {
      docEfe.addPage();
      finalY = 20;
    } else {
      finalY += 10;
    }

    docEfe.setFont("Helvetica", "normal");
    docEfe.setFontSize(12);

    docEfe.text("__________________________", marginX, finalY);
    docEfe.text("Gerente General", marginX, finalY + 10);

    docEfe.text("__________________________", marginX + 80, finalY);
    docEfe.text("Contador", marginX + 80, finalY + 10);

    docEfe.save("reporte_flujos_efectivo_Efe_MD.pdf");

    const docEfeMI = new jsPDF();

    const allowedCodesEfeMI = [
      "9820", "96",
      "97", "9701", "9702", "9703", "9704", "9705", "9706", "9707", "9708", "9709", "9710", "9711",
      "98", "9801", "9802", "9803", "9804", "9805", "9806", "9807", "9808", "9809", "9810", "9820",
      "9502", "950201", "950202", "950203", "950204", "950205", "950206", "950207", "950208", "950209",
      "950210", "950211", "950212", "950213", "950214", "950215", "950216", "950217", "950218", "950219",
      "950220", "950221",
      "9503", "950301", "950302", "950303", "950304", "950305", "950306", "950307", "950308", "950309",
      "950310", "9504", "9505", "9506", "9507"
    ];

    const filteredRowsEfeMI = listaEfe
      ?.filter(dato => allowedCodesEfeMI.includes(dato.codigo))
      ?.sort((a, b) => allowedCodesEfeMI.indexOf(a.codigo) - allowedCodesEfeMI.indexOf(b.codigo)) || [];

    docEfeMI.setFont("Helvetica", "bold");
    docEfeMI.setFontSize(18);
    docEfeMI.text(empresa.nombre, 20, 20);

    const headersEfeMI = [
      [" ", "ESTADO DE FLUJO DE EFECTIVO - INDIRECTO", periodo.periodo],
      ["Código", "Nombre", "Actual"]
    ];

    const rowsEfeMI = filteredRowsEfeMI.map(dato => [
      dato.codigo || "",
      dato.nombre || "",
      dato.actual || ""
    ]);

    docEfeMI.autoTable({
      head: headersEfeMI,
      body: rowsEfeMI,
      startY: 30,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      rowPageBreak: "auto",
    });

    pageHeight = docEfeMI.internal.pageSize.height;
    marginX = 20;

    finalY = docEfeMI.lastAutoTable.finalY || 0;
    signatureZoneHeight = 50;
    if (finalY + signatureZoneHeight > pageHeight) {
      docEfeMI.addPage();
      finalY = 20;
    } else {
      finalY += 10;
    }

    docEfeMI.setFont("Helvetica", "normal");
    docEfeMI.setFontSize(12);

    docEfeMI.text("__________________________", marginX, finalY);
    docEfeMI.text("Gerente General", marginX, finalY + 10);

    docEfeMI.text("__________________________", marginX + 80, finalY);
    docEfeMI.text("Contador", marginX + 80, finalY + 10);

    docEfeMI.save("reporte_flujos_efectivo_Efe_MI.pdf");

    const docEfeHibrido = new jsPDF();

    const allowedCodesEfeHibrido = [
      "9501", "950101", "950102", "950103", "950104", "950105", "950106", "950107", "950108",
      "9502", "950201", "950202", "950203", "950204", "950205", "950206", "950207", "950208",
      "950209", "950210", "950211", "950212", "950213", "950214", "950215", "950216", "950217", "950218", "950219", "950220", "950221", "9503",
      "950301", "950302", "950303", "950304", "950305", "950306", "950307", "950308", "950309", "950310", "9504", "9505", "9506", "9507",
      "96", "97", "9701", "9702", "9703", "9704", "9705", "9706", "9707", "9708", "9709", "9710", "9711",
      "98", "9801", "9802", "9803", "9804", "9805", "9806", "9807", "9808", "9809", "9810", "9820",
    ]

    const filteredRowsEFEHibrido = listaEfe?.filter(dato => allowedCodesEfeHibrido.includes(dato.codigo));

    docEfeHibrido.setFont("Helvetica", "bold");
    docEfeHibrido.setFontSize(18);
    docEfeHibrido.text(empresa.nombre, 20, 20);
    const headersEFEHibrido = [
      [" ", "ESTADO DE FLUJO DE EFECTIVO", periodo.periodo],
      ["Código", "Nombre", "Actual"]
    ];
    const rowsEfeHibrido = filteredRowsEFEHibrido.map(dato => [dato.codigo, dato.nombre, dato.actual]);
    docEfeHibrido.autoTable({
      head: headersEFEHibrido,
      body: rowsEfeHibrido,
      theme: 'grid',
      startY: 40,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      rowPageBreak: "auto",
    });

    pageHeight = docEfeHibrido.internal.pageSize.height;
    marginX = 20;

    finalY = docEfeHibrido.lastAutoTable.finalY || 0;
    signatureZoneHeight = 50;
    if (finalY + signatureZoneHeight > pageHeight) {
      docEfeHibrido.addPage();
      finalY = 20;
    } else {
      finalY += 10;
    }

    docEfeHibrido.setFont("Helvetica", "normal");
    docEfeHibrido.setFontSize(12);

    docEfeHibrido.text("__________________________", marginX, finalY);
    docEfeHibrido.text("Gerente General", marginX, finalY + 10);

    docEfeHibrido.text("__________________________", marginX + 80, finalY);
    docEfeHibrido.text("Contador", marginX + 80, finalY + 10);

    docEfeHibrido.save("reporte_flujos_efectivo_EfeHibrido.pdf");

    const docEri = new jsPDF();

    const allowedCodesERI = [
      "401", "40101", "40102", "40103", "40104", "40105", "40106", "40107", "40108", "40109", "40110",
      "40112", "40113", "40114", "40115", "40116", "501", "50101", "50102", "50103", "50104", "50105",
      "402", "502", "50201", "50202", "50203", "50204", "403", "600", "601", "602", "603", "604", "605", "606", "607", "707"
    ];

    const filteredRowsERI = listERI['ERI'].filter(dato => allowedCodesERI.includes(dato.codigo));

    docEri.setFont("Helvetica", "bold");
    docEri.setFontSize(18);
    docEri.text(empresa.nombre, 20, 20);
    const headersEri = [
      [" ", "ESTADO DE RESULTADO INTEGRAL", periodo.periodo, (periodo.periodo - 1)],
      ["Código", "Nombre", "Actual", "Anterior"]
    ];
    const rowsEri = filteredRowsERI.map(dato => [dato.codigo, dato.nombre, dato.actual, dato.anterior]);
    docEri.autoTable({
      head: headersEri,
      body: rowsEri,
      theme: 'grid',
      startY: 40,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      rowPageBreak: "auto",
    });

    pageHeight = docEri.internal.pageSize.height;
    marginX = 20;

    finalY = docEri.lastAutoTable.finalY || 0;
    signatureZoneHeight = 50;
    if (finalY + signatureZoneHeight > pageHeight) {
      docEri.addPage();
      finalY = 20;
    } else {
      finalY += 10;
    }

    docEri.setFont("Helvetica", "normal");
    docEri.setFontSize(12);

    docEri.text("__________________________", marginX, finalY);
    docEri.text("Gerente General", marginX, finalY + 10);

    docEri.text("__________________________", marginX + 80, finalY);
    docEri.text("Contador", marginX + 80, finalY + 10);

    docEri.save("reporte_flujos_efectivo_Eri.pdf");



    // ESF PDF
    const docEsf = new jsPDF();

    const allowedCodes = [
      "1", "101", "10101", "10102", "10103", "10104", "10105", "102", "10201", "10202", "10203", "10204",
      "10205", "10206", "10207", "10208", "10209", "10210", "2", "201", "20101", "20102", "20103", "20104", "20105",
      "20106", "20107", "20108", "20109", "20110", "20111", "20112", "20113", "20114", "202", "20201",
      "20202", "20203", "20204", "20205", "20206", "20207", "20208", "20209", "20210", "3", "30", "301", "302", "303", "304",
      "305", "306", "307", "31",
    ];

    const filteredRows = listESF['ESF'].filter(dato => allowedCodes.includes(dato.codigo));

    docEsf.setFont("Helvetica", "bold");
    docEsf.setFontSize(18);
    docEsf.text(empresa.nombre, 20, 20);
    const headersEsf = [
      ["", "ESTADO DE SITUACIÓN FINANCIERA", periodo.periodo, (periodo.periodo - 1)],
      ["Código", "Nombre", "Actual", "Anterior"]
    ];
    const rowsEsf = filteredRows.map(dato => [dato.codigo, dato.nombre, dato.actual, dato.anterior]);
    docEsf.autoTable({
      head: headersEsf,
      body: rowsEsf,
      startY: 40,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
    });

    pageHeight = docEsf.internal.pageSize.height;
    marginX = 20;

    // Check remaining space after the table
    finalY = docEsf.lastAutoTable.finalY || 0;
    signatureZoneHeight = 50;
    if (finalY + signatureZoneHeight > pageHeight) {
      docEsf.addPage();
      finalY = 20;
    } else {
      finalY += 10;
    }

    docEsf.setFont("Helvetica", "normal");
    docEsf.setFontSize(12);

    docEsf.text("__________________________", marginX, finalY);
    docEsf.text("Gerente General", marginX, finalY + 10);

    docEsf.text("__________________________", marginX + 80, finalY);
    docEsf.text("Contador", marginX + 80, finalY + 10);

    docEsf.save("reporte_flujos_efectivo_Esf.pdf");


    // ECP
    const dataObject = reportStore.getReportData('ecpifluc')
    const docEcp = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const rowsEcp = [
      ["SALDO REEXPRESADO DEL PERIODO INMEDIATO ANTERIOR ANTERIOR", "9901", dataObject["ecp_9901_301"], dataObject["ecp_9901_302"], dataObject["ecp_9901_303"], dataObject["ecp_9901_30401"], dataObject["ecp_9901_30402"], dataObject["ecp_9901_30501"], dataObject["ecp_9901_30502"], dataObject["ecp_9901_30503"], dataObject["ecp_9901_30504"], dataObject["ecp_9901_30601"], dataObject["ecp_9901_30602"], dataObject["ecp_9901_30603"], dataObject["ecp_9901_30604"], dataObject["ecp_9901_30605"], dataObject["ecp_9901_30606"], dataObject["ecp_9901_30607"], dataObject["ecp_9901_30701"], dataObject["ecp_9901_30702"], dataObject["ecp_9901_30"], dataObject["ecp_9901_31"], dataObject["ecp_9901_Total"]],
      ["SALDO DEL PERÍODO INMEDIATO ANTERIOR", "990101", dataObject["ecp_990101_301"], dataObject["ecp_990101_302"], dataObject["ecp_990101_303"], dataObject["ecp_990101_30401"], dataObject["ecp_990101_30402"], dataObject["ecp_990101_30501"], dataObject["ecp_990101_30502"], dataObject["ecp_990101_30503"], dataObject["ecp_990101_30504"], dataObject["ecp_990101_30601"], dataObject["ecp_990101_30602"], dataObject["ecp_990101_30603"], dataObject["ecp_990101_30604"], dataObject["ecp_990101_30605"], dataObject["ecp_990101_30606"], dataObject["ecp_990101_30607"], dataObject["ecp_990101_30701"], dataObject["ecp_990101_30702"], dataObject["ecp_990101_30"], dataObject["ecp_990101_31"], dataObject["ecp_990101_Total"]],
      ["CAMBIOS EN POLITICAS CONTABLES", "990102", dataObject["ecp_990102_301"], dataObject["ecp_990102_302"], dataObject["ecp_990102_303"], dataObject["ecp_990102_30401"], dataObject["ecp_990102_30402"], dataObject["ecp_990102_30501"], dataObject["ecp_990102_30502"], dataObject["ecp_990102_30503"], dataObject["ecp_990102_30504"], dataObject["ecp_990102_30601"], dataObject["ecp_990102_30602"], dataObject["ecp_990102_30603"], dataObject["ecp_990102_30604"], dataObject["ecp_990102_30605"], dataObject["ecp_990102_30606"], dataObject["ecp_990102_30607"], dataObject["ecp_990102_30701"], dataObject["ecp_990102_30702"], dataObject["ecp_990102_30"], dataObject["ecp_990102_31"], dataObject["ecp_990102_Total"]],
      ["CORRECCIÓN DE ERRORES", "990103", dataObject["ecp_990103_301"], dataObject["ecp_990103_302"], dataObject["ecp_990103_303"], dataObject["ecp_990103_30401"], dataObject["ecp_990103_30402"], dataObject["ecp_990103_30501"], dataObject["ecp_990103_30502"], dataObject["ecp_990103_30503"], dataObject["ecp_990103_30504"], dataObject["ecp_990103_30601"], dataObject["ecp_990103_30602"], dataObject["ecp_990103_30603"], dataObject["ecp_990103_30604"], dataObject["ecp_990103_30605"], dataObject["ecp_990103_30606"], dataObject["ecp_990103_30607"], dataObject["ecp_990103_30701"], dataObject["ecp_990103_30702"], dataObject["ecp_990103_30"], dataObject["ecp_990103_31"], dataObject["ecp_990103_Total"]],
      ["CAMBIOS DEL AÑO EN EL PATRIMONIO", "9902", dataObject["ecp_9902_301"], dataObject["ecp_9902_302"], dataObject["ecp_9902_303"], dataObject["ecp_9902_30401"], dataObject["ecp_9902_30402"], dataObject["ecp_9902_30501"], dataObject["ecp_9902_30502"], dataObject["ecp_9902_30503"], dataObject["ecp_9902_30504"], dataObject["ecp_9902_30601"], dataObject["ecp_9902_30602"], dataObject["ecp_9902_30603"], dataObject["ecp_9902_30604"], dataObject["ecp_9902_30605"], dataObject["ecp_9902_30606"], dataObject["ecp_9902_30607"], dataObject["ecp_9902_30701"], dataObject["ecp_9902_30702"], dataObject["ecp_9902_30"], dataObject["ecp_9902_31"], dataObject["ecp_9902_Total"]],
      ["AUMENTO (DISMINUCIÓN) DE CAPITAL SOCIAL", "990201", dataObject["ecp_990201_301"], dataObject["ecp_990201_302"], dataObject["ecp_990201_303"], dataObject["ecp_990201_30401"], dataObject["ecp_990201_30402"], dataObject["ecp_990201_30501"], dataObject["ecp_990201_30502"], dataObject["ecp_990201_30503"], dataObject["ecp_990201_30504"], dataObject["ecp_990201_30601"], dataObject["ecp_990201_30602"], dataObject["ecp_990201_30603"], dataObject["ecp_990201_30604"], dataObject["ecp_990201_30605"], dataObject["ecp_990201_30606"], dataObject["ecp_990201_30607"], dataObject["ecp_990201_30701"], dataObject["ecp_990201_30702"], dataObject["ecp_990201_30"], dataObject["ecp_990201_31"], dataObject["ecp_990201_Total"]],
      ["APORTES PARA FUTURAS CAPITALIZACIONES", "990202", dataObject["ecp_990202_301"], dataObject["ecp_990202_302"], dataObject["ecp_990202_303"], dataObject["ecp_990202_30401"], dataObject["ecp_990202_30402"], dataObject["ecp_990202_30501"], dataObject["ecp_990202_30502"], dataObject["ecp_990202_30503"], dataObject["ecp_990202_30504"], dataObject["ecp_990202_30601"], dataObject["ecp_990202_30602"], dataObject["ecp_990202_30603"], dataObject["ecp_990202_30604"], dataObject["ecp_990202_30605"], dataObject["ecp_990202_30606"], dataObject["ecp_990202_30607"], dataObject["ecp_990202_30701"], dataObject["ecp_990202_30702"], dataObject["ecp_990202_30"], dataObject["ecp_990202_31"], dataObject["ecp_990202_Total"]],
      ["PRIMA POR EMISIÓN PRIMARIA DE ACCIONES", "990203", dataObject["ecp_990203_301"], dataObject["ecp_990203_302"], dataObject["ecp_990203_303"], dataObject["ecp_990203_30401"], dataObject["ecp_990203_30402"], dataObject["ecp_990203_30501"], dataObject["ecp_990203_30502"], dataObject["ecp_990203_30503"], dataObject["ecp_990203_30504"], dataObject["ecp_990203_30601"], dataObject["ecp_990203_30602"], dataObject["ecp_990203_30603"], dataObject["ecp_990203_30604"], dataObject["ecp_990203_30605"], dataObject["ecp_990203_30606"], dataObject["ecp_990203_30607"], dataObject["ecp_990203_30701"], dataObject["ecp_990203_30702"], dataObject["ecp_990203_30"], dataObject["ecp_990203_31"], dataObject["ecp_990203_Total"]],
      ["DIVIDENDOS", "990204", dataObject["ecp_990204_301"], dataObject["ecp_990204_302"], dataObject["ecp_990204_303"], dataObject["ecp_990204_30401"], dataObject["ecp_990204_30402"], dataObject["ecp_990204_30501"], dataObject["ecp_990204_30502"], dataObject["ecp_990204_30503"], dataObject["ecp_990204_30504"], dataObject["ecp_990204_30601"], dataObject["ecp_990204_30602"], dataObject["ecp_990204_30603"], dataObject["ecp_990204_30604"], dataObject["ecp_990204_30605"], dataObject["ecp_990204_30606"], dataObject["ecp_990204_30607"], dataObject["ecp_990204_30701"], dataObject["ecp_990204_30702"], dataObject["ecp_990204_30"], dataObject["ecp_990204_31"], dataObject["ecp_990204_Total"]],
      ["TRANSFERENCIA DE RESULTADOS A OTRAS CUENTAS PATRIMONIALES", "990205", dataObject["ecp_990205_301"], dataObject["ecp_990205_302"], dataObject["ecp_990205_303"], dataObject["ecp_990205_30401"], dataObject["ecp_990205_30402"], dataObject["ecp_990205_30501"], dataObject["ecp_990205_30502"], dataObject["ecp_990205_30503"], dataObject["ecp_990205_30504"], dataObject["ecp_990205_30601"], dataObject["ecp_990205_30602"], dataObject["ecp_990205_30603"], dataObject["ecp_990205_30604"], dataObject["ecp_990205_30605"], dataObject["ecp_990205_30606"], dataObject["ecp_990205_30607"], dataObject["ecp_990205_30701"], dataObject["ecp_990205_30702"], dataObject["ecp_990205_30"], dataObject["ecp_990205_31"], dataObject["ecp_990205_Total"]],
      ["REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA", "990206", dataObject["ecp_990206_301"], dataObject["ecp_990206_302"], dataObject["ecp_990206_303"], dataObject["ecp_990206_30401"], dataObject["ecp_990206_30402"], dataObject["ecp_990206_30501"], dataObject["ecp_990206_30502"], dataObject["ecp_990206_30503"], dataObject["ecp_990206_30504"], dataObject["ecp_990206_30601"], dataObject["ecp_990206_30602"], dataObject["ecp_990206_30603"], dataObject["ecp_990206_30604"], dataObject["ecp_990206_30605"], dataObject["ecp_990206_30606"], dataObject["ecp_990206_30607"], dataObject["ecp_990206_30701"], dataObject["ecp_990206_30702"], dataObject["ecp_990206_30"], dataObject["ecp_990206_31"], dataObject["ecp_990206_Total"]],
      ["REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO", "990207", dataObject["ecp_990207_301"], dataObject["ecp_990207_302"], dataObject["ecp_990207_303"], dataObject["ecp_990207_30401"], dataObject["ecp_990207_30402"], dataObject["ecp_990207_30501"], dataObject["ecp_990207_30502"], dataObject["ecp_990207_30503"], dataObject["ecp_990207_30504"], dataObject["ecp_990207_30601"], dataObject["ecp_990207_30602"], dataObject["ecp_990207_30603"], dataObject["ecp_990207_30604"], dataObject["ecp_990207_30605"], dataObject["ecp_990207_30606"], dataObject["ecp_990207_30607"], dataObject["ecp_990207_30701"], dataObject["ecp_990207_30702"], dataObject["ecp_990207_30"], dataObject["ecp_990207_31"], dataObject["ecp_990207_Total"]],
      ["REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS INTANGIBLES", "990208", dataObject["ecp_990208_301"], dataObject["ecp_990208_302"], dataObject["ecp_990208_303"], dataObject["ecp_990208_30401"], dataObject["ecp_990208_30402"], dataObject["ecp_990208_30501"], dataObject["ecp_990208_30502"], dataObject["ecp_990208_30503"], dataObject["ecp_990208_30504"], dataObject["ecp_990208_30601"], dataObject["ecp_990208_30602"], dataObject["ecp_990208_30603"], dataObject["ecp_990208_30604"], dataObject["ecp_990208_30605"], dataObject["ecp_990208_30606"], dataObject["ecp_990208_30607"], dataObject["ecp_990208_30701"], dataObject["ecp_990208_30702"], dataObject["ecp_990208_30"], dataObject["ecp_990208_31"], dataObject["ecp_990208_Total"]],
      ["OTROS CAMBIOS (DETALLAR)", "990209", dataObject["ecp_990209_301"], dataObject["ecp_990209_302"], dataObject["ecp_990209_303"], dataObject["ecp_990209_30401"], dataObject["ecp_990209_30402"], dataObject["ecp_990209_30501"], dataObject["ecp_990209_30502"], dataObject["ecp_990209_30503"], dataObject["ecp_990209_30504"], dataObject["ecp_990209_30601"], dataObject["ecp_990209_30602"], dataObject["ecp_990209_30603"], dataObject["ecp_990209_30604"], dataObject["ecp_990209_30605"], dataObject["ecp_990209_30606"], dataObject["ecp_990209_30607"], dataObject["ecp_990209_30701"], dataObject["ecp_990209_30702"], dataObject["ecp_990209_30"], dataObject["ecp_990209_31"], dataObject["ecp_990209_Total"]],
      ["TRANSFERENCIAS A CUENTAS DE ACTIVOS Y PASIVOS", "99020901", dataObject["ecp_99020901_301"], dataObject["ecp_99020901_302"], dataObject["ecp_99020901_303"], dataObject["ecp_99020901_30401"], dataObject["ecp_99020901_30402"], dataObject["ecp_99020901_30501"], dataObject["ecp_99020901_30502"], dataObject["ecp_99020901_30503"], dataObject["ecp_99020901_30504"], dataObject["ecp_99020901_30601"], dataObject["ecp_99020901_30602"], dataObject["ecp_99020901_30603"], dataObject["ecp_99020901_30604"], dataObject["ecp_99020901_30605"], dataObject["ecp_99020901_30606"], dataObject["ecp_99020901_30607"], dataObject["ecp_99020901_30701"], dataObject["ecp_99020901_30702"], dataObject["ecp_99020901_30"], dataObject["ecp_99020901_31"], dataObject["ecp_99020901_Total"]],
      ["OTROS CAMBIOS DETALLAR", "99020902", dataObject["ecp_99020902_301"], dataObject["ecp_99020902_302"], dataObject["ecp_99020902_303"], dataObject["ecp_99020902_30401"], dataObject["ecp_99020902_30402"], dataObject["ecp_99020902_30501"], dataObject["ecp_99020902_30502"], dataObject["ecp_99020902_30503"], dataObject["ecp_99020902_30504"], dataObject["ecp_99020902_30601"], dataObject["ecp_99020902_30602"], dataObject["ecp_99020902_30603"], dataObject["ecp_99020902_30604"], dataObject["ecp_99020902_30605"], dataObject["ecp_99020902_30606"], dataObject["ecp_99020902_30607"], dataObject["ecp_99020902_30701"], dataObject["ecp_99020902_30702"], dataObject["ecp_99020902_30"], dataObject["ecp_99020902_31"], dataObject["ecp_99020902_Total"]],
      ["RESULTADO INTEGRAL TOTAL DEL AÑO (GANANCIA O PÉRDIDA DEL EJERCICIO)", "990210", dataObject["ecp_990210_301"], dataObject["ecp_990210_302"], dataObject["ecp_990210_303"], dataObject["ecp_990210_30401"], dataObject["ecp_990210_30402"], dataObject["ecp_990210_30501"], dataObject["ecp_990210_30502"], dataObject["ecp_990210_30503"], dataObject["ecp_990210_30504"], dataObject["ecp_990210_30601"], dataObject["ecp_990210_30602"], dataObject["ecp_990210_30603"], dataObject["ecp_990210_30604"], dataObject["ecp_990210_30605"], dataObject["ecp_990210_30606"], dataObject["ecp_990210_30607"], dataObject["ecp_990210_30701"], dataObject["ecp_990210_30702"], dataObject["ecp_990210_30"], dataObject["ecp_990210_31"], dataObject["ecp_990210_Total"]],
      ["SALDO AL FINAL DEL PERIODO", "99", dataObject["ecp_99_301"], dataObject["ecp_99_302"], dataObject["ecp_99_303"], dataObject["ecp_99_30401"], dataObject["ecp_99_30402"], dataObject["ecp_99_30501"], dataObject["ecp_99_30502"], dataObject["ecp_99_30503"], dataObject["ecp_99_30504"], dataObject["ecp_99_30601"], dataObject["ecp_99_30602"], dataObject["ecp_99_30603"], dataObject["ecp_99_30604"], dataObject["ecp_99_30605"], dataObject["ecp_99_30606"], dataObject["ecp_99_30607"], dataObject["ecp_99_30701"], dataObject["ecp_99_30702"], dataObject["ecp_99_30"], dataObject["ecp_99_31"], dataObject["ecp_99_Total"]],
    ];

    let currentY = 20;

    docEcp.setFont("Helvetica", "bold");
    docEcp.setFontSize(18);
    docEcp.text(empresa.nombre, 20, currentY);

    currentY += 10;
    docEcp.setFontSize(12);
    docEcp.text("ESTADO DE CAMBIOS EN EL PATRIMONIO - " + periodo.periodo, 20, currentY);

    const headersEcp = [
      [
        "Cuenta",
        "Código",
        "Capital Social",
        "Aportes de Socios para Capitalización",
        "Prima Emisión",
        "Reserva Legal",
        "Reservas Estatutarias",
        "Activos Disponibles para Venta",
        "Propiedades Planta y Equipo",
        "Activos Intangibles",
        "Otros Superávit",
        "Ganancias Acumuladas",
        "Pérdidas Acumuladas",
        "Resultados Acumulados (NIIF)",
        "Reserva Capital",
        "Reserva Donaciones",
        "Reserva Valuación",
        "Reserva Revaluación Inv",
        "Ganancia Neta del Periodo",
        "Perdida Neta del Periodo",
        "Total Patrimonio Atribuible a los Propietarios",
        "Participaciones No Controladora",
        "Total Patrimonio",
      ]
    ];

    // Configuración de autoTable
    docEcp.autoTable({
      head: headersEcp,
      body: rowsEcp,
      theme: 'grid',
      startY: 40,
      headStyles: { fillColor: [34, 139, 34] },
      styles: {
        fontSize: 3,
        cellPadding: 3,
      },
      rowPageBreak: "auto",
    });

    pageHeight = docEcp.internal.pageSize.height;
    marginX = 20;

    docEcp.setFont("Helvetica", "normal");
    docEcp.setFontSize(12);
    docEcp.text("__________________________", marginX, pageHeight - 60);
    docEcp.text("Gerente General", marginX, pageHeight - 50);

    docEcp.text("__________________________", marginX + 200, pageHeight - 60);
    docEcp.text("Contador", marginX + 200, pageHeight - 50);

    docEcp.save("Estados_de_Cambio_en_el_Patrimonio.pdf");

  }, 2000)
}

export const generarEsfTxt = async () => {
  const reportStore = useReportStore()
  const empresa = JSON.parse(localStorage.getItem('empresa')).nombre

  try {
    let textoesf = ''
    const codigosesf = []
    const sections = [
      { key: 'activoscorrientesifluc', totalKey: 'esf_1', subKeys: ['esf_101', 'esf_102'] },
      { key: 'activosnocorrientesifluc' },
      { key: 'pasivoscorrientesifluc', totalKey: 'esf_2', subKeys: ['esf_201', 'esf_202'] },
      { key: 'pasivosnocorrientesifluc', totalKey: 'esf_2', subKeys: ['esf_201', 'esf_202'] },
      { key: 'patrimonioifluc' },
    ]

    // Función para calcular totales, si se requieren
    const calculateTotal = (data, subKeys) => {
      if (!subKeys || subKeys.length === 0) return data
      const total = subKeys.reduce((sum, key) => sum + Number(data[key] || 0), 0)
      console.log('{ ...data, [subKeys[0].slice(0, -1)]: total }: ', { ...data, [subKeys[0].slice(0, -1)]: total })
      return { ...data, [subKeys[0].slice(0, -1)]: total }; // Ej: 'esf_1' a partir de 'esf_101'
    }

    // Procesar cada sección
    for (const section of sections) {
      const data = reportStore.getReportData(section.key)
      console.log('data: ', data)
      if (data) {
        const processedData = section.totalKey
          ? calculateTotal(data, section.subKeys)
          : data
        const [texto, updatedCodigos] = pasarObjetoEsf(processedData, codigosesf)
        textoesf += texto;
        codigosesf.push(...updatedCodigos)
      }
    }

    console.log('codigosesf: ', codigosesf)
    guardarArchivoDeTexto([textoesf], empresa + ' - ESTADO DE SITUACION FINANCIERA.txt')
    console.log('Archivo generado exitosamente');
  } catch (error) {
    console.error('Error al generar el archivo ESF:', error)
  }
}

export const generarEriTxt = () => {
  const reportStore = useReportStore()
  const empresa = JSON.parse(localStorage.getItem('empresa')).nombre

  try {
    let textoeri = ''
    const codigoseri = []

    const sections = [
      { key: 'costosifluc', label: 'eri.costos' },
      { key: 'ingresosifluc', label: 'eri.ingresos' },
      { key: 'otrosingresosifluc', label: 'eri.otrosingresos' },
      { key: 'gastosdeventasifluc', label: 'eri.gastosdeventas' },
      { key: 'gastosadministrativosifluc', label: 'eri.gastosadministrativos' },
      { key: 'gastosfinancierosifluc', label: 'eri.gastosfinancieros' },
      { key: 'otrosgastosifluc', label: 'eri.otrosgastos' },
      { key: 'resultadosifluc', label: 'eri.resultados' },
      { key: 'operacionesdiscontinuadasifluc', label: 'eri.resultadosoperacionesdiscontinuas' },
      { key: 'otrosresultadosintegralifluc', label: 'eri.otrosresultadosintegral' },
      { key: 'resultadosparticipacioncontroladoraifluc', label: 'eri.resultadosparticipacioncontroladora' },
    ]

    for (const section of sections) {
      const data = reportStore.getReportData(section.key)
      if (data) {
        const [texto, updatedCodigos] = pasarObjetoEri(section.label, data, codigoseri)
        textoeri += texto
        codigoseri.push(...updatedCodigos)
      }
    }

    guardarArchivoDeTexto([textoeri], empresa + ' - ESTADO DE RESULTADO INTEGRAL.txt')
    console.log('Archivo ERI generado con éxito')
  } catch (error) {
    console.error('Error al generar el archivo ERI:', error)
  }
}

export const generarEfeTxt = () => {
  const reportStore = useReportStore()

  try {
    let textoefe = ''
    const codigosefe = {}

    const sections = [
      { key: 'actividadesdeoperacionifluc', label: 'efe.actividadesdeoperacion' },
      { key: 'actividadesdeinversionifluc', label: 'efe.actividadesdeinversion' },
      { key: 'actividadesdefinanciamientoifluc', label: 'efe.actividadesdefinanciamiento' },
      { key: 'conciliacionganancianetaifluc', label: 'efe.conciliacionganancianeta' },
    ]

    const resultados = reportStore.getReportData('resultadosifluc')
    const conciliacionGananciaNeta = reportStore.getReportData('conciliacionganancianetaifluc')
    const empresa = JSON.parse(localStorage.getItem('empresa')).nombre
    conciliacionGananciaNeta.efe_md_96 = Number(resultados.eri_600)
    conciliacionGananciaNeta.efe_md_9709 = 0.00
    conciliacionGananciaNeta.efe_md_9710 = 0.00

    conciliacionGananciaNeta.efe_md_971111 = 0.00
    conciliacionGananciaNeta.efe_md_971112 = 0.00
    conciliacionGananciaNeta.efe_md_971113 = 0.00
    conciliacionGananciaNeta.efe_md_971114 = 0.00

    conciliacionGananciaNeta.efe_md_981007 = 0.00
    conciliacionGananciaNeta.efe_md_981008 = 0.00

    for (const section of sections) {
      const data = section.key === 'conciliacionganancianetaifluc'
        ? conciliacionGananciaNeta
        : reportStore.getReportData(section.key)

      console.log("data: ", data)
      if (data) {
        const [texto, updatedCodigos] = pasarObjetoEfe(data, codigosefe)
        textoefe += texto

        // Actualización de codigosefe ya no requiere propagación
        Object.assign(codigosefe, updatedCodigos)
      }
    }

    guardarArchivoDeTexto([textoefe], empresa + ' - ESTADO DE FLUJOS DE EFECTIVO.txt')
    console.log('Archivo EFE generado con éxito')
  } catch (error) {
    console.error('Error al generar el archivo EFE:', error)
  }
}

export const generarEcpTxt = async () => {
  const reportStore = useReportStore()
  const empresa = JSON.parse(localStorage.getItem('empresa')).nombre

  try {
    let textoecp = ''
    const codigosecp = []

    const ecpData = reportStore.getReportData('ecpifluc')

    if (ecpData) {
      const [texto, updatedCodigos] = pasarObjetoEcp(ecpData, codigosecp)
      textoecp += texto
      codigosecp.push(...updatedCodigos)
    }

    guardarArchivoDeTexto([textoecp], empresa + ' - ESTADO DE CAMBIOS EN EL PATRIMONIO.txt')
    console.log('Archivo ECP generado con éxito');
  } catch (error) {
    console.error('Error al generar el archivo ECP:', error)
  }
}
