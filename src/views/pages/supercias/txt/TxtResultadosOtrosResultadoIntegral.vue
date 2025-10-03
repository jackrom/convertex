<script setup>
import { useReportStore } from "@/@store/reportStore"
import {
  initializeOtrosResultadosIntegralAntRefs,
  initializeOtrosResultadosIntegralRefs,
} from "@core/utils/initializers"

const reportStore = useReportStore()

const otrosResultados = initializeOtrosResultadosIntegralRefs()
const otrosResultadosAnt = initializeOtrosResultadosIntegralAntRefs()

/* PERIODO NUEVO */
let eri_800 = otrosResultados['eri_800']
let eri_80001 = otrosResultados['eri_80001']
let eri_80002 = otrosResultados['eri_80002']
let eri_80003 = otrosResultados['eri_80003']
let eri_80004 = otrosResultados['eri_80004']
let eri_80005 = otrosResultados['eri_80005']
let eri_80006 = otrosResultados['eri_80006']
let eri_80007 = otrosResultados['eri_80007']
let eri_80008 = otrosResultados['eri_80008']
let eri_80009 = otrosResultados['eri_80009']
let eri_801 = otrosResultados['eri_801']

/* PERIODO ANTERIOR */
let eri_800_ant = otrosResultadosAnt['eri_800_ant']
let eri_80001_ant = otrosResultadosAnt['eri_80001_ant']
let eri_80002_ant = otrosResultadosAnt['eri_80002_ant']
let eri_80003_ant = otrosResultadosAnt['eri_80003_ant']
let eri_80004_ant = otrosResultadosAnt['eri_80004_ant']
let eri_80005_ant = otrosResultadosAnt['eri_80005_ant']
let eri_80006_ant = otrosResultadosAnt['eri_80006_ant']
let eri_80007_ant = otrosResultadosAnt['eri_80007_ant']
let eri_80008_ant = otrosResultadosAnt['eri_80008_ant']
let eri_80009_ant = otrosResultadosAnt['eri_80009_ant']
let eri_801_ant = otrosResultadosAnt['eri_801_ant']

let convertirNegativo_80006_ant = async id => { eri_80006_ant.value = (Number(eri_80006_ant.value) > 0) ? Number(eri_80006_ant.value) * -1 : Number(eri_80006_ant.value) }
let convertirNegativo_80006 = async id => { eri_80006.value = (Number(eri_80006.value)  > 0) ? Number(eri_80006.value) * -1 : Number(eri_80006.value) }

const eri_707 = computed(() => {
  return Number(reportStore.getSingleReportValue("operacionesdiscontinuadasifluc", "eri_707")).toFixed(2)
})

const eri_707_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("operacionesdiscontinuadasifluc_ant", "eri_707_ant", true)).toFixed(2)
})

const handleActionClick = async id => {
  eri_800.value = (Number(eri_80001.value) + Number(eri_80002.value) + Number(eri_80003.value) + Number(eri_80004.value) + Number(eri_80005.value) + Number(eri_80006.value) + Number(eri_80007.value) + Number(eri_80008.value) + Number(eri_80009.value)).toFixed(2)
  eri_801.value = (Number(eri_707.value) + Number(eri_800.value)).toFixed(2)

  const otrosresultadosintegral = {
    eri_800: eri_800.value,
    eri_80001: eri_80001.value,
    eri_80002: eri_80002.value,
    eri_80003: eri_80003.value,
    eri_80004: eri_80004.value,
    eri_80005: eri_80005.value,
    eri_80006: eri_80006.value,
    eri_80007: eri_80007.value,
    eri_80008: eri_80008.value,
    eri_80009: eri_80009.value,
    eri_801: eri_801.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    otrosresultadosintegralifluc: otrosresultadosintegral,
  })
}

const handleActionClick_ant = async id => {
  eri_800_ant.value = (Number(eri_80001_ant.value) + Number(eri_80002_ant.value) + Number(eri_80003_ant.value) + Number(eri_80004_ant.value) + Number(eri_80005_ant.value) + Number(eri_80006_ant.value) + Number(eri_80007_ant.value) + Number(eri_80008_ant.value) + Number(eri_80009_ant.value)).toFixed(2)
  eri_801_ant.value = (Number(eri_707_ant.value) + Number(eri_800_ant.value)).toFixed(2)

  const otrosresultadosintegral_ant = {
    eri_800_ant: eri_800_ant.value,
    eri_80001_ant: eri_80001_ant.value,
    eri_80002_ant: eri_80002_ant.value,
    eri_80003_ant: eri_80003_ant.value,
    eri_80004_ant: eri_80004_ant.value,
    eri_80005_ant: eri_80005_ant.value,
    eri_80006_ant: eri_80006_ant.value,
    eri_80007_ant: eri_80007_ant.value,
    eri_80008_ant: eri_80008_ant.value,
    eri_80009_ant: eri_80009_ant.value,
    eri_801_ant: eri_801_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    otrosresultadosintegralifluc_ant: otrosresultadosintegral_ant,
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
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">800</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 800" type="number" disabled v-model="eri_800" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 800" type="number" disabled v-model="eri_800_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">COMPONENTES DEL OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80001</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80001" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80001" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80001" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80001_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">DIFERENCIA POR CAMBIO DE CONVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80002</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80002" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80002" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80002" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80002_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">VALUACIÓN DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIO EN OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80003</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80003" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80003" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80003" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80003_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">GANANCIAS POR REVALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80004</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80004" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80004" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80004" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80004_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">GANANCIAS (PÉRDIDAS) ACTUARIALES POR PLANES DE BENEFICIOS DEFINIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80005</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80005" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80005" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80005" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80005_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">REVERSIÓN DEL DETERIORO (PÉRDIDA POR DETERIORO) DE UN ACTIVO REVALUADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80006</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 80006" @blur="convertirNegativo_80006(eri_80006); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80006" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 80006" @blur="convertirNegativo_80006_ant(eri_80006_ant); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80006_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">PARTICIPACION DE OTRO RESULTADO INTEGRAL DE ASOCIADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80007</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80007" @blur="handleActionClick(this)" type="number" v-model="eri_80007" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80007" @blur="handleActionClick_ant(this)" type="number" v-model="eri_80007_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">IMPUESTO SOBRE LAS GANANCIAS RELATIVO A OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80008</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80008" @blur="handleActionClick(this)" type="number" v-model="eri_80008" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80008" @blur="handleActionClick_ant(this)" type="number" v-model="eri_80008_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">OTROS (DETALLAR EN NOTAS)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80009</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80009" @blur="handleActionClick(this)" type="number" v-model="eri_80009" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80009" @blur="handleActionClick_ant(this)" type="number" v-model="eri_80009_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">RESULTADO INTEGRAL TOTAL DEL AÑO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">801</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 801" type="number" disabled v-model="eri_801" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 801" type="number" disabled v-model="eri_801_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
