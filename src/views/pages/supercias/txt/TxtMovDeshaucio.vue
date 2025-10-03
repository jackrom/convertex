<script setup>
import { initializeDeshaucio, initializeDeshaucioAnt } from "@core/utils/initializers"

const values = ref([])

import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const deshaucio = initializeDeshaucio()
const deshaucioAnt = initializeDeshaucioAnt()

/* PERIODO NUEVO */
let mov_saldoinicial = deshaucio['mov_saldoinicial']
let mov_costosporservicios = deshaucio['mov_costosporservicios']
let mov_costofinanciero = deshaucio['mov_costofinanciero']
let mov_gananciaoperdidaactuarial = deshaucio['mov_gananciaoperdidaactuarial']
let mov_otros = deshaucio['mov_otros']
let mov_efectodeliquidaciones = deshaucio['mov_efectodeliquidaciones']
let mov_beneficiospagados = deshaucio['mov_beneficiospagados']
let mov_saldofinalsegunmovimiento = deshaucio['mov_saldofinalsegunmovimiento']
let mov_diferenciaporcuadrar = deshaucio['mov_diferenciaporcuadrar']

/* PERIODO ANTERIOR */
let mov_saldoinicial_ant = deshaucioAnt['mov_saldoinicial_ant']
let mov_costosporservicios_ant = deshaucioAnt['mov_costosporservicios_ant']
let mov_costofinanciero_ant = deshaucioAnt['mov_costofinanciero_ant']
let mov_gananciaoperdidaactuarial_ant = deshaucioAnt['mov_gananciaoperdidaactuarial_ant']
let mov_otros_ant = deshaucioAnt['mov_otros_ant']
let mov_efectodeliquidaciones_ant = deshaucioAnt['mov_efectodeliquidaciones_ant']
let mov_beneficiospagados_ant = deshaucioAnt['mov_beneficiospagados_ant']
let mov_saldofinalsegunmovimiento_ant = deshaucioAnt['mov_saldofinalsegunmovimiento_ant']
let mov_diferenciaporcuadrar_ant = deshaucioAnt['mov_diferenciaporcuadrar_ant']

let convertirNegativo_efectodeliquidaciones_ant = async id => { mov_efectodeliquidaciones_ant.value = (Number(mov_efectodeliquidaciones_ant.value) != 0 && Number(mov_efectodeliquidaciones_ant.value) > 0) ? Number(mov_efectodeliquidaciones_ant.value) * -1 : Number(mov_efectodeliquidaciones_ant.value) }
let convertirNegativo_beneficiospagados_ant = async id => { mov_beneficiospagados_ant.value = (Number(mov_beneficiospagados_ant.value) != 0 && Number(mov_beneficiospagados_ant.value) > 0) ? Number(mov_beneficiospagados_ant.value) * -1 : Number(mov_beneficiospagados_ant.value) }
let convertirNegativo_efectodeliquidaciones = async id => { mov_efectodeliquidaciones.value = (Number(mov_efectodeliquidaciones.value) != 0 && Number(mov_efectodeliquidaciones.value) > 0) ? Number(mov_efectodeliquidaciones.value) * -1 : Number(mov_efectodeliquidaciones.value) }
let convertirNegativo_beneficiospagados = async id => { mov_beneficiospagados.value = (Number(mov_beneficiospagados.value) != 0 && Number(mov_beneficiospagados.value) > 0) ? Number(mov_beneficiospagados.value) * -1 : Number(mov_beneficiospagados.value) }

const mov_saldofinalsegunesf_ant = computed(() => {
  const valuePasivosCorrientes = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120201_ant", true)
  const valuePasivosNoCorrientes = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_202070201_ant", true)

  return (Number(valuePasivosCorrientes) + Number(valuePasivosNoCorrientes)).toFixed(2)
})

const mov_saldofinalsegunesf = computed(() => {
  const valuePasivosCorrientes = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120201")
  const valuePasivosNoCorrientes = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_202070201")

  return (Number(valuePasivosCorrientes) + Number(valuePasivosNoCorrientes)).toFixed(2)
})


const handleActionClick = async id => {
  mov_saldofinalsegunmovimiento.value = (Number(mov_saldoinicial.value) + Number(mov_costosporservicios.value) + Number(mov_costofinanciero.value) + Number(mov_gananciaoperdidaactuarial.value) + Number(mov_otros.value) + Number(mov_efectodeliquidaciones.value) + Number(mov_beneficiospagados.value)).toFixed(2)
  mov_saldoinicial.value = Number(mov_saldofinalsegunmovimiento_ant.value).toFixed(2)
  mov_diferenciaporcuadrar.value = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_desahucio(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_desahucio", mov_diferenciaporcuadrar.value)

  const deshaucio = {
    mov_saldoinicial: mov_saldoinicial.value,
    mov_costosporservicios: mov_costosporservicios.value,
    mov_costofinanciero: mov_costofinanciero.value,
    mov_gananciaoperdidaactuarial: mov_gananciaoperdidaactuarial.value,
    mov_otros: mov_otros.value,
    mov_efectodeliquidaciones: mov_efectodeliquidaciones.value,
    mov_beneficiospagados: mov_beneficiospagados.value,
    mov_saldofinalsegunmovimiento: mov_saldofinalsegunmovimiento.value,
    mov_saldofinalsegunesf: mov_saldofinalsegunesf.value,
    mov_diferenciaporcuadrar: mov_diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    deshaucio: deshaucio,
  })
}

const handleActionClick_ant = async id => {
  mov_saldofinalsegunmovimiento_ant.value = (Number(mov_saldoinicial_ant.value) + Number(mov_costosporservicios_ant.value) + Number(mov_costofinanciero_ant.value) + Number(mov_gananciaoperdidaactuarial_ant.value) + Number(mov_otros_ant.value) + Number(mov_efectodeliquidaciones_ant.value) + Number(mov_beneficiospagados_ant.value)).toFixed(2)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_desahucioAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_desahucio_ant", mov_diferenciaporcuadrar_ant.value)

  const deshaucio_ant = {
    mov_saldoinicial_ant: mov_saldoinicial_ant.value,
    mov_costosporservicios_ant: mov_costosporservicios_ant.value,
    mov_costofinanciero_ant: mov_costofinanciero_ant.value,
    mov_gananciaoperdidaactuarial_ant: mov_gananciaoperdidaactuarial_ant.value,
    mov_otros_ant: mov_otros_ant.value,
    mov_efectodeliquidaciones_ant: mov_efectodeliquidaciones_ant.value,
    mov_beneficiospagados_ant: mov_beneficiospagados_ant.value,
    mov_saldofinalsegunmovimiento_ant: mov_saldofinalsegunmovimiento_ant.value,
    mov_saldofinalsegunesf_ant: mov_saldofinalsegunesf_ant.value,
    mov_diferenciaporcuadrar_ant: mov_diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    deshaucio_ant: deshaucio_ant,
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
                  <span class="text-sm ml-5">(+) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" disabled type="number" v-model="mov_saldoinicial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) COSTO POR SERVICIOS ACTUALES Y PASADOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) costo por servicios" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_costosporservicios" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) costo por servicios" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_costosporservicios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) COSTO FINANCIERO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) costo financiero" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_costofinanciero" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) costo financiero" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_costofinanciero_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) GANANCIA O PÉRDIDA ACTUARIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ganancia o perdida" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_gananciaoperdidaactuarial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ganancia o perdida" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_gananciaoperdidaactuarial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) OTROS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_otros" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_otros_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) EFECTO DE LIQUIDACIONES ANTICIPADAS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) efectos de liquidaciones" @blur="convertirNegativo_efectodeliquidaciones(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_efectodeliquidaciones" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) efectos de liquidaciones" @blur="convertirNegativo_efectodeliquidaciones_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_efectodeliquidaciones_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) BENEFICIOS PAGADOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) beneficios pagados" @blur="convertirNegativo_beneficiospagados(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_beneficiospagados" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) beneficios pagados" @blur="convertirNegativo_beneficiospagados_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_beneficiospagados_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO FINAL SEGÚN MOVIMIENTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="mov_saldofinalsegunmovimiento" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="mov_saldofinalsegunmovimiento_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGUN ESF</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="mov_saldofinalsegunesf" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="mov_saldofinalsegunesf_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_diferenciaporcuadrar" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_diferenciaporcuadrar_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
