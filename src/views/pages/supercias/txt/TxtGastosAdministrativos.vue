<script setup>
import { loadFromLocalStorage } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import { initializeGastosAdministrativos, initializeGastosAdministrativosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    gas_50202: null,
    gas_50202_ant: null,
  },
})

const gastosAdministrativos = initializeGastosAdministrativos()
const gastosAdministrativosAnt = initializeGastosAdministrativosAnt()

/* PERIODO ACTUAL */
const eri_50202 = gastosAdministrativos['eri_50202']
const eri_5020201 = gastosAdministrativos['eri_5020201']
const eri_5020202 = gastosAdministrativos['eri_5020202']
const eri_5020203 = gastosAdministrativos['eri_5020203']
const eri_5020204 = gastosAdministrativos['eri_5020204']
const eri_5020205 = gastosAdministrativos['eri_5020205']
const eri_5020206 = gastosAdministrativos['eri_5020206']
const eri_5020207 = gastosAdministrativos['eri_5020207']
const eri_5020208 = gastosAdministrativos['eri_5020208']
const eri_5020209 = gastosAdministrativos['eri_5020209']
const eri_5020210 = gastosAdministrativos['eri_5020210']
const eri_5020211 = gastosAdministrativos['eri_5020211']
const eri_5020212 = gastosAdministrativos['eri_5020212']
const eri_5020213 = gastosAdministrativos['eri_5020213']
const eri_5020214 = gastosAdministrativos['eri_5020214']
const eri_5020215 = gastosAdministrativos['eri_5020215']
const eri_5020216 = gastosAdministrativos['eri_5020216']
const eri_5020217 = gastosAdministrativos['eri_5020217']
const eri_5020218 = gastosAdministrativos['eri_5020218']
const eri_5020219 = gastosAdministrativos['eri_5020219']
const eri_5020220 = gastosAdministrativos['eri_5020220']
const eri_5020221 = gastosAdministrativos['eri_5020221']
const eri_502022101 = gastosAdministrativos['eri_502022101']
const eri_502022102 = gastosAdministrativos['eri_502022102']
const eri_502022103 = gastosAdministrativos['eri_502022103']
const eri_5020222 = gastosAdministrativos['eri_5020222']
const eri_502022201 = gastosAdministrativos['eri_502022201']
const eri_502022202 = gastosAdministrativos['eri_502022202']
const eri_5020223 = gastosAdministrativos['eri_5020223']
const eri_502022301 = gastosAdministrativos['eri_502022301']
const eri_502022302 = gastosAdministrativos['eri_502022302']
const eri_502022303 = gastosAdministrativos['eri_502022303']
const eri_502022304 = gastosAdministrativos['eri_502022304']
const eri_502022305 = gastosAdministrativos['eri_502022305']
const eri_502022306 = gastosAdministrativos['eri_502022306']
const eri_502022307 = gastosAdministrativos['eri_502022307']
const eri_5020224 = gastosAdministrativos['eri_5020224']
const eri_502022401 = gastosAdministrativos['eri_502022401']
const eri_502022402 = gastosAdministrativos['eri_502022402']
const eri_502022403 = gastosAdministrativos['eri_502022403']
const eri_5020225 = gastosAdministrativos['eri_5020225']
const eri_5020226 = gastosAdministrativos['eri_5020226']
const eri_5020227 = gastosAdministrativos['eri_5020227']
const eri_5020228 = gastosAdministrativos['eri_5020228']
const eri_5020229 = gastosAdministrativos['eri_5020229']

/* PERIODO ANTERIOR */
const eri_50202_ant = gastosAdministrativosAnt['eri_50202_ant']
const eri_5020201_ant = gastosAdministrativosAnt['eri_5020201_ant']
const eri_5020202_ant = gastosAdministrativosAnt['eri_5020202_ant']
const eri_5020203_ant = gastosAdministrativosAnt['eri_5020203_ant']
const eri_5020204_ant = gastosAdministrativosAnt['eri_5020204_ant']
const eri_5020205_ant = gastosAdministrativosAnt['eri_5020205_ant']
const eri_5020206_ant = gastosAdministrativosAnt['eri_5020206_ant']
const eri_5020207_ant = gastosAdministrativosAnt['eri_5020207_ant']
const eri_5020208_ant = gastosAdministrativosAnt['eri_5020208_ant']
const eri_5020209_ant = gastosAdministrativosAnt['eri_5020209_ant']
const eri_5020210_ant = gastosAdministrativosAnt['eri_5020210_ant']
const eri_5020211_ant = gastosAdministrativosAnt['eri_5020211_ant']
const eri_5020212_ant = gastosAdministrativosAnt['eri_5020212_ant']
const eri_5020213_ant = gastosAdministrativosAnt['eri_5020213_ant']
const eri_5020214_ant = gastosAdministrativosAnt['eri_5020214_ant']
const eri_5020215_ant = gastosAdministrativosAnt['eri_5020215_ant']
const eri_5020216_ant = gastosAdministrativosAnt['eri_5020216_ant']
const eri_5020217_ant = gastosAdministrativosAnt['eri_5020217_ant']
const eri_5020218_ant = gastosAdministrativosAnt['eri_5020218_ant']
const eri_5020219_ant = gastosAdministrativosAnt['eri_5020219_ant']
const eri_5020220_ant = gastosAdministrativosAnt['eri_5020220_ant']
const eri_5020221_ant = gastosAdministrativosAnt['eri_5020221_ant']
const eri_502022101_ant = gastosAdministrativosAnt['eri_502022101_ant']
const eri_502022102_ant = gastosAdministrativosAnt['eri_502022102_ant']
const eri_502022103_ant = gastosAdministrativosAnt['eri_502022103_ant']
const eri_5020222_ant = gastosAdministrativosAnt['eri_5020222_ant']
const eri_502022201_ant = gastosAdministrativosAnt['eri_502022201_ant']
const eri_502022202_ant = gastosAdministrativosAnt['eri_502022202_ant']
const eri_5020223_ant = gastosAdministrativosAnt['eri_5020223_ant']
const eri_502022301_ant = gastosAdministrativosAnt['eri_502022301_ant']
const eri_502022302_ant = gastosAdministrativosAnt['eri_502022302_ant']
const eri_502022303_ant = gastosAdministrativosAnt['eri_502022303_ant']
const eri_502022304_ant = gastosAdministrativosAnt['eri_502022304_ant']
const eri_502022305_ant = gastosAdministrativosAnt['eri_502022305_ant']
const eri_502022306_ant = gastosAdministrativosAnt['eri_502022306_ant']
const eri_502022307_ant = gastosAdministrativosAnt['eri_502022307_ant']
const eri_5020224_ant = gastosAdministrativosAnt['eri_5020224_ant']
const eri_502022401_ant = gastosAdministrativosAnt['eri_502022401_ant']
const eri_502022402_ant = gastosAdministrativosAnt['eri_502022402_ant']
const eri_502022403_ant = gastosAdministrativosAnt['eri_502022403_ant']
const eri_5020225_ant = gastosAdministrativosAnt['eri_5020225_ant']
const eri_5020226_ant = gastosAdministrativosAnt['eri_5020226_ant']
const eri_5020227_ant = gastosAdministrativosAnt['eri_5020227_ant']
const eri_5020228_ant = gastosAdministrativosAnt['eri_5020228_ant']
const eri_5020229_ant = gastosAdministrativosAnt['eri_5020229_ant']
const values = ref([])

const handleActionClick = async id => {
  eri_5020221.value = (Number(eri_502022101.value) + Number(eri_502022102.value) + Number(eri_502022103.value)).toFixed(2)
  eri_5020222.value = (Number(eri_502022201.value) + Number(eri_502022202.value)).toFixed(2)
  eri_5020223.value = (Number(eri_502022301.value) + Number(eri_502022302.value) + Number(eri_502022303.value) + Number(eri_502022304.value) + Number(eri_502022305.value) + Number(eri_502022306.value) + Number(eri_502022307.value)).toFixed(2)
  eri_5020224.value = (Number(eri_502022401.value) + Number(eri_502022402.value) + Number(eri_502022403.value)).toFixed(2)
  eri_50202.value = (Number(eri_5020201.value) + Number(eri_5020202.value) + Number(eri_5020203.value) + Number(eri_5020204.value) + Number(eri_5020205.value) + Number(eri_5020206.value) + Number(eri_5020207.value) + Number(eri_5020208.value) + Number(eri_5020209.value) + Number(eri_5020210.value) + Number(eri_5020211.value) + Number(eri_5020212.value) + Number(eri_5020213.value) + Number(eri_5020214.value) + Number(eri_5020215.value) + Number(eri_5020216.value) + Number(eri_5020217.value) + Number(eri_5020218.value) + Number(eri_5020219.value) + Number(eri_5020220.value) + Number(eri_5020221.value) + Number(eri_5020222.value) + Number(eri_5020223.value) + Number(eri_5020224.value) + Number(eri_5020225.value) + Number(eri_5020226.value) + Number(eri_5020227.value) + Number(eri_5020228.value) + Number(eri_5020229.value)).toFixed(2)

  props.data.gas_50202 = eri_50202.value

  const gastosadministrativos = {
    eri_50202: eri_50202.value,
    eri_5020201: eri_5020201.value,
    eri_5020202: eri_5020202.value,
    eri_5020203: eri_5020203.value,
    eri_5020204: eri_5020204.value,
    eri_5020205: eri_5020205.value,
    eri_5020206: eri_5020206.value,
    eri_5020207: eri_5020207.value,
    eri_5020208: eri_5020208.value,
    eri_5020209: eri_5020209.value,
    eri_5020210: eri_5020210.value,
    eri_5020211: eri_5020211.value,
    eri_5020212: eri_5020212.value,
    eri_5020213: eri_5020213.value,
    eri_5020214: eri_5020214.value,
    eri_5020215: eri_5020215.value,
    eri_5020216: eri_5020216.value,
    eri_5020217: eri_5020217.value,
    eri_5020218: eri_5020218.value,
    eri_5020219: eri_5020219.value,
    eri_5020220: eri_5020220.value,
    eri_5020221: eri_5020221.value,
    eri_502022101: eri_502022101.value,
    eri_502022102: eri_502022102.value,
    eri_502022103: eri_502022103.value,
    eri_5020222: eri_5020222.value,
    eri_502022201: eri_502022201.value,
    eri_502022202: eri_502022202.value,
    eri_5020223: eri_5020223.value,
    eri_502022301: eri_502022301.value,
    eri_502022302: eri_502022302.value,
    eri_502022303: eri_502022303.value,
    eri_502022304: eri_502022304.value,
    eri_502022305: eri_502022305.value,
    eri_502022306: eri_502022306.value,
    eri_502022307: eri_502022307.value,
    eri_5020224: eri_5020224.value,
    eri_502022401: eri_502022401.value,
    eri_502022402: eri_502022402.value,
    eri_502022403: eri_502022403.value,
    eri_5020225: eri_5020225.value,
    eri_5020226: eri_5020226.value,
    eri_5020227: eri_5020227.value,
    eri_5020228: eri_5020228.value,
    eri_5020229: eri_5020229.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    gastosadministrativosifluc: gastosadministrativos,
  })
}

const handleActionClick_ant = async id => {
  eri_50202_ant.value = (Number(eri_5020201_ant.value) + Number(eri_5020202_ant.value) + Number(eri_5020203_ant.value) + Number(eri_5020204_ant.value) + Number(eri_5020205_ant.value) + Number(eri_5020206_ant.value) + Number(eri_5020207_ant.value) + Number(eri_5020208_ant.value) + Number(eri_5020209_ant.value) + Number(eri_5020210_ant.value) + Number(eri_5020211_ant.value) + Number(eri_5020212_ant.value) + Number(eri_5020213_ant.value) + Number(eri_5020214_ant.value) + Number(eri_5020215_ant.value) + Number(eri_5020216_ant.value) + Number(eri_5020217_ant.value) + Number(eri_5020218_ant.value) + Number(eri_5020219_ant.value) + Number(eri_5020220_ant.value) + Number(eri_5020221_ant.value) + Number(eri_5020222_ant.value) + Number(eri_5020223_ant.value) + Number(eri_5020224_ant.value) + Number(eri_5020225_ant.value) + Number(eri_5020226_ant.value) + Number(eri_5020227_ant.value) + Number(eri_5020228_ant.value) + Number(eri_5020229_ant.value)).toFixed(2)
  eri_5020221_ant.value = (Number(eri_502022101_ant.value) + Number(eri_502022102_ant.value) + Number(eri_502022103_ant.value)).toFixed(2)
  eri_5020222_ant.value = (Number(eri_502022201_ant.value) + Number(eri_502022202_ant.value)).toFixed(2)
  eri_5020223_ant.value = (Number(eri_502022301_ant.value) + Number(eri_502022302_ant.value) + Number(eri_502022303_ant.value) + Number(eri_502022304_ant.value) + Number(eri_502022305_ant.value) + Number(eri_502022306_ant.value) + Number(eri_502022307_ant.value)).toFixed(2)
  eri_5020224_ant.value = (Number(eri_502022401_ant.value) + Number(eri_502022402_ant.value) + Number(eri_502022403_ant.value)).toFixed(2)

  localStorage.setItem('eri_50202_ant', eri_50202_ant.value)

  props.data.gas_50202_ant = eri_50202_ant.value

  const gastosadministrativos_ant = {
    eri_50202_ant: eri_50202_ant.value,
    eri_5020201_ant: eri_5020201_ant.value,
    eri_5020202_ant: eri_5020202_ant.value,
    eri_5020203_ant: eri_5020203_ant.value,
    eri_5020204_ant: eri_5020204_ant.value,
    eri_5020205_ant: eri_5020205_ant.value,
    eri_5020206_ant: eri_5020206_ant.value,
    eri_5020207_ant: eri_5020207_ant.value,
    eri_5020208_ant: eri_5020208_ant.value,
    eri_5020209_ant: eri_5020209_ant.value,
    eri_5020210_ant: eri_5020210_ant.value,
    eri_5020211_ant: eri_5020211_ant.value,
    eri_5020212_ant: eri_5020212_ant.value,
    eri_5020213_ant: eri_5020213_ant.value,
    eri_5020214_ant: eri_5020214_ant.value,
    eri_5020215_ant: eri_5020215_ant.value,
    eri_5020216_ant: eri_5020216_ant.value,
    eri_5020217_ant: eri_5020217_ant.value,
    eri_5020218_ant: eri_5020218_ant.value,
    eri_5020219_ant: eri_5020219_ant.value,
    eri_5020220_ant: eri_5020220_ant.value,
    eri_5020221_ant: eri_5020221_ant.value,
    eri_502022101_ant: eri_502022101_ant.value,
    eri_502022102_ant: eri_502022102_ant.value,
    eri_502022103_ant: eri_502022103_ant.value,
    eri_5020222_ant: eri_5020222_ant.value,
    eri_502022201_ant: eri_502022201_ant.value,
    eri_502022202_ant: eri_502022202_ant.value,
    eri_5020223_ant: eri_5020223_ant.value,
    eri_502022301_ant: eri_502022301_ant.value,
    eri_502022302_ant: eri_502022302_ant.value,
    eri_502022303_ant: eri_502022303_ant.value,
    eri_502022304_ant: eri_502022304_ant.value,
    eri_502022305_ant: eri_502022305_ant.value,
    eri_502022306_ant: eri_502022306_ant.value,
    eri_502022307_ant: eri_502022307_ant.value,
    eri_5020224_ant: eri_5020224_ant.value,
    eri_502022401_ant: eri_502022401_ant.value,
    eri_502022402_ant: eri_502022402_ant.value,
    eri_502022403_ant: eri_502022403_ant.value,
    eri_5020225_ant: eri_5020225_ant.value,
    eri_5020226_ant: eri_5020226_ant.value,
    eri_5020227_ant: eri_5020227_ant.value,
    eri_5020228_ant: eri_5020228_ant.value,
    eri_5020229_ant: eri_5020229_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    gastosadministrativosifluc_ant: gastosadministrativos_ant,
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
                  <span class="text-sm">5020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020201" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">APORTES A LA SEGURIDAD SOCIAL (INCLUIDO FONDO DE RESERVA)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020202" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">BENEFICIOS SOCIALES E INDEMNIZACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020203" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO PLANES DE BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020204" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">HONORARIOS, COMISIONES Y DIETAS A PERSONAS NATURALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020205" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020205" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">REMUNERACIONES A OTROS TRABAJADORES AUTÓNOMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020206" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020206" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">HONORARIOS A EXTRANJEROS POR SERVICIOS OCASIONALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020207" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020207" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">MANTENIMIENTO Y REPARACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020208" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020208" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ARRENDAMIENTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020209" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020209" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020210" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020210" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PROMOCIÓN Y PUBLICIDAD</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020211" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020211" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020211" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020211_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMBUSTIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020212" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020212" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020212" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020212_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LUBRICANTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020213" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020213" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020213" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020213_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SEGUROS Y REASEGUROS (PRIMAS Y CESIONES)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020214" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020214" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020214" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020214_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">TRANSPORTE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020215" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020215" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020215" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020215_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS DE GESTIÓN (AGASAJOS A ACCIONISTAS, TRABAJADORES Y CLIENTES)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020216" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020216" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020216" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020216_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS DE VIAJE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020217" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020217" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020217" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020217_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">AGUA, ENERGÍA, LUZ, Y TELECOMUNICACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020218" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020218" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020218" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020218_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">NOTARIOS Y REGISTRADORES DE LA PROPIEDAD O MERCANTILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020219" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020219" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020219" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020219_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">IMPUESTOS, CONTRIBUCIONES Y OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020220" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020220" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020220" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020220_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEPRECIACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020221" type="number" disabled v-model="eri_5020221" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020221" type="number" disabled v-model="eri_5020221_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022101" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022102" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ACTIVOS POR DERECHO DE USO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022103" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">AMORTIZACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020222</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020222" type="number" disabled v-model="eri_5020222" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020222" type="number" disabled v-model="eri_5020222_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022201" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS ACTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022202" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO DETERIORO:</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020223</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020223" type="number" disabled v-model="eri_5020223" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020223" type="number" disabled v-model="eri_5020223_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022301" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022302" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INSTRUMENTOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022303" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022304" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022304" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">CUENTAS POR COBRAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022305" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022305" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022305" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022305_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS ACTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022306" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022306" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022306" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022306_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">DERECHOS DE USO POR ACTIVOS ARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022307" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022307" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022307" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022307_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTOS POR CANTIDADES ANORMALES DE UTILIZACION EN EL PROCESO DE PRODUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020224</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020224" type="number" disabled v-model="eri_5020224" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020224" type="number" disabled v-model="eri_5020224_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">MANO DE OBRA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022401" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022401" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022401_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">MATERIALE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022402" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022402" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022402" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022402_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">COSTOS DE PRODUCCION</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502022403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022403" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_502022403" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502022403" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_502022403_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO POR REESTRUCTURACION</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020225</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020225" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020225" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020225" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020225_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALOR NETO DE REALIZACION DE INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020226</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020226" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020226" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020226" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020226_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">GASTO IMPUESTO A LA RENTA (ACTIVOS Y PASIVOS DIFERIDOS)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020227</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020227" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020227" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020227" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020227_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SUMINISTROS Y MATERIALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020228</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020228" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020228" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020228" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020228_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS GASTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020229</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020229" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020229" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020229" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020229_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GASTOS ADMINISTRATIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50202" type="number" disabled v-model="eri_50202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50202" type="number" disabled v-model="eri_50202_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
