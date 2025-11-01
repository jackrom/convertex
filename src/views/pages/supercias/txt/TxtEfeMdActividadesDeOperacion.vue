<script setup>
import { computed } from "vue"

const values = ref([])

import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeOperacion } from "@core/utils/initializers"

const reportStore = useReportStore()

const actividadesDeOperacion = initializeActividadesDeOperacion()

/* PERIODO ACTUAL */
let efe_md_95 = actividadesDeOperacion['efe_md_95']
let efe_md_950101 = actividadesDeOperacion['efe_md_950101']
let efe_md_95010101 = actividadesDeOperacion['efe_md_95010101']
let efe_md_95010102 = actividadesDeOperacion['efe_md_95010102']
let efe_md_95010103 = actividadesDeOperacion['efe_md_95010103']
let efe_md_95010104 = actividadesDeOperacion['efe_md_95010104']
let efe_md_95010105 = actividadesDeOperacion['efe_md_95010105']
let efe_md_950102 = actividadesDeOperacion['efe_md_950102']
let efe_md_95010201 = actividadesDeOperacion['efe_md_95010201']
let efe_md_95010202 = actividadesDeOperacion['efe_md_95010202']
let efe_md_95010203 = actividadesDeOperacion['efe_md_95010203']
let efe_md_95010204 = actividadesDeOperacion['efe_md_95010204']
let efe_md_95010205 = actividadesDeOperacion['efe_md_95010205']
let efe_md_950103 = actividadesDeOperacion['efe_md_950103']
let efe_md_950104 = actividadesDeOperacion['efe_md_950104']
let efe_md_950105 = actividadesDeOperacion['efe_md_950105']
let efe_md_950106 = actividadesDeOperacion['efe_md_950106']
let efe_md_950107 = actividadesDeOperacion['efe_md_950107']
let efe_md_950108 = actividadesDeOperacion['efe_md_950108']
let efe_md_95010803 = actividadesDeOperacion['efe_md_95010803']
let efe_md_95010804 = actividadesDeOperacion['efe_md_95010804']
let efe_md_95010805 = actividadesDeOperacion['efe_md_95010805']
let efe_md_95010806 = actividadesDeOperacion['efe_md_95010806']
let efe_md_95010807 = actividadesDeOperacion['efe_md_95010807']
let efe_md_95010808 = actividadesDeOperacion['efe_md_95010808']
let efe_md_95010811 = actividadesDeOperacion['efe_md_95010811']
let efe_md_95010812 = actividadesDeOperacion['efe_md_95010812']
let efe_md_95010813 = actividadesDeOperacion['efe_md_95010813']

let efe_md_9501 = ref()
let efe_md_9502 = ref()
let efe_md_9503 = ref()

let convertirNegativo_95010201 = async id => { efe_md_95010201.value = (Number(efe_md_95010201.value) > 0) ? Number(efe_md_95010201.value) * -1 : Number(efe_md_95010201.value) }
let convertirNegativo_95010202 = async id => { efe_md_95010202.value = (Number(efe_md_95010202.value) > 0) ? Number(efe_md_95010202.value) * -1 : Number(efe_md_95010202.value) }
let convertirNegativo_95010203 = async id => { efe_md_95010203.value = (Number(efe_md_95010203.value) > 0) ? Number(efe_md_95010203.value) * -1 : Number(efe_md_95010203.value) }
let convertirNegativo_95010204 = async id => { efe_md_95010204.value = (Number(efe_md_95010204.value) > 0) ? Number(efe_md_95010204.value) * -1 : Number(efe_md_95010204.value) }
let convertirNegativo_95010205 = async id => { efe_md_95010205.value = (Number(efe_md_95010205.value) > 0) ? Number(efe_md_95010205.value) * -1 : Number(efe_md_95010205.value) }
let convertirNegativo_950103 = async id => { efe_md_950103.value = (Number(efe_md_950103.value) > 0) ? Number(efe_md_950103.value) * -1 : Number(efe_md_950103.value) }
let convertirNegativo_950105 = async id => { efe_md_950105.value = (Number(efe_md_950105.value) > 0) ? Number(efe_md_950105.value) * -1 : Number(efe_md_950105.value) }
let convertirNegativo_950107 = async id => { efe_md_950107.value = (Number(efe_md_950107.value) > 0) ? Number(efe_md_950107.value) * -1 : Number(efe_md_950107.value) }


const handleActionClick = async id => {
  efe_md_950101.value = (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)
  efe_md_950102.value = (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)
  efe_md_9501.value = (Number(efe_md_950101.value) + Number(efe_md_950102.value) + Number(efe_md_950103.value) + Number(efe_md_950104.value) + Number(efe_md_950105.value) + Number(efe_md_950106.value) + Number(efe_md_950107.value) + Number(efe_md_950108.value)).toFixed(2)
  efe_md_95.value = (Number(efe_md_9501.value) + Number(efe_md_9502.value) + Number(efe_md_9503.value)).toFixed(2)

  localStorage.setItem('efe_md_9501', efe_md_9501.value)
  /*
  console.log('efe_md_950101: ', efe_md_950101.value)
  console.log('efe_md_95010101: ', efe_md_95010101.value)
  console.log('efe_md_95010102: ', efe_md_95010102.value)
  console.log('efe_md_95010103: ', efe_md_95010103.value)
  console.log('efe_md_95010104: ', efe_md_95010104.value)
  console.log('efe_md_95010205: ', efe_md_95010105.value)

  console.log('efe_md_950102: ', efe_md_950102.value)
  console.log('efe_md_95010201: ', efe_md_95010201.value)
  console.log('efe_md_95010202: ', efe_md_95010202.value)
  console.log('efe_md_95010203: ', efe_md_95010203.value)
  console.log('efe_md_95010204: ', efe_md_95010204.value)
  console.log('efe_md_95010205: ', efe_md_95010205.value)

  console.log('efe_md_950103: ', efe_md_950103.value)
  console.log('efe_md_950104: ', efe_md_950104.value)
  console.log('efe_md_950105: ', efe_md_950105.value)
  console.log('efe_md_950106: ', efe_md_950106.value)
  console.log('efe_md_950107: ', efe_md_950107.value)
  console.log('efe_md_950108: ', efe_md_950108.value)

  console.log('efe_md_9501: ', efe_md_9501.value)
  */

  let actividadesdeoperacion = {
    efe_md_950101: efe_md_950101.value,
    efe_md_95010101: efe_md_95010101.value,
    efe_md_95010102: efe_md_95010102.value,
    efe_md_95010103: efe_md_95010103.value,
    efe_md_95010104: efe_md_95010104.value,
    efe_md_95010105: efe_md_95010105.value,
    efe_md_950102: efe_md_950102.value,
    efe_md_95010201: efe_md_95010201.value,
    efe_md_95010202: efe_md_95010202.value,
    efe_md_95010203: efe_md_95010203.value,
    efe_md_95010204: efe_md_95010204.value,
    efe_md_95010205: efe_md_95010205.value,
    efe_md_950103: efe_md_950103.value,
    efe_md_950104: efe_md_950104.value,
    efe_md_950105: efe_md_950105.value,
    efe_md_950106: efe_md_950106.value,
    efe_md_950107: efe_md_950107.value,
    efe_md_950108: efe_md_950108.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeoperacionifluc: actividadesdeoperacion,
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
                  >ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Clases de cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950101"
                    v-model="efe_md_950101"
                    label="(+) 950101"
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
                  <span class="text-sm">Cobros procedentes de las ventas de bienes y prestación de servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010101"
                    v-model="efe_md_95010101"
                    label="(+) 95010101"
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
                  <span class="text-sm">Cobros procedentes de regalías, cuotas, comisiones y otros ingresos de actividades ordinarias</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010102"
                    v-model="efe_md_95010102"
                    label="(+) 95010102"
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
                  <span class="text-sm">Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010103"
                    v-model="efe_md_95010103"
                    label="(+) 95010103"
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
                  <span class="text-sm">Cobros procedentes de primas y prestaciones, anualidades y otros beneficios de pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010104"
                    v-model="efe_md_95010104"
                    label="(+) 95010104"
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
                  <span class="text-sm">Otros cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95010105"
                    label="(+) 95010105"
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
                  <span class="text-sm">Clases de pagos por actvidades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950102"
                    v-model="efe_md_950102"
                    label="(+) 950102"
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
                  <span class="text-sm">Pagos a proveedores por el suministro de bienes y servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010201"
                    v-model="efe_md_95010201"
                    label="(-) 95010201"
                    type="number"
                    @blur="convertirNegativo_95010201(this); handleActionClick(this)"
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
                  <span class="text-sm">Pagos procedentes de contratos mantenidos para intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010202"
                    v-model="efe_md_95010202"
                    label="(-) 95010202"
                    type="number"
                    @blur="convertirNegativo_95010202(this); handleActionClick(this)"
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
                  <span class="text-sm">Pagos a y por cuenta de los empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010203</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010203"
                    v-model="efe_md_95010203"
                    label="(-) 95010203"
                    type="number"
                    @blur="convertirNegativo_95010203(this); handleActionClick(this)"
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
                  <span class="text-sm">Pagos por primas y prestaciones, anualidades y otras obligaciones derivadas de las pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010204</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010204"
                    v-model="efe_md_95010204"
                    label="(-) 95010204"
                    type="number"
                    @blur="convertirNegativo_95010204(this); handleActionClick(this)"
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
                  <span class="text-sm">Otros pagos por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010205</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010205"
                    v-model="efe_md_95010205"
                    label="(-) 95010205"
                    type="number"
                    @blur="convertirNegativo_95010205(this); handleActionClick(this)"
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
                  <span class="text-sm">950103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950103"
                    v-model="efe_md_950103"
                    label="(-) 950103"
                    type="number"
                    @blur="convertirNegativo_950103(this); handleActionClick(this)"
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
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950104"
                    v-model="efe_md_950104"
                    label="(+) 950104"
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
                  <span class="text-sm">Intereses pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950105"
                    v-model="efe_md_950105"
                    label="(-) 950105"
                    type="number"
                    @blur="convertirNegativo_950105(this); handleActionClick(this)"
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
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950106"
                    v-model="efe_md_950106"
                    label="(+) 950106"
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
                  <span class="text-sm">Impuestos a las ganancias pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950107"
                    v-model="efe_md_950107"
                    label="(-) 950107"
                    type="number"
                    @blur="convertirNegativo_950107(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
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
                  <span class="text-sm">950108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950108"
                    v-model="efe_md_950108"
                    label="(+) 950108"
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
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501"
                    v-model="efe_md_9501"
                    label="(+) 9501"
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
