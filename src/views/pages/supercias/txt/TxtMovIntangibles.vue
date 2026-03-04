<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeMovIntangibles, initializeMovIntangiblesAnt } from "@core/utils/initializers"

const reportStore = useReportStore()
const values = ref([])

const movIntangibles = initializeMovIntangibles()
const movIntangibleAnt = initializeMovIntangiblesAnt()

/* PERIODO NUEVO */
let mov_saldoinicialcosto = movIntangibles['mov_saldoinicialcosto']
let mov_saldoinicialamortizacionacumulada = movIntangibles['mov_saldoinicialamortizacionacumulada']
let mov_compras = movIntangibles['mov_compras']
let mov_bajasincluida = movIntangibles['mov_bajasincluida']
let mov_otros = movIntangibles['mov_otros']
let mov_gastosdeamortizacion = movIntangibles['mov_gastosdeamortizacion']
let mov_saldofinalsegunmovimiento = movIntangibles['mov_saldofinalsegunmovimiento']
let mov_diferenciaporcuadrar = movIntangibles['mov_diferenciaporcuadrar']

/* PERIODO ANTERIOR */
let mov_saldoinicialcosto_ant = movIntangibleAnt['mov_saldoinicialcosto_ant']
let mov_saldoinicialamortizacionacumulada_ant = movIntangibleAnt['mov_saldoinicialamortizacionacumulada_ant']
let mov_compras_ant = movIntangibleAnt['mov_compras_ant']
let mov_bajasincluida_ant = movIntangibleAnt['mov_bajasincluida_ant']
let mov_otros_ant = movIntangibleAnt['mov_otros_ant']
let mov_gastosdeamortizacion_ant = movIntangibleAnt['mov_gastosdeamortizacion_ant']
let mov_saldofinalsegunmovimiento_ant = movIntangibleAnt['mov_saldofinalsegunmovimiento_ant']
let mov_diferenciaporcuadrar_ant = movIntangibleAnt['mov_diferenciaporcuadrar_ant']

let convertirNegativo_saldoinicialamortizacionacumulada_ant = async id => { mov_saldoinicialamortizacionacumulada_ant.value = (Number(mov_saldoinicialamortizacionacumulada_ant.value) != 0 && Number(mov_saldoinicialamortizacionacumulada_ant.value) > 0) ? Number(mov_saldoinicialamortizacionacumulada_ant.value) * -1 : Number(mov_saldoinicialamortizacionacumulada_ant.value) }
let convertirNegativo_bajasincluida_ant = async id => { mov_bajasincluida_ant.value = (Number(mov_bajasincluida_ant.value) != 0 && Number(mov_bajasincluida_ant.value) > 0) ? Number(mov_bajasincluida_ant.value) * -1 : Number(mov_bajasincluida_ant.value) }
let convertirNegativo_gastordeamortizacion_ant = async id => { mov_gastosdeamortizacion_ant.value = (Number(mov_gastosdeamortizacion_ant.value) != 0 && Number(mov_gastosdeamortizacion_ant.value) > 0) ? Number(mov_gastosdeamortizacion_ant.value) * -1 : Number(mov_gastosdeamortizacion_ant.value) }

let convertirNegativo_saldoinicialamortizacionacumulada = async id => { mov_saldoinicialamortizacionacumulada.value = (Number(mov_saldoinicialamortizacionacumulada.value) != 0 && Number(mov_saldoinicialamortizacionacumulada.value) > 0) ? Number(mov_saldoinicialamortizacionacumulada.value) * -1 : Number(mov_saldoinicialamortizacionacumulada.value) }
let convertirNegativo_bajasincluida = async id => { mov_bajasincluida.value = (Number(mov_bajasincluida.value) != 0 && Number(mov_bajasincluida.value) > 0) ? Number(mov_bajasincluida.value) * -1 : Number(mov_bajasincluida.value) }
let convertirNegativo_gastordeamortizacion = async id => { mov_gastosdeamortizacion.value = (Number(mov_gastosdeamortizacion.value) != 0 && Number(mov_gastosdeamortizacion.value) > 0) ? Number(mov_gastosdeamortizacion.value) * -1 : Number(mov_gastosdeamortizacion.value) }

const mov_saldofinalsegunesf_ant = computed(() => {
  return reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10204_ant", true)
})

const mov_saldofinalsegunesf = computed(() => {
  return reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10204")
})


const handleActionClick = async id => {
  mov_saldoinicialcosto.value = Number(mov_saldofinalsegunmovimiento_ant.value)
  mov_saldofinalsegunmovimiento.value = Number(mov_saldoinicialcosto.value) + Number(mov_saldoinicialamortizacionacumulada.value) + Number(mov_compras.value) + Number(mov_bajasincluida.value) + Number(mov_otros.value) + Number(mov_gastosdeamortizacion.value)
  mov_diferenciaporcuadrar.value = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_intangibles(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_intangibles", mov_diferenciaporcuadrar.value)

  const movintangibles = {
    mov_saldoinicialcosto: mov_saldoinicialcosto.value,
    mov_saldoinicialamortizacionacumulada: mov_saldoinicialamortizacionacumulada.value,
    mov_compras: mov_compras.value,
    mov_bajasincluida: mov_bajasincluida.value,
    mov_otros: mov_otros.value,
    mov_gastosdeamortizacion: mov_gastosdeamortizacion.value,
    mov_saldofinalsegunmovimiento: mov_saldofinalsegunmovimiento.value,
    mov_saldofinalsegunesf: mov_saldofinalsegunesf.value,
    mov_diferenciaporcuadrar: mov_diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movintangibles: movintangibles,
  })
}

const handleActionClick_ant = async id => {
  mov_saldofinalsegunmovimiento_ant.value = Number(mov_saldoinicialcosto_ant.value) + Number(mov_saldoinicialamortizacionacumulada_ant.value) + Number(mov_compras_ant.value) + Number(mov_bajasincluida_ant.value) + Number(mov_otros_ant.value) + Number(mov_gastosdeamortizacion_ant.value)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_intangiblesAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_intangibles_ant", mov_diferenciaporcuadrar_ant.value)

  const movintangibles_ant = {
    mov_saldoinicialcosto_ant: mov_saldoinicialcosto_ant.value,
    mov_saldoinicialamortizacionacumulada_ant: mov_saldoinicialamortizacionacumulada_ant.value,
    mov_compras_ant: mov_compras_ant.value,
    mov_bajasincluida_ant: mov_bajasincluida_ant.value,
    mov_otros_ant: mov_otros_ant.value,
    mov_gastosdeamortizacion_ant: mov_gastosdeamortizacion_ant.value,
    mov_saldofinalsegunmovimiento_ant: mov_saldofinalsegunmovimiento_ant.value,
    mov_saldofinalsegunesf_ant: mov_saldofinalsegunesf_ant.value,
    mov_diferenciaporcuadrar_ant: mov_diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movintangibles_ant: movintangibles_ant,
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
                  <span class="text-sm ml-5">(+) SALDO INICIAL COSTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial costo" disabled type="number" v-model="mov_saldoinicialcosto" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial costo" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicialcosto_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO INICIAL AMORTIZACIÓN ACUMULADA</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo inicial amortizacion" disabled @blur="convertirNegativo_saldoinicialamortizacionacumulada(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_saldoinicialamortizacionacumulada" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo inicial amortizacion" @blur="convertirNegativo_saldoinicialamortizacionacumulada_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicialamortizacionacumulada_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) COMPRAS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_compras" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_compras_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) BAJAS INCLUIDA LA (AMORTIZACIÓN DADA DE BAJA)</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida la" @blur="convertirNegativo_bajasincluida(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_bajasincluida" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida la" @blur="convertirNegativo_bajasincluida_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_bajasincluida_ant" />
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
                  <span class="text-sm ml-5">(-) GASTOS DE AMORTIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) gastos amortización" @blur="convertirNegativo_gastordeamortizacion(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_gastosdeamortizacion" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) gastos amortización" @blur="convertirNegativo_gastordeamortizacion_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_gastosdeamortizacion_ant" />
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
