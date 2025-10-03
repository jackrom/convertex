<template>
  <VForm>
    <VCardText class="add-products-form">

      <div class="mt-10" style="height: 30px !important;"></div>
      <!-- ACTIVIDADES DE INVERSIÓN Y FINANCIAMIENTO -->
      <div class="ma-sm-4 mt-4">
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <h4 class="ml-2">ACTIVIDADES DE OPERACIÓN</h4>
            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950101"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950101" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010101"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010101" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010101_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010101_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010102"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010102" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010102_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010102_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010103"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010103" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010104"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010104" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010105"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010105" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950102"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950102" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010201"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010201" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010201_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010201_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010202"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010202" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010203"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010203" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010204"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010204" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010205"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010205" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950103"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950103" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950104"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950104" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_95010401"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_95010401" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950105"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950105" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950105_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950105_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950106"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950106" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950107"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950107" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950107_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950107_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950108"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950108" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_950108_plus"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeoperacion_950108_plus" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="actividadesdeoperacion_9501"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer bg-info" v-for="(item, index) in actividadesdeoperacion_9501" :key="index">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ item.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="8">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>
              </VueDraggableNext>
            </VCol>

            <!-- actividades de inversion -->
            <h4 class="ml-2 mt-5">ACTIVIDADES DE INVERSIÓN</h4>
            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                group="people"
                :list="actividadesdeinversion"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdeinversion" :key="index">
                  <VCol cols="12" md="10">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <h4 class="ml-2 mt-5">ACTIVIDADES DE FINANCIAMIENTO</h4>
            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                group="people"
                :list="actividadesdefinanciamiento"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in actividadesdefinanciamiento" :key="index">
                  <VCol cols="12" md="10">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>

            <h4 class="ml-2 mt-5">CONCILIACIÓN ENTRE LA GANANCIA (PÉRDIDA) NETA Y LOS FLUJOS DE OPERACIÓN</h4>
            <VCol cols="12" md="12" style="font-size:14px;">
              <VueDraggableNext
                class="dragArea"
                :list="conciliacion"
                @change="log"
              >
                <VRow class="px-4 mt-10 cursor-pointer" v-for="(item, index) in conciliacion" :key="index">
                  <VCol cols="12" md="10">
                    <span class="text-uppercase">{{ item.name }}</span>
                  </VCol>
                  <VCol cols="12" md="2">
                    <span class="" :id="`cant${index}`">{{ (item.valor).toFixed(2) }}</span>
                  </VCol>
                  <VDivider />
                </VRow>

              </VueDraggableNext>
            </VCol>
          </VRow>
          <!--
          <VRow>
            <VCol>
              <p>Total: {{ total }}</p>
            </VCol>
          </VRow>
          -->
        </div>
      </div>

    </VCardText>
  </VForm>
</template>

<script setup>
import { ref, watch } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const op = ref(reportStore.getReportData('actividadesdeoperacionifluc'))
const nv = ref(reportStore.getReportData('actividadesdeinversionifluc'))
const fi = ref(reportStore.getReportData('actividadesdefinanciamientoifluc'))
const co = ref(reportStore.getReportData('conciliacionganancianetaifluc'))

const handleActionClick = async id => {
  // Do something
}

const handleActionClick_ant = async id => {
  // Do something
}

let actividadesdeoperacion_950101 = ref([
  { id: '1', name: 'Clases de cobros por actividades de operación', codigo: '950101', valor: Number(op.value['efe_md_950101']) },
])

let actividadesdeoperacion_95010101 = ref([
  { id: '2', name: 'Cobros procedentes de las ventas de bienes y prestación de servicios', codigo: '95010101', valor: Number(op.value.efe_md_95010101) },
])

let actividadesdeoperacion_95010101_plus = ref([
  { id: '3', name: 'Venta de bienes', codigo: '9501010101', valor: Number(op.value.efe_md_9501010101) },
  { id: '4', name: 'Prestación de servicios', codigo: '9501010102', valor: Number(op.value.efe_md_9501010102) },
  { id: '5', name: 'Contratos de construcción', codigo: '9501010103', valor: Number(op.value.efe_md_9501010103) },
  { id: '6', name: 'Descuentos en ventas', codigo: '9501010104', valor: Number(op.value.efe_md_9501010104) },
  { id: '7', name: 'Devoluciones en ventas', codigo: '9501010105', valor: Number(op.value.efe_md_9501010105) },
  { id: '8', name: 'Bonificación en producto', codigo: '9501010106', valor: Number(op.value.efe_md_9501010106) },
  { id: '9', name: 'Otras rebajas comerciales', codigo: '9501010107', valor: Number(op.value.efe_md_9501010107) },
  { id: '10', name: 'Utilidad en cambio', codigo: '9501010108', valor: Number(op.value.efe_md_9501010108) },
  { id: '11', name: 'Deudores comerciales y otras cuentas por cobrar no relacionados', codigo: '9501010109', valor: Number(op.value.efe_md_9501010109) },
  { id: '12', name: 'Provisión por deterioro de activos financieros', codigo: '9501010110', valor: Number(op.value.efe_md_9501010110) },
  { id: '13', name: 'Provisión por cuentas incobrables y detrioro', codigo: '9501010111', valor: Number(op.value.efe_md_9501010111) },
  { id: '14', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '9501010112', valor: Number(op.value.efe_md_9501010112) },
  { id: '15', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '9501010113', valor: Number(op.value.efe_md_9501010113) },
  { id: '16', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '9501010114', valor: Number(op.value.efe_md_9501010114) },
  { id: '17', name: 'Activos Financieros a Valor Razonable con Cambios en Resultados', codigo: '9501010115', valor: Number(op.value.efe_md_9501010115) },
  { id: '18', name: 'Activos Financieros a Valor Razonable con Cambios en Otros Resultado Integral', codigo: '9501010116', valor: Number(op.value.efe_md_9501010116) },
  { id: '19', name: 'Activos Financieros al Costo Amortizado', codigo: '9501010117', valor: Number(op.value.efe_md_9501010117) },
  { id: '20', name: 'Activos por Impuestos Corrientes', codigo: '9501010118', valor: Number(op.value.efe_md_9501010118) },
  { id: '21', name: 'Activos Corrientes Mantenidos para la Venta y Operaciones Discontinuadas', codigo: '9501010119', valor: Number(op.value.efe_md_9501010119) },
  { id: '22', name: 'Construcciones en Proceso (NIC 11 y Secc.23 PYMES)', codigo: '9501010120', valor: Number(op.value.efe_md_9501010120) },
  { id: '23', name: 'Otros Activos Corrientes', codigo: '9501010121', valor: Number(op.value.efe_md_9501010121) },
])

let actividadesdeoperacion_95010102 = ref([
  { id: '24', name: 'Cobros procedentes de regalías, cuotas, comisiones y otros ingresos de actividades ordinarias', codigo: '95010102', valor: Number(op.value.efe_md_95010102) },
])

let actividadesdeoperacion_95010102_plus = ref([
  { id: '25', name: 'Subvenciones del Gobierno', codigo: '9501010201', valor: Number(op.value.efe_md_9501010201) },
  { id: '26', name: 'Regalías', codigo: '9501010202', valor: Number(op.value.efe_md_9501010202) },
  { id: '27', name: 'Intereses', codigo: '9501010203', valor: Number(op.value.efe_md_9501010203) },
  { id: '28', name: 'Ganancia por Medición a Valor Razonable de Activos Biológicos', codigo: '9501010204', valor: Number(op.value.efe_md_9501010204) },
  { id: '29', name: 'Ingresos por Comisiones, Prestación de Servicios, Custodia, Registro, Compensación y Liquidación', codigo: '9501010205', valor: Number(op.value.efe_md_9501010205) },
  { id: '30', name: 'Ingresos Financieros', codigo: '9501010206', valor: Number(op.value.efe_md_9501010206) },
  { id: '31', name: 'Documentos y Cuentas por Cobrar Relacionados', codigo: '9501010207', valor: Number(op.value.efe_md_9501010207) },
])

let actividadesdeoperacion_95010103 = ref([
  { id: '32', name: 'Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar', codigo: '95010103', valor: Number(op.value.efe_md_95010103) },
])

let actividadesdeoperacion_95010104 = ref([
  { id: '32', name: 'Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar', codigo: '95010103', valor: Number(op.value.efe_md_95010103) },
])

let actividadesdeoperacion_95010105 = ref([
  { id: '34', name: 'Otros cobros por actividades de operación', codigo: '95010105', valor: Number(op.value.efe_md_95010105) },
])

let actividadesdeoperacion_950102 = ref([
  { id: '35', name: 'Clases de pagos por actvidades de operación', codigo: '950102', valor: Number(op.value.efe_md_950102) },
])

let actividadesdeoperacion_95010201 = ref([
  { id: '36', name: 'Pagos a proveedores por el suministro de bienes y servicios', codigo: '95010201', valor: Number(op.value.efe_md_95010201) },
])

let actividadesdeoperacion_95010201_plus = ref([
  { id: '37', name: 'Costo de Ventas y Producción', codigo: '9501020101', valor: Number(op.value.efe_md_9501020101) },
  { id: '38', name: 'Inventarios', codigo: '9501020102', valor: Number(op.value.efe_md_9501020102) },
  { id: '39', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '9501020103', valor: Number(op.value.efe_md_9501020103) },
  { id: '40', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '9501020104', valor: Number(op.value.efe_md_9501020104) },
  { id: '41', name: 'Mov Pérdida Acum Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '9501020105', valor: Number(op.value.efe_md_9501020105) },
  { id: '42', name: 'Gasto de Venta', codigo: '9501020106', valor: Number(op.value.efe_md_9501020106) },
  { id: '43', name: 'Gasto Administrativo', codigo: '9501020107', valor: Number(op.value.efe_md_9501020107) },
  { id: '44', name: 'Servicios y Otros Pagos Anticipados', codigo: '9501020108', valor: Number(op.value.efe_md_9501020108) },
  { id: '45', name: 'Cuentas y Documentos por Pagar', codigo: '9501020109', valor: Number(op.value.efe_md_9501020109) },
  { id: '46', name: 'Porción Corriente de Provisiones Por Beneficios a Empleados', codigo: '9501020110', valor: Number(op.value.efe_md_9501020110) },
  { id: '47', name: 'Pasivos Financieros a Valor Razonable con Cambios en Resultados', codigo: '9501020111', valor: Number(op.value.efe_md_9501020111) },
  { id: '48', name: 'Pasivos por Contratos de Arrendamiento', codigo: '9501020112', valor: Number(op.value.efe_md_9501020112) },
  { id: '49', name: 'Obligaciones con Instituciones Financieras', codigo: '9501020113', valor: Number(op.value.efe_md_9501020113) },
  { id: '50', name: 'Provisiones', codigo: '9501020114', valor: Number(op.value.efe_md_9501020114) },
  { id: '51', name: 'Porción Corriente de Valores Emitidos', codigo: '9501020115', valor: Number(op.value.efe_md_9501020115) },
  { id: '52', name: 'Otras Obligaciones Corrientes', codigo: '9501020116', valor: Number(op.value.efe_md_9501020116) },
  { id: '53', name: 'Cuentas por Pagar a Relacionadas', codigo: '9501020117', valor: Number(op.value.efe_md_9501020117) },
  { id: '54', name: 'Otros Pasivos Financieros', codigo: '9501020118', valor: Number(op.value.efe_md_9501020118) },
  { id: '55', name: 'Anticipos', codigo: '9501020119', valor: Number(op.value.efe_md_9501020119) },
  { id: '56', name: 'Pasivos Directamente Asociados con los Activos No Corrientes y Operaciones Discontinuadas', codigo: '9501020120', valor: Number(op.value.efe_md_9501020120) },
  { id: '57', name: 'Otros Pasivos Corrientes', codigo: '9501020121', valor: Number(op.value.efe_md_9501020121) },
  { id: '58', name: 'Pasivos Financieros Al Costo Amortizado', codigo: '9501020122', valor: Number(op.value.efe_md_9501020122) },
  { id: '59', name: 'Mov Otros | Impuesto a las Rentas', codigo: '9501020123', valor: Number(op.value.efe_md_9501020123) },
  { id: '60', name: 'Mov Otros | Partiipación a Trabajadores', codigo: '9501020124', valor: Number(op.value.efe_md_9501020124) },
  { id: '61', name: 'Mov Propiedades,Planta y Equipo | Gastos de Depreciación', codigo: '9501020125', valor: Number(op.value.efe_md_9501020125) },
  { id: '62', name: 'Mov Propiedades de Inversión | Edificios | Gastos de Depreciación', codigo: '9501020126', valor: Number(op.value.efe_md_9501020126) },
  { id: '63', name: 'Mov Activos Intangibles | Gastos de Amortización', codigo: '9501020127', valor: Number(op.value.efe_md_9501020127) },
  { id: '64', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Provisión del Año', codigo: '9501020128', valor: Number(op.value.efe_md_9501020128) },
  { id: '65', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o Reversiones', codigo: '9501020129', valor: Number(op.value.efe_md_9501020129) },
  { id: '66', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '9501020130', valor: Number(op.value.efe_md_9501020130) },
  { id: '67', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '9501020131', valor: Number(op.value.efe_md_9501020131) },
  { id: '68', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '9501020132', valor: Number(op.value.efe_md_9501020132) },
  { id: '69', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '9501020133', valor: Number(op.value.efe_md_9501020133) },
  { id: '70', name: 'Mov Activos Financieros Largo Plazo | Provisión por Deterioro', codigo: '9501020134', valor: Number(op.value.efe_md_9501020134) },
  { id: '71', name: 'Mov Propiedades de Inversión | Terrenos | Valor Razonable', codigo: '9501020135', valor: Number(op.value.efe_md_9501020135) },
  { id: '72', name: 'Mov Propiedades de Inversión | Edificios | Valor Razonable', codigo: '9501020136', valor: Number(op.value.efe_md_9501020136) },
  { id: '73', name: 'Mov Propiedades, Planta y Equipo | Bajas Incluida Depreciación', codigo: '9501020137', valor: Number(op.value.efe_md_9501020137) },
  { id: '74', name: 'Mov Propiedades de Inversión | Terrenos | Bajas Incluida LA Depreciación', codigo: '9501020138', valor: Number(op.value.efe_md_9501020138) },
  { id: '75', name: 'Mov Propiedades de Inversión | Edificios | Bajas Incluidas La Depreciación', codigo: '9501020139', valor: Number(op.value.efe_md_9501020139) },
  { id: '76', name: 'Mov Propiedades de Inversión | Terrenos | Otros', codigo: '9501020140', valor: Number(op.value.efe_md_9501020140) },
  { id: '77', name: 'Mov Propiedades de Inversión | Edificios | Otros', codigo: '9501020141', valor: Number(op.value.efe_md_9501020141) },
  { id: '78', name: 'Mov Activos Intangibles | Bajas Incluida la Depreciación', codigo: '9501020142', valor: Number(op.value.efe_md_9501020142) },
  { id: '79', name: 'Mov Activos Intangibles | Otros', codigo: '9501010108', valor: Number(op.value.efe_md_9501010108) },
  { id: '80', name: 'Mov Activos Biológicos | Bajas o Ventas', codigo: '9501020144', valor: Number(op.value.efe_md_9501020144) },
  { id: '81', name: 'Mov Activos Biológicos | Incremento o Disminución Del Valor Razonable', codigo: '9501020145', valor: Number(op.value.efe_md_9501020145) },
  { id: '82', name: 'Utilidad en cambio', codigo: '9501010108', valor: Number(op.value.efe_md_9501010108) },
  { id: '83', name: 'Mov Jubilación Patronal | Costos por Servicios Actuales', codigo: '9501020146', valor: Number(op.value.efe_md_9501020146) },
  { id: '84', name: 'Mov Jubilación Patronal | Costo Financiero', codigo: '9501020147', valor: Number(op.value.efe_md_9501020147) },
  { id: '85', name: 'Mov Jubilación Patronal | Otros', codigo: '9501020148', valor: Number(op.value.efe_md_9501020148) },
  { id: '86', name: 'Mov Jubilación Patronal | Efectos de Liquidaciones Anticipadas', codigo: '9501020149', valor: Number(op.value.efe_md_9501020149) },
  { id: '87', name: 'Mov Desahucio | Costos por Servicios Actuales', codigo: '9501020150', valor: Number(op.value.efe_md_9501020150) },
  { id: '88', name: 'Mov Desahucio | Costo Financiero', codigo: '9501020151', valor: Number(op.value.efe_md_9501020151) },
  { id: '89', name: 'Mov Desahucio | Otros', codigo: '9501020152', valor: Number(op.value.efe_md_9501020152) },
  { id: '90', name: 'Mov Desahucio | Efecto de Liquidaciones Anticipadas', codigo: '9501020153', valor: Number(op.value.efe_md_9501020153) },
])

let actividadesdeoperacion_95010202 = ref([
  { id: '91', name: 'Pagos procedentes de contratos mantenidos para intermediación o para negociar', codigo: '95010202', valor: Number(op.value.efe_md_95010202) },
])

let actividadesdeoperacion_95010203 = ref([
  { id: '92', name: 'Pagos a y por cuenta de los empleados', codigo: '95010203', valor: Number(op.value.efe_md_95010203) },
])

let actividadesdeoperacion_95010204 = ref([
  { id: '93', name: 'Pagos por primas y prestaciones, anualidades y otras obligaciones derivadas de las pólizas suscritas', codigo: '95010204', valor: Number(op.value.efe_md_95010204) },
])

let actividadesdeoperacion_95010205 = ref([
  { id: '94', name: 'Otros pagos por actividades de operación', codigo: '95010205', valor: Number(op.value.efe_md_95010205) },
])

let actividadesdeoperacion_950103 = ref([
  { id: '95', name: 'Dividendos pagados', codigo: '950103', valor: Number(op.value.efe_md_950103) },
])

let actividadesdeoperacion_950104 = ref([
  { id: '96', name: 'Dividendos recibidos', codigo: '950104', valor: Number(op.value.efe_md_950104) },
])

let actividadesdeoperacion_95010401 = ref([
  { id: '97', name: 'Dividendos', codigo: '95010401', valor: Number(op.value.efe_md_95010401) },
])

let actividadesdeoperacion_950105 = ref([
  { id: '98', name: 'Intereses pagados', codigo: '950105', valor: Number(op.value.efe_md_950105) },
])

let actividadesdeoperacion_950105_plus = ref([
  { id: '99', name: 'Gastos Financieros', codigo: '95010501', valor: Number(op.value.efe_md_95010501) },
  { id: '100', name: 'Intereses o Actualización de Antiguas Inversiones', codigo: '95010502', valor: Number(op.value.efe_md_95010502) },
  { id: '101', name: 'Ajustes', codigo: '95010503', valor: Number(op.value.efe_md_95010503) },
])

let actividadesdeoperacion_950106 = ref([
  { id: '102', name: 'Intereses recibidos', codigo: '950106', valor: Number(op.value.efe_md_950106) },
])

let actividadesdeoperacion_950107 = ref([
  { id: '103', name: 'Impuestos a las ganancias pagados', codigo: '950107', valor: Number(op.value.efe_md_950107) },
])

let actividadesdeoperacion_950107_plus = ref([
  { id: '104', name: 'Impuestos a la Renta Causado', codigo: '95010701', valor: Number(op.value.efe_md_95010701) },
  { id: '105', name: 'Impuestos a la Renta | Provisión del año', codigo: '95010702', valor: Number(op.value.efe_md_95010702) },
  { id: '106', name: 'Impuestos a la Renta | Pagos', codigo: '95010703', valor: Number(op.value.efe_md_95010703) },
])

let actividadesdeoperacion_950108 = ref([
  { id: '107', name: 'Otras entradas (salidas) de efectivo', codigo: '950108', valor: Number(op.value.efe_md_950108) },
])

let actividadesdeoperacion_950108_plus = ref([
  { id: '108', name: 'Otros Gastos', codigo: '95010801', valor: Number(op.value.efe_md_95010801) },
  { id: '109', name: 'Otros Ingresos', codigo: '95010802', valor: Number(op.value.efe_md_95010802) },
  { id: '110', name: 'Gasto por Impuestos Diferidos', codigo: '95010803', valor: Number(op.value.efe_md_95010803) },
  { id: '111', name: 'Ingreso por Impuesto Diferido', codigo: '95010804', valor: Number(op.value.efe_md_95010804) },
  { id: '112', name: 'Activo | Impuesto Diferido | Generación Reversión', codigo: '95010805', valor: Number(op.value.efe_md_95010805) },
  { id: '113', name: 'Activo | Impuesto Diferido | Ajustes a Resultados', codigo: '95010806', valor: Number(op.value.efe_md_95010806) },
  { id: '114', name: 'Pasivo | Impuesto Diferido | Generación Reversión', codigo: '95010807', valor: Number(op.value.efe_md_95010807) },
  { id: '115', name: 'Pasivo | Impuesto Diferido | Ajustes a Resultados', codigo: '95010808', valor: Number(op.value.efe_md_95010808) },
  { id: '116', name: 'Pérdida (Ganancia) de moneda extranjera no realizada', codigo: '95010809', valor: Number(op.value.efe_md_95010809) },
  { id: '117', name: 'Pérdidas en cambio de moneda extranjera', codigo: '95010810', valor: Number(op.value.efe_md_95010810) },
  { id: '118', name: 'Ajustes por gastos en provisiones', codigo: '95010811', valor: Number(op.value.efe_md_95010811) },
  { id: '119', name: 'Ajustes por Participaciones no Controladoras', codigo: '95010812', valor: Number(op.value.efe_md_95010812) },
  { id: '120', name: 'Ajustes por Pagos basados en Acciones', codigo: '95010813', valor: Number(op.value.efe_md_95010813) },
])

let actividadesdeoperacion_9501 = ref([
  { id: '121', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE OPERACIÓN', codigo: '9501', valor: Number(fi.value.efe_md_9501) },
])


// ACTIVIDADES DE INVERSION
const actividadesdeinversion = ref([
  { id: '1', name: 'Efectivo procedentes de la venta de acciones en subsidiarias u otros negocios', codigo: '950201', valor: Number(nv.value['efe_md_950201']) },
  { id: '2', name: 'Efectivo utilizado para adquirir acciones en subsidiarias u otros negocios para tener el control', codigo: '950202', valor: Number(nv.value['efe_md_950202']) },
  { id: '3', name: 'Efectivo utilizado en la compra de participaciones no controladoras', codigo: '950203', valor: Number(nv.value['efe_md_950203']) },
  { id: '4', name: 'Otros cobros por la venta de acciones o instrumentos de deuda de otras entidades', codigo: '950204', valor: Number(nv.value['efe_md_950204']) },
  { id: '5', name: 'Otros pagos para adquirir acciones o instrumentos de deuda de otras entidades', codigo: '950205', valor: Number(nv.value['efe_md_950205']) },
  { id: '6', name: 'Mov Activos Financieros Largo Plazo | Nuevas Inversiones', codigo: '95020501', valor: Number(nv.value['efe_md_95020501']) },
  { id: '7', name: 'Otros cobros por la venta de participaciones en negocios conjuntos', codigo: '950206', valor: Number(nv.value['efe_md_950206']) },
  { id: '8', name: 'Otros pagos para adquirir participaciones en negocios conjuntos', codigo: '950207', valor: Number(nv.value['efe_md_950207']) },
  { id: '9', name: 'Importes procedentes por la venta de propiedades, planta y equipo', codigo: '950208', valor: Number(nv.value['efe_md_950208']) },
  { id: '10', name: 'Adquisiciones de propiedades, planta y equipo', codigo: '950209', valor: Number(nv.value['efe_md_950209']) },
  { id: '11', name: 'Mov Propiedades,Planta y Equipo | Compras', codigo: '95020901', valor: Number(nv.value['efe_md_95020901']) },
  { id: '12', name: 'Importes procedentes de ventas de activos intangibles', codigo: '950210', valor: Number(nv.value['efe_md_950210']) },
  { id: '13', name: 'Compras de activos intangibles', codigo: '950211', valor: Number(nv.value['efe_md_950211']) },
  { id: '14', name: 'Mov Activos Intangibles | Compras', codigo: '95021101', valor: Number(nv.value['efe_md_95021101']) },
  { id: '15', name: 'Importes procedentes de otros activos a largo plazo', codigo: '950212', valor: Number(nv.value['efe_md_950212']) },
  { id: '16', name: 'Compras de otros activos a largo plazo', codigo: '950213', valor: Number(nv.value['efe_md_950213']) },
  { id: '17', name: 'Mov Propiedades de Inversión | Terrenos | Compras', codigo: '95021301', valor: Number(nv.value['efe_md_95021301']) },
  { id: '18', name: 'Mov Propiedades de Inversión | Edificios | Compras', codigo: '95021302', valor: Number(nv.value['efe_md_95021302']) },
  { id: '19', name: 'Mov Activos Biológicos | Compras', codigo: '95021303', valor: Number(nv.value['efe_md_95021303']) },
  { id: '20', name: 'Importes procedentes de subvenciones del gobierno', codigo: '950214', valor: Number(nv.value['efe_md_950214']) },
  { id: '21', name: 'Anticipos de efectivo efectuados a terceros', codigo: '950215', valor: Number(nv.value['efe_md_950215']) },
  { id: '22', name: 'Cobros procedentes del reembolso de anticipos y préstamos concedidos a terceros', codigo: '950216', valor: Number(nv.value['efe_md_950216']) },
  { id: '23', name: 'Pagos derivados de contratos de futuro, a término, de opciones y de permuta financiera', codigo: '950217', valor: Number(nv.value['efe_md_950217']) },
  { id: '24', name: 'Cobros procedentes de contratos de futuro, a término, de opciones y de permuta financiera', codigo: '950218', valor: Number(nv.value['efe_md_950218']) },
  { id: '25', name: 'Dividendos recibidos', codigo: '950219', valor: Number(nv.value['efe_md_950219']) },
  { id: '26', name: 'Intereses recibidos', codigo: '950220', valor: Number(nv.value['efe_md_950220']) },
  { id: '27', name: 'Otras entradas (salidas) de efectivo', codigo: '950221', valor: Number(nv.value['efe_md_950221']) },
  { id: '28', name: 'Derecho de Uso por Activos Arrendados', codigo: '95022101', valor: Number(nv.value['efe_md_95022101']) },
  { id: '29', name: 'Otros Activos no Corrientes', codigo: '95022102', valor: Number(nv.value['efe_md_95022102']) },
  { id: '30', name: 'Documentos y Cuentas por Cobrar No Relacionados', codigo: '95022103', valor: Number(nv.value['efe_md_95022103']) },
  { id: '31', name: 'Documentos y Cuentas por Cobrar Relacionados', codigo: '95022104', valor: Number(nv.value['efe_md_95022104']) },
  { id: '32', name: 'Cuentas y Documentos por Pagar', codigo: '95022105', valor: Number(nv.value['efe_md_95022105']) },
  { id: '33', name: 'Cuentas por Pagar Relacionadas', codigo: '95022106', valor: Number(nv.value['efe_md_95022106']) },
  { id: '34', name: 'Anticipos', codigo: '95022107', valor: Number(nv.value['efe_md_95022107']) },
  { id: '35', name: 'Otras Provisiones', codigo: '95022108', valor: Number(nv.value['efe_md_95022108']) },
  { id: '36', name: 'Pasivo Diferido', codigo: '95022109', valor: Number(nv.value['efe_md_95022109']) },
  { id: '37', name: 'Otros Pasivos No Corrientes', codigo: '95022110', valor: Number(nv.value['efe_md_95022110']) },
  { id: '38', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE INVERSIÓN', codigo: '9502', valor: Number(nv.value['efe_md_9502']) },
])

const actividadesdefinanciamiento = ref([
  { id: '1', name: 'Aporte en efectivo por aumento de capital', codigo: '950301', valor: Number(fi.value.efe_md_950301) },
  { id: '2', name: 'Aumento (Disminución) de Capital Social', codigo: '95030101', valor: Number(fi.value.efe_md_95030101) },
  { id: '3', name: 'Aumento (Disminución) de Capital Social y Aporte para Futura Capitalización', codigo: '95030102', valor: Number(fi.value.efe_md_95030102) },
  { id: '4', name: 'Aporte para Futura Capitalizaciones', codigo: '95030103', valor: Number(fi.value.efe_md_95030103) },
  { id: '5', name: 'Aporte para Futura Capitalizaciones', codigo: '95030104', valor: Number(fi.value.efe_md_95030104) },
  { id: '6', name: 'Financiamiento por emisión de títulos valores', codigo: '950302', valor: Number(fi.value.efe_md_950302) },
  { id: '7', name: 'Pagos por adquirir o rescatar las acciones de la entidad', codigo: '950303', valor: Number(fi.value.efe_md_950303) },
  { id: '8', name: 'Financiación por préstamos a largo plazo', codigo: '950304', valor: Number(fi.value.efe_md_950304) },
  { id: '9', name: 'Pagos de préstamos', codigo: '950305', valor: Number(fi.value.efe_md_950305) },
  { id: '10', name: 'Pagos de pasivos por arrendamientos financieros', codigo: '950306', valor: Number(fi.value.efe_md_950306) },
  { id: '11', name: 'Importes procedentes de subvenciones del gobierno', codigo: '950307', valor: Number(fi.value.efe_md_950307) },
  { id: '12', name: 'Dividendos pagados', codigo: '950308', valor: Number(fi.value.efe_md_950308) },
  { id: '13', name: 'Otros Dividendos Pagados', codigo: '95030801', valor: Number(fi.value.efe_md_95030801) },
  { id: '14', name: 'Intereses recibidos', codigo: '950309', valor: Number(fi.value.efe_md_950309) },
  { id: '15', name: 'Otras entradas (salidas) de efectivo', codigo: '950310', valor: Number(fi.value.efe_md_950310) },
  { id: '16', name: 'Porción no Corrientes de Valores Emitidos', codigo: '95031001', valor: Number(fi.value.efe_md_95031001) },
  { id: '17', name: 'Provisiones por Beneficios a Empleados', codigo: '95031002', valor: Number(fi.value.efe_md_95031002) },
  { id: '18', name: 'Pasivos por Contratos de Arrendamiento', codigo: '95031003', valor: Number(fi.value.efe_md_95031003) },
  { id: '19', name: 'Obligaciones con Instituciones Financieras', codigo: '95031004', valor: Number(fi.value.efe_md_95031004) },
  { id: '20', name: 'Pago por Jubilación Patronal', codigo: '95031005', valor: Number(fi.value.efe_md_95031005) },
  { id: '21', name: 'Pago por Desahucio', codigo: '95031006', valor: Number(fi.value.efe_md_95031006) },
  { id: '22', name: 'Dividendos Pagados', codigo: '95031007', valor: Number(fi.value.efe_md_95031007) },
  { id: '23', name: 'Transferencias a Cuentas de Activos y Pasivo', codigo: '95031008', valor: Number(fi.value.efe_md_95031008) },
  { id: '24', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE FINANCIACIÓN', codigo: '9503', valor: Number(fi.value.efe_md_9503) },
  { id: '25', name: 'Efectos de la variación en la tasa de cambio sobre el efectivo y equivalentes al efectivo', codigo: '950401', valor: Number(fi.value.efe_md_950401) },
  { id: '26', name: 'EFECTOS DE LA VARIACION EN LA TASA DE CAMBIO SOBRE EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO', codigo: '9504', valor: Number(fi.value.efe_md_9504) },
  { id: '27', name: 'INCREMENTO NETO (DISMINUCIÓN) EN EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO, ANTES DEL EFECTO DE LOS CAMBIOS EN LA TASA DE CAMBIO', codigo: '95', valor: Number(fi.value.efe_md_95) },
  { id: '28', name: 'INCREMENTO (DISMINUCIÓN) NETO DE EFECTIVO Y EQUIVALENTES AL EFECTIVO', codigo: '9505', valor: Number(fi.value.efe_md_9505) },
  { id: '29', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO AL PRINCIPIO DEL PERIODO', codigo: '9506', valor: Number(fi.value.efe_md_9506) },
  { id: '30', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO AL FINAL DEL PERIODO SEGÚN EFE', codigo: '9507', valor: Number(fi.value.efe_md_9507) },
])

const conciliacion = ref([
  { id: '1', name: 'GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA', codigo: '96', valor: Number(co.value.efe_md_96) },
  { id: '2', name: 'AJUSTE POR PARTIDAS DISTINTAS AL EFECTIVO:', codigo: '97', valor: Number(co.value.efe_md_97) },
  { id: '3', name: 'Ajustes por gasto de depreciación y amortización', codigo: '9701', valor: Number(co.value.efe_md_9701) },
  { id: '4', name: 'Mov Propiedades, Planta y Equipo', codigo: '970101', valor: Number(co.value.efe_md_970101) },
  { id: '5', name: 'Mov Propiedades de Inversión', codigo: '970102', valor: Number(co.value.efe_md_970102) },
  { id: '6', name: 'Mov Activos Intangibles', codigo: '970103', valor: Number(co.value.efe_md_970103) },
  { id: '7', name: 'Ajustes por gastos por deterioro (reversiones por deterioro) reconocidas en los resultados del periodo', codigo: '9702', valor: Number(co.value.efe_md_9702) },
  { id: '8', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '970201', valor: Number(co.value.efe_md_970201) },
  { id: '9', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '970202', valor: Number(co.value.efe_md_970202) },
  { id: '10', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '970203', valor: Number(co.value.efe_md_970203) },
  { id: '11', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '970204', valor: Number(co.value.efe_md_970204) },
  { id: '12', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '970205', valor: Number(co.value.efe_md_970205) },
  { id: '13', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '970206', valor: Number(co.value.efe_md_970206) },
  { id: '14', name: 'Mov Activos Financieros Largo Plazo | Provision por deterioro', codigo: '970207', valor: Number(co.value.efe_md_970207) },
  { id: '15', name: 'Pérdida (ganancia) de moneda extranjera no realizada', codigo: '9703', valor: Number(co.value.efe_md_9703) },
  { id: '16', name: 'Pérdidas en cambio de moneda extranjera', codigo: '9704', valor: Number(co.value.efe_md_9704) },
  { id: '17', name: 'Ajustes por gastos en provisiones', codigo: '9705', valor: Number(co.value.efe_md_9705) },
  { id: '18', name: 'Ajuste por participaciones no controladoras', codigo: '9706', valor: Number(co.value.efe_md_9706) },
  { id: '19', name: 'Ajuste por pagos basados en acciones', codigo: '9707', valor: Number(co.value.efe_md_9707) },
  { id: '20', name: 'Ajustes por ganancias (pérdidas) en valor razonable', codigo: '9707', valor: Number(co.value.efe_md_9707) },
  { id: '21', name: 'Mov Propiedades de Inversión | Terrenos', codigo: '970801', valor: Number(co.value.efe_md_970801) },
  { id: '22', name: 'Mov Propiedades de Inversión | Edificios', codigo: '970802', valor: Number(co.value.efe_md_970802) },
  { id: '23', name: 'Ajustes por gasto por impuesto a la renta', codigo: '9709', valor: Number(co.value.efe_md_9709) },
  { id: '24', name: 'Mov Otros | Impuesto a la renta', codigo: '970901', valor: Number(co.value.efe_md_970901) },
  { id: '25', name: 'Ajustes por gasto por participación trabajadores', codigo: '9710', valor: Number(co.value.efe_md_9710) },
  { id: '26', name: 'Mov Otros | Participación a trabajadores', codigo: '971001', valor: Number(co.value.efe_md_971001) },
  { id: '27', name: 'Otros ajustes por partidas distintas al efectivo', codigo: '9711', valor: Number(co.value.efe_md_9711) },
  { id: '28', name: 'Mov Propiedades, Planta y Equipo', codigo: '971101', valor: Number(co.value.efe_md_971101) },
  { id: '29', name: 'Mov Propiedades de Inversión | Terrenos', codigo: '971102', valor: Number(co.value.efe_md_971102) },
  { id: '30', name: 'Mov Propiedades de Inversión | Edificios', codigo: '971103', valor: Number(co.value.efe_md_971103) },
  { id: '31', name: 'Mov Propiedades de Inversión | Otros Terrenos', codigo: '971104', valor: Number(co.value.efe_md_971104) },
  { id: '32', name: 'Propiedades de Inversión | Otros Edificios', codigo: '971105', valor: Number(co.value.efe_md_971105) },
  { id: '33', name: 'Activos Intangibles | Bajas incluida la depreciación', codigo: '971106', valor: Number(co.value.efe_md_971106) },
  { id: '34', name: 'Mov Activos Intangibles | Otros', codigo: '971107', valor: Number(co.value.efe_md_971107) },
  { id: '35', name: 'Mov Activos Biológicos | Bajas o Ventas', codigo: '971108', valor: Number(co.value.efe_md_971108) },
  { id: '36', name: 'Mov Activos Biológicos | Incremento o Disminución del Valor Razonable', codigo: '971109', valor: Number(co.value.efe_md_971109) },
  { id: '37', name: 'Mov Impuesto Diferido | Activos Generación Reversión', codigo: '971110', valor: Number(co.value.efe_md_971110) },
  { id: '38', name: 'Mov Impuesto Diferido | Activos Ajustes a Resultados', codigo: '971111', valor: Number(co.value.efe_md_971111) },
  { id: '39', name: 'Mov Impuesto Diferido | Pasivos Generación Reversión', codigo: '971112', valor: Number(co.value.efe_md_971112) },
  { id: '40', name: 'Mov Impuesto Diferido | Pasivo Ajuste a Resultados', codigo: '971113', valor: Number(co.value.efe_md_971113) },
  { id: '41', name: 'Mov Jubilación Patronal | Costo por servicios actuales', codigo: '971114', valor: Number(co.value.efe_md_971114) },
  { id: '42', name: 'Mov Jubilación Patronal | Costo Financiero', codigo: '971115', valor: Number(co.value.efe_md_971115) },
  { id: '43', name: 'Mov Jubilación Patronal | Otros', codigo: '971116', valor: Number(co.value.efe_md_971116) },
  { id: '44', name: 'Mov Jubilación Patronal | Efectos de liquidaciones anticipadas', codigo: '971117', valor: Number(co.value.efe_md_971117) },
  { id: '45', name: 'Mov Desahucio | Costo por servicios actuales', codigo: '971118', valor: Number(co.value.efe_md_971118) },
  { id: '46', name: 'Mov Desahucio | Costo Financiero', codigo: '971119', valor: Number(co.value.efe_md_971119) },
  { id: '47', name: 'Mov Desahucio | Otros', codigo: '971120', valor: Number(co.value.efe_md_971120) },
  { id: '48', name: 'Mov Desahucio | Efecto de liquidaciones anticipadas', codigo: '971121', valor: Number(co.value.efe_md_971121) },
  { id: '49', name: 'Mov Activos Financieros Largo Plazo | Intereses o actualización de antiguas inversiones', codigo: '971122', valor: Number(co.value.efe_md_971122) },
  { id: '50', name: 'Mov Activos Financieros Largo Plazo | Ajustes', codigo: '971123', valor: Number(co.value.efe_md_971123) },
  { id: '51', name: 'CAMBIOS EN ACTIVOS Y PASIVOS', codigo: '98', valor: Number(co.value.efe_md_98) },
  { id: '52', name: '(Incremento) disminución en cuentas por cobrar clientes', codigo: '9801', valor: Number(co.value.efe_md_9801) },
  { id: '53', name: 'ESF|ACTIVOS CORRIENTES|1010205 DEUDORES COMERCIALES Y OTRAS CUENTAS POR COBRAR NO RELACIONADOS', codigo: '980101', valor: Number(co.value.efe_md_980101) },
  { id: '54', name: 'ESF|ACTIVOS CORRIENTES|1010204 PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS', codigo: '980102', valor: Number(co.value.efe_md_980102) },
  { id: '55', name: 'ESF|ACTIVOS CORRIENTES|1010207 PROVISIÓN POR CUENTAS INCOBRABLES Y DETERIORO', codigo: '980103', valor: Number(co.value.efe_md_980103) },
  { id: '56', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '980104', valor: Number(co.value.efe_md_980104) },
  { id: '57', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '980105', valor: Number(co.value.efe_md_980105) },
  { id: '58', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '980106', valor: Number(co.value.efe_md_980106) },
  { id: '59', name: '(Incremento) disminución en otras cuentas por cobrar', codigo: '9802', valor: Number(co.value.efe_md_9802) },
  { id: '60', name: 'ESF|ACTIVOS CORRIENTES|1010206 DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS', codigo: '980201', valor: Number(co.value.efe_md_980201) },
  { id: '61', name: '(Incremento) disminución en anticipos de proveedores', codigo: '9803', valor: Number(co.value.efe_md_9803) },
  { id: '62', name: 'ESF|ACTIVOS CORRIENTES|10104 SERVICIOS Y OTROS PAGOS ANTICIPADOS', codigo: '980301', valor: Number(co.value.efe_md_980301) },
  { id: '63', name: '(Incremento) disminución en inventarios', codigo: '9804', valor: Number(co.value.efe_md_9804) },
  { id: '64', name: 'ESF|ACTIVOS CORRIENTES|1010301 INVENTARIOS', codigo: '980401', valor: Number(co.value.efe_md_980401) },
  { id: '65', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '980402', valor: Number(co.value.efe_md_980402) },
  { id: '66', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Bajas', codigo: '980403', valor: Number(co.value.efe_md_980403) },
  { id: '67', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Ajustes', codigo: '980404', valor: Number(co.value.efe_md_980404) },
  { id: '68', name: '(Incremento) disminución en otros activos', codigo: '9805', valor: Number(co.value.efe_md_9805) },
  { id: '69', name: 'ESF|ACTIVOS CORRIENTES|1010201 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS', codigo: '980501', valor: Number(co.value.efe_md_980501) },
  { id: '70', name: 'ESF|ACTIVOS CORRIENTES|1010202 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL', codigo: '980502', valor: Number(co.value.efe_md_980502) },
  { id: '71', name: 'ESF|ACTIVOS CORRIENTES|1010203 ACTIVOS FINANCIEROS AL COSTO AMORTIZADO', codigo: '980503', valor: Number(co.value.efe_md_980503) },
  { id: '72', name: 'ESF|ACTIVOS CORRIENTES|10105 ACTIVOS POR IMPUESTOS CORRIENTES', codigo: '980504', valor: Number(co.value.efe_md_980504) },
  { id: '73', name: 'ESF|ACTIVOS CORRIENTES|10106 ACTIVOS CORRIENTES MANTENIDOS PARA LA VENTA Y OPERACIONES DISCONTINUADAS', codigo: '980505', valor: Number(co.value.efe_md_980505) },
  { id: '74', name: 'ESF|ACTIVOS CORRIENTES|10107 CONSTRUCCIONES EN PROCESO (NIC 11 Y SECC.23 PYMES)', codigo: '980506', valor: Number(co.value.efe_md_980506) },
  { id: '75', name: 'ESF|ACTIVOS CORRIENTES|10108 OTROS ACTIVOS CORRIENTES', codigo: '980507', valor: Number(co.value.efe_md_980507) },
  { id: '76', name: 'Incremento (disminución) en cuentas por pagar comerciales', codigo: '9806', valor: Number(co.value.efe_md_9806) },
  { id: '77', name: 'ESF|PASIVOS CORRIENTES|20103 CUENTAS Y DOCUMENTOS POR PAGAR', codigo: '980601', valor: Number(co.value.efe_md_980601) },
  { id: '78', name: 'Incremento (disminución) en otras cuentas por pagar', codigo: '9807', valor: Number(co.value.efe_md_9807) },
  { id: '79', name: 'Incremento (disminución) en beneficios empleados', codigo: '9808', valor: Number(co.value.efe_md_9808) },
  { id: '80', name: 'ESF|PASIVOS CORRIENTES|20112 PORCION CORRIENTE DE PROVISIONES POR BENEFICIOS A EMPLEADOS', codigo: '980801', valor: Number(co.value.efe_md_980801) },
  { id: '81', name: 'Incremento (disminución) en anticipos de clientes', codigo: '9809', valor: Number(co.value.efe_md_9809) },
  { id: '82', name: 'Incremento (disminución) en otros pasivos', codigo: '9810', valor: Number(co.value.efe_md_9810) },
  { id: '83', name: 'ESF|PASIVOS CORRIENTES|20101 PASIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS', codigo: '981001', valor: Number(co.value.efe_md_981001) },
  { id: '84', name: 'ESF|PASIVOS CORRIENTES|20102 PASIVOS POR CONTRATOS DE ARRENDAMIENTO', codigo: '981002', valor: Number(co.value.efe_md_981002) },
  { id: '85', name: 'ESF|PASIVOS CORRIENTES|20104 OBLIGACIONES CON INSTITUCIONES FINANCIERAS', codigo: '981003', valor: Number(co.value.efe_md_981003) },
  { id: '86', name: 'ESF|PASIVOS CORRIENTES|20105 PROVISIONES', codigo: '981004', valor: Number(co.value.efe_md_981004) },
  { id: '87', name: 'ESF|PASIVOS CORRIENTES|20106 PORCIÓN CORRIENTE DE VALORES EMITIDOS', codigo: '981005', valor: Number(co.value.efe_md_981005) },
  { id: '88', name: 'ESF|PASIVOS CORRIENTES|20107 OTRAS OBLIGACIONES CORRIENTES', codigo: '981006', valor: Number(co.value.efe_md_981006) },
  { id: '89', name: 'ESF|PASIVOS CORRIENTES|20108 CUENTAS POR PAGAR A RELACIONADAS', codigo: '981007', valor: Number(co.value.efe_md_981007) },
  { id: '90', name: 'ESF|PASIVOS CORRIENTES|20109 OTROS PASIVOS FINANCIEROS', codigo: '981008', valor: Number(co.value.efe_md_981008) },
  { id: '91', name: 'ESF|PASIVOS CORRIENTES|20110 ANTICIPOS', codigo: '981009', valor: Number(co.value.efe_md_981009) },
  { id: '92', name: 'ESF|PASIVOS CORRIENTES|20111 PASIVOS DIRECTAMENTE ASOCIADOS CON LOS ACTIVOS NO CORRIENTES Y OPERACIONES DISCONTINUADAS', codigo: '981010', valor: Number(co.value.efe_md_981010) },
  { id: '93', name: 'ESF|PASIVOS CORRIENTES|20113 OTROS PASIVOS CORRIENTES', codigo: '981011', valor: Number(co.value.efe_md_981011) },
  { id: '94', name: 'ESF|PASIVOS CORRIENTES|20114 PASIVOS FINANCIEROS AL COSTO AMORTIZADO', codigo: '981012', valor: Number(co.value.efe_md_981012) },
  { id: '95', name: 'Flujos de efectivo netos procedentes de (utilizados en) actividades de operación', codigo: '9820', valor: Number(co.value.efe_md_9820) },
])

const total = ref(0)

const log = event => {
  console.log(event)

  let sum = 0
  actividadesdeoperacion_95010101_plus.value.forEach(row => {
    sum += parseFloat(row.valor)
  })
  total.value = sum.toFixed(2)

  let inver = 0
  actividadesdeoperacion_95010101_plus.value.forEach(row => {
    inver += parseFloat(row.valor)
  })
  total.value = inver.toFixed(2)
}

watch(actividadesdeoperacion_95010101_plus, () => {
  let sum = 0
  actividadesdeoperacion_95010101_plus.value.forEach(row => {
    sum += parseFloat(row.valor)
  })
  total.value = sum.toFixed(2)
})

watch(actividadesdeinversion, () => {
  let sum = 0
  actividadesdeinversion.value.forEach(row => {
    sum += parseFloat(row.valor)
  })
  total.value = sum.toFixed(2)
})

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
</script>
