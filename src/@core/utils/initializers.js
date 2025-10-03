import { computed, ref } from "vue"
import { useReportStore } from "@/@store/reportStore"

export const initializeActivosCorrientes = () => {
  const reportStore = useReportStore()

  const activosCorrientes = {}

  const keys = [
    "esf_1", "esf_101", "esf_102", "esf_10101", "esf_1010101", "esf_1010102",
    "esf_1010103", "esf_10102", "esf_1010201", "esf_101020101", "esf_10102010101",
    "esf_10102010102", "esf_10102010103", "esf_10102010104", "esf_10102010105",
    "esf_10102010106", "esf_101020102", "esf_10102010201", "esf_10102010202",
    "esf_10102010203", "esf_10102010204", "esf_10102010205", "esf_10102010206",
    "esf_10102010207", "esf_10102010208", "esf_10102010209", "esf_10102010210",
    "esf_10102010211", "esf_10102010212", "esf_10102010213", "esf_10102010214",
    "esf_10102010215", "esf_10102010216", "esf_10102010217", "esf_10102010218",
    "esf_10102010219", "esf_10102010220", "esf_10102010221", "esf_10102010222",
    "esf_10102010223", "esf_101020103", "esf_10102010301", "esf_10102010302",
    "esf_10102010303", "esf_10102010304", "esf_1010202", "esf_101020201",
    "esf_10102020101", "esf_10102020102", "esf_10102020103", "esf_10102020104",
    "esf_10102020105", "esf_10102020106", "esf_101020202", "esf_10102020201",
    "esf_10102020202", "esf_10102020203", "esf_10102020204", "esf_10102020205",
    "esf_10102020206", "esf_10102020207", "esf_10102020208", "esf_10102020209",
    "esf_10102020210", "esf_10102020211", "esf_10102020212", "esf_10102020213",
    "esf_10102020214", "esf_10102020215", "esf_10102020216", "esf_10102020217",
    "esf_10102020218", "esf_10102020219", "esf_10102020220", "esf_10102020221",
    "esf_10102020222", "esf_10102020223", "esf_1010203", "esf_101020302",
    "esf_10102030201", "esf_10102030202", "esf_10102030203", "esf_10102030204",
    "esf_10102030205", "esf_10102030206", "esf_10102030207", "esf_10102030208",
    "esf_10102030209", "esf_10102030210", "esf_10102030211", "esf_10102030212",
    "esf_10102030213", "esf_10102030214", "esf_10102030215", "esf_10102030216",
    "esf_10102030217", "esf_10102030218", "esf_10102030219", "esf_10102030220",
    "esf_10102030221", "esf_10102030222", "esf_10102030223", "esf_1010204",
    "esf_101020401", "esf_101020402", "esf_101020403", "esf_1010205", "esf_101020501",
    "esf_10102050101", "esf_10102050102", "esf_101020502", "esf_10102050201",
    "esf_10102050202", "esf_10102050203", "esf_10102050204", "esf_10102050207",
    "esf_10102050208", "esf_10102050209", "esf_10102050210", "esf_10102050211",
    "esf_10102050212", "esf_10102050213", "esf_10102050214", "esf_10102050215",
    "esf_10102050216", "esf_10102050217", "esf_10102050218", "esf_10102050219",
    "esf_10102050220", "esf_10102050221", "esf_1010206", "esf_101020601",
    "esf_101020602", "esf_101020603", "esf_101020604", "esf_1010207", "esf_10103",
    "esf_1010301", "esf_1010302", "esf_1010303", "esf_1010304", "esf_1010305",
    "esf_1010306", "esf_1010307", "esf_1010308", "esf_1010309", "esf_1010310",
    "esf_1010311", "esf_1010312", "esf_1010313", "esf_10104", "esf_1010401",
    "esf_1010402", "esf_1010403", "esf_1010404", "esf_10105", "esf_1010501",
    "esf_1010502", "esf_1010503", "esf_10106", "esf_10107", "esf_10108"
  ]

  keys.forEach(key => {
    activosCorrientes[key] = ref(
      reportStore.getReportData("activoscorrientesifluc")?.[key] || "0",
    )
  })

  return activosCorrientes
}

export const initializeActivosCorrientesAnt = () => {
  const reportStore = useReportStore()

  const activosCorrientesAnt = {}

  const keys = [
    "esf_1_ant", "esf_101_ant", "esf_102_ant", "esf_10101_ant", "esf_1010101_ant",
    "esf_1010102_ant", "esf_1010103_ant", "esf_10102_ant", "esf_1010201_ant",
    "esf_101020101_ant", "esf_10102010101_ant", "esf_10102010102_ant",
    "esf_10102010103_ant", "esf_10102010104_ant", "esf_10102010105_ant",
    "esf_10102010106_ant", "esf_101020102_ant", "esf_10102010201_ant",
    "esf_10102010202_ant", "esf_10102010203_ant", "esf_10102010204_ant",
    "esf_10102010205_ant", "esf_10102010206_ant", "esf_10102010207_ant",
    "esf_10102010208_ant", "esf_10102010209_ant", "esf_10102010210_ant",
    "esf_10102010211_ant", "esf_10102010212_ant", "esf_10102010213_ant",
    "esf_10102010214_ant", "esf_10102010215_ant", "esf_10102010216_ant",
    "esf_10102010217_ant", "esf_10102010218_ant", "esf_10102010219_ant",
    "esf_10102010220_ant", "esf_10102010221_ant", "esf_10102010222_ant",
    "esf_10102010223_ant", "esf_101020103_ant", "esf_10102010301_ant",
    "esf_10102010302_ant", "esf_10102010303_ant", "esf_10102010304_ant",
    "esf_1010202_ant", "esf_101020201_ant", "esf_10102020101_ant",
    "esf_10102020102_ant", "esf_10102020103_ant", "esf_10102020104_ant",
    "esf_10102020105_ant", "esf_10102020106_ant", "esf_101020202_ant",
    "esf_10102020201_ant", "esf_10102020202_ant", "esf_10102020203_ant",
    "esf_10102020204_ant", "esf_10102020205_ant", "esf_10102020206_ant",
    "esf_10102020207_ant", "esf_10102020208_ant", "esf_10102020209_ant",
    "esf_10102020210_ant", "esf_10102020211_ant", "esf_10102020212_ant",
    "esf_10102020213_ant", "esf_10102020214_ant", "esf_10102020215_ant",
    "esf_10102020216_ant", "esf_10102020217_ant", "esf_10102020218_ant",
    "esf_10102020219_ant", "esf_10102020220_ant", "esf_10102020221_ant",
    "esf_10102020222_ant", "esf_10102020223_ant", "esf_1010203_ant",
    "esf_101020302_ant", "esf_10102030201_ant", "esf_10102030202_ant",
    "esf_10102030203_ant", "esf_10102030204_ant", "esf_10102030205_ant",
    "esf_10102030206_ant", "esf_10102030207_ant", "esf_10102030208_ant",
    "esf_10102030209_ant", "esf_10102030210_ant", "esf_10102030211_ant",
    "esf_10102030212_ant", "esf_10102030213_ant", "esf_10102030214_ant",
    "esf_10102030215_ant", "esf_10102030216_ant", "esf_10102030217_ant",
    "esf_10102030218_ant", "esf_10102030219_ant", "esf_10102030220_ant",
    "esf_10102030221_ant", "esf_10102030222_ant", "esf_10102030223_ant",
    "esf_1010204_ant", "esf_101020401_ant", "esf_101020402_ant", "esf_101020403_ant",
    "esf_1010205_ant", "esf_101020501_ant", "esf_10102050101_ant",
    "esf_10102050102_ant", "esf_101020502_ant", "esf_10102050201_ant",
    "esf_10102050202_ant", "esf_10102050203_ant", "esf_10102050204_ant",
    "esf_10102050207_ant", "esf_10102050208_ant", "esf_10102050209_ant",
    "esf_10102050210_ant", "esf_10102050211_ant", "esf_10102050212_ant",
    "esf_10102050213_ant", "esf_10102050214_ant", "esf_10102050215_ant",
    "esf_10102050216_ant", "esf_10102050217_ant", "esf_10102050218_ant",
    "esf_10102050219_ant", "esf_10102050220_ant", "esf_10102050221_ant",
    "esf_1010206_ant", "esf_101020601_ant", "esf_101020602_ant", "esf_101020603_ant",
    "esf_101020604_ant", "esf_1010207_ant", "esf_10103_ant", "esf_1010301_ant",
    "esf_1010302_ant", "esf_1010303_ant", "esf_1010304_ant", "esf_1010305_ant",
    "esf_1010306_ant", "esf_1010307_ant", "esf_1010308_ant", "esf_1010309_ant",
    "esf_1010310_ant", "esf_1010311_ant", "esf_1010312_ant", "esf_1010313_ant",
    "esf_10104_ant", "esf_1010401_ant", "esf_1010402_ant", "esf_1010403_ant",
    "esf_1010404_ant", "esf_10105_ant", "esf_1010501_ant", "esf_1010502_ant",
    "esf_1010503_ant", "esf_10106_ant", "esf_10107_ant", "esf_10108_ant",
  ]

  keys.forEach(key => {
    activosCorrientesAnt[key] = ref(reportStore.getReportData("activoscorrientesifluc_ant", true)?.[key] || "0")
  })

  return activosCorrientesAnt
}

export const initializeActivosNoCorrientes = () => {
  const reportStore = useReportStore()

  const activosNoCorrientes = {}

  const keys = [
    "esf_102","esf_10201","esf_1020101","esf_1020102","esf_1020103",
    "esf_1020104","esf_1020105","esf_1020106","esf_1020107","esf_1020108",
    "esf_1020109","esf_1020110","esf_1020111","esf_1020112","esf_1020113",
    "esf_1020114","esf_102011401","esf_102011402","esf_102011403",
    "esf_10202","esf_1020201","esf_102020101","esf_102020102","esf_1020202",
    "esf_102020201","esf_102020202","esf_1020203","esf_1020204","esf_10203",
    "esf_1020301","esf_1020302","esf_1020303","esf_1020304","esf_1020305",
    "esf_1020306","esf_10204","esf_1020401","esf_1020402","esf_1020403",
    "esf_1020404","esf_1020405","esf_1020406","esf_1020407","esf_10205",
    "esf_10206","esf_1020601","esf_1020602","esf_1020603","esf_1020604",
    "esf_1020605","esf_1020606","esf_10207","esf_1020701","esf_1020702",
    "esf_1020703","esf_10208","esf_1020801","esf_1020802","esf_1020803",
    "esf_1020805","esf_1020806","esf_1020807","esf_1020808","esf_1020809",
    "esf_1020810","esf_1020811","esf_10209","esf_1020901","esf_1020902",
    "esf_1020903","esf_10210","esf_1021001","esf_1021002","esf_1021003",
    "esf_1021004",
  ]

  keys.forEach(key => {
    activosNoCorrientes[key] = ref(reportStore.getReportData("activosnocorrientesifluc")?.[key] || "0")
  })

  return activosNoCorrientes
}

export const initializeActivosNoCorrientesAnt = () => {
  const reportStore = useReportStore()

  const activosAnt = {}

  const keysCorrientes = [
    "esf_1_ant", "esf_101_ant",
  ]

  const keysNoCorrientes = [
    "esf_102_ant","esf_10201_ant","esf_1020101_ant","esf_1020102_ant","esf_1020103_ant",
    "esf_1020104_ant","esf_1020105_ant","esf_1020106_ant","esf_1020107_ant","esf_1020108_ant",
    "esf_1020109_ant","esf_1020110_ant","esf_1020111_ant","esf_1020112_ant","esf_1020113_ant",
    "esf_1020114_ant","esf_102011401_ant","esf_102011402_ant","esf_102011403_ant",
    "esf_10202_ant","esf_1020201_ant","esf_102020101_ant","esf_102020102_ant","esf_1020202_ant",
    "esf_102020201_ant","esf_102020202_ant","esf_1020203_ant","esf_1020204_ant","esf_10203_ant",
    "esf_1020301_ant","esf_1020302_ant","esf_1020303_ant","esf_1020304_ant","esf_1020305_ant",
    "esf_1020306_ant","esf_10204_ant","esf_1020401_ant","esf_1020402_ant","esf_1020403_ant",
    "esf_1020404_ant","esf_1020405_ant","esf_1020406_ant","esf_1020407_ant","esf_10205_ant",
    "esf_10206_ant","esf_1020601_ant","esf_1020602_ant","esf_1020603_ant","esf_1020604_ant",
    "esf_1020605_ant","esf_1020606_ant","esf_10207_ant","esf_1020701_ant","esf_1020702_ant",
    "esf_1020703_ant","esf_10208_ant","esf_1020801_ant","esf_1020802_ant","esf_1020803_ant",
    "esf_1020805_ant","esf_1020806_ant","esf_1020807_ant","esf_1020808_ant","esf_1020809_ant",
    "esf_1020810_ant","esf_1020811_ant","esf_10209_ant","esf_1020901_ant","esf_1020902_ant",
    "esf_1020903_ant","esf_10210_ant","esf_1021001_ant","esf_1021002_ant","esf_1021003_ant",
    "esf_1021004_ant",
  ]

  keysNoCorrientes.forEach(key => {
    activosAnt[key] = ref(reportStore.getReportData("activosnocorrientesifluc_ant", true)?.[key] || "0")
  })

  return activosAnt
}

export const initializeCostos = () => {
  const reportStore = useReportStore()

  const costosKeys = [
    "eri_5","eri_501","eri_50101","eri_5010101","eri_5010102","eri_5010103",
    "eri_5010104","eri_5010105","eri_5010106","eri_5010107","eri_5010108",
    "eri_5010109","eri_5010110","eri_5010111","eri_5010112","eri_50102",
    "eri_5010201","eri_5010202","eri_50103","eri_5010301","eri_5010302",
    "eri_50104","eri_5010401","eri_5010402","eri_5010403","eri_5010404",
    "eri_5010405","eri_5010406","eri_5010407","eri_5010408","eri_50105",
    "eri_5010501","eri_402","eri_401","eri_502",
  ]

  const costosRefs = {}

  costosKeys.forEach(key => {
    costosRefs[key] = ref(reportStore.getReportData("costosifluc")?.[key] || "0")
  })

  return costosRefs
}

export const initializeCostosAnt = () => {
  const reportStore = useReportStore()

  const costosAntKeys = [
    "eri_5_ant","eri_501_ant","eri_50101_ant","eri_5010101_ant","eri_5010102_ant",
    "eri_5010103_ant","eri_5010104_ant","eri_5010105_ant","eri_5010106_ant",
    "eri_5010107_ant","eri_5010108_ant","eri_5010109_ant","eri_5010110_ant",
    "eri_5010111_ant","eri_5010112_ant","eri_50102_ant","eri_5010201_ant",
    "eri_5010202_ant","eri_50103_ant","eri_5010301_ant","eri_5010302_ant",
    "eri_50104_ant","eri_5010401_ant","eri_5010402_ant","eri_5010403_ant",
    "eri_5010404_ant","eri_5010405_ant","eri_5010406_ant","eri_5010407_ant",
    "eri_5010408_ant","eri_50105_ant","eri_5010501_ant","eri_402_ant",
    "eri_401_ant","eri_502_ant",
  ]

  const costosAntRefs = {}

  costosAntKeys.forEach(key => {
    costosAntRefs[key] = ref(reportStore.getReportData("costosifluc_ant", true)?.[key] || "0")
  })

  return costosAntRefs
}

export const initializeActividadesDeFinanciamiento = () => {
  const reportStore = useReportStore()

  const actividadesDeFinanciamientoKeys = [
    "efe_md_95",
    "efe_md_950301",
    "efe_md_950302",
    "efe_md_950303",
    "efe_md_950304",
    "efe_md_950305",
    "efe_md_950306",
    "efe_md_950307",
    "efe_md_950308",
    "efe_md_950309",
    "efe_md_950310",
  ]

  const actividadesDeFinanciamientoRefs = {}

  actividadesDeFinanciamientoKeys.forEach(key => {
    actividadesDeFinanciamientoRefs[key] = ref(reportStore.getReportData("actividadesdefinanciamientoifluc")?.[key] || "0")
  })

  return actividadesDeFinanciamientoRefs
}

export const initializeActividadesDeFinanciamientoAnt = () => {
  const reportStore = useReportStore()

  const actividadesDeFinanciamientoAntKeys = [
    "efe_md_95_ant",
    "efe_md_9503_ant",
    "efe_md_950301_ant",
    "efe_md_95030101_ant",
    "efe_md_95030102_ant",
    "efe_md_95030103_ant",
    "efe_md_95030104_ant",
    "efe_md_950302_ant",
    "efe_md_950303_ant",
    "efe_md_950304_ant",
    "efe_md_950305_ant",
    "efe_md_950306_ant",
    "efe_md_950307_ant",
    "efe_md_950308_ant",
    "efe_md_95030801_ant",
    "efe_md_950309_ant",
    "efe_md_950310_ant",
    "efe_md_95031001_ant",
    "efe_md_95031002_ant",
    "efe_md_95031003_ant",
    "efe_md_95031004_ant",
    "efe_md_95031005_ant",
    "efe_md_95031006_ant",
    "efe_md_95031007_ant",
    "efe_md_95031008_ant",
    "efe_md_9504_ant",
    "efe_md_950401_ant",
    "efe_md_9505_ant",
    "efe_md_9506_ant",
    "efe_md_9507_ant",
  ]

  const actividadesDeFinanciamientoAntRefs = {}

  actividadesDeFinanciamientoAntKeys.forEach(key => {
    actividadesDeFinanciamientoAntRefs[key] = ref(reportStore.getReportData("actividadesdefinanciamientoifluc_ant", true)?.[key] || "0")
  })

  return actividadesDeFinanciamientoAntRefs
}

export const initializeActividadesDeInversion = () => {
  const reportStore = useReportStore()

  const actividadesDeInversionKeys = [
    "efe_md_9502",
    "efe_md_950201",
    "efe_md_950202",
    "efe_md_950203",
    "efe_md_950204",
    "efe_md_950205",
    "efe_md_950206",
    "efe_md_950207",
    "efe_md_950208",
    "efe_md_950209",
    "efe_md_950210",
    "efe_md_950211",
    "efe_md_950212",
    "efe_md_950213",
    "efe_md_950214",
    "efe_md_950215",
    "efe_md_950216",
    "efe_md_950217",
    "efe_md_950218",
    "efe_md_950219",
    "efe_md_950220",
    "efe_md_950221",
  ]

  const actividadesDeInversionRefs = {}

  actividadesDeInversionKeys.forEach(key => {
    actividadesDeInversionRefs[key] = ref(reportStore.getReportData("actividadesdeinversionifluc")?.[key] || "0")
  })

  return actividadesDeInversionRefs
}

export const initializeActividadesDeInversionAnt = () => {
  const reportStore = useReportStore()

  const actividadesDeInversionAntKeys = [
    "efe_md_9502_ant",
    "efe_md_950201_ant",
    "efe_md_950202_ant",
    "efe_md_950203_ant",
    "efe_md_950204_ant",
    "efe_md_950205_ant",
    "efe_md_95020501_ant",
    "efe_md_950206_ant",
    "efe_md_950207_ant",
    "efe_md_950208_ant",
    "efe_md_950209_ant",
    "efe_md_95020901_ant",
    "efe_md_950210_ant",
    "efe_md_950211_ant",
    "efe_md_95021101_ant",
    "efe_md_950212_ant",
    "efe_md_950213_ant",
    "efe_md_95021301_ant",
    "efe_md_95021302_ant",
    "efe_md_95021303_ant",
    "efe_md_950214_ant",
    "efe_md_950215_ant",
    "efe_md_950216_ant",
    "efe_md_950217_ant",
    "efe_md_950218_ant",
    "efe_md_950219_ant",
    "efe_md_950220_ant",
    "efe_md_950221_ant",
    "efe_md_95022101_ant",
    "efe_md_95022102_ant",
    "efe_md_95022103_ant",
    "efe_md_95022104_ant",
    "efe_md_95022105_ant",
    "efe_md_95022106_ant",
    "efe_md_95022107_ant",
    "efe_md_95022108_ant",
    "efe_md_95022109_ant",
    "efe_md_95022110_ant",
  ]

  const actividadesDeInversionAntRefs = {}

  actividadesDeInversionAntKeys.forEach(key => {
    actividadesDeInversionAntRefs[key] = ref(reportStore.getReportData("actividadesdeinversionifluc_ant", true)?.[key] || "0")
  })

  return actividadesDeInversionAntRefs
}

export const initializeActividadesDeOperacion = () => {
  const reportStore = useReportStore()

  const actividadesDeOperacionKeys = [
    "efe_md_95",
    "efe_md_950101",
    "efe_md_95010103",
    "efe_md_95010104",
    "efe_md_95010105",
    "efe_md_950102",
    "efe_md_95010202",
    "efe_md_95010204",
    "efe_md_95010205",
    "efe_md_950103",
    "efe_md_950104",
    "efe_md_950105",
    "efe_md_950106",
    "efe_md_950107",
    "efe_md_950108",
    "efe_md_95010803",
    "efe_md_95010804",
    "efe_md_95010805",
    "efe_md_95010806",
    "efe_md_95010807",
    "efe_md_95010808",
    "efe_md_95010811",
    "efe_md_95010812",
    "efe_md_95010813",
  ]

  const actividadesDeOperacionRefs = {}

  actividadesDeOperacionKeys.forEach(key => {
    actividadesDeOperacionRefs[key] = ref(reportStore.getReportData("actividadesdeoperacionifluc")?.[key] || "0")
  })

  return actividadesDeOperacionRefs
}

export const initializeActividadesDeOperacionAnt = () => {
  const reportStore = useReportStore()

  const actividadesDeOperacionAntKeys = [
    "efe_md_95_ant",
    "efe_md_9501_ant",
    "efe_md_950101_ant",
    "efe_md_95010101_ant",
    "efe_md_9501010101_ant",
    "efe_md_9501010102_ant",
    "efe_md_9501010103_ant",
    "efe_md_9501010104_ant",
    "efe_md_9501010105_ant",
    "efe_md_9501010106_ant",
    "efe_md_9501010107_ant",
    "efe_md_9501010108_ant",
    "efe_md_9501010109_ant",
    "efe_md_9501010110_ant",
    "efe_md_9501010111_ant",
    "efe_md_9501010112_ant",
    "efe_md_9501010113_ant",
    "efe_md_9501010114_ant",
    "efe_md_9501010115_ant",
    "efe_md_9501010116_ant",
    "efe_md_9501010117_ant",
    "efe_md_9501010118_ant",
    "efe_md_9501010119_ant",
    "efe_md_9501010120_ant",
    "efe_md_9501010121_ant",
    "efe_md_95010102_ant",
    "efe_md_9501010201_ant",
    "efe_md_9501010202_ant",
    "efe_md_9501010203_ant",
    "efe_md_9501010204_ant",
    "efe_md_9501010205_ant",
    "efe_md_9501010206_ant",
    "efe_md_9501010207_ant",
    "efe_md_95010103_ant",
    "efe_md_95010104_ant",
    "efe_md_95010105_ant",
    "efe_md_950102_ant",
    "efe_md_95010201_ant",
    "efe_md_9501020101_ant",
    "efe_md_9501020102_ant",
    "efe_md_9501020103_ant",
    "efe_md_9501020104_ant",
    "efe_md_9501020105_ant",
    "efe_md_9501020106_ant",
    "efe_md_9501020107_ant",
    "efe_md_9501020108_ant",
    "efe_md_9501020109_ant",
    "efe_md_9501020110_ant",
    "efe_md_9501020111_ant",
    "efe_md_9501020112_ant",
    "efe_md_9501020113_ant",
    "efe_md_9501020114_ant",
    "efe_md_9501020115_ant",
    "efe_md_9501020116_ant",
    "efe_md_9501020117_ant",
    "efe_md_9501020118_ant",
    "efe_md_9501020119_ant",
    "efe_md_9501020120_ant",
    "efe_md_9501020121_ant",
    "efe_md_9501020122_ant",
    "efe_md_9501020123_ant",
    "efe_md_9501020124_ant",
    "efe_md_9501020125_ant",
    "efe_md_9501020126_ant",
    "efe_md_9501020127_ant",
    "efe_md_9501020128_ant",
    "efe_md_9501020129_ant",
    "efe_md_9501020130_ant",
    "efe_md_9501020131_ant",
    "efe_md_9501020132_ant",
    "efe_md_9501020133_ant",
    "efe_md_9501020134_ant",
    "efe_md_9501020135_ant",
    "efe_md_9501020136_ant",
    "efe_md_9501020137_ant",
    "efe_md_9501020138_ant",
    "efe_md_9501020139_ant",
    "efe_md_9501020140_ant",
    "efe_md_9501020141_ant",
    "efe_md_9501020142_ant",
    "efe_md_9501020143_ant",
    "efe_md_9501020144_ant",
    "efe_md_9501020145_ant",
    "efe_md_9501020146_ant",
    "efe_md_9501020147_ant",
    "efe_md_9501020148_ant",
    "efe_md_9501020149_ant",
    "efe_md_9501020150_ant",
    "efe_md_9501020151_ant",
    "efe_md_9501020152_ant",
    "efe_md_9501020153_ant",
    "efe_md_9501020154_ant",
    "efe_md_9501020155_ant",
    "efe_md_9501020156_ant",
    "efe_md_95010202_ant",
    "efe_md_95010203_ant",
    "efe_md_9501020301_ant",
    "efe_md_9501020302_ant",
    "efe_md_9501020303_ant",
    "efe_md_95010204_ant",
    "efe_md_95010205_ant",
    "efe_md_950103_ant",
    "efe_md_950104_ant",
    "efe_md_95010401_ant",
    "efe_md_950105_ant",
    "efe_md_95010501_ant",
    "efe_md_95010502_ant",
    "efe_md_95010503_ant",
    "efe_md_950106_ant",
    "efe_md_950107_ant",
    "efe_md_95010701_ant",
    "efe_md_95010702_ant",
    "efe_md_95010703_ant",
    "efe_md_950108_ant",
    "efe_md_95010801_ant",
    "efe_md_95010802_ant",
    "efe_md_95010803_ant",
    "efe_md_95010804_ant",
    "efe_md_95010805_ant",
    "efe_md_95010806_ant",
    "efe_md_95010807_ant",
    "efe_md_95010808_ant",
    "efe_md_95010809_ant",
    "efe_md_95010810_ant",
    "efe_md_95010811_ant",
    "efe_md_95010812_ant",
    "efe_md_95010813_ant",
  ]

  const actividadesDeOperacionAntRefs = {}

  actividadesDeOperacionAntKeys.forEach(key => {
    actividadesDeOperacionAntRefs[key] = ref(reportStore.getReportData("actividadesdeoperacionifluc_ant", true)?.[key] || "0")
  })

  return actividadesDeOperacionAntRefs
}

export const initializeConciliacionGananciaNeta = () => {
  const reportStore = useReportStore()

  const conciliacionGananciaNetaKeys = [
    "efe_md_97",
    "efe_md_9701",
    "efe_md_9702",
    "efe_md_9703",
    "efe_md_9704",
    "efe_md_9705",
    "efe_md_9706",
    "efe_md_9707",
    "efe_md_9708",
    "efe_md_9709",
    "efe_md_9710",
    "efe_md_9711",
    "efe_md_98",
    "efe_md_9801",
    "efe_md_980104",
    "efe_md_980105",
    "efe_md_980106",
    "efe_md_9802",
    "efe_md_9803",
    "efe_md_9804",
    "efe_md_980402",
    "efe_md_980403",
    "efe_md_980404",
    "efe_md_9805",
    "efe_md_9806",
    "efe_md_9807",
    "efe_md_9808",
    "efe_md_9809",
    "efe_md_9810",
  ]

  const conciliacionGananciaNetaRefs = {}

  conciliacionGananciaNetaKeys.forEach(key => {
    conciliacionGananciaNetaRefs[key] = ref(reportStore.getReportData("conciliacionganancianetaifluc")?.[key] || "0")
  })

  return conciliacionGananciaNetaRefs
}

export const initializeConciliacionGananciaNetaAnt = () => {
  const reportStore = useReportStore()

  const conciliacionGananciaNetaAntKeys = [
    "efe_md_97_ant",
    "efe_md_9701_ant",
    "efe_md_970101_ant",
    "efe_md_970102_ant",
    "efe_md_970103_ant",
    "efe_md_9702_ant",
    "efe_md_970201_ant",
    "efe_md_970202_ant",
    "efe_md_970203_ant",
    "efe_md_970204_ant",
    "efe_md_970205_ant",
    "efe_md_970206_ant",
    "efe_md_970207_ant",
    "efe_md_9703_ant",
    "efe_md_9704_ant",
    "efe_md_9705_ant",
    "efe_md_9706_ant",
    "efe_md_9707_ant",
    "efe_md_9708_ant",
    "efe_md_970801_ant",
    "efe_md_970802_ant",
    "efe_md_9709_ant",
    "efe_md_9710_ant",
    "efe_md_9711_ant",
    "efe_md_971101_ant",
    "efe_md_971102_ant",
    "efe_md_971103_ant",
    "efe_md_971104_ant",
    "efe_md_971105_ant",
    "efe_md_971106_ant",
    "efe_md_971107_ant",
    "efe_md_971108_ant",
    "efe_md_971109_ant",
    "efe_md_971110_ant",
    "efe_md_971111_ant",
    "efe_md_971112_ant",
    "efe_md_971113_ant",
    "efe_md_971114_ant",
    "efe_md_971115_ant",
    "efe_md_971116_ant",
    "efe_md_971117_ant",
    "efe_md_971118_ant",
    "efe_md_971119_ant",
    "efe_md_971120_ant",
    "efe_md_971121_ant",
    "efe_md_971122_ant",
    "efe_md_971123_ant",
    "efe_md_971124_ant",
    "efe_md_98_ant",
    "efe_md_9801_ant",
    "efe_md_980101_ant",
    "efe_md_980102_ant",
    "efe_md_980103_ant",
    "efe_md_980104_ant",
    "efe_md_980105_ant",
    "efe_md_980106_ant",
    "efe_md_9802_ant",
    "efe_md_980201_ant",
    "efe_md_9803_ant",
    "efe_md_980301_ant",
    "efe_md_9804_ant",
    "efe_md_980401_ant",
    "efe_md_980402_ant",
    "efe_md_980403_ant",
    "efe_md_980404_ant",
    "efe_md_9805_ant",
    "efe_md_980501_ant",
    "efe_md_980502_ant",
    "efe_md_980503_ant",
    "efe_md_980504_ant",
    "efe_md_980505_ant",
    "efe_md_980506_ant",
    "efe_md_980507_ant",
    "efe_md_9806_ant",
    "efe_md_980601_ant",
    "efe_md_9807_ant",
    "efe_md_9808_ant",
    "efe_md_980801_ant",
    "efe_md_9809_ant",
    "efe_md_9810_ant",
    "efe_md_981001_ant",
    "efe_md_981002_ant",
    "efe_md_981003_ant",
    "efe_md_981004_ant",
    "efe_md_981005_ant",
    "efe_md_981006_ant",
    "efe_md_981007_ant",
    "efe_md_981008_ant",
    "efe_md_981009_ant",
    "efe_md_981010_ant",
    "efe_md_981011_ant",
    "efe_md_981012_ant",
    "efe_md_981013_ant",
    "efe_md_981014_ant",
  ]

  const conciliacionGananciaNetaAntRefs = {}

  conciliacionGananciaNetaAntKeys.forEach(key => {
    conciliacionGananciaNetaAntRefs[key] = ref(reportStore.getReportData("conciliacionganancianetaifluc_ant", true)?.[key] || "0")
  })

  return conciliacionGananciaNetaAntRefs
}

export const initializeEcpData = () => {
  const reportStore = useReportStore()

  const ecpKeys = [
    // ECP_99
    "ecp_99_301", "ecp_99_302", "ecp_99_303", "ecp_99_30401", "ecp_99_30402", "ecp_99_30501",
    "ecp_99_30502", "ecp_99_30503", "ecp_99_30504", "ecp_99_30601", "ecp_99_30602", "ecp_99_30603",
    "ecp_99_30604", "ecp_99_30605", "ecp_99_30606", "ecp_99_30607", "ecp_99_30701", "ecp_99_30702",
    "ecp_99_Total",
    // ECP_9901
    "ecp_9901_301", "ecp_9901_302", "ecp_9901_303", "ecp_9901_30401", "ecp_9901_30402", "ecp_9901_30501",
    "ecp_9901_30502", "ecp_9901_30503", "ecp_9901_30504", "ecp_9901_30601", "ecp_9901_30602", "ecp_9901_30603",
    "ecp_9901_30604", "ecp_9901_30605", "ecp_9901_30606", "ecp_9901_30607", "ecp_9901_30701", "ecp_9901_30702",
    "ecp_9901_Total",
    // ECP_990101
    "ecp_990101_301", "ecp_990101_302", "ecp_990101_303", "ecp_990101_30401", "ecp_990101_30402", "ecp_990101_30501",
    "ecp_990101_30502", "ecp_990101_30503", "ecp_990101_30504", "ecp_990101_30601", "ecp_990101_30602", "ecp_990101_30603",
    "ecp_990101_30604", "ecp_990101_30605", "ecp_990101_30606", "ecp_990101_30607", "ecp_990101_30701", "ecp_990101_30702",
    "ecp_990101_Total",
    // ECP_990102
    "ecp_990102_301", "ecp_990102_302", "ecp_990102_303", "ecp_990102_30401", "ecp_990102_30402", "ecp_990102_30501",
    "ecp_990102_30502", "ecp_990102_30503", "ecp_990102_30504", "ecp_990102_30601", "ecp_990102_30602", "ecp_990102_30603",
    "ecp_990102_30604", "ecp_990102_30605", "ecp_990102_30606", "ecp_990102_30607", "ecp_990102_30701", "ecp_990102_30702",
    "ecp_990102_Total",
    // ECP_990103
    "ecp_990103_301", "ecp_990103_302", "ecp_990103_303", "ecp_990103_30401", "ecp_990103_30402", "ecp_990103_30501",
    "ecp_990103_30502", "ecp_990103_30503", "ecp_990103_30504", "ecp_990103_30601", "ecp_990103_30602", "ecp_990103_30603",
    "ecp_990103_30604", "ecp_990103_30605", "ecp_990103_30606", "ecp_990103_30607", "ecp_990103_30701", "ecp_990103_30702",
    "ecp_990103_Total",
    // ECP_990201
    "ecp_9902_301", "ecp_9902_302", "ecp_9902_303", "ecp_9902_30401", "ecp_9902_30402", "ecp_9902_30501",
    "ecp_9902_30502", "ecp_9902_30503", "ecp_9902_30504", "ecp_9902_30601", "ecp_9902_30602", "ecp_9902_30603",
    "ecp_9902_30604", "ecp_9902_30605", "ecp_9902_30606", "ecp_9902_30607", "ecp_9902_30701", "ecp_9902_30702",
    "ecp_9902_Total",
    // ECP_990201
    "ecp_990201_301", "ecp_990201_302", "ecp_990201_303", "ecp_990201_30401", "ecp_990201_30402", "ecp_990201_30501",
    "ecp_990201_30502", "ecp_990201_30503", "ecp_990201_30504", "ecp_990201_30601", "ecp_990201_30602", "ecp_990201_30603",
    "ecp_990201_30604", "ecp_990201_30605", "ecp_990201_30606", "ecp_990201_30607", "ecp_990201_30701", "ecp_990201_30702",
    "ecp_990201_Total",
    // ECP_990202
    "ecp_990202_301", "ecp_990202_302", "ecp_990202_303", "ecp_990202_30401", "ecp_990202_30402", "ecp_990202_30501",
    "ecp_990202_30502", "ecp_990202_30503", "ecp_990202_30504", "ecp_990202_30601", "ecp_990202_30602", "ecp_990202_30603",
    "ecp_990202_30604", "ecp_990202_30605", "ecp_990202_30606", "ecp_990202_30607", "ecp_990202_30701", "ecp_990202_30702",
    "ecp_990202_Total",
    // ECP_990203
    "ecp_990203_301", "ecp_990203_302", "ecp_990203_303", "ecp_990203_30401", "ecp_990203_30402", "ecp_990203_30501",
    "ecp_990203_30502", "ecp_990203_30503", "ecp_990203_30504", "ecp_990203_30601", "ecp_990203_30602", "ecp_990203_30603",
    "ecp_990203_30604", "ecp_990203_30605", "ecp_990203_30606", "ecp_990203_30607", "ecp_990203_30701", "ecp_990203_30702",
    "ecp_990203_Total",
    // ECP_990204
    "ecp_990204_301", "ecp_990204_302", "ecp_990204_303", "ecp_990204_30401", "ecp_990204_30402", "ecp_990204_30501",
    "ecp_990204_30502", "ecp_990204_30503", "ecp_990204_30504", "ecp_990204_30601", "ecp_990204_30602", "ecp_990204_30603",
    "ecp_990204_30604", "ecp_990204_30605", "ecp_990204_30606", "ecp_990204_30607", "ecp_990204_30701", "ecp_990204_30702",
    "ecp_990204_Total",
    // ECP_990205
    "ecp_990205_301", "ecp_990205_302", "ecp_990205_303", "ecp_990205_30401", "ecp_990205_30402", "ecp_990205_30501",
    "ecp_990205_30502", "ecp_990205_30503", "ecp_990205_30504", "ecp_990205_30601", "ecp_990205_30602", "ecp_990205_30603",
    "ecp_990205_30604", "ecp_990205_30605", "ecp_990205_30606", "ecp_990205_30607", "ecp_990205_30701", "ecp_990205_30702",
    "ecp_990205_Total",
    // ECP_990206
    "ecp_990206_301", "ecp_990206_302", "ecp_990206_303", "ecp_990206_30401", "ecp_990206_30402", "ecp_990206_30501",
    "ecp_990206_30502", "ecp_990206_30503", "ecp_990206_30504", "ecp_990206_30601", "ecp_990206_30602", "ecp_990206_30603",
    "ecp_990206_30604", "ecp_990206_30605", "ecp_990206_30606", "ecp_990206_30607", "ecp_990206_30701", "ecp_990206_30702",
    "ecp_990206_Total",
    // ECP_990207
    "ecp_990207_301", "ecp_990207_302", "ecp_990207_303", "ecp_990207_30401", "ecp_990207_30402", "ecp_990207_30501",
    "ecp_990207_30502", "ecp_990207_30503", "ecp_990207_30504", "ecp_990207_30601", "ecp_990207_30602", "ecp_990207_30603",
    "ecp_990207_30604", "ecp_990207_30605", "ecp_990207_30606", "ecp_990207_30607", "ecp_990207_30701", "ecp_990207_30702",
    "ecp_990207_Total",
    // ECP_990208
    "ecp_990208_301", "ecp_990208_302", "ecp_990208_303", "ecp_990208_30401", "ecp_990208_30402", "ecp_990208_30501",
    "ecp_990208_30502", "ecp_990208_30503", "ecp_990208_30504", "ecp_990208_30601", "ecp_990208_30602", "ecp_990208_30603",
    "ecp_990208_30604", "ecp_990208_30605", "ecp_990208_30606", "ecp_990208_30607", "ecp_990208_30701", "ecp_990208_30702",
    "ecp_990208_Total",
    // ECP_990209
    "ecp_990209_301", "ecp_990209_302", "ecp_990209_303", "ecp_990209_30401", "ecp_990209_30402", "ecp_990209_30501",
    "ecp_990209_30502", "ecp_990209_30503", "ecp_990209_30504", "ecp_990209_30601", "ecp_990209_30602", "ecp_990209_30603",
    "ecp_990209_30604", "ecp_990209_30605", "ecp_990209_30606", "ecp_990209_30607", "ecp_990209_30701", "ecp_990209_30702",
    "ecp_990209_Total",
    // ECP_99020901
    "ecp_99020901_301", "ecp_99020901_302", "ecp_99020901_303", "ecp_99020901_30401", "ecp_99020901_30402", "ecp_99020901_30501",
    "ecp_99020901_30502", "ecp_99020901_30503", "ecp_99020901_30504", "ecp_99020901_30601", "ecp_99020901_30602", "ecp_99020901_30603",
    "ecp_99020901_30604", "ecp_99020901_30605", "ecp_99020901_30606", "ecp_99020901_30607", "ecp_99020901_30701", "ecp_99020901_30702",
    "ecp_99020901_Total",
    // ECP_99020902
    "ecp_99020902_301", "ecp_99020902_302", "ecp_99020902_303", "ecp_99020902_30401", "ecp_99020902_30402", "ecp_99020902_30501",
    "ecp_99020902_30502", "ecp_99020902_30503", "ecp_99020902_30504", "ecp_99020902_30601", "ecp_99020902_30602", "ecp_99020902_30603",
    "ecp_99020902_30604", "ecp_99020902_30605", "ecp_99020902_30606", "ecp_99020902_30607", "ecp_99020902_30701", "ecp_99020902_30702",
    "ecp_99020902_Total",
    // ECP_990210
    "ecp_990210_301", "ecp_990210_302", "ecp_990210_303", "ecp_990210_30401", "ecp_990210_30402", "ecp_990210_30501",
    "ecp_990210_30502", "ecp_990210_30503", "ecp_990210_30504", "ecp_990210_30601", "ecp_990210_30602", "ecp_990210_30603",
    "ecp_990210_30604", "ecp_990210_30605", "ecp_990210_30606", "ecp_990210_30607", "ecp_990210_30701", "ecp_990210_30702",
    "ecp_990210_Total",
    // ECP_Totales
    "ecp_9901_Total", "ecp_990101_Total", "ecp_990102_Total", "ecp_990103_Total", "ecp_9902_Total", "ecp_990201_Total",
    "ecp_990202_Total", "ecp_990203_Total", "ecp_990204_Total", "ecp_990205_Total", "ecp_990206_Total", "ecp_990207_Total",
    "ecp_990208_Total", "ecp_990209_Total", "ecp_990210_Total", "ecp_99_Total"
  ]

  const ecpRefs = {}

  ecpKeys.forEach(key => {
    ecpRefs[key] = ref(reportStore.getReportData("ecpifluc")?.[key] || "0")
  })

  return ecpRefs
}

export const initializeGastosAdministrativos = () => {
  const reportStore = useReportStore()

  const gastosAdministrativosKeys = [
    "eri_50202", "eri_5020201", "eri_5020202", "eri_5020203", "eri_5020204", "eri_5020205", "eri_5020206", "eri_5020207",
    "eri_5020208", "eri_5020209", "eri_5020210", "eri_5020211", "eri_5020212", "eri_5020213", "eri_5020214", "eri_5020215",
    "eri_5020216", "eri_5020217", "eri_5020218", "eri_5020219", "eri_5020220", "eri_5020221", "eri_502022101", "eri_502022102",
    "eri_502022103", "eri_5020222", "eri_502022201", "eri_502022202", "eri_5020223", "eri_502022301", "eri_502022302",
    "eri_502022303", "eri_502022304", "eri_502022305", "eri_502022306", "eri_502022307", "eri_5020224", "eri_502022401",
    "eri_502022402", "eri_502022403", "eri_5020225", "eri_5020226", "eri_5020227", "eri_5020228", "eri_5020229",
  ]

  const gastosAdministrativosRefs = {}

  gastosAdministrativosKeys.forEach(key => {
    gastosAdministrativosRefs[key] = ref(reportStore.getReportData("gastosadministrativosifluc")?.[key] || "0")
  })

  return gastosAdministrativosRefs
}

export const initializeGastosAdministrativosAnt = () => {
  const reportStore = useReportStore()

  const gastosAdministrativosAntKeys = [
    "eri_50202_ant", "eri_5020201_ant", "eri_5020202_ant", "eri_5020203_ant", "eri_5020204_ant", "eri_5020205_ant",
    "eri_5020206_ant", "eri_5020207_ant", "eri_5020208_ant", "eri_5020209_ant", "eri_5020210_ant", "eri_5020211_ant",
    "eri_5020212_ant", "eri_5020213_ant", "eri_5020214_ant", "eri_5020215_ant", "eri_5020216_ant", "eri_5020217_ant",
    "eri_5020218_ant", "eri_5020219_ant", "eri_5020220_ant", "eri_5020221_ant", "eri_502022101_ant", "eri_502022102_ant",
    "eri_502022103_ant", "eri_5020222_ant", "eri_502022201_ant", "eri_502022202_ant", "eri_5020223_ant",
    "eri_502022301_ant", "eri_502022302_ant", "eri_502022303_ant", "eri_502022304_ant", "eri_502022305_ant",
    "eri_502022306_ant", "eri_502022307_ant", "eri_5020224_ant", "eri_502022401_ant", "eri_502022402_ant",
    "eri_502022403_ant", "eri_5020225_ant", "eri_5020226_ant", "eri_5020227_ant", "eri_5020228_ant", "eri_5020229_ant",
  ]

  const gastosAdministrativosAntRefs = {}

  gastosAdministrativosAntKeys.forEach(key => {
    gastosAdministrativosAntRefs[key] = ref(reportStore.getReportData("gastosadministrativosifluc_ant", true)?.[key] || "0")
  })

  return gastosAdministrativosAntRefs
}

export const initializeGastosDeVentas = () => {
  const reportStore = useReportStore()

  const gastosDeVentasKeys = [
    "eri_5020101", "eri_5020102", "eri_5020103", "eri_5020104", "eri_5020105", "eri_5020106", "eri_5020107",
    "eri_5020108", "eri_5020109", "eri_5020110", "eri_5020111", "eri_5020112", "eri_5020113", "eri_5020114",
    "eri_5020115", "eri_5020116", "eri_5020117", "eri_5020118", "eri_5020119", "eri_5020120", "eri_502012001",
    "eri_502012002", "eri_502012003", "eri_5020121", "eri_502012101", "eri_502012102", "eri_5020122",
    "eri_502012201", "eri_502012202", "eri_502012203", "eri_502012204", "eri_502012205", "eri_502012206",
    "eri_502012207", "eri_5020123", "eri_502012301", "eri_502012302", "eri_502012303", "eri_5020124", "eri_5020125",
    "eri_5020126", "eri_5020127", "eri_5020128",
  ]

  const gastosDeVentasRefs = {}

  gastosDeVentasKeys.forEach(key => {
    gastosDeVentasRefs[key] = ref(reportStore.getReportData("gastosdeventasifluc")?.[key] || "0")
  })

  return gastosDeVentasRefs
}

export const initializeGastosDeVentasAnt = () => {
  const reportStore = useReportStore()

  const gastosDeVentasAntKeys = [
    "eri_5020101_ant", "eri_5020102_ant", "eri_5020103_ant", "eri_5020104_ant", "eri_5020105_ant",
    "eri_5020106_ant", "eri_5020107_ant", "eri_5020108_ant", "eri_5020109_ant", "eri_5020110_ant",
    "eri_5020111_ant", "eri_5020112_ant", "eri_5020113_ant", "eri_5020114_ant", "eri_5020115_ant",
    "eri_5020116_ant", "eri_5020117_ant", "eri_5020118_ant", "eri_5020119_ant", "eri_5020120_ant",
    "eri_502012001_ant", "eri_502012002_ant", "eri_502012003_ant", "eri_5020121_ant",
    "eri_502012101_ant", "eri_502012102_ant", "eri_5020122_ant", "eri_502012201_ant",
    "eri_502012202_ant", "eri_502012203_ant", "eri_502012204_ant", "eri_502012205_ant",
    "eri_502012206_ant", "eri_502012207_ant", "eri_5020123_ant", "eri_502012301_ant",
    "eri_502012302_ant", "eri_502012303_ant", "eri_5020124_ant", "eri_5020125_ant",
    "eri_5020126_ant", "eri_5020127_ant", "eri_5020128_ant", "eri_50201", "eri_50201_ant",
  ]

  const gastosDeVentasAntRefs = {}

  gastosDeVentasAntKeys.forEach(key => {
    gastosDeVentasAntRefs[key] = ref(reportStore.getReportData("gastosdeventasifluc_ant", true)?.[key] || "0")
  })

  return gastosDeVentasAntRefs
}

export const initializeGastosFinancieros = () => {
  const reportStore = useReportStore()

  const gastosFinancierosKeys = [
    "eri_50203", "eri_5020301", "eri_502030101", "eri_502030102", "eri_502030103",
    "eri_502030104", "eri_5020302", "eri_502030201", "eri_50203020101",
    "eri_50203020103", "eri_50203020104", "eri_50203020105", "eri_50203020106",
    "eri_5020303", "eri_502030301", "eri_502030302", "eri_502030303", "eri_502030304",
    "eri_502030305", "eri_502030306", "eri_502030307", "eri_502030308", "eri_5020304",
    "eri_502030401", "eri_502030402", "eri_502030403", "eri_502030404", "eri_5020305",
    "eri_502030501", "eri_502030502", "eri_502030503", "eri_502030504", "eri_5020306",
    "eri_5020307", "eri_5020308", "eri_5020309", "eri_5020310", "eri_5020311", "eri_5020312",
  ]

  const gastosFinancierosRefs = {}

  gastosFinancierosKeys.forEach(key => {
    gastosFinancierosRefs[key] = ref(reportStore.getReportData("gastosfinancierosifluc")?.[key] || "0")
  })

  return gastosFinancierosRefs
}

export const initializeGastosFinancierosAnt = () => {
  const reportStore = useReportStore()

  const gastosFinancierosAntKeys = [
    "eri_50203_ant", "eri_5020301_ant", "eri_502030101_ant", "eri_502030102_ant", "eri_502030103_ant",
    "eri_502030104_ant", "eri_5020302_ant", "eri_502030201_ant", "eri_50203020101_ant",
    "eri_50203020103_ant", "eri_50203020104_ant", "eri_50203020105_ant", "eri_50203020106_ant",
    "eri_5020303_ant", "eri_502030301_ant", "eri_502030302_ant", "eri_502030303_ant", "eri_502030304_ant",
    "eri_502030305_ant", "eri_502030306_ant", "eri_502030307_ant", "eri_502030308_ant", "eri_5020304_ant",
    "eri_502030401_ant", "eri_502030402_ant", "eri_502030403_ant", "eri_502030404_ant", "eri_5020305_ant",
    "eri_502030501_ant", "eri_502030502_ant", "eri_502030503_ant", "eri_502030504_ant", "eri_5020306_ant",
    "eri_5020307_ant", "eri_5020308_ant", "eri_5020309_ant", "eri_5020310_ant", "eri_5020311_ant", "eri_5020312_ant",
  ]

  const gastosFinancierosAntRefs = {}

  gastosFinancierosAntKeys.forEach(key => {
    gastosFinancierosAntRefs[key] = ref(reportStore.getReportData("gastosfinancierosifluc_ant", true)?.[key] || "0")
  })

  return gastosFinancierosAntRefs
}

export const initializeIngresos = () => {
  const reportStore = useReportStore()

  const ingresosKeys = [
    "eri_401", "eri_40101", "eri_40102", "eri_4010201", "eri_4010202", "eri_4010203", "eri_4010204", "eri_40103",
    "eri_40104", "eri_40105", "eri_40106", "eri_4010601", "eri_4010602", "eri_4010603", "eri_40107", "eri_40108",
    "eri_40109", "eri_4010901", "eri_401090101", "eri_401090103", "eri_401090104", "eri_401090105", "eri_401090106",
    "eri_4010902", "eri_401090201", "eri_401090202", "eri_401090203", "eri_401090204", "eri_401090205",
    "eri_401090206", "eri_401090207", "eri_401090208", "eri_4010903", "eri_401090301", "eri_401090302",
    "eri_401090303", "eri_401090304", "eri_40110", "eri_4011001", "eri_4011002", "eri_4011003", "eri_4011004",
    "eri_4011005", "eri_4011006", "eri_40112", "eri_40113", "eri_40114", "eri_40115", "eri_40116", "eri_403",
    "eri_40301", "eri_40302", "eri_40303",
  ]

  const ingresosRefs = {}

  ingresosKeys.forEach(key => {
    ingresosRefs[key] = ref(reportStore.getReportData("ingresosifluc")?.[key] || "0")
  })

  return ingresosRefs
}

export const initializeIngresosAnt = () => {
  const reportStore = useReportStore()

  const ingresosAntKeys = [
    "eri_401_ant", "eri_40101_ant", "eri_40102_ant", "eri_4010201_ant", "eri_4010202_ant", "eri_4010203_ant",
    "eri_4010204_ant", "eri_40103_ant", "eri_40104_ant", "eri_40105_ant", "eri_4010601_ant", "eri_4010602_ant",
    "eri_4010603_ant", "eri_40106_ant", "eri_40107_ant", "eri_40108_ant", "eri_4010901_ant", "eri_401090101_ant",
    "eri_401090103_ant", "eri_401090104_ant", "eri_401090105_ant", "eri_401090106_ant", "eri_4010902_ant",
    "eri_401090201_ant", "eri_401090202_ant", "eri_401090203_ant", "eri_401090204_ant", "eri_401090205_ant",
    "eri_401090206_ant", "eri_401090207_ant", "eri_401090208_ant", "eri_4010903_ant", "eri_401090301_ant",
    "eri_401090302_ant", "eri_401090303_ant", "eri_401090304_ant", "eri_40109_ant", "eri_40110_ant",
    "eri_4011001_ant", "eri_4011002_ant", "eri_4011003_ant", "eri_4011004_ant", "eri_4011005_ant",
    "eri_4011006_ant", "eri_40112_ant", "eri_40113_ant", "eri_40114_ant", "eri_40115_ant", "eri_40116_ant",
    "eri_403_ant", "eri_40301_ant", "eri_40302_ant", "eri_40303_ant",
  ]

  const ingresosAntRefs = {}

  ingresosAntKeys.forEach(key => {
    ingresosAntRefs[key] = ref(reportStore.getReportData("ingresosifluc_ant", true)?.[key] || "0")
  })

  return ingresosAntRefs
}

export const initializeMovActivosBiologicos = () => {
  const reportStore = useReportStore()

  const movActivosBiologicosKeys = [
    "mov_saldoinicial_aec", "mov_compras_aec", "mov_bajasoventas_aec", "mov_incrementodisminuciondevalor_aec", "mov_reclasificacion_aec", "mov_saldofinal_aec",
    "mov_saldoinicial_aep", "mov_compras_aep", "mov_bajasoventas_aep", "mov_incrementodisminuciondevalor_aep", "mov_reclasificacion_aep", "mov_saldofinal_aep",
    "mov_saldoinicial_pec", "mov_compras_pec", "mov_bajasoventas_pec", "mov_incrementodisminuciondevalor_pec", "mov_reclasificacion_pec", "mov_saldofinal_pec",
    "mov_saldoinicial_pep", "mov_compras_pep", "mov_bajasoventas_pep", "mov_incrementodisminuciondevalor_pep", "mov_reclasificacion_pep", "mov_saldofinal_pep",
    "mov_saldoinicial_otros", "mov_compras_otros", "mov_bajasoventas_otros", "mov_incrementodisminuciondevalor_otros", "mov_reclasificacion_otros", "mov_saldofinal_otros",
    "mov_saldoinicial_total", "mov_compras_total", "mov_bajasoventas_total", "mov_incrementodisminuciondevalor_total", "mov_reclasificacion_total", "mov_saldofinal_total",
    "mov_animalesenccrecimiento_total", "mov_animalesenproduccion_total", "mov_plantasencrecimiento_total", "mov_plantasenproduccion_total", "mov_otros_total", "mov_total_total",
    "mov_saldofinalsegunmovimiento", "mov_diferenciaporcuadrar",
  ]

  const movActivosBiologicosRefs = {}

  movActivosBiologicosKeys.forEach(key => {
    movActivosBiologicosRefs[key] = ref(reportStore.getReportData("movactivosbiologicos")?.[key] || "0")
  })

  return movActivosBiologicosRefs
}

export const initializeMovActivosBiologicosAnt = () => {
  const reportStore = useReportStore()

  const movActivosBiologicosAntKeys = [
    "mov_saldoinicial_aec_ant", "mov_compras_aec_ant", "mov_bajasoventas_aec_ant", "mov_incrementodisminuciondevalor_aec_ant", "mov_reclasificacion_aec_ant", "mov_saldofinal_aec_ant",
    "mov_saldoinicial_aep_ant", "mov_compras_aep_ant", "mov_bajasoventas_aep_ant", "mov_incrementodisminuciondevalor_aep_ant", "mov_reclasificacion_aep_ant", "mov_saldofinal_aep_ant",
    "mov_saldoinicial_pec_ant", "mov_compras_pec_ant", "mov_bajasoventas_pec_ant", "mov_incrementodisminuciondevalor_pec_ant", "mov_reclasificacion_pec_ant", "mov_saldofinal_pec_ant",
    "mov_saldoinicial_pep_ant", "mov_compras_pep_ant", "mov_bajasoventas_pep_ant", "mov_incrementodisminuciondevalor_pep_ant", "mov_reclasificacion_pep_ant", "mov_saldofinal_pep_ant",
    "mov_saldoinicial_otros_ant", "mov_compras_otros_ant", "mov_bajasoventas_otros_ant", "mov_incrementodisminuciondevalor_otros_ant", "mov_reclasificacion_otros_ant", "mov_saldofinal_otros_ant",
    "mov_saldoinicial_total_ant", "mov_compras_total_ant", "mov_bajasoventas_total_ant", "mov_incrementodisminuciondevalor_total_ant", "mov_reclasificacion_total_ant", "mov_saldofinal_total_ant",
    "mov_animalesenccrecimiento_total_ant", "mov_animalesenproduccion_total_ant", "mov_plantasencrecimiento_total_ant", "mov_plantasenproduccion_total_ant", "mov_otros_total_ant", "mov_total_total_ant",
  ]

  const movActivosBiologicosAntRefs = {}

  movActivosBiologicosAntKeys.forEach(key => {
    movActivosBiologicosAntRefs[key] = ref(reportStore.getReportData("movactivosbiologicos_ant", true)?.[key] || "0")
  })

  return movActivosBiologicosAntRefs
}

export const initializeActivosFinancierosLargoPlazo = () => {
  const reportStore = useReportStore()

  const activosFinancierosLargoPlazoKeys = [
    "mov_saldoinicial",
    "mov_nuevasinversiones",
    "mov_interesactualizacionantiguasinv",
    "mov_provisionpordeterioro",
    "mov_ajustes",
    "mov_saldofinalsegunmovimiento",
    "mov_diferenciaporcuadrar",
  ]

  const activosFinancierosLargoPlazoRefs = {}

  activosFinancierosLargoPlazoKeys.forEach(key => {
    activosFinancierosLargoPlazoRefs[key] = ref(reportStore.getReportData("activosfinancieroslargoplazo")?.[key] || "0")
  })

  return activosFinancierosLargoPlazoRefs
}

export const initializeActivosFinancierosLargoPlazoAnt = () => {
  const reportStore = useReportStore()

  const activosFinancierosLargoPlazoAntKeys = [
    "mov_saldoinicial_ant",
    "mov_nuevasinversiones_ant",
    "mov_interesactualizacionantiguasinv_ant",
    "mov_provisionpordeterioro_ant",
    "mov_ajustes_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const activosFinancierosLargoPlazoAntRefs = {}

  activosFinancierosLargoPlazoAntKeys.forEach(key => {
    activosFinancierosLargoPlazoAntRefs[key] = ref(reportStore.getReportData("activosfinancieroslargoplazo_ant", true)?.[key] || "0")
  })

  return activosFinancierosLargoPlazoAntRefs
}

export const initializeDeshaucio = () => {
  const reportStore = useReportStore()

  const deshaucioKeys = [
    "mov_saldoinicial",
    "mov_costosporservicios",
    "mov_costofinanciero",
    "mov_gananciaoperdidaactuarial",
    "mov_otros",
    "mov_efectodeliquidaciones",
    "mov_beneficiospagados",
    "mov_saldofinalsegunmovimiento",
    "mov_diferenciaporcuadrar",
  ]

  const deshaucioRefs = {}

  deshaucioKeys.forEach(key => {
    deshaucioRefs[key] = ref(reportStore.getReportData("deshaucio")?.[key] || "0")
  })

  return deshaucioRefs
}

export const initializeDeshaucioAnt = () => {
  const reportStore = useReportStore()

  const deshaucioAntKeys = [
    "mov_saldoinicial_ant",
    "mov_costosporservicios_ant",
    "mov_costofinanciero_ant",
    "mov_gananciaoperdidaactuarial_ant",
    "mov_otros_ant",
    "mov_efectodeliquidaciones_ant",
    "mov_beneficiospagados_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const deshaucioAntRefs = {}

  deshaucioAntKeys.forEach(key => {
    deshaucioAntRefs[key] = ref(reportStore.getReportData("deshaucio_ant", true)?.[key] || "0")
  })

  return deshaucioAntRefs
}

export const initializeMovImpuestosDiferidos = () => {
  const reportStore = useReportStore()

  const movImpuestosDiferidosKeys = [
    "mov_apid_saldoinicial",
    "mov_apid_generacionenrevision",
    "mov_apid_afectacionaresultadosintegrales",
    "mov_apid_ajustesresultadosacumulados",
    "mov_apid_ajustesresultadospyg",
    "mov_apid_saldofinalsegunmovimiento",
    "mov_apid_diferenciaporcuadrar",
    "mov_ppid_saldoinicial",
    "mov_ppid_generacionenrevision",
    "mov_ppid_afectacionaresultadosintegrales",
    "mov_ppid_ajustesresultadosacumulados",
    "mov_ppid_ajustesresultadospyg",
    "mov_ppid_saldofinalsegunmovimiento",
    "mov_ppid_diferenciaporcuadrar",
  ]

  const movImpuestosDiferidosRefs = {}

  movImpuestosDiferidosKeys.forEach(key => {
    movImpuestosDiferidosRefs[key] = ref(reportStore.getReportData("movimpuestosdiferidos")?.[key] || "0")
  })

  return movImpuestosDiferidosRefs
}

export const initializeMovImpuestosDiferidosAnt = () => {
  const reportStore = useReportStore()

  const movImpuestosDiferidosAntKeys = [
    "mov_apid_saldoinicial_ant",
    "mov_apid_generacionenrevision_ant",
    "mov_apid_afectacionaresultadosintegrales_ant",
    "mov_apid_ajustesresultadosacumulados_ant",
    "mov_apid_ajustesresultadospyg_ant",
    "mov_apid_saldofinalsegunmovimiento_ant",
    "mov_apid_diferenciaporcuadrar_ant",
    "mov_ppid_saldoinicial_ant",
    "mov_ppid_generacionenrevision_ant",
    "mov_ppid_afectacionaresultadosintegrales_ant",
    "mov_ppid_ajustesresultadosacumulados_ant",
    "mov_ppid_ajustesresultadospyg_ant",
    "mov_ppid_saldofinalsegunmovimiento_ant",
    "mov_ppid_diferenciaporcuadrar_ant",
  ]

  const movImpuestosDiferidosAntRefs = {}

  movImpuestosDiferidosAntKeys.forEach(key => {
    movImpuestosDiferidosAntRefs[key] = ref(reportStore.getReportData("movimpuestosdiferidos_ant", true)?.[key] || "0")
  })

  return movImpuestosDiferidosAntRefs
}

export const initializeMovIntangibles = () => {
  const reportStore = useReportStore()

  const movIntangiblesKeys = [
    "mov_saldoinicialcosto",
    "mov_saldoinicialamortizacionacumulada",
    "mov_compras",
    "mov_bajasincluida",
    "mov_otros",
    "mov_gastosdeamortizacion",
    "mov_saldofinalsegunmovimiento",
    "mov_diferenciaporcuadrar",
  ]

  const movIntangiblesRefs = {}

  movIntangiblesKeys.forEach(key => {
    movIntangiblesRefs[key] = ref(reportStore.getReportData("movintangibles")?.[key] || "0")
  })

  return movIntangiblesRefs
}

export const initializeMovIntangiblesAnt = () => {
  const reportStore = useReportStore()

  const movIntangiblesAntKeys = [
    "mov_saldoinicialcosto_ant",
    "mov_saldoinicialamortizacionacumulada_ant",
    "mov_compras_ant",
    "mov_bajasincluida_ant",
    "mov_otros_ant",
    "mov_gastosdeamortizacion_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const movIntangiblesAntRefs = {}

  movIntangiblesAntKeys.forEach(key => {
    movIntangiblesAntRefs[key] = ref(reportStore.getReportData("movintangibles_ant", true)?.[key] || "0")
  })

  return movIntangiblesAntRefs
}

export const initializeMovJubilacionPatronal = () => {
  const reportStore = useReportStore()

  const movJubilacionPatronalKeys = [
    "mov_saldoinicial",
    "mov_costosporservicios",
    "mov_costofinanciero",
    "mov_gananciaoperdidaactuarial",
    "mov_otros",
    "mov_efectodeliquidaciones",
    "mov_beneficiospagados",
    "mov_saldofinalsegunmovimiento",
    "mov_diferenciaporcuadrar",
  ]

  const movJubilacionPatronalRefs = {}

  movJubilacionPatronalKeys.forEach(key => {
    movJubilacionPatronalRefs[key] = ref(reportStore.getReportData("movjubilacionpatronal")?.[key] || "0")
  })

  return movJubilacionPatronalRefs
}

export const initializeMovJubilacionPatronalAnt = () => {
  const reportStore = useReportStore()

  const movJubilacionPatronalAntKeys = [
    "mov_saldoinicial_ant",
    "mov_costosporservicios_ant",
    "mov_costofinanciero_ant",
    "mov_gananciaoperdidaactuarial_ant",
    "mov_otros_ant",
    "mov_efectodeliquidaciones_ant",
    "mov_beneficiospagados_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const movJubilacionPatronalAntRefs = {}

  movJubilacionPatronalAntKeys.forEach(key => {
    movJubilacionPatronalAntRefs[key] = ref(reportStore.getReportData("movjubilacionpatronal_ant", true)?.[key] || "0")
  })

  return movJubilacionPatronalAntRefs
}

export const initializeMovOtros = () => {
  const reportStore = useReportStore()

  const movOtrosKeys = [
    "mov_islr_pagos",
    "mov_pt_pagos",
    "mov_dividendos_dividendospagados",
  ]

  const movOtrosRefs = {}

  movOtrosKeys.forEach(key => {
    movOtrosRefs[key] = ref(reportStore.getReportData("otros")?.[key] || "0")
  })

  return movOtrosRefs
}

export const initializeMovOtrosAnt = () => {
  const reportStore = useReportStore()

  const movOtrosAntKeys = [
    "mov_islr_pagos_ant",
    "mov_pt_pagos_ant",
    "mov_dividendos_dividendospagados_ant",
  ]

  const movOtrosAntRefs = {}

  movOtrosAntKeys.forEach(key => {
    movOtrosAntRefs[key] = ref(reportStore.getReportData("otros_ant", true)?.[key] || "0")
  })

  return movOtrosAntRefs
}

export const initializeMovPerdidasAcumuladas = () => {
  const reportStore = useReportStore()

  const movPerdidasAcumuladasKeys = [
    "saldoinicial",
    "provisionesanio",
    "bajasoreversiones",
    "ajustes",
    "saldofinalsegunmovimiento",
    "diferenciaporcuadrar",
  ]


  const movPerdidasAcumuladasRefs = {}

  movPerdidasAcumuladasKeys.forEach(key => {
    movPerdidasAcumuladasRefs[key] = ref(reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro")?.[key] || "0")
  })

  return movPerdidasAcumuladasRefs
}

export const initializeMovPerdidasAcumuladasAnt = () => {
  const reportStore = useReportStore()

  const movPerdidasAcumuladasAntKeys = [
    "saldoinicial_ant",
    "provisionesanio_ant",
    "bajasoreversiones_ant",
    "ajustes_ant",
    "saldofinalsegunmovimiento_ant",
    "diferenciaporcuadrar_ant",
  ]

  const movPerdidasAcumuladasAntRefs = {}

  movPerdidasAcumuladasAntKeys.forEach(key => {
    movPerdidasAcumuladasAntRefs[key] = ref(reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro_ant", true)?.[key] || "0")
  })

  return movPerdidasAcumuladasAntRefs
}

export const initializeMovPerdidasAcumuladasValorNetoRealizacion = () => {
  const reportStore = useReportStore()

  const movPerdidasAcumuladasValorNetoRealizacionKeys = [
    "saldoinicial",
    "provisionesdelanio",
    "bajasoreversiones",
    "ajustes",
    "saldofinalsegunmovimiento",
    "diferenciaporcuadrar",
  ]

  const movPerdidasAcumuladasValorNetoRealizacionRefs = {}

  movPerdidasAcumuladasValorNetoRealizacionKeys.forEach(key => {
    movPerdidasAcumuladasValorNetoRealizacionRefs[key] = ref(reportStore.getReportData("movperdidasacumuladasvalornetorealizacion")?.[key] || "0")
  })

  return movPerdidasAcumuladasValorNetoRealizacionRefs
}

export const initializeMovPerdidasAcumuladasValorNetoRealizacionAnt = () => {
  const reportStore = useReportStore()

  const movPerdidasAcumuladasValorNetoRealizacionAntKeys = [
    "saldoinicial_ant",
    "provisionesdelanio_ant",
    "bajasoreversiones_ant",
    "ajustes_ant",
    "saldofinalsegunmovimiento_ant",
    "diferenciaporcuadrar_ant",
  ]

  const movPerdidasAcumuladasValorNetoRealizacionAntRefs = {}

  movPerdidasAcumuladasValorNetoRealizacionAntKeys.forEach(key => {
    movPerdidasAcumuladasValorNetoRealizacionAntRefs[key] = ref(reportStore.getReportData("movperdidasacumuladasvalornetorealizacion_ant", true)?.[key] || "0")
  })

  return movPerdidasAcumuladasValorNetoRealizacionAntRefs
}

export const initializeMovPropiedadesDeInversion = () => {
  const reportStore = useReportStore()

  const propiedadesDeInversionKeys = {
    terrenos: [
      "mov_saldoinicial_terrenos",
      "mov_compras_terrenos",
      "mov_bajasincluida_terrenos",
      "mov_valorrazonable_terrenos",
      "mov_transferencia_terrenos",
      "mov_otros_terrenos",
      "mov_gastosdedepreciacion_terrenos",
      "mov_saldo_terrenos",
    ],
    edificios: [
      "mov_saldoinicial_edificios",
      "mov_compras_edificios",
      "mov_bajasincluida_edificios",
      "mov_valorrazonable_edificios",
      "mov_transferencia_edificios",
      "mov_otros_edificios",
      "mov_gastosdedepreciacion_edificios",
      "mov_saldo_edificios",
    ],
  }

  const propiedadesDeInversionRefs = {}

  Object.entries(propiedadesDeInversionKeys).forEach(([keyGroup, keys]) => {
    propiedadesDeInversionRefs[keyGroup] = {}
    keys.forEach(key => {
      propiedadesDeInversionRefs[keyGroup][key] = ref(reportStore.getReportData("movpropiedadesdeinversion")?.[key] || "0")
    })
  })

  return propiedadesDeInversionRefs
}

export const initializeMovPropiedadesDeInversionAnt = () => {
  const reportStore = useReportStore()

  const propiedadesDeInversionAntKeys = {
    terrenos: [
      "mov_saldoinicial_terrenos_ant",
      "mov_compras_terrenos_ant",
      "mov_bajasincluida_terrenos_ant",
      "mov_valorrazonable_terrenos_ant",
      "mov_transferencia_terrenos_ant",
      "mov_otros_terrenos_ant",
      "mov_gastosdedepreciacion_terrenos_ant",
      "mov_saldo_terrenos_ant",
    ],
    edificios: [
      "mov_saldoinicial_edificios_ant",
      "mov_compras_edificios_ant",
      "mov_bajasincluida_edificios_ant",
      "mov_valorrazonable_edificios_ant",
      "mov_transferencia_edificios_ant",
      "mov_otros_edificios_ant",
      "mov_gastosdedepreciacion_edificios_ant",
      "mov_saldo_edificios_ant",
    ],
  }

  const propiedadesDeInversionAntRefs = {}

  Object.entries(propiedadesDeInversionAntKeys).forEach(([keyGroup, keys]) => {
    propiedadesDeInversionAntRefs[keyGroup] = {}
    keys.forEach(key => {
      propiedadesDeInversionAntRefs[keyGroup][key] = ref(reportStore.getReportData("movpropiedadesdeinversion_ant", true)?.[key] || "0")
    })
  })

  return propiedadesDeInversionAntRefs
}

export const initializeMovPropiedadesPlantasEquipos = () => {
  const reportStore = useReportStore()

  const categorias = {
    terrenos: [
      "mov_terreno_si",
      "mov_terreno_sida",
      "mov_terreno_compras",
      "mov_terreno_bilddb",
      "mov_terreno_transf",
      "mov_terreno_od",
      "mov_terreno_gdd",
      "mov_terreno_total",
    ],
    edificios: [
      "mov_edificios_si",
      "mov_edificios_sida",
      "mov_edificios_compras",
      "mov_edificios_bilddb",
      "mov_edificios_transf",
      "mov_edificios_od",
      "mov_edificios_gdd",
      "mov_edificios_total",
    ],
    construccionesencurso: [
      "mov_construccionesencurso_si",
      "mov_construccionesencurso_sida",
      "mov_construccionesencurso_compras",
      "mov_construccionesencurso_bilddb",
      "mov_construccionesencurso_transf",
      "mov_construccionesencurso_od",
      "mov_construccionesencurso_gdd",
      "mov_construccionesencurso_total",
    ],
    instalaciones: [
      "mov_instalaciones_si",
      "mov_instalaciones_sida",
      "mov_instalaciones_compras",
      "mov_instalaciones_bilddb",
      "mov_instalaciones_transf",
      "mov_instalaciones_od",
      "mov_instalaciones_gdd",
      "mov_instalaciones_total",
    ],
    mueblesyenseres: [
      "mov_mueblesyenseres_si",
      "mov_mueblesyenseres_sida",
      "mov_mueblesyenseres_compras",
      "mov_mueblesyenseres_bilddb",
      "mov_mueblesyenseres_transf",
      "mov_mueblesyenseres_od",
      "mov_mueblesyenseres_gdd",
      "mov_mueblesyenseres_total",
    ],
    maquinariayequipo: [
      "mov_maquinariayequipo_si",
      "mov_maquinariayequipo_sida",
      "mov_maquinariayequipo_compras",
      "mov_maquinariayequipo_bilddb",
      "mov_maquinariayequipo_transf",
      "mov_maquinariayequipo_od",
      "mov_maquinariayequipo_gdd",
      "mov_maquinariayequipo_total",
    ],
    vehiculo: [
      "mov_vehiculo_si",
      "mov_vehiculo_sida",
      "mov_vehiculo_compras",
      "mov_vehiculo_bilddb",
      "mov_vehiculo_transf",
      "mov_vehiculo_od",
      "mov_vehiculo_gdd",
      "mov_vehiculo_total",
    ],
    equipodecomputacion: [
      "mov_equipodecomputacion_si",
      "mov_equipodecomputacion_sida",
      "mov_equipodecomputacion_compras",
      "mov_equipodecomputacion_bilddb",
      "mov_equipodecomputacion_transf",
      "mov_equipodecomputacion_od",
      "mov_equipodecomputacion_gdd",
      "mov_equipodecomputacion_total",
    ],
    otros: [
      "mov_otrospropiedadesplantasyequipos_si",
      "mov_otrospropiedadesplantasyequipos_sida",
      "mov_otrospropiedadesplantasyequipos_compras",
      "mov_otrospropiedadesplantasyequipos_bilddb",
      "mov_otrospropiedadesplantasyequipos_transf",
      "mov_otrospropiedadesplantasyequipos_od",
      "mov_otrospropiedadesplantasyequipos_gdd",
      "mov_otrospropiedadesplantasyequipos_total",
    ],
    totales: [
      "mov_total_si",
      "mov_total_sida",
      "mov_total_compras",
      "mov_total_bilddb",
      "mov_total_transf",
      "mov_total_od",
      "mov_total_gdd",
      "mov_total_sf",
    ],
  }

  const propiedadesPlantasEquiposRefs = {}

  Object.entries(categorias).forEach(([categoria, claves]) => {
    propiedadesPlantasEquiposRefs[categoria] = {}
    claves.forEach(key => {
      propiedadesPlantasEquiposRefs[categoria][key] = ref(reportStore.getReportData("movpropiedadesplantasyequipos")?.[key] || "0")
    })
  })

  return propiedadesPlantasEquiposRefs
}

export const initializeMovPropiedadesPlantasEquiposAnt = () => {
  const reportStore = useReportStore()

  const categorias = {
    terrenos: [
      "mov_terreno_si_ant",
      "mov_terreno_sida_ant",
      "mov_terreno_compras_ant",
      "mov_terreno_bilddb_ant",
      "mov_terreno_transf_ant",
      "mov_terreno_od_ant",
      "mov_terreno_gdd_ant",
      "mov_terreno_total_ant",
    ],
    edificios: [
      "mov_edificios_si_ant",
      "mov_edificios_sida_ant",
      "mov_edificios_compras_ant",
      "mov_edificios_bilddb_ant",
      "mov_edificios_transf_ant",
      "mov_edificios_od_ant",
      "mov_edificios_gdd_ant",
      "mov_edificios_total_ant",
    ],
    construccionesencurso: [
      "mov_construccionesencurso_si_ant",
      "mov_construccionesencurso_sida_ant",
      "mov_construccionesencurso_compras_ant",
      "mov_construccionesencurso_bilddb_ant",
      "mov_construccionesencurso_transf_ant",
      "mov_construccionesencurso_od_ant",
      "mov_construccionesencurso_gdd_ant",
      "mov_construccionesencurso_total_ant",
    ],
    instalaciones: [
      "mov_instalaciones_si_ant",
      "mov_instalaciones_sida_ant",
      "mov_instalaciones_compras_ant",
      "mov_instalaciones_bilddb_ant",
      "mov_instalaciones_transf_ant",
      "mov_instalaciones_od_ant",
      "mov_instalaciones_gdd_ant",
      "mov_instalaciones_total_ant",
    ],
    mueblesyenseres: [
      "mov_mueblesyenseres_si_ant",
      "mov_mueblesyenseres_sida_ant",
      "mov_mueblesyenseres_compras_ant",
      "mov_mueblesyenseres_bilddb_ant",
      "mov_mueblesyenseres_transf_ant",
      "mov_mueblesyenseres_od_ant",
      "mov_mueblesyenseres_gdd_ant",
      "mov_mueblesyenseres_total_ant",
    ],
    maquinariayequipo: [
      "mov_maquinariayequipo_si_ant",
      "mov_maquinariayequipo_sida_ant",
      "mov_maquinariayequipo_compras_ant",
      "mov_maquinariayequipo_bilddb_ant",
      "mov_maquinariayequipo_transf_ant",
      "mov_maquinariayequipo_od_ant",
      "mov_maquinariayequipo_gdd_ant",
      "mov_maquinariayequipo_total_ant",
    ],
    vehiculo: [
      "mov_vehiculo_si_ant",
      "mov_vehiculo_sida_ant",
      "mov_vehiculo_compras_ant",
      "mov_vehiculo_bilddb_ant",
      "mov_vehiculo_transf_ant",
      "mov_vehiculo_od_ant",
      "mov_vehiculo_gdd_ant",
      "mov_vehiculo_total_ant",
    ],
    equipodecomputacion: [
      "mov_equipodecomputacion_si_ant",
      "mov_equipodecomputacion_sida_ant",
      "mov_equipodecomputacion_compras_ant",
      "mov_equipodecomputacion_bilddb_ant",
      "mov_equipodecomputacion_transf_ant",
      "mov_equipodecomputacion_od_ant",
      "mov_equipodecomputacion_gdd_ant",
      "mov_equipodecomputacion_total_ant",
    ],
    otros: [
      "mov_otrospropiedadesplantasyequipos_si_ant",
      "mov_otrospropiedadesplantasyequipos_sida_ant",
      "mov_otrospropiedadesplantasyequipos_compras_ant",
      "mov_otrospropiedadesplantasyequipos_bilddb_ant",
      "mov_otrospropiedadesplantasyequipos_transf_ant",
      "mov_otrospropiedadesplantasyequipos_od_ant",
      "mov_otrospropiedadesplantasyequipos_gdd_ant",
      "mov_otrospropiedadesplantasyequipos_total_ant",
    ],
    totales: [
      "mov_total_si_ant",
      "mov_total_sida_ant",
      "mov_total_compras_ant",
      "mov_total_bilddb_ant",
      "mov_total_transf_ant",
      "mov_total_od_ant",
      "mov_total_gdd_ant",
      "mov_total_sf_ant",
    ],
  }

  const propiedadesPlantasEquiposAntRefs = {}

  Object.entries(categorias).forEach(([categoria, claves]) => {
    propiedadesPlantasEquiposAntRefs[categoria] = {}
    claves.forEach(clave => {
      propiedadesPlantasEquiposAntRefs[categoria][clave] = ref(reportStore.getReportData("movpropiedadesplantasyequipos_ant", true)?.[clave] || "0")
    })
  })

  return propiedadesPlantasEquiposAntRefs
}

export const initializeOtrosGastos = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_502",
    "eri_50204",
    "eri_5020401",
    "eri_5020402",
  ]

  const otrosGastosRefs = {}

  claves.forEach(clave => {
    otrosGastosRefs[clave] = ref(reportStore.getReportData("otrosgastosifluc")?.[clave] || "0")
  })

  return otrosGastosRefs
}

export const initializeOtrosGastosAnt = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_502_ant",
    "eri_50204_ant",
    "eri_5020401_ant",
    "eri_5020402_ant",
  ]

  const otrosGastosAntRefs = {}

  claves.forEach(clave => {
    otrosGastosAntRefs[clave] = ref(reportStore.getReportData("otrosgastosifluc_ant", true)?.[clave] || "0")
  })

  return otrosGastosAntRefs
}

export const initializeOtrosIngresos = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_403",
    "eri_40301",
    "eri_40302",
    "eri_40303",
  ]

  const otrosIngresosRefs = {}

  claves.forEach(clave => {
    otrosIngresosRefs[clave] = ref(reportStore.getReportData("otrosingresosifluc")?.[clave] || "0")
  })

  return otrosIngresosRefs
}

export const initializeOtrosIngresosAnt = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_403_ant",
    "eri_40301_ant",
    "eri_40302_ant",
    "eri_40303_ant",
  ]

  const otrosIngresosAntRefs = {}

  claves.forEach(clave => {
    otrosIngresosAntRefs[clave] = ref(reportStore.getReportData("otrosingresosifluc_ant", true)?.[clave] || "0")
  })

  return otrosIngresosAntRefs
}

export const initializePasivosCorrientes = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_2", "esf_201", "esf_202", "esf_20101", "esf_20102", "esf_20103",
    "esf_2010301", "esf_201030101", "esf_201030102", "esf_201030103",
    "esf_2010302", "esf_201030201", "esf_201030202", "esf_201030203",
    "esf_20104", "esf_2010401", "esf_2010402", "esf_20105", "esf_2010501",
    "esf_2010502", "esf_20106", "esf_2010601", "esf_2010602", "esf_2010603",
    "esf_2010604", "esf_2010605", "esf_20107", "esf_2010701", "esf_2010702",
    "esf_2010703", "esf_2010704", "esf_2010705", "esf_2010706", "esf_2010707",
    "esf_20108", "esf_2010801", "esf_201080101", "esf_201080102", "esf_201080103",
    "esf_201080104", "esf_2010802", "esf_201080201", "esf_201080202", "esf_201080203",
    "esf_201080204", "esf_20109", "esf_20110", "esf_2011001", "esf_2011002",
    "esf_20111", "esf_20112", "esf_2011201", "esf_2011202", "esf_201120201",
    "esf_201120202", "esf_20113", "esf_2011301", "esf_2011302", "esf_2011303",
    "esf_2011304", "esf_2011305", "esf_2011306", "esf_2011307", "esf_2011308",
    "esf_2011309", "esf_2011310", "esf_2011311", "esf_2011312", "esf_20114",
  ]

  const pasivosCorrientesRefs = {}

  claves.forEach(clave => {
    pasivosCorrientesRefs[clave] = ref(reportStore.getReportData("pasivoscorrientesifluc")?.[clave] || "0")
  })

  return pasivosCorrientesRefs
}

export const initializePasivosCorrientesAnt = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_2_ant", "esf_201_ant", "esf_202_ant", "esf_20101_ant", "esf_20102_ant", "esf_20103_ant",
    "esf_2010301_ant", "esf_201030101_ant", "esf_201030102_ant", "esf_201030103_ant",
    "esf_2010302_ant", "esf_201030201_ant", "esf_201030202_ant", "esf_201030203_ant",
    "esf_20104_ant", "esf_2010401_ant", "esf_2010402_ant", "esf_20105_ant", "esf_2010501_ant",
    "esf_2010502_ant", "esf_20106_ant", "esf_2010601_ant", "esf_2010602_ant", "esf_2010603_ant",
    "esf_2010604_ant", "esf_2010605_ant", "esf_20107_ant", "esf_2010701_ant", "esf_2010702_ant",
    "esf_2010703_ant", "esf_2010704_ant", "esf_2010705_ant", "esf_2010706_ant", "esf_2010707_ant",
    "esf_20108_ant", "esf_2010801_ant", "esf_201080101_ant", "esf_201080102_ant", "esf_201080103_ant",
    "esf_201080104_ant", "esf_2010802_ant", "esf_201080201_ant", "esf_201080202_ant", "esf_201080203_ant",
    "esf_201080204_ant", "esf_20109_ant", "esf_20110_ant", "esf_2011001_ant", "esf_2011002_ant",
    "esf_20111_ant", "esf_20112_ant", "esf_2011201_ant", "esf_2011202_ant", "esf_201120201_ant",
    "esf_201120202_ant", "esf_20113_ant", "esf_2011301_ant", "esf_2011302_ant", "esf_2011303_ant",
    "esf_2011304_ant", "esf_2011305_ant", "esf_2011306_ant", "esf_2011307_ant", "esf_2011308_ant",
    "esf_2011309_ant", "esf_2011310_ant", "esf_2011311_ant", "esf_2011312_ant", "esf_20114_ant",
  ]

  const pasivosCorrientesAntRefs = {}

  claves.forEach(clave => {
    pasivosCorrientesAntRefs[clave] = ref(reportStore.getReportData("pasivoscorrientesifluc_ant", true)?.[clave] || "0")
  })

  return pasivosCorrientesAntRefs
}

export const initializePasivosNoCorrientes = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_2", "esf_201", "esf_202", "esf_20201", "esf_20202",
    "esf_2020201", "esf_202020101", "esf_202020102", "esf_202020103",
    "esf_2020202", "esf_202020201", "esf_202020202", "esf_202020203",
    "esf_20203", "esf_2020301", "esf_2020302", "esf_20204", "esf_2020401",
    "esf_202040101", "esf_202040102", "esf_202040103", "esf_202040104",
    "esf_2020402", "esf_202040201", "esf_202040202", "esf_202040203",
    "esf_202040204", "esf_20205", "esf_2020501", "esf_2020502", "esf_2020503",
    "esf_2020504", "esf_2020505", "esf_20206", "esf_2020601", "esf_2020602",
    "esf_20207", "esf_2020701", "esf_2020702", "esf_202070201", "esf_202070202",
    "esf_20208", "esf_20209", "esf_2020901", "esf_2020902", "esf_20210",
  ]

  const pasivosNoCorrientesRefs = {}

  claves.forEach(clave => {
    pasivosNoCorrientesRefs[clave] = ref(reportStore.getReportData("pasivosnocorrientesifluc")?.[clave] || "0")
  })

  return pasivosNoCorrientesRefs
}

export const initializePasivosNoCorrientesAnt = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_2_ant", "esf_201_ant", "esf_202_ant", "esf_20201_ant", "esf_20202_ant",
    "esf_2020201_ant", "esf_202020101_ant", "esf_202020102_ant", "esf_202020103_ant",
    "esf_2020202_ant", "esf_202020201_ant", "esf_202020202_ant", "esf_202020203_ant",
    "esf_20203_ant", "esf_2020301_ant", "esf_2020302_ant", "esf_20204_ant", "esf_2020401_ant",
    "esf_202040101_ant", "esf_202040102_ant", "esf_202040103_ant", "esf_202040104_ant",
    "esf_2020402_ant", "esf_202040201_ant", "esf_202040202_ant", "esf_202040203_ant",
    "esf_202040204_ant", "esf_20205_ant", "esf_2020501_ant", "esf_2020502_ant", "esf_2020503_ant",
    "esf_2020504_ant", "esf_2020505_ant", "esf_20206_ant", "esf_2020601_ant", "esf_2020602_ant",
    "esf_20207_ant", "esf_2020701_ant", "esf_2020702_ant", "esf_202070201_ant", "esf_202070202_ant",
    "esf_20208_ant", "esf_20209_ant", "esf_2020901_ant", "esf_2020902_ant", "esf_20210_ant",
  ]

  const pasivosNoCorrientesAntRefs = {}

  claves.forEach(clave => {
    pasivosNoCorrientesAntRefs[clave] = ref(reportStore.getReportData("pasivosnocorrientesifluc_ant", true)?.[clave] || "0")
  })

  return pasivosNoCorrientesAntRefs
}

export const initializePatrimonioRefs = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_3", "esf_30", "esf_301", "esf_30101", "esf_30102", "esf_30103", "esf_30104", "esf_30105",
    "esf_3010501", "esf_3010502", "esf_302", "esf_303", "esf_304", "esf_30401", "esf_30402",
    "esf_305", "esf_30501", "esf_30502", "esf_30503", "esf_30504", "esf_306", "esf_30601",
    "esf_30602", "esf_30603", "esf_30604", "esf_30605", "esf_30606", "esf_30607", "esf_307",
    "esf_30701", "esf_30702", "esf_31",
  ]

  const patrimonioRefs = {}

  claves.forEach(clave => {
    patrimonioRefs[clave] = ref(reportStore.getReportData("patrimonioifluc")?.[clave] || "0")
  })

  return patrimonioRefs
}

export const initializePatrimonioAntRefs = () => {
  const reportStore = useReportStore()

  const claves = [
    "esf_3_ant", "esf_30_ant", "esf_301_ant", "esf_30101_ant", "esf_30102_ant", "esf_30103_ant",
    "esf_30104_ant", "esf_30105_ant", "esf_3010501_ant", "esf_3010502_ant", "esf_302_ant",
    "esf_303_ant", "esf_304_ant", "esf_30401_ant", "esf_30402_ant", "esf_305_ant", "esf_30501_ant",
    "esf_30502_ant", "esf_30503_ant", "esf_30504_ant", "esf_306_ant", "esf_30601_ant",
    "esf_30602_ant", "esf_30603_ant", "esf_30604_ant", "esf_30605_ant", "esf_30606_ant",
    "esf_30607_ant", "esf_307_ant", "esf_30701_ant", "esf_30702_ant", "esf_31_ant",
  ]

  const patrimonioAntRefs = {}

  claves.forEach(clave => {
    patrimonioAntRefs[clave] = ref(reportStore.getReportData("patrimonioifluc_ant", true)?.[clave] || "0")
  })

  return patrimonioAntRefs
}

export const initializeResultadosRefs = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_6", "eri_600", "eri_601", "eri_602", "eri_603",
    "eri_604", "eri_605", "eri_606", "eri_607",
  ]

  const resultadosRefs = {}

  claves.forEach(clave => {
    resultadosRefs[clave] = ref(reportStore.getReportData("resultadosifluc")?.[clave] || "0")
  })

  return resultadosRefs
}

export const initializeResultadosAntRefs = () => {
  const reportStore = useReportStore()

  const clavesAnt = [
    "eri_6_ant", "eri_600_ant", "eri_601_ant", "eri_602_ant",
    "eri_603_ant", "eri_604_ant", "eri_605_ant", "eri_606_ant", "eri_607_ant",
  ]

  const resultadosAntRefs = {}

  clavesAnt.forEach(clave => {
    resultadosAntRefs[clave] = ref(reportStore.getReportData("resultadosifluc_ant", true)?.[clave] || "0")
  })

  return resultadosAntRefs
}

export const initializeResultadosOperacionesDiscontinuasRefs = () => {
  const reportStore = useReportStore()

  // Claves para inicializar dinámicamente
  const claves = [
    "eri_600", "eri_700", "eri_701", "eri_702",
    "eri_703", "eri_704", "eri_705", "eri_706",
  ]

  const resultadosOperacionesDiscontinuasRefs = {}

  // Inicializar referencias dinámicamente
  claves.forEach(clave => {
    resultadosOperacionesDiscontinuasRefs[clave] = ref(reportStore.getReportData("operacionesdiscontinuadasifluc")?.[clave] || "0")
  })

  return resultadosOperacionesDiscontinuasRefs
}

export const initializeResultadosOperacionesDiscontinuasAntRefs = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_600_ant", "eri_700_ant", "eri_701_ant", "eri_702_ant",
    "eri_703_ant", "eri_704_ant", "eri_705_ant", "eri_706_ant", "eri_707_ant",
  ]

  const resultadosOperacionesDiscontinuasAntRefs = {}

  // Inicializar referencias dinámicamente
  claves.forEach(clave => {
    resultadosOperacionesDiscontinuasAntRefs[clave] = ref(reportStore.getReportData("operacionesdiscontinuadasifluc_ant", true)?.[clave] || "0")
  })

  return resultadosOperacionesDiscontinuasAntRefs
}

export const initializeOtrosResultadosIntegralRefs = () => {
  const reportStore = useReportStore()

  const claves = [
    "eri_800", "eri_80001", "eri_80002", "eri_80003", "eri_80004",
    "eri_80005", "eri_80006", "eri_80007", "eri_80008", "eri_80009", "eri_801",
  ]

  const otrosResultadosIntegralRefs = {}

  claves.forEach(clave => {
    otrosResultadosIntegralRefs[clave] = ref(reportStore.getReportData("otrosresultadosintegralifluc")?.[clave] || "0")
  })

  return otrosResultadosIntegralRefs
}

export const initializeOtrosResultadosIntegralAntRefs = () => {
  const reportStore = useReportStore()

  const clavesAnt = [
    "eri_800_ant", "eri_80001_ant", "eri_80002_ant", "eri_80003_ant",
    "eri_80004_ant", "eri_80005_ant", "eri_80006_ant", "eri_80007_ant",
    "eri_80008_ant", "eri_80009_ant", "eri_801_ant",
  ]

  const otrosResultadosIntegralAntRefs = {}

  clavesAnt.forEach(clave => {
    otrosResultadosIntegralAntRefs[clave] = ref(reportStore.getReportData("otrosresultadosintegralifluc_ant", true)?.[clave] || "0")
  })

  return otrosResultadosIntegralAntRefs
}
