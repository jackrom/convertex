import { useReportStore } from "@/@store/reportStore"

export const getActivosCorrientes = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()
  let activosCorrientesData = {
    esf_1: 0.00,
    esf_101: 0.00,
    esf_10101: 0.00,
    esf_1010101: 0.00,
    esf_1010102: 0.00,
    esf_1010103: 0.00,
    esf_10102: 0.00,
    esf_1010201: 0.00,
    esf_101020101: 0.00,
    esf_10102010101: 0.00,
    esf_10102010102: 0.00,
    esf_10102010103: 0.00,
    esf_10102010104: 0.00,
    esf_10102010105: 0.00,
    esf_10102010106: 0.00,
    esf_101020102: 0.00,
    esf_10102010201: 0.00,
    esf_10102010202: 0.00,
    esf_10102010203: 0.00,
    esf_10102010204: 0.00,
    esf_10102010205: 0.00,
    esf_10102010206: 0.00,
    esf_10102010207: 0.00,
    esf_10102010208: 0.00,
    esf_10102010209: 0.00,
    esf_10102010210: 0.00,
    esf_10102010211: 0.00,
    esf_10102010212: 0.00,
    esf_10102010213: 0.00,
    esf_10102010214: 0.00,
    esf_10102010215: 0.00,
    esf_10102010216: 0.00,
    esf_10102010217: 0.00,
    esf_10102010218: 0.00,
    esf_10102010219: 0.00,
    esf_10102010220: 0.00,
    esf_10102010221: 0.00,
    esf_10102010222: 0.00,
    esf_10102010223: 0.00,
    esf_101020103: 0.00,
    esf_10102010301: 0.00,
    esf_10102010302: 0.00,
    esf_10102010303: 0.00,
    esf_10102010304: 0.00,
    esf_1010202: 0.00,
    esf_101020201: 0.00,
    esf_10102020101: 0.00,
    esf_10102020102: 0.00,
    esf_10102020103: 0.00,
    esf_10102020104: 0.00,
    esf_10102020105: 0.00,
    esf_10102020106: 0.00,
    esf_101020202: 0.00,
    esf_10102020201: 0.00,
    esf_10102020202: 0.00,
    esf_10102020203: 0.00,
    esf_10102020204: 0.00,
    esf_10102020205: 0.00,
    esf_10102020206: 0.00,
    esf_10102020207: 0.00,
    esf_10102020208: 0.00,
    esf_10102020209: 0.00,
    esf_10102020210: 0.00,
    esf_10102020211: 0.00,
    esf_10102020212: 0.00,
    esf_10102020213: 0.00,
    esf_10102020214: 0.00,
    esf_10102020215: 0.00,
    esf_10102020216: 0.00,
    esf_10102020217: 0.00,
    esf_10102020218: 0.00,
    esf_10102020219: 0.00,
    esf_10102020220: 0.00,
    esf_10102020221: 0.00,
    esf_10102020222: 0.00,
    esf_10102020223: 0.00,
    esf_1010203: 0.00,
    esf_101020302: 0.00,
    esf_10102030201: 0.00,
    esf_10102030202: 0.00,
    esf_10102030203: 0.00,
    esf_10102030204: 0.00,
    esf_10102030205: 0.00,
    esf_10102030206: 0.00,
    esf_10102030207: 0.00,
    esf_10102030208: 0.00,
    esf_10102030209: 0.00,
    esf_10102030210: 0.00,
    esf_10102030211: 0.00,
    esf_10102030212: 0.00,
    esf_10102030213: 0.00,
    esf_10102030214: 0.00,
    esf_10102030215: 0.00,
    esf_10102030216: 0.00,
    esf_10102030217: 0.00,
    esf_10102030218: 0.00,
    esf_10102030219: 0.00,
    esf_10102030220: 0.00,
    esf_10102030221: 0.00,
    esf_10102030222: 0.00,
    esf_10102030223: 0.00,
    esf_1010204: 0.00,
    esf_101020401: 0.00,
    esf_101020402: 0.00,
    esf_101020403: 0.00,
    esf_1010205: 0.00,
    esf_101020501: 0.00,
    esf_10102050101: 0.00,
    esf_10102050102: 0.00,
    esf_101020502: 0.00,
    esf_10102050201: 0.00,
    esf_10102050202: 0.00,
    esf_10102050203: 0.00,
    esf_10102050204: 0.00,
    esf_10102050207: 0.00,
    esf_10102050208: 0.00,
    esf_10102050209: 0.00,
    esf_10102050210: 0.00,
    esf_10102050211: 0.00,
    esf_10102050212: 0.00,
    esf_10102050213: 0.00,
    esf_10102050214: 0.00,
    esf_10102050215: 0.00,
    esf_10102050216: 0.00,
    esf_10102050217: 0.00,
    esf_10102050218: 0.00,
    esf_10102050219: 0.00,
    esf_10102050220: 0.00,
    esf_10102050221: 0.00,
    esf_1010206: 0.00,
    esf_101020601: 0.00,
    esf_101020602: 0.00,
    esf_101020603: 0.00,
    esf_101020604: 0.00,
    esf_1010207: 0.00,
    esf_10103: 0.00,
    esf_1010301: 0.00,
    esf_1010302: 0.00,
    esf_1010303: 0.00,
    esf_1010304: 0.00,
    esf_1010305: 0.00,
    esf_1010306: 0.00,
    esf_1010307: 0.00,
    esf_1010308: 0.00,
    esf_1010309: 0.00,
    esf_1010310: 0.00,
    esf_1010311: 0.00,
    esf_1010312: 0.00,
    esf_1010313: 0.00,
    esf_10104: 0.00,
    esf_1010401: 0.00,
    esf_1010402: 0.00,
    esf_1010403: 0.00,
    esf_1010404: 0.00,
    esf_10105: 0.00,
    esf_1010501: 0.00,
    esf_1010502: 0.00,
    esf_1010503: 0.00,
    esf_10106: 0.00,
    esf_10107: 0.00,
    esf_10108: 0.00,
  }

  if (tipo === "actual") {
    activosCorrientesData.userId = usuario
    activosCorrientesData.periodoId = periodo
    activosCorrientesData.empresaId = empresa
    activosCorrientesData.reporteId = reporte

    reportStore.setReportData(activosCorrientesData)

    return activosCorrientesData
  } else if (tipo === "anterior") {
    let activosModificados = {}
    for (let clave in activosCorrientesData) {
      activosModificados[clave + "_ant"] = activosCorrientesData[clave]
    }

    activosModificados.userId = usuario
    activosModificados.periodoId = periodo
    activosModificados.empresaId = empresa
    activosModificados.reporteId = reporte

    reportStore.setReportData(activosModificados)

    return activosModificados
  }
}

export const getActivosNoCorrientes = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let activosNoCorrientesData = {
    esf_102:	0.00,
    esf_10201:	0.00,
    esf_1020101:	0.00,
    esf_1020102:	0.00,
    esf_1020103:	0.00,
    esf_1020104:	0.00,
    esf_1020105:	0.00,
    esf_1020106:	0.00,
    esf_1020107:	0.00,
    esf_1020108:	0.00,
    esf_1020109:	0.00,
    esf_1020110:	0.00,
    esf_1020111:	0.00,
    esf_1020112:	0.00,
    esf_1020113:	0.00,
    esf_1020114:	0.00,
    esf_102011401:	0.00,
    esf_102011402:	0.00,
    esf_102011403:	0.00,
    esf_10202:	0.00,
    esf_1020201:	0.00,
    esf_102020101:	0.00,
    esf_102020102:	0.00,
    esf_1020202:	0.00,
    esf_102020201:	0.00,
    esf_102020202:	0.00,
    esf_1020203:	0.00,
    esf_1020204:	0.00,
    esf_10203:	0.00,
    esf_1020301:	0.00,
    esf_1020302:	0.00,
    esf_1020303:	0.00,
    esf_1020304:	0.00,
    esf_1020305:	0.00,
    esf_1020306:	0.00,
    esf_10204:	0.00,
    esf_1020401:	0.00,
    esf_1020402:	0.00,
    esf_1020403:	0.00,
    esf_1020404:	0.00,
    esf_1020405:	0.00,
    esf_1020406:	0.00,
    esf_1020407:	0.00,
    esf_10205:	0.00,
    esf_10206:	0.00,
    esf_1020601:	0.00,
    esf_1020602:	0.00,
    esf_1020603:	0.00,
    esf_1020604:	0.00,
    esf_1020605:	0.00,
    esf_1020606:	0.00,
    esf_10207:	0.00,
    esf_1020701:	0.00,
    esf_1020702:	0.00,
    esf_1020703:	0.00,
    esf_10208:	0.00,
    esf_1020801:	0.00,
    esf_1020802:	0.00,
    esf_1020803:	0.00,
    esf_1020805:	0.00,
    esf_1020806:	0.00,
    esf_1020807:	0.00,
    esf_1020808:	0.00,
    esf_1020809:	0.00,
    esf_1020810:	0.00,
    esf_1020811:	0.00,
    esf_10209:	0.00,
    esf_1020901:	0.00,
    esf_1020902:	0.00,
    esf_1020903:	0.00,
    esf_10210:	0.00,
    esf_1021001:	0.00,
    esf_1021002:	0.00,
    esf_1021003:	0.00,
    esf_1021004:	0.00,
  }

  if (tipo === "actual") {
    activosNoCorrientesData.userId = usuario
    activosNoCorrientesData.periodoId = periodo
    activosNoCorrientesData.empresaId = empresa
    activosNoCorrientesData.reporteId = reporte

    reportStore.setReportData(activosNoCorrientesData)

    return activosNoCorrientesData
  } else if (tipo === "anterior") {
    let activosModificados = {}
    for (let clave in activosNoCorrientesData) {
      activosModificados[clave + "_ant"] = activosNoCorrientesData[clave]
    }

    activosModificados.userId = usuario
    activosModificados.periodoId = periodo
    activosModificados.empresaId = empresa
    activosModificados.reporteId = reporte

    reportStore.setReportData(activosModificados)

    return activosModificados
  }
}

export const getPasivosCorrientes = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let pasivosCorrientesData = {
    esf_2:	0.00,
    esf_201:	0.00,
    esf_20101:	0.00,
    esf_20102:	0.00,
    esf_20103:	0.00,
    esf_2010301:	0.00,
    esf_201030101:	0.00,
    esf_201030102:	0.00,
    esf_201030103:	0.00,
    esf_2010302:	0.00,
    esf_201030201:	0.00,
    esf_201030202:	0.00,
    esf_201030203:	0.00,
    esf_20104:	0.00,
    esf_2010401:	0.00,
    esf_2010402:	0.00,
    esf_20105:	0.00,
    esf_2010501:	0.00,
    esf_2010502:	0.00,
    esf_20106:	0.00,
    esf_2010601:	0.00,
    esf_2010602:	0.00,
    esf_2010603:	0.00,
    esf_2010604:	0.00,
    esf_2010605:	0.00,
    esf_20107:	0.00,
    esf_2010701:	0.00,
    esf_2010702:	0.00,
    esf_2010703:	0.00,
    esf_2010704:	0.00,
    esf_2010705:	0.00,
    esf_2010706:	0.00,
    esf_2010707:	0.00,
    esf_20108:	0.00,
    esf_2010801:	0.00,
    esf_201080101:	0.00,
    esf_201080102:	0.00,
    esf_201080103:	0.00,
    esf_201080104:	0.00,
    esf_2010802:	0.00,
    esf_201080201:	0.00,
    esf_201080202:	0.00,
    esf_201080203:	0.00,
    esf_201080204:	0.00,
    esf_20109:	0.00,
    esf_20110:	0.00,
    esf_2011001:	0.00,
    esf_2011002:	0.00,
    esf_20111:	0.00,
    esf_20112:	0.00,
    esf_2011201:	0.00,
    esf_2011202:	0.00,
    esf_201120201:	0.00,
    esf_201120202:	0.00,
    esf_20113:	0.00,
    esf_2011301:	0.00,
    esf_2011302:	0.00,
    esf_2011303:	0.00,
    esf_2011304:	0.00,
    esf_2011305:	0.00,
    esf_2011306:	0.00,
    esf_2011307:	0.00,
    esf_2011308:	0.00,
    esf_2011309:	0.00,
    esf_2011310:	0.00,
    esf_2011311:	0.00,
    esf_2011312:	0.00,
    esf_20114:	0.00,
  }

  if (tipo === "actual") {
    pasivosCorrientesData.userId = usuario
    pasivosCorrientesData.periodoId = periodo
    pasivosCorrientesData.empresaId = empresa
    pasivosCorrientesData.reporteId = reporte

    reportStore.setReportData(pasivosCorrientesData)

    return pasivosCorrientesData
  } else if (tipo === "anterior") {
    let pasivosModificados = {}
    for (let clave in pasivosCorrientesData) {
      pasivosModificados[clave + "_ant"] = pasivosCorrientesData[clave]
    }

    pasivosModificados.userId = usuario
    pasivosModificados.periodoId = periodo
    pasivosModificados.empresaId = empresa
    pasivosModificados.reporteId = reporte

    reportStore.setReportData(pasivosModificados)

    return pasivosModificados
  }
}

export const getPasivosNoCorrientes = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let pasivosNoCorrientesData = {
    esf_202:	0.00,
    esf_20201:	0.00,
    esf_20202:	0.00,
    esf_2020201:	0.00,
    esf_202020101:	0.00,
    esf_202020102:	0.00,
    esf_202020103:	0.00,
    esf_2020202:	0.00,
    esf_202020201:	0.00,
    esf_202020202:	0.00,
    esf_202020203:	0.00,
    esf_20203:	0.00,
    esf_2020301:	0.00,
    esf_2020302:	0.00,
    esf_20204:	0.00,
    esf_2020401:	0.00,
    esf_202040101:	0.00,
    esf_202040102:	0.00,
    esf_202040103:	0.00,
    esf_202040104:	0.00,
    esf_2020402:	0.00,
    esf_202040201:	0.00,
    esf_202040202:	0.00,
    esf_202040203:	0.00,
    esf_202040204:	0.00,
    esf_20205:	0.00,
    esf_2020501:	0.00,
    esf_2020502:	0.00,
    esf_2020503:	0.00,
    esf_2020504:	0.00,
    esf_2020505:	0.00,
    esf_20206:	0.00,
    esf_2020601:	0.00,
    esf_2020602:	0.00,
    esf_20207:	0.00,
    esf_2020701:	0.00,
    esf_2020702:	0.00,
    esf_202070201:	0.00,
    esf_202070202:	0.00,
    esf_20208:	0.00,
    esf_20209:	0.00,
    esf_2020901:	0.00,
    esf_2020902:	0.00,
    esf_20210:	0.00,
  }

  if (tipo === "actual") {
    pasivosNoCorrientesData.userId = usuario
    pasivosNoCorrientesData.periodoId = periodo
    pasivosNoCorrientesData.empresaId = empresa
    pasivosNoCorrientesData.reporteId = reporte

    reportStore.setReportData(pasivosNoCorrientesData)

    return pasivosNoCorrientesData
  } else if (tipo === "anterior") {
    let pasivosModificados = {}
    for (let clave in pasivosNoCorrientesData) {
      pasivosModificados[clave + "_ant"] = pasivosNoCorrientesData[clave]
    }

    pasivosModificados.userId = usuario
    pasivosModificados.periodoId = periodo
    pasivosModificados.empresaId = empresa
    pasivosModificados.reporteId = reporte

    reportStore.setReportData(pasivosModificados)

    return pasivosModificados
  }
}

export const getPatrimonio = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let patrimonioData = {
    esf_3:	0.00,
    esf_30:	0.00,
    esf_301:	0.00,
    esf_30101:	0.00,
    esf_30102:	0.00,
    esf_30103:	0.00,
    esf_30104:	0.00,
    esf_30105:	0.00,
    esf_3010501:	0.00,
    esf_3010502:	0.00,
    esf_302:	0.00,
    esf_303:	0.00,
    esf_304:	0.00,
    esf_30401:	0.00,
    esf_30402:	0.00,
    esf_305:	0.00,
    esf_30501:	0.00,
    esf_30502:	0.00,
    esf_30503:	0.00,
    esf_30504:	0.00,
    esf_306:	0.00,
    esf_30601:	0.00,
    esf_30602:	0.00,
    esf_30603:	0.00,
    esf_30604:	0.00,
    esf_30605:	0.00,
    esf_30606:	0.00,
    esf_30607:	0.00,
    esf_307:	0.00,
    esf_30701:	0.00,
    esf_30702:	0.00,
    esf_31:	0.00,
  }

  if (tipo === "actual") {
    patrimonioData.userId = usuario
    patrimonioData.periodoId = periodo
    patrimonioData.empresaId = empresa
    patrimonioData.reporteId = reporte

    reportStore.setReportData(patrimonioData)

    return patrimonioData
  } else if (tipo === "anterior") {
    let patrimonioModificados = {}
    for (let clave in patrimonioData) {
      patrimonioModificados[clave + "_ant"] = patrimonioData[clave]
    }

    patrimonioModificados.userId = usuario
    patrimonioModificados.periodoId = periodo
    patrimonioModificados.empresaId = empresa
    patrimonioModificados.reporteId = reporte

    reportStore.setReportData(patrimonioModificados)

    return patrimonioModificados
  }
}

export const getCostos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let costosData = {
    eri_501:	0.00,
    eri_50101:	0.00,
    eri_5010101:	0.00,
    eri_5010102:	0.00,
    eri_5010103:	0.00,
    eri_5010104:	0.00,
    eri_5010105:	0.00,
    eri_5010106:	0.00,
    eri_5010107:	0.00,
    eri_5010108:	0.00,
    eri_5010109:	0.00,
    eri_5010110:	0.00,
    eri_5010111:	0.00,
    eri_5010112:	0.00,
    eri_50102:	0.00,
    eri_5010201:	0.00,
    eri_5010202:	0.00,
    eri_50103:	0.00,
    eri_5010301:	0.00,
    eri_5010302:	0.00,
    eri_50104:	0.00,
    eri_5010401:	0.00,
    eri_5010402:	0.00,
    eri_5010403:	0.00,
    eri_5010404:	0.00,
    eri_5010405:	0.00,
    eri_5010406:	0.00,
    eri_5010407:	0.00,
    eri_5010408:	0.00,
    eri_50105:	0.00,
    eri_5010501:	0.00,
    eri_402:	0.00,
  }

  if (tipo === "actual") {
    costosData.userId = usuario
    costosData.periodoId = periodo
    costosData.empresaId = empresa
    costosData.reporteId = reporte

    reportStore.setReportData(costosData)

    return costosData
  } else if (tipo === "anterior") {
    let costosModificados = {}
    for (let clave in costosData) {
      costosModificados[clave + "_ant"] = costosData[clave]
    }

    costosModificados.userId = usuario
    costosModificados.periodoId = periodo
    costosModificados.empresaId = empresa
    costosModificados.reporteId = reporte

    reportStore.setReportData(costosModificados)

    return costosModificados
  }
}

export const getIngresos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let ingresosData = {
    eri_401:	0.00,
    eri_40101:	0.00,
    eri_40102:	0.00,
    eri_4010201:	0.00,
    eri_4010202:	0.00,
    eri_4010203:	0.00,
    eri_4010204:	0.00,
    eri_40103:	0.00,
    eri_40104:	0.00,
    eri_40105:	0.00,
    eri_40106:	0.00,
    eri_4010601:	0.00,
    eri_4010602:	0.00,
    eri_4010603:	0.00,
    eri_40107:	0.00,
    eri_40108:	0.00,
    eri_40109:	0.00,
    eri_4010901:	0.00,
    eri_401090101:	0.00,
    eri_401090103:	0.00,
    eri_401090104:	0.00,
    eri_401090105:	0.00,
    eri_401090106:	0.00,
    eri_4010902:	0.00,
    eri_401090201:	0.00,
    eri_401090202:	0.00,
    eri_401090203:	0.00,
    eri_401090204:	0.00,
    eri_401090205:	0.00,
    eri_401090206:	0.00,
    eri_401090207:	0.00,
    eri_401090208:	0.00,
    eri_4010903:	0.00,
    eri_401090301:	0.00,
    eri_401090302:	0.00,
    eri_401090303:	0.00,
    eri_401090304:	0.00,
    eri_40110:	0.00,
    eri_4011001:	0.00,
    eri_4011002:	0.00,
    eri_4011003:	0.00,
    eri_4011004:	0.00,
    eri_4011005:	0.00,
    eri_4011006:	0.00,
    eri_40112:	0.00,
    eri_40113:	0.00,
    eri_40114:	0.00,
    eri_40115:	0.00,
    eri_40116:	0.00,
  }

  if (tipo === "actual") {
    ingresosData.userId = usuario
    ingresosData.periodoId = periodo
    ingresosData.empresaId = empresa
    ingresosData.reporteId = reporte

    reportStore.setReportData(ingresosData)

    return ingresosData
  } else if (tipo === "anterior") {
    let ingresosModificados = {}
    for (let clave in ingresosData) {
      ingresosModificados[clave + "_ant"] = ingresosData[clave]
    }

    ingresosModificados.userId = usuario
    ingresosModificados.periodoId = periodo
    ingresosModificados.empresaId = empresa
    ingresosModificados.reporteId = reporte

    reportStore.setReportData(ingresosModificados)

    return ingresosModificados
  }
}

export const getOtrosIngresos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let otrosIngresosData = {
    eri_403:	0.00,
    eri_40301:	0.00,
    eri_40302:	0.00,
    eri_40303:	0.00,
  }

  if (tipo === "actual") {
    otrosIngresosData.userId = usuario
    otrosIngresosData.periodoId = periodo
    otrosIngresosData.empresaId = empresa
    otrosIngresosData.reporteId = reporte

    reportStore.setReportData(otrosIngresosData)

    return otrosIngresosData
  } else if (tipo === "anterior") {
    let otrosIngresosModificados = {}
    for (let clave in otrosIngresosData) {
      otrosIngresosModificados[clave + "_ant"] = otrosIngresosData[clave]
    }

    otrosIngresosModificados.userId = usuario
    otrosIngresosModificados.periodoId = periodo
    otrosIngresosModificados.empresaId = empresa
    otrosIngresosModificados.reporteId = reporte

    reportStore.setReportData(otrosIngresosModificados)

    return otrosIngresosModificados
  }
}

export const getGastosDeVentas = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let gastosDeVentasData = {
    eri_50201:	0.00,
    eri_5020101:	0.00,
    eri_5020102:	0.00,
    eri_5020103:	0.00,
    eri_5020104:	0.00,
    eri_5020105:	0.00,
    eri_5020106:	0.00,
    eri_5020107:	0.00,
    eri_5020108:	0.00,
    eri_5020109:	0.00,
    eri_5020110:	0.00,
    eri_5020111:	0.00,
    eri_5020112:	0.00,
    eri_5020113:	0.00,
    eri_5020114:	0.00,
    eri_5020115:	0.00,
    eri_5020116:	0.00,
    eri_5020117:	0.00,
    eri_5020118:	0.00,
    eri_5020119:	0.00,
    eri_5020120:	0.00,
    eri_502012001:	0.00,
    eri_502012002:	0.00,
    eri_502012003:	0.00,
    eri_5020121:	0.00,
    eri_502012101:	0.00,
    eri_502012102:	0.00,
    eri_5020122:	0.00,
    eri_502012201:	0.00,
    eri_502012202:	0.00,
    eri_502012203:	0.00,
    eri_502012204:	0.00,
    eri_502012205:	0.00,
    eri_502012206:	0.00,
    eri_502012207:	0.00,
    eri_5020123:	0.00,
    eri_502012301:	0.00,
    eri_502012302:	0.00,
    eri_502012303:	0.00,
    eri_5020124:	0.00,
    eri_5020125:	0.00,
    eri_5020126:	0.00,
    eri_5020127:	0.00,
    eri_5020128:	0.00,
  }

  if (tipo === "actual") {
    gastosDeVentasData.userId = usuario
    gastosDeVentasData.periodoId = periodo
    gastosDeVentasData.empresaId = empresa
    gastosDeVentasData.reporteId = reporte

    reportStore.setReportData(gastosDeVentasData)

    return gastosDeVentasData
  } else if (tipo === "anterior") {
    let gastosDeVentasModificados = {}
    for (let clave in gastosDeVentasData) {
      gastosDeVentasModificados[clave + "_ant"] = gastosDeVentasData[clave]
    }

    gastosDeVentasModificados.userId = usuario
    gastosDeVentasModificados.periodoId = periodo
    gastosDeVentasModificados.empresaId = empresa
    gastosDeVentasModificados.reporteId = reporte

    reportStore.setReportData(gastosDeVentasModificados)

    return gastosDeVentasModificados
  }
}

export const getGastosAdministrativos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let gastosAdministrativosData = {
    eri_50202:	0.00,
    eri_5020201:	0.00,
    eri_5020202:	0.00,
    eri_5020203:	0.00,
    eri_5020204:	0.00,
    eri_5020205:	0.00,
    eri_5020206:	0.00,
    eri_5020207:	0.00,
    eri_5020208:	0.00,
    eri_5020209:	0.00,
    eri_5020210:	0.00,
    eri_5020211:	0.00,
    eri_5020212:	0.00,
    eri_5020213:	0.00,
    eri_5020214:	0.00,
    eri_5020215:	0.00,
    eri_5020216:	0.00,
    eri_5020217:	0.00,
    eri_5020218:	0.00,
    eri_5020219:	0.00,
    eri_5020220:	0.00,
    eri_5020221:	0.00,
    eri_502022101:	0.00,
    eri_502022102:	0.00,
    eri_502022103:	0.00,
    eri_5020222:	0.00,
    eri_502022201:	0.00,
    eri_502022202:	0.00,
    eri_5020223:	0.00,
    eri_502022301:	0.00,
    eri_502022302:	0.00,
    eri_502022303:	0.00,
    eri_502022304:	0.00,
    eri_502022305:	0.00,
    eri_502022306:	0.00,
    eri_502022307:	0.00,
    eri_5020224:	0.00,
    eri_502022401:	0.00,
    eri_502022402:	0.00,
    eri_502022403:	0.00,
    eri_5020225:	0.00,
    eri_5020226:	0.00,
    eri_5020227:	0.00,
    eri_5020228:	0.00,
    eri_5020229:	0.00,
  }

  if (tipo === "actual") {
    gastosAdministrativosData.userId = usuario
    gastosAdministrativosData.periodoId = periodo
    gastosAdministrativosData.empresaId = empresa
    gastosAdministrativosData.reporteId = reporte

    reportStore.setReportData(gastosAdministrativosData)

    return gastosAdministrativosData
  } else if (tipo === "anterior") {
    let gastosAdministrativosModificados = {}
    for (let clave in gastosAdministrativosData) {
      gastosAdministrativosModificados[clave + "_ant"] = gastosAdministrativosData[clave]
    }

    gastosAdministrativosModificados.userId = usuario
    gastosAdministrativosModificados.periodoId = periodo
    gastosAdministrativosModificados.empresaId = empresa
    gastosAdministrativosModificados.reporteId = reporte

    reportStore.setReportData(gastosAdministrativosModificados)

    return gastosAdministrativosModificados
  }
}

export const getGastosFinancieros = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let gastosFinancierosData = {
    eri_50203:	0.00,
    eri_5020301:	0.00,
    eri_502030101:	0.00,
    eri_502030102:	0.00,
    eri_502030103:	0.00,
    eri_502030104:	0.00,
    eri_5020302:	0.00,
    eri_502030201:	0.00,
    eri_50203020101:	0.00,
    eri_50203020103:	0.00,
    eri_50203020104:	0.00,
    eri_50203020105:	0.00,
    eri_50203020106:	0.00,
    eri_5020303:	0.00,
    eri_502030301:	0.00,
    eri_502030302:	0.00,
    eri_502030303:	0.00,
    eri_502030304:	0.00,
    eri_502030305:	0.00,
    eri_502030306:	0.00,
    eri_502030307:	0.00,
    eri_502030308:	0.00,
    eri_5020304:	0.00,
    eri_502030401:	0.00,
    eri_502030402:	0.00,
    eri_502030403:	0.00,
    eri_502030404:	0.00,
    eri_5020305:	0.00,
    eri_502030501:	0.00,
    eri_502030502:	0.00,
    eri_502030503:	0.00,
    eri_502030504:	0.00,
    eri_5020306:	0.00,
    eri_5020307:	0.00,
    eri_5020308:	0.00,
    eri_5020309:	0.00,
    eri_5020310:	0.00,
    eri_5020311:	0.00,
    eri_5020312:	0.00,
  }

  if (tipo === "actual") {
    gastosFinancierosData.userId = usuario
    gastosFinancierosData.periodoId = periodo
    gastosFinancierosData.empresaId = empresa
    gastosFinancierosData.reporteId = reporte

    reportStore.setReportData(gastosFinancierosData)

    return gastosFinancierosData
  } else if (tipo === "anterior") {
    let gastosFinancierosModificados = {}
    for (let clave in gastosFinancierosData) {
      gastosFinancierosModificados[clave + "_ant"] = gastosFinancierosData[clave]
    }

    gastosFinancierosModificados.userId = usuario
    gastosFinancierosModificados.periodoId = periodo
    gastosFinancierosModificados.empresaId = empresa
    gastosFinancierosModificados.reporteId = reporte

    reportStore.setReportData(gastosFinancierosModificados)

    return gastosFinancierosModificados
  }
}

export const getOtrosGastos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let otrosGastosData = {
    eri_502:	0.00,
    eri_50201:	0.00,
    eri_50202:	0.00,
    eri_50203:	0.00,
    eri_50204:	0.00,
    eri_5020401:	0.00,
    eri_5020402:	0.00,
  }

  if (tipo === "actual") {
    otrosGastosData.userId = usuario
    otrosGastosData.periodoId = periodo
    otrosGastosData.empresaId = empresa
    otrosGastosData.reporteId = reporte

    reportStore.setReportData(otrosGastosData)

    return otrosGastosData
  } else if (tipo === "anterior") {
    let otrosGastosModificados = {}
    for (let clave in otrosGastosData) {
      otrosGastosModificados[clave + "_ant"] = otrosGastosData[clave]
    }

    otrosGastosModificados.userId = usuario
    otrosGastosModificados.periodoId = periodo
    otrosGastosModificados.empresaId = empresa
    otrosGastosModificados.reporteId = reporte

    reportStore.setReportData(otrosGastosModificados)

    return otrosGastosModificados
  }
}

export const getResultados = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let resultadosData = {
    eri_600:	0.00,
    eri_601:	0.00,
    eri_602:	0.00,
    eri_603:	0.00,
    eri_604:	0.00,
    eri_605:	0.00,
    eri_606:	0.00,
    eri_607:	0.00,

  }

  if (tipo === "actual") {
    resultadosData.userId = usuario
    resultadosData.periodoId = periodo
    resultadosData.empresaId = empresa
    resultadosData.reporteId = reporte

    reportStore.setReportData(resultadosData)

    return resultadosData
  } else if (tipo === "anterior") {
    let resultadosModificados = {}
    for (let clave in resultadosData) {
      resultadosModificados[clave + "_ant"] = resultadosData[clave]
    }

    resultadosModificados.userId = usuario
    resultadosModificados.periodoId = periodo
    resultadosModificados.empresaId = empresa
    resultadosModificados.reporteId = reporte

    reportStore.setReportData(resultadosModificados)

    return resultadosModificados
  }
}

export const getOperacionesDiscontinuadas = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let operacionesDiscontinuadasData = {
    eri_700:	0.00,
    eri_701:	0.00,
    eri_702:	0.00,
    eri_703:	0.00,
    eri_704:	0.00,
    eri_705:	0.00,
    eri_706:	0.00,
    eri_707:	0.00,
  }

  if (tipo === "actual") {
    operacionesDiscontinuadasData.userId = usuario
    operacionesDiscontinuadasData.periodoId = periodo
    operacionesDiscontinuadasData.empresaId = empresa
    operacionesDiscontinuadasData.reporteId = reporte

    reportStore.setReportData(operacionesDiscontinuadasData)

    return operacionesDiscontinuadasData
  } else if (tipo === "anterior") {
    let operacionesDiscontinuadasModificadas = {}
    for (let clave in operacionesDiscontinuadasData) {
      operacionesDiscontinuadasModificadas[clave + "_ant"] = operacionesDiscontinuadasData[clave]
    }

    operacionesDiscontinuadasModificadas.userId = usuario
    operacionesDiscontinuadasModificadas.periodoId = periodo
    operacionesDiscontinuadasModificadas.empresaId = empresa
    operacionesDiscontinuadasModificadas.reporteId = reporte

    reportStore.setReportData(operacionesDiscontinuadasModificadas)

    return operacionesDiscontinuadasModificadas
  }
}

export const getOtrosResultadosIntegral = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let otrosResultadosIntegralData = {
    eri_800:	0.00,
    eri_80001:	0.00,
    eri_80002:	0.00,
    eri_80003:	0.00,
    eri_80004:	0.00,
    eri_80005:	0.00,
    eri_80006:	0.00,
    eri_80007:	0.00,
    eri_80008:	0.00,
    eri_80009:	0.00,
    eri_801:	0.00,
  }

  if (tipo === "actual") {
    otrosResultadosIntegralData.userId = usuario
    otrosResultadosIntegralData.periodoId = periodo
    otrosResultadosIntegralData.empresaId = empresa
    otrosResultadosIntegralData.reporteId = reporte

    reportStore.setReportData(otrosResultadosIntegralData)

    return otrosResultadosIntegralData
  } else if (tipo === "anterior") {
    let otrosResultadosModificadas = {}
    for (let clave in otrosResultadosIntegralData) {
      otrosResultadosModificadas[clave + "_ant"] = otrosResultadosIntegralData[clave]
    }

    otrosResultadosModificadas.userId = usuario
    otrosResultadosModificadas.periodoId = periodo
    otrosResultadosModificadas.empresaId = empresa
    otrosResultadosModificadas.reporteId = reporte

    reportStore.setReportData(otrosResultadosModificadas)

    return otrosResultadosModificadas
  }
}

export const getResultadosParticipacionControladora = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let resultadosParticipacionControladoraData = {
    eri_80101:	0.00,
    eri_80102:	0.00,
  }

  if (tipo === "actual") {
    resultadosParticipacionControladoraData.userId = usuario
    resultadosParticipacionControladoraData.periodoId = periodo
    resultadosParticipacionControladoraData.empresaId = empresa
    resultadosParticipacionControladoraData.reporteId = reporte

    reportStore.setReportData(resultadosParticipacionControladoraData)

    return resultadosParticipacionControladoraData
  } else if (tipo === "anterior") {
    let resultadosParticipacionControladoraModificados = {}
    for (let clave in resultadosParticipacionControladoraData) {
      resultadosParticipacionControladoraModificados[clave + "_ant"] = resultadosParticipacionControladoraData[clave]
    }

    resultadosParticipacionControladoraModificados.userId = usuario
    resultadosParticipacionControladoraModificados.periodoId = periodo
    resultadosParticipacionControladoraModificados.empresaId = empresa
    resultadosParticipacionControladoraModificados.reporteId = reporte

    reportStore.setReportData(resultadosParticipacionControladoraModificados)

    return resultadosParticipacionControladoraModificados
  }
}

export const getActividadesDeOperacion = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let actividadesDeOperacionData = {
    efe_md_950101:	0.00,
    efe_md_95010101:	0.00,
    efe_md_9501010101:	0.00,
    efe_md_9501010102:	0.00,
    efe_md_9501010103:	0.00,
    efe_md_9501010104:	0.00,
    efe_md_9501010105:	0.00,
    efe_md_9501010106:	0.00,
    efe_md_9501010107:	0.00,
    efe_md_9501010108:	0.00,
    efe_md_9501010109:	0.00,
    efe_md_9501010110:	0.00,
    efe_md_9501010111:	0.00,
    efe_md_9501010112:	0.00,
    efe_md_9501010113:	0.00,
    efe_md_9501010114:	0.00,
    efe_md_9501010115:	0.00,
    efe_md_9501010116:	0.00,
    efe_md_9501010117:	0.00,
    efe_md_9501010118:	0.00,
    efe_md_9501010119:	0.00,
    efe_md_9501010120:	0.00,
    efe_md_9501010121:	0.00,
    efe_md_95010102:	0.00,
    efe_md_9501010201: 0.00,
    efe_md_9501010202: 0.00,
    efe_md_9501010203: 0.00,
    efe_md_9501010204: 0.00,
    efe_md_9501010205: 0.00,
    efe_md_9501010206: 0.00,
    efe_md_9501010207: 0.00,
    efe_md_95010103:	0.00,
    efe_md_95010104:	0.00,
    efe_md_95010105:	0.00,
    efe_md_950102:	0.00,
    efe_md_95010201:	0.00,
    efe_md_9501020101:	0.00,
    efe_md_9501020102:	0.00,
    efe_md_9501020103:	0.00,
    efe_md_9501020104:	0.00,
    efe_md_9501020105:	0.00,
    efe_md_9501020106:	0.00,
    efe_md_9501020107:	0.00,
    efe_md_9501020108:	0.00,
    efe_md_9501020109:	0.00,
    efe_md_9501020110:	0.00,
    efe_md_9501020111:	0.00,
    efe_md_9501020112:	0.00,
    efe_md_9501020113:	0.00,
    efe_md_9501020114:	0.00,
    efe_md_9501020115:	0.00,
    efe_md_9501020116:	0.00,
    efe_md_9501020117:	0.00,
    efe_md_9501020118:	0.00,
    efe_md_9501020119:	0.00,
    efe_md_9501020120:	0.00,
    efe_md_9501020121:	0.00,
    efe_md_9501020122:	0.00,
    efe_md_9501020123:	0.00,
    efe_md_9501020124:	0.00,
    efe_md_9501020125:	0.00,
    efe_md_9501020126:	0.00,
    efe_md_9501020127:	0.00,
    efe_md_9501020128:	0.00,
    efe_md_9501020129:	0.00,
    efe_md_9501020130:	0.00,
    efe_md_9501020131:	0.00,
    efe_md_9501020132:	0.00,
    efe_md_9501020133:	0.00,
    efe_md_9501020134:	0.00,
    efe_md_9501020135:	0.00,
    efe_md_9501020136:	0.00,
    efe_md_9501020137:	0.00,
    efe_md_9501020138:	0.00,
    efe_md_9501020139:	0.00,
    efe_md_9501020140:	0.00,
    efe_md_9501020141:	0.00,
    efe_md_9501020142:	0.00,
    efe_md_9501020143:	0.00,
    efe_md_9501020144:	0.00,
    efe_md_9501020145:	0.00,
    efe_md_9501020146:	0.00,
    efe_md_9501020147:	0.00,
    efe_md_9501020148:	0.00,
    efe_md_9501020149:	0.00,
    efe_md_9501020150:	0.00,
    efe_md_9501020151:	0.00,
    efe_md_9501020152:	0.00,
    efe_md_9501020153:	0.00,
    efe_md_9501020154:	0.00,
    efe_md_9501020155:	0.00,
    efe_md_9501020156:	0.00,
    efe_md_95010202:	0.00,
    efe_md_95010203:	0.00,
    efe_md_9501020301:	0.00,
    efe_md_9501020302:	0.00,
    efe_md_9501020303:	0.00,
    efe_md_95010204:	0.00,
    efe_md_95010205:	0.00,
    efe_md_950103:	0.00,
    efe_md_950104:	0.00,
    efe_md_95010401:	0.00,
    efe_md_950105:	0.00,
    efe_md_95010501:	0.00,
    efe_md_95010502:	0.00,
    efe_md_95010503:	0.00,
    efe_md_950106:	0.00,
    efe_md_950107:	0.00,
    efe_md_95010701:	0.00,
    efe_md_95010702:	0.00,
    efe_md_95010703:	0.00,
    efe_md_950108:	0.00,
    efe_md_95010801:	0.00,
    efe_md_95010802:	0.00,
    efe_md_95010803:	0.00,
    efe_md_95010804:	0.00,
    efe_md_95010805:	0.00,
    efe_md_95010806:	0.00,
    efe_md_95010807:	0.00,
    efe_md_95010808:	0.00,
    efe_md_95010809:	0.00,
    efe_md_95010810:	0.00,
    efe_md_95010811:	0.00,
    efe_md_95010812:	0.00,
    efe_md_95010813:	0.00,
  }

  if (tipo === "actual") {
    actividadesDeOperacionData.userId = usuario
    actividadesDeOperacionData.periodoId = periodo
    actividadesDeOperacionData.empresaId = empresa
    actividadesDeOperacionData.reporteId = reporte

    reportStore.setReportData(actividadesDeOperacionData)

    return actividadesDeOperacionData
  } else if (tipo === "anterior") {
    let actividadesDeOperacionModificados = {}
    for (let clave in actividadesDeOperacionData) {
      actividadesDeOperacionModificados[clave + "_ant"] = actividadesDeOperacionData[clave]
    }

    actividadesDeOperacionModificados.userId = usuario
    actividadesDeOperacionModificados.periodoId = periodo
    actividadesDeOperacionModificados.empresaId = empresa
    actividadesDeOperacionModificados.reporteId = reporte

    reportStore.setReportData(actividadesDeOperacionModificados)

    return actividadesDeOperacionModificados
  }
}

export const getActividadesDeInversion = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let actividadesDeInversionData = {
    efe_md_9502:	0.00,
    efe_md_950201:	0.00,
    efe_md_950202:	0.00,
    efe_md_950203:	0.00,
    efe_md_950204:	0.00,
    efe_md_950205:	0.00,
    efe_md_95020501:	0.00,
    efe_md_950206:	0.00,
    efe_md_950207:	0.00,
    efe_md_950208:	0.00,
    efe_md_950209:	0.00,
    efe_md_95020901:	0.00,
    efe_md_950210:	0.00,
    efe_md_950211:	0.00,
    efe_md_95021101:	0.00,
    efe_md_950212:	0.00,
    efe_md_950213:	0.00,
    efe_md_95021301:	0.00,
    efe_md_95021302:	0.00,
    efe_md_95021303:	0.00,
    efe_md_950214:	0.00,
    efe_md_950215:	0.00,
    efe_md_950216:	0.00,
    efe_md_950217:	0.00,
    efe_md_950218:	0.00,
    efe_md_950219:	0.00,
    efe_md_950220:	0.00,
    efe_md_950221:	0.00,
    efe_md_95022101:	0.00,
    efe_md_95022102:	0.00,
    efe_md_95022103:	0.00,
    efe_md_95022104:	0.00,
    efe_md_95022105:	0.00,
    efe_md_95022106:	0.00,
    efe_md_95022107:	0.00,
    efe_md_95022108:	0.00,
    efe_md_95022109:	0.00,
    efe_md_95022110:	0.00,
  }

  if (tipo === "actual") {
    actividadesDeInversionData.userId = usuario
    actividadesDeInversionData.periodoId = periodo
    actividadesDeInversionData.empresaId = empresa
    actividadesDeInversionData.reporteId = reporte

    reportStore.setReportData(actividadesDeInversionData)

    return actividadesDeInversionData
  } else if (tipo === "anterior") {
    let actividadesDeInversionModificados = {}
    for (let clave in actividadesDeInversionData) {
      actividadesDeInversionModificados[clave + "_ant"] = actividadesDeInversionData[clave]
    }

    actividadesDeInversionModificados.userId = usuario
    actividadesDeInversionModificados.periodoId = periodo
    actividadesDeInversionModificados.empresaId = empresa
    actividadesDeInversionModificados.reporteId = reporte

    reportStore.setReportData(actividadesDeInversionModificados)

    return actividadesDeInversionModificados
  }
}

export const getActividadesDeFinanciamiento = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let actividadesDeFinanciamientoData = {
    efe_md_95:	0.00,
    efe_md_9501:	0.00,
    efe_md_9503:	0.00,
    efe_md_950301:	0.00,
    efe_md_95030101:	0.00,
    efe_md_95030102:	0.00,
    efe_md_95030103:	0.00,
    efe_md_95030104:	0.00,
    efe_md_950302:	0.00,
    efe_md_950303:	0.00,
    efe_md_950304:	0.00,
    efe_md_950305:	0.00,
    efe_md_950306:	0.00,
    efe_md_950307:	0.00,
    efe_md_950308:	0.00,
    efe_md_95030801:	0.00,
    efe_md_950309:	0.00,
    efe_md_950310:	0.00,
    efe_md_95031001:	0.00,
    efe_md_95031002:	0.00,
    efe_md_95031003:	0.00,
    efe_md_95031004:	0.00,
    efe_md_95031005:	0.00,
    efe_md_95031006:	0.00,
    efe_md_95031007:	0.00,
    efe_md_95031008:	0.00,
    efe_md_95031009:	0.00,
    efe_md_95031010:	0.00,
    efe_md_9504:	0.00,
    efe_md_950401:	0.00,
    efe_md_9505:	0.00,
    efe_md_9506:	0.00,
    efe_md_9507:	0.00,

  }

  if (tipo === "actual") {
    actividadesDeFinanciamientoData.userId = usuario
    actividadesDeFinanciamientoData.periodoId = periodo
    actividadesDeFinanciamientoData.empresaId = empresa
    actividadesDeFinanciamientoData.reporteId = reporte

    reportStore.setReportData(actividadesDeFinanciamientoData)

    return actividadesDeFinanciamientoData
  } else if (tipo === "anterior") {
    let actividadesDeFinanciamientoModificados = {}
    for (let clave in actividadesDeFinanciamientoData) {
      actividadesDeFinanciamientoModificados[clave + "_ant"] = actividadesDeFinanciamientoData[clave]
    }

    actividadesDeFinanciamientoModificados.userId = usuario
    actividadesDeFinanciamientoModificados.periodoId = periodo
    actividadesDeFinanciamientoModificados.empresaId = empresa
    actividadesDeFinanciamientoModificados.reporteId = reporte

    reportStore.setReportData(actividadesDeFinanciamientoModificados)

    return actividadesDeFinanciamientoModificados
  }
}

export const getConciliacion = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let conciliacionData = {
    efe_md_96:	0.00,
    efe_md_97:	0.00,
    efe_md_9701:	0.00,
    efe_md_970101:	0.00,
    efe_md_970102:	0.00,
    efe_md_970103:	0.00,
    efe_md_9702:	0.00,
    efe_md_970201:	0.00,
    efe_md_970202:	0.00,
    efe_md_970203:	0.00,
    efe_md_970204:	0.00,
    efe_md_970205:	0.00,
    efe_md_970206:	0.00,
    efe_md_970207:	0.00,
    efe_md_9703:	0.00,
    efe_md_9704:	0.00,
    efe_md_9705:	0.00,
    efe_md_9706:	0.00,
    efe_md_9707:	0.00,
    efe_md_9708:	0.00,
    efe_md_970801:	0.00,
    efe_md_970802:	0.00,
    efe_md_9709:	0.00,
    efe_md_970901:	0.00,
    efe_md_9710:	0.00,
    efe_md_971001:	0.00,
    efe_md_9711:	0.00,
    efe_md_971101:	0.00,
    efe_md_971102:	0.00,
    efe_md_971103:	0.00,
    efe_md_971104:	0.00,
    efe_md_971105:	0.00,
    efe_md_971106:	0.00,
    efe_md_971107:	0.00,
    efe_md_971108:	0.00,
    efe_md_971109:	0.00,
    efe_md_971110:	0.00,
    efe_md_971111:	0.00,
    efe_md_971112:	0.00,
    efe_md_971113:	0.00,
    efe_md_971114:	0.00,
    efe_md_971115:	0.00,
    efe_md_971116:	0.00,
    efe_md_971117:	0.00,
    efe_md_971118:	0.00,
    efe_md_971119:	0.00,
    efe_md_971120:	0.00,
    efe_md_971121:	0.00,
    efe_md_971122:	0.00,
    efe_md_971123:	0.00,
    efe_md_971124:	0.00,
    efe_md_98:	0.00,
    efe_md_9801:	0.00,
    efe_md_980101: 0.00,
    efe_md_980102: 0.00,
    efe_md_980103: 0.00,
    efe_md_980104: 0.00,
    efe_md_980105: 0.00,
    efe_md_980106: 0.00,
    efe_md_9802:	0.00,
    efe_md_980201:	0.00,
    efe_md_9803:	0.00,
    efe_md_980301:	0.00,
    efe_md_9804:	0.00,
    efe_md_980401:	0.00,
    efe_md_980402:	0.00,
    efe_md_980403:	0.00,
    efe_md_980404:	0.00,
    efe_md_9805:	0.00,
    efe_md_980501:	0.00,
    efe_md_980502:	0.00,
    efe_md_980503:	0.00,
    efe_md_980504:	0.00,
    efe_md_980505:	0.00,
    efe_md_980506:	0.00,
    efe_md_980507:	0.00,
    efe_md_9806:	0.00,
    efe_md_980601:	0.00,
    efe_md_9807:	0.00,
    efe_md_9808:	0.00,
    efe_md_980801:	0.00,
    efe_md_9809:	0.00,
    efe_md_9810:	0.00,
    efe_md_981001:	0.00,
    efe_md_981002:	0.00,
    efe_md_981003:	0.00,
    efe_md_981004:	0.00,
    efe_md_981005:	0.00,
    efe_md_981006:	0.00,
    efe_md_981007:	0.00,
    efe_md_981008:	0.00,
    efe_md_981009:	0.00,
    efe_md_981010:	0.00,
    efe_md_981011:	0.00,
    efe_md_981012:	0.00,
    efe_md_981013:	0.00,
    efe_md_981014:	0.00,
    efe_md_9820:	0.00,
  }

  if (tipo === "actual") {
    conciliacionData.userId = usuario
    conciliacionData.periodoId = periodo
    conciliacionData.empresaId = empresa
    conciliacionData.reporteId = reporte

    reportStore.setReportData(conciliacionData)

    return conciliacionData
  } else if (tipo === "anterior") {
    let conciliacionModificados = {}
    for (let clave in conciliacionData) {
      conciliacionModificados[clave + "_ant"] = conciliacionData[clave]
    }

    conciliacionModificados.userId = usuario
    conciliacionModificados.periodoId = periodo
    conciliacionModificados.empresaId = empresa
    conciliacionModificados.reporteId = reporte

    reportStore.setReportData(conciliacionModificados)

    return conciliacionModificados
  }
}

export const getEcp = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let ecpData = {
    ecp_99_301:	0.00,
    ecp_99_302:	0.00,
    ecp_99_303:	0.00,
    ecp_99_30401:	0.00,
    ecp_99_30402:	0.00,
    ecp_99_30501:	0.00,
    ecp_99_30502:	0.00,
    ecp_99_30503:	0.00,
    ecp_99_30504:	0.00,
    ecp_99_30601:	0.00,
    ecp_99_30602:	0.00,
    ecp_99_30603:	0.00,
    ecp_99_30604:	0.00,
    ecp_99_30605:	0.00,
    ecp_99_30606:	0.00,
    ecp_99_30607:	0.00,
    ecp_99_30701:	0.00,
    ecp_99_30702:	0.00,
    ecp_9901_301:	0.00,
    ecp_9901_302:	0.00,
    ecp_9901_303:	0.00,
    ecp_9901_30401:	0.00,
    ecp_9901_30402:	0.00,
    ecp_9901_30501:	0.00,
    ecp_9901_30502:	0.00,
    ecp_9901_30503:	0.00,
    ecp_9901_30504:	0.00,
    ecp_9901_30601:	0.00,
    ecp_9901_30602:	0.00,
    ecp_9901_30603:	0.00,
    ecp_9901_30604:	0.00,
    ecp_9901_30605:	0.00,
    ecp_9901_30606:	0.00,
    ecp_9901_30607:	0.00,
    ecp_9901_30701:	0.00,
    ecp_9901_30702:	0.00,
    ecp_990101_301:	0.00,
    ecp_990101_302:	0.00,
    ecp_990101_303:	0.00,
    ecp_990101_30401:	0.00,
    ecp_990101_30402:	0.00,
    ecp_990101_30501:	0.00,
    ecp_990101_30502:	0.00,
    ecp_990101_30503:	0.00,
    ecp_990101_30504:	0.00,
    ecp_990101_30601:	0.00,
    ecp_990101_30602:	0.00,
    ecp_990101_30603:	0.00,
    ecp_990101_30604:	0.00,
    ecp_990101_30605:	0.00,
    ecp_990101_30606:	0.00,
    ecp_990101_30607:	0.00,
    ecp_990101_30701:	0.00,
    ecp_990101_30702:	0.00,
    ecp_990102_301:	0.00,
    ecp_990102_302:	0.00,
    ecp_990102_303:	0.00,
    ecp_990102_30401:	0.00,
    ecp_990102_30402:	0.00,
    ecp_990102_30501:	0.00,
    ecp_990102_30502:	0.00,
    ecp_990102_30503:	0.00,
    ecp_990102_30504:	0.00,
    ecp_990102_30601:	0.00,
    ecp_990102_30602:	0.00,
    ecp_990102_30603:	0.00,
    ecp_990102_30604:	0.00,
    ecp_990102_30605:	0.00,
    ecp_990102_30606:	0.00,
    ecp_990102_30607:	0.00,
    ecp_990102_30701:	0.00,
    ecp_990102_30702:	0.00,
    ecp_990103_301:	0.00,
    ecp_990103_302:	0.00,
    ecp_990103_303:	0.00,
    ecp_990103_30401:	0.00,
    ecp_990103_30402:	0.00,
    ecp_990103_30501:	0.00,
    ecp_990103_30502:	0.00,
    ecp_990103_30503:	0.00,
    ecp_990103_30504:	0.00,
    ecp_990103_30601:	0.00,
    ecp_990103_30602:	0.00,
    ecp_990103_30603:	0.00,
    ecp_990103_30604:	0.00,
    ecp_990103_30605:	0.00,
    ecp_990103_30606:	0.00,
    ecp_990103_30607:	0.00,
    ecp_990103_30701:	0.00,
    ecp_990103_30702:	0.00,
    ecp_9902_301:	0.00,
    ecp_9902_302:	0.00,
    ecp_9902_303:	0.00,
    ecp_9902_30401:	0.00,
    ecp_9902_30402:	0.00,
    ecp_9902_30501:	0.00,
    ecp_9902_30502:	0.00,
    ecp_9902_30503:	0.00,
    ecp_9902_30504:	0.00,
    ecp_9902_30601:	0.00,
    ecp_9902_30602:	0.00,
    ecp_9902_30603:	0.00,
    ecp_9902_30604:	0.00,
    ecp_9902_30605:	0.00,
    ecp_9902_30606:	0.00,
    ecp_9902_30607:	0.00,
    ecp_9902_30701:	0.00,
    ecp_9902_30702:	0.00,
    ecp_990201_301:	0.00,
    ecp_990201_302:	0.00,
    ecp_990201_303:	0.00,
    ecp_990201_30401:	0.00,
    ecp_990201_30402:	0.00,
    ecp_990201_30501:	0.00,
    ecp_990201_30502:	0.00,
    ecp_990201_30503:	0.00,
    ecp_990201_30504:	0.00,
    ecp_990201_30601:	0.00,
    ecp_990201_30602:	0.00,
    ecp_990201_30603:	0.00,
    ecp_990201_30604:	0.00,
    ecp_990201_30605:	0.00,
    ecp_990201_30606:	0.00,
    ecp_990201_30607:	0.00,
    ecp_990201_30701:	0.00,
    ecp_990201_30702:	0.00,
    ecp_990202_301:	0.00,
    ecp_990202_302:	0.00,
    ecp_990202_303:	0.00,
    ecp_990202_30401:	0.00,
    ecp_990202_30402:	0.00,
    ecp_990202_30501:	0.00,
    ecp_990202_30502:	0.00,
    ecp_990202_30503:	0.00,
    ecp_990202_30504:	0.00,
    ecp_990202_30601:	0.00,
    ecp_990202_30602:	0.00,
    ecp_990202_30603:	0.00,
    ecp_990202_30604:	0.00,
    ecp_990202_30605:	0.00,
    ecp_990202_30606:	0.00,
    ecp_990202_30607:	0.00,
    ecp_990202_30701:	0.00,
    ecp_990202_30702:	0.00,
    ecp_990203_301:	0.00,
    ecp_990203_302:	0.00,
    ecp_990203_303:	0.00,
    ecp_990203_30401:	0.00,
    ecp_990203_30402:	0.00,
    ecp_990203_30501:	0.00,
    ecp_990203_30502:	0.00,
    ecp_990203_30503:	0.00,
    ecp_990203_30504:	0.00,
    ecp_990203_30601:	0.00,
    ecp_990203_30602:	0.00,
    ecp_990203_30603:	0.00,
    ecp_990203_30604:	0.00,
    ecp_990203_30605:	0.00,
    ecp_990203_30606:	0.00,
    ecp_990203_30607:	0.00,
    ecp_990203_30701:	0.00,
    ecp_990203_30702:	0.00,
    ecp_990204_301:	0.00,
    ecp_990204_302:	0.00,
    ecp_990204_303:	0.00,
    ecp_990204_30401:	0.00,
    ecp_990204_30402:	0.00,
    ecp_990204_30501:	0.00,
    ecp_990204_30502:	0.00,
    ecp_990204_30503:	0.00,
    ecp_990204_30504:	0.00,
    ecp_990204_30601:	0.00,
    ecp_990204_30602:	0.00,
    ecp_990204_30603:	0.00,
    ecp_990204_30604:	0.00,
    ecp_990204_30605:	0.00,
    ecp_990204_30606:	0.00,
    ecp_990204_30607:	0.00,
    ecp_990204_30701:	0.00,
    ecp_990204_30702:	0.00,
    ecp_990205_301:	0.00,
    ecp_990205_302:	0.00,
    ecp_990205_303:	0.00,
    ecp_990205_30401:	0.00,
    ecp_990205_30402:	0.00,
    ecp_990205_30501:	0.00,
    ecp_990205_30502:	0.00,
    ecp_990205_30503:	0.00,
    ecp_990205_30504:	0.00,
    ecp_990205_30601:	0.00,
    ecp_990205_30602:	0.00,
    ecp_990205_30603:	0.00,
    ecp_990205_30604:	0.00,
    ecp_990205_30605:	0.00,
    ecp_990205_30606:	0.00,
    ecp_990205_30607:	0.00,
    ecp_990205_30701:	0.00,
    ecp_990205_30702:	0.00,
    ecp_990206_301:	0.00,
    ecp_990206_302:	0.00,
    ecp_990206_303:	0.00,
    ecp_990206_30401:	0.00,
    ecp_990206_30402:	0.00,
    ecp_990206_30501:	0.00,
    ecp_990206_30502:	0.00,
    ecp_990206_30503:	0.00,
    ecp_990206_30504:	0.00,
    ecp_990206_30601:	0.00,
    ecp_990206_30602:	0.00,
    ecp_990206_30603:	0.00,
    ecp_990206_30604:	0.00,
    ecp_990206_30605:	0.00,
    ecp_990206_30606:	0.00,
    ecp_990206_30607:	0.00,
    ecp_990206_30701:	0.00,
    ecp_990206_30702:	0.00,
    ecp_990207_301:	0.00,
    ecp_990207_302:	0.00,
    ecp_990207_303:	0.00,
    ecp_990207_30401:	0.00,
    ecp_990207_30402:	0.00,
    ecp_990207_30501:	0.00,
    ecp_990207_30502:	0.00,
    ecp_990207_30503:	0.00,
    ecp_990207_30504:	0.00,
    ecp_990207_30601:	0.00,
    ecp_990207_30602:	0.00,
    ecp_990207_30603:	0.00,
    ecp_990207_30604:	0.00,
    ecp_990207_30605:	0.00,
    ecp_990207_30606:	0.00,
    ecp_990207_30607:	0.00,
    ecp_990207_30701:	0.00,
    ecp_990207_30702:	0.00,
    ecp_990208_301:	0.00,
    ecp_990208_302:	0.00,
    ecp_990208_303:	0.00,
    ecp_990208_30401:	0.00,
    ecp_990208_30402:	0.00,
    ecp_990208_30501:	0.00,
    ecp_990208_30502:	0.00,
    ecp_990208_30503:	0.00,
    ecp_990208_30504:	0.00,
    ecp_990208_30601:	0.00,
    ecp_990208_30602:	0.00,
    ecp_990208_30603:	0.00,
    ecp_990208_30604:	0.00,
    ecp_990208_30605:	0.00,
    ecp_990208_30606:	0.00,
    ecp_990208_30607:	0.00,
    ecp_990208_30701:	0.00,
    ecp_990208_30702:	0.00,
    ecp_990209_301:	0.00,
    ecp_990209_302:	0.00,
    ecp_990209_303:	0.00,
    ecp_990209_30401:	0.00,
    ecp_990209_30402:	0.00,
    ecp_990209_30501:	0.00,
    ecp_990209_30502:	0.00,
    ecp_990209_30503:	0.00,
    ecp_990209_30504:	0.00,
    ecp_990209_30601:	0.00,
    ecp_990209_30602:	0.00,
    ecp_990209_30603:	0.00,
    ecp_990209_30604:	0.00,
    ecp_990209_30605:	0.00,
    ecp_990209_30606:	0.00,
    ecp_990209_30607:	0.00,
    ecp_990209_30701:	0.00,
    ecp_990209_30702:	0.00,
    ecp_99020901_301:	0.00,
    ecp_99020901_302:	0.00,
    ecp_99020901_303:	0.00,
    ecp_99020901_30401:	0.00,
    ecp_99020901_30402:	0.00,
    ecp_99020901_30501:	0.00,
    ecp_99020901_30502:	0.00,
    ecp_99020901_30503:	0.00,
    ecp_99020901_30504:	0.00,
    ecp_99020901_30601:	0.00,
    ecp_99020901_30602:	0.00,
    ecp_99020901_30603:	0.00,
    ecp_99020901_30604:	0.00,
    ecp_99020901_30605:	0.00,
    ecp_99020901_30606:	0.00,
    ecp_99020901_30607:	0.00,
    ecp_99020901_30701:	0.00,
    ecp_99020901_30702:	0.00,
    ecp_99020902_301:	0.00,
    ecp_99020902_302:	0.00,
    ecp_99020902_303:	0.00,
    ecp_99020902_30401:	0.00,
    ecp_99020902_30402:	0.00,
    ecp_99020902_30501:	0.00,
    ecp_99020902_30502:	0.00,
    ecp_99020902_30503:	0.00,
    ecp_99020902_30504:	0.00,
    ecp_99020902_30601:	0.00,
    ecp_99020902_30602:	0.00,
    ecp_99020902_30603:	0.00,
    ecp_99020902_30604:	0.00,
    ecp_99020902_30605:	0.00,
    ecp_99020902_30606:	0.00,
    ecp_99020902_30607:	0.00,
    ecp_99020902_30701:	0.00,
    ecp_99020902_30702:	0.00,
    ecp_990210_301:	0.00,
    ecp_990210_302:	0.00,
    ecp_990210_303:	0.00,
    ecp_990210_30401:	0.00,
    ecp_990210_30402:	0.00,
    ecp_990210_30501:	0.00,
    ecp_990210_30502:	0.00,
    ecp_990210_30503:	0.00,
    ecp_990210_30504:	0.00,
    ecp_990210_30601:	0.00,
    ecp_990210_30602:	0.00,
    ecp_990210_30603:	0.00,
    ecp_990210_30604:	0.00,
    ecp_990210_30605:	0.00,
    ecp_990210_30606:	0.00,
    ecp_990210_30607:	0.00,
    ecp_990210_30701:	0.00,
    ecp_990210_30702:	0.00,
    ecp_99_30:	0.00,
    ecp_99_31:	0.00,
    ecp_9901_30:	0.00,
    ecp_9901_31:	0.00,
    ecp_9902_30:	0.00,
    ecp_9902_31:	0.00,
    ecp_990101_30:	0.00,
    ecp_990101_31:	0.00,
    ecp_990102_30:	0.00,
    ecp_990102_31:	0.00,
    ecp_990103_30:	0.00,
    ecp_990103_31:	0.00,
    ecp_990201_30:	0.00,
    ecp_990201_31:	0.00,
    ecp_990202_30:	0.00,
    ecp_990202_31:	0.00,
    ecp_990203_30:	0.00,
    ecp_990203_31:	0.00,
    ecp_990204_30:	0.00,
    ecp_990204_31:	0.00,
    ecp_990205_30:	0.00,
    ecp_990205_31:	0.00,
    ecp_990206_30:	0.00,
    ecp_990206_31:	0.00,
    ecp_990207_30:	0.00,
    ecp_990207_31:	0.00,
    ecp_990208_30:	0.00,
    ecp_990208_31:	0.00,
    ecp_990209_30:	0.00,
    ecp_990209_31:	0.00,
    ecp_990210_30:	0.00,
    ecp_990210_31:	0.00,
    ecp_9901_Total: 0.00,
    ecp_990101_Total: 0.00,
    ecp_990102_Total: 0.00,
    ecp_990103_Total: 0.00,
    ecp_9902_Total: 0.00,
    ecp_990201_Total: 0.00,
    ecp_990202_Total: 0.00,
    ecp_990203_Total: 0.00,
    ecp_990204_Total: 0.00,
    ecp_990205_Total: 0.00,
    ecp_990206_Total: 0.00,
    ecp_990207_Total: 0.00,
    ecp_990208_Total: 0.00,
    ecp_990209_Total: 0.00,
    ecp_99020901_Total: 0.00,
    ecp_99020902_Total: 0.00,
    ecp_990210_Total: 0.00,
  }

  if (tipo === "actual") {
    ecpData.userId = usuario
    ecpData.periodoId = periodo
    ecpData.empresaId = empresa
    ecpData.reporteId = reporte

    reportStore.setReportData(ecpData)

    return ecpData
  } else if (tipo === "anterior") {
    let ecpModificados = {}
    for (let clave in ecpData) {
      ecpModificados[clave + "_ant"] = ecpData[clave]
    }

    ecpModificados.userId = usuario
    ecpModificados.periodoId = periodo
    ecpModificados.empresaId = empresa
    ecpModificados.reporteId = reporte

    reportStore.setReportData(ecpModificados)

    return ecpModificados
  }
}

export const getMovPerdidasAcumuladasCuentasIncobrablesAndDeterioro = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData = {
    ajustes: 0.00,
    bajasoreversiones: 0.00,
    diferenciaporcuadrar: 0.00,
    provisionesanio:  0.00,
    saldofinalsegunesf: 0.00,
    saldofinalsegunmovimiento: 0.00,
    saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData.userId = usuario
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData.periodoId = periodo
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData.empresaId = empresa
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData.reporteId = reporte

    reportStore.setReportData(movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData)

    return movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData
  } else if (tipo === "anterior") {
    let movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados = {}
    for (let clave in movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData) {
      movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados[clave + "_ant"] = movPerdidasAcumuladasCuentasIncobrablesAndDeterioroData[clave]
    }

    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados.userId = usuario
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados.periodoId = periodo
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados.empresaId = empresa
    movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados.reporteId = reporte

    reportStore.setReportData(movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados)

    return movPerdidasAcumuladasCuentasIncobrablesAndDeterioroModificados
  }
}

export const getMovPerdidasAcumuladasValorNetoRealizacion = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movPerdidasAcumuladasValorNetoRealizacionData = {
    provisionesdelanio:  0.00,
    ajustes: 0.00,
    bajasoreversiones: 0.00,
    diferenciaporcuadrar: 0.00,
    saldofinalsegunesf: 0.00,
    saldofinalsegunmovimiento: 0.00,
    saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movPerdidasAcumuladasValorNetoRealizacionData.userId = usuario
    movPerdidasAcumuladasValorNetoRealizacionData.periodoId = periodo
    movPerdidasAcumuladasValorNetoRealizacionData.empresaId = empresa
    movPerdidasAcumuladasValorNetoRealizacionData.reporteId = reporte

    reportStore.setReportData(movPerdidasAcumuladasValorNetoRealizacionData)

    return movPerdidasAcumuladasValorNetoRealizacionData
  } else if (tipo === "anterior") {
    let movPerdidasAcumuladasValorNetoRealizacionModificados = {}
    for (let clave in movPerdidasAcumuladasValorNetoRealizacionData) {
      movPerdidasAcumuladasValorNetoRealizacionModificados[clave + "_ant"] = movPerdidasAcumuladasValorNetoRealizacionData[clave]
    }

    movPerdidasAcumuladasValorNetoRealizacionModificados.userId = usuario
    movPerdidasAcumuladasValorNetoRealizacionModificados.periodoId = periodo
    movPerdidasAcumuladasValorNetoRealizacionModificados.empresaId = empresa
    movPerdidasAcumuladasValorNetoRealizacionModificados.reporteId = reporte

    reportStore.setReportData(movPerdidasAcumuladasValorNetoRealizacionModificados)

    return movPerdidasAcumuladasValorNetoRealizacionModificados
  }
}

export const getMovPropiedadesPlantasEquipos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movPropiedadesPlantasEquiposData = {
    mov_construccionesencurso_bilddb: 0.00,
    mov_construccionesencurso_compras: 0.00,
    mov_construccionesencurso_gdd: 0.00,
    mov_construccionesencurso_od: 0.00,
    mov_construccionesencurso_si: 0.00,
    mov_construccionesencurso_sida: 0.00,
    mov_construccionesencurso_total: 0.00,
    mov_construccionesencurso_transf: 0.00,
    mov_edificios_bilddb: 0.00,
    mov_edificios_compras: 0.00,
    mov_edificios_gdd: 0.00,
    mov_edificios_od: 0.00,
    mov_edificios_si: 0.00,
    mov_edificios_sida: 0.00,
    mov_edificios_total: 0.00,
    mov_edificios_transf: 0.00,
    mov_equipodecomputacion_bilddb: 0.00,
    mov_equipodecomputacion_compras: 0.00,
    mov_equipodecomputacion_gdd: 0.00,
    mov_equipodecomputacion_od: 0.00,
    mov_equipodecomputacion_si: 0.00,
    mov_equipodecomputacion_sida: 0.00,
    mov_equipodecomputacion_total: 0.00,
    mov_equipodecomputacion_transf: 0.00,
    mov_instalaciones_bilddb: 0.00,
    mov_instalaciones_compras: 0.00,
    mov_instalaciones_gdd: 0.00,
    mov_instalaciones_od: 0.00,
    mov_instalaciones_si: 0.00,
    mov_instalaciones_sida: 0.00,
    mov_instalaciones_total: 0.00,
    mov_instalaciones_transf: 0.00,
    mov_maquinariayequipo_bilddb: 0.00,
    mov_maquinariayequipo_compras: 0.00,
    mov_maquinariayequipo_gdd: 0.00,
    mov_maquinariayequipo_od: 0.00,
    mov_maquinariayequipo_si: 0.00,
    mov_maquinariayequipo_sida: 0.00,
    mov_maquinariayequipo_total: 0.00,
    mov_maquinariayequipo_transf: 0.00,
    mov_mueblesyenseres_bilddb: 0.00,
    mov_mueblesyenseres_compras: 0.00,
    mov_mueblesyenseres_gdd: 0.00,
    mov_mueblesyenseres_od: 0.00,
    mov_mueblesyenseres_si: 0.00,
    mov_mueblesyenseres_sida: 0.00,
    mov_mueblesyenseres_total: 0.00,
    mov_mueblesyenseres_transf: 0.00,
    mov_otrospropiedadesplantasyequipos_bilddb: 0.00,
    mov_otrospropiedadesplantasyequipos_compras: 0.00,
    mov_otrospropiedadesplantasyequipos_gdd: 0.00,
    mov_otrospropiedadesplantasyequipos_od: 0.00,
    mov_otrospropiedadesplantasyequipos_si: 0.00,
    mov_otrospropiedadesplantasyequipos_sida: 0.00,
    mov_otrospropiedadesplantasyequipos_total: 0.00,
    mov_otrospropiedadesplantasyequipos_transf: 0.00,
    mov_terreno_bilddb: 0.00,
    mov_terreno_compras: 0.00,
    mov_terreno_gdd: 0.00,
    mov_terreno_od: 0.00,
    mov_terreno_si: 0.00,
    mov_terreno_sida: 0.00,
    mov_terreno_total: 0.00,
    mov_terreno_transf: 0.00,
    mov_vehiculo_bilddb: 0.00,
    mov_vehiculo_compras: 0.00,
    mov_vehiculo_gdd: 0.00,
    mov_vehiculo_od: 0.00,
    mov_vehiculo_si: 0.00,
    mov_vehiculo_sida: 0.00,
    mov_vehiculo_total: 0.00,
    mov_vehiculo_transf: 0.00,
    mov_total_si: 0.00,
    mov_total_sida: 0.00,
    mov_total_compras: 0.00,
    mov_total_bilddb: 0.00,
    mov_total_transf: 0.00,
    mov_total_od: 0.00,
    mov_total_gdd: 0.00,
    mov_total_sf: 0.00,
  }

  if (tipo === "actual") {
    movPropiedadesPlantasEquiposData.userId = usuario
    movPropiedadesPlantasEquiposData.periodoId = periodo
    movPropiedadesPlantasEquiposData.empresaId = empresa
    movPropiedadesPlantasEquiposData.reporteId = reporte

    reportStore.setReportData(movPropiedadesPlantasEquiposData)

    return movPropiedadesPlantasEquiposData
  } else if (tipo === "anterior") {
    let movPropiedadesPlantasEquiposModificados = {}
    for (let clave in movPropiedadesPlantasEquiposData) {
      movPropiedadesPlantasEquiposModificados[clave + "_ant"] = movPropiedadesPlantasEquiposData[clave]
    }

    movPropiedadesPlantasEquiposModificados.userId = usuario
    movPropiedadesPlantasEquiposModificados.periodoId = periodo
    movPropiedadesPlantasEquiposModificados.empresaId = empresa
    movPropiedadesPlantasEquiposModificados.reporteId = reporte

    reportStore.setReportData(movPropiedadesPlantasEquiposModificados)

    return movPropiedadesPlantasEquiposModificados
  }
}

export const getMovPropiedadesDeInversion = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movPropiedadesDeInversionData = {
    mov_bajasincluida_edificios: 0.00,
    mov_bajasincluida_terrenos: 0.00,
    mov_compras_edificios: 0.00,
    mov_compras_terrenos: 0.00,
    mov_gastosdedepreciacion_edificios: 0.00,
    mov_gastosdedepreciacion_terrenos: 0.00,
    mov_otros_edificios: 0.00,
    mov_otros_terrenos: 0.00,
    mov_saldo_edificios: 0.00,
    mov_saldo_terrenos: 0.00,
    mov_saldoinicial_edificios: 0.00,
    mov_saldoinicial_terrenos: 0.00,
    mov_transferencia_edificios: 0.00,
    mov_transferencia_terrenos: 0.00,
    mov_valorrazonable_edificios: 0.00,
    mov_valorrazonable_terrenos: 0.00,
  }

  if (tipo === "actual") {
    movPropiedadesDeInversionData.userId = usuario
    movPropiedadesDeInversionData.periodoId = periodo
    movPropiedadesDeInversionData.empresaId = empresa
    movPropiedadesDeInversionData.reporteId = reporte

    reportStore.setReportData(movPropiedadesDeInversionData)

    return movPropiedadesDeInversionData
  } else if (tipo === "anterior") {
    let movPropiedadesDeInversionModificados = {}
    for (let clave in movPropiedadesDeInversionData) {
      movPropiedadesDeInversionModificados[clave + "_ant"] = movPropiedadesDeInversionData[clave]
    }

    movPropiedadesDeInversionModificados.userId = usuario
    movPropiedadesDeInversionModificados.periodoId = periodo
    movPropiedadesDeInversionModificados.empresaId = empresa
    movPropiedadesDeInversionModificados.reporteId = reporte

    reportStore.setReportData(movPropiedadesDeInversionModificados)

    return movPropiedadesDeInversionModificados
  }
}

export const getIntangibles = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movIntangiblesData = {
    mov_bajasincluida: 0.00,
    mov_compras: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_gastosdeamortizacion: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicialamortizacionacumulada: 0.00,
    mov_saldoinicialcosto: 0.00,
  }

  if (tipo === "actual") {
    movIntangiblesData.userId = usuario
    movIntangiblesData.periodoId = periodo
    movIntangiblesData.empresaId = empresa
    movIntangiblesData.reporteId = reporte

    reportStore.setReportData(movIntangiblesData)

    return movIntangiblesData
  } else if (tipo === "anterior") {
    let movIntangiblesModificados = {}
    for (let clave in movIntangiblesData) {
      movIntangiblesModificados[clave + "_ant"] = movIntangiblesData[clave]
    }

    movIntangiblesModificados.userId = usuario
    movIntangiblesModificados.periodoId = periodo
    movIntangiblesModificados.empresaId = empresa
    movIntangiblesModificados.reporteId = reporte

    reportStore.setReportData(movIntangiblesModificados)

    return movIntangiblesModificados
  }
}

export const getActivosBiologicos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movActivosBiologicosData = {
    mov_bajasoventas_aec: 0.00,
    mov_bajasoventas_aep: 0.00,
    mov_bajasoventas_otros: 0.00,
    mov_bajasoventas_pec: 0.00,
    mov_bajasoventas_total: 0.00,
    mov_compras_aec: 0.00,
    mov_compras_aep: 0.00,
    mov_compras_otros: 0.00,
    mov_compras_pec: 0.00,
    mov_compras_total: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_incrementodisminuciondevalor_aec: 0.00,
    mov_incrementodisminuciondevalor_aep: 0.00,
    mov_incrementodisminuciondevalor_otros: 0.00,
    mov_incrementodisminuciondevalor_pec: 0.00,
    mov_incrementodisminuciondevalor_total: 0.00,
    mov_reclasificacion_aec: 0.00,
    mov_reclasificacion_aep: 0.00,
    mov_reclasificacion_otros: 0.00,
    mov_reclasificacion_pec: 0.00,
    mov_reclasificacion_total: 0.00,
    mov_saldofinal_aec: 0.00,
    mov_saldofinal_aep: 0.00,
    mov_saldofinal_otros: 0.00,
    mov_saldofinal_pec: 0.00,
    mov_saldofinal_total: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial_aec: 0.00,
    mov_saldoinicial_aep: 0.00,
    mov_saldoinicial_otros: 0.00,
    mov_saldoinicial_pec: 0.00,
    mov_saldoinicial_total: 0.00,
    mov_plantasencrecimiento_total: 0.00,
    mov_plantasenproduccion_total: 0.00,
    mov_otros_total: 0.00,
    mov_total_total: 0.00,
    mov_animalesenccrecimiento_total: 0.00,
    mov_animalesenproduccion_total: 0.00,
    mov_saldoinicial_pep: 0.00,
    mov_compras_pep: 0.00,
    mov_bajasoventas_pep: 0.00,
    mov_incrementodisminuciondevalor_pep: 0.00,
    mov_reclasificacion_pep: 0.00,
    mov_saldofinal_pep: 0.00,
  }

  if (tipo === "actual") {
    movActivosBiologicosData.userId = usuario
    movActivosBiologicosData.periodoId = periodo
    movActivosBiologicosData.empresaId = empresa
    movActivosBiologicosData.reporteId = reporte

    reportStore.setReportData(movActivosBiologicosData)

    return movActivosBiologicosData
  } else if (tipo === "anterior") {
    let movActivosBiologicosModificados = {}
    for (let clave in movActivosBiologicosData) {
      movActivosBiologicosModificados[clave + "_ant"] = movActivosBiologicosData[clave]
    }

    movActivosBiologicosModificados.userId = usuario
    movActivosBiologicosModificados.periodoId = periodo
    movActivosBiologicosModificados.empresaId = empresa
    movActivosBiologicosModificados.reporteId = reporte

    reportStore.setReportData(movActivosBiologicosModificados)

    return movActivosBiologicosModificados
  }
}

export const getImpuestosDiferidos = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movImpuestosDiferidosData = {
    mov_apid_afectacionaresultadosintegrales: 0.00,
    mov_apid_ajustesresultadosacumulados: 0.00,
    mov_apid_ajustesresultadospyg: 0.00,
    mov_apid_diferenciaporcuadrar: 0.00,
    mov_apid_generacionenrevision: 0.00,
    mov_apid_saldofinalsegunesf: 0.00,
    mov_apid_saldofinalsegunmovimiento: 0.00,
    mov_apid_saldoinicial: 0.00,
    mov_ppid_afectacionaresultadosintegrales: 0.00,
    mov_ppid_ajustesresultadosacumulados: 0.00,
    mov_ppid_ajustesresultadospyg: 0.00,
    mov_ppid_diferenciaporcuadrar: 0.00,
    mov_ppid_generacionenrevision: 0.00,
    mov_ppid_saldofinalsegunesf: 0.00,
    mov_ppid_saldofinalsegunmovimiento: 0.00,
    mov_ppid_saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movImpuestosDiferidosData.userId = usuario
    movImpuestosDiferidosData.periodoId = periodo
    movImpuestosDiferidosData.empresaId = empresa
    movImpuestosDiferidosData.reporteId = reporte

    reportStore.setReportData(movImpuestosDiferidosData)

    return movImpuestosDiferidosData
  } else if (tipo === "anterior") {
    let movImpuestosDiferidosModificados = {}
    for (let clave in movImpuestosDiferidosData) {
      movImpuestosDiferidosModificados[clave + "_ant"] = movImpuestosDiferidosData[clave]
    }

    movImpuestosDiferidosModificados.userId = usuario
    movImpuestosDiferidosModificados.periodoId = periodo
    movImpuestosDiferidosModificados.empresaId = empresa
    movImpuestosDiferidosModificados.reporteId = reporte

    reportStore.setReportData(movImpuestosDiferidosModificados)

    return movImpuestosDiferidosModificados
  }
}

export const getJubilacionPatronal = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movJubilacionPatronalData = {
    mov_beneficiospagados: 0.00,
    mov_costofinanciero: 0.00,
    mov_costosporservicios: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_efectodeliquidaciones: 0.00,
    mov_gananciaoperdidaactuarial: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movJubilacionPatronalData.userId = usuario
    movJubilacionPatronalData.periodoId = periodo
    movJubilacionPatronalData.empresaId = empresa
    movJubilacionPatronalData.reporteId = reporte

    reportStore.setReportData(movJubilacionPatronalData)

    return movJubilacionPatronalData
  } else if (tipo === "anterior") {
    let movJubilacionPatronalModificados = {}
    for (let clave in movJubilacionPatronalData) {
      movJubilacionPatronalModificados[clave + "_ant"] = movJubilacionPatronalData[clave]
    }

    movJubilacionPatronalModificados.userId = usuario
    movJubilacionPatronalModificados.periodoId = periodo
    movJubilacionPatronalModificados.empresaId = empresa
    movJubilacionPatronalModificados.reporteId = reporte

    reportStore.setReportData(movJubilacionPatronalModificados)

    return movJubilacionPatronalModificados
  }
}

export const getDesahucio = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movDesahucioData = {
    mov_beneficiospagados: 0.00,
    mov_costofinanciero: 0.00,
    mov_costosporservicios: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_efectodeliquidaciones: 0.00,
    mov_gananciaoperdidaactuarial: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movDesahucioData.userId = usuario
    movDesahucioData.periodoId = periodo
    movDesahucioData.empresaId = empresa
    movDesahucioData.reporteId = reporte

    reportStore.setReportData(movDesahucioData)

    return movDesahucioData
  } else if (tipo === "anterior") {
    let movDesahucioModificados = {}
    for (let clave in movDesahucioData) {
      movDesahucioModificados[clave + "_ant"] = movDesahucioData[clave]
    }

    movDesahucioModificados.userId = usuario
    movDesahucioModificados.periodoId = periodo
    movDesahucioModificados.empresaId = empresa
    movDesahucioModificados.reporteId = reporte

    reportStore.setReportData(movDesahucioModificados)

    return movDesahucioModificados
  }
}

export const getActivosFinancierosCortoPlazo = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movActivosFinancierosCortoPlazoData = {
    mov_provisionpordeterioro: 0.00,
    mov_ajustes: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_interesactualizacionantiguasinv: 0.00,
    mov_nuevasinversiones: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }

  if (tipo === "actual") {
    movActivosFinancierosCortoPlazoData.userId = usuario
    movActivosFinancierosCortoPlazoData.periodoId = periodo
    movActivosFinancierosCortoPlazoData.empresaId = empresa
    movActivosFinancierosCortoPlazoData.reporteId = reporte

    reportStore.setReportData(movActivosFinancierosCortoPlazoData)

    return movActivosFinancierosCortoPlazoData
  } else if (tipo === "anterior") {
    let movActivosFinancierosCortoPlazoModificados = {}
    for (let clave in movActivosFinancierosCortoPlazoData) {
      movActivosFinancierosCortoPlazoModificados[clave + "_ant"] = movActivosFinancierosCortoPlazoData[clave]
    }

    movActivosFinancierosCortoPlazoModificados.userId = usuario
    movActivosFinancierosCortoPlazoModificados.periodoId = periodo
    movActivosFinancierosCortoPlazoModificados.empresaId = empresa
    movActivosFinancierosCortoPlazoModificados.reporteId = reporte

    reportStore.setReportData(movActivosFinancierosCortoPlazoModificados)

    return movActivosFinancierosCortoPlazoModificados
  }
}

export const getMovOtros = (tipo, usuario, periodo,  empresa, reporte) => {
  const reportStore = useReportStore()

  let movOtrosData = {
    mov_ajuste: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_interesactualizacionantiguasinv: 0.00,
    mov_nuevasinversiones: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
    mov_dividendos_dividendospagados: 0.00,
    mov_islr_pagos: 0.00,
    mov_islr_provisiondelanio:  0.00,
    mov_pt_pagos:  0.00,
    mov_pt_provisiondelanio: 0.00,
  }

  if (tipo === "actual") {
    movOtrosData.userId = usuario
    movOtrosData.periodoId = periodo
    movOtrosData.empresaId = empresa
    movOtrosData.reporteId = reporte

    reportStore.setReportData(movOtrosData)

    return movOtrosData
  } else if (tipo === "anterior") {
    let movOtrosModificados = {}
    for (let clave in movOtrosData) {
      movOtrosModificados[clave + "_ant"] = movOtrosData[clave]
    }

    movOtrosModificados.userId = usuario
    movOtrosModificados.periodoId = periodo
    movOtrosModificados.empresaId = empresa
    movOtrosModificados.reporteId = reporte

    reportStore.setReportData(movOtrosModificados)

    return movOtrosModificados
  }
}

export const obtenerDatosUsuario = () => {
  return JSON.parse(sessionStorage.getItem('userData'))
}

export const obtenerPeriodoRecienCreado =  () => {
  console.log(localStorage.getItem('periodonuevo'))

  return Number(JSON.parse(localStorage.getItem('periodonuevo')))
}

export const obtenerEmpresa = () => {
  return JSON.parse(localStorage.getItem('empresanueva'))
}

export const obtenerDatosReporte = async () => {
  const reportStore = useReportStore()

  const user = obtenerDatosUsuario()

  const reporte = {
    userId: user.id,
    periodoId: obtenerPeriodoRecienCreado(),
    empresaId: obtenerEmpresa(),
    nombre_reporte: 'ifluc',
  }

  const activoscorrientesifluc = await getActivosCorrientes('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const activosnocorrientesifluc = await getActivosNoCorrientes('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const pasivoscorrientesifluc = await getPasivosCorrientes('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const pasivosnocorrientesifluc = await getPasivosNoCorrientes('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const patrimonioifluc = await getPatrimonio('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const costosifluc = await getCostos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const ingresosifluc = await getIngresos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosingresosifluc = await getOtrosIngresos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosdeventasifluc = await getGastosDeVentas('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosadministrativosifluc = await getGastosAdministrativos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosfinancierosifluc = await getGastosFinancieros('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosgastosifluc = await getOtrosGastos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const resultadosifluc = await getResultados('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const operacionesdiscontinuadasifluc = await getOperacionesDiscontinuadas('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosresultadosintegralifluc = await getOtrosResultadosIntegral('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const resultadosparticipacioncontroladoraifluc = await getResultadosParticipacionControladora('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdeoperacionifluc = await getActividadesDeOperacion('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdeinversionifluc = await getActividadesDeInversion('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdefinanciamientoifluc = await getActividadesDeFinanciamiento('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const conciliacionganancianetaifluc = await getConciliacion('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const ecpifluc = await getEcp('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movperdidasacumuladascuentasincobrablesydeterioro = await getMovPerdidasAcumuladasCuentasIncobrablesAndDeterioro('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movperdidasacumuladasvalornetorealizacion = await getMovPerdidasAcumuladasValorNetoRealizacion('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movpropiedadesplantasyequipos = await getMovPropiedadesPlantasEquipos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movpropiedadesdeinversion = await getMovPropiedadesDeInversion('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movintangibles = await getIntangibles('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movactivosbiologicos = await getActivosBiologicos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movimpuestosdiferidos = await getImpuestosDiferidos('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const movjubilacionpatronal = await getJubilacionPatronal('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const deshaucio = await getDesahucio('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const activosfinancieroslargoplazo = await getActivosFinancierosCortoPlazo('actual', user.id, reporte.periodoId, reporte.empresaId, null)
  const otros = await getMovOtros('actual', user.id, reporte.periodoId, reporte.empresaId, null)

  // PERIODO ANTERIOR
  const activoscorrientesifluc_ant = await getActivosCorrientes('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const activosnocorrientesifluc_ant = await getActivosNoCorrientes('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const pasivoscorrientesifluc_ant = await getPasivosCorrientes('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const pasivosnocorrientesifluc_ant = await getPasivosNoCorrientes('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const patrimonioifluc_ant = await getPatrimonio('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const costosifluc_ant = await getCostos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const ingresosifluc_ant = await getIngresos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosingresosifluc_ant = await getOtrosIngresos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosdeventasifluc_ant = await getGastosDeVentas('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosadministrativosifluc_ant = await getGastosAdministrativos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const gastosfinancierosifluc_ant = await getGastosFinancieros('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosgastosifluc_ant = await getOtrosGastos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const resultadosifluc_ant = await getResultados('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const operacionesdiscontinuadasifluc_ant = await getOperacionesDiscontinuadas('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const otrosresultadosintegralifluc_ant = await getOtrosResultadosIntegral('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const resultadosparticipacioncontroladoraifluc_ant = await getResultadosParticipacionControladora('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdeoperacionifluc_ant = await getActividadesDeOperacion('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdeinversionifluc_ant = await getActividadesDeInversion('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const actividadesdefinanciamientoifluc_ant = await getActividadesDeFinanciamiento('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const conciliacionganancianetaifluc_ant = await getConciliacion('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movperdidasacumuladascuentasincobrablesydeterioro_ant = await getMovPerdidasAcumuladasCuentasIncobrablesAndDeterioro('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movperdidasacumuladasvalornetorealizacion_ant = await getMovPerdidasAcumuladasValorNetoRealizacion('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movpropiedadesplantasyequipos_ant = await getMovPropiedadesPlantasEquipos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movpropiedadesdeinversion_ant = await getMovPropiedadesDeInversion('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movintangibles_ant = await getIntangibles('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movactivosbiologicos_ant = await getActivosBiologicos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movimpuestosdiferidos_ant = await getImpuestosDiferidos('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const movjubilacionpatronal_ant = await getJubilacionPatronal('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const deshaucio_ant = await getDesahucio('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const activosfinancieroslargoplazo_ant = await getActivosFinancierosCortoPlazo('anterior', user.id, reporte.periodoId, reporte.empresaId, null)
  const otros_ant = await getMovOtros('anterior', user.id, reporte.periodoId, reporte.empresaId, null)

  const periodoId = obtenerPeriodoRecienCreado()

  return {
    reporte,
    periodoId,
    activoscorrientesifluc,
    activosnocorrientesifluc,
    pasivoscorrientesifluc,
    pasivosnocorrientesifluc,
    patrimonioifluc,
    costosifluc,
    ingresosifluc,
    otrosingresosifluc,
    gastosdeventasifluc,
    gastosadministrativosifluc,
    gastosfinancierosifluc,
    otrosgastosifluc,
    resultadosifluc,
    operacionesdiscontinuadasifluc,
    otrosresultadosintegralifluc,
    resultadosparticipacioncontroladoraifluc,
    actividadesdeoperacionifluc,
    actividadesdeinversionifluc,
    actividadesdefinanciamientoifluc,
    conciliacionganancianetaifluc,
    ecpifluc,
    movperdidasacumuladascuentasincobrablesydeterioro,
    movperdidasacumuladasvalornetorealizacion,
    movpropiedadesplantasyequipos,
    movpropiedadesdeinversion,
    movintangibles,
    movactivosbiologicos,
    movimpuestosdiferidos,
    movjubilacionpatronal,
    deshaucio,
    activosfinancieroslargoplazo,
    otros,
    activoscorrientesifluc_ant,
    activosnocorrientesifluc_ant,
    pasivoscorrientesifluc_ant,
    pasivosnocorrientesifluc_ant,
    patrimonioifluc_ant,
    costosifluc_ant,
    ingresosifluc_ant,
    otrosingresosifluc_ant,
    gastosdeventasifluc_ant,
    gastosadministrativosifluc_ant,
    gastosfinancierosifluc_ant,
    otrosgastosifluc_ant,
    resultadosifluc_ant,
    operacionesdiscontinuadasifluc_ant,
    otrosresultadosintegralifluc_ant,
    resultadosparticipacioncontroladoraifluc_ant,
    actividadesdeoperacionifluc_ant,
    actividadesdeinversionifluc_ant,
    actividadesdefinanciamientoifluc_ant,
    conciliacionganancianetaifluc_ant,
    movperdidasacumuladascuentasincobrablesydeterioro_ant,
    movperdidasacumuladasvalornetorealizacion_ant,
    movpropiedadesplantasyequipos_ant,
    movpropiedadesdeinversion_ant,
    movintangibles_ant,
    movactivosbiologicos_ant,
    movimpuestosdiferidos_ant,
    movjubilacionpatronal_ant,
    deshaucio_ant,
    activosfinancieroslargoplazo_ant,
    otros_ant,
  }
}

export const onEditorFocus = () => {
  console.log('Editor focused')

  const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')
  const notebookElements = document.querySelectorAll('.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners')

  editorElements.forEach(element => {
    element.style.maxHeight = '300px'
  })

  notebookElements.forEach(element => {
    element.style.maxHeight = '300px'
  })
}

export const onEditorBlur = () => {
  console.log('Editor blurred')

  const notebookElements = document.querySelectorAll('.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners')
  const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')

  notebookElements.forEach(element => {
    element.style.maxHeight = '300px'
  })

  editorElements.forEach(element => {
    element.style.maxHeight = '300px'
  })
}

export const onEditorInput = () => {
  console.log('Editor input')
}

export const onEditorDestroy = () => {
  console.log('Editor destroyed')

  const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')
  const notebookElements = document.querySelectorAll('.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners')

  notebookElements.forEach(element => {
    element.style.maxHeight = '300px'
  })

  editorElements.forEach(element => {
    element.style.maxHeight = '300px'
  })
}
