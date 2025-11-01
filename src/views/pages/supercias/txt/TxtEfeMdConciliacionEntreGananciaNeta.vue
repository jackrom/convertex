<script setup>
import { calcular_9501, calcular_eri_600 } from "@core/utils/formulas"

const props = defineProps({
  data: {
    res_diferenciaporcuadrar_conciliacion: null,
    res_diferenciaporcuadrar_conciliacion_ant: null,
  },
})

import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeOperacion, initializeConciliacionGananciaNeta } from "@core/utils/initializers"

const reportStore = useReportStore()

const values = ref([])

const conciliacion = initializeConciliacionGananciaNeta()
const actividadesDeOperacion = initializeActividadesDeOperacion()

/* PERIODO ACTUAL */
const efe_md_97 = conciliacion['efe_md_97']
const efe_md_9701 = conciliacion['efe_md_9701']
const efe_md_9702 = conciliacion['efe_md_9702']
const efe_md_9703 = conciliacion['efe_md_9703']
const efe_md_9704 = conciliacion['efe_md_9704']
const efe_md_9705 = conciliacion['efe_md_9705']
const efe_md_9706 = conciliacion['efe_md_9706']
const efe_md_9707 = conciliacion['efe_md_9707']
const efe_md_9708 = conciliacion['efe_md_9708']
const efe_md_9709 = conciliacion['efe_md_9709']
const efe_md_9710 = conciliacion['efe_md_9710']
const efe_md_9711 = conciliacion['efe_md_9711']
const efe_md_98 = conciliacion['efe_md_98']
const efe_md_9801 = conciliacion['efe_md_9801']
const efe_md_980104 = conciliacion['efe_md_980104']
const efe_md_980105 = conciliacion['efe_md_980105']
const efe_md_980106 = conciliacion['efe_md_980106']
const efe_md_9802 = conciliacion['efe_md_9802']
const efe_md_9803 = conciliacion['efe_md_9803']
const efe_md_9804 = conciliacion['efe_md_9804']
const efe_md_980402 = conciliacion['efe_md_980402']
const efe_md_980403 = conciliacion['efe_md_980403']
const efe_md_980404 = conciliacion['efe_md_980404']
const efe_md_9805 = conciliacion['efe_md_9805']
const efe_md_9806 = conciliacion['efe_md_9806']
const efe_md_9807 = conciliacion['efe_md_9807']
const efe_md_9808 = conciliacion['efe_md_9808']
const efe_md_9809 = conciliacion['efe_md_9809']
const efe_md_9810 = conciliacion['efe_md_9810']

let efe_md_diferenciaporcuadrar = ref()

let eri_600 = computed(() =>  (Number(reportStore.getSingleReportValue("ingreosifluc", "eri_600")) * -1).toFixed(2))

let efe_md_95 = ref('0')
let efe_md_96 = ref('0')
let efe_md_9504 = ref('0')
let efe_md_9502 = ref('0')
let efe_md_9820 = ref('0')

let efe_md_9501 = computed(() =>  (Number(calcular_9501())))

let convertirNegativo_9704 = async id => { efe_md_9704.value = (Number(efe_md_9704.value) > 0) ? Number(efe_md_9704.value) * -1 : Number(efe_md_9704.value) }

const handleActionClick = async id => {
  efe_md_96.value = calcular_eri_600();

  console.log('efe_md_96: ', efe_md_96.value)

  efe_md_97.value = (Number(efe_md_9701.value) + Number(efe_md_9702.value) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708.value) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711.value)).toFixed(2)
  /*
  console.log('efe_md_9701: ', efe_md_9701.value)
  console.log('efe_md_9702: ', efe_md_9702.value)
  console.log('efe_md_9703: ', efe_md_9703.value)
  console.log('efe_md_9704: ', efe_md_9704.value)
  console.log('efe_md_9705: ', efe_md_9705.value)
  console.log('efe_md_9706: ', efe_md_9706.value)
  console.log('efe_md_9707: ', efe_md_9707.value)
  console.log('efe_md_9708: ', efe_md_9708.value)
  console.log('efe_md_9709: ', efe_md_9709.value)
  console.log('efe_md_9710: ', efe_md_9710.value)
  console.log('efe_md_9711: ', efe_md_9711.value)
  console.log('efe_md_97: ', efe_md_97.value)
  */
  efe_md_98.value = (Number(efe_md_9801.value) + Number(efe_md_9802.value) + Number(efe_md_9803.value) + Number(efe_md_9804.value) + Number(efe_md_9805.value) + Number(efe_md_9806.value) + Number(efe_md_9807.value) + Number(efe_md_9808.value) + Number(efe_md_9809.value) + Number(efe_md_9810.value)).toFixed(2)

  /*
  console.log('efe_md_98: ', efe_md_98.value)
  console.log('efe_md_9801: ', efe_md_9801.value)
  console.log('efe_md_9802: ', efe_md_9802.value)
  console.log('efe_md_9803: ', efe_md_9803.value)
  console.log('efe_md_9804: ', efe_md_9804.value)
  console.log('efe_md_9805: ', efe_md_9805.value)
  console.log('efe_md_9806: ', efe_md_9806.value)
  console.log('efe_md_9807: ', efe_md_9807.value)
  console.log('efe_md_9808: ', efe_md_9808.value)
  console.log('efe_md_9809: ', efe_md_9809.value)
  console.log('efe_md_9810: ', efe_md_9810.value)
   */

  efe_md_9820.value = (Number(efe_md_96.value) + Number(efe_md_97.value) + Number(efe_md_98.value)).toFixed(2)
  efe_md_9501.value = calcular_9501()

  console.log('efe_md_9820: ', efe_md_9820.value)
  console.log('efe_md_9501: ', efe_md_9501.value)

  efe_md_diferenciaporcuadrar.value = (Number(efe_md_9820.value) - Number(efe_md_9501.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_efe_celgnylfo(efe_md_diferenciaporcuadrar.value)

  props.data.res_diferenciaporcuadrar_conciliacion = efe_md_diferenciaporcuadrar.value

  let conciliacionganancianeta = {
    efe_md_96: efe_md_96.value,
    efe_md_97: efe_md_97.value,
    efe_md_9701: efe_md_9701.value,
    efe_md_9702: efe_md_9702.value,
    efe_md_9703: efe_md_9703.value,
    efe_md_9704: efe_md_9704.value,
    efe_md_9705: efe_md_9705.value,
    efe_md_9706: efe_md_9706.value,
    efe_md_9707: efe_md_9707.value,
    efe_md_9708: efe_md_9708.value,
    efe_md_9709: efe_md_9709.value,
    efe_md_9710: efe_md_9710.value,
    efe_md_9711: efe_md_9711.value,
    efe_md_98: efe_md_98.value,
    efe_md_9801: efe_md_9801.value,
    efe_md_9802: efe_md_9802.value,
    efe_md_9803: efe_md_9803.value,
    efe_md_9804: efe_md_9804.value,
    efe_md_9805: efe_md_9805.value,
    efe_md_9806: efe_md_9806.value,
    efe_md_9807: efe_md_9807.value,
    efe_md_9808: efe_md_9808.value,
    efe_md_9809: efe_md_9809.value,
    efe_md_9810: efe_md_9810.value,
    efe_md_9820: efe_md_9820.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    conciliacionganancianetaifluc: conciliacionganancianeta,
  })
}

onMounted(() => handleActionClick(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <VRow>
          <VCol
            cols="12"
            md="12"
            style="font-size:8px;"
          >
            <VRow class="font-weight-medium px-4 mb-2">
              <VCol
                cols="12"
                md="8"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >CONCEPTO</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >CUENTA</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span
                  class="text-sm"
                  style="font-size:0.800rem"
                >PERIODO ACTUAL</span>
              </VCol>
            </VRow>

            <VDivider />

            <VRow class="font-weight-medium px-4 mb-2 mt-2">
              <VCol
                cols="12 bg-primary"
                md="12"
              >
                <span
                  class="text-sm"
                  style="font-size:0.900rem"
                >CONCILIACION ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN</span>
              </VCol>
            </VRow>

            <VDivider />

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">96</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_96"
                  v-model="efe_md_96"
                  label="(+) 96"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">AJUSTE POR PARTIDAS DISTINTAS AL EFECTIVO:</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">97</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_97"
                  v-model="efe_md_97"
                  label="(+) 97"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto de depreciación y amortización</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9701</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9701"
                  v-model="efe_md_9701"
                  label="(+) 9701"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gastos por deterioro (reversiones por deterioro) reconocidas en los resultados del periodo</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9702</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9702"
                  v-model="efe_md_9702"
                  label="(+) 9702"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Pérdida (ganancia) de moneda extranjera no realizada</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9703</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9703"
                  v-model="efe_md_9703"
                  label="(+) 9703"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Pérdidas en cambio de moneda extranjera</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9704</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9704"
                  v-model="efe_md_9704"
                  label="(-) 9704"
                  type="number"
                  @blur="convertirNegativo_9704(this); handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gastos en provisiones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9705</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9705"
                  v-model="efe_md_9705"
                  label="(+) 9705"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajuste por participaciones no controladoras</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9706</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9706"
                  v-model="efe_md_9706"
                  label="(+) 9706"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajuste por pagos basados en acciones</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9707</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9707"
                  v-model="efe_md_9707"
                  label="(+) 9707"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por ganancias (pérdidas) en valor razonable</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9708</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9708"
                  v-model="efe_md_9708"
                  label="(+) 9708"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto por impuesto a la renta</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9709</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9709"
                  v-model="efe_md_9709"
                  label="(+) 9709"
                  disabled
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Ajustes por gasto por participación trabajadores</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9710</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9710"
                  v-model="efe_md_9710"
                  label="(+) 9710"
                  disabled
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Otros ajustes por partidas distintas al efectivo</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9711</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9711"
                  v-model="efe_md_9711"
                  label="(+) 9711"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">CAMBIOS EN ACTIVOS Y PASIVOS:</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">98</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_98"
                  v-model="efe_md_98"
                  label="(+) 98"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en cuentas por cobrar clientes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9801</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9801"
                  v-model="efe_md_9801"
                  label="(+) 9801"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en otras cuentas por cobrar</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9802</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9802"
                  v-model="efe_md_9802"
                  label="(+) 9802"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en anticipos de proveedores</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9803</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9803"
                  v-model="efe_md_9803"
                  label="(+) 9803"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en inventarios</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9804</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9804"
                  v-model="efe_md_9804"
                  label="(+) 9804"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">(Incremento) disminución en otros activos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9805</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9805"
                  v-model="efe_md_9805"
                  label="(+) 9805"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en cuentas por pagar comerciales</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9806</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9806"
                  v-model="efe_md_9806"
                  label="(+) 9806"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en otras cuentas por pagar</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9807</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9807"
                  v-model="efe_md_9807"
                  label="(+) 9807"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en beneficios empleados</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9808</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9808"
                  v-model="efe_md_9808"
                  label="(+) 9808"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"

                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en anticipos de clientes</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9809</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9809"
                  v-model="efe_md_9809"
                  label="(+) 9809"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Incremento  (disminución) en otros pasivos</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9810</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9810"
                  v-model="efe_md_9810"
                  label="(+) 9810"
                  type="number"
                  @blur="handleActionClick(this)"
                  @input="handleActionClick(this)"
                  @keyup="handleActionClick(this)"
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">Flujos de efectivo netos procedentes de (utilizados en) actividades de operación</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm">9820</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  id="efe_md_9820"
                  v-model="efe_md_9820"
                  label="(+) 9820"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>

            <VRow class="font-weight-medium px-4 mt-10">
              <VCol
                cols="12"
                md="8"
              >
                <span class="text-sm">DIFERENCIA POR CUADRAR</span>
              </VCol>
              <VCol
                cols="12"
                md="2"
              >
                <span class="text-sm" />
              </VCol>
              <VCol
                cols="12"
                md="2"
                :style="(efe_md_diferenciaporcuadrar != 0) ? 'background: rgba(255,0,0,.2);' : 'background: rgba(0,128,0,.2);'"
              >
                <VTextField
                  id="efe_md_9507"
                  v-model="efe_md_diferenciaporcuadrar"
                  label="(+) 9507"
                  type="number"
                  disabled
                />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </div>
    </VCardText>
  </VForm>
</template>
