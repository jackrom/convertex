<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeGastosDeVentas, initializeGastosDeVentasAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    gas_50201: null,
    gas_50201_ant: null,
  },
})

const values = ref([])

const gastosDeVentas = initializeGastosDeVentas()
const gastosDeVentasAnt = initializeGastosDeVentasAnt()

/* PERIODO ACTUAL */
const eri_5020101 = gastosDeVentas['eri_5020101']
const eri_5020102 = gastosDeVentas['eri_5020102']
const eri_5020103 = gastosDeVentas['eri_5020103']
const eri_5020104 = gastosDeVentas['eri_5020104']
const eri_5020105 = gastosDeVentas['eri_5020105']
const eri_5020106 = gastosDeVentas['eri_5020106']
const eri_5020107 = gastosDeVentas['eri_5020107']
const eri_5020108 = gastosDeVentas['eri_5020108']
const eri_5020109 = gastosDeVentas['eri_5020109']
const eri_5020110 = gastosDeVentas['eri_5020110']
const eri_5020111 = gastosDeVentas['eri_5020111']
const eri_5020112 = gastosDeVentas['eri_5020112']
const eri_5020113 = gastosDeVentas['eri_5020113']
const eri_5020114 = gastosDeVentas['eri_5020114']
const eri_5020115 = gastosDeVentas['eri_5020115']
const eri_5020116 = gastosDeVentas['eri_5020116']
const eri_5020117 = gastosDeVentas['eri_5020117']
const eri_5020118 = gastosDeVentas['eri_5020118']
const eri_5020119 = gastosDeVentas['eri_5020119']
const eri_5020120 = gastosDeVentas['eri_5020120']
const eri_502012001 = gastosDeVentas['eri_502012001']
const eri_502012002 = gastosDeVentas['eri_502012002']
const eri_502012003 = gastosDeVentas['eri_502012003']
const eri_5020121 = gastosDeVentas['eri_5020121']
const eri_502012101 = gastosDeVentas['eri_502012101']
const eri_502012102 = gastosDeVentas['eri_502012102']
const eri_5020122 = gastosDeVentas['eri_5020122']
const eri_502012201 = gastosDeVentas['eri_502012201']
const eri_502012202 = gastosDeVentas['eri_502012202']
const eri_502012203 = gastosDeVentas['eri_502012203']
const eri_502012204 = gastosDeVentas['eri_502012204']
const eri_502012205 = gastosDeVentas['eri_502012205']
const eri_502012206 = gastosDeVentas['eri_502012206']
const eri_502012207 = gastosDeVentas['eri_502012207']
const eri_5020123 = gastosDeVentas['eri_5020123']
const eri_502012301 = gastosDeVentas['eri_502012301']
const eri_502012302 = gastosDeVentas['eri_502012302']
const eri_502012303 = gastosDeVentas['eri_502012303']
const eri_5020124 = gastosDeVentas['eri_5020124']
const eri_5020125 = gastosDeVentas['eri_5020125']
const eri_5020126 = gastosDeVentas['eri_5020126']
const eri_5020127 = gastosDeVentas['eri_5020127']
const eri_5020128 = gastosDeVentas['eri_5020128']

/* PERIODO ANTERIOR */
const eri_5020101_ant = gastosDeVentasAnt['eri_5020101_ant']
const eri_5020102_ant = gastosDeVentasAnt['eri_5020102_ant']
const eri_5020103_ant = gastosDeVentasAnt['eri_5020103_ant']
const eri_5020104_ant = gastosDeVentasAnt['eri_5020104_ant']
const eri_5020105_ant = gastosDeVentasAnt['eri_5020105_ant']
const eri_5020106_ant = gastosDeVentasAnt['eri_5020106_ant']
const eri_5020107_ant = gastosDeVentasAnt['eri_5020107_ant']
const eri_5020108_ant = gastosDeVentasAnt['eri_5020108_ant']
const eri_5020109_ant = gastosDeVentasAnt['eri_5020109_ant']
const eri_5020110_ant = gastosDeVentasAnt['eri_5020110_ant']
const eri_5020111_ant = gastosDeVentasAnt['eri_5020111_ant']
const eri_5020112_ant = gastosDeVentasAnt['eri_5020112_ant']
const eri_5020113_ant = gastosDeVentasAnt['eri_5020113_ant']
const eri_5020114_ant = gastosDeVentasAnt['eri_5020114_ant']
const eri_5020115_ant = gastosDeVentasAnt['eri_5020115_ant']
const eri_5020116_ant = gastosDeVentasAnt['eri_5020116_ant']
const eri_5020117_ant = gastosDeVentasAnt['eri_5020117_ant']
const eri_5020118_ant = gastosDeVentasAnt['eri_5020118_ant']
const eri_5020119_ant = gastosDeVentasAnt['eri_5020119_ant']
const eri_5020120_ant = gastosDeVentasAnt['eri_5020120_ant']
const eri_502012001_ant = gastosDeVentasAnt['eri_502012001_ant']
const eri_502012002_ant = gastosDeVentasAnt['eri_502012002_ant']
const eri_502012003_ant = gastosDeVentasAnt['eri_502012003_ant']
const eri_5020121_ant = gastosDeVentasAnt['eri_5020121_ant']
const eri_502012101_ant = gastosDeVentasAnt['eri_502012101_ant']
const eri_502012102_ant = gastosDeVentasAnt['eri_502012102_ant']
const eri_5020122_ant = gastosDeVentasAnt['eri_5020122_ant']
const eri_502012201_ant = gastosDeVentasAnt['eri_502012201_ant']
const eri_502012202_ant = gastosDeVentasAnt['eri_502012202_ant']
const eri_502012203_ant = gastosDeVentasAnt['eri_502012203_ant']
const eri_502012204_ant = gastosDeVentasAnt['eri_502012204_ant']
const eri_502012205_ant = gastosDeVentasAnt['eri_502012205_ant']
const eri_502012206_ant = gastosDeVentasAnt['eri_502012206_ant']
const eri_502012207_ant = gastosDeVentasAnt['eri_502012207_ant']
const eri_5020123_ant = gastosDeVentasAnt['eri_5020123_ant']
const eri_502012301_ant = gastosDeVentasAnt['eri_502012301_ant']
const eri_502012302_ant = gastosDeVentasAnt['eri_502012302_ant']
const eri_502012303_ant = gastosDeVentasAnt['eri_502012303_ant']
const eri_5020124_ant = gastosDeVentasAnt['eri_5020124_ant']
const eri_5020125_ant = gastosDeVentasAnt['eri_5020125_ant']
const eri_5020126_ant = gastosDeVentasAnt['eri_5020126_ant']
const eri_5020127_ant = gastosDeVentasAnt['eri_5020127_ant']
const eri_5020128_ant = gastosDeVentasAnt['eri_5020128_ant']
const eri_50201_ant = gastosDeVentasAnt['eri_50201_ant']

const eri_50201 = ref(reportStore.getSingleReportValue("gastosdeventasifluc",'eri_50201'))


const handleActionClick = async id => {
  eri_5020120.value = (Number(eri_502012001.value) + Number(eri_502012002.value) + Number(eri_502012003.value)).toFixed(2)
  eri_5020121.value = (Number(eri_502012101.value) + Number(eri_502012102.value)).toFixed(2)
  eri_5020122.value = (Number(eri_502012201.value) + Number(eri_502012202.value) + Number(eri_502012203.value) + Number(eri_502012204.value) + Number(eri_502012205.value) + Number(eri_502012206.value) + Number(eri_502012207.value)).toFixed(2)
  eri_5020123.value = (Number(eri_502012301.value) + Number(eri_502012302.value) + Number(eri_502012303.value)).toFixed(2)

  eri_50201.value = (Number(eri_5020101.value) + Number(eri_5020102.value) + Number(eri_5020103.value) + Number(eri_5020104.value) + Number(eri_5020105.value) + Number(eri_5020106.value) + Number(eri_5020107.value) + Number(eri_5020108.value) + Number(eri_5020109.value) + Number(eri_5020110.value) + Number(eri_5020111.value) + Number(eri_5020112.value) + Number(eri_5020113.value) + Number(eri_5020114.value) + Number(eri_5020115.value) + Number(eri_5020116.value) + Number(eri_5020117.value) + Number(eri_5020118.value) + Number(eri_5020119.value) + Number(eri_5020120.value) + Number(eri_5020121.value) + Number(eri_5020122.value) + Number(eri_5020123.value) + Number(eri_5020124.value) + Number(eri_5020125.value) + Number(eri_5020126.value) + Number(eri_5020127.value) + Number(eri_5020128.value)).toFixed(2)

  props.data.gas_50201 = eri_50201.value

  const gastosdeventas = {
    eri_50201: eri_50201.value,
    eri_5020101: eri_5020101.value,
    eri_5020102: eri_5020102.value,
    eri_5020103: eri_5020103.value,
    eri_5020104: eri_5020104.value,
    eri_5020105: eri_5020105.value,
    eri_5020106: eri_5020106.value,
    eri_5020107: eri_5020107.value,
    eri_5020108: eri_5020108.value,
    eri_5020109: eri_5020109.value,
    eri_5020110: eri_5020110.value,
    eri_5020111: eri_5020111.value,
    eri_5020112: eri_5020112.value,
    eri_5020113: eri_5020113.value,
    eri_5020114: eri_5020114.value,
    eri_5020115: eri_5020115.value,
    eri_5020116: eri_5020116.value,
    eri_5020117: eri_5020117.value,
    eri_5020118: eri_5020118.value,
    eri_5020119: eri_5020119.value,
    eri_5020120: eri_5020120.value,
    eri_502012001: eri_502012001.value,
    eri_502012002: eri_502012002.value,
    eri_502012003: eri_502012003.value,
    eri_5020121: eri_5020121.value,
    eri_502012101: eri_502012101.value,
    eri_502012102: eri_502012102.value,
    eri_5020122: eri_5020122.value,
    eri_502012201: eri_502012201.value,
    eri_502012202: eri_502012202.value,
    eri_502012203: eri_502012203.value,
    eri_502012204: eri_502012204.value,
    eri_502012205: eri_502012205.value,
    eri_502012206: eri_502012206.value,
    eri_502012207: eri_502012207.value,
    eri_5020123: eri_5020123.value,
    eri_502012301: eri_502012301.value,
    eri_502012302: eri_502012302.value,
    eri_502012303: eri_502012303.value,
    eri_5020124: eri_5020124.value,
    eri_5020125: eri_5020125.value,
    eri_5020126: eri_5020126.value,
    eri_5020127: eri_5020127.value,
    eri_5020128: eri_5020128.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    gastosdeventasifluc: gastosdeventas,
  })
}


const handleActionClick_ant = async id => {
  eri_50201_ant.value = (Number(eri_5020101_ant.value) + Number(eri_5020102_ant.value) + Number(eri_5020103_ant.value) + Number(eri_5020104_ant.value) + Number(eri_5020105_ant.value) + Number(eri_5020106_ant.value) + Number(eri_5020107_ant.value) + Number(eri_5020108_ant.value) + Number(eri_5020109_ant.value) + Number(eri_5020110_ant.value) + Number(eri_5020111_ant.value) + Number(eri_5020112_ant.value) + Number(eri_5020113_ant.value) + Number(eri_5020114_ant.value) + Number(eri_5020115_ant.value) + Number(eri_5020116_ant.value) + Number(eri_5020117_ant.value) + Number(eri_5020118_ant.value) + Number(eri_5020119_ant.value) + Number(eri_5020120_ant.value) + Number(eri_5020121_ant.value) + Number(eri_5020122_ant.value) + Number(eri_5020123_ant.value) + Number(eri_5020124_ant.value) + Number(eri_5020125_ant.value) + Number(eri_5020126_ant.value) + Number(eri_5020127_ant.value) + Number(eri_5020128_ant.value)).toFixed(2)
  eri_5020120_ant.value = (Number(eri_502012001_ant.value) + Number(eri_502012002_ant.value) + Number(eri_502012003_ant.value)).toFixed(2)
  eri_5020121_ant.value = (Number(eri_502012101_ant.value) + Number(eri_502012102_ant.value)).toFixed(2)
  eri_5020122_ant.value = (Number(eri_502012201_ant.value) + Number(eri_502012202_ant.value) + Number(eri_502012203_ant.value) + Number(eri_502012204_ant.value) + Number(eri_502012205_ant.value) + Number(eri_502012206_ant.value) + Number(eri_502012207_ant.value)).toFixed(2)
  eri_5020123_ant.value = (Number(eri_502012301_ant.value) + Number(eri_502012302_ant.value) + Number(eri_502012303_ant.value)).toFixed(2)

  localStorage.setItem('eri_50201_ant', eri_50201_ant.value)
  props.data.gas_50201_ant = eri_50201_ant.value

  const gastosdeventas_ant = {
    eri_50201_ant: eri_50201_ant.value,
    eri_5020101_ant: eri_5020101_ant.value,
    eri_5020102_ant: eri_5020102_ant.value,
    eri_5020103_ant: eri_5020103_ant.value,
    eri_5020104_ant: eri_5020104_ant.value,
    eri_5020105_ant: eri_5020105_ant.value,
    eri_5020106_ant: eri_5020106_ant.value,
    eri_5020107_ant: eri_5020107_ant.value,
    eri_5020108_ant: eri_5020108_ant.value,
    eri_5020109_ant: eri_5020109_ant.value,
    eri_5020110_ant: eri_5020110_ant.value,
    eri_5020111_ant: eri_5020111_ant.value,
    eri_5020112_ant: eri_5020112_ant.value,
    eri_5020113_ant: eri_5020113_ant.value,
    eri_5020114_ant: eri_5020114_ant.value,
    eri_5020115_ant: eri_5020115_ant.value,
    eri_5020116_ant: eri_5020116_ant.value,
    eri_5020117_ant: eri_5020117_ant.value,
    eri_5020118_ant: eri_5020118_ant.value,
    eri_5020119_ant: eri_5020119_ant.value,
    eri_5020120_ant: eri_5020120_ant.value,
    eri_502012001_ant: eri_502012001_ant.value,
    eri_502012002_ant: eri_502012002_ant.value,
    eri_502012003_ant: eri_502012003_ant.value,
    eri_5020121_ant: eri_5020121_ant.value,
    eri_502012101_ant: eri_502012101_ant.value,
    eri_502012102_ant: eri_502012102_ant.value,
    eri_5020122_ant: eri_5020122_ant.value,
    eri_502012201_ant: eri_502012201_ant.value,
    eri_502012202_ant: eri_502012202_ant.value,
    eri_502012203_ant: eri_502012203_ant.value,
    eri_502012204_ant: eri_502012204_ant.value,
    eri_502012205_ant: eri_502012205_ant.value,
    eri_502012206_ant: eri_502012206_ant.value,
    eri_502012207_ant: eri_502012207_ant.value,
    eri_5020123_ant: eri_5020123_ant.value,
    eri_502012301_ant: eri_502012301_ant.value,
    eri_502012302_ant: eri_502012302_ant.value,
    eri_502012303_ant: eri_502012303_ant.value,
    eri_5020124_ant: eri_5020124_ant.value,
    eri_5020125_ant: eri_5020125_ant.value,
    eri_5020126_ant: eri_5020126_ant.value,
    eri_5020127_ant: eri_5020127_ant.value,
    eri_5020128_ant: eri_5020128_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    gastosdeventasifluc_ant: gastosdeventas_ant,
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
                  <span class="text-sm ml-9">SUELDOS, SALARIOS Y DEMÁS REMUNERACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020101" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">APORTES A LA SEGURIDAD SOCIAL (INCLUIDO FONDO DE RESERVA)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020102" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">BENEFICIOS SOCIALES E INDEMNIZACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020103" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO PLANES DE BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020104" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">HONORARIOS, COMISIONES Y DIETAS A PERSONAS NATURALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020105" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number"  v-model="eri_5020105"/>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020105" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number"  v-model="eri_5020105_ant"/>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">REMUNERACIONES A OTROS TRABAJADORES AUTÓNOMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020106" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020106" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020106_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">HONORARIOS A EXTRANJEROS POR SERVICIOS OCASIONALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020107" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020107" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020107" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020107_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">MANTENIMIENTO Y REPARACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020108" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020108" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020108" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020108_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ARRENDAMIENTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020109</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020109" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020109" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020109" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020109_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020110</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020110" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020110" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020110" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020110_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PROMOCIÓN Y PUBLICIDAD</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020111</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020111" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020111" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020111" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020111_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMBUSTIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020112" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020112" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020112" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020112_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LUBRICANTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020113</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020113" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020113" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020113" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020113_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SEGUROS Y REASEGUROS (PRIMAS Y CESIONES)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020114</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020114" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020114" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020114" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020114_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">TRANSPORTE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020115</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020115" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020115" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020115" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020115_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS DE GESTIÓN (AGASAJOS A ACCIONISTAS, TRABAJADORES Y CLIENTES)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020116</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020116" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020116" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020116" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020116_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS DE VIAJE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020117</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020117" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020117" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020117" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020117_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">AGUA, ENERGÍA, LUZ, Y TELECOMUNICACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020118</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020118" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020118" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020118" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020118_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">NOTARIOS Y REGISTRADORES DE LA PROPIEDAD O MERCANTILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020119</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020119" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020119" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020119" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020119_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEPRECIACIONES:</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020120</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020120" type="number" disabled v-model="eri_5020120" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020120" type="number" disabled v-model="eri_5020120_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012001</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012001" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012001" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012001" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012001_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012002</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012002" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012002" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012002" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012002_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ACTIVOS POR DERECHO DE USO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012003</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012003" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012003" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012003" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012003_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">AMORTIZACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020121</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020121" type="number" disabled v-model="eri_5020121" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020121" type="number" disabled v-model="eri_5020121_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012101" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS ACTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012102" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO DETERIORO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020122</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020122" type="number" disabled v-model="eri_5020122" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020122" type="number" disabled v-model="eri_5020122_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012201" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012202" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INSTRUMENTOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012203" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012204" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUENTAS POR COBRAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012205" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012205" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS ACTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012206" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012206" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">DERECHOS DE USO POR ACTIVOS ARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012207" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012207" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS POR CANTIDADES ANORMALES DE UTILIZACION EN EL PROCESO DE PRODUCCIÓN:</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020123</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020123" type="number" disabled v-model="eri_5020123" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020123" type="number" disabled v-model="eri_5020123_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">MANO DE OBRA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012301" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">MATERIALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012302" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">COSTOS DE PRODUCCION</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502012303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502012303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502012303" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502012303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO POR REESTRUCTURACION</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020124</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020124" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020124" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020124" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020124_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALOR NETO DE REALIZACION DE INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020125</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020125" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020125" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020125" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020125_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO IMPUESTO A LA RENTA (ACTIVOS Y PASIVOS DIFERIDOS)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020126</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020126" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020126" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020126" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020126_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUMINISTROS Y MATERIALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020127</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020127" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020127" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020127" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020127_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS GASTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020128</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020128" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020128" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020128" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020128_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GASTOS DE VENTA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50201" type="number" disabled v-model="eri_50201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50201" type="number" disabled v-model="eri_50201_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
