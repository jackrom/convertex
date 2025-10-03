<script setup>
import { calcular_eri_401 } from "@core/utils/formulas"

const props = defineProps({
  data: {
    cos_501: null,
    cos_501_ant: null,
    costos_ant: null,
  },
})

import { eventBus } from "@core/utils/eventBus"

const emits = defineEmits(['accion'])

import { useReportStore } from "@/@store/reportStore"
import { initializeCostos, initializeCostosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const costos = initializeCostos()
const costosAnt = initializeCostosAnt()

/* PERIODO ACTUAL */
let eri_5 = costos['eri_5']
let eri_501 = costos['eri_501']
let eri_50101 = costos['eri_50101']
let eri_5010101 = costos['eri_5010101']
let eri_5010102 = costos['eri_5010102']
let eri_5010103 = costos['eri_5010103']
let eri_5010104 = costos['eri_5010104']
let eri_5010105 = costos['eri_5010105']
let eri_5010106 = costos['eri_5010106']
let eri_5010107 = costos['eri_5010107']
let eri_5010108 = costos['eri_5010108']
let eri_5010109 = costos['eri_5010109']
let eri_5010110 = costos['eri_5010110']
let eri_5010111 = costos['eri_5010111']
let eri_5010112 = costos['eri_5010112']
let eri_50102 = costos['eri_50102']
let eri_5010201 = costos['eri_5010201']
let eri_5010202 = costos['eri_5010202']
let eri_50103 = costos['eri_50103']
let eri_5010301 = costos['eri_5010301']
let eri_5010302 = costos['eri_5010302']
let eri_50104 = costos['eri_50104']
let eri_5010401 = costos['eri_5010401']
let eri_5010402 = costos['eri_5010402']
let eri_5010403 = costos['eri_5010403']
let eri_5010404 = costos['eri_5010404']
let eri_5010405 = costos['eri_5010405']
let eri_5010406 = costos['eri_5010406']
let eri_5010407 = costos['eri_5010407']
let eri_5010408 = costos['eri_5010408']
let eri_50105 = costos['eri_50105']
let eri_5010501 = costos['eri_5010501']
let eri_402 = costos['eri_402']
let eri_401 = costos['eri_401']
let eri_502 = costos['eri_502']

/* PERIODO ANTERIOR */
let eri_5_ant = costosAnt['eri_5_ant']
let eri_501_ant = costosAnt['eri_501_ant']
let eri_50101_ant = costosAnt['eri_50101_ant']
let eri_5010101_ant = costosAnt['eri_5010101_ant']
let eri_5010102_ant = costosAnt['eri_5010102_ant']
let eri_5010103_ant = costosAnt['eri_5010103_ant']
let eri_5010104_ant = costosAnt['eri_5010104_ant']
let eri_5010105_ant = costosAnt['eri_5010105_ant']
let eri_5010106_ant = costosAnt['eri_5010106_ant']
let eri_5010107_ant = costosAnt['eri_5010107_ant']
let eri_5010108_ant = costosAnt['eri_5010108_ant']
let eri_5010109_ant = costosAnt['eri_5010109_ant']
let eri_5010110_ant = costosAnt['eri_5010110_ant']
let eri_5010111_ant = costosAnt['eri_5010111_ant']
let eri_5010112_ant = costosAnt['eri_5010112_ant']
let eri_50102_ant = costosAnt['eri_50102_ant']
let eri_5010201_ant = costosAnt['eri_5010201_ant']
let eri_5010202_ant = costosAnt['eri_5010202_ant']
let eri_50103_ant = costosAnt['eri_50103_ant']
let eri_5010301_ant = costosAnt['eri_5010301_ant']
let eri_5010302_ant = costosAnt['eri_5010302_ant']
let eri_50104_ant = costosAnt['eri_50104_ant']
let eri_5010401_ant = costosAnt['eri_5010401_ant']
let eri_5010402_ant = costosAnt['eri_5010402_ant']
let eri_5010403_ant = costosAnt['eri_5010403_ant']
let eri_5010404_ant = costosAnt['eri_5010404_ant']
let eri_5010405_ant = costosAnt['eri_5010405_ant']
let eri_5010406_ant = costosAnt['eri_5010406_ant']
let eri_5010407_ant = costosAnt['eri_5010407_ant']
let eri_5010408_ant = costosAnt['eri_5010408_ant']
let eri_50105_ant = costosAnt['eri_50105_ant']
let eri_5010501_ant = costosAnt['eri_5010501_ant']
let eri_402_ant = costosAnt['eri_402_ant']
let eri_401_ant = costosAnt['eri_401_ant']
let eri_502_ant = costosAnt['eri_502_ant']

let convertirNegativo_5010104_ant = async id => { eri_5010104_ant.value = (Number(eri_5010104_ant.value) > 0) ? Number(eri_5010104_ant.value) * -1 : Number(eri_5010104_ant.value) }
let convertirNegativo_5010108_ant = async id => { eri_5010108_ant.value = (Number(eri_5010108_ant.value) > 0) ? Number(eri_5010108_ant.value) * -1 : Number(eri_5010108_ant.value) }
let convertirNegativo_5010110_ant = async id => { eri_5010110_ant.value = (Number(eri_5010110_ant.value) > 0) ? Number(eri_5010110_ant.value) * -1 : Number(eri_5010110_ant.value) }
let convertirNegativo_5010104 = async id => { eri_5010104.value = (Number(eri_5010104.value) > 0) ? Number(eri_5010104.value) * -1 : Number(eri_5010104.value) }
let convertirNegativo_5010108 = async id => { eri_5010108.value = (Number(eri_5010108.value) > 0) ? Number(eri_5010108.value) * -1 : Number(eri_5010108.value) }
let convertirNegativo_5010110 = async id => { eri_5010110.value = (Number(eri_5010110.value) > 0) ? Number(eri_5010110.value) * -1 : Number(eri_5010110.value) }
let values = ref([])

eri_5010110_ant = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010302_ant", true)

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_5010110 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010302")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_401 = computed(() => {
  const value = reportStore.getSingleReportValue("ingresosifluc", "eri_401")

  return value ? Number(value).toFixed(2) : "0.00"
})

eri_401_ant = computed(() => {
  const value = reportStore.getSingleReportValue("ingresosifluc_ant", "eri_401_ant", true)

  return value ? Number(value).toFixed(2) : "0.00"
})

eri_5010101.value = Number(reportStore.getReportData("activoscorrientesifluc_ant",true)['esf_1010306_ant']).toFixed(2)
console.log('eri_5010101: ', eri_5010101.value)
eri_5010104_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010306_ant", true)) * -1
})

eri_5010104 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010306")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_5010105 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010301_ant", true)

  return value ? Number(value).toFixed(2) : "0.00"
})

eri_5010108 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010301")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_5010108_ant = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010301_ant", true)

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_5010109 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010302_ant", true)

  return value ? Number(value).toFixed(2) : "0.00"
})

eri_5010111 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010305_ant", true)

  return value ? Number(value).toFixed(2) : "0.00"
})

eri_5010112_ant = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010305_ant", true)

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_5010112 = computed(() => {
  const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010305")

  return value ? (Number(value) * -1).toFixed(2) : "0.00"
})

eri_401 = computed(() => {
  return calcular_eri_401()
})

const handleActionClick = async id => {
  eri_50101.value = (Number(eri_5010101.value) + Number(eri_5010102.value) + Number(eri_5010103.value) + Number(eri_5010104.value) + Number(eri_5010105.value) + Number(eri_5010106.value) + Number(eri_5010107.value) + Number(eri_5010108.value) + Number(eri_5010109.value) + Number(eri_5010110.value) + Number(eri_5010111.value) + Number(eri_5010112.value)).toFixed(2)
  eri_50102.value = (Number(eri_5010201.value) + Number(eri_5010202.value)).toFixed(2)
  eri_50103.value = (Number(eri_5010301.value) + Number(eri_5010302.value)).toFixed(2)
  eri_50104.value = (Number(eri_5010401.value) + Number(eri_5010402.value) + Number(eri_5010403.value) + Number(eri_5010404.value) + Number(eri_5010405.value) + Number(eri_5010406.value) + Number(eri_5010407.value) + Number(eri_5010408.value)).toFixed(2)
  eri_50105.value = (Number(eri_5010501.value)).toFixed(2)
  eri_501.value = (Number(eri_50101.value) + Number(eri_50102.value) + Number(eri_50103.value) + Number(eri_50104.value) + Number(eri_50105.value)).toFixed(2)
  eri_5.value = (Number(eri_501.value) + Number(eri_502.value)).toFixed(2)
  eri_402.value = (Number(eri_401.value) - Number(eri_501.value)).toFixed(2)

  props.data.cos_501 = eri_501.value

  const costos = {
    // eri_5: eri_5.value,
    eri_501: eri_501.value,
    eri_50101: eri_50101.value,
    eri_5010101: eri_5010101.value,
    eri_5010102: eri_5010102.value,
    eri_5010103: eri_5010103.value,
    eri_5010104: eri_5010104.value,
    eri_5010105: eri_5010105.value,
    eri_5010106: eri_5010106.value,
    eri_5010107: eri_5010107.value,
    eri_5010108: eri_5010108.value,
    eri_5010109: eri_5010109.value,
    eri_5010110: eri_5010110.value,
    eri_5010111: eri_5010111.value,
    eri_5010112: eri_5010112.value,
    eri_50102: eri_50102.value,
    eri_5010201: eri_5010201.value,
    eri_5010202: eri_5010202.value,
    eri_50103: eri_50103.value,
    eri_5010301: eri_5010301.value,
    eri_5010302: eri_5010302.value,
    eri_50104: eri_50104.value,
    eri_5010401: eri_5010401.value,
    eri_5010402: eri_5010402.value,
    eri_5010403: eri_5010403.value,
    eri_5010404: eri_5010404.value,
    eri_5010405: eri_5010405.value,
    eri_5010406: eri_5010406.value,
    eri_5010407: eri_5010407.value,
    eri_5010408: eri_5010408.value,
    eri_50105: eri_50105.value,
    eri_5010501: eri_5010501.value,
    eri_402: eri_402.value,
  }

  props.data.costos = costos

  reportStore.setReportData({
    ...reportStore.reportData,
    costosifluc: costos,
  })
}

const handleActionClick_ant = async id => {
  eri_50101_ant.value = (Number(eri_5010101_ant.value) + Number(eri_5010102_ant.value) + Number(eri_5010103_ant.value) + Number(eri_5010104_ant.value) + Number(eri_5010105_ant.value) + Number(eri_5010106_ant.value) + Number(eri_5010107_ant.value) + Number(eri_5010108_ant.value) + Number(eri_5010109_ant.value) + Number(eri_5010110_ant.value) + Number(eri_5010111_ant.value) + Number(eri_5010112_ant.value)).toFixed(2)
  eri_50102_ant.value = (Number(eri_5010201_ant.value) + Number(eri_5010202_ant.value)).toFixed(2)
  eri_50103_ant.value = (Number(eri_5010301_ant.value) + Number(eri_5010302_ant.value)).toFixed(2)
  eri_50104_ant.value = (Number(eri_5010401_ant.value) + Number(eri_5010402_ant.value) + Number(eri_5010403_ant.value) + Number(eri_5010404_ant.value) + Number(eri_5010405_ant.value) + Number(eri_5010406_ant.value) + Number(eri_5010407_ant.value) + Number(eri_5010408_ant.value)).toFixed(2)
  eri_50105_ant.value = (Number(eri_5010501_ant.value)).toFixed(2)
  eri_501_ant.value = (Number(eri_50101_ant.value) + Number(eri_50102_ant.value) + Number(eri_50103_ant.value) + Number(eri_50104_ant.value) + Number(eri_50105_ant.value)).toFixed(2)
  eri_5_ant.value = (Number(eri_501_ant.value) + Number(eri_502_ant.value)).toFixed(2)
  eri_402_ant.value = (Number(eri_401_ant.value) - Number(eri_501_ant.value)).toFixed(2)
  props.data.cos_501_ant = eri_501_ant.value

  const costos_ant = {
    // eri_5_ant: eri_5_ant.value,
    eri_501_ant: eri_501_ant.value,
    eri_50101_ant: eri_50101_ant.value,
    eri_5010101_ant: eri_5010101_ant.value,
    eri_5010102_ant: eri_5010102_ant.value,
    eri_5010103_ant: eri_5010103_ant.value,
    eri_5010104_ant: eri_5010104_ant.value,
    eri_5010105_ant: eri_5010105_ant.value,
    eri_5010106_ant: eri_5010106_ant.value,
    eri_5010107_ant: eri_5010107_ant.value,
    eri_5010108_ant: eri_5010108_ant.value,
    eri_5010109_ant: eri_5010109_ant.value,
    eri_5010110_ant: eri_5010110_ant.value,
    eri_5010111_ant: eri_5010111_ant.value,
    eri_5010112_ant: eri_5010112_ant.value,
    eri_50102_ant: eri_50102_ant.value,
    eri_5010201_ant: eri_5010201_ant.value,
    eri_5010202_ant: eri_5010202_ant.value,
    eri_50103_ant: eri_50103_ant.value,
    eri_5010301_ant: eri_5010301_ant.value,
    eri_5010302_ant: eri_5010302_ant.value,
    eri_50104_ant: eri_50104_ant.value,
    eri_5010401_ant: eri_5010401_ant.value,
    eri_5010402_ant: eri_5010402_ant.value,
    eri_5010403_ant: eri_5010403_ant.value,
    eri_5010404_ant: eri_5010404_ant.value,
    eri_5010405_ant: eri_5010405_ant.value,
    eri_5010406_ant: eri_5010406_ant.value,
    eri_5010407_ant: eri_5010407_ant.value,
    eri_5010408_ant: eri_5010408_ant.value,
    eri_50105_ant: eri_50105_ant.value,
    eri_5010501_ant: eri_5010501_ant.value,
    eri_402_ant: eri_402_ant.value,
  }

  props.data.costos_ant = costos_ant

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    costosifluc_ant: costos_ant,
  })
}

onMounted(() => {
  handleActionClick(1)
  eventBus.on('actualizacionLocalStorage', eri_5010110)
})
onMounted(() => {
  handleActionClick_ant(1)
  eventBus.on('actualizacionLocalStorage', eri_5010110_ant)
})
onUnmounted(() => handleActionClick(1))
onUnmounted(() => handleActionClick_ant(1))
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
              style="font-size:8px;"
            >
              <VRow class="font-weight-medium px-4 mb-2">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >CONCEPTO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >CUENTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >PERIODO ACTUAL</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <!--
                <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                <span class="text-sm">COSTOS Y GASTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                <span class="text-sm">5</span>
                </VCol>
                <VCol cols="12" md="2" >
                <VTextField label="(+) 5" type="number" disabled v-model="eri_5" />
                </VCol>
                <VCol cols="12" md="2" >
                <VTextField label="(+) 5" type="number" disabled v-model="eri_5_ant" />
                </VCol>
                </VRow>
              -->

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">MATERIALES UTILIZADOS O PRODUCTOS VENDIDOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">50101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50101"
                    label="(+) 50101"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50101_ant"
                    label="(+) 50101"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) INVENTARIO INICIAL DE BIENES NO PRODUCIDOS POR LA COMPAÑIA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010101"
                    label="(+) 5010101"
                    disabled
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010101_ant"
                    label="(+) 5010101"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) COMPRAS NETAS LOCALES DE BIENES NO PRODUCIDOS POR LA COMPAÑIA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010102"
                    label="(+) 5010102"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010102_ant"
                    label="(+) 5010102"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) IMPORTACIONES DE BIENES NO PRODUCIDOS POR LA COMPAÑIA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010103"
                    label="(+) 5010103"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010103_ant"
                    label="(+) 5010103"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(-) INVENTARIO FINAL DE BIENES NO PRODUCIDOS POR LA COMPAÑIA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010104"
                    label="(-) 5010104"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010104(eri_5010104); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010104_ant"
                    label="(-) 5010104"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010104_ant(eri_5010104); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) INVENTARIO INICIAL DE MATERIA PRIMA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010105"
                    label="(+) 5010105"
                    disabled
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010105_ant"
                    label="(+) 5010105"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) COMPRAS NETAS LOCALES DE MATERIA PRIM</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010106"
                    label="(+) 5010106"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010106_ant"
                    label="(+) 5010106"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) IMPORTACIONES DE MATERIA PRIMA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010107"
                    label="(+) 5010107"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010107_ant"
                    label="(+) 5010107"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(-) INVENTARIO FINAL DE MATERIA PRIMA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010108"
                    label="(-) 5010108"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010108(eri_5010108); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010108_ant"
                    label="(-) 5010108"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010108_ant(eri_5010108); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) INVENTARIO INICIAL DE PRODUCTOS EN PROCESO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010109</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010109"
                    label="(+) 5010109"
                    disabled
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010109_ant"
                    label="(+) 5010109"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(-) INVENTARIO FINAL DE PRODUCTOS EN PROCESO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010110</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010110"
                    label="(-) 5010110"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010110(eri_5010110); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010110_ant"
                    label="(-) 5010110"
                    disabled
                    type="number"
                    @blur="convertirNegativo_5010110_ant(eri_5010110); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(+) INVENTARIO INICIAL PRODUCTOS TERMINADOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010111</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010111"
                    label="(+) 5010111"
                    disabled
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010111_ant"
                    label="(+) 5010111"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">(-) INVENTARIO FINAL DE PRODUCTOS TERMINADOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010112</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010112"
                    label="(-) 5010112"
                    disabled
                    type="number"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010112_ant"
                    label="(-) 5010112"
                    disabled
                    type="number"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">(+) MANO DE OBRA DIRECTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">50102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50102"
                    label="(+) 50102"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50102_ant"
                    label="(+) 50102"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">SUELDOS Y BENEFICIOS SOCIALES</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010201"
                    label="(+) 5010201"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010201_ant"
                    label="(+) 5010201"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">GASTOS PLANES DE BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010202"
                    label="(+) 5010202"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010202_ant"
                    label="(+) 5010202"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">(+) MANO DE OBRA INDIRECTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">50103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50103"
                    label="(+) 50103"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50103_ant"
                    label="(+) 50103"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">SUELDOS Y BENEFICIOS SOCIALES</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010301</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010301"
                    label="(+) 5010301"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010301_ant"
                    label="(+) 5010301"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">GASTO PLANES DE BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010302</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010302"
                    label="(+) 5010302"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010302_ant"
                    label="(+) 5010302"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">(+) OTROS COSTOS INDIRECTOS DE FABRICACION</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">50104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50104"
                    label="(+) 50104"
                    disabled
                    @type="number"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50104_ant"
                    label="(+) 50104"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">DEPRECIACIÓN PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010401</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010401"
                    label="(+) 5010401"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010401_ant"
                    label="(+) 5010401"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">DETERIORO O PERDIDAS DE ACTIVOS BIOLOGICOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010402</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010402"
                    label="(+) 5010402"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010402_ant"
                    label="(+) 5010402"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">DETERIORO DE PROPIEDAD, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010403</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010403"
                    label="(+) 5010403"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010403_ant"
                    label="(+) 5010403"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">EFECTO VALOR NETO DE REALIZACION DE INVENTARIOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010404</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010404"
                    label="(+) 5010404"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010404_ant"
                    label="(+) 5010404"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">GASTO POR GARANTIAS EN VENTA DE PRODUCTOS O SERVICIOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010405</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010405"
                    label="(+) 5010405"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010405_ant"
                    label="(+) 5010405"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">MANTENIMIENTO Y REPARACIONES</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010406</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010406"
                    label="(+) 5010406"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010406_ant"
                    label="(+) 5010406"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">SUMINISTROS MATERIALES Y REPUESTOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010407</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010407"
                    label="(+) 5010407"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010407_ant"
                    label="(+) 5010407"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">OTROS COSTOS DE PRODUCCIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010408</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010408"
                    label="(+) 5010408"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010408_ant"
                    label="(+) 5010408"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-7">COSTOS DE CONTRATOS DE CONSTRUCCIONES</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">50105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50105"
                    label="(+) 50105"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_50105_ant"
                    label="(+) 50105"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-9">COSTOS DE ACUERDO A PORCENTAJES O GRADOS DE TERMINACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">5010501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010501"
                    label="(+) 5010501"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_5010501_ant"
                    label="(+) 5010501"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">COSTOS DE VENTA Y PRODUCCIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_501"
                    label="(+) 501"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_501_ant"
                    label="(+) 501"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">GANANCIA BRUTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">402</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_402"
                    label="(+) 402"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_402_ant"
                    label="(+) 402"
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
