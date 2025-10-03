<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializePasivosNoCorrientes, initializePasivosNoCorrientesAnt } from "@core/utils/initializers"

const reportStore = useReportStore()
const props = defineProps({
  data: {
    nocorrientes: null,
    nocorrientes_ant: null,
  },
})

const pasivosNoCorrientes = initializePasivosNoCorrientes()
const pasivosNoCorrientesAnt = initializePasivosNoCorrientesAnt()

/* PERIODO ACTUAL */
let esf_2 = pasivosNoCorrientes['esf_2']
let esf_201 = pasivosNoCorrientes['esf_201']
let esf_202 = pasivosNoCorrientes['esf_202']
let esf_20201 = pasivosNoCorrientes['esf_20201']
let esf_20202 = pasivosNoCorrientes['esf_20202']
let esf_2020201 = pasivosNoCorrientes['esf_2020201']
let esf_202020101 = pasivosNoCorrientes['esf_202020101']
let esf_202020102 = pasivosNoCorrientes['esf_202020102']
let esf_202020103 = pasivosNoCorrientes['esf_202020103']
let esf_2020202 = pasivosNoCorrientes['esf_2020202']
let esf_202020201 = pasivosNoCorrientes['esf_202020201']
let esf_202020202 = pasivosNoCorrientes['esf_202020202']
let esf_202020203 = pasivosNoCorrientes['esf_202020203']
let esf_20203 = pasivosNoCorrientes['esf_20203']
let esf_2020301 = pasivosNoCorrientes['esf_2020301']
let esf_2020302 = pasivosNoCorrientes['esf_2020302']
let esf_20204 = pasivosNoCorrientes['esf_20204']
let esf_2020401 = pasivosNoCorrientes['esf_2020401']
let esf_202040101 = pasivosNoCorrientes['esf_202040101']
let esf_202040102 = pasivosNoCorrientes['esf_202040102']
let esf_202040103 = pasivosNoCorrientes['esf_202040103']
let esf_202040104 = pasivosNoCorrientes['esf_202040104']
let esf_2020402 = pasivosNoCorrientes['esf_2020402']
let esf_202040201 = pasivosNoCorrientes['esf_202040201']
let esf_202040202 = pasivosNoCorrientes['esf_202040202']
let esf_202040203 = pasivosNoCorrientes['esf_202040203']
let esf_202040204 = pasivosNoCorrientes['esf_202040204']
let esf_20205 = pasivosNoCorrientes['esf_20205']
let esf_2020501 = pasivosNoCorrientes['esf_2020501']
let esf_2020502 = pasivosNoCorrientes['esf_2020502']
let esf_2020503 = pasivosNoCorrientes['esf_2020503']
let esf_2020504 = pasivosNoCorrientes['esf_2020504']
let esf_2020505 = pasivosNoCorrientes['esf_2020505']
let esf_20206 = pasivosNoCorrientes['esf_20206']
let esf_2020601 = pasivosNoCorrientes['esf_2020601']
let esf_2020602 = pasivosNoCorrientes['esf_2020602']
let esf_20207 = pasivosNoCorrientes['esf_20207']
let esf_2020701 = pasivosNoCorrientes['esf_2020701']
let esf_2020702 = pasivosNoCorrientes['esf_2020702']
let esf_202070201 = pasivosNoCorrientes['esf_202070201']
let esf_202070202 = pasivosNoCorrientes['esf_202070202']
let esf_20208 = pasivosNoCorrientes['esf_20208']
let esf_20209 = pasivosNoCorrientes['esf_20209']
let esf_2020901 = pasivosNoCorrientes['esf_2020901']
let esf_2020902 = pasivosNoCorrientes['esf_2020902']
let esf_20210 = pasivosNoCorrientes['esf_20210']

/* PERIODO ANTERIOR */
let esf_2_ant = pasivosNoCorrientesAnt['esf_2_ant']
let esf_201_ant = pasivosNoCorrientesAnt['esf_201_ant']
let esf_202_ant = pasivosNoCorrientesAnt['esf_202_ant']
let esf_20201_ant = pasivosNoCorrientesAnt['esf_20201_ant']
let esf_20202_ant = pasivosNoCorrientesAnt['esf_20202_ant']
let esf_2020201_ant = pasivosNoCorrientesAnt['esf_2020201_ant']
let esf_202020101_ant = pasivosNoCorrientesAnt['esf_202020101_ant']
let esf_202020102_ant = pasivosNoCorrientesAnt['esf_202020102_ant']
let esf_202020103_ant = pasivosNoCorrientesAnt['esf_202020103_ant']
let esf_2020202_ant = pasivosNoCorrientesAnt['esf_2020202_ant']
let esf_202020201_ant = pasivosNoCorrientesAnt['esf_202020201_ant']
let esf_202020202_ant = pasivosNoCorrientesAnt['esf_202020202_ant']
let esf_202020203_ant = pasivosNoCorrientesAnt['esf_202020203_ant']
let esf_20203_ant = pasivosNoCorrientesAnt['esf_20203_ant']
let esf_2020301_ant = pasivosNoCorrientesAnt['esf_2020301_ant']
let esf_2020302_ant = pasivosNoCorrientesAnt['esf_2020302_ant']
let esf_20204_ant = pasivosNoCorrientesAnt['esf_20204_ant']
let esf_2020401_ant = pasivosNoCorrientesAnt['esf_2020401_ant']
let esf_202040101_ant = pasivosNoCorrientesAnt['esf_202040101_ant']
let esf_202040102_ant = pasivosNoCorrientesAnt['esf_202040102_ant']
let esf_202040103_ant = pasivosNoCorrientesAnt['esf_202040103_ant']
let esf_202040104_ant = pasivosNoCorrientesAnt['esf_202040104_ant']
let esf_2020402_ant = pasivosNoCorrientesAnt['esf_2020402_ant']
let esf_202040201_ant = pasivosNoCorrientesAnt['esf_202040201_ant']
let esf_202040202_ant = pasivosNoCorrientesAnt['esf_202040202_ant']
let esf_202040203_ant = pasivosNoCorrientesAnt['esf_202040203_ant']
let esf_202040204_ant = pasivosNoCorrientesAnt['esf_202040204_ant']
let esf_20205_ant = pasivosNoCorrientesAnt['esf_20205_ant']
let esf_2020501_ant = pasivosNoCorrientesAnt['esf_2020501_ant']
let esf_2020502_ant = pasivosNoCorrientesAnt['esf_2020502_ant']
let esf_2020503_ant = pasivosNoCorrientesAnt['esf_2020503_ant']
let esf_2020504_ant = pasivosNoCorrientesAnt['esf_2020504_ant']
let esf_2020505_ant = pasivosNoCorrientesAnt['esf_2020505_ant']
let esf_20206_ant = pasivosNoCorrientesAnt['esf_20206_ant']
let esf_2020601_ant = pasivosNoCorrientesAnt['esf_2020601_ant']
let esf_2020602_ant = pasivosNoCorrientesAnt['esf_2020602_ant']
let esf_20207_ant = pasivosNoCorrientesAnt['esf_20207_ant']
let esf_2020701_ant = pasivosNoCorrientesAnt['esf_2020701_ant']
let esf_2020702_ant = pasivosNoCorrientesAnt['esf_2020702_ant']
let esf_202070201_ant = pasivosNoCorrientesAnt['esf_202070201_ant']
let esf_202070202_ant = pasivosNoCorrientesAnt['esf_202070202_ant']
let esf_20208_ant = pasivosNoCorrientesAnt['esf_20208_ant']
let esf_20209_ant = pasivosNoCorrientesAnt['esf_20209_ant']
let esf_2020901_ant = pasivosNoCorrientesAnt['esf_2020901_ant']
let esf_2020902_ant = pasivosNoCorrientesAnt['esf_2020902_ant']
let esf_20210_ant = pasivosNoCorrientesAnt['esf_20210_ant']
let values = ref([])

let handleActionClick = async id => {
  esf_201.value = localStorage.getItem('esf_201')
  esf_202.value = (Number(esf_20201.value) + Number(esf_20202.value) + Number(esf_20203.value) + Number(esf_20204.value) + Number(esf_20205.value) + Number(esf_20206.value) + Number(esf_20207.value) + Number(esf_20208.value) + Number(esf_20209.value) + Number(esf_20210.value)).toFixed(2)
  esf_2.value = (Number(esf_201.value) + Number(esf_202.value)).toFixed(2)
  props.data.nocorrientes = esf_202.value
  esf_20202.value = (Number(esf_2020201.value) + Number(esf_2020202.value)).toFixed(2)
  esf_2020201.value = (Number(esf_202020101.value) + Number(esf_202020102.value) + Number(esf_202020103.value)).toFixed(2)
  esf_2020202.value = (Number(esf_202020201.value) + Number(esf_202020202.value) + Number(esf_202020203.value)).toFixed(2)
  esf_20203.value = (Number(esf_2020301.value) + Number(esf_2020302.value)).toFixed(2)
  esf_20204.value = (Number(esf_2020401.value) + Number(esf_2020402.value)).toFixed(2)
  esf_2020401.value = (Number(esf_202040101.value) + Number(esf_202040102.value) + Number(esf_202040103.value) + Number(esf_202040104.value)).toFixed(2)
  esf_2020402.value = (Number(esf_202040201.value) + Number(esf_202040202.value) + Number(esf_202040203.value) + Number(esf_202040204.value)).toFixed(2)
  esf_20205.value = (Number(esf_2020501.value) + Number(esf_2020502.value) + Number(esf_2020503.value) + Number(esf_2020504.value) + Number(esf_2020505.value)).toFixed(2)
  esf_20206.value = (Number(esf_2020601.value) + Number(esf_2020602.value)).toFixed(2)
  esf_20207.value = (Number(esf_2020701.value) + Number(esf_2020702.value)).toFixed(2)
  esf_2020702.value = (Number(esf_202070201.value) + Number(esf_202070202.value)).toFixed(2)
  esf_20209.value = (Number(esf_2020901.value) + Number(esf_2020902.value)).toFixed(2)

  const pasivosnocorrientes = {
    esf_2: esf_2.value,
    esf_202: esf_202.value,
    esf_20201: esf_20201.value,
    esf_20202: esf_20202.value,
    esf_2020201: esf_2020201.value,
    esf_202020101: esf_202020101.value,
    esf_202020102: esf_202020102.value,
    esf_202020103: esf_202020103.value,
    esf_2020202: esf_2020202.value,
    esf_202020201: esf_202020201.value,
    esf_202020202: esf_202020202.value,
    esf_202020203: esf_202020203.value,
    esf_20203: esf_20203.value,
    esf_2020301: esf_2020301.value,
    esf_2020302: esf_2020302.value,
    esf_20204: esf_20204.value,
    esf_2020401: esf_2020401.value,
    esf_202040101: esf_202040101.value,
    esf_202040102: esf_202040102.value,
    esf_202040103: esf_202040103.value,
    esf_202040104: esf_202040104.value,
    esf_2020402: esf_2020402.value,
    esf_202040201: esf_202040201.value,
    esf_202040202: esf_202040202.value,
    esf_202040203: esf_202040203.value,
    esf_202040204: esf_202040204.value,
    esf_20205: esf_20205.value,
    esf_2020501: esf_2020501.value,
    esf_2020502: esf_2020502.value,
    esf_2020503: esf_2020503.value,
    esf_2020504: esf_2020504.value,
    esf_2020505: esf_2020505.value,
    esf_20206: esf_20206.value,
    esf_2020601: esf_2020601.value,
    esf_2020602: esf_2020602.value,
    esf_20207: esf_20207.value,
    esf_2020701: esf_2020701.value,
    esf_2020702: esf_2020702.value,
    esf_202070201: esf_202070201.value,
    esf_202070202: esf_202070202.value,
    esf_20208: esf_20208.value,
    esf_20209: esf_20209.value,
    esf_2020901: esf_2020901.value,
    esf_2020902: esf_2020902.value,
    esf_20210: esf_20210.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    pasivosnocorrientesifluc: pasivosnocorrientes,
  })
}

let handleActionClick_ant = async id => {
  esf_201_ant.value = localStorage.getItem('esf_201_ant')
  esf_202_ant.value = (Number(esf_20201_ant.value) + Number(esf_20202_ant.value) + Number(esf_20203_ant.value) + Number(esf_20204_ant.value) + Number(esf_20205_ant.value) + Number(esf_20206_ant.value) + Number(esf_20207_ant.value) + Number(esf_20208_ant.value) + Number(esf_20209_ant.value) + Number(esf_20210_ant.value)).toFixed(2)
  esf_2.value = (Number(esf_201.value) + Number(esf_202.value)).toFixed(2)
  props.data.nocorrientes_ant = esf_202_ant.value
  esf_20202_ant.value = (Number(esf_2020201_ant.value) + Number(esf_2020202_ant.value)).toFixed(2)
  esf_2020201_ant.value = (Number(esf_202020101_ant.value) + Number(esf_202020102_ant.value) + Number(esf_202020103_ant.value)).toFixed(2)
  esf_2020202_ant.value = (Number(esf_202020201_ant.value) + Number(esf_202020202_ant.value) + Number(esf_202020203_ant.value)).toFixed(2)
  esf_20203_ant.value = (Number(esf_2020301_ant.value) + Number(esf_2020302_ant.value)).toFixed(2)
  esf_20204_ant.value = (Number(esf_2020401_ant.value) + Number(esf_2020402_ant.value)).toFixed(2)
  esf_2020401_ant.value = (Number(esf_202040101_ant.value) + Number(esf_202040102_ant.value) + Number(esf_202040103_ant.value) + Number(esf_202040104_ant.value)).toFixed(2)
  esf_2020402_ant.value = (Number(esf_202040201_ant.value) + Number(esf_202040202_ant.value) + Number(esf_202040203_ant.value) + Number(esf_202040204_ant.value)).toFixed(2)
  esf_20205_ant.value = (Number(esf_2020501_ant.value) + Number(esf_2020502_ant.value) + Number(esf_2020503_ant.value) + Number(esf_2020504_ant.value) + Number(esf_2020505_ant.value)).toFixed(2)
  esf_20206_ant.value = (Number(esf_2020601_ant.value) + Number(esf_2020602_ant.value)).toFixed(2)
  esf_20207_ant.value = (Number(esf_2020701_ant.value) + Number(esf_2020702_ant.value)).toFixed(2)
  esf_2020702_ant.value = (Number(esf_202070201_ant.value) + Number(esf_202070202_ant.value)).toFixed(2)
  esf_20209_ant.value = (Number(esf_2020901_ant.value) + Number(esf_2020902_ant.value)).toFixed(2)

  const pasivosnocorrientes_ant = {
    esf_2_ant: esf_2_ant.value,
    esf_202_ant: esf_202_ant.value,
    esf_20201_ant: esf_20201_ant.value,
    esf_20202_ant: esf_20202_ant.value,
    esf_2020201_ant: esf_2020201_ant.value,
    esf_202020101_ant: esf_202020101_ant.value,
    esf_202020102_ant: esf_202020102_ant.value,
    esf_202020103_ant: esf_202020103_ant.value,
    esf_2020202_ant: esf_2020202_ant.value,
    esf_202020201_ant: esf_202020201_ant.value,
    esf_202020202_ant: esf_202020202_ant.value,
    esf_202020203_ant: esf_202020203_ant.value,
    esf_20203_ant: esf_20203_ant.value,
    esf_2020301_ant: esf_2020301_ant.value,
    esf_2020302_ant: esf_2020302_ant.value,
    esf_20204_ant: esf_20204_ant.value,
    esf_2020401_ant: esf_2020401_ant.value,
    esf_202040101_ant: esf_202040101_ant.value,
    esf_202040102_ant: esf_202040102_ant.value,
    esf_202040103_ant: esf_202040103_ant.value,
    esf_202040104_ant: esf_202040104_ant.value,
    esf_2020402_ant: esf_2020402_ant.value,
    esf_202040201_ant: esf_202040201_ant.value,
    esf_202040202_ant: esf_202040202_ant.value,
    esf_202040203_ant: esf_202040203_ant.value,
    esf_202040204_ant: esf_202040204_ant.value,
    esf_20205_ant: esf_20205_ant.value,
    esf_2020501_ant: esf_2020501_ant.value,
    esf_2020502_ant: esf_2020502_ant.value,
    esf_2020503_ant: esf_2020503_ant.value,
    esf_2020504_ant: esf_2020504_ant.value,
    esf_2020505_ant: esf_2020505_ant.value,
    esf_20206_ant: esf_20206_ant.value,
    esf_2020601_ant: esf_2020601_ant.value,
    esf_2020602_ant: esf_2020602_ant.value,
    esf_20207_ant: esf_20207_ant.value,
    esf_2020701_ant: esf_2020701_ant.value,
    esf_2020702_ant: esf_2020702_ant.value,
    esf_202070201_ant: esf_202070201_ant.value,
    esf_202070202_ant: esf_202070202_ant.value,
    esf_20208_ant: esf_20208_ant.value,
    esf_20209_ant: esf_20209_ant.value,
    esf_2020901_ant: esf_2020901_ant.value,
    esf_2020902_ant: esf_2020902_ant.value,
    esf_20210_ant: esf_20210_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    pasivosnocorrientesifluc_ant: pasivosnocorrientes_ant,
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
                  <span class="text-sm ml-7">PASIVOS POR CONTRATO DE ARRENDAMIENTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20201" type="number" v-model="esf_20201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20201" type="number" v-model="esf_20201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CUENTAS Y DOCUMENTOS POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20202" type="number" disabled v-model="esf_20202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20202" type="number" disabled v-model="esf_20202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020201" type="number" disabled v-model="esf_2020201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020201" type="number" disabled v-model="esf_2020201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020101" type="number" v-model="esf_202020101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020101" type="number" v-model="esf_202020101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020102" type="number" v-model="esf_202020102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020102" type="number" v-model="esf_202020102_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020103" type="number" v-model="esf_202020103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020103" type="number" v-model="esf_202020103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020202" type="number" disabled v-model="esf_2020202"  @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020202" type="number" disabled v-model="esf_2020202_ant"  @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020201" type="number" v-model="esf_202020201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020201" type="number" v-model="esf_202020201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020202" type="number" v-model="esf_202020202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020202" type="number" v-model="esf_202020202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202020203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020203" type="number" v-model="esf_202020203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202020203" type="number" v-model="esf_202020203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OBLIGACIONES CON INSTITUCIONES FINANCIERAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20203" type="number" disabled v-model="esf_20203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20203" type="number" disabled v-model="esf_20203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020301" type="number" v-model="esf_2020301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020301" type="number" v-model="esf_2020301_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020302" type="number" v-model="esf_2020302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020302" type="number" v-model="esf_2020302_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CUENTAS POR PAGAR A RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20204" type="number" disabled v-model="esf_20204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20204" type="number" disabled v-model="esf_20204_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020401" type="number" disabled  v-model="esf_2020401" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020401" type="number" disabled  v-model="esf_2020401_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRESTAMOS DE ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040101" type="number" v-model="esf_202040101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040101" type="number" v-model="esf_202040101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRESTAMOS DE COMPAÑÍAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040102" type="number" v-model="esf_202040102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040102" type="number" v-model="esf_202040102_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040103" type="number" v-model="esf_202040103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040103" type="number" v-model="esf_202040103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040104" type="number" v-model="esf_202040104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040104" type="number" v-model="esf_202040104_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020402" type="number" disabled v-model="esf_2020402" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020402" type="number" disabled v-model="esf_2020402_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS DE ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040201" type="number" v-model="esf_202040201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040201" type="number" v-model="esf_202040201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS DE COMPAÑÍAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040202" type="number" v-model="esf_202040202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040202" type="number" v-model="esf_202040202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040203" type="number" v-model="esf_202040203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040203" type="number" v-model="esf_202040203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202040204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040204" type="number" v-model="esf_202040204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202040204" type="number" v-model="esf_202040204_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PORCIÓN NO CORRIENTE DE VALORES EMITIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20205" type="number" disabled v-model="esf_20205" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20205" type="number" disabled v-model="esf_20205_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBLIGACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020501" type="number" v-model="esf_2020501" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020501" type="number" v-model="esf_2020501_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PAPEL COMERCIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020502" type="number" v-model="esf_2020502" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020502" type="number" v-model="esf_2020502_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALORES DE TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020503</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020503" type="number" v-model="esf_2020503" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020503" type="number" v-model="esf_2020503_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020504</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020504" type="number" v-model="esf_2020504" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020504" type="number" v-model="esf_2020504_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020505</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020505" type="number" v-model="esf_2020505" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020505" type="number" v-model="esf_2020505_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">ANTICIPOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20206" type="number" disabled  v-model="esf_20206" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20206" type="number" disabled  v-model="esf_20206_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ANTICIPOS DE CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020601" type="number"  v-model="esf_2020601" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020601" type="number"  v-model="esf_2020601_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS ANTICIPOS RECIBIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020602" type="number"  v-model="esf_2020602" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020602" type="number"  v-model="esf_2020602_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PROVISIONES POR BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20207" type="number" disabled  v-model="esf_20207" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20207" type="number" disabled  v-model="esf_20207_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">JUBILACIÓN PATRONAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020701</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020701" type="number"  v-model="esf_2020701" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020701" type="number"  v-model="esf_2020701_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS BENEFICIOS NO CORRIENTE PARA LOS EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020702</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020702" type="number"  disabled v-model="esf_2020702" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020702" type="number"  disabled v-model="esf_2020702_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DESHAUCIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202070201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202070201" type="number"  v-model="esf_202070201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202070201" type="number"  v-model="esf_202070201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202070202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202070202" type="number"  v-model="esf_202070202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202070202" type="number"  v-model="esf_202070202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTRAS PROVISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20208" type="number"  v-model="esf_20208" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20208" type="number"  v-model="esf_20208_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PASIVO DIFERIDO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20209" type="number" disabled  v-model="esf_20209" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20209" type="number" disabled  v-model="esf_20209_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INGRESOS DIFERIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020901</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020901" type="number"  v-model="esf_2020901" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020901" type="number"  v-model="esf_2020901_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PASIVOS POR IMPUESTOS DIFERIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2020902</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020902" type="number"  v-model="esf_2020902" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2020902" type="number"  v-model="esf_2020902_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS PASIVOS NO CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20210" type="number"  v-model="esf_20210" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20210" type="number"  v-model="esf_20210_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">PASIVOS NO CORRIENTE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202" type="number" disabled v-model="esf_202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 202" type="number" disabled v-model="esf_202_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
