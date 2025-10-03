<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeIngresos, initializeIngresosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    ing_401: null,
    ing_401_ant: null,
  },
})

const ingresos = initializeIngresos()
const ingresosAnt = initializeIngresosAnt()

/* PERIODO ACTUAL */
let eri_4 = ref(0)
let eri_401 = ingresos['eri_401']
let eri_40101 = ingresos['eri_40101']
let eri_40102 = ingresos['eri_40102']
let eri_4010201 = ingresos['eri_4010201']
let eri_4010202 = ingresos['eri_4010202']
let eri_4010203 = ingresos['eri_4010203']
let eri_4010204 = ingresos['eri_4010204']
let eri_40103 = ingresos['eri_40103']
let eri_40104 = ingresos['eri_40104']
let eri_40105 = ingresos['eri_40105']
let eri_40106 = ingresos['eri_40106']
let eri_4010601 = ingresos['eri_4010601']
let eri_4010602 = ingresos['eri_4010602']
let eri_4010603 = ingresos['eri_4010603']
let eri_40107 = ingresos['eri_40107']
let eri_40108 = ingresos['eri_40108']
let eri_40109 = ingresos['eri_40109']
let eri_4010901 = ingresos['eri_4010901']
let eri_401090101 = ingresos['eri_401090101']
let eri_401090103 = ingresos['eri_401090103']
let eri_401090104 = ingresos['eri_401090104']
let eri_401090105 = ingresos['eri_401090105']
let eri_401090106 = ingresos['eri_401090106']
let eri_4010902 = ingresos['eri_4010902']
let eri_401090201 = ingresos['eri_401090201']
let eri_401090202 = ingresos['eri_401090202']
let eri_401090203 = ingresos['eri_401090203']
let eri_401090204 = ingresos['eri_401090204']
let eri_401090205 = ingresos['eri_401090205']
let eri_401090206 = ingresos['eri_401090206']
let eri_401090207 = ingresos['eri_401090207']
let eri_401090208 = ingresos['eri_401090208']
let eri_4010903 = ingresos['eri_4010903']
let eri_401090301 = ingresos['eri_401090301']
let eri_401090302 = ingresos['eri_401090302']
let eri_401090303 = ingresos['eri_401090303']
let eri_401090304 = ingresos['eri_401090304']
let eri_40110 = ingresos['eri_40110']
let eri_4011001 = ingresos['eri_4011001']
let eri_4011002 = ingresos['eri_4011002']
let eri_4011003 = ingresos['eri_4011003']
let eri_4011004 = ingresos['eri_4011004']
let eri_4011005 = ingresos['eri_4011005']
let eri_4011006 = ingresos['eri_4011006']
let eri_40112 = ingresos['eri_40112']
let eri_40113 = ingresos['eri_40113']
let eri_40114 = ingresos['eri_40114']
let eri_40115 = ingresos['eri_40115']
let eri_40116 = ingresos['eri_40116']
let eri_403 = ingresos['eri_403']
let eri_40301 = ingresos['eri_40301']
let eri_40302 = ingresos['eri_40302']
let eri_40303 = ingresos['eri_40303']

/* PERIODO ANTERIOR */
let eri_4_ant = (0)
let eri_401_ant = ingresosAnt['eri_401_ant']
let eri_40101_ant = ingresosAnt['eri_40101_ant']
let eri_40102_ant = ingresosAnt['eri_40102_ant']
let eri_4010201_ant = ingresosAnt['eri_4010201_ant']
let eri_4010202_ant = ingresosAnt['eri_4010202_ant']
let eri_4010203_ant = ingresosAnt['eri_4010203_ant']
let eri_4010204_ant = ingresosAnt['eri_4010204_ant']
let eri_40103_ant = ingresosAnt['eri_40103_ant']
let eri_40104_ant = ingresosAnt['eri_40104_ant']
let eri_40105_ant = ingresosAnt['eri_40105_ant']
let eri_4010601_ant = ingresosAnt['eri_4010601_ant']
let eri_4010602_ant = ingresosAnt['eri_4010602_ant']
let eri_4010603_ant = ingresosAnt['eri_4010603_ant']
let eri_40106_ant = ingresosAnt['eri_40106_ant']
let eri_40107_ant = ingresosAnt['eri_40107_ant']
let eri_40108_ant = ingresosAnt['eri_40108_ant']
let eri_4010901_ant = ingresosAnt['eri_4010901_ant']
let eri_401090101_ant = ingresosAnt['eri_401090101_ant']
let eri_401090103_ant = ingresosAnt['eri_401090103_ant']
let eri_401090104_ant = ingresosAnt['eri_401090104_ant']
let eri_401090105_ant = ingresosAnt['eri_401090105_ant']
let eri_401090106_ant = ingresosAnt['eri_401090106_ant']
let eri_4010902_ant = ingresosAnt['eri_4010902_ant']
let eri_401090201_ant = ingresosAnt['eri_401090201_ant']
let eri_401090202_ant = ingresosAnt['eri_401090202_ant']
let eri_401090203_ant = ingresosAnt['eri_401090203_ant']
let eri_401090204_ant = ingresosAnt['eri_401090204_ant']
let eri_401090205_ant = ingresosAnt['eri_401090205_ant']
let eri_401090206_ant = ingresosAnt['eri_401090206_ant']
let eri_401090207_ant = ingresosAnt['eri_401090207_ant']
let eri_401090208_ant = ingresosAnt['eri_401090208_ant']
let eri_4010903_ant = ingresosAnt['eri_4010903_ant']
let eri_401090301_ant = ingresosAnt['eri_401090301_ant']
let eri_401090302_ant = ingresosAnt['eri_401090302_ant']
let eri_401090303_ant = ingresosAnt['eri_401090303_ant']
let eri_401090304_ant = ingresosAnt['eri_401090304_ant']
let eri_40109_ant = ingresosAnt['eri_40109_ant']
let eri_40110_ant = ingresosAnt['eri_40110_ant']
let eri_4011001_ant = ingresosAnt['eri_4011001_ant']
let eri_4011002_ant = ingresosAnt['eri_4011002_ant']
let eri_4011003_ant = ingresosAnt['eri_4011003_ant']
let eri_4011004_ant = ingresosAnt['eri_4011004_ant']
let eri_4011005_ant = ingresosAnt['eri_4011005_ant']
let eri_4011006_ant = ingresosAnt['eri_4011006_ant']
let eri_40112_ant = ingresosAnt['eri_40112_ant']
let eri_40113_ant = ingresosAnt['eri_40113_ant']
let eri_40114_ant = ingresosAnt['eri_40114_ant']
let eri_40115_ant = ingresosAnt['eri_40115_ant']
let eri_40116_ant = ingresosAnt['eri_40116_ant']
let eri_403_ant = ingresosAnt['eri_403_ant']
let eri_40301_ant = ingresosAnt['eri_40301_ant']
let eri_40302_ant = ingresosAnt['eri_40302_ant']
let eri_40303_ant = ingresosAnt['eri_40303_ant']
let values = ref([])

let convertirNegativo_40112 = async id => { eri_40112.value = (Number(eri_40112.value) > 0) ? Number(eri_40112.value) * -1 : Number(eri_40112.value) }
let convertirNegativo_40113 = async id => { eri_40113.value = (Number(eri_40113.value) > 0) ? Number(eri_40113.value) * -1 : Number(eri_40113.value) }
let convertirNegativo_40114 = async id => { eri_40114.value = (Number(eri_40114.value) > 0) ? Number(eri_40114.value) * -1 : Number(eri_40114.value) }
let convertirNegativo_40115 = async id => { eri_40115.value = (Number(eri_40115.value) > 0) ? Number(eri_40115.value) * -1 : Number(eri_40115.value) }

let handleActionClick = async id => {

  eri_40102.value = (Number(eri_4010201.value) + Number(eri_4010202.value) + Number(eri_4010203.value) + Number(eri_4010204.value)).toFixed(2)
  eri_40106.value = (Number(eri_4010601.value) + Number(eri_4010602.value) + Number(eri_4010603.value)).toFixed(2)
  eri_4010901.value = (Number(eri_401090101.value) + Number(eri_401090103.value) + Number(eri_401090104.value) + Number(eri_401090105.value) + Number(eri_401090106.value)).toFixed(2)
  eri_4010902.value = (Number(eri_401090201.value) + Number(eri_401090202.value) + Number(eri_401090203.value) + Number(eri_401090204.value) + Number(eri_401090205.value) + Number(eri_401090206.value) + Number(eri_401090207.value) + Number(eri_401090208.value)).toFixed(2)
  eri_4010903.value = (Number(eri_401090301.value) + Number(eri_401090302.value) + Number(eri_401090303.value) + Number(eri_401090304.value)).toFixed(2)
  eri_40109.value = (Number(eri_4010901.value) + Number(eri_4010902.value) + Number(eri_4010903.value)).toFixed(2)
  eri_40110.value = (Number(eri_4011001.value) + Number(eri_4011002.value) + Number(eri_4011003.value) + Number(eri_4011004.value) + Number(eri_4011005.value) + Number(eri_4011006.value)).toFixed(2)

  eri_401.value = (Number(eri_40101.value) + Number(eri_40102.value) + Number(eri_40103.value) + Number(eri_40104.value) + Number(eri_40105.value) + Number(eri_40106.value) + Number(eri_40107.value) + Number(eri_40108.value) + Number(eri_40109.value) + Number(eri_40110.value) + Number(eri_40112.value) + Number(eri_40113.value) + Number(eri_40114.value) + Number(eri_40115.value) + Number(eri_40116.value)).toFixed(2)

  props.data.ing_401 = eri_401.value

  const ingresos = {
    eri_401: eri_401.value,
    eri_40101: eri_40101.value,
    eri_40102: eri_40102.value,
    eri_4010201: eri_4010201.value,
    eri_4010202: eri_4010202.value,
    eri_4010203: eri_4010203.value,
    eri_4010204: eri_4010204.value,
    eri_40103: eri_40103.value,
    eri_40104: eri_40104.value,
    eri_40105: eri_40105.value,
    eri_40106: eri_40106.value,
    eri_4010601: eri_4010601.value,
    eri_4010602: eri_4010602.value,
    eri_4010603: eri_4010603.value,
    eri_40107: eri_40107.value,
    eri_40108: eri_40108.value,
    eri_40109: eri_40109.value,
    eri_4010901: eri_4010901.value,
    eri_401090101: eri_401090101.value,
    eri_401090103: eri_401090103.value,
    eri_401090104: eri_401090104.value,
    eri_401090105: eri_401090105.value,
    eri_401090106: eri_401090106.value,
    eri_4010902: eri_4010902.value,
    eri_401090201: eri_401090201.value,
    eri_401090202: eri_401090202.value,
    eri_401090203: eri_401090203.value,
    eri_401090204: eri_401090204.value,
    eri_401090205: eri_401090205.value,
    eri_401090206: eri_401090206.value,
    eri_401090207: eri_401090207.value,
    eri_401090208: eri_401090208.value,
    eri_4010903: eri_4010903.value,
    eri_401090301: eri_401090301.value,
    eri_401090302: eri_401090302.value,
    eri_401090303: eri_401090303.value,
    eri_401090304: eri_401090304.value,
    eri_40110: eri_40110.value,
    eri_4011001: eri_4011001.value,
    eri_4011002: eri_4011002.value,
    eri_4011003: eri_4011003.value,
    eri_4011004: eri_4011004.value,
    eri_4011005: eri_4011005.value,
    eri_4011006: eri_4011006.value,
    eri_40112: eri_40112.value,
    eri_40113: eri_40113.value,
    eri_40114: eri_40114.value,
    eri_40115: eri_40115.value,
    eri_40116: eri_40116.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    ingresosifluc: ingresos,
  })
}

let convertirNegativo_40112_ant = async id => { eri_40112_ant.value = (Number(eri_40112_ant.value) > 0) ? Number(eri_40112_ant.value) * -1 : Number(eri_40112_ant.value) }
let convertirNegativo_40113_ant = async id => { eri_40113_ant.value = (Number(eri_40113_ant.value) > 0) ? Number(eri_40113_ant.value) * -1 : Number(eri_40113_ant.value) }
let convertirNegativo_40114_ant = async id => { eri_40114_ant.value = (Number(eri_40114_ant.value) > 0) ? Number(eri_40114_ant.value) * -1 : Number(eri_40114_ant.value) }
let convertirNegativo_40115_ant = async id => { eri_40115_ant.value = (Number(eri_40115_ant.value) > 0) ? Number(eri_40115_ant.value) * -1 : Number(eri_40115_ant.value) }

let handleActionClick_ant = async id => {
  eri_401_ant.value = (Number(eri_40101_ant.value) + Number(eri_40102_ant.value) + Number(eri_40103_ant.value) + Number(eri_40104_ant.value) + Number(eri_40105_ant.value) + Number(eri_40106_ant.value) + Number(eri_40107_ant.value) + Number(eri_40108_ant.value) + Number(eri_40109_ant.value) + Number(eri_40110_ant.value) + Number(eri_40112_ant.value) + Number(eri_40113_ant.value) + Number(eri_40114_ant.value) + Number(eri_40115_ant.value) + Number(eri_40116_ant.value)).toFixed(2)
  eri_40102_ant.value = (Number(eri_4010201_ant.value) + Number(eri_4010202_ant.value) + Number(eri_4010203_ant.value) + Number(eri_4010204_ant.value)).toFixed(2)
  eri_40106_ant.value = (Number(eri_4010601_ant.value) + Number(eri_4010602_ant.value) + Number(eri_4010603_ant.value)).toFixed(2)
  eri_4010901_ant.value = (Number(eri_401090101_ant.value) + Number(eri_401090103_ant.value) + Number(eri_401090104_ant.value) + Number(eri_401090105_ant.value) + Number(eri_401090106_ant.value)).toFixed(2)
  eri_4010902_ant.value = (Number(eri_401090201_ant.value) + Number(eri_401090202_ant.value) + Number(eri_401090203_ant.value) + Number(eri_401090204_ant.value) + Number(eri_401090205_ant.value) + Number(eri_401090206_ant.value) + Number(eri_401090207_ant.value) + Number(eri_401090208_ant.value)).toFixed(2)
  eri_4010903_ant.value = (Number(eri_401090301_ant.value) + Number(eri_401090302_ant.value) + Number(eri_401090303_ant.value) + Number(eri_401090304_ant.value)).toFixed(2)
  eri_40109_ant.value = (Number(eri_4010901_ant.value) + Number(eri_4010902_ant.value) + Number(eri_4010903_ant.value)).toFixed(2)
  eri_40110_ant.value = (Number(eri_4011001_ant.value) + Number(eri_4011002_ant.value) + Number(eri_4011003_ant.value) + Number(eri_4011004_ant.value) + Number(eri_4011005_ant.value) + Number(eri_4011006_ant.value)).toFixed(2)

  props.data.ing_401_ant = eri_401_ant.value

  const ingresos_ant = {
    eri_401_ant: eri_401_ant.value,
    eri_40101_ant: eri_40101_ant.value,
    eri_40102_ant: eri_40102_ant.value,
    eri_4010201_ant: eri_4010201_ant.value,
    eri_4010202_ant: eri_4010202_ant.value,
    eri_4010203_ant: eri_4010203_ant.value,
    eri_4010204_ant: eri_4010204_ant.value,
    eri_40103_ant: eri_40103_ant.value,
    eri_40104_ant: eri_40104_ant.value,
    eri_40105_ant: eri_40105_ant.value,
    eri_40106_ant: eri_40106_ant.value,
    eri_4010601_ant: eri_4010601_ant.value,
    eri_4010602_ant: eri_4010602_ant.value,
    eri_4010603_ant: eri_4010603_ant.value,
    eri_40107_ant: eri_40107_ant.value,
    eri_40108_ant: eri_40108_ant.value,
    eri_40109_ant: eri_40109_ant.value,
    eri_4010901_ant: eri_4010901_ant.value,
    eri_401090101_ant: eri_401090101_ant.value,
    eri_401090103_ant: eri_401090103_ant.value,
    eri_401090104_ant: eri_401090104_ant.value,
    eri_401090105_ant: eri_401090105_ant.value,
    eri_401090106_ant: eri_401090106_ant.value,
    eri_4010902_ant: eri_4010902_ant.value,
    eri_401090201_ant: eri_401090201_ant.value,
    eri_401090202_ant: eri_401090202_ant.value,
    eri_401090203_ant: eri_401090203_ant.value,
    eri_401090204_ant: eri_401090204_ant.value,
    eri_401090205_ant: eri_401090205_ant.value,
    eri_401090206_ant: eri_401090206_ant.value,
    eri_401090207_ant: eri_401090207_ant.value,
    eri_401090208_ant: eri_401090208_ant.value,
    eri_4010903_ant: eri_4010903_ant.value,
    eri_401090301_ant: eri_401090301_ant.value,
    eri_401090302_ant: eri_401090302_ant.value,
    eri_401090303_ant: eri_401090303_ant.value,
    eri_401090304_ant: eri_401090304_ant.value,
    eri_40110_ant: eri_40110_ant.value,
    eri_4011001_ant: eri_4011001_ant.value,
    eri_4011002_ant: eri_4011002_ant.value,
    eri_4011003_ant: eri_4011003_ant.value,
    eri_4011004_ant: eri_4011004_ant.value,
    eri_4011005_ant: eri_4011005_ant.value,
    eri_4011006_ant: eri_4011006_ant.value,
    eri_40112_ant: eri_40112_ant.value,
    eri_40113_ant: eri_40113_ant.value,
    eri_40114_ant: eri_40114_ant.value,
    eri_40115_ant: eri_40115_ant.value,
    eri_40116_ant: eri_40116_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    ingresosifluc_ant: ingresos_ant,
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

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">VENTA DE BIENES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40101" type="number" v-model="eri_40101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40101" type="number" v-model="eri_40101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PRESTACIÓN DE SERVICIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40102" type="number" disabled v-model="eri_40102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40102" type="number" disabled v-model="eri_40102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INGRESOS POR ASESORÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010201" type="number" v-model="eri_4010201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010201" type="number" v-model="eri_4010201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INGRESOS POR ESTRUCTURACIÓN DE OFERTA PÚBLICA DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010202" type="number"  v-model="eri_4010202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010202" type="number"  v-model="eri_4010202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INGRESOS POR ESTRUCTURACIÓN DE NEGOCIOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010203" type="number" v-model="eri_4010203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010203" type="number" v-model="eri_4010203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010204" type="number" v-model="eri_4010204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010204" type="number" v-model="eri_4010204_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CONTRATOS DE CONSTRUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40103" type="number" v-model="eri_40103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40103" type="number" v-model="eri_40103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">SUBVENCIONES DEL GOBIERNO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40104" type="number" v-model="eri_40104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40104" type="number" v-model="eri_40104_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">REGALÍAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40105" type="number" v-model="eri_40105" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40105" type="number" v-model="eri_40105_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">INTERESES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40106" type="number" disabled v-model="eri_40106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40106" type="number" disabled v-model="eri_40106_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES GENERADOS POR VENTAS A CRÉDITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010601" type="number" v-model="eri_4010601" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010601" type="number" v-model="eri_4010601_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES Y RENDIMIENTOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010602" type="number" v-model="eri_4010602" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010602" type="number" v-model="eri_4010602_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS INTERESES GENERADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010603</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010603" type="number" v-model="eri_4010603" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010603" type="number" v-model="eri_4010603_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">DIVIDENDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40107" type="number" v-model="eri_40107" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40107" type="number" v-model="eri_40107_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GANANCIA POR MEDICION A VALOR RAZONABLE DE ACTIVOS BIOLOGICOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40108" type="number" v-model="eri_40108" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40108" type="number" v-model="eri_40108_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">INGRESOS POR COMISIONES, PRESTACIÓN DE SERVICIOS, CUSTODIA, REGISTRO, COMPENSACIÓN Y LIQUIDACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40109</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40109" type="number" disabled v-model="eri_40109" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40109" type="number" disabled v-model="eri_40109_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMISIONES GANADAS POR INTERMEDIACIÓN DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010901</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010901" type="number" v-model="eri_4010901" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" disabled />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010901" type="number" v-model="eri_4010901_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" disabled />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR OPERACIONES BURSATILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090101" type="number" v-model="eri_401090101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090101" type="number" v-model="eri_401090101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR CONTRATOS DE UNDERWRITING</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090103" type="number" v-model="eri_401090103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090103" type="number" v-model="eri_401090103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR COMISIÓN EN OPERACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090104" type="number" v-model="eri_401090104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090104" type="number" v-model="eri_401090104_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR INSCRIPCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090105" type="number" v-model="eri_401090105" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090105" type="number" v-model="eri_401090105_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR OMANTENIMIENTO DE INSCRIPCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090106" type="number" v-model="eri_401090106" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090106" type="number" v-model="eri_401090106_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR PRESTACIÓN DE SERVICIOS DE ADMINISTRACIÓN Y MANEJO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010902</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010902" type="number" disabled v-model="eri_4010902" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010902" type="number" disabled v-model="eri_4010902_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PORTAFOLIO DE TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090201" type="number" v-model="eri_401090201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090201" type="number" v-model="eri_401090201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FONDOS ADMINISTRADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090202" type="number" v-model="eri_401090202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090202" type="number" v-model="eri_401090202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FONDOS COLECTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090203" type="number" v-model="eri_401090203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090203" type="number" v-model="eri_401090203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090204" type="number" v-model="eri_401090204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090204" type="number" v-model="eri_401090204_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">FIDEICOMISOS MERCANTILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090205" type="number" v-model="eri_401090205" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090205" type="number" v-model="eri_401090205_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ENCARGOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090206" type="number" v-model="eri_401090206" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090206" type="number" v-model="eri_401090206_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR CALIFICACIÓN DE RIESGO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090207" type="number" v-model="eri_401090207" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090207" type="number" v-model="eri_401090207_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR REPRESENTACIÓN DE OBLIGACIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090208" type="number" v-model="eri_401090208" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090208" type="number" v-model="eri_401090208_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CUSTODIA, REGISTRO, COMPENSACIÓN Y LIQUIDACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4010903</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010903" type="number" disabled v-model="eri_4010903" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4010903" type="number" disabled v-model="eri_4010903_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUSTODIA VALORES MATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090301" type="number" v-model="eri_401090301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090301" type="number" v-model="eri_401090301_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUSTODIA VALORES DESMATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090302" type="number" v-model="eri_401090302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090302" type="number" v-model="eri_401090302_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">COMPENSACIÓN Y LIQUIDACIÓN DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090303" type="number" v-model="eri_401090303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090303" type="number" v-model="eri_401090303_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401090304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090304" type="number" v-model="eri_401090304" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401090304" type="number" v-model="eri_401090304_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">INGRESOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40110</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40110" type="number" disabled v-model="eri_40110" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40110" type="number" disabled v-model="eri_40110_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DIVIDENDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011001</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011001" type="number" v-model="eri_4011001" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011001" type="number" v-model="eri_4011001_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011002</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011002" type="number" v-model="eri_4011002" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011002" type="number" v-model="eri_4011002_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GANANCIAS EN INVERSIONES EN ASOCIADAS / SUBSIDIARIAS Y OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011003</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011003" type="number" v-model="eri_4011003" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011003" type="number" v-model="eri_4011003_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALUACION DE INSTRUMENTOS FINANCIEROS A VALOR RAZONABLE CON CAMBIO EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011004</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011004" type="number" v-model="eri_4011004" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011004" type="number" v-model="eri_4011004_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GANANCIA EN VENTA DE TITULOS VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011005</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011005" type="number" v-model="eri_4011005" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011005" type="number" v-model="eri_4011005_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS INGRESOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">4011006</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011006" type="number" v-model="eri_4011006" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 4011006" type="number" v-model="eri_4011006_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">(-) DESCUENTO EN VENTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40112</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40112" type="number" v-model="eri_40112" @blur="convertirNegativo_40112(eri_40112); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40112" type="number" v-model="eri_40112_ant" @blur="convertirNegativo_40112_ant(eri_40112_ant); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">(-) DEVOLUCIONES EN VENTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40113</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40113" type="number" v-model="eri_40113" @blur="convertirNegativo_40113(eri_40113); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40113" type="number" v-model="eri_40113_ant" @blur="convertirNegativo_40113_ant(eri_40113_ant); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">(-) BONIFICACIÓN EN PRODUCTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40114</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40114" type="number" v-model="eri_40114" @blur="convertirNegativo_40114(eri_40114); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40114" type="number" v-model="eri_40114_ant" @blur="convertirNegativo_40114_ant(eri_40114_ant); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">(-) OTRAS REBAJAS COMERCIALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40115</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40115" type="number" v-model="eri_40115" @blur="convertirNegativo_40115(eri_40115); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 40115" type="number" v-model="eri_40115_ant" @blur="convertirNegativo_40115_ant(eri_40115_ant); handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">UTILIDAD EN CAMBIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40116</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40116" type="number" v-model="eri_40116" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40116" type="number" v-model="eri_40116_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">INGRESOS DE ACTIVIDADES EXTRAORDINARIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401" type="number" disabled v-model="eri_401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 401" type="number" disabled v-model="eri_401_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
