<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializePatrimonioAntRefs, initializePatrimonioRefs } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    pat: null,
    pat_301: null,
    pat_302: null,
    pat_303: null,
    pat_30401: null,
    pat_30402: null,
    pat_30501: null,
    pat_30502: null,
    pat_30503: null,
    pat_30504: null,
    pat_30601: null,
    pat_30602: null,
    pat_30603: null,
    pat_30604: null,
    pat_30605: null,
    pat_30606: null,
    pat_30607: null,
    pat_307: null,
    pat_30701: null,
    pat_30702: null,
    pat_301_ant: null,
    pat_302_ant: null,
    pat_303_ant: null,
    pat_30401_ant: null,
    pat_30402_ant: null,
    pat_30501_ant: null,
    pat_30502_ant: null,
    pat_30503_ant: null,
    pat_30504_ant: null,
    pat_30601_ant: null,
    pat_30602_ant: null,
    pat_30603_ant: null,
    pat_30604_ant: null,
    pat_30605_ant: null,
    pat_30606_ant: null,
    pat_30607_ant: null,
    pat_307_ant: null,
    pat_30701_ant: null,
    pat_30702_ant: null,
    pat_ant: null,
  },
})

const patrimonio = initializePatrimonioRefs()
const patrimonioAnt = initializePatrimonioAntRefs()

/* PERIODO ACTUAL */
let esf_3 = patrimonio['esf_3']
let esf_30 = patrimonio['esf_30']
let esf_301 = patrimonio['esf_301']
let esf_30101 = patrimonio['esf_30101']
let esf_30102 = patrimonio['esf_30102']
let esf_30103 = patrimonio['esf_30103']
let esf_30104 = patrimonio['esf_30104']
let esf_30105 = patrimonio['esf_30105']
let esf_3010501 = patrimonio['esf_3010501']
let esf_3010502 = patrimonio['esf_3010502']
let esf_302 = patrimonio['esf_302']
let esf_303 = patrimonio['esf_303']
let esf_304 = patrimonio['esf_304']
let esf_30401 = patrimonio['esf_30401']
let esf_30402 = patrimonio['esf_30402']
let esf_305 = patrimonio['esf_305']
let esf_30501 = patrimonio['esf_30501']
let esf_30502 = patrimonio['esf_30502']
let esf_30503 = patrimonio['esf_30503']
let esf_30504 = patrimonio['esf_30504']
let esf_306 = patrimonio['esf_306']
let esf_30601 = patrimonio['esf_30601']
let esf_30602 = patrimonio['esf_30602']
let esf_30603 = patrimonio['esf_30603']
let esf_30604 = patrimonio['esf_30604']
let esf_30605 = patrimonio['esf_30605']
let esf_30606 = patrimonio['esf_30606']
let esf_30607 = patrimonio['esf_30607']
let esf_307 = patrimonio['esf_307']
let esf_30701 = patrimonio['esf_30701']
let esf_30702 = patrimonio['esf_30702']
let esf_31 = patrimonio['esf_31']

/* PERIODO ACTUAL */
let esf_3_ant = patrimonioAnt['esf_3_ant']
let esf_30_ant = patrimonioAnt['esf_30_ant']
let esf_301_ant = patrimonioAnt['esf_301_ant']
let esf_30101_ant = patrimonioAnt['esf_30101_ant']
let esf_30102_ant = patrimonioAnt['esf_30102_ant']
let esf_30103_ant = patrimonioAnt['esf_30103_ant']
let esf_30104_ant = patrimonioAnt['esf_30104_ant']
let esf_30105_ant = patrimonioAnt['esf_30105_ant']
let esf_3010501_ant = patrimonioAnt['esf_3010501_ant']
let esf_3010502_ant = patrimonioAnt['esf_3010502_ant']
let esf_302_ant = patrimonioAnt['esf_302_ant']
let esf_303_ant = patrimonioAnt['esf_303_ant']
let esf_304_ant = patrimonioAnt['esf_304_ant']
let esf_30401_ant = patrimonioAnt['esf_30401_ant']
let esf_30402_ant = patrimonioAnt['esf_30402_ant']
let esf_305_ant = patrimonioAnt['esf_305_ant']
let esf_30501_ant = patrimonioAnt['esf_30501_ant']
let esf_30502_ant = patrimonioAnt['esf_30502_ant']
let esf_30503_ant = patrimonioAnt['esf_30503_ant']
let esf_30504_ant = patrimonioAnt['esf_30504_ant']
let esf_306_ant = patrimonioAnt['esf_306_ant']
let esf_30601_ant = patrimonioAnt['esf_30601_ant']
let esf_30602_ant = patrimonioAnt['esf_30602_ant']
let esf_30603_ant = patrimonioAnt['esf_30603_ant']
let esf_30604_ant = patrimonioAnt['esf_30604_ant']
let esf_30605_ant = patrimonioAnt['esf_30605_ant']
let esf_30606_ant = patrimonioAnt['esf_30606_ant']
let esf_30607_ant = patrimonioAnt['esf_30607_ant']
let esf_307_ant = patrimonioAnt['esf_307_ant']
let esf_30701_ant = patrimonioAnt['esf_30701_ant']
let esf_30702_ant = patrimonioAnt['esf_30702_ant']
let esf_31_ant = patrimonioAnt['esf_31_ant']
let values = ref([])

let convertirNegativo_30102_ant = async id => { esf_30102_ant.value = (Number(esf_30102_ant.value) > 0) ? Number(esf_30102_ant.value) * -1 : Number(esf_30102_ant.value) }
let convertirNegativo_30602_ant = async id => { esf_30602_ant.value = (Number(esf_30602_ant.value) > 0) ? Number(esf_30602_ant.value) * -1 : Number(esf_30602_ant.value) }
let convertirNegativo_30702_ant = async id => { esf_30702_ant.value = (Number(esf_30702_ant.value) > 0) ? Number(esf_30702_ant.value) * -1 : Number(esf_30702_ant.value) }

let convertirNegativo_30102 = async id => { esf_30102.value = (Number(esf_30102.value) > 0) ? Number(esf_30102.value) * -1 : Number(esf_30102.value) }
let convertirNegativo_30602 = async id => { esf_30602.value = (Number(esf_30602.value) > 0) ? Number(esf_30602.value) * -1 : Number(esf_30602.value) }
let convertirNegativo_30702 = async id => { esf_30702.value = (Number(esf_30702.value) > 0) ? Number(esf_30702.value) * -1 : Number(esf_30702.value) }

let handleActionClick = async id => {
  esf_3.value = (Number(esf_30.value) + Number(esf_31.value)).toFixed(2)
  esf_30.value = (Number(esf_301.value) + Number(esf_302.value) + Number(esf_303.value) + Number(esf_304.value) + Number(esf_305.value) + Number(esf_306.value) + Number(esf_307.value)).toFixed(2)
  esf_301.value = (Number(esf_30101.value) + Number(esf_30102.value) + Number(esf_30103.value) + Number(esf_30104.value) + Number(esf_30105.value)).toFixed(2)
  esf_304.value = (Number(esf_30401.value) + Number(esf_30402.value)).toFixed(2)
  esf_305.value = (Number(esf_30501.value) + Number(esf_30502.value) + Number(esf_30503.value) + Number(esf_30504.value)).toFixed(2)
  esf_30105.value = (Number(esf_3010501.value) + Number(esf_3010502.value)).toFixed(2)
  esf_306.value = (Number(esf_30601.value) + Number(esf_30602.value) + Number(esf_30603.value) + Number(esf_30604.value) + Number(esf_30605.value) + Number(esf_30606.value) + Number(esf_30607.value)).toFixed(2)
  esf_307.value = (Number(esf_30701.value) + Number(esf_30702.value)).toFixed(2)

  props.data.pat = (typeof esf_3.value === 'string') ? Number(esf_3.value) : esf_3.value
  props.data.pat_301 = (typeof esf_301.value === 'string') ? Number(esf_301.value) : esf_301.value
  props.data.pat_302 = (typeof esf_302.value === 'string') ? Number(esf_302.value) : esf_302.value
  props.data.pat_303 = (typeof esf_303.value === 'string') ? Number(esf_303.value) : esf_303.value
  props.data.pat_30401 = (typeof esf_30401.value === 'string') ? Number(esf_30401.value) : esf_30401.value
  props.data.pat_30402 = (typeof esf_30402.value === 'string') ? Number(esf_30402.value) : esf_30402.value
  props.data.pat_30501 = (typeof esf_30501.value === 'string') ? Number(esf_30501.value) : esf_30501.value
  props.data.pat_30502 = (typeof esf_30502.value === 'string') ? Number(esf_30502.value) : esf_30502.value
  props.data.pat_30503 = (typeof esf_30503.value === 'string') ? Number(esf_30503.value) : esf_30503.value
  props.data.pat_30504 = (typeof esf_30504.value === 'string') ? Number(esf_30504.value) : esf_30504.value
  props.data.pat_30601 = (typeof esf_30601.value === 'string') ? Number(esf_30601.value) : esf_30601.value
  props.data.pat_30602 = (typeof esf_30602.value === 'string') ? Number(esf_30602.value) : esf_30602.value
  props.data.pat_30603 = (typeof esf_30603.value === 'string') ? Number(esf_30603.value) : esf_30603.value
  props.data.pat_30604 = (typeof esf_30604.value === 'string') ? Number(esf_30604.value) : esf_30604.value
  props.data.pat_30605 = (typeof esf_30605.value === 'string') ? Number(esf_30605.value) : esf_30605.value
  props.data.pat_30606 = (typeof esf_30606.value === 'string') ? Number(esf_30606.value) : esf_30606.value
  props.data.pat_30607 = (typeof esf_30607.value === 'string') ? Number(esf_30607.value) : esf_30607.value
  props.data.pat_30701 = (typeof esf_30701.value === 'string') ? Number(esf_30701.value) : esf_30701.value
  props.data.pat_30702 = (typeof esf_30702.value === 'string') ? Number(esf_30702.value) : esf_30702.value
  props.data.pat_307 = (typeof esf_307.value === 'string') ? Number(esf_307.value) : esf_307.value

  const patrimonio = {
    esf_3: esf_3.value,
    esf_30: esf_30.value,
    esf_301: esf_301.value,
    esf_30101: esf_30101.value,
    esf_30102: esf_30102.value,
    esf_30103: esf_30103.value,
    esf_30104: esf_30104.value,
    esf_30105: esf_30105.value,
    esf_3010501: esf_3010501.value,
    esf_3010502: esf_3010502.value,
    esf_302: esf_302.value,
    esf_303: esf_303.value,
    esf_304: esf_304.value,
    esf_30401: esf_30401.value,
    esf_30402: esf_30402.value,
    esf_305: esf_305.value,
    esf_30501: esf_30501.value,
    esf_30502: esf_30502.value,
    esf_30503: esf_30503.value,
    esf_30504: esf_30504.value,
    esf_306: esf_306.value,
    esf_30601: esf_30601.value,
    esf_30602: esf_30602.value,
    esf_30603: esf_30603.value,
    esf_30604: esf_30604.value,
    esf_30605: esf_30605.value,
    esf_30606: esf_30606.value,
    esf_30607: esf_30607.value,
    esf_307: esf_307.value,
    esf_30701: esf_30701.value,
    esf_30702: esf_30702.value,
    esf_31: esf_31.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    patrimonioifluc: patrimonio,
  })
}

let handleActionClick_ant = async id => {
  esf_3_ant.value = (Number(esf_30_ant.value) + Number(esf_31_ant.value)).toFixed(2)
  esf_30_ant.value = (Number(esf_301_ant.value) + Number(esf_302_ant.value) + Number(esf_303_ant.value) + Number(esf_304_ant.value) + Number(esf_305_ant.value) + Number(esf_306_ant.value) + Number(esf_307_ant.value)).toFixed(2)
  esf_301_ant.value = (Number(esf_30101_ant.value) + Number(esf_30102_ant.value) + Number(esf_30103_ant.value) + Number(esf_30104_ant.value) + Number(esf_30105_ant.value)).toFixed(2)
  esf_30105_ant.value = (Number(esf_3010501_ant.value) + Number(esf_3010502_ant.value)).toFixed(2)
  esf_304_ant.value = (Number(esf_30401_ant.value) + Number(esf_30402_ant.value)).toFixed(2)
  esf_305_ant.value = (Number(esf_30501_ant.value) + Number(esf_30502_ant.value) + Number(esf_30503_ant.value) + Number(esf_30504_ant.value)).toFixed(2)
  esf_306_ant.value = (Number(esf_30601_ant.value) + Number(esf_30602_ant.value) + Number(esf_30603_ant.value) + Number(esf_30604_ant.value) + Number(esf_30605_ant.value) + Number(esf_30606_ant.value) + Number(esf_30607_ant.value)).toFixed(2)
  esf_307_ant.value = (Number(esf_30701_ant.value) + Number(esf_30702_ant.value)).toFixed(2)

  props.data.pat_ant = (typeof esf_3_ant.value === 'string') ? Number(esf_3_ant.value) : esf_3_ant.value
  props.data.pat_301_ant = (typeof esf_301_ant.value === 'string') ? Number(esf_301_ant.value) : esf_301_ant.value
  props.data.pat_302_ant = (typeof esf_302_ant.value === 'string') ? Number(esf_302_ant.value) : esf_302_ant.value
  props.data.pat_303_ant = (typeof esf_303_ant.value === 'string') ? Number(esf_303_ant.value) : esf_303_ant.value
  props.data.pat_30401_ant = (typeof esf_30401_ant.value === 'string') ? Number(esf_30401_ant.value) : esf_30401_ant.value
  props.data.pat_30402_ant = (typeof esf_30402_ant.value === 'string') ? Number(esf_30402_ant.value) : esf_30402_ant.value
  props.data.pat_30501_ant = (typeof esf_30501_ant.value === 'string') ? Number(esf_30501_ant.value) : esf_30501_ant.value
  props.data.pat_30502_ant = (typeof esf_30502_ant.value === 'string') ? Number(esf_30502_ant.value) : esf_30502_ant.value
  props.data.pat_30503_ant = (typeof esf_30503_ant.value === 'string') ? Number(esf_30503_ant.value) : esf_30503_ant.value
  props.data.pat_30504_ant = (typeof esf_30504_ant.value === 'string') ? Number(esf_30504_ant.value) : esf_30504_ant.value
  props.data.pat_30601_ant = (typeof esf_30601_ant.value === 'string') ? Number(esf_30601_ant.value) : esf_30601_ant.value
  props.data.pat_30602_ant = (typeof esf_30602_ant.value === 'string') ? Number(esf_30602_ant.value) : esf_30602_ant.value
  props.data.pat_30603_ant = (typeof esf_30603_ant.value === 'string') ? Number(esf_30603_ant.value) : esf_30603_ant.value
  props.data.pat_30604_ant = (typeof esf_30604_ant.value === 'string') ? Number(esf_30604_ant.value) : esf_30604_ant.value
  props.data.pat_30605_ant = (typeof esf_30605_ant.value === 'string') ? Number(esf_30605_ant.value) : esf_30605_ant.value
  props.data.pat_30606_ant = (typeof esf_30606_ant.value === 'string') ? Number(esf_30606_ant.value) : esf_30606_ant.value
  props.data.pat_30607_ant = (typeof esf_30607_ant.value === 'string') ? Number(esf_30607_ant.value) : esf_30607_ant.value
  props.data.pat_30701_ant = (typeof esf_30701_ant.value === 'string') ? Number(esf_30701_ant.value) : esf_30701_ant.value
  props.data.pat_30702_ant = (typeof esf_30702_ant.value === 'string') ? Number(esf_30702_ant.value) : esf_30702_ant.value
  props.data.pat_307_ant = (typeof esf_307_ant.value === 'string') ? Number(esf_307_ant.value) : esf_307_ant.value

  const patrimonio_ant = {
    esf_3_ant: esf_3_ant.value,
    esf_30_ant: esf_30_ant.value,
    esf_301_ant: esf_301_ant.value,
    esf_30101_ant: esf_30101_ant.value,
    esf_30102_ant: esf_30102_ant.value,
    esf_30103_ant: esf_30103_ant.value,
    esf_30104_ant: esf_30104_ant.value,
    esf_30105_ant: esf_30105_ant.value,
    esf_3010501_ant: esf_3010501_ant.value,
    esf_3010502_ant: esf_3010502_ant.value,
    esf_302_ant: esf_302_ant.value,
    esf_303_ant: esf_303_ant.value,
    esf_304_ant: esf_304_ant.value,
    esf_30401_ant: esf_30401_ant.value,
    esf_30402_ant: esf_30402_ant.value,
    esf_305_ant: esf_305_ant.value,
    esf_30501_ant: esf_30501_ant.value,
    esf_30502_ant: esf_30502_ant.value,
    esf_30503_ant: esf_30503_ant.value,
    esf_30504_ant: esf_30504_ant.value,
    esf_306_ant: esf_306_ant.value,
    esf_30601_ant: esf_30601_ant.value,
    esf_30602_ant: esf_30602_ant.value,
    esf_30603_ant: esf_30603_ant.value,
    esf_30604_ant: esf_30604_ant.value,
    esf_30605_ant: esf_30605_ant.value,
    esf_30606_ant: esf_30606_ant.value,
    esf_30607_ant: esf_30607_ant.value,
    esf_307_ant: esf_307_ant.value,
    esf_30701_ant: esf_30701_ant.value,
    esf_30702_ant: esf_30702_ant.value,
    esf_31_ant: esf_31_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    patrimonioifluc_ant: patrimonio_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
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

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">PATRIMONIO NETO ATRIBUIBLE A LOS PROPIETARIOS DE LA CONTROLADORA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30" type="number" disabled v-model="esf_30" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30" type="number" disabled v-model="esf_30_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CAPITAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 301" type="number" disabled v-model="esf_301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 301" type="number" disabled v-model="esf_301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CAPITAL SUSCRITO O ASIGNADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30101" type="number" v-model="esf_30101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30101" type="number" v-model="esf_30101_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">(-) CAPITAL SUSCRITO NO PAGADO, ACCIONES EN TESORERÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30102" type="number" v-model="esf_30102" @blur="convertirNegativo_30102(this); handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30102" type="number" v-model="esf_30102_ant" @blur="convertirNegativo_30102_ant(this); handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">FONDO PATRIMONIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30103" type="number" v-model="esf_30103" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"    />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30103" type="number" v-model="esf_30103_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"    />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PATRIMONIO DE LOS NEGOCIOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30104" type="number" v-model="esf_30104" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30104" type="number" v-model="esf_30104_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PATRIMONIO DE LOS FONDOS DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30105" type="number" disabled v-model="esf_30105" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30105" type="number" disabled v-model="esf_30105_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PATRIMONIO DEL FONDO ADMINISTRADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">3010501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3010501" type="number" v-model="esf_3010501" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3010501" type="number" v-model="esf_3010501_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PATRIMONIO DEL FONDO COLECTIVO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">3010502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3010502" type="number" v-model="esf_3010502" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3010502" type="number" v-model="esf_3010502_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>


              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 302" type="number" v-model="esf_302" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 302" type="number" v-model="esf_302_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PRIMA POR EMISIÓN PRIMARIA DE ACCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 303" type="number" v-model="esf_303" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 303" type="number" v-model="esf_303_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">RESERVAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 304" type="number" disabled v-model="esf_304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 304" type="number" disabled v-model="esf_304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESERVA LEGAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30401" type="number" v-model="esf_30401" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30401" type="number" v-model="esf_30401_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESERVAS FACULTATIVA Y ESTATUTARIA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30402" type="number" v-model="esf_30402" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30402" type="number" v-model="esf_30402_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS RESULTADOS INTEGRALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 305" type="number" disabled v-model="esf_305" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"    />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 305" type="number" disabled v-model="esf_305_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"    />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUPERAVIT DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30501" type="number" v-model="esf_30501" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30501" type="number" v-model="esf_30501_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUPERAVIT POR REVALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30502" type="number" v-model="esf_30502" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30502" type="number" v-model="esf_30502_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUPERAVIT POR REVALUACION DE ACTIVOS INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30503</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30503" type="number" v-model="esf_30503" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30503" type="number" v-model="esf_30503_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS SUPERAVIT POR REVALUACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30504</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30504" type="number" v-model="esf_30504" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30504" type="number" v-model="esf_30504_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">RESULTADOS ACUMULADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 306" type="number" disabled v-model="esf_306" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 306" type="number" disabled v-model="esf_306_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GANANCIAS ACUMULADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30601" type="number" v-model="esf_30601" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30601" type="number" v-model="esf_30601_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">(-) PÉRDIDAS ACUMULADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30602" type="number" v-model="esf_30602" @blur="convertirNegativo_30602(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30602" type="number" v-model="esf_30602_ant" @blur="convertirNegativo_30602_ant(this); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESULTADOS ACUMULADOS PROVENIENTES DE LA ADOPCION POR PRIMERA VEZ DE LAS NIIF</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30603</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30603" type="number" v-model="esf_30603" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30603" type="number" v-model="esf_30603_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESERVAS DE CAPITAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30604</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30604" type="number" v-model="esf_30604" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30604" type="number" v-model="esf_30604_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESERVAS POR DONACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30605</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30605" type="number" v-model="esf_30605" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30605" type="number" v-model="esf_30605_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">RESERVAS POR VALUACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30606</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30606" type="number" v-model="esf_30606" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30606" type="number" v-model="esf_30606_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUPERÁVIT POR REVALUACIÓN DE INVERSIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30607</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30607" type="number" v-model="esf_30607" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"    />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30607" type="number" v-model="esf_30607_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"    />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">RESULTADO DEL EJERCICIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 307" type="number" disabled v-model="esf_307" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 307" type="number" disabled v-model="esf_307_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GANANCIA NETA DEL PERIODO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30701</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30701" type="number" v-model="esf_30701" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 30701" type="number" v-model="esf_30701_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">(-) PÉRDIDA NETA DEL PERIODO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">30702</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30702" type="number" v-model="esf_30702" @blur="convertirNegativo_30702(); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 30702" type="number" v-model="esf_30702_ant" @blur="convertirNegativo_30702_ant(); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">PARTICIPACIÓN CONTROLADORA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">31</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 31" type="number" v-model="esf_31" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 31" type="number" v-model="esf_31_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm">PATRIMONIO NETO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">3</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3" type="number" disabled v-model="esf_3" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 3" type="number" disabled v-model="esf_3_ant" />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
