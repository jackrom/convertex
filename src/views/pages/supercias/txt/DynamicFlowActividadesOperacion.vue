<template>
  <VForm>
    <VCardText class="add-products-form">
      <div class="mt-10" style="height: 30px !important;"></div>
      <!-- ACTIVIDADES DE OPERACIÓN -->
      <div class="ma-sm-4 mt-4">
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <VCol cols="12" md="12" style="font-size:14px;">
              <!-- Grupo A -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoA"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="A"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoA" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo B -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoB"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="B"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoB" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo C -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoC"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="C"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoC" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo D -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoD"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="D"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoD" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>
              <!-- Grupo E -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoE"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="E"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoE" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo F -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoF"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="F"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoF" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo G -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoG"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="G"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoG" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo H -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoH"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="H"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoH" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo I -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoI"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="I"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoI" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo J -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoJ"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="J"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoJ" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo K -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoK"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="K"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoK" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo L -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoL"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="L"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoL" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo M -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoM"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="M"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoM" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo MM -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoMM"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="MM"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoMM" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo N -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoN"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="N"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoN" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo O -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoO"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="O"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoO" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo P -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoP"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="P"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoP" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo Q -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoQ"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="Q"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoQ" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo R -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoR"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="R"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoR" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo S -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoS"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="S"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoS" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo T -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoT"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="T"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoT" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo V -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoV"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="V"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoV" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo W -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoW"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="W"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoW" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo X -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoX"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="X"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoX" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo Y -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoY"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="Y"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoY" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo Z -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoZ"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="Z"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoZ" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AA -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAA"
                :group="{ name: 'cuentas' }"
                :move="checkMove"
                data-grupo="AA"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="cuenta in cuentasGrupoAA" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { useReportStore } from "@/@store/reportStore"
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"

const superciasListStore = useSuperciasListStore()
const reportStore = useReportStore()

let operacion, financiamiento
let reporteId = JSON.parse(localStorage.getItem('reporteId'))

superciasListStore.getReporteDynamicFlowActividadesDeOperacion(reporteId)
  .then( response => {
    console.log(response)
    operacion = response.data
  })

superciasListStore.getReporteDynamicFlowActividadesDeFinanciamiento(reporteId)
  .then( response => {
    console.log(response)
    financiamiento = response.data
  })

let op = ref((!operacion) ? reportStore.getReportData('actividadesdeoperacionifluc') : operacion)
let fi = ref((!financiamiento) ? reportStore.getReportData('actividadesdefinanciamientoifluc') : financiamiento)

const cuentasGrupoA = ref([])
const cuentasGrupoB = ref([])
const cuentasGrupoC = ref([])
const cuentasGrupoD = ref([])
const cuentasGrupoE = ref([])
const cuentasGrupoF = ref([])
const cuentasGrupoG = ref([])
const cuentasGrupoH = ref([])
const cuentasGrupoI = ref([])
const cuentasGrupoJ = ref([])
const cuentasGrupoK = ref([])
const cuentasGrupoL = ref([])
const cuentasGrupoM = ref([])
const cuentasGrupoMM = ref([])
const cuentasGrupoN = ref([])
const cuentasGrupoO = ref([])
const cuentasGrupoP = ref([])
const cuentasGrupoQ = ref([])
const cuentasGrupoR = ref([])
const cuentasGrupoS = ref([])
const cuentasGrupoT = ref([])
const cuentasGrupoV = ref([])
const cuentasGrupoW = ref([])
const cuentasGrupoX = ref([])
const cuentasGrupoY = ref([])
const cuentasGrupoZ = ref([])
const cuentasGrupoAA = ref([])

if (!operacion) {
  cuentasGrupoA.value = [
    { id: '1', grupo: 'A', name: 'Clases de cobros por actividades de operación', codigo: '950101', valor: Number(op.value['efe_md_950101'])},
  ]

  cuentasGrupoB.value = [
    { id: '2', grupo: 'B', name: 'Cobros procedentes de las ventas de bienes y prestación de servicios', codigo: '95010101', valor: Number(op.value.efe_md_95010101) },
  ]

  cuentasGrupoC.value = [
    { id: '3', grupo: 'C', name: 'Venta de bienes', codigo: '9501010101', valor: Number(op.value.efe_md_9501010101) },
    { id: '4', grupo: 'C', name: 'Prestación de servicios', codigo: '9501010102', valor: Number(op.value.efe_md_9501010102) },
    { id: '5', grupo: 'C', name: 'Contratos de construcción', codigo: '9501010103', valor: Number(op.value.efe_md_9501010103) },
    { id: '6', grupo: 'C', name: 'Descuentos en ventas', codigo: '9501010104', valor: Number(op.value.efe_md_9501010104) },
    { id: '7', grupo: 'C', name: 'Devoluciones en ventas', codigo: '9501010105', valor: Number(op.value.efe_md_9501010105) },
    { id: '8', grupo: 'C', name: 'Bonificación en producto', codigo: '9501010106', valor: Number(op.value.efe_md_9501010106) },
    { id: '9', grupo: 'C', name: 'Otras rebajas comerciales', codigo: '9501010107', valor: Number(op.value.efe_md_9501010107) },
    { id: '10', grupo: 'C', name: 'Utilidad en cambio', codigo: '9501010108', valor: Number(op.value.efe_md_9501010108) },
    { id: '11', grupo: 'C', name: 'Deudores comerciales y otras cuentas por cobrar no relacionados', codigo: '9501010109', valor: Number(op.value.efe_md_9501010109) },
    { id: '12', grupo: 'C', name: 'Provisión por deterioro de activos financieros', codigo: '9501010110', valor: Number(op.value.efe_md_9501010110) },
    { id: '13', grupo: 'C', name: 'Provisión por cuentas incobrables y detrioro', codigo: '9501010111', valor: Number(op.value.efe_md_9501010111) },
    { id: '14', grupo: 'C', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '9501010112', valor: Number(op.value.efe_md_9501010112) },
    { id: '15', grupo: 'C', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '9501010113', valor: Number(op.value.efe_md_9501010113) },
    { id: '16', grupo: 'C', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '9501010114', valor: Number(op.value.efe_md_9501010114) },
    { id: '17', grupo: 'C', name: 'Activos Financieros a Valor Razonable con Cambios en Resultados', codigo: '9501010115', valor: Number(op.value.efe_md_9501010115) },
    { id: '18', grupo: 'C', name: 'Activos Financieros a Valor Razonable con Cambios en Otros Resultado Integral', codigo: '9501010116', valor: Number(op.value.efe_md_9501010116) },
    { id: '19', grupo: 'C', name: 'Activos Financieros al Costo Amortizado', codigo: '9501010117', valor: Number(op.value.efe_md_9501010117) },
    { id: '20', grupo: 'C', name: 'Activos por Impuestos Corrientes', codigo: '9501010118', valor: Number(op.value.efe_md_9501010118) },
    { id: '21', grupo: 'C', name: 'Activos Corrientes Mantenidos para la Venta y Operaciones Discontinuadas', codigo: '9501010119', valor: Number(op.value.efe_md_9501010119) },
    { id: '22', grupo: 'C', name: 'Construcciones en Proceso (NIC 11 y Secc.23 PYMES)', codigo: '9501010120', valor: Number(op.value.efe_md_9501010120) },
    { id: '23', grupo: 'C', name: 'Otros Activos Corrientes', codigo: '9501010121', valor: Number(op.value.efe_md_9501010121) },
  ]

  cuentasGrupoD.value = [
    { id: '24', grupo: 'D', name: 'Cobros procedentes de regalías, cuotas, comisiones y otros ingresos de actividades ordinarias', codigo: '95010102', valor: Number(op.value.efe_md_95010102) },
  ]

  cuentasGrupoE.value = [
    { id: '25', grupo: 'E', name: 'Subvenciones del Gobierno', codigo: '9501010201', valor: Number(op.value.efe_md_9501010201) },
    { id: '26', grupo: 'E', name: 'Regalías', codigo: '9501010202', valor: Number(op.value.efe_md_9501010202) },
    { id: '27', grupo: 'E', name: 'Intereses', codigo: '9501010203', valor: Number(op.value.efe_md_9501010203) },
    { id: '28', grupo: 'E', name: 'Ganancia por Medición a Valor Razonable de Activos Biológicos', codigo: '9501010204', valor: Number(op.value.efe_md_9501010204) },
    { id: '29', grupo: 'E', name: 'Ingresos por Comisiones, Prestación de Servicios, Custodia, Registro, Compensación y Liquidación', codigo: '9501010205', valor: Number(op.value.efe_md_9501010205) },
    { id: '30', grupo: 'E', name: 'Ingresos Financieros', codigo: '9501010206', valor: Number(op.value.efe_md_9501010206) },
    { id: '31', grupo: 'E', name: 'Documentos y Cuentas por Cobrar Relacionados', codigo: '9501010207', valor: Number(op.value.efe_md_9501010207) },
  ]

  cuentasGrupoF.value = [
    { id: '32', grupo: 'F', name: 'Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar', codigo: '95010103', valor: Number(op.value.efe_md_95010103) },
  ]

  cuentasGrupoG.value = [
    { id: '32', grupo: 'G', name: 'Cobros procedentes de primas y prestaciones, anualidades y otros beneficios de pólizas suscritas', codigo: '95010104', valor: Number(op.value.efe_md_95010104) },
  ]

  cuentasGrupoH.value = [
    { id: '34', grupo: 'H', name: 'Otros cobros por actividades de operación', codigo: '95010105', valor: Number(op.value.efe_md_95010105) },
  ]

  cuentasGrupoI.value = [
    { id: '35', grupo: 'I', name: 'Clases de pagos por actvidades de operación', codigo: '950102', valor: Number(op.value.efe_md_950102) },
  ]

  cuentasGrupoJ.value  = [
    { id: '36', grupo: 'J', name: 'Pagos a proveedores por el suministro de bienes y servicios', codigo: '95010201', valor: Number(op.value.efe_md_95010201) },
  ]

  cuentasGrupoK.value  = [
    { id: '37', grupo: 'K', name: 'Costo de Ventas y Producción', codigo: '9501020101', valor: Number(op.value.efe_md_9501020101) },
    { id: '38', grupo: 'K', name: 'Inventarios', codigo: '9501020102', valor: Number(op.value.efe_md_9501020102) },
    { id: '39', grupo: 'K', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '9501020103', valor: Number(op.value.efe_md_9501020103) },
    { id: '40', grupo: 'K', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '9501020104', valor: Number(op.value.efe_md_9501020104) },
    { id: '41', grupo: 'K', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '9501020105', valor: Number(op.value.efe_md_9501020105) },
    { id: '42', grupo: 'K', name: 'Gasto de Venta', codigo: '9501020106', valor: Number(op.value.efe_md_9501020106) },
    { id: '43', grupo: 'K', name: 'Gasto Administrativo', codigo: '9501020107', valor: Number(op.value.efe_md_9501020107) },
    { id: '44', grupo: 'K', name: 'Servicios y Otros Pagos Anticipados', codigo: '9501020108', valor: Number(op.value.efe_md_9501020108) },
    { id: '45', grupo: 'K', name: 'Cuentas y Documentos por Pagar', codigo: '9501020109', valor: Number(op.value.efe_md_9501020109) },
    { id: '46', grupo: 'K', name: 'Porción Corriente de Provisiones Por Beneficios a Empleados', codigo: '9501020110', valor: Number(op.value.efe_md_9501020110) },
    { id: '47', grupo: 'K', name: 'Pasivos Financieros a Valor Razonable con Cambios en Resultados', codigo: '9501020111', valor: Number(op.value.efe_md_9501020111) },
    { id: '48', grupo: 'K', name: 'Pasivos por Contratos de Arrendamiento', codigo: '9501020112', valor: Number(op.value.efe_md_9501020112) },
    { id: '49', grupo: 'K', name: 'Obligaciones con Instituciones Financieras', codigo: '9501020113', valor: Number(op.value.efe_md_9501020113) },
    { id: '50', grupo: 'K', name: 'Provisiones', codigo: '9501020114', valor: Number(op.value.efe_md_9501020114) },
    { id: '51', grupo: 'K', name: 'Porción Corriente de Valores Emitidos', codigo: '9501020115', valor: Number(op.value.efe_md_9501020115) },
    { id: '52', grupo: 'K', name: 'Otras Obligaciones Corrientes', codigo: '9501020116', valor: Number(op.value.efe_md_9501020116) },
    { id: '53', grupo: 'K', name: 'Participación a Trabajadores | Provisión del año', codigo: '9501020117', valor: Number(op.value.efe_md_9501020117) },
    { id: '54', grupo: 'K', name: 'Impuesto a la Renta | Provisión del año', codigo: '9501020118', valor: Number(op.value.efe_md_9501020118) },
    { id: '55', grupo: 'K', name: 'Cuentas por Pagar a Relacionadas', codigo: '9501020119', valor: Number(op.value.efe_md_9501020119) },
    { id: '56', grupo: 'K', name: 'Otros Pasivos Financieros', codigo: '9501020120', valor: Number(op.value.efe_md_9501020120) },
    { id: '57', grupo: 'K', name: 'Anticipos', codigo: '9501020121', valor: Number(op.value.efe_md_9501020121) },
    { id: '58', grupo: 'K', name: 'Pasivos Directamente Asociados con los Activos No Corrientes y Operaciones Discontinuadas', codigo: '9501020122', valor: Number(op.value.efe_md_9501020122) },
    { id: '59', grupo: 'K', name: 'Otros Pasivos Corrientes', codigo: '9501020123', valor: Number(op.value.efe_md_9501020123) },
    { id: '60', grupo: 'K', name: 'Pasivos Financieros Al Costo Amortizado', codigo: '9501020124', valor: Number(op.value.efe_md_9501020124) },
    { id: '61', grupo: 'K', name: 'Mov Otros | Impuesto a las Rentas', codigo: '9501020125', valor: Number(op.value.efe_md_9501020125) },
    { id: '62', grupo: 'K', name: 'Mov Otros | Partiipación a Trabajadores', codigo: '9501020126', valor: Number(op.value.efe_md_9501020126) },
    { id: '63', grupo: 'K', name: 'Mov Propiedades,Planta y Equipo | Gastos de Depreciación', codigo: '9501020127', valor: Number(op.value.efe_md_9501020127) },
    { id: '64', grupo: 'K', name: 'Mov Propiedades de Inversión | Edificios | Gastos de Depreciación', codigo: '9501020128', valor: Number(op.value.efe_md_9501020128) },
    { id: '65', grupo: 'K', name: 'Mov Activos Intangibles | Gastos de Amortización', codigo: '9501020129', valor: Number(op.value.efe_md_9501020129) },
    { id: '66', grupo: 'K', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del Año', codigo: '9501020130', valor: Number(op.value.efe_md_9501020130) },
    { id: '67', grupo: 'K', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o Reversiones', codigo: '9501020131', valor: Number(op.value.efe_md_9501020131) },
    { id: '68', grupo: 'K', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '9501020132', valor: Number(op.value.efe_md_9501020132) },
    { id: '69', grupo: 'K', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '9501020133', valor: Number(op.value.efe_md_9501020133) },
    { id: '70', grupo: 'K', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '9501020134', valor: Number(op.value.efe_md_9501020134) },
    { id: '71', grupo: 'K', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '9501020135', valor: Number(op.value.efe_md_9501020135) },
    { id: '72', grupo: 'K', name: 'Mov Activos Financieros Largo Plazo | Provisión por Deterioro', codigo: '9501020136', valor: Number(op.value.efe_md_9501020136) },
    { id: '73', grupo: 'K', name: 'Mov Propiedades de Inversión | Terrenos | Valor Razonable', codigo: '9501020137', valor: Number(op.value.efe_md_9501020137) },
    { id: '74', grupo: 'K', name: 'Mov Propiedades de Inversión | Edificios | Valor Razonable', codigo: '9501020138', valor: Number(op.value.efe_md_9501020138) },
    { id: '75', grupo: 'K', name: 'Mov Propiedades, Planta y Equipo | Bajas Incluida Depreciación', codigo: '9501020139', valor: Number(op.value.efe_md_9501020139) },
    { id: '76', grupo: 'K', name: 'Mov Propiedades, Planta y Equipo | Ajustes a PyG', codigo: '9501020140', valor: Number(op.value.efe_md_9501020140) },
    { id: '77', grupo: 'K', name: 'Mov Propiedades de Inversión | Terrenos | Bajas Incluida LA Depreciación', codigo: '9501020141', valor: Number(op.value.efe_md_9501020141) },
    { id: '78', grupo: 'K', name: 'Mov Propiedades de Inversión | Edificios | Bajas Incluidas La Depreciación', codigo: '9501020142', valor: Number(op.value.efe_md_9501020142) },
    { id: '79', grupo: 'K', name: 'Mov Propiedades de Inversión | Terrenos | Otros', codigo: '9501020143', valor: Number(op.value.efe_md_9501020143) },
    { id: '80', grupo: 'K', name: 'Mov Propiedades de Inversión | Edificios | Otros', codigo: '9501020144', valor: Number(op.value.efe_md_9501020144) },
    { id: '81', grupo: 'K', name: 'Mov Activos Intangibles | Bajas Incluida la Depreciación', codigo: '9501020145', valor: Number(op.value.efe_md_9501020145) },
    { id: '83', grupo: 'K', name: 'Mov Activos Intangibles | Otros', codigo: '9501020146', valor: Number(op.value.efe_md_9501020146) },
    { id: '84', grupo: 'K', name: 'Mov Activos Biológicos | Bajas o Ventas', codigo: '9501020147', valor: Number(op.value.efe_md_9501020147) },
    { id: '85', grupo: 'K', name: 'Mov Activos Biológicos | Incremento o Disminución Del Valor Razonable', codigo: '9501020148', valor: Number(op.value.efe_md_9501020148) },
    { id: '86', grupo: 'K', name: 'Mov Jubilación Patronal | Costos por Servicios Actuales', codigo: '9501020149', valor: Number(op.value.efe_md_9501020149) },
    { id: '87', grupo: 'K', name: 'Mov Jubilación Patronal | Costo Financiero', codigo: '9501020150', valor: Number(op.value.efe_md_9501020150) },
    { id: '88', grupo: 'K', name: 'Mov Jubilación Patronal | Otros', codigo: '9501020151', valor: Number(op.value.efe_md_9501020151) },
    { id: '89', grupo: 'K', name: 'Mov Jubilación Patronal | Efectos de Liquidaciones Anticipadas', codigo: '9501020152', valor: Number(op.value.efe_md_9501020152) },
    { id: '90', grupo: 'K', name: 'Mov Desahucio | Costos por Servicios Actuales', codigo: '9501020153', valor: Number(op.value.efe_md_9501020153) },
    { id: '90', grupo: 'K', name: 'Mov Desahucio | Costo Financiero', codigo: '9501020154', valor: Number(op.value.efe_md_9501020154) },
    { id: '90', grupo: 'K', name: 'Mov Desahucio | Otros', codigo: '9501020155', valor: Number(op.value.efe_md_9501020155) },
    { id: '90', grupo: 'K', name: 'Mov Desahucio | Efecto de Liquidaciones Anticipadas', codigo: '9501020156', valor: Number(op.value.efe_md_9501020156) },
  ]

  cuentasGrupoL.value  = [
    { id: '91', grupo: 'L', name: 'Pagos procedentes de contratos mantenidos para intermediación o para negociar', codigo: '95010202', valor: Number(op.value.efe_md_95010202) },
  ]

  cuentasGrupoM.value  = [
    { id: '92', grupo: 'M', name: 'Pagos a y por cuenta de los empleados', codigo: '95010203', valor: Number(op.value.efe_md_95010203) },
  ]

  cuentasGrupoMM.value  = [
    { id: '921', grupo: 'MM', name: 'Resultados | 15% Participación Trabajadores', codigo: '9501020301', valor: Number(op.value.efe_md_9501020301) },
    { id: '922', grupo: 'MM', name: 'Mov Otros | Participación Trabajadores | Provisión del año', codigo: '9501020302', valor: Number(op.value.efe_md_9501020302) },
    { id: '923', grupo: 'MM', name: 'Mov Otros | Participación Trabajadores | Pago', codigo: '9501020303', valor: Number(op.value.efe_md_9501020303) },
  ]

  cuentasGrupoN.value  = [
    { id: '93', grupo: 'N', name: 'Pagos por primas y prestaciones, anualidades y otras obligaciones derivadas de las pólizas suscritas', codigo: '95010204', valor: Number(op.value.efe_md_95010204) },
  ]

  cuentasGrupoO.value  = [
    { id: '94', grupo: 'O', name: 'Otros pagos por actividades de operación', codigo: '95010205', valor: Number(op.value.efe_md_95010205) },
  ]

  cuentasGrupoP.value  = [
    { id: '95', grupo: 'P', name: 'Dividendos pagados', codigo: '950103', valor: Number(op.value.efe_md_950103) },
  ]

  cuentasGrupoQ.value  = [
    { id: '96', grupo: 'Q', name: 'Dividendos recibidos', codigo: '950104', valor: Number(op.value.efe_md_950104) },
  ]

  cuentasGrupoR.value  = [
    { id: '97', grupo: 'R', name: 'Dividendos', codigo: '95010401', valor: Number(op.value.efe_md_95010401) },
  ]

  cuentasGrupoS.value  = [
    { id: '98', grupo: 'S', name: 'Intereses pagados', codigo: '950105', valor: Number(op.value.efe_md_950105) },
  ]

  cuentasGrupoT.value  = [
    { id: '99', grupo: 'T', name: 'Gastos Financieros', codigo: '95010501', valor: Number(op.value.efe_md_95010501) },
    { id: '100', grupo: 'T', name: 'Intereses o Actualización de Antiguas Inversiones', codigo: '95010502', valor: Number(op.value.efe_md_95010502) },
    { id: '101', grupo: 'T', name: 'Ajustes', codigo: '95010503', valor: Number(op.value.efe_md_95010503) },
  ]

  cuentasGrupoV.value  = [
    { id: '102', grupo: 'V', name: 'Intereses recibidos', codigo: '950106', valor: Number(op.value.efe_md_950106) },
  ]

  cuentasGrupoW.value  = [
    { id: '103', grupo: 'W', name: 'Impuestos a las ganancias pagados', codigo: '950107', valor: Number(op.value.efe_md_950107) },
  ]

  cuentasGrupoX.value  = [
    { id: '104', grupo: 'X', name: 'Impuestos a la Renta Causado', codigo: '95010701', valor: Number(op.value.efe_md_95010701) },
    { id: '105', grupo: 'X', name: 'Impuestos a la Renta | Provisión del año', codigo: '95010702', valor: Number(op.value.efe_md_95010702) },
    { id: '106', grupo: 'X', name: 'Impuestos a la Renta | Pagos', codigo: '95010703', valor: Number(op.value.efe_md_95010703) },
  ]

  cuentasGrupoY.value  = [
    { id: '107', grupo: 'Y', name: 'Otras entradas (salidas) de efectivo', codigo: '950108', valor: Number(op.value.efe_md_950108) },
  ]

  cuentasGrupoZ.value  = [
    { id: '108', grupo: 'Z', name: 'Otros Gastos', codigo: '95010801', valor: Number(op.value.efe_md_95010801) },
    { id: '109', grupo: 'Z', name: 'Otros Ingresos', codigo: '95010802', valor: Number(op.value.efe_md_95010802) },
    { id: '110', grupo: 'Z', name: 'Gasto por Impuestos Diferidos', codigo: '95010803', valor: Number(op.value.efe_md_95010803) },
    { id: '111', grupo: 'Z', name: 'Ingreso por Impuesto Diferido', codigo: '95010804', valor: Number(op.value.efe_md_95010804) },
    { id: '112', grupo: 'Z', name: 'Activo | Impuesto Diferido | Generación Reversión', codigo: '95010805', valor: Number(op.value.efe_md_95010805) },
    { id: '113', grupo: 'Z', name: 'Activo | Impuesto Diferido | Ajustes a Resultados', codigo: '95010806', valor: Number(op.value.efe_md_95010806) },
    { id: '114', grupo: 'Z', name: 'Pasivo | Impuesto Diferido | Generación Reversión', codigo: '95010807', valor: Number(op.value.efe_md_95010807) },
    { id: '115', grupo: 'Z', name: 'Pasivo | Impuesto Diferido | Ajustes a Resultados', codigo: '95010808', valor: Number(op.value.efe_md_95010808) },
    { id: '116', grupo: 'Z', name: 'Pérdida (Ganancia) de moneda extranjera no realizada', codigo: '95010809', valor: Number(op.value.efe_md_95010809) },
    { id: '117', grupo: 'Z', name: 'Pérdidas en cambio de moneda extranjera', codigo: '95010810', valor: Number(op.value.efe_md_95010810) },
    { id: '118', grupo: 'Z', name: 'Ajustes por gastos en provisiones', codigo: '95010811', valor: Number(op.value.efe_md_95010811) },
    { id: '119', grupo: 'Z', name: 'Ajustes por Participaciones no Controladoras', codigo: '95010812', valor: Number(op.value.efe_md_95010812) },
    { id: '120', grupo: 'Z', name: 'Ajustes por Pagos basados en Acciones', codigo: '95010813', valor: Number(op.value.efe_md_95010813) },
  ]

  cuentasGrupoAA.value  = [
    { id: '121', grupo: 'AA', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE OPERACIÓN', codigo: '9501', valor: Number(fi.value.efe_md_9501) },
  ]

} else {

}

// Inicialización de las cuentas, asignando la propiedad "grupo" correspondiente



const allowedMapping = {
  C: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  E: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  K: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  T: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  X: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  Z: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  R: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
  MM: ['E', 'C', 'K', 'T', 'X', 'Z', 'R', 'MM'],
}

const checkMove = evt => {
  if (!evt.to) return false

  const dragged = evt.draggedContext.element
  const sourceGroup = dragged.grupo
  const destinationGroup = evt.to.getAttribute('data-grupo')

  if (!destinationGroup) return false // Evitar errores

  if (sourceGroup === 'C' || sourceGroup === 'E' || sourceGroup === 'K' || sourceGroup === 'T' || sourceGroup === 'X' || sourceGroup === 'Z' || sourceGroup === 'R' || sourceGroup === 'MM') {
    return allowedMapping[sourceGroup].includes(destinationGroup)
  } else {
    return sourceGroup === destinationGroup
  }
}

const onEnd = evt => {
  if (!evt.to) return

  const destinationGroup = evt.to.getAttribute('data-grupo')
  if (!destinationGroup) return // Evitar errores

  const movedItem = evt.item.__vue__

  if (movedItem) {
    movedItem.grupo = destinationGroup
  }
  recalcularTotales()
}

const recalcularTotales = () => {
  cuentasGrupoB.value.find(c => c.codigo === '95010101').valor =
    cuentasGrupoC.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoD.value.find(c => c.codigo === '95010102').valor =
    cuentasGrupoE.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoJ.value.find(c => c.codigo === '95010201').valor =
    cuentasGrupoK.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoQ.value.find(c => c.codigo === '950104').valor =
    cuentasGrupoR.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoS.value.find(c => c.codigo === '950105').valor =
    cuentasGrupoT.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoW.value.find(c => c.codigo === '950107').valor =
    cuentasGrupoX.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoY.value.find(c => c.codigo === '950108').valor =
    cuentasGrupoZ.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoM.value.find(c => c.codigo === '95010203').valor =
    cuentasGrupoMM.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoA.value.find(c => c.codigo === '950101').valor =
    cuentasGrupoB.value.find(c => c.codigo === '95010101').valor +
    cuentasGrupoD.value.find(c => c.codigo === '95010102').valor +
    cuentasGrupoF.value.find(c => c.codigo === '95010103').valor +
    cuentasGrupoG.value.find(c => c.codigo === '95010104').valor +
    cuentasGrupoH.value.find(c => c.codigo === '95010105').valor

  cuentasGrupoI.value.find(c => c.codigo === '950102').valor =
    cuentasGrupoJ.value.find(c => c.codigo === '95010201').valor +
    cuentasGrupoL.value.find(c => c.codigo === '95010202').valor +
    cuentasGrupoM.value.find(c => c.codigo === '95010203').valor +
    cuentasGrupoN.value.find(c => c.codigo === '95010204').valor +
    cuentasGrupoO.value.find(c => c.codigo === '95010205').valor

  cuentasGrupoAA.value.find(c => c.codigo === '9501').valor =
    cuentasGrupoA.value.find(c => c.codigo === '950101').valor +
    cuentasGrupoI.value.find(c => c.codigo === '950102').valor +
    cuentasGrupoP.value.find(c => c.codigo === '950103').valor +
    cuentasGrupoQ.value.find(c => c.codigo === '950104').valor +
    cuentasGrupoS.value.find(c => c.codigo === '950105').valor +
    cuentasGrupoV.value.find(c => c.codigo === '950106').valor +
    cuentasGrupoW.value.find(c => c.codigo === '950107').valor +
    cuentasGrupoY.value.find(c => c.codigo === '950108').valor

  console.log('cuentasGrupoC: ', cuentasGrupoC.value)
  console.log('cuentasGrupoE: ', cuentasGrupoE.value)

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdefinanciamiento_df_ifluc: fi.value,
  })

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeoperacion_df_ifluc: op.value,
  })

  const cuentas = [
    cuentasGrupoA,
    cuentasGrupoB,
    cuentasGrupoC,
    cuentasGrupoD,
    cuentasGrupoE,
    cuentasGrupoF,
    cuentasGrupoG,
    cuentasGrupoH,
    cuentasGrupoI,
    cuentasGrupoJ,
    cuentasGrupoK,
    cuentasGrupoL,
    cuentasGrupoM,
    cuentasGrupoMM,
    cuentasGrupoN,
    cuentasGrupoO,
    cuentasGrupoP,
    cuentasGrupoQ,
    cuentasGrupoR,
    cuentasGrupoS,
    cuentasGrupoT,
    cuentasGrupoV,
    cuentasGrupoW,
    cuentasGrupoX,
    cuentasGrupoY,
    cuentasGrupoZ,
    cuentasGrupoAA,
  ]

  const allCuentas = {}

  cuentas.forEach((grupo, indexGrupo) => {
    grupo.value.forEach(cuenta => {
      JSON.stringify(allCuentas[`efe_md_${cuenta.codigo}`] = {
        codigo: cuenta.codigo,
        valor: cuenta.valor,
        grupo: cuenta.grupo,
        name: cuenta.name,
        posicionGrupo: indexGrupo,
      })
    })
  })

  console.log(allCuentas)



  // guardarReporte(cuentas.value)
}

const guardarReporte = async cuentas => {
  try {
    const datos = {
      reporteId: reporteId,
      cuentas: cuentas.value,
    }

    await superciasListStore.addReporteDynamicFlowActividadesDeOperacion(datos)
    console.log("Reporte guardado con éxito.")
  } catch (error) {
    console.error("Error al guardar el reporte:", error)
  }
}
</script>
