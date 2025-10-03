<script setup>
import {
  calcular_9501,
  calcular_95010101,
  calcular_95010102,
  calcular_95010201,
  calcular_95010203,
  calcular_9502,
  calcular_9503,
} from "@core/utils/formulas"
import { computed } from "vue"

const values = ref([])

import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeOperacion } from "@core/utils/initializers"

const reportStore = useReportStore()

const actividadesDeOperacion = initializeActividadesDeOperacion()

/* PERIODO ACTUAL */
let efe_md_95 = actividadesDeOperacion['efe_md_95']
let efe_md_950101 = actividadesDeOperacion['efe_md_950101']
let efe_md_95010103 = actividadesDeOperacion['efe_md_95010103']
let efe_md_95010104 = actividadesDeOperacion['efe_md_95010104']
let efe_md_95010105 = actividadesDeOperacion['efe_md_95010105']
let efe_md_950102 = actividadesDeOperacion['efe_md_950102']
let efe_md_95010202 = actividadesDeOperacion['efe_md_95010202']
let efe_md_95010204 = actividadesDeOperacion['efe_md_95010204']
let efe_md_95010205 = actividadesDeOperacion['efe_md_95010205']
let efe_md_950103 = actividadesDeOperacion['efe_md_950103']
let efe_md_950104 = actividadesDeOperacion['efe_md_950104']
let efe_md_950105 = actividadesDeOperacion['efe_md_950105']
let efe_md_950106 = actividadesDeOperacion['efe_md_950106']
let efe_md_950107 = actividadesDeOperacion['efe_md_950107']
let efe_md_950108 = actividadesDeOperacion['efe_md_950108']
let efe_md_95010803 = actividadesDeOperacion['efe_md_95010803']
let efe_md_95010804 = actividadesDeOperacion['efe_md_95010804']
let efe_md_95010805 = actividadesDeOperacion['efe_md_95010805']
let efe_md_95010806 = actividadesDeOperacion['efe_md_95010806']
let efe_md_95010807 = actividadesDeOperacion['efe_md_95010807']
let efe_md_95010808 = actividadesDeOperacion['efe_md_95010808']
let efe_md_95010811 = actividadesDeOperacion['efe_md_95010811']
let efe_md_95010812 = actividadesDeOperacion['efe_md_95010812']
let efe_md_95010813 = actividadesDeOperacion['efe_md_95010813']

let efe_md_9502_ant = ref('0')
let efe_md_9503_ant = ref('0')

let convertirNegativo_95010201 = async id => { efe_md_95010201.value = (Number(efe_md_95010201.value) > 0) ? Number(efe_md_95010201.value) * -1 : Number(efe_md_95010201.value) }
let convertirNegativo_95010202 = async id => { efe_md_95010202.value = (Number(efe_md_95010202.value) > 0) ? Number(efe_md_95010202.value) * -1 : Number(efe_md_95010202.value) }
let convertirNegativo_95010203 = async id => { efe_md_95010203.value = (Number(efe_md_95010203.value) > 0) ? Number(efe_md_95010203.value) * -1 : Number(efe_md_95010203.value) }
let convertirNegativo_95010204 = async id => { efe_md_95010204.value = (Number(efe_md_95010204.value) > 0) ? Number(efe_md_95010204.value) * -1 : Number(efe_md_95010204.value) }
let convertirNegativo_95010205 = async id => { efe_md_95010205.value = (Number(efe_md_95010205.value) > 0) ? Number(efe_md_95010205.value) * -1 : Number(efe_md_95010205.value) }
let convertirNegativo_950103 = async id => { efe_md_950103.value = (Number(efe_md_950103.value) > 0) ? Number(efe_md_950103.value) * -1 : Number(efe_md_950103.value) }
let convertirNegativo_950105 = async id => { efe_md_950105.value = (Number(efe_md_950105.value) > 0) ? Number(efe_md_950105.value) * -1 : Number(efe_md_950105.value) }
let convertirNegativo_950107 = async id => { efe_md_950107.value = (Number(efe_md_950107.value) > 0) ? Number(efe_md_950107.value) * -1 : Number(efe_md_950107.value) }

const efe_md_9501020101 = computed(() => {
  return (Number(reportStore.getSingleReportValue("costosifluc", "eri_501")) * -1).toFixed(2)
})

const efe_md_9501020102 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_9501020103 = computed(() => {
  const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_9501020104 = computed(() => {
  const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_9501020105 = computed(() => {
  const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_9501020106 = computed(() => {
  return (Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")) * -1).toFixed(2)
})

const efe_md_9501020107 = computed(() => {
  return (Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")) * -1).toFixed(2)
})

const efe_md_9501020108 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_9501020109 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020110 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020111 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020112 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20102")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20102_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020113 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20104")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20104_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020114 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020115 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020116 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020117 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
})

const efe_md_9501020118 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
})

const efe_md_9501020119 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020120 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020121 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020122 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020123 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020124 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
  const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_9501020125 = computed(() => {
  return (Number(reportStore.getSingleReportValue("otros", "mov_islr_pagos")) * -1).toFixed(2)
})

const efe_md_9501020126 = computed(() => {
  return (Number(reportStore.getSingleReportValue("otros", "mov_pt_pagos")) * -1).toFixed(2)
})

const efe_md_9501020127 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
})

const efe_md_9501020128 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
})

const efe_md_9501020129 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
})

const efe_md_9501020130 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
})

const efe_md_9501020131 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
})

const efe_md_9501020132 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
})

const efe_md_9501020133 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
})

const efe_md_9501020134 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
})

const efe_md_9501020135 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
})

const efe_md_9501020136 = computed(() => {
  return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
})

const efe_md_9501020137 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
})

const efe_md_9501020138 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
})

const efe_md_9501020139 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
})

const efe_md_9501020140 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
})

const efe_md_9501020141 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
})

const efe_md_9501020142 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
})

const efe_md_9501020143 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
})

const efe_md_9501020144 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
})

const efe_md_9501020145 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
})

const efe_md_9501020146 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
})

const efe_md_9501020147 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
})

const efe_md_9501020148 = computed(() => {
  return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
})

const efe_md_9501020149 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
})

const efe_md_9501020150 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
})

const efe_md_9501020151 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
})

const efe_md_9501020152 = computed(() => {
  return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
})

const efe_md_9501020153 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
})

const efe_md_9501020154 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
})

const efe_md_9501020155 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
})

const efe_md_9501020156 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
})

const efe_md_95010401 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40107")).toFixed(2)
})

const efe_md_95010501 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203") * -1).toFixed(2)
})

const efe_md_95010502 = computed(() => {
  return Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv") * -1).toFixed(2)
})

const efe_md_95010503 = computed(() => {
  return Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes") * -1).toFixed(2)
})

const efe_md_95010701 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
})

const efe_md_95010702 = computed(() => {
  return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")) * -1).toFixed(2)
})

const efe_md_95010703 = computed(() => {
  return Number(reportStore.getSingleReportValue("otros", "mov_islr_pagos")).toFixed(2)
})

const efe_md_95010801 = computed(() => {
  return (Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")) * -1).toFixed(2)
})

const efe_md_95010802 = computed(() => {
  return Number(reportStore.getSingleReportValue("otrosingresosifluc", "eri_403")).toFixed(2)
})

const efe_md_95010809 = computed(() => {
  return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9703")).toFixed(2)
})

const efe_md_95010810 = computed(() => {
  return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9704")).toFixed(2)
})

efe_md_95010811 = computed(() => {
  return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9705")).toFixed(2)
})

efe_md_95010812 = computed(() => {
  return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9706")).toFixed(2)
})

efe_md_95010813 = computed(() => {
  return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9707")).toFixed(2)
})

const efe_md_9501020301 = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
})

const efe_md_9501020302 = computed(() => {
  return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601"))  * -1).toFixed(2)
})

const efe_md_9501020303 = computed(() => {
  return Number(reportStore.getSingleReportValue("otros", "mov_pt_pagos")).toFixed(2)
})

const efe_md_9501010101 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40101")).toFixed(2)
})

console.log('efe_md_9501010101', efe_md_9501010101.value)

const efe_md_9501010102 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40102")).toFixed(2)
})

const efe_md_9501010103 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40103")).toFixed(2)
})

const efe_md_9501010104 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40112")).toFixed(2)
})

const efe_md_9501010105 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40113")).toFixed(2)
})

const efe_md_9501010106 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40114")).toFixed(2)
})

const efe_md_9501010107 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40115")).toFixed(2)
})

const efe_md_9501010108 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40116")).toFixed(2)
})

const efe_md_9501010109 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010205")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010205_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010110 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010111 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010112 = computed(() => {
  return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")).toFixed(2)
})

const efe_md_9501010113 = computed(() => {
  return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")).toFixed(2)
})

const efe_md_9501010114 = computed(() => {
  return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")).toFixed(2)
})

const efe_md_9501010115 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010116 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010117 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})


const efe_md_9501010118 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010119 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010120 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010121 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})

const efe_md_9501010201 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40104")).toFixed(2)
})

const efe_md_9501010202 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40105")).toFixed(2)
})

const efe_md_9501010203 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40106")).toFixed(2)
})

const efe_md_9501010204 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40108")).toFixed(2)
})

const efe_md_9501010205 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40109")).toFixed(2)
})

const efe_md_9501010206 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40110")).toFixed(2)
})

const efe_md_9501010207 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
  const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

  return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
})


// CALCULAMOS PARA MOSTRAR RESULTADOS
const efe_md_95010101 = computed(() => {
  return calcular_95010101()
})

const efe_md_95010102 = computed(() => {
  return calcular_95010102()
})

const efe_md_95010201 = computed(() => {
  return calcular_95010201()
})

const efe_md_95010203 = computed(() => {
  return calcular_95010203()
})

const efe_md_9501 = computed(() => {
  return calcular_9501()
})

const efe_md_9502 = computed(() => {
  return calcular_9502()
})

const efe_md_9503 = computed(() => {
  return calcular_9503()
})

const handleActionClick = async id => {
  efe_md_950101.value = (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)
  efe_md_950102.value = (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)
  efe_md_950104.value = (Number(efe_md_95010401.value)).toFixed(2)
  efe_md_950105.value = (Number(efe_md_95010501.value) + Number(efe_md_95010502.value) + Number(efe_md_95010503.value)).toFixed(2)
  efe_md_950107.value = (Number(efe_md_95010701.value) + Number(efe_md_95010702.value) + Number(efe_md_95010703.value)).toFixed(2)
  efe_md_950108.value = (Number(efe_md_95010801.value) + Number(efe_md_95010802.value) + Number(efe_md_95010803.value) + Number(efe_md_95010804.value) + Number(efe_md_95010805.value) + Number(efe_md_95010806.value) + Number(efe_md_95010807.value) + Number(efe_md_95010808.value) + Number(efe_md_95010809.value) + Number(efe_md_95010810.value) + Number(efe_md_95010811.value) + Number(efe_md_95010812.value) + Number(efe_md_95010813.value)).toFixed(2)
  efe_md_95.value = (Number(efe_md_9501.value) + Number(efe_md_9502.value) + Number(efe_md_9503.value)).toFixed(2)

  efe_md_9501020133.value = 0.00

  efe_md_95010803.value = '0.00'
  efe_md_95010804.value = '0.00'
  efe_md_95010805.value = '0.00'
  efe_md_95010806.value = '0.00'
  efe_md_95010807.value = '0.00'
  efe_md_95010808.value = '0.00'

  let actividadesdeoperacion = {
    efe_md_950101: efe_md_950101.value,
    efe_md_95010101: efe_md_95010101.value,
    efe_md_9501010101: efe_md_9501010101.value,
    efe_md_9501010102: efe_md_9501010102.value,
    efe_md_9501010103: efe_md_9501010103.value,
    efe_md_9501010104: efe_md_9501010104.value,
    efe_md_9501010105: efe_md_9501010105.value,
    efe_md_9501010106: efe_md_9501010106.value,
    efe_md_9501010107: efe_md_9501010107.value,
    efe_md_9501010108: efe_md_9501010108.value,
    efe_md_9501010109: efe_md_9501010109.value,
    efe_md_9501010110: efe_md_9501010110.value,
    efe_md_9501010111: efe_md_9501010111.value,
    efe_md_9501010112: efe_md_9501010112.value,
    efe_md_9501010113: efe_md_9501010113.value,
    efe_md_9501010114: efe_md_9501010114.value,
    efe_md_9501010115: efe_md_9501010115.value,
    efe_md_9501010116: efe_md_9501010116.value,
    efe_md_9501010117: efe_md_9501010117.value,
    efe_md_9501010118: efe_md_9501010118.value,
    efe_md_9501010119: efe_md_9501010119.value,
    efe_md_9501010120: efe_md_9501010120.value,
    efe_md_9501010121: efe_md_9501010121.value,
    efe_md_95010102: efe_md_95010102.value,
    efe_md_9501010201: efe_md_9501010201.value,
    efe_md_9501010202: efe_md_9501010202.value,
    efe_md_9501010203: efe_md_9501010203.value,
    efe_md_9501010204: efe_md_9501010204.value,
    efe_md_9501010205: efe_md_9501010205.value,
    efe_md_9501010206: efe_md_9501010206.value,
    efe_md_9501010207: efe_md_9501010207.value,
    efe_md_95010103: efe_md_95010103.value,
    efe_md_95010104: efe_md_95010104.value,
    efe_md_95010105: efe_md_95010105.value,
    efe_md_950102: efe_md_950102.value,
    efe_md_95010201: efe_md_95010201.value,
    efe_md_9501020101: efe_md_9501020101.value,
    efe_md_9501020102: efe_md_9501020102.value,
    efe_md_9501020103: efe_md_9501020103.value,
    efe_md_9501020104: efe_md_9501020104.value,
    efe_md_9501020105: efe_md_9501020105.value,
    efe_md_9501020106: efe_md_9501020106.value,
    efe_md_9501020107: efe_md_9501020107.value,
    efe_md_9501020108: efe_md_9501020108.value,
    efe_md_9501020109: efe_md_9501020109.value,
    efe_md_9501020110: efe_md_9501020110.value,
    efe_md_9501020111: efe_md_9501020111.value,
    efe_md_9501020112: efe_md_9501020112.value,
    efe_md_9501020113: efe_md_9501020113.value,
    efe_md_9501020114: efe_md_9501020114.value,
    efe_md_9501020115: efe_md_9501020115.value,
    efe_md_9501020116: efe_md_9501020116.value,
    efe_md_9501020117: efe_md_9501020117.value,
    efe_md_9501020118: efe_md_9501020118.value,
    efe_md_9501020119: efe_md_9501020119.value,
    efe_md_9501020120: efe_md_9501020120.value,
    efe_md_9501020121: efe_md_9501020121.value,
    efe_md_9501020122: efe_md_9501020122.value,
    efe_md_9501020123: efe_md_9501020123.value,
    efe_md_9501020124: efe_md_9501020124.value,
    efe_md_9501020125: efe_md_9501020125.value,
    efe_md_9501020126: efe_md_9501020126.value,
    efe_md_9501020127: efe_md_9501020127.value,
    efe_md_9501020128: efe_md_9501020128.value,
    efe_md_9501020129: efe_md_9501020129.value,
    efe_md_9501020130: efe_md_9501020130.value,
    efe_md_9501020131: efe_md_9501020131.value,
    efe_md_9501020132: efe_md_9501020132.value,
    efe_md_9501020133: efe_md_9501020133.value,
    efe_md_9501020134: efe_md_9501020134.value,
    efe_md_9501020135: efe_md_9501020135.value,
    efe_md_9501020136: efe_md_9501020136.value,
    efe_md_9501020137: efe_md_9501020137.value,
    efe_md_9501020138: efe_md_9501020138.value,
    efe_md_9501020139: efe_md_9501020139.value,
    efe_md_9501020140: efe_md_9501020140.value,
    efe_md_9501020141: efe_md_9501020141.value,
    efe_md_9501020142: efe_md_9501020142.value,
    efe_md_9501020143: efe_md_9501020143.value,
    efe_md_9501020144: efe_md_9501020144.value,
    efe_md_9501020145: efe_md_9501020145.value,
    efe_md_9501020146: efe_md_9501020146.value,
    efe_md_9501020147: efe_md_9501020147.value,
    efe_md_9501020148: efe_md_9501020148.value,
    efe_md_9501020149: efe_md_9501020149.value,
    efe_md_9501020150: efe_md_9501020150.value,
    efe_md_9501020151: efe_md_9501020151.value,
    efe_md_9501020152: efe_md_9501020152.value,
    efe_md_9501020153: efe_md_9501020153.value,
    efe_md_9501020154: efe_md_9501020154.value,
    efe_md_9501020155: efe_md_9501020155.value,
    efe_md_9501020156: efe_md_9501020156.value,
    efe_md_95010202: efe_md_95010202.value,
    efe_md_95010203: efe_md_95010203.value,
    efe_md_9501020301: efe_md_9501020301.value,
    efe_md_9501020302: efe_md_9501020302.value,
    efe_md_9501020303: efe_md_9501020303.value,
    efe_md_95010204: efe_md_95010204.value,
    efe_md_95010205: efe_md_95010205.value,
    efe_md_950103: efe_md_950103.value,
    efe_md_950104: efe_md_950104.value,
    efe_md_95010401: efe_md_95010401.value,
    efe_md_950105: efe_md_950105.value,
    efe_md_95010501: efe_md_95010501.value,
    efe_md_95010502: efe_md_95010502.value,
    efe_md_95010503: efe_md_95010503.value,
    efe_md_950106: efe_md_950106.value,
    efe_md_950107: efe_md_950107.value,
    efe_md_95010701: efe_md_95010701.value,
    efe_md_95010702: efe_md_95010702.value,
    efe_md_95010703: efe_md_95010703.value,
    efe_md_950108: efe_md_950108.value,
    efe_md_95010801: efe_md_95010801.value,
    efe_md_95010802: efe_md_95010802.value,
    efe_md_95010803: efe_md_95010803.value,
    efe_md_95010804: efe_md_95010804.value,
    efe_md_95010805: efe_md_95010805.value,
    efe_md_95010806: efe_md_95010806.value,
    efe_md_95010807: efe_md_95010807.value,
    efe_md_95010808: efe_md_95010808.value,
    efe_md_95010809: efe_md_95010809.value,
    efe_md_95010810: efe_md_95010810.value,
    efe_md_95010811: efe_md_95010811.value,
    efe_md_95010812: efe_md_95010812.value,
    efe_md_95010813: efe_md_95010813.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeoperacionifluc: actividadesdeoperacion,
  })
}

onMounted(() => handleActionClick(1))
onUnmounted(() => handleActionClick(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">
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
                  >ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Clases de cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950101"
                    v-model="efe_md_950101"
                    label="(+) 950101"
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
                  <span class="text-sm">Cobros procedentes de las ventas de bienes y prestación de servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010101"
                    v-model="efe_md_95010101"
                    label="(+) 95010101"
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
                  <span class="text-sm ml-5">Venta de bienes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010101"
                    v-model="efe_md_9501010101"
                    label="(+) 9501010101"
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
                  <span class="text-sm ml-5">Prestación de servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010102"
                    v-model="efe_md_9501010102"
                    label="(+) 9501010102"
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
                  <span class="text-sm ml-5">Contratos de construcción</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010103"
                    v-model="efe_md_9501010103"
                    label="(+) 9501010103"
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
                  <span class="text-sm ml-5">Descuentos en ventas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010104"
                    v-model="efe_md_9501010104"
                    label="(-) 9501010104"
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
                  <span class="text-sm ml-5">Devoluciones en ventas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010105"
                    v-model="efe_md_9501010105"
                    label="(-) 9501010105"
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
                  <span class="text-sm ml-5">Bonificación en producto</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010106"
                    v-model="efe_md_9501010106"
                    label="(-) 9501010106"
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
                  <span class="text-sm ml-5">Otras rebajas comerciales</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010107"
                    v-model="efe_md_9501010107"
                    label="(-) 9501010107"
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
                  <span class="text-sm ml-5">Utilidad en cambio</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010108"
                    v-model="efe_md_9501010108"
                    label="(+) 9501010108"
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
                  <span class="text-sm ml-5">Deudores comerciales y otras cuentas por cobrar no relacionados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010109</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010109"
                    v-model="efe_md_9501010109"
                    label="(+) 9501010109"
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
                  <span class="text-sm ml-5">Provisión por deterioro de activos financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010110</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010110"
                    v-model="efe_md_9501010110"
                    label="(+) 9501010110"
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
                  <span class="text-sm ml-5">Provisión por cuentas incobrables y detrioro</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010111</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010111"
                    v-model="efe_md_9501010111"
                    label="(+) 9501010111"
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
                  <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010112</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010112"
                    v-model="efe_md_9501010112"
                    label="(+) 9501010112"
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
                  <span class="text-sm">9501010113</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010113"
                    v-model="efe_md_9501010113"
                    label="(+) 9501010113"
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
                  <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010114</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010114"
                    v-model="efe_md_9501010114"
                    label="(+) 9501010114"
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
                  <span class="text-sm ml-5">Activos Financieros a Valor Razonable con Cambios en Resultados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010115</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010115"
                    v-model="efe_md_9501010115"
                    label="(+) 9501010115"
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
                  <span class="text-sm ml-5">Activos Financieros a Valor Razonable con Cambios en Otros Resultado Integral</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010116</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010116"
                    v-model="efe_md_9501010116"
                    label="(+) 9501010116"
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
                  <span class="text-sm ml-5">Activos Financieros al Costo Amortizado</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010117</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010117"
                    v-model="efe_md_9501010117"
                    label="(+) 9501010117"
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
                  <span class="text-sm ml-5">Activos por Impuestos Corrientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010118</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010118"
                    v-model="efe_md_9501010118"
                    label="(+) 9501010118"
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
                  <span class="text-sm ml-5">Activos Corrientes Mantenidos para la Venta y Operaciones Discontinuadas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010119</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010119"
                    v-model="efe_md_9501010119"
                    label="(+) 9501010119"
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
                  <span class="text-sm ml-5">Construcciones en Proceso (NIC 11 y Secc.23 PYMES)</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010120</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010120"
                    v-model="efe_md_9501010120"
                    label="(+) 9501010120"
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
                  <span class="text-sm ml-5">Otros Activos Corrientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010121</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010121"
                    v-model="efe_md_9501010121"
                    label="(+) 9501010121"
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
                  <span class="text-sm">Cobros procedentes de regalías, cuotas, comisiones y otros ingresos de actividades ordinarias</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010102"
                    v-model="efe_md_95010102"
                    label="(+) 95010102"
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
                  <span class="text-sm ml-5">Subvenciones del Gobierno</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010201"
                    v-model="efe_md_9501010201"
                    label="(+) 9501010201"
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
                  <span class="text-sm ml-5">Regalías</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010202"
                    v-model="efe_md_9501010202"
                    label="(+) 9501010202"
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
                  <span class="text-sm ml-5">Intereses</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010203</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010203"
                    v-model="efe_md_9501010203"
                    label="(+) 9501010203"
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
                  <span class="text-sm ml-5">Ganancia por Medición a Valor Razonable de Activos Biológicos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010204</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010204"
                    v-model="efe_md_9501010204"
                    label="(+) 9501010204"
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
                  <span class="text-sm ml-5">Ingresos por Comisiones, Prestación de Servicios, Custodia, Registro, Compensación y Liquidación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010205</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010205"
                    v-model="efe_md_9501010205"
                    label="(+) 9501010205"
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
                  <span class="text-sm ml-5">Ingresos Financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010206</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010206"
                    v-model="efe_md_9501010206"
                    label="(+) 9501010206"
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
                  <span class="text-sm ml-5">Documentos y Cuentas por Cobrar Relacionados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501010207</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501010207"
                    v-model="efe_md_9501010207"
                    label="(+) 9501010207"
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
                  <span class="text-sm">Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010103"
                    v-model="efe_md_95010103"
                    label="(+) 95010103"
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
                  <span class="text-sm">Cobros procedentes de primas y prestaciones, anualidades y otros beneficios de pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010104"
                    v-model="efe_md_95010104"
                    label="(+) 95010104"
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
                  <span class="text-sm">Otros cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95010105"
                    label="(+) 95010105"
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
                  <span class="text-sm">Clases de pagos por actvidades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950102"
                    v-model="efe_md_950102"
                    label="(+) 950102"
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
                  <span class="text-sm">Pagos a proveedores por el suministro de bienes y servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010201"
                    v-model="efe_md_95010201"
                    label="(-) 95010201"
                    type="number"
                    disabled
                    @blur="convertirNegativo_95010201(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Costo de Ventas y Producción</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020101"
                    v-model="efe_md_9501020101"
                    label="(+) 9501020101"
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
                  <span class="text-sm ml-5">Inventarios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020102"
                    v-model="efe_md_9501020102"
                    label="(+) 9501020102"
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
                  <span class="text-sm ml-5">Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020103"
                    v-model="efe_md_9501020103"
                    label="(+) 9501020103"
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
                  <span class="text-sm ml-5">Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020104"
                    v-model="efe_md_9501020104"
                    label="(+) 9501020104"
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
                  <span class="text-sm ml-5">Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020105"
                    v-model="efe_md_9501020105"
                    label="(+) 9501020105"
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
                  <span class="text-sm ml-5">Gasto de Venta</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020106"
                    v-model="efe_md_9501020106"
                    label="(+) 9501020106"
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
                  <span class="text-sm ml-5">Gasto Administrativo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020107"
                    v-model="efe_md_9501020107"
                    label="(+) 9501020107"
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
                  <span class="text-sm ml-5">Servicios y Otros Pagos Anticipados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020108"
                    v-model="efe_md_9501020108"
                    label="(+) 9501020108"
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
                  <span class="text-sm ml-5">Cuentas y Documentos por Pagar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020109</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020109"
                    v-model="efe_md_9501020109"
                    label="(+) 9501020109"
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
                  <span class="text-sm ml-5">Porción Corriente de Provisiones Por Beneficios a Empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020110</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020110"
                    v-model="efe_md_9501020110"
                    label="(+) 9501020110"
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
                  <span class="text-sm ml-5">Pasivos Financieros a Valor Razonable con Cambios en Resultados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020111</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020111"
                    v-model="efe_md_9501020111"
                    label="(+) 9501020111"
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
                  <span class="text-sm ml-5">Pasivos por Contratos de Arrendamiento</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020112</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020112"
                    v-model="efe_md_9501020112"
                    label="(+) 9501020112"
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
                  <span class="text-sm ml-5">Obligaciones con Instituciones Financieras</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020113</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020113"
                    v-model="efe_md_9501020113"
                    label="(+) 9501020113"
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
                  <span class="text-sm ml-5">Provisiones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020114</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020114"
                    v-model="efe_md_9501020114"
                    label="(+) 9501020114"
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
                  <span class="text-sm ml-5">Porción Corriente de Valores Emitidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020115</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020115"
                    v-model="efe_md_9501020115"
                    label="(+) 9501020115"
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
                  <span class="text-sm ml-5">Otras Obligaciones Corrientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020116</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020116"
                    v-model="efe_md_9501020116"
                    label="(+) 9501020116"
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
                  <span class="text-sm ml-5">Participación a Trabajadores | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020117</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020117"
                    v-model="efe_md_9501020117"
                    label="(+) 9501020117"
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
                  <span class="text-sm ml-5">Impuesto a la Renta | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020118</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020118"
                    v-model="efe_md_9501020118"
                    label="(+) 9501020118"
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
                  <span class="text-sm ml-5">Cuentas por Pagar a Relacionadas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020119</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020119"
                    v-model="efe_md_9501020119"
                    label="(+) 9501020119"
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
                  <span class="text-sm ml-5">Otros Pasivos Financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020120</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020120"
                    v-model="efe_md_9501020120"
                    label="(+) 9501020120"
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
                  <span class="text-sm ml-5">Anticipos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020121</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020121"
                    v-model="efe_md_9501020121"
                    label="(+) 9501020121"
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
                  <span class="text-sm ml-5">Pasivos Directamente Asociados con los Activos No Corrientes y Operaciones Discontinuadas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020122</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020122"
                    v-model="efe_md_9501020122"
                    label="(+) 9501020122"
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
                  <span class="text-sm ml-5">Otros Pasivos Corrientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020123</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020123"
                    v-model="efe_md_9501020123"
                    label="(+) 9501020123"
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
                  <span class="text-sm ml-5">Pasivos Financieros Al Costo Amortizado</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020124</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020124"
                    v-model="efe_md_9501020124"
                    label="(+) 9501020124"
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
                  <span class="text-sm ml-5">Mov Otros | Impuesto a las Rentas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020125</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020125"
                    v-model="efe_md_9501020125"
                    label="(+) 9501020125"
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
                  <span class="text-sm ml-5">Mov Otros | Partiipación a Trabajadores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020126</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020126"
                    v-model="efe_md_9501020126"
                    label="(+) 9501020126"
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
                  <span class="text-sm ml-5">Mov Propiedades,Planta y Equipo | Gastos de Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020127</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020127"
                    v-model="efe_md_9501020127"
                    label="(+) 9501020127"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios | Gastos de Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020128</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020128"
                    v-model="efe_md_9501020128"
                    label="(+) 9501020128"
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
                  <span class="text-sm ml-5">Mov Activos Intangibles | Gastos de Amortización</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020129</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020129"
                    v-model="efe_md_9501020129"
                    label="(+) 9501020129"
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
                  <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del Año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020130</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020130"
                    v-model="efe_md_9501020130"
                    label="(+) 9501020130"
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
                  <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o Reversiones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020131</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020131"
                    v-model="efe_md_9501020131"
                    label="(+) 9501020131"
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
                  <span class="text-sm ml-5">Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020132</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020132"
                    v-model="efe_md_9501020132"
                    label="(+) 9501020132"
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
                  <span class="text-sm">9501020133</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020133"
                    v-model="efe_md_9501020133"
                    label="(+) 9501020133"
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
                  <span class="text-sm">9501020134</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020134"
                    v-model="efe_md_9501020134"
                    label="(+) 9501020134"
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
                  <span class="text-sm">9501020135</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020135"
                    v-model="efe_md_9501020135"
                    label="(+) 9501020135"
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
                  <span class="text-sm ml-5">Mov Activos Financieros Largo Plazo | Provisión por Deterioro</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020136</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020136"
                    v-model="efe_md_9501020136"
                    label="(+) 9501020136"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos | Valor Razonable</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020137</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020137"
                    v-model="efe_md_9501020137"
                    label="(+) 9501020137"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios | Valor Razonable</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020138</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020138"
                    v-model="efe_md_9501020138"
                    label="(+) 9501020138"
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
                  <span class="text-sm ml-5">Mov Propiedades, Planta y Equipo | Bajas Incluida Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020139</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020139"
                    v-model="efe_md_9501020139"
                    label="(+) 9501020139"
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
                  <span class="text-sm ml-5">Mov Propiedades, Planta y Equipo | Ajustes a PyG</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020140</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020140"
                    v-model="efe_md_9501020140"
                    label="(+) 9501020140"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos | Bajas Incluida LA Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020141</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020141"
                    v-model="efe_md_9501020141"
                    label="(+) 9501020141"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios | Bajas Incluidas La Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020142</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020142"
                    v-model="efe_md_9501020142"
                    label="(+) 9501020142"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos | Otros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020143</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020143"
                    v-model="efe_md_9501020143"
                    label="(+) 9501020143"
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
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios | Otros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020144</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020144"
                    v-model="efe_md_9501020144"
                    label="(+) 9501020144"
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
                  <span class="text-sm ml-5">Mov Activos Intangibles | Bajas Incluida la Depreciación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020145</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020145"
                    v-model="efe_md_9501020145"
                    label="(+) 9501020145"
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
                  <span class="text-sm">9501020146</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020146"
                    v-model="efe_md_9501020146"
                    label="(+) 9501020146"
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
                  <span class="text-sm">9501020147</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020147"
                    v-model="efe_md_9501020147"
                    label="(+) 9501020147"
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
                  <span class="text-sm ml-5">Mov Activos Biológicos | Incremento o Disminución Del Valor Razonable</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020148</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020148"
                    v-model="efe_md_9501020148"
                    label="(+) 9501020148"
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
                  <span class="text-sm ml-5">Mov Jubilación Patronal | Costos por Servicios Actuales</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020149</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020149"
                    v-model="efe_md_9501020149"
                    label="(+) 9501020149"
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
                  <span class="text-sm">9501020150</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020150"
                    v-model="efe_md_9501020150"
                    label="(+) 9501020150"
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
                  <span class="text-sm">9501020151</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020151"
                    v-model="efe_md_9501020151"
                    label="(+) 9501020151"
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
                  <span class="text-sm ml-5">Mov Jubilación Patronal | Efectos de Liquidaciones Anticipadas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020152</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020152"
                    v-model="efe_md_9501020152"
                    label="(+) 9501020152"
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
                  <span class="text-sm ml-5">Mov Desahucio | Costos por Servicios Actuales</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020153</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020153"
                    v-model="efe_md_9501020153"
                    label="(+) 9501020153"
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
                  <span class="text-sm">9501020154</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020154"
                    v-model="efe_md_9501020154"
                    label="(+) 9501020154"
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
                  <span class="text-sm">9501020155</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020155"
                    v-model="efe_md_9501020155"
                    label="(+) 9501020155"
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
                  <span class="text-sm ml-5">Mov Desahucio | Efecto de Liquidaciones Anticipadas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020156</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020156"
                    v-model="efe_md_9501020156"
                    label="(+) 9501020156"
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
                  <span class="text-sm">Pagos procedentes de contratos mantenidos para intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010202"
                    v-model="efe_md_95010202"
                    label="(-) 95010202"
                    type="number"
                    disabled
                    @blur="convertirNegativo_95010202(this), handleActionClick(this)"
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
                  <span class="text-sm">Pagos a y por cuenta de los empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010203</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010203"
                    v-model="efe_md_95010203"
                    label="(-) 95010203"
                    type="number"
                    disabled
                    @blur="convertirNegativo_95010203(this), handleActionClick(this)"
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
                  <span class="text-sm">Resultados | 15% Participación Trabajadores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020301</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020301"
                    v-model="efe_md_9501020301"
                    label="(-) 9501020301"
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
                  <span class="text-sm">Mov Otros | Participación Trabajadores | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020302</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020302"
                    v-model="efe_md_9501020302"
                    label="(-) 9501020302"
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
                  <span class="text-sm">Mov Otros | Participación Trabajadores | Pagos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501020303</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501020303"
                    v-model="efe_md_9501020303"
                    label="(-) 9501020303"
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
                  <span class="text-sm">Pagos por primas y prestaciones, anualidades y otras obligaciones derivadas de las pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010204</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010204"
                    v-model="efe_md_95010204"
                    label="(-) 95010204"
                    type="number"
                    disabled
                    @blur="convertirNegativo_95010204(this), handleActionClick(this)"
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
                  <span class="text-sm">Otros pagos por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010205</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010205"
                    v-model="efe_md_95010205"
                    label="(-) 95010205"
                    type="number"
                    disabled
                    @blur="convertirNegativo_95010205(this), handleActionClick(this)"
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
                  <span class="text-sm">Dividendos pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950103"
                    v-model="efe_md_950103"
                    label="(-) 950103"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950103(this), handleActionClick(this)"
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
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950104"
                    v-model="efe_md_950104"
                    label="(+) 950104"
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
                  <span class="text-sm ml-5">Dividendos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010401</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010401"
                    v-model="efe_md_95010401"
                    label="(+) 95010401"
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
                  <span class="text-sm">Intereses pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950105"
                    v-model="efe_md_950105"
                    label="(-) 950105"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950105(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Gastos Financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010501"
                    v-model="efe_md_95010501"
                    label="(-) 95010501"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950105(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Intereses o Actualización de Antiguas Inversiones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010502</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010502"
                    v-model="efe_md_95010502"
                    label="(-) 95010502"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950105(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Ajustes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010503</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010503"
                    v-model="efe_md_95010503"
                    label="(-) 95010503"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950105(this), handleActionClick(this)"
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
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950106"
                    v-model="efe_md_950106"
                    label="(+) 950106"
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
                  <span class="text-sm">Impuestos a las ganancias pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950107"
                    v-model="efe_md_950107"
                    label="(-) 950107"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950107(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Impuestos a la Renta Causado</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010701</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010701"
                    v-model="efe_md_95010701"
                    label="(-) 95010701"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950107(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Impuestos a la Renta | Provisión del año</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010702</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010702"
                    v-model="efe_md_95010702"
                    label="(-) 95010702"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950107(this), handleActionClick(this)"
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
                  <span class="text-sm ml-5">Impuestos a la Renta | Pagos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010703</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010703"
                    v-model="efe_md_95010703"
                    label="(-) 95010703"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950107(this), handleActionClick(this)"
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
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950108"
                    v-model="efe_md_950108"
                    label="(+) 950108"
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
                  <span class="text-sm ml-5">Otros Gastos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010801</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010801"
                    v-model="efe_md_95010801"
                    label="(+) 95010801"
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
                  <span class="text-sm ml-5">Otros Ingresos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010802</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010802"
                    v-model="efe_md_95010802"
                    label="(+) 95010802"
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
                  <span class="text-sm ml-5">(-) Gasto por Impuestos Diferidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010803</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010803"
                    v-model="efe_md_95010803"
                    label="(-) 95010803"
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
                  <span class="text-sm ml-5">(+) Ingreso por Impuesto Diferido</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010804</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010804"
                    v-model="efe_md_95010804"
                    label="(+) 95010804"
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
                  <span class="text-sm ml-5">Activo | Impuesto Diferido | Generación Reversión</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010805</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010805"
                    v-model="efe_md_95010805"
                    label="(+) 95010805"
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
                  <span class="text-sm ml-5">Activo | Impuesto Diferido | Ajustes a Resultados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010806</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010806"
                    v-model="efe_md_95010806"
                    label="(+) 95010806"
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
                  <span class="text-sm ml-5">Pasivo | Impuesto Diferido | Generación Reversión</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010807</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010807"
                    v-model="efe_md_95010807"
                    label="(+) 95010807"
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
                  <span class="text-sm ml-5">Pasivo | Impuesto Diferido | Ajustes a Resultados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010808</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010808"
                    v-model="efe_md_95010808"
                    label="(+) 95010808"
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
                  <span class="text-sm ml-5">Pérdida (Ganancia) de moneda extranjera no realizada</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010809</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010809"
                    v-model="efe_md_95010809"
                    label="(+) 95010809"
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
                  <span class="text-sm ml-5">Pérdidas en cambio de moneda extranjera</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010810</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010810"
                    v-model="efe_md_95010810"
                    label="(+) 95010810"
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
                  <span class="text-sm ml-5">Ajustes por gastos en provisiones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010811</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010811"
                    v-model="efe_md_95010811"
                    label="(+) 95010811"
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
                  <span class="text-sm ml-5">Ajustes por Participaciones no Controladoras</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010812</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010812"
                    v-model="efe_md_95010812"
                    label="(+) 95010812"
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
                  <span class="text-sm ml-5">Ajustes por Pagos basados en Acciones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010813</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010813"
                    v-model="efe_md_95010813"
                    label="(+) 95010813"
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
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501"
                    v-model="efe_md_9501"
                    label="(+) 9501"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
