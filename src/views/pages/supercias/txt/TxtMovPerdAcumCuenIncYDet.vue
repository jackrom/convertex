<script setup>
import { loadFromLocalStorage } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import { initializeMovPerdidasAcumuladas, initializeMovPerdidasAcumuladasAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    diferenciaPerdidaAcumuladaCuentasIncobrablesYDet: null,
  },
})

const emit = defineEmits([
  'actualizar-valor',
])

const diferenciaPerdidaAcumuladaCuentasIncobrables_actual = ref(0)
const diferenciaPerdidaAcumuladaCuentasIncobrables_ant = ref(0)

const values = ref([])

const movPerdidasAcumuladas = initializeMovPerdidasAcumuladas()
const movPerdidasAcumuladasAnt = initializeMovPerdidasAcumuladasAnt()

/* PERIODO NUEVO */
let saldoinicial = movPerdidasAcumuladas['saldoinicial']
let provisionesanio = movPerdidasAcumuladas['provisionesanio']
let bajasoreversiones = movPerdidasAcumuladas['bajasoreversiones']
let ajustes = movPerdidasAcumuladas['ajustes']
let saldofinalsegunmovimiento = movPerdidasAcumuladas['saldofinalsegunmovimiento']
let diferenciaporcuadrar = movPerdidasAcumuladas['diferenciaporcuadrar']


/* PERIODO ANTERIOR */
let saldoinicial_ant = movPerdidasAcumuladasAnt['saldoinicial_ant']
let provisionesanio_ant = movPerdidasAcumuladasAnt['provisionesanio_ant']
let bajasoreversiones_ant = movPerdidasAcumuladasAnt['bajasoreversiones_ant']
let ajustes_ant = movPerdidasAcumuladasAnt['ajustes_ant']
let saldofinalsegunmovimiento_ant = movPerdidasAcumuladasAnt['saldofinalsegunmovimiento_ant']
let diferenciaporcuadrar_ant = movPerdidasAcumuladasAnt['diferenciaporcuadrar_ant']

let convertirNegativo_saldoinicial_ant = async id => { saldoinicial_ant.value = (Number(saldoinicial_ant.value) != 0 && Number(saldoinicial_ant.value) > 0) ? Number(saldoinicial_ant.value) * -1 : Number(saldoinicial_ant.value) }
let convertirNegativo_provisionesanio_ant = async id => { provisionesanio_ant.value = (Number(provisionesanio_ant.value) != 0 && Number(provisionesanio_ant.value) > 0) ? Number(provisionesanio_ant.value) * -1 : Number(provisionesanio_ant.value) }
let convertirNegativo_provisionesanio = async id => { provisionesanio.value = (Number(provisionesanio.value) != 0 && Number(provisionesanio.value) > 0) ? Number(provisionesanio.value) * -1 : Number(provisionesanio.value) }

const saldofinalsegunesf_ant = computed(() => {
  const value1 = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)
  const value2 = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

  return value1 && value2 ? (Number(value1) + Number(value2)).toFixed(2) : "0.00"
})

const saldofinalsegunesf = computed(() => {
  const value1 = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
  const value2 = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")

  return value1 && value2 ? (Number(value1) + Number(value2)).toFixed(2) : "0.00"
})


const handleActionClick = async id => {
  saldoinicial.value = saldofinalsegunmovimiento_ant.value
  saldofinalsegunmovimiento.value = (Number(saldoinicial.value) + Number(provisionesanio.value) + Number(bajasoreversiones.value) + Number(ajustes.value)).toFixed(2)
  diferenciaporcuadrar.value = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf.value)).toFixed(2)

  diferenciaPerdidaAcumuladaCuentasIncobrables_actual.value = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf.value)).toFixed(2)
  reportStore.updateDiferenciaPerdidaAcumuladaCuentasIncobrables(diferenciaPerdidaAcumuladaCuentasIncobrables_actual.value)
  reportStore.saveToLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_actual", diferenciaPerdidaAcumuladaCuentasIncobrables_actual.value)

  const movperdidasacumuladascuentasincobrablesydeterioro = {
    saldoinicial: saldoinicial.value,
    provisionesanio: provisionesanio.value,
    bajasoreversiones: bajasoreversiones.value,
    ajustes: ajustes.value,
    saldofinalsegunmovimiento: saldofinalsegunmovimiento.value,
    saldofinalsegunesf: saldofinalsegunesf.value,
    diferenciaporcuadrar: diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movperdidasacumuladascuentasincobrablesydeterioro: movperdidasacumuladascuentasincobrablesydeterioro,
  })
}


const handleActionClick_ant = async id => {
  saldofinalsegunmovimiento_ant.value = (Number(saldoinicial_ant.value) + Number(provisionesanio_ant.value) + Number(bajasoreversiones_ant.value) + Number(ajustes_ant.value)).toFixed(2)
  diferenciaporcuadrar_ant.value = (Number(saldofinalsegunmovimiento_ant.value) - Number(saldofinalsegunesf_ant.value)).toFixed(2)

  diferenciaPerdidaAcumuladaCuentasIncobrables_ant.value = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf_ant.value)).toFixed(2)
  reportStore.updateDiferenciaPerdidaAcumuladaCuentasIncobrablesAnt(diferenciaPerdidaAcumuladaCuentasIncobrables_actual.value)
  reportStore.saveToLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_actual", diferenciaPerdidaAcumuladaCuentasIncobrables_actual.value)

  const movperdidasacumuladascuentasincobrablesydeterioro_ant = {
    saldoinicial_ant: saldoinicial_ant.value,
    provisionesanio_ant: provisionesanio_ant.value,
    bajasoreversiones_ant: bajasoreversiones_ant.value,
    ajustes_ant: ajustes_ant.value,
    saldofinalsegunmovimiento_ant: saldofinalsegunmovimiento_ant.value,
    saldofinalsegunesf_ant: saldofinalsegunesf_ant.value,
    diferenciaporcuadrar_ant: diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movperdidasacumuladascuentasincobrablesydeterioro_ant: movperdidasacumuladascuentasincobrablesydeterioro_ant,
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
                  <VTextField label="(-) saldo inicial" type="number" @blur="convertirNegativo_saldoinicial_ant(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) PROVISIONES DEL AÑO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provisiones del año" @blur="convertirNegativo_provisionesanio(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="provisionesanio" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provisiones del año" @blur="convertirNegativo_provisionesanio_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="provisionesanio_ant" />
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
