import { useReportStore } from "@/@store/reportStore"

export const obtenerDatosUsuario = () => {
  return JSON.parse(sessionStorage.getItem('userData'))
}

export const obtenerPeriodoRecienCreado =  value => {
  if (typeof value === 'number') return value
  if (!value) throw new Error("PeriodoId inválido")

  const data = JSON.parse(value)

  return data.periodoid
}

export const obtenerEmpresa = () => {
  return JSON.parse(localStorage.getItem('empresanueva'))
}

export const buildActivosCorrientes = (tipo, usuario, periodo, empresa, reporte) => {
  let data = {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Activoscorrientes"

    console.log('data Activos Corrientes: ' + data)

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ActivoscorrientesAnt"

    console.log('mod Activos Corrientes Ant: ' + mod)

    return mod
  }
}

export const buildActivosNoCorrientes = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Activosnocorrientes"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ActivosnocorrientesAnt"

    return mod
  }
}

export const buildPasivosCorrientes = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Pasivoscorrientes"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "PasivoscorrientesAnt"

    return mod
  }
}

export const buildPasivosNoCorrientes = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Pasivosnocorrientes"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "PasivosnocorrientesAnt"

    return mod
  }
}

export const buildPatrimonio = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Patrimonio"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "PatrimonioAnt"

    return mod
  }
}

// ERI VALUES

export const buildCostos = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Costos"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "CostosAnt"

    return mod
  }
}

export const buildIngresos = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Ingresos"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "IngresosAnt"

    return mod
  }
}

export const buildOtrosIngresos = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
    eri_403:	0.00,
    eri_40301:	0.00,
    eri_40302:	0.00,
    eri_40303:	0.00,
  }

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Otrosingresos"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "OtrosingresosAnt"

    return mod
  }
}

export const buildGastosDeVentas = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Gastosdeventas"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "GastosdeventasAnt"

    return mod
  }
}

export const buildGastosAdministrativos = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Gastosadministrativos"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "GastosadministrativosAnt"

    return mod
  }
}

export const buildGastosFinancieros = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Gastosfinancieros"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "GastosfinancierosAnt"

    return mod
  }
}

export const buildOtrosGastos = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
    eri_502:	0.00,
    eri_50201:	0.00,
    eri_50202:	0.00,
    eri_50203:	0.00,
    eri_50204:	0.00,
    eri_5020401:	0.00,
    eri_5020402:	0.00,
  }

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Otrosgastos"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "OtrosgastosAnt"

    return mod
  }
}

export const buildResultados = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
    eri_600:	0.00,
    eri_601:	0.00,
    eri_602:	0.00,
    eri_603:	0.00,
    eri_604:	0.00,
    eri_605:	0.00,
    eri_606:	0.00,
    eri_607:	0.00,
  }

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Resultados"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ResultadosAnt"

    return mod
  }
}

export const buildOperacionesDiscontinuadas = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
    eri_700:	0.00,
    eri_701:	0.00,
    eri_702:	0.00,
    eri_703:	0.00,
    eri_704:	0.00,
    eri_705:	0.00,
    eri_706:	0.00,
    eri_707:	0.00,
  }

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Operacionesdiscontinuadas"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "OperacionesdiscontinuadasAnt"

    return mod
  }
}

export const buildOtrosResultadosIntegral = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Otrosresultadosintegrales"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "OtrosresultadosintegralesAnt"

    return mod
  }
}

export const buildResultadosParticipacionControladora = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
    eri_80101:	0.00,
    eri_80102:	0.00,
  }

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Participacioncontroladora"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ParticipacioncontroladoraAnt"

    return mod
  }
}

export const buildActividadesDeOperacion = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Actividadesdeoperacion"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ActividadesdeoperacionAnt"

    return mod
  }
}

export const buildActividadesDeInversion = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Actividadesdeinversion"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "Actividadesdeinversion"

    return mod
  }
}

export const buildActividadesDeFinanciamiento = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Actividadesdefinanciamiento"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ActividadesdefinanciamientoAnt"

    return mod
  }
}

export const buildConciliacion = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Conciliacion"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "ConciliacionAnt"

    return mod
  }
}

export const buildEcp = (tipo, usuario, periodo, empresa, reporte) => {
  let data =  {
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

  if (tipo === 'actual') {
    data.userid = usuario
    data.periodoid = periodo
    data.empresaid = empresa
    data.reporteid = reporte
    data.tablaorigen = "Ecp"

    return data
  } else {
    const mod = {}
    for (let clave in data) {
      mod[clave + '_ant'] = data[clave]
    }
    mod.userid = usuario
    mod.periodoid = periodo
    mod.empresaid = empresa
    mod.reporteid = reporte
    mod.tablaorigen = "EcpAnt"

    return mod
  }
}


export const obtenerDatosReporte = async (id, periodo, empresa) => {

  console.log(periodo)

  const reportStore = useReportStore()

  // const user = obtenerDatosUsuario()

  const reporte = {
    userid: id,
    periodoid: periodo,
    empresaid: empresa,
    nombre_reporte: 'convertex',
  }

  const activoscorrientesconvertex = await buildActivosCorrientes('actual', id, reporte.periodoid, reporte.empresaid, null)
  const activosnocorrientesconvertex = await buildActivosNoCorrientes('actual', id, reporte.periodoid, reporte.empresaid, null)
  const pasivoscorrientesconvertex = await buildPasivosCorrientes('actual', id, reporte.periodoid, reporte.empresaid, null)
  const pasivosnocorrientesconvertex = await buildPasivosNoCorrientes('actual', id, reporte.periodoid, reporte.empresaid, null)
  const patrimonioconvertex = await buildPatrimonio('actual', id, reporte.periodoid, reporte.empresaid, null)
  const costosconvertex = await buildCostos('actual', id, reporte.periodoid, reporte.empresaid, null)
  const ingresosconvertex = await buildIngresos('actual', id, reporte.periodoid, reporte.empresaid, null)
  const otrosingresosconvertex = await buildOtrosIngresos('actual', id, reporte.periodoid, reporte.empresaid, null)
  const gastosdeventasconvertex = await buildGastosDeVentas('actual', id, reporte.periodoid, reporte.empresaid, null)
  const gastosadministrativosconvertex = await buildGastosAdministrativos('actual', id, reporte.periodoid, reporte.empresaid, null)
  const gastosfinancierosconvertex = await buildGastosFinancieros('actual', id, reporte.periodoid, reporte.empresaid, null)
  const otrosgastosconvertex = await buildOtrosGastos('actual', id, reporte.periodoid, reporte.empresaid, null)
  const resultadosconvertex = await buildResultados('actual', id, reporte.periodoid, reporte.empresaid, null)
  const operacionesdiscontinuadasconvertex = await buildOperacionesDiscontinuadas('actual', id, reporte.periodoid, reporte.empresaid, null)
  const otrosresultadosintegralconvertex = await buildOtrosResultadosIntegral('actual', id, reporte.periodoid, reporte.empresaid, null)
  const resultadosparticipacioncontroladoraconvertex = await buildResultadosParticipacionControladora('actual', id, reporte.periodoid, reporte.empresaid, null)
  const actividadesdeoperacionconvertex = await buildActividadesDeOperacion('actual', id, reporte.periodoid, reporte.empresaid, null)
  const actividadesdeinversionconvertex = await buildActividadesDeInversion('actual', id, reporte.periodoid, reporte.empresaid, null)
  const actividadesdefinanciamientoconvertex = await buildActividadesDeFinanciamiento('actual', id, reporte.periodoid, reporte.empresaid, null)
  const conciliacionganancianetaconvertex = await buildConciliacion('actual', id, reporte.periodoid, reporte.empresaid, null)
  const ecpconvertex = await buildEcp('actual', id, reporte.periodoid, reporte.empresaid, null)

  // PERIODO ANTERIOR
  const activoscorrientesconvertex_ant = await buildActivosCorrientes('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const activosnocorrientesconvertex_ant = await buildActivosNoCorrientes('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const pasivoscorrientesconvertex_ant = await buildPasivosCorrientes('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const pasivosnocorrientesconvertex_ant = await buildPasivosNoCorrientes('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const patrimonioconvertex_ant = await buildPatrimonio('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const costosconvertex_ant = await buildCostos('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const ingresosconvertex_ant = await buildIngresos('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const otrosingresosconvertex_ant = await buildOtrosIngresos('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const gastosdeventasconvertex_ant = await buildGastosDeVentas('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const gastosadministrativosconvertex_ant = await buildGastosAdministrativos('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const gastosfinancierosconvertex_ant = await buildGastosFinancieros('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const otrosgastosconvertex_ant = await buildOtrosGastos('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const resultadosconvertex_ant = await buildResultados('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const operacionesdiscontinuadasconvertex_ant = await buildOperacionesDiscontinuadas('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const otrosresultadosintegralconvertex_ant = await buildOtrosResultadosIntegral('anterior', id, reporte.periodoid, reporte.empresaid, null)
  const resultadosparticipacioncontroladoraconvertex_ant = await buildResultadosParticipacionControladora('anterior', id, reporte.periodoid, reporte.empresaid, null)

  // const periodoId = obtenerPeriodoRecienCreado()

  return {
    reporte,
    periodo,
    activoscorrientesconvertex,
    activosnocorrientesconvertex,
    pasivoscorrientesconvertex,
    pasivosnocorrientesconvertex,
    patrimonioconvertex,
    costosconvertex,
    ingresosconvertex,
    otrosingresosconvertex,
    gastosdeventasconvertex,
    gastosadministrativosconvertex,
    gastosfinancierosconvertex,
    otrosgastosconvertex,
    resultadosconvertex,
    operacionesdiscontinuadasconvertex,
    otrosresultadosintegralconvertex,
    resultadosparticipacioncontroladoraconvertex,
    actividadesdeoperacionconvertex,
    actividadesdeinversionconvertex,
    actividadesdefinanciamientoconvertex,
    conciliacionganancianetaconvertex,
    ecpconvertex,
    activoscorrientesconvertex_ant,
    activosnocorrientesconvertex_ant,
    pasivoscorrientesconvertex_ant,
    pasivosnocorrientesconvertex_ant,
    patrimonioconvertex_ant,
    costosconvertex_ant,
    ingresosconvertex_ant,
    otrosingresosconvertex_ant,
    gastosdeventasconvertex_ant,
    gastosadministrativosconvertex_ant,
    gastosfinancierosconvertex_ant,
    otrosgastosconvertex_ant,
    resultadosconvertex_ant,
    operacionesdiscontinuadasconvertex_ant,
    otrosresultadosintegralconvertex_ant,
    resultadosparticipacioncontroladoraconvertex_ant,
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
