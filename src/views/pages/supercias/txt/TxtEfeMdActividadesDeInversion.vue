<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeActividadesDeInversion } from "@core/utils/initializers"

const reportStore = useReportStore()

const actividadesDeInversion = initializeActividadesDeInversion()

/* PERIODO ACTUAL */
let efe_md_9502 = actividadesDeInversion['efe_md_9502']
let efe_md_950201 = actividadesDeInversion['efe_md_950201']
let efe_md_950202 = actividadesDeInversion['efe_md_950202']
let efe_md_950203 = actividadesDeInversion['efe_md_950203']
let efe_md_950204 = actividadesDeInversion['efe_md_950204']
let efe_md_950205 = actividadesDeInversion['efe_md_950205']

let efe_md_950206 = actividadesDeInversion['efe_md_950206']
let efe_md_950207 = actividadesDeInversion['efe_md_950207']
let efe_md_950208 = actividadesDeInversion['efe_md_950208']
let efe_md_950209 = actividadesDeInversion['efe_md_950209']

let efe_md_950210 = actividadesDeInversion['efe_md_950210']
let efe_md_950211 = actividadesDeInversion['efe_md_950211']

let efe_md_950212 = actividadesDeInversion['efe_md_950212']
let efe_md_950213 = actividadesDeInversion['efe_md_950213']

let efe_md_950214 = actividadesDeInversion['efe_md_950214']
let efe_md_950215 = actividadesDeInversion['efe_md_950215']
let efe_md_950216 = actividadesDeInversion['efe_md_950216']
let efe_md_950217 = actividadesDeInversion['efe_md_950217']
let efe_md_950218 = actividadesDeInversion['efe_md_950218']
let efe_md_950219 = actividadesDeInversion['efe_md_950219']
let efe_md_950220 = actividadesDeInversion['efe_md_950220']
let efe_md_950221 = actividadesDeInversion['efe_md_950221']

const values = ref([])

let convertirNegativo_950202 = async id => { efe_md_950202.value = (Number(efe_md_950202.value) > 0) ? Number(efe_md_950202.value) * -1 : Number(efe_md_950202.value) }
let convertirNegativo_950203 = async id => { efe_md_950203.value = (Number(efe_md_950203.value) > 0) ? Number(efe_md_950203.value) * -1 : Number(efe_md_950203.value) }
let convertirNegativo_950205 = async id => { efe_md_950205.value = (Number(efe_md_950205.value) > 0) ? Number(efe_md_950205.value) * -1 : Number(efe_md_950205.value) }
let convertirNegativo_950207 = async id => { efe_md_950207.value = (Number(efe_md_950207.value) > 0) ? Number(efe_md_950207.value) * -1 : Number(efe_md_950207.value) }
let convertirNegativo_950209 = async id => { efe_md_950209.value = (Number(efe_md_950209.value) > 0) ? Number(efe_md_950209.value) * -1 : Number(efe_md_950209.value) }
let convertirNegativo_950211 = async id => { efe_md_950211.value = (Number(efe_md_950211.value) > 0) ? Number(efe_md_950211.value) * -1 : Number(efe_md_950211.value) }
let convertirNegativo_950213 = async id => { efe_md_950213.value = (Number(efe_md_950213.value) > 0) ? Number(efe_md_950213.value) * -1 : Number(efe_md_950213.value) }
let convertirNegativo_950215 = async id => { efe_md_950215.value = (Number(efe_md_950215.value) > 0) ? Number(efe_md_950215.value) * -1 : Number(efe_md_950215.value) }
let convertirNegativo_950217 = async id => { efe_md_950217.value = (Number(efe_md_950217.value) > 0) ? Number(efe_md_950217.value) * -1 : Number(efe_md_950217.value) }

const handleActionClick = async id => {
  efe_md_9502.value = (Number(efe_md_950201.value) + Number(efe_md_950202.value) + Number(efe_md_950203.value) + Number(efe_md_950204.value) + Number(efe_md_950205.value) + Number(efe_md_950206.value) + Number(efe_md_950207.value) + Number(efe_md_950208.value) + Number(efe_md_950209.value) + Number(efe_md_950210.value) + Number(efe_md_950211.value) + Number(efe_md_950212.value) + Number(efe_md_950213.value) + Number(efe_md_950214.value) + Number(efe_md_950215.value) + Number(efe_md_950216.value) + Number(efe_md_950217.value) + Number(efe_md_950218.value) + Number(efe_md_950219.value) + Number(efe_md_950220.value) + Number(efe_md_950221.value)).toFixed(2)

  localStorage.setItem('efe_md_9502', efe_md_9502.value)

  const actividadesdeinversion = {
    efe_md_9502: efe_md_9502.value,
    efe_md_950201: efe_md_950201.value,
    efe_md_950202: efe_md_950202.value,
    efe_md_950203: efe_md_950203.value,
    efe_md_950204: efe_md_950204.value,
    efe_md_950205: efe_md_950205.value,
    efe_md_950206: efe_md_950206.value,
    efe_md_950207: efe_md_950207.value,
    efe_md_950208: efe_md_950208.value,
    efe_md_950209: efe_md_950209.value,
    efe_md_950210: efe_md_950210.value,
    efe_md_950211: efe_md_950211.value,
    efe_md_950212: efe_md_950212.value,
    efe_md_950213: efe_md_950213.value,
    efe_md_950214: efe_md_950214.value,
    efe_md_950215: efe_md_950215.value,
    efe_md_950216: efe_md_950216.value,
    efe_md_950217: efe_md_950217.value,
    efe_md_950218: efe_md_950218.value,
    efe_md_950219: efe_md_950219.value,
    efe_md_950220: efe_md_950220.value,
    efe_md_950221: efe_md_950221.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeinversionifluc: actividadesdeinversion,
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
        <!--
        <VRow style="width:100%;" class="mb-5">
          <VCol cols="12" md="12">
            <VCardTitle>ESTADOS DE FLUJOS DE EFECTIVO POR EL MÉTODO DIRECTO</VCardTitle>
          </VCol>
        </VRow>
        -->
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="8">
                  <span class="text-sm" style="font-size:0.800rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm" style="font-size:0.800rem">CUENTA</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.800rem">PERIODO ACTUAL</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol cols="12 bg-primary" md="12">
                  <span class="text-sm" style="font-size:0.900rem">ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Efectivo procedentes de la venta de acciones en subsidiarias u otros negocios</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950201" @blur="handleActionClick(this)" type="number" id="efe_md_950201" v-model="efe_md_950201" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Efectivo utilizado para adquirir acciones en subsidiarias u otros negocios para tener el control</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950202" @blur="convertirNegativo_950202(this); handleActionClick(this)" type="number" id="efe_md_950202" v-model="efe_md_950202" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Efectivo utilizado en la compra de participaciones no controladoras</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950203" @blur="convertirNegativo_950203(this); handleActionClick(this)" type="number" id="efe_md_950203" v-model="efe_md_950203" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Otros cobros por la venta de acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950204" @blur="handleActionClick(this)" type="number" id="efe_md_950204" v-model="efe_md_950204" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Otros pagos para adquirir acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950205" @blur="convertirNegativo_950205(this); handleActionClick(this)" type="number" id="efe_md_950205" v-model="efe_md_950205" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Otros cobros por la venta de participaciones en negocios conjuntos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950206" @blur="handleActionClick(this)" type="number" id="efe_md_950206" v-model="efe_md_950206" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Otros pagos para adquirir participaciones en negocios conjuntos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950207" @blur="convertirNegativo_950207(this); handleActionClick(this)" type="number" id="efe_md_950207" v-model="efe_md_950207" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Importes procedentes por la venta de propiedades, planta y equipo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950208" @blur="handleActionClick(this)" type="number" id="efe_md_950208" v-model="efe_md_950208" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Adquisiciones de propiedades, planta y equipo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950209" @blur="convertirNegativo_950209(this); handleActionClick(this)" type="number" id="efe_md_950209" v-model="efe_md_950209" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Importes procedentes de ventas de activos intangibles</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950210" @blur="handleActionClick(this)" type="number" id="efe_md_950210" v-model="efe_md_950210" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Compras de activos intangibles</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950211" @blur="convertirNegativo_950211(this); handleActionClick(this)" type="number" id="efe_md_950211" v-model="efe_md_950211" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Importes procedentes de otros activos a largo plazo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950212" @blur="handleActionClick(this)" type="number" id="efe_md_950212" v-model="efe_md_950212" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Compras de otros activos a largo plazo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950213" @blur="convertirNegativo_950213(this); handleActionClick(this)" type="number" id="efe_md_950213" v-model="efe_md_950213" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950214" @blur="handleActionClick(this)" type="number" id="efe_md_950214" v-model="efe_md_950214" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Anticipos de efectivo efectuados a terceros</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950215" @blur="convertirNegativo_950215(this); handleActionClick(this)" type="number" id="efe_md_950215" v-model="efe_md_950215" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Cobros procedentes del reembolso de anticipos y préstamos concedidos a terceros</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950216" @blur="handleActionClick(this)" type="number" id="efe_md_950216" v-model="efe_md_950216" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Pagos derivados de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 950217" @blur="convertirNegativo_950217(this); handleActionClick(this)" type="number" id="efe_md_950217" v-model="efe_md_950217" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Cobros procedentes de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950218" @blur="handleActionClick(this)" type="number" id="efe_md_950218" v-model="efe_md_950218" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950219" @blur="handleActionClick(this)" type="number" id="efe_md_950219" v-model="efe_md_950219" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950220" @blur="handleActionClick(this)" type="number" id="efe_md_950220" v-model="efe_md_950220" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol cols="12" md="8" >
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">950221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 950221" @blur="handleActionClick(this)" type="number" id="efe_md_950221" v-model="efe_md_950221" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="8" >
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">9502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 9502" type="number" id="efe_md_9502" v-model="efe_md_9502" disabled />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
