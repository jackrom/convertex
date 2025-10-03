<script setup>
import { computed } from "vue"
import { calcular_9502 } from "@core/utils/formulas"

const values = ref([])

import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeInversion } from "@core/utils/initializers"

const reportStore = useReportStore()

const actividadesDeInversion = initializeActividadesDeInversion()

/* PERIODO ACTUAL */
let efe_md_9502 = actividadesDeInversion['efe_md_9502']
let efe_md_950201 = actividadesDeInversion['efe_md_950201']
let efe_md_950202 = actividadesDeInversion['efe_md_950202']
let efe_md_950203 = actividadesDeInversion['efe_md_950203']
let efe_md_950204 = actividadesDeInversion['efe_md_950204']
let efe_md_950205 = actividadesDeInversion['efe_md_950205']

let efe_md_950206 = actividadesDeInversion['efe_md_950206']
let efe_md_950207 = actividadesDeInversion['efe_md_950207']
let efe_md_950208 = actividadesDeInversion['efe_md_950208']
let efe_md_950209 = actividadesDeInversion['efe_md_950209']

let efe_md_950210 = actividadesDeInversion['efe_md_950210']
let efe_md_950211 = actividadesDeInversion['efe_md_950211']

let efe_md_950212 = actividadesDeInversion['efe_md_950212']
let efe_md_950213 = actividadesDeInversion['efe_md_950213']

let efe_md_950214 = actividadesDeInversion['efe_md_950214']
let efe_md_950215 = actividadesDeInversion['efe_md_950215']
let efe_md_950216 = actividadesDeInversion['efe_md_950216']
let efe_md_950217 = actividadesDeInversion['efe_md_950217']
let efe_md_950218 = actividadesDeInversion['efe_md_950218']
let efe_md_950219 = actividadesDeInversion['efe_md_950219']
let efe_md_950220 = actividadesDeInversion['efe_md_950220']
let efe_md_950221 = actividadesDeInversion['efe_md_950221']

let convertirNegativo_950202 = async id => { efe_md_950202.value = (Number(efe_md_950202.value) > 0) ? Number(efe_md_950202.value) * -1 : Number(efe_md_950202.value) }
let convertirNegativo_950203 = async id => { efe_md_950203.value = (Number(efe_md_950203.value) > 0) ? Number(efe_md_950203.value) * -1 : Number(efe_md_950203.value) }
let convertirNegativo_950205 = async id => { efe_md_950205.value = (Number(efe_md_950205.value) > 0) ? Number(efe_md_950205.value) * -1 : Number(efe_md_950205.value) }
let convertirNegativo_950207 = async id => { efe_md_950207.value = (Number(efe_md_950207.value) > 0) ? Number(efe_md_950207.value) * -1 : Number(efe_md_950207.value) }
let convertirNegativo_950209 = async id => { efe_md_950209.value = (Number(efe_md_950209.value) > 0) ? Number(efe_md_950209.value) * -1 : Number(efe_md_950209.value) }
let convertirNegativo_950211 = async id => { efe_md_950211.value = (Number(efe_md_950211.value) > 0) ? Number(efe_md_950211.value) * -1 : Number(efe_md_950211.value) }
let convertirNegativo_950213 = async id => { efe_md_950213.value = (Number(efe_md_950213.value) > 0) ? Number(efe_md_950213.value) * -1 : Number(efe_md_950213.value) }
let convertirNegativo_950215 = async id => { efe_md_950215.value = (Number(efe_md_950215.value) > 0) ? Number(efe_md_950215.value) * -1 : Number(efe_md_950215.value) }
let convertirNegativo_950217 = async id => { efe_md_950217.value = (Number(efe_md_950217.value) > 0) ? Number(efe_md_950217.value) * -1 : Number(efe_md_950217.value) }

const efe_md_95020501 = computed(() => {
  const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_nuevasinversiones")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95020901 = computed(() => {
  const value = reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_compras")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95021101 = computed(() => {
  const value = reportStore.getSingleReportValue("movintangibles", "mov_compras")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95021301 = computed(() => {
  const value = reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_compras_terrenos")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95021302 = computed(() => {
  const value = reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_compras_edificios")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95021303 = computed(() => {
  const value = reportStore.getSingleReportValue("movactivosbiologicos", "mov_compras_total")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

const efe_md_95022101 = computed(() => {
  const value = reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10207")
  const valueAnt = reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10207_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_95022102 = computed(() => {
  const value = reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10208")
  const valueAnt = reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10208_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_95022103 = computed(() => {
  const value = reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10209")
  const valueAnt = reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10209_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_95022104 = computed(() => {
  const value = reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10210")
  const valueAnt = reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10210_ant", true)

  return value && valueAnt ? ((Number(value) - Number(valueAnt)) * -1).toFixed(2) : "0.00"
})

const efe_md_95022105 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20202")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20202_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95022106 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20204")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20204_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95022107 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20206")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20206_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95022108 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20208")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20208_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95022109 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20209")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20209_ant", true)
  const subValue = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_2020902")
  const subValueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_2020902_ant", true)

  return value && valueAnt && subValue && subValueAnt
    ? ((Number(value) - Number(valueAnt)) - (Number(subValue) - Number(subValueAnt))).toFixed(2)
    : "0.00"
})

const efe_md_95022110 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20210")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20210_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})


efe_md_9502.value = calcular_9502()

const handleActionClick = async id => {
  efe_md_950221.value = (Number(efe_md_95022101.value) + Number(efe_md_95022102.value) + Number(efe_md_95022103.value) + Number(efe_md_95022104.value) + Number(efe_md_95022105.value) + Number(efe_md_95022106.value) + Number(efe_md_95022107.value) + Number(efe_md_95022108.value) + Number(efe_md_95022109.value) + Number(efe_md_95022110.value)).toFixed(2)
  efe_md_950213.value = (Number(efe_md_95021301.value) + Number(efe_md_95021302.value) + Number(efe_md_95021303.value)).toFixed(2)
  efe_md_950211.value = Number(efe_md_95021101.value).toFixed(2)
  efe_md_950209.value = Number(efe_md_95020901.value).toFixed(2)
  efe_md_950205.value = Number(efe_md_95020501.value).toFixed(2)

  const actividadesdeinversion = {
    efe_md_9502: efe_md_9502.value,
    efe_md_950201: efe_md_950201.value,
    efe_md_950202: efe_md_950202.value,
    efe_md_950203: efe_md_950203.value,
    efe_md_950204: efe_md_950204.value,
    efe_md_950205: efe_md_950205.value,
    efe_md_95020501: efe_md_95020501.value,
    efe_md_950206: efe_md_950206.value,
    efe_md_950207: efe_md_950207.value,
    efe_md_950208: efe_md_950208.value,
    efe_md_950209: efe_md_950209.value,
    efe_md_95020901: efe_md_95020901.value,
    efe_md_950210: efe_md_950210.value,
    efe_md_950211: efe_md_950211.value,
    efe_md_95021101: efe_md_95021101.value,
    efe_md_950212: efe_md_950212.value,
    efe_md_950213: efe_md_950213.value,
    efe_md_95021301: efe_md_95021301.value,
    efe_md_95021302: efe_md_95021302.value,
    efe_md_95021303: efe_md_95021303.value,
    efe_md_950214: efe_md_950214.value,
    efe_md_950215: efe_md_950215.value,
    efe_md_950216: efe_md_950216.value,
    efe_md_950217: efe_md_950217.value,
    efe_md_950218: efe_md_950218.value,
    efe_md_950219: efe_md_950219.value,
    efe_md_950220: efe_md_950220.value,
    efe_md_950221: efe_md_950221.value,
    efe_md_95022101: efe_md_95022101.value,
    efe_md_95022102: efe_md_95022102.value,
    efe_md_95022103: efe_md_95022103.value,
    efe_md_95022104: efe_md_95022104.value,
    efe_md_95022105: efe_md_95022105.value,
    efe_md_95022106: efe_md_95022106.value,
    efe_md_95022107: efe_md_95022107.value,
    efe_md_95022108: efe_md_95022108.value,
    efe_md_95022109: efe_md_95022109.value,
    efe_md_95022110: efe_md_95022110.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeinversionifluc: actividadesdeinversion,
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
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm" style="font-size:0.800rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm" style="font-size:0.800rem">CUENTA</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.800rem">PERIODO ACTUAL</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol cols="12 bg-primary" md="12">
                  <span class="text-sm" style="font-size:0.900rem">ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Efectivo procedentes de la venta de acciones en subsidiarias u otros negocios</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950201" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950201" v-model="efe_md_950201" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Efectivo utilizado para adquirir acciones en subsidiarias u otros negocios para tener el control</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950202" disabled @blur="convertirNegativo_950202(this); handleActionClick(this)" type="number" id="efe_md_950202" v-model="efe_md_950202" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Efectivo utilizado en la compra de participaciones no controladoras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950203" disabled @blur="convertirNegativo_950203(this); handleActionClick(this)" type="number" id="efe_md_950203" v-model="efe_md_950203" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Otros cobros por la venta de acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950204" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950204" v-model="efe_md_950204" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Otros pagos para adquirir acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950205" disabled @blur="convertirNegativo_950205(this); handleActionClick(this)" type="number" id="efe_md_950205" v-model="efe_md_950205" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Activos Financieros Largo Plazo | Nuevas Inversiones</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95020501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95020501" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95020501" v-model="efe_md_95020501" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Otros cobros por la venta de participaciones en negocios conjuntos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950206" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950206" v-model="efe_md_950206" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Otros pagos para adquirir participaciones en negocios conjuntos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950207" disabled @blur="convertirNegativo_950207(this); handleActionClick(this)" type="number" id="efe_md_950207" v-model="efe_md_950207" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Importes procedentes por la venta de propiedades, planta y equipo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950208" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950208" v-model="efe_md_950208" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Adquisiciones de propiedades, planta y equipo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950209" disabled @blur="convertirNegativo_950209(this); handleActionClick(this)" type="number" id="efe_md_950209" v-model="efe_md_950209" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Propiedades,Planta y Equipo | Compras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95020901</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95020901" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95020901" v-model="efe_md_95020901" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Importes procedentes de ventas de activos intangibles</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950210" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950210" v-model="efe_md_950210" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Compras de activos intangibles</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950211" disabled @blur="convertirNegativo_950211(this); handleActionClick(this)" type="number" id="efe_md_950211" v-model="efe_md_950211" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Activos Intangibles | Compras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95021101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 95021101" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95021101" v-model="efe_md_95021101" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Importes procedentes de otros activos a largo plazo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950212" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950212" v-model="efe_md_950212" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Compras de otros activos a largo plazo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950213" disabled @blur="convertirNegativo_950213(this); handleActionClick(this)" type="number" id="efe_md_950213" v-model="efe_md_950213" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Terrenos | Compras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95021301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 95021301" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95021301" v-model="efe_md_95021301" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Propiedades de Inversión | Edificios | Compras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95021302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 95021302" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95021302" v-model="efe_md_95021302" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Mov Activos Biológicos | Compras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95021303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 95021303" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95021303" v-model="efe_md_95021303" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950214" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950214" v-model="efe_md_950214" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Anticipos de efectivo efectuados a terceros</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950215" disabled @blur="convertirNegativo_950215(this); handleActionClick(this)" type="number" id="efe_md_950215" v-model="efe_md_950215" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Cobros procedentes del reembolso de anticipos y préstamos concedidos a terceros</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950216" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950216" v-model="efe_md_950216" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Pagos derivados de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950217" disabled @blur="convertirNegativo_950217(this); handleActionClick(this)" type="number" id="efe_md_950217" v-model="efe_md_950217" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Cobros procedentes de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950218" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950218" v-model="efe_md_950218" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950219" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950219" v-model="efe_md_950219" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950220" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950220" v-model="efe_md_950220" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950221" disabled @blur="handleActionClick(this)" type="number" id="efe_md_950221" v-model="efe_md_950221" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Derecho de Uso por Activos Arrendados</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022101" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022101" v-model="efe_md_95022101" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Otros Activos no Corrientes</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022102" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022102" v-model="efe_md_95022102" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Documentos y Cuentas por Cobrar No Relacionados</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022103" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022103" v-model="efe_md_95022103" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Documentos y Cuentas por Cobrar Relacionados</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022104" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022104" v-model="efe_md_95022104" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Cuentas y Documentos por Pagar</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022105" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022105" v-model="efe_md_95022105" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Cuentas por Pagar Relacionadas</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022106" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022106" v-model="efe_md_95022106" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Anticipos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022107" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022107" v-model="efe_md_95022107" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Otras Provisiones</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022108" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022108" v-model="efe_md_95022108" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Pasivo Diferido</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022109</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022109" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022109" v-model="efe_md_95022109" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm ml-5">Otros Pasivos No Corrientes</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">95022110</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 95022110" disabled @blur="handleActionClick(this)" type="number" id="efe_md_95022110" v-model="efe_md_95022110" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8">
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">9502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 9502" type="number" id="efe_md_9502" v-model="efe_md_9502" disabled />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
