<script setup>
import { loadFromLocalStorage } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import {
  initializeMovPerdidasAcumuladasValorNetoRealizacion,
  initializeMovPerdidasAcumuladasValorNetoRealizacionAnt,
} from "@core/utils/initializers"

const reportStore = useReportStore()

const values = ref([])

const movPerdidasAcumValorNeto = initializeMovPerdidasAcumuladasValorNetoRealizacion()
const movPerdidasAcumValorNetoAnt = initializeMovPerdidasAcumuladasValorNetoRealizacionAnt()

/* PERIODO NUEVO */
let saldoinicial = movPerdidasAcumValorNeto['saldoinicial']
let provisionesdelanio = movPerdidasAcumValorNeto['provisionesdelanio']
let bajasoreversiones = movPerdidasAcumValorNeto['bajasoreversiones']
let ajustes = movPerdidasAcumValorNeto['ajustes']
let saldofinalsegunmovimiento = movPerdidasAcumValorNeto['saldofinalsegunmovimiento']
let diferenciaporcuadrar = movPerdidasAcumValorNeto['diferenciaporcuadrar']

/* PERIODO ANTERIOR */
let saldoinicial_ant = movPerdidasAcumValorNetoAnt['saldoinicial_ant']
let provisionesdelanio_ant = movPerdidasAcumValorNetoAnt['provisionesdelanio_ant']
let bajasoreversiones_ant = movPerdidasAcumValorNetoAnt['bajasoreversiones_ant']
let ajustes_ant = movPerdidasAcumValorNetoAnt['ajustes_ant']
let saldofinalsegunmovimiento_ant = movPerdidasAcumValorNetoAnt['saldofinalsegunmovimiento_ant']
let diferenciaporcuadrar_ant = movPerdidasAcumValorNetoAnt['diferenciaporcuadrar_ant']

let convertirNegativo_saldoinicial_ant = async id => { saldoinicial_ant.value = (Number(saldoinicial_ant.value) != 0 && Number(saldoinicial_ant.value) > 0) ? Number(saldoinicial_ant.value) * -1 : Number(saldoinicial_ant.value) }
let convertirNegativo_provisionesdelanio_ant = async id => { provisionesdelanio_ant.value = (Number(provisionesdelanio_ant.value) != 0 && Number(provisionesdelanio_ant.value) > 0) ? Number(provisionesdelanio_ant.value) * -1 : Number(provisionesdelanio_ant.value) }

let convertirNegativo_provisionesdelanio = async id => { provisionesdelanio.value = (Number(provisionesdelanio.value) != 0 && Number(provisionesdelanio.value) > 0) ? Number(provisionesdelanio.value) * -1 : Number(provisionesdelanio.value) }

const saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010313_ant", true)).toFixed(2)
})

const saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010313")).toFixed(2)
})

const handleActionClick = async id => {
  saldoinicial.value = saldofinalsegunmovimiento_ant.value
  saldofinalsegunmovimiento.value = (Number(saldoinicial.value) + Number(provisionesdelanio.value) + Number(bajasoreversiones.value) + Number(ajustes.value)).toFixed(2)
  diferenciaporcuadrar.value = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_pavndryopei(diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_pavndryopei", diferenciaporcuadrar.value)

  const movperdidasacumuladasvalornetorealizacion = {
    saldoinicial: saldoinicial.value,
    provisionesdelanio: provisionesdelanio.value,
    bajasoreversiones: bajasoreversiones.value,
    ajustes: ajustes.value,
    saldofinalsegunmovimiento: saldofinalsegunmovimiento.value,
    saldofinalsegunesf: saldofinalsegunesf.value,
    diferenciaporcuadrar: diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movperdidasacumuladasvalornetorealizacion: movperdidasacumuladasvalornetorealizacion,
  })
}

const handleActionClick_ant = async id => {
  console.log(Number(saldoinicial_ant.value))
  console.log(Number(provisionesdelanio_ant.value))
  console.log(Number(bajasoreversiones_ant.value))
  console.log(Number(ajustes_ant.value))
  saldofinalsegunmovimiento_ant.value = ((Number(saldoinicial_ant.value)) + (Number(provisionesdelanio_ant.value)) + (Number(bajasoreversiones_ant.value)) + (Number(ajustes_ant.value))).toFixed(2)

  console.log('saldofinalsegunmovimiento_ant ', saldofinalsegunmovimiento_ant.value)

  diferenciaporcuadrar_ant.value = (Number(saldofinalsegunmovimiento_ant.value) - Number(saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_pavndryopeiAnt(diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_pavndryopei_ant", diferenciaporcuadrar_ant.value)

  const movperdidasacumuladasvalornetorealizacion_ant = {
    saldoinicial_ant: saldoinicial_ant.value,
    provisionesdelanio_ant: provisionesdelanio_ant.value,
    bajasoreversiones_ant: bajasoreversiones_ant.value,
    ajustes_ant: ajustes_ant.value,
    saldofinalsegunmovimiento_ant: saldofinalsegunmovimiento_ant.value,
    saldofinalsegunesf_ant: saldofinalsegunesf_ant.value,
    diferenciaporcuadrar_ant: diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movperdidasacumuladasvalornetorealizacion_ant: movperdidasacumuladasvalornetorealizacion_ant,
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
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo inicial" disabled type="number" v-model="saldoinicial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo inicial" @blur="convertirNegativo_saldoinicial_ant(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) PROVISIONES DEL AÑO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provisiones del año" @blur="convertirNegativo_provisionesdelanio(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="provisionesdelanio" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provisiones del año" @blur="convertirNegativo_provisionesdelanio_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="provisionesdelanio_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) BAJAS O REVERSIONES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) bajas o reversiones" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="bajasoreversiones" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) bajas o reversiones" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="bajasoreversiones_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="ajustes" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="ajustes_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO FINAL SEGÚN MOVIMIENTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="saldofinalsegunmovimiento" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="saldofinalsegunmovimiento_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGUN ESF</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="saldofinalsegunesf" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="saldofinalsegunesf_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="diferenciaporcuadrar" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="diferenciaporcuadrar_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
