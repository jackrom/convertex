<script setup>
import { useReportStore } from "@/@store/reportStore"
import { ref } from "vue"

const values = ref([])

const reportStore = useReportStore()

/* PERIODO NUEVO */
const eri_80101 = ref(Number(reportStore.getSingleReportValue("resultadosparticipacioncontroladoraifluc", "eri_80101")).toFixed(2))
const eri_80102 = ref(Number(reportStore.getSingleReportValue("resultadosparticipacioncontroladoraifluc", "eri_80102")).toFixed(2))

/* PERIODO ANTERIOR */
const eri_80101_ant = ref(Number(reportStore.getSingleReportValue("resultadosparticipacioncontroladoraifluc_ant", "eri_80101_ant", true)).toFixed(2))
const eri_80102_ant = ref(Number(reportStore.getSingleReportValue("resultadosparticipacioncontroladoraifluc_ant", "eri_80102_ant", true)).toFixed(2))

const handleActionClick = async id => {
  const resultadosparticipacioncontroladora = {
    eri_80101: eri_80101.value,
    eri_80102: eri_80102.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    resultadosparticipacioncontroladoraifluc: resultadosparticipacioncontroladora,
  })
}

const handleActionClick_ant = async id => {
  const resultadosparticipacioncontroladora_ant = {
    eri_80101_ant: eri_80101_ant.value,
    eri_80102_ant: eri_80102_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    resultadosparticipacioncontroladoraifluc_ant: resultadosparticipacioncontroladora_ant,
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
                  <span class="text-sm ml-7">PROPIETARIOS DE LA CONTROLADORA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80101</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80101" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80101" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80101" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-7">PARTICIPACION NO CONTROLADORA (INFORMATIVO)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">80102</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80102" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_80102" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 80102" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_80102_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
