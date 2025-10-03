<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeGastosFinancieros, initializeGastosFinancierosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    gas_50203: null,
    gas_50203_ant: null,
  },
})

let values = ref([])

const gastosFinancieros = initializeGastosFinancieros()
const gastosFinancierosAnt = initializeGastosFinancierosAnt()

/* PERIODO ACTUAL */
let eri_50203 = gastosFinancieros['eri_50203']
let eri_5020301 = gastosFinancieros['eri_5020301']
let eri_502030101 = gastosFinancieros['eri_502030101']
let eri_502030102 = gastosFinancieros['eri_502030102']
let eri_502030103 = gastosFinancieros['eri_502030103']
let eri_502030104 = gastosFinancieros['eri_502030104']
let eri_5020302 = gastosFinancieros['eri_5020302']
let eri_502030201 = gastosFinancieros['eri_502030201']
let eri_50203020101 = gastosFinancieros['eri_50203020101']
let eri_50203020103 = gastosFinancieros['eri_50203020103']
let eri_50203020104 = gastosFinancieros['eri_50203020104']
let eri_50203020105 = gastosFinancieros['eri_50203020105']
let eri_50203020106 = gastosFinancieros['eri_50203020106']
let eri_5020303 = gastosFinancieros['eri_5020303']
let eri_502030301 = gastosFinancieros['eri_502030301']
let eri_502030302 = gastosFinancieros['eri_502030302']
let eri_502030303 = gastosFinancieros['eri_502030303']
let eri_502030304 = gastosFinancieros['eri_502030304']
let eri_502030305 = gastosFinancieros['eri_502030305']
let eri_502030306 = gastosFinancieros['eri_502030306']
let eri_502030307 = gastosFinancieros['eri_502030307']
let eri_502030308 = gastosFinancieros['eri_502030308']
let eri_5020304 = gastosFinancieros['eri_5020304']
let eri_502030401 = gastosFinancieros['eri_502030401']
let eri_502030402 = gastosFinancieros['eri_502030402']
let eri_502030403 = gastosFinancieros['eri_502030403']
let eri_502030404 = gastosFinancieros['eri_502030404']
let eri_5020305 = gastosFinancieros['eri_5020305']
let eri_502030501 = gastosFinancieros['eri_502030501']
let eri_502030502 = gastosFinancieros['eri_502030502']
let eri_502030503 = gastosFinancieros['eri_502030503']
let eri_502030504 = gastosFinancieros['eri_502030504']
let eri_5020306 = gastosFinancieros['eri_5020306']
let eri_5020307 = gastosFinancieros['eri_5020307']
let eri_5020308 = gastosFinancieros['eri_5020308']
let eri_5020309 = gastosFinancieros['eri_5020309']
let eri_5020310 = gastosFinancieros['eri_5020310']
let eri_5020311 = gastosFinancieros['eri_5020311']
let eri_5020312 = gastosFinancieros['eri_5020312']

/* PERIODO ANTERIOR */
let eri_50203_ant = gastosFinancierosAnt['eri_50203_ant']
let eri_5020301_ant = gastosFinancierosAnt['eri_5020301_ant']
let eri_502030101_ant = gastosFinancierosAnt['eri_502030101_ant']
let eri_502030102_ant = gastosFinancierosAnt['eri_502030102_ant']
let eri_502030103_ant = gastosFinancierosAnt['eri_502030103_ant']
let eri_502030104_ant = gastosFinancierosAnt['eri_502030104_ant']
let eri_5020302_ant = gastosFinancierosAnt['eri_5020302_ant']
let eri_502030201_ant = gastosFinancierosAnt['eri_502030201_ant']
let eri_50203020101_ant = gastosFinancierosAnt['eri_50203020101_ant']
let eri_50203020103_ant = gastosFinancierosAnt['eri_50203020103_ant']
let eri_50203020104_ant = gastosFinancierosAnt['eri_50203020104_ant']
let eri_50203020105_ant = gastosFinancierosAnt['eri_50203020105_ant']
let eri_50203020106_ant = gastosFinancierosAnt['eri_50203020106_ant']
let eri_5020303_ant = gastosFinancierosAnt['eri_5020303_ant']
let eri_502030301_ant = gastosFinancierosAnt['eri_502030301_ant']
let eri_502030302_ant = gastosFinancierosAnt['eri_502030302_ant']
let eri_502030303_ant = gastosFinancierosAnt['eri_502030303_ant']
let eri_502030304_ant = gastosFinancierosAnt['eri_502030304_ant']
let eri_502030305_ant = gastosFinancierosAnt['eri_502030305_ant']
let eri_502030306_ant = gastosFinancierosAnt['eri_502030306_ant']
let eri_502030307_ant = gastosFinancierosAnt['eri_502030307_ant']
let eri_502030308_ant = gastosFinancierosAnt['eri_502030308_ant']
let eri_5020304_ant = gastosFinancierosAnt['eri_5020304_ant']
let eri_502030401_ant = gastosFinancierosAnt['eri_502030401_ant']
let eri_502030402_ant = gastosFinancierosAnt['eri_502030402_ant']
let eri_502030403_ant = gastosFinancierosAnt['eri_502030403_ant']
let eri_502030404_ant = gastosFinancierosAnt['eri_502030404_ant']
let eri_5020305_ant = gastosFinancierosAnt['eri_5020305_ant']
let eri_502030501_ant = gastosFinancierosAnt['eri_502030501_ant']
let eri_502030502_ant = gastosFinancierosAnt['eri_502030502_ant']
let eri_502030503_ant = gastosFinancierosAnt['eri_502030503_ant']
let eri_502030504_ant = gastosFinancierosAnt['eri_502030504_ant']
let eri_5020306_ant = gastosFinancierosAnt['eri_5020306_ant']
let eri_5020307_ant = gastosFinancierosAnt['eri_5020307_ant']
let eri_5020308_ant = gastosFinancierosAnt['eri_5020308_ant']
let eri_5020309_ant = gastosFinancierosAnt['eri_5020309_ant']
let eri_5020310_ant = gastosFinancierosAnt['eri_5020310_ant']
let eri_5020311_ant = gastosFinancierosAnt['eri_5020311_ant']
let eri_5020312_ant = gastosFinancierosAnt['eri_5020312_ant']

const handleActionClick = async id => {
  eri_5020301.value = (Number(eri_502030101.value) + Number(eri_502030102.value) + Number(eri_502030103.value) + Number(eri_502030104.value)).toFixed(2)
  eri_5020302.value = (Number(eri_502030201.value)).toFixed(2)
  eri_502030201.value = (Number(eri_50203020101.value) + Number(eri_50203020103.value) + Number(eri_50203020104.value) + Number(eri_50203020105.value) + Number(eri_50203020106.value)).toFixed(2)
  eri_5020303.value = (Number(eri_502030301.value) + Number(eri_502030302.value) + Number(eri_502030303.value) + Number(eri_502030304.value) + Number(eri_502030305.value) + Number(eri_502030306.value) + Number(eri_502030307.value) + Number(eri_502030308.value)).toFixed(2)
  eri_5020304.value = (Number(eri_502030401.value) + Number(eri_502030402.value) + Number(eri_502030403.value) + Number(eri_502030404.value)).toFixed(2)
  eri_5020305.value = (Number(eri_502030501.value) + Number(eri_502030502.value) + Number(eri_502030503.value) + Number(eri_502030504.value)).toFixed(2)

  eri_50203.value = (Number(eri_5020301.value) + Number(eri_5020302.value) + Number(eri_5020303.value) + Number(eri_5020304.value) + Number(eri_5020305.value) + Number(eri_5020306.value) + Number(eri_5020307.value) + Number(eri_5020308.value) + Number(eri_5020309.value) + Number(eri_5020310.value) + Number(eri_5020311.value) + Number(eri_5020312.value)).toFixed(2)

  props.data.gas_50203 = eri_50203.value

  const gastosfinancieros = {
    eri_50203: eri_50203.value,
    eri_5020301: eri_5020301.value,
    eri_502030101: eri_502030101.value,
    eri_502030102: eri_502030102.value,
    eri_502030103: eri_502030103.value,
    eri_502030104: eri_502030104.value,
    eri_5020302: eri_5020302.value,
    eri_502030201: eri_502030201.value,
    eri_50203020101: eri_50203020101.value,
    eri_50203020103: eri_50203020103.value,
    eri_50203020104: eri_50203020104.value,
    eri_50203020105: eri_50203020105.value,
    eri_50203020106: eri_50203020106.value,
    eri_5020303: eri_5020303.value,
    eri_502030301: eri_502030301.value,
    eri_502030302: eri_502030302.value,
    eri_502030303: eri_502030303.value,
    eri_502030304: eri_502030304.value,
    eri_502030305: eri_502030305.value,
    eri_502030306: eri_502030306.value,
    eri_502030307: eri_502030307.value,
    eri_502030308: eri_502030308.value,
    eri_5020304: eri_5020304.value,
    eri_502030401: eri_502030401.value,
    eri_502030402: eri_502030402.value,
    eri_502030403: eri_502030403.value,
    eri_502030404: eri_502030404.value,
    eri_5020305: eri_5020305.value,
    eri_502030501: eri_502030501.value,
    eri_502030502: eri_502030502.value,
    eri_502030503: eri_502030503.value,
    eri_502030504: eri_502030504.value,
    eri_5020306: eri_5020306.value,
    eri_5020307: eri_5020307.value,
    eri_5020308: eri_5020308.value,
    eri_5020309: eri_5020309.value,
    eri_5020310: eri_5020310.value,
    eri_5020311: eri_5020311.value,
    eri_5020312: eri_5020312.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    gastosfinancierosifluc: gastosfinancieros,
  })
}

const handleActionClick_ant = async id => {
  eri_50203_ant.value = (Number(eri_5020301_ant.value) + Number(eri_5020302_ant.value) + Number(eri_5020303_ant.value) + Number(eri_5020304_ant.value) + Number(eri_5020305_ant.value) + Number(eri_5020306_ant.value) + Number(eri_5020307_ant.value) + Number(eri_5020308_ant.value) + Number(eri_5020309_ant.value) + Number(eri_5020310_ant.value) + Number(eri_5020311_ant.value) + Number(eri_5020312_ant.value)).toFixed(2)
  eri_5020301_ant.value = (Number(eri_502030101_ant.value) + Number(eri_502030102_ant.value) + Number(eri_502030103_ant.value) + Number(eri_502030104_ant.value)).toFixed(2)
  eri_5020302_ant.value = (Number(eri_502030201_ant.value)).toFixed(2)
  eri_502030201_ant.value = (Number(eri_50203020101_ant.value) + Number(eri_50203020103_ant.value) + Number(eri_50203020104_ant.value) + Number(eri_50203020105_ant.value) + Number(eri_50203020106_ant.value)).toFixed(2)
  eri_5020303_ant.value = (Number(eri_502030301_ant.value) + Number(eri_502030302_ant.value) + Number(eri_502030303_ant.value) + Number(eri_502030304_ant.value) + Number(eri_502030305_ant.value) + Number(eri_502030306_ant.value) + Number(eri_502030307_ant.value) + Number(eri_502030308_ant.value)).toFixed(2)
  eri_5020304_ant.value = (Number(eri_502030401_ant.value) + Number(eri_502030402_ant.value) + Number(eri_502030403_ant.value) + Number(eri_502030404_ant.value)).toFixed(2)
  eri_5020305_ant.value = (Number(eri_502030501_ant.value) + Number(eri_502030502_ant.value) + Number(eri_502030503_ant.value) + Number(eri_502030504_ant.value)).toFixed(2)

  props.data.gas_50203_ant = eri_50203_ant.value

  const gastosfinancieros_ant = {
    eri_50203_ant: eri_50203_ant.value,
    eri_5020301_ant: eri_5020301_ant.value,
    eri_502030101_ant: eri_502030101_ant.value,
    eri_502030102_ant: eri_502030102_ant.value,
    eri_502030103_ant: eri_502030103_ant.value,
    eri_502030104_ant: eri_502030104_ant.value,
    eri_5020302_ant: eri_5020302_ant.value,
    eri_502030201_ant: eri_502030201_ant.value,
    eri_50203020101_ant: eri_50203020101_ant.value,
    eri_50203020103_ant: eri_50203020103_ant.value,
    eri_50203020104_ant: eri_50203020104_ant.value,
    eri_50203020105_ant: eri_50203020105_ant.value,
    eri_50203020106_ant: eri_50203020106_ant.value,
    eri_5020303_ant: eri_5020303_ant.value,
    eri_502030301_ant: eri_502030301_ant.value,
    eri_502030302_ant: eri_502030302_ant.value,
    eri_502030303_ant: eri_502030303_ant.value,
    eri_502030304_ant: eri_502030304_ant.value,
    eri_502030305_ant: eri_502030305_ant.value,
    eri_502030306_ant: eri_502030306_ant.value,
    eri_502030307_ant: eri_502030307_ant.value,
    eri_502030308_ant: eri_502030308_ant.value,
    eri_5020304_ant: eri_5020304_ant.value,
    eri_502030401_ant: eri_502030401_ant.value,
    eri_502030402_ant: eri_502030402_ant.value,
    eri_502030403_ant: eri_502030403_ant.value,
    eri_502030404_ant: eri_502030404_ant.value,
    eri_5020305_ant: eri_5020305_ant.value,
    eri_502030501_ant: eri_502030501_ant.value,
    eri_502030502_ant: eri_502030502_ant.value,
    eri_502030503_ant: eri_502030503_ant.value,
    eri_502030504_ant: eri_502030504_ant.value,
    eri_5020306_ant: eri_5020306_ant.value,
    eri_5020307_ant: eri_5020307_ant.value,
    eri_5020308_ant: eri_5020308_ant.value,
    eri_5020309_ant: eri_5020309_ant.value,
    eri_5020310_ant: eri_5020310_ant.value,
    eri_5020311_ant: eri_5020311_ant.value,
    eri_5020312_ant: eri_5020312_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    gastosfinancierosifluc_ant: gastosfinancieros_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
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
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm" style="font-size:0.900rem">CUENTA</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020301" type="number" disabled v-model="eri_5020301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020301" type="number" disabled v-model="eri_5020301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTERESES POR PRESTAMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030101" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTERESES POR ARRENDAMIENTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030102" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTERESES POR VALORES EMITIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030103" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS INTERESES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030104" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020302" type="number" disabled v-model="eri_5020302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020302" type="number" disabled v-model="eri_5020302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">COMISIONES PAGADAS POR INTERMEDIACIÓN DE VALORES:</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030201" type="number" disabled v-model="eri_502030201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030201" type="number" disabled v-model="eri_502030201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR OPERACIONES BURSATILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_50203020101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020101" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_50203020101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR CONTRATOS DE UNDERWRITING</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_50203020103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020103" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_50203020103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR COMISIÓN EN OPERACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203020104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_50203020104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020104" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_50203020104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR INSCRIPCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203020105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020105" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_50203020105" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020105" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_50203020105_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR MANTENIMIENTO DE INSCRIPCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203020106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020106" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_50203020106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203020106" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_50203020106_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR PRESTACIÓN DE SERVICIOS DE ADMINISTRACIÓN Y MANEJO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020303" type="number" disabled v-model="eri_5020303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020303" type="number" disabled v-model="eri_5020303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PORTAFOLIO DE TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030301" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FONDOS ADMINISTRADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030302" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FONDOS COLECTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030303" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030304" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030304" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FIDEICOMISOS MERCANTILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030305" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030305" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030305" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030305_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ENCARGOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030306" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030306" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030306" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030306_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR CALIFICACION DE RIESGO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030307" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030307" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030307" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030307_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR REPRESENTACION DE OBLIGACIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030308</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030308" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030308" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030308" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030308_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CUSTODIA, REGISTRO, COMPENSACIÓN Y LIQUIDACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020304" type="number" disabled v-model="eri_5020304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020304" type="number" disabled v-model="eri_5020304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUSTODIA VALORES MATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030401" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030401" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030401_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUSTODIA VALORES DESMATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030402" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030402" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030402" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030402_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">COMPENSACIÓN Y LIQUIDACIÓN DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030403" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030403" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030403" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030403_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030404</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030404" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030404" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030404" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030404_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS POR SERVICIOS DE ASESORIA Y ESTRUCTURACION</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020305" type="number" disabled v-model="eri_5020305" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020305" type="number" disabled v-model="eri_5020305_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR ASESORÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030501" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030501" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030501" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030501_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR ESTRUCTURACIÓN DE OFERTA PÚBLICA DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030502" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030502" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030502" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030502_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR ESTRUCTURACIÓN DE NEGOCIOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030503</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030503" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030503" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030503" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030503_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502030504</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030504" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502030504" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502030504" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502030504_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS DE FINANCIAMIENTO DE ACTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020306" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020306" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020306" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020306_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DIFERENCIA EN CAMBIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020307" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020307" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020307" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020307_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALUACION DE INSTRUMENTOS FINANCIEROS A VALOR RAZONABLE CON CAMBIO EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020308</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020308" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020308" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020308" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020308_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PERDIDA EN VENTA DE TITULOS VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020309</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020309" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020309" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020309" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020309_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PERDIDA EN VENTA DE PROPIEDAD, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020310</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020310" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020310" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020310" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020310_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PERDIDA EN VENTA DE ACTIVOS BIOLOGICOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020311</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020311" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020311" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020311" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020311_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS GASTOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020312</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020312" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020312" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020312" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020312_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GASTOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203" type="number" disabled v-model="eri_50203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50203" type="number" disabled v-model="eri_50203_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
