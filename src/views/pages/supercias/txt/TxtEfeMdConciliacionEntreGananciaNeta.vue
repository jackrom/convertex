<script setup>
import {
  calcular_9501,
  calcular_9501_ant,
  calcular_9820,
  calcular_9820_ant,
  calcular_eri_607,
} from "@core/utils/formulas"

const props = defineProps({
  data: {
    res_diferenciaporcuadrar_conciliacion: null,
    res_diferenciaporcuadrar_conciliacion_ant: null,
  },
})

import { useReportStore } from "@/@store/reportStore"
import { initializeConciliacionGananciaNeta } from "@core/utils/initializers"

const reportStore = useReportStore()

const values = ref([])

const conciliacion = initializeConciliacionGananciaNeta()

/* PERIODO ACTUAL */
const efe_md_97 = conciliacion['efe_md_97']
const efe_md_9701 = conciliacion['efe_md_9701']
const efe_md_9702 = conciliacion['efe_md_9702']
const efe_md_9703 = conciliacion['efe_md_9703']
const efe_md_9704 = conciliacion['efe_md_9704']
const efe_md_9705 = conciliacion['efe_md_9705']
const efe_md_9706 = conciliacion['efe_md_9706']
const efe_md_9707 = conciliacion['efe_md_9707']
const efe_md_9708 = conciliacion['efe_md_9708']
const efe_md_9709 = conciliacion['efe_md_9709']
const efe_md_9710 = conciliacion['efe_md_9710']
const efe_md_9711 = conciliacion['efe_md_9711']
const efe_md_98 = conciliacion['efe_md_98']
const efe_md_9801 = conciliacion['efe_md_9801']
const efe_md_980104 = conciliacion['efe_md_980104']
const efe_md_980105 = conciliacion['efe_md_980105']
const efe_md_980106 = conciliacion['efe_md_980106']
const efe_md_9802 = conciliacion['efe_md_9802']
const efe_md_9803 = conciliacion['efe_md_9803']
const efe_md_9804 = conciliacion['efe_md_9804']
const efe_md_980402 = conciliacion['efe_md_980402']
const efe_md_980403 = conciliacion['efe_md_980403']
const efe_md_980404 = conciliacion['efe_md_980404']
const efe_md_9805 = conciliacion['efe_md_9805']
const efe_md_9806 = conciliacion['efe_md_9806']
const efe_md_9807 = conciliacion['efe_md_9807']
const efe_md_9808 = conciliacion['efe_md_9808']
const efe_md_9809 = conciliacion['efe_md_9809']
const efe_md_9810 = conciliacion['efe_md_9810']

const efe_md_diferenciaporcuadrar = ref('0')

const efe_md_96 = computed(() => {
  return calcular_eri_607()
})

const efe_md_9501 = computed(() => {
  return  calcular_9501()
})

const efe_md_970101 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
})

const efe_md_970102 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
})

const efe_md_970103 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
})

const efe_md_970201 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
})

const efe_md_970202 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
})

const efe_md_970203 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
})

const efe_md_970204 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
})

const efe_md_970205 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
})

const efe_md_970206 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
})

const efe_md_970207 = computed(() => {
  return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
})

const efe_md_970801 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
})

const efe_md_970802 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
})

const efe_md_970901 = computed(() => {
  return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")) * -1).toFixed(2)
})

const efe_md_971001 = computed(() => {
  return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")) * -1).toFixed(2)
})

const efe_md_971101 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
})

const efe_md_971102 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
})

const efe_md_971103 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
})

const efe_md_971104 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
})

const efe_md_971105 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
})

const efe_md_971106 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
})

const efe_md_971107 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
})

const efe_md_971108 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
})

const efe_md_971109 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
})

const efe_md_971110 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
})

const efe_md_971111 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_generacionenrevision")) * -1).toFixed(2)
})

const efe_md_971112 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_ajustesresultadospyg")) * -1).toFixed(2)
})

const efe_md_971113 = computed(() => {
  return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_generacionenrevision")).toFixed(2)
})

const efe_md_971114 = computed(() => {
  return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_ajustesresultadospyg")).toFixed(2)
})

const efe_md_971115 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
})

const efe_md_971116 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
})

const efe_md_971117 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
})

const efe_md_971118 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
})

const efe_md_971119 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
})

const efe_md_971120 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
})

const efe_md_971121 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
})

const efe_md_971122 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
})

const efe_md_971123 = computed(() => {
  const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_971124 = computed(() => {
  const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_980101 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010205")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010205_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980102 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980103 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980201 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980301 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980401 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980501 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980502 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980503 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980504 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980505 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980506 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980507 = computed(() => {
  const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
  const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

  return ((Number(current) - Number(previous)) * -1).toFixed(2)
})

const efe_md_980601 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_980801 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981001 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981002 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20102")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20102_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981003 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20104")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20104_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981004 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981005 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981006 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981007 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
})

const efe_md_981008 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
})

const efe_md_981009 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981010 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981011 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981012 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981013 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const efe_md_981014 = computed(() => {
  const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
  const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

  return (Number(current) - Number(previous)).toFixed(2)
})

const convertirNegativo_9704 = async id => { efe_md_9704.value = (Number(efe_md_9704.value) > 0) ? Number(efe_md_9704.value) * -1 : Number(efe_md_9704.value) }

const efe_md_9820 = ref(calcular_9820())

const handleActionClick = async id => {
  efe_md_980402.value = (Number(efe_md_970204.value) * -1).toFixed(2)
  efe_md_980403.value = (Number(efe_md_970205.value) * -1).toFixed(2)
  efe_md_980404.value = (Number(efe_md_970206.value) * -1).toFixed(2)
  efe_md_9701.value = (Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2)
  efe_md_9702.value = (Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2)
  efe_md_9708.value = (Number(efe_md_970801.value) + Number(efe_md_970802.value)).toFixed(2)
  efe_md_9709.value = (Number(efe_md_970901.value)).toFixed(2)
  efe_md_9710.value = (Number(efe_md_971001.value)).toFixed(2)
  efe_md_9711.value = (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)
  efe_md_97.value = (Number(efe_md_9701.value) + Number(efe_md_9702.value) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708.value) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711.value)).toFixed(2)
  efe_md_9801.value = (Number(efe_md_980101.value) + Number(efe_md_980102.value) + Number(efe_md_980103.value) + Number(efe_md_980104.value) + Number(efe_md_980105.value) + Number(efe_md_980106.value)).toFixed(2)
  efe_md_9802.value = (Number(efe_md_980201.value)).toFixed(2)
  efe_md_9803.value = (Number(efe_md_980301.value)).toFixed(2)
  efe_md_9804.value = (Number(efe_md_980401.value) + Number(efe_md_980402.value) + Number(efe_md_980403.value) + Number(efe_md_980404.value)).toFixed(2)
  efe_md_9805.value = (Number(efe_md_980501.value) + Number(efe_md_980502.value) + Number(efe_md_980503.value) + Number(efe_md_980504.value) + Number(efe_md_980505.value) + Number(efe_md_980506.value) + Number(efe_md_980507.value)).toFixed(2)
  efe_md_9806.value = (Number(efe_md_980601.value)).toFixed(2)
  efe_md_9808.value = (Number(efe_md_980801.value)).toFixed(2)
  efe_md_9810.value = (Number(efe_md_981001.value) + Number(efe_md_981002.value) + Number(efe_md_981003.value) + Number(efe_md_981004.value) + Number(efe_md_981005.value) + Number(efe_md_981006.value) + Number(efe_md_981007.value) + Number(efe_md_981008.value) + Number(efe_md_981009.value) + Number(efe_md_981010.value) + Number(efe_md_981011.value) + Number(efe_md_981012.value) + Number(efe_md_981013.value) + Number(efe_md_981014.value)).toFixed(2)

  efe_md_98.value = (Number(efe_md_9801.value) + Number(efe_md_9802.value) + Number(efe_md_9803.value) + Number(efe_md_9804.value) + Number(efe_md_9805.value) + Number(efe_md_9806.value) + Number(efe_md_9807.value) + Number(efe_md_9808.value) + Number(efe_md_9809.value) + Number(efe_md_9810.value)).toFixed(2)

  efe_md_9820.value = calcular_9820()

  efe_md_diferenciaporcuadrar.value = (Number(efe_md_9820.value) - Number(efe_md_9501.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_efe_celgnylfo(efe_md_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_efe_celgnylfo", efe_md_diferenciaporcuadrar.value)

  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_9820', Number(efe_md_9820.value).toFixed(2))

  efe_md_980104.value = (Number(efe_md_970201.value) * -1).toFixed(2)
  efe_md_980105.value = (Number(efe_md_970202.value) * -1).toFixed(2)
  efe_md_980106.value = (Number(efe_md_970203.value) * -1).toFixed(2)

  // eslint-disable-next-line vue/no-mutating-props
  props.data.res_diferenciaporcuadrar_conciliacion = efe_md_diferenciaporcuadrar.value

  const conciliacionganancianeta = {
    efe_md_96: efe_md_96.value,
    efe_md_97: efe_md_97.value,
    efe_md_9701: efe_md_9701.value,
    efe_md_970101: efe_md_970101.value,
    efe_md_970102: efe_md_970102.value,
    efe_md_970103: efe_md_970103.value,
    efe_md_9702: efe_md_9702.value,
    efe_md_970201: efe_md_970201.value,
    efe_md_970202: efe_md_970202.value,
    efe_md_970203: efe_md_970203.value,
    efe_md_970204: efe_md_970204.value,
    efe_md_970205: efe_md_970205.value,
    efe_md_970206: efe_md_970206.value,
    efe_md_970207: efe_md_970207.value,
    efe_md_9703: efe_md_9703.value,
    efe_md_9704: efe_md_9704.value,
    efe_md_9705: efe_md_9705.value,
    efe_md_9706: efe_md_9706.value,
    efe_md_9707: efe_md_9707.value,
    efe_md_9708: efe_md_9708.value,
    efe_md_970801: efe_md_970801.value,
    efe_md_970802: efe_md_970802.value,
    efe_md_9709: efe_md_9709.value,
    efe_md_970901: efe_md_970901.value,
    efe_md_9710: efe_md_9710.value,
    efe_md_971001: efe_md_971001.value,
    efe_md_9711: efe_md_9711.value,
    efe_md_971101: efe_md_971101.value,
    efe_md_971102: efe_md_971102.value,
    efe_md_971103: efe_md_971103.value,
    efe_md_971104: efe_md_971104.value,
    efe_md_971105: efe_md_971105.value,
    efe_md_971106: efe_md_971106.value,
    efe_md_971107: efe_md_971107.value,
    efe_md_971108: efe_md_971108.value,
    efe_md_971109: efe_md_971109.value,
    efe_md_971110: efe_md_971110.value,
    efe_md_971111: efe_md_971111.value,
    efe_md_971112: efe_md_971112.value,
    efe_md_971113: efe_md_971113.value,
    efe_md_971114: efe_md_971114.value,
    efe_md_971115: efe_md_971115.value,
    efe_md_971116: efe_md_971116.value,
    efe_md_971117: efe_md_971117.value,
    efe_md_971118: efe_md_971118.value,
    efe_md_971119: efe_md_971119.value,
    efe_md_971120: efe_md_971120.value,
    efe_md_971121: efe_md_971121.value,
    efe_md_971122: efe_md_971122.value,
    efe_md_971123: efe_md_971123.value,
    efe_md_971124: efe_md_971124.value,
    efe_md_98: efe_md_98.value,
    efe_md_9801: efe_md_9801.value,
    efe_md_980101: efe_md_980101.value,
    efe_md_980102: efe_md_980102.value,
    efe_md_980103: efe_md_980103.value,
    efe_md_980104: efe_md_980104.value,
    efe_md_980105: efe_md_980105.value,
    efe_md_980106: efe_md_980106.value,
    efe_md_9802: efe_md_9802.value,
    efe_md_980201: efe_md_980201.value,
    efe_md_9803: efe_md_9803.value,
    efe_md_980301: efe_md_980301.value,
    efe_md_9804: efe_md_9804.value,
    efe_md_980401: efe_md_980401.value,
    efe_md_980402: efe_md_980402.value,
    efe_md_980403: efe_md_980403.value,
    efe_md_980404: efe_md_980404.value,
    efe_md_9805: efe_md_9805.value,
    efe_md_980501: efe_md_980501.value,
    efe_md_980502: efe_md_980502.value,
    efe_md_980503: efe_md_980503.value,
    efe_md_980504: efe_md_980504.value,
    efe_md_980505: efe_md_980505.value,
    efe_md_980506: efe_md_980506.value,
    efe_md_980507: efe_md_980507.value,
    efe_md_9806: efe_md_9806.value,
    efe_md_980601: efe_md_980601.value,
    efe_md_9807: efe_md_9807.value,
    efe_md_9808: efe_md_9808.value,
    efe_md_980801: efe_md_980801.value,
    efe_md_9809: efe_md_9809.value,
    efe_md_9810: efe_md_9810.value,
    efe_md_981001: efe_md_981001.value,
    efe_md_981002: efe_md_981002.value,
    efe_md_981003: efe_md_981003.value,
    efe_md_981004: efe_md_981004.value,
    efe_md_981005: efe_md_981005.value,
    efe_md_981006: efe_md_981006.value,
    efe_md_981007: efe_md_981007.value,
    efe_md_981008: efe_md_981008.value,
    efe_md_981009: efe_md_981009.value,
    efe_md_981010: efe_md_981010.value,
    efe_md_981011: efe_md_981011.value,
    efe_md_981012: efe_md_981012.value,
    efe_md_981013: efe_md_981013.value,
    efe_md_981014: efe_md_981014.value,
    efe_md_9820: efe_md_9820.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    conciliacionganancianetaifluc: conciliacionganancianeta,
  })
}

/*const handleActionClick_ant = async id => {
  efe_md_9701_ant.value = (Number(efe_md_970101_ant.value) + Number(efe_md_970102_ant.value) + Number(efe_md_970103_ant.value)).toFixed(2)
  efe_md_9702_ant.value = (Number(efe_md_970201_ant.value) + Number(efe_md_970202_ant.value) + Number(efe_md_970203_ant.value) + Number(efe_md_970204_ant.value) + Number(efe_md_970205_ant.value) + Number(efe_md_970206_ant.value) + Number(efe_md_970207_ant.value)).toFixed(2)
  efe_md_9708_ant.value = (Number(efe_md_970801_ant.value) + Number(efe_md_970802_ant.value)).toFixed(2)
  efe_md_9709_ant.value = (Number(efe_md_970901_ant.value)).toFixed(2)
  efe_md_9710_ant.value = (Number(efe_md_971001_ant.value)).toFixed(2)
  efe_md_9711_ant.value = (Number(efe_md_971101_ant.value) + Number(efe_md_971102_ant.value) + Number(efe_md_971103_ant.value) + Number(efe_md_971104_ant.value) + Number(efe_md_971105_ant.value) + Number(efe_md_971106_ant.value) + Number(efe_md_971107_ant.value) + Number(efe_md_971108_ant.value) + Number(efe_md_971109_ant.value) + Number(efe_md_971110_ant.value) + Number(efe_md_971111_ant.value) + Number(efe_md_971112_ant.value) + Number(efe_md_971113_ant.value) + Number(efe_md_971114_ant.value) + Number(efe_md_971115_ant.value) + Number(efe_md_971116_ant.value) + Number(efe_md_971117_ant.value) + Number(efe_md_971118_ant.value) + Number(efe_md_971119_ant.value) + Number(efe_md_971120_ant.value) + Number(efe_md_971121_ant.value) + Number(efe_md_971122_ant.value) + Number(efe_md_971123_ant.value)).toFixed(2)
  efe_md_97_ant.value = (Number(efe_md_9701_ant.value) + Number(efe_md_9702_ant.value) + Number(efe_md_9703_ant.value) + Number(efe_md_9704_ant.value) + Number(efe_md_9705_ant.value) + Number(efe_md_9706_ant.value) + Number(efe_md_9707_ant.value) + Number(efe_md_9708_ant.value) + Number(efe_md_9709_ant.value) + Number(efe_md_9710_ant.value) + Number(efe_md_9711_ant.value)).toFixed(2)
  efe_md_9801_ant.value = (Number(efe_md_980101_ant.value) + Number(efe_md_980102_ant.value) + Number(efe_md_980103_ant.value) + Number(efe_md_980104_ant.value) + Number(efe_md_980105_ant.value) + Number(efe_md_980106_ant.value)).toFixed(2)

  efe_md_9802_ant.value = (Number(efe_md_980201_ant.value)).toFixed(2)
  efe_md_9803_ant.value = (Number(efe_md_980301_ant.value)).toFixed(2)
  efe_md_9804_ant.value = (Number(efe_md_980401_ant.value) + Number(efe_md_980402_ant.value) + Number(efe_md_980403_ant.value) + Number(efe_md_980404_ant.value)).toFixed(2)
  efe_md_9805_ant.value = (Number(efe_md_980501_ant.value) + Number(efe_md_980502_ant.value) + Number(efe_md_980503_ant.value) + Number(efe_md_980504_ant.value) + Number(efe_md_980505_ant.value) + Number(efe_md_980506_ant.value) + Number(efe_md_980507_ant.value)).toFixed(2)
  efe_md_9806_ant.value = (Number(efe_md_980601_ant.value)).toFixed(2)
  efe_md_9808_ant.value = (Number(efe_md_980801_ant.value)).toFixed(2)
  efe_md_9810_ant.value = (Number(efe_md_981001_ant.value) + Number(efe_md_981002_ant.value) + Number(efe_md_981003_ant.value) + Number(efe_md_981004_ant.value) + Number(efe_md_981005_ant.value) + Number(efe_md_981006_ant.value) + Number(efe_md_981007_ant.value) + Number(efe_md_981008_ant.value) + Number(efe_md_981009_ant.value) + Number(efe_md_981010_ant.value) + Number(efe_md_981011_ant.value) + Number(efe_md_981012_ant.value) + Number(efe_md_981013_ant.value) + Number(efe_md_981014_ant.value)).toFixed(2)

  efe_md_98_ant.value = (Number(efe_md_9801_ant.value) + Number(efe_md_9802_ant.value) + Number(efe_md_9803_ant.value) + Number(efe_md_9804_ant.value) + Number(efe_md_9805_ant.value) + Number(efe_md_9806_ant.value) + Number(efe_md_9807_ant.value) + Number(efe_md_9808_ant.value) + Number(efe_md_9809_ant.value) + Number(efe_md_9810_ant.value)).toFixed(2)

  efe_md_9820_ant.value = calcular_9820_ant()

  efe_md_diferenciaporcuadrar_ant.value = (Number(efe_md_9820_ant.value) - Number(efe_md_9501_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_efe_celgnylfoAnt(efe_md_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_efe_celgnylfo_ant", efe_md_diferenciaporcuadrar_ant.value)

  reportStore.updateReportData("conciliacionganancianetaifluc_ant", 'efe_9820_ant', Number(efe_md_9820_ant.value).toFixed(2))

  // eslint-disable-next-line vue/no-mutating-props
  props.data.res_diferenciaporcuadrar_conciliacion_ant = efe_md_diferenciaporcuadrar_ant.value

  const conciliacionganancianeta_ant = {
    efe_md_96_ant: efe_md_96_ant.value,
    efe_md_97_ant: efe_md_97_ant.value,
    efe_md_9701_ant: efe_md_9701_ant.value,
    efe_md_970101_ant: efe_md_970101_ant.value,
    efe_md_970102_ant: efe_md_970102_ant.value,
    efe_md_970103_ant: efe_md_970103_ant.value,
    efe_md_9702_ant: efe_md_9702_ant.value,
    efe_md_970201_ant: efe_md_970201_ant.value,
    efe_md_970202_ant: efe_md_970202_ant.value,
    efe_md_970203_ant: efe_md_970203_ant.value,
    efe_md_970204_ant: efe_md_970204_ant.value,
    efe_md_970205_ant: efe_md_970205_ant.value,
    efe_md_970206_ant: efe_md_970206_ant.value,
    efe_md_970207_ant: efe_md_970207_ant.value,
    efe_md_9703_ant: efe_md_9703_ant.value,
    efe_md_9704_ant: efe_md_9704_ant.value,
    efe_md_9705_ant: efe_md_9705_ant.value,
    efe_md_9706_ant: efe_md_9706_ant.value,
    efe_md_9707_ant: efe_md_9707_ant.value,
    efe_md_9708_ant: efe_md_9708_ant.value,
    efe_md_970801_ant: efe_md_970801_ant.value,
    efe_md_970802_ant: efe_md_970802_ant.value,
    efe_md_9709_ant: efe_md_9709_ant.value,
    efe_md_970901_ant: efe_md_970901_ant.value,
    efe_md_9710_ant: efe_md_9710_ant.value,
    efe_md_971001_ant: efe_md_971001_ant.value,
    efe_md_9711_ant: efe_md_9711_ant.value,
    efe_md_971101_ant: efe_md_971101_ant.value,
    efe_md_971102_ant: efe_md_971102_ant.value,
    efe_md_971103_ant: efe_md_971103_ant.value,
    efe_md_971104_ant: efe_md_971104_ant.value,
    efe_md_971105_ant: efe_md_971105_ant.value,
    efe_md_971106_ant: efe_md_971106_ant.value,
    efe_md_971107_ant: efe_md_971107_ant.value,
    efe_md_971108_ant: efe_md_971108_ant.value,
    efe_md_971109_ant: efe_md_971109_ant.value,
    efe_md_971110_ant: efe_md_971110_ant.value,
    efe_md_971111_ant: efe_md_971111_ant.value,
    efe_md_971112_ant: efe_md_971112_ant.value,
    efe_md_971113_ant: efe_md_971113_ant.value,
    efe_md_971114_ant: efe_md_971114_ant.value,
    efe_md_971115_ant: efe_md_971115_ant.value,
    efe_md_971116_ant: efe_md_971116_ant.value,
    efe_md_971117_ant: efe_md_971117_ant.value,
    efe_md_971118_ant: efe_md_971118_ant.value,
    efe_md_971119_ant: efe_md_971119_ant.value,
    efe_md_971120_ant: efe_md_971120_ant.value,
    efe_md_971121_ant: efe_md_971121_ant.value,
    efe_md_971122_ant: efe_md_971122_ant.value,
    efe_md_971123_ant: efe_md_971123_ant.value,
    efe_md_971124_ant: efe_md_971124_ant.value,
    efe_md_98_ant: efe_md_98_ant.value,
    efe_md_9801_ant: efe_md_9801_ant.value,
    efe_md_980101_ant: efe_md_980101_ant.value,
    efe_md_980102_ant: efe_md_980102_ant.value,
    efe_md_980103_ant: efe_md_980103_ant.value,
    efe_md_980104_ant: efe_md_980104_ant.value,
    efe_md_980105_ant: efe_md_980105_ant.value,
    efe_md_980106_ant: efe_md_980106_ant.value,
    efe_md_9802_ant: efe_md_9802_ant.value,
    efe_md_980201_ant: efe_md_980201_ant.value,
    efe_md_9803_ant: efe_md_9803_ant.value,
    efe_md_980301_ant: efe_md_980301_ant.value,
    efe_md_9804_ant: efe_md_9804_ant.value,
    efe_md_980401_ant: efe_md_980401_ant.value,
    efe_md_980402_ant: efe_md_980402_ant.value,
    efe_md_980403_ant: efe_md_980403_ant.value,
    efe_md_980404_ant: efe_md_980404_ant.value,
    efe_md_9805_ant: efe_md_9805_ant.value,
    efe_md_980501_ant: efe_md_980501_ant.value,
    efe_md_980502_ant: efe_md_980502_ant.value,
    efe_md_980503_ant: efe_md_980503_ant.value,
    efe_md_980504_ant: efe_md_980504_ant.value,
    efe_md_980505_ant: efe_md_980505_ant.value,
    efe_md_980506_ant: efe_md_980506_ant.value,
    efe_md_980507_ant: efe_md_980507_ant.value,
    efe_md_9806_ant: efe_md_9806_ant.value,
    efe_md_980601_ant: efe_md_980601_ant.value,
    efe_md_9807_ant: efe_md_9807_ant.value,
    efe_md_9808_ant: efe_md_9808_ant.value,
    efe_md_980801_ant: efe_md_980801_ant.value,
    efe_md_9809_ant: efe_md_9809_ant.value,
    efe_md_9810_ant: efe_md_9810_ant.value,
    efe_md_981001_ant: efe_md_981001_ant.value,
    efe_md_981002_ant: efe_md_981002_ant.value,
    efe_md_981003_ant: efe_md_981003_ant.value,
    efe_md_981004_ant: efe_md_981004_ant.value,
    efe_md_981005_ant: efe_md_981005_ant.value,
    efe_md_981006_ant: efe_md_981006_ant.value,
    efe_md_981007_ant: efe_md_981007_ant.value,
    efe_md_981008_ant: efe_md_981008_ant.value,
    efe_md_981009_ant: efe_md_981009_ant.value,
    efe_md_981010_ant: efe_md_981010_ant.value,
    efe_md_981011_ant: efe_md_981011_ant.value,
    efe_md_981012_ant: efe_md_981012_ant.value,
    efe_md_981013_ant: efe_md_981013_ant.value,
    efe_md_981014_ant: efe_md_981014_ant.value,
    efe_md_9820_ant: efe_md_9820_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    conciliacionganancianetaifluc_ant: conciliacionganancianeta_ant,
  })
} */

onMounted(() => {
  efe_md_980402.value = (Number(efe_md_970204.value) * -1).toFixed(2)
  efe_md_980403.value = (Number(efe_md_970205.value) * -1).toFixed(2)
  efe_md_980404.value = (Number(efe_md_970206.value) * -1).toFixed(2)
  efe_md_9701.value = (Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2)
  efe_md_9702.value = (Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2)
  efe_md_9708.value = (Number(efe_md_970801.value) + Number(efe_md_970802.value)).toFixed(2)
  efe_md_9709.value = (Number(efe_md_970901.value)).toFixed(2)
  efe_md_9710.value = (Number(efe_md_971001.value)).toFixed(2)
  efe_md_9711.value = (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)
  efe_md_97.value = (Number(efe_md_9701.value) + Number(efe_md_9702.value) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708.value) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711.value)).toFixed(2)
  efe_md_9801.value = (Number(efe_md_980101.value) + Number(efe_md_980102.value) + Number(efe_md_980103.value) + Number(efe_md_980104.value) + Number(efe_md_980105.value) + Number(efe_md_980106.value)).toFixed(2)
  efe_md_9802.value = (Number(efe_md_980201.value)).toFixed(2)
  efe_md_9803.value = (Number(efe_md_980301.value)).toFixed(2)
  efe_md_9804.value = (Number(efe_md_980401.value) + Number(efe_md_980402.value) + Number(efe_md_980403.value) + Number(efe_md_980404.value)).toFixed(2)
  efe_md_9805.value = (Number(efe_md_980501.value) + Number(efe_md_980502.value) + Number(efe_md_980503.value) + Number(efe_md_980504.value) + Number(efe_md_980505.value) + Number(efe_md_980506.value) + Number(efe_md_980507.value)).toFixed(2)
  efe_md_9806.value = (Number(efe_md_980601.value)).toFixed(2)
  efe_md_9808.value = (Number(efe_md_980801.value)).toFixed(2)
  efe_md_9810.value = (Number(efe_md_981001.value) + Number(efe_md_981002.value) + Number(efe_md_981003.value) + Number(efe_md_981004.value) + Number(efe_md_981005.value) + Number(efe_md_981006.value) + Number(efe_md_981007.value) + Number(efe_md_981008.value) + Number(efe_md_981009.value) + Number(efe_md_981010.value) + Number(efe_md_981011.value) + Number(efe_md_981012.value) + Number(efe_md_981013.value) + Number(efe_md_981014.value)).toFixed(2)
  efe_md_98.value = (Number(efe_md_9801.value) + Number(efe_md_9802.value) + Number(efe_md_9803.value) + Number(efe_md_9804.value) + Number(efe_md_9805.value) + Number(efe_md_9806.value) + Number(efe_md_9807.value) + Number(efe_md_9808.value) + Number(efe_md_9809.value) + Number(efe_md_9810.value)).toFixed(2)

  efe_md_9820.value = calcular_9820()

  efe_md_diferenciaporcuadrar.value = (Number(efe_md_9820.value) - Number(efe_md_9501.value)).toFixed(2)
  handleActionClick(1)
})
onUnmounted(() => handleActionClick(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <VRow>
          <VCol
            cols="12"
            md="12"
            style="font-size:8px"
          >
            <VRow class="font-weight-medium px-4 mb-2">
              <VCol
                cols="12"
                md="8"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >CONCEPTO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >CUENTA</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >PERIODO ACTUAL</span>
              </VCol>
<!--              <VCol
                cols="12"
                md="2"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >PERIODO ANTERIOR</span>
              </VCol>-->
            </VRow>

            <VDivider />

            <VRow class="font-weight-medium px-4 mb-2 mt-2">
              <VCol
                cols="12 bg-primary"
                md="12"
              >
                <span
                  class="text-sm"
                  style="font-size:0.900rem"
                >CONCILIACION ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN</span>
              </VCol>
            </VRow>

            <VDivider />

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">96</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_96"
                  v-model="efe_md_96"
                  label="(+) 96"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">AJUSTE POR PARTIDAS DISTINTAS AL EFECTIVO:</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">97</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_97"
                  v-model="efe_md_97"
                  label="(+) 97"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto de depreciación y amortización</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9701</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9701"
                  v-model="efe_md_9701"
                  label="(+) 9701"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades, Planta y Equipo | Depreciación</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970101</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970101"
                  v-model="efe_md_970101"
                  label="(+) 970101"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Depreciación</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970102</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970102"
                  v-model="efe_md_970102"
                  label="(+) 970102"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Intangibles | Amortización</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970103</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970103"
                  v-model="efe_md_970103"
                  label="(+) 970103"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gastos por deterioro (reversiones por deterioro) reconocidas en los resultados del periodo</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9702</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9702"
                  v-model="efe_md_9702"
                  label="(+) 9702"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970201</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970201"
                  v-model="efe_md_970201"
                  label="(+) 970201"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o reversiones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970202</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970202"
                  v-model="efe_md_970202"
                  label="(+) 970202"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes </span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970203</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970203"
                  v-model="efe_md_970203"
                  label="(+) 970203"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970204</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970204"
                  v-model="efe_md_970204"
                  label="(+) 970204"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970205</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970205"
                  v-model="efe_md_970205"
                  label="(+) 970205"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970206</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970206"
                  v-model="efe_md_970206"
                  label="(+) 970206"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Financieros Largo Plazo | Provision por deterioro</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970207</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970207"
                  v-model="efe_md_970207"
                  label="(+) 970207"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Pérdida (ganancia) de moneda extranjera no realizada</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9703</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9703"
                  v-model="efe_md_9703"
                  label="(+) 9703"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Pérdidas en cambio de moneda extranjera</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9704</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9704"
                  v-model="efe_md_9704"
                  label="(-) 9704"
                  type="number"
                  disabled
                  @blur="convertirNegativo_9704(this), handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gastos en provisiones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9705</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9705"
                  v-model="efe_md_9705"
                  label="(+) 9705"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajuste por participaciones no controladoras</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9706</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9706"
                  v-model="efe_md_9706"
                  label="(+) 9706"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajuste por pagos basados en acciones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9707</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9707"
                  v-model="efe_md_9707"
                  label="(+) 9707"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por ganancias (pérdidas) en valor razonable</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9708</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9708"
                  v-model="efe_md_9708"
                  label="(+) 9708"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos Valor razonable</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970801</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970801"
                  v-model="efe_md_970801"
                  label="(+) 970801"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios Valor razonable</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970802</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970802"
                  v-model="efe_md_970802"
                  label="(+) 970802"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto por impuesto a la renta</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9709</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9709"
                  v-model="efe_md_9709"
                  label="(+) 9709"
                  disabled
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Otros | Impuesto a la renta</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">970901</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_970901"
                  v-model="efe_md_970901"
                  label="(+) 970901"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto por participación trabajadores</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9710</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9710"
                  v-model="efe_md_9710"
                  label="(+) 9710"
                  disabled
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Otros | Participación a trabajadores</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971001</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971001"
                  v-model="efe_md_971001"
                  label="(+) 971001"
                  disabled
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Otros ajustes por partidas distintas al efectivo</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9711</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9711"
                  v-model="efe_md_9711"
                  label="(+) 9711"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades, Planta y Equipo | Bajas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971101</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971101"
                  v-model="efe_md_971101"
                  label="(+) 971101"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades, Planta y Equipo | Ajustes a PYG</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971102</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971102"
                  v-model="efe_md_971102"
                  label="(+) 971102"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971103</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971103"
                  v-model="efe_md_971103"
                  label="(+) 971103"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971104</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971104"
                  v-model="efe_md_971104"
                  label="(+) 971104"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Propiedades de Inversión | Otros Terrenos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971105</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971105"
                  v-model="efe_md_971105"
                  label="(+) 971105"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Propiedades de Inversión | Otros Edificios</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971106</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971106"
                  v-model="efe_md_971106"
                  label="(+) 971106"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Activos Intangibles | Bajas incluida la depreciación</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971107</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971107"
                  v-model="efe_md_971107"
                  label="(+) 971107"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Intangibles | Otros</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971108</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971108"
                  v-model="efe_md_971108"
                  label="(+) 971108"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Biológicos | Bajas o Ventas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971109</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971109"
                  v-model="efe_md_971109"
                  label="(+) 971109"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Biológicos | Incremento o Disminución del Valor Razonable</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971110</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971110"
                  v-model="efe_md_971110"
                  label="(+) 971110"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Impuesto Diferido | Activos Generación Reversión</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971111</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971111"
                  v-model="efe_md_971111"
                  label="(+) 971111"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Impuesto Diferido | Activos Ajustes a Resultados</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971112</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971112"
                  v-model="efe_md_971112"
                  label="(+) 971112"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Impuesto Diferido | Pasivos Generación Reversión</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971113</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971113"
                  v-model="efe_md_971113"
                  label="(+) 971113"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Impuesto Diferido | Pasivo Ajuste a Resultados</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971114</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971114"
                  v-model="efe_md_971114"
                  label="(+) 971114"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Jubilación Patronal | Costo por servicios actuales</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971115</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971115"
                  v-model="efe_md_971115"
                  label="(+) 971115"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Jubilación Patronal | Costo Financiero</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971116</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971116"
                  v-model="efe_md_971116"
                  label="(+) 971116"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Jubilación Patronal | Otros</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971117</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971117"
                  v-model="efe_md_971117"
                  label="(+) 971117"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Jubilación Patronal | Efectos de liquidaciones anticipadas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971118</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971118"
                  v-model="efe_md_971118"
                  label="(+) 971118"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Desahucio | Costo por servicios actuales</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971119</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971119"
                  v-model="efe_md_971119"
                  label="(+) 971119"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Desahucio | Costo Financiero</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971120</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971120"
                  v-model="efe_md_971120"
                  label="(+) 971120"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Desahucio | Otros</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971121</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971121"
                  v-model="efe_md_971121"
                  label="(+) 971121"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Desahucio | Efecto de liquidaciones anticipadas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971122</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971122"
                  v-model="efe_md_971122"
                  label="(+) 971122"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Financieros Largo Plazo | Intereses o actualización de antiguas inversiones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971123</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971123"
                  v-model="efe_md_971123"
                  label="(+) 971123"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Activos Financieros Largo Plazo | Ajustes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">971124</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_971124"
                  v-model="efe_md_971124"
                  label="(+) 971124"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">CAMBIOS EN ACTIVOS Y PASIVOS:</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">98</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_98"
                  v-model="efe_md_98"
                  label="(+) 98"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en cuentas por cobrar clientes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9801</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9801"
                  v-model="efe_md_9801"
                  label="(+) 9801"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010205 DEUDORES COMERCIALES Y OTRAS CUENTAS POR COBRAR NO RELACIONADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980101</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980101"
                  v-model="efe_md_980101"
                  label="(+) 980101"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010204 PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980102</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980102"
                  v-model="efe_md_980102"
                  label="(+) 980102"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010207 PROVISIÓN POR CUENTAS INCOBRABLES Y DETERIORO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980103</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980103"
                  v-model="efe_md_980103"
                  label="(+) 980103"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980104</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980104"
                  v-model="efe_md_980104"
                  label="(+) 980104"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum Cuentas Incobrables y Deterioro | Bajas o reversiones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980105</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980105"
                  v-model="efe_md_980105"
                  label="(+) 980105"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980106</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980106"
                  v-model="efe_md_980106"
                  label="(+) 980106"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en otras cuentas por cobrar</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9802</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9802"
                  v-model="efe_md_9802"
                  label="(+) 9802"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010206 DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980201</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980201"
                  v-model="efe_md_980201"
                  label="(+) 980201"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en anticipos de proveedores</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9803</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9803"
                  v-model="efe_md_9803"
                  label="(+) 9803"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|10104 SERVICIOS Y OTROS PAGOS ANTICIPADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980301</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980301"
                  v-model="efe_md_980301"
                  label="(+) 980301"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en inventarios</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9804</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9804"
                  v-model="efe_md_9804"
                  label="(+) 9804"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010301 INVENTARIOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980401</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980401"
                  v-model="efe_md_980401"
                  label="(+) 980401"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980402</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980402"
                  v-model="efe_md_980402"
                  label="(+) 980402"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Bajas</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980403</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980403"
                  v-model="efe_md_980403"
                  label="(+) 980403"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Ajustes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980404</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980404"
                  v-model="efe_md_980404"
                  label="(+) 980404"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en otros activos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9805</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9805"
                  v-model="efe_md_9805"
                  label="(+) 9805"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010201 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980501</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980501"
                  v-model="efe_md_980501"
                  label="(+) 980501"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010202 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980502</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980502"
                  v-model="efe_md_980502"
                  label="(+) 980502"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|1010203 ACTIVOS FINANCIEROS AL COSTO AMORTIZADO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980503</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980503"
                  v-model="efe_md_980503"
                  label="(+) 980503"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|10105 ACTIVOS POR IMPUESTOS CORRIENTES</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980504</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980504"
                  v-model="efe_md_980504"
                  label="(+) 980504"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|10106 ACTIVOS CORRIENTES MANTENIDOS PARA LA VENTA Y OPERACIONES DISCONTINUADAS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980505</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980505"
                  v-model="efe_md_980505"
                  label="(+) 980505"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|10107 CONSTRUCCIONES EN PROCESO (NIC 11 Y SECC.23 PYMES)</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980506</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980506"
                  v-model="efe_md_980506"
                  label="(+) 980506"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|ACTIVOS CORRIENTES|10108 OTROS ACTIVOS CORRIENTES</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980507</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980507"
                  v-model="efe_md_980507"
                  label="(+) 980507"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en cuentas por pagar comerciales</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9806</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9806"
                  v-model="efe_md_9806"
                  label="(+) 9806"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20103 CUENTAS Y DOCUMENTOS POR PAGAR</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980601</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980601"
                  v-model="efe_md_980601"
                  label="(+) 980601"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en otras cuentas por pagar</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9807</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9807"
                  v-model="efe_md_9807"
                  label="(+) 9807"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en beneficios empleados</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9808</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9808"
                  v-model="efe_md_9808"
                  label="(+) 9808"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"

                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20112 PORCION CORRIENTE DE PROVISIONES POR BENEFICIOS A EMPLEADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">980801</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_980801"
                  v-model="efe_md_980801"
                  label="(+) 980801"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"

                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en anticipos de clientes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9809</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9809"
                  v-model="efe_md_9809"
                  label="(+) 9809"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en otros pasivos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9810</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9810"
                  v-model="efe_md_9810"
                  label="(+) 9810"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20101 PASIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981001</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981001"
                  v-model="efe_md_981001"
                  label="(+) 981001"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20102 PASIVOS POR CONTRATOS DE ARRENDAMIENTO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981002</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981002"
                  v-model="efe_md_981002"
                  label="(+) 981002"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20104 OBLIGACIONES CON INSTITUCIONES FINANCIERAS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981003</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981003"
                  v-model="efe_md_981003"
                  label="(+) 981003"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20105 PROVISIONES</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981004</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981004"
                  v-model="efe_md_981004"
                  label="(+) 981004"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20106 PORCIÓN CORRIENTE DE VALORES EMITIDOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981005</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981005"
                  v-model="efe_md_981005"
                  label="(+) 981005"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20107 OTRAS OBLIGACIONES CORRIENTES</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981006</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981006"
                  v-model="efe_md_981006"
                  label="(+) 981006"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Otros|Participación a trabajadores | Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981007</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981007"
                  v-model="efe_md_981007"
                  label="(+) 981007"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">Mov Otros|Impuesto a la Renta|Provisión del año</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981008</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981008"
                  v-model="efe_md_981008"
                  label="(+) 981008"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>


            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20108 CUENTAS POR PAGAR A RELACIONADAS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981009</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981009"
                  v-model="efe_md_981009"
                  label="(+) 981009"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20109 OTROS PASIVOS FINANCIEROS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981010</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981010"
                  v-model="efe_md_981010"
                  label="(+) 981010"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20110 ANTICIPOS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981011</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981011"
                  v-model="efe_md_981011"
                  label="(+) 981011"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20111 PASIVOS DIRECTAMENTE ASOCIADOS CON LOS ACTIVOS NO CORRIENTES Y OPERACIONES DISCONTINUADAS</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981012</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981012"
                  v-model="efe_md_981012"
                  label="(+) 981012"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20113 OTROS PASIVOS CORRIENTES</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981013</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981013"
                  v-model="efe_md_981013"
                  label="(+) 981013"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm ml-5">ESF|PASIVOS CORRIENTES|20114 PASIVOS FINANCIEROS AL COSTO AMORTIZADO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">981014</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_981014"
                  v-model="efe_md_981014"
                  label="(+) 981014"
                  type="number"
                  disabled
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Flujos de efectivo netos procedentes de (utilizados en) actividades de operación</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9820</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9820"
                  v-model="efe_md_9820"
                  label="(+) 9820"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">DIFERENCIA POR CUADRAR</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm" />
              </VCol>
              <VCol
                cols="12"
                md="2"
                :style="(efe_md_diferenciaporcuadrar != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
              >
                <VTextField
                  id="efe_md_9507"
                  v-model="efe_md_diferenciaporcuadrar"
                  label="(+) 9507"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </div>
    </VCardText>
  </VForm>
</template>
