<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeFinanciamiento, initializeActivosCorrientes } from "@core/utils/initializers"
import {
  calcular_95,
  calcular_9501,
  calcular_9502,
  calcular_9503,
  calcular_9505, calcular_9506,
  calcularEfeCuadre,
} from "@core/utils/formulas"

const reportStore = useReportStore()

const values = ref([])

const actividadesDeFinanciamiento = initializeActividadesDeFinanciamiento()
const activosCorrientes = initializeActivosCorrientes()

/* PERIODO ACTUAL */
const efe_md_95 = ref()
const efe_md_950301 = actividadesDeFinanciamiento['efe_md_950301']
const efe_md_950302 = actividadesDeFinanciamiento['efe_md_950302']
const efe_md_950303 = actividadesDeFinanciamiento['efe_md_950303']
const efe_md_950304 = actividadesDeFinanciamiento['efe_md_950304']
const efe_md_950305 = actividadesDeFinanciamiento['efe_md_950305']
const efe_md_950306 = actividadesDeFinanciamiento['efe_md_950306']
const efe_md_950307 = actividadesDeFinanciamiento['efe_md_950307']
const efe_md_950308 = actividadesDeFinanciamiento['efe_md_950308']
const efe_md_950309 = actividadesDeFinanciamiento['efe_md_950309']
const efe_md_950310 = actividadesDeFinanciamiento['efe_md_950310']
let efe_md_9504 = ref()
const efe_md_950102 = actividadesDeFinanciamiento['efe_md_950102']

const efe_md_95010201 = actividadesDeFinanciamiento['efe_md_95010201']
const efe_md_95010202 = actividadesDeFinanciamiento['efe_md_95010202']
const efe_md_95010203 = actividadesDeFinanciamiento['efe_md_95010203']
const efe_md_95010204 = actividadesDeFinanciamiento['efe_md_95010204']
const efe_md_95010205 = actividadesDeFinanciamiento['efe_md_95010205']
const esf_10101 = activosCorrientes['esf_10101']
const efe_md_diferenciaporcuadrar = actividadesDeFinanciamiento['efe_md_95']

let convertirNegativo_950303 = async id => { efe_md_950303.value = (Number(efe_md_950303.value) > 0) ? Number(efe_md_950303.value) * -1 : Number(efe_md_950303.value) }
let convertirNegativo_950305 = async id => { efe_md_950305.value = (Number(efe_md_950305.value) > 0) ? Number(efe_md_950305.value) * -1 : Number(efe_md_950305.value) }
let convertirNegativo_950306 = async id => { efe_md_950306.value = (Number(efe_md_950306.value) > 0) ? Number(efe_md_950306.value) * -1 : Number(efe_md_950306.value) }
let convertirNegativo_950308 = async id => { efe_md_950308.value = (Number(efe_md_950308.value) > 0) ? Number(efe_md_950308.value) * -1 : Number(efe_md_950308.value) }

const props = defineProps({
  data: {
    res_diferenciaporcuadrar_af: null,
  },
})

const efe_md_9501 = computed(() => {
  return calcular_9501()
})

const efe_md_9502 = computed(() => {
  return calcular_9502()
})

const efe_md_9503 = computed(() => {
  return calcular_9503()
})

const efe_md_950401 = ref(reportStore.getSingleReportValue("actividadesdefinanciamientoifluc", "efe_md_950401"))

const efe_md_9505 = ref()

const efe_md_9506 = ref()

const efe_md_9507 = ref()

console.log('efe_md_9504: ', efe_md_9504)
console.log('efe_md_950401: ', efe_md_950401.value)

const handleActionClick = async id => {
  efe_md_9501.value = calcular_9501()
  efe_md_9502.value = calcular_9502()
  efe_md_9503.value = calcular_9503()
  efe_md_9504.value = (Number(efe_md_950401.value)).toFixed(2)
  efe_md_95.value = calcular_95()
  efe_md_9505.value = (Number(efe_md_95.value) + Number(efe_md_9504.value)).toFixed(2)
  efe_md_9506.value = calcular_9506()
  efe_md_9507.value = (Number(efe_md_9505.value) + Number(efe_md_9506.value)).toFixed(2)

  efe_md_diferenciaporcuadrar.value = (Number(efe_md_9507.value) - Number(esf_10101.value)).toFixed(2)

  console.log('efe_md_9501: ', efe_md_9501.value)
  console.log('efe_md_9502: ', efe_md_9502.value)
  console.log('efe_md_9503: ', efe_md_9503.value)
  console.log('efe_md_95: ', efe_md_95.value)
  console.log('efe_md_9504: ', efe_md_9504.value)

  console.log('efe_md_9507: ', efe_md_9507.value)
  console.log('esf_10101: ', esf_10101.value)

  reportStore.updateDiferenciaporcuadrar_efe_af(efe_md_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_efe_af", efe_md_diferenciaporcuadrar.value)

  props.data.res_diferenciaporcuadrar_af = efe_md_diferenciaporcuadrar.value

  reportStore.updateReportData("actividadesdefinanciamientoifluc", 'efe_md_95031007', 0.00)

  const actividadesdefinanciamiento = {
    efe_md_95: efe_md_95.value,
    efe_md_9501: efe_md_9501.value,
    efe_md_9503: efe_md_9503.value,
    efe_md_950301: efe_md_950301.value,
    efe_md_950302: efe_md_950302.value,
    efe_md_950303: efe_md_950303.value,
    efe_md_950304: efe_md_950304.value,
    efe_md_950305: efe_md_950305.value,
    efe_md_950306: efe_md_950306.value,
    efe_md_950307: efe_md_950307.value,
    efe_md_950308: efe_md_950308.value,
    efe_md_950309: efe_md_950309.value,
    efe_md_950310: efe_md_950310.value,
    efe_md_9504: efe_md_9504.value,
    efe_md_950401: efe_md_950401.value,
    efe_md_9505: efe_md_9505.value,
    efe_md_9506: efe_md_9506.value,
    efe_md_9507: efe_md_9507.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdefinanciamientoifluc: actividadesdefinanciamiento,
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
        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>ESTADOS DE FLUJOS DE EFECTIVO POR EL MÉTODO DIRECTO</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">
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
                  >ACTIVIDADES DE FINANCIAMIENTO</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Aporte en efectivo por aumento de capital</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950301</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950301"
                    label="(+) 950301"
                    v-model="efe_md_950301"
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
                  <span class="text-sm">Financiamiento por emisión de títulos valores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950302</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950302"
                    label="(+) 950302"
                    v-model="efe_md_950302"
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
                  <span class="text-sm">Pagos por adquirir o rescatar las acciones de la entidad</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950303</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950303"
                    v-model="efe_md_950303"
                    label="(-) 950303"
                    type="number"
                    @blur="convertirNegativo_950303(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Financiación por préstamos a largo plazo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950304</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950304"
                    label="(+) 950304"
                    v-model="efe_md_950304"
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
                  <span class="text-sm">Pagos de préstamos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950305</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950305"
                    v-model="efe_md_950305"
                    label="(-) 950305"
                    type="number"
                    @blur="convertirNegativo_950305(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Pagos de pasivos por arrendamientos financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950306</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950306"
                    v-model="efe_md_950306"
                    label="(-) 950306"
                    type="number"
                    @blur="convertirNegativo_950306(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950307</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950307"
                    label="(+) 950307"
                    v-model="efe_md_950307"
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
                  <span class="text-sm">Dividendos pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950308</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950308"
                    v-model="efe_md_950308"
                    label="(-) 950308"
                    type="number"
                    @blur="convertirNegativo_950308(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950309</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950309"
                    label="(+) 950309"
                    v-model="efe_md_950309"
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
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950310</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950310"
                    label="(+) 950310"
                    v-model="efe_md_950310"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE FINANCIACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9503</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9503"
                    v-model="efe_md_9503"
                    label="(+) 9503"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VDivider />

              <div style="background: #efefef;">
                <VRow class="font-weight-medium px-4 mt-10">
                  <VCol
                    cols="12"
                    md="8"
                  >
                    <span class="text-sm">Efectos de la variación en la tasa de cambio sobre el efectivo y equivalentes al efectivo</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <span class="text-sm">950401</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <VTextField
                      id="efe_md_950401"
                      label="(+) 950401"
                      v-model="efe_md_950401"
                      type="number"
                      @blur="handleActionClick(this)"
                      @input="handleActionClick(this)"
                      @keyup="handleActionClick(this)"
                    />
                  </VCol>
                </VRow>

                <VRow class="font-weight-medium px-4 mt-10 mb-1 text-black">
                  <VCol
                    cols="12"
                    md="8"
                  >
                    <span class="text-sm">EFECTOS DE LA VARIACION EN LA TASA DE CAMBIO SOBRE EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <span class="text-sm">9504</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <VTextField
                      id="efe_md_9504"
                      v-model="efe_md_9504"
                      label="(+) 9504"
                      type="number"
                      disabled
                    />
                  </VCol>
                </VRow>
              </div>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">INCREMENTO NETO (DISMINUCIÓN) EN EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO, ANTES DEL EFECTO DE LOS CAMBIOS EN LA TASA DE CAMBIO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95"
                    label="(+) 95"
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
                  <span class="text-sm">INCREMENTO (DISMINUCIÓN) NETO DE EFECTIVO Y EQUIVALENTES AL EFECTIVO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9505</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9505"
                    v-model="efe_md_9505"
                    label="(+) 9505"
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
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL PRINCIPIO DEL PERIODO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9506</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    label="(+) 9506"
                    disabled
                    id="efe_md_9506"
                    type="number"
                    @blur="handleActionClick(this)"
                    v-model="efe_md_9506"
                    @input="handleActionClick(this)" @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL FINAL DEL PERIODO SEGÚN EFE</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9507</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9507"
                    v-model="efe_md_9507"
                    label="(+) 9507"
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
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO SEGÚN ESF</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm"></span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="esf_10101"
                    v-model="esf_10101"
                    label="(+) 10101"
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
      </div>
    </VCardText>
  </VForm>
</template>
