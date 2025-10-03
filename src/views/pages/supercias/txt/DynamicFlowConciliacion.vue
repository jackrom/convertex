<template>
  <VForm>
    <VCardText class="add-products-form">
      <div class="mt-10" style="height: 30px !important;"></div>
      <!-- CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN -->
      <div class="ma-sm-4 mt-4">
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <VCol cols="12" md="12" style="font-size:14px;">
              <!-- Grupo A -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoA"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="A"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoA" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="B"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoB" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="C"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoC" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo D -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoD"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="D"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoD" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="E"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoE" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo F -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoF"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="F"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoF" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="G"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoG" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo H -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoH"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="H"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoH" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo I -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoI"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="I"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoI" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo J -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoJ"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="J"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoJ" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo K -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoK"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="K"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoK" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo L -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoL"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="L"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoL" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo M -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoM"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="M"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoM" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="N"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoN" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo O -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoO"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="O"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoO" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="P"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoP" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo Q -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoQ"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="Q"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoQ" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="R"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoR" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo S -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoS"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="S"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoS" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="T"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoT" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="V"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoV" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo W -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoW"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="W"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoW" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="X"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoX" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo Y -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoY"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="Y"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoY" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
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
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="Z"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoZ" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AA -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAA"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AA"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAA" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AB -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAB"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AB"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAB" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AC -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAC"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AC"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAC" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AD -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAD"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AD"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAD" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AE -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAE"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AE"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAE" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AF -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AF"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AG -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAG"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AG"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAG" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AH -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAH"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AH"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAH" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AI -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AI"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AJ -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAJ"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AJ"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAJ" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AK -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAK"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AK"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAK" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AL -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAL"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AL"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAL" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AM -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAM"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AM"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAM" :key="cuenta.id" class="cursor-pointer">
                  <VCol cols="12" md="2">
                    <span class="text-uppercase">{{ cuenta.codigo }}</span>
                  </VCol>
                  <VCol cols="12" md="9">
                    <span class="text-uppercase">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cuenta.name }}</span>
                  </VCol>
                  <VCol cols="12" md="1">
                    <span>{{ cuenta.valor }}</span>
                  </VCol>
                </VRow>
              </VueDraggableNext>

              <!-- Grupo AN -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAN"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AN"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAN" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AO -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAO"
                :group="{ name: 'cuentasconciliacion' }"
                :move="checkMove"
                data-grupo="AN"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAO" :key="cuenta.id" class="cursor-pointer">
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

let conciliacion
let reporteId = JSON.parse(localStorage.getItem('reporteId'))

superciasListStore.getReporteDynamicFlowConciliacion(reporteId)
  .then( response => {
    console.log(response)
    conciliacion = response.data
  })

const reportStore = useReportStore()
let co = ref((!conciliacion) ? reportStore.getReportData('conciliacionganancianetaifluc') : conciliacion)

const cuentasGrupoA = ref([
  { id: '1', grupo: 'A', name: 'GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA', codigo: '96', valor: Number(co.value.efe_md_96) },
])

const cuentasGrupoB = ref([
  { id: '2', grupo: 'B', name: 'AJUSTE POR PARTIDAS DISTINTAS AL EFECTIVO:', codigo: '97', valor: Number(co.value.efe_md_97) },
])

const cuentasGrupoC = ref([
  { id: '3', grupo: 'C', name: 'Ajustes por gasto de depreciación y amortización', codigo: '9701', valor: Number(co.value.efe_md_9701) },
])

const cuentasGrupoD = ref([
  { id: '4', grupo: 'D', name: 'Mov Propiedades, Planta y Equipo | Depreciación', codigo: '970101', valor: Number(co.value.efe_md_970101) },
  { id: '5', grupo: 'D', name: 'Mov Propiedades de Inversión | Depreciación', codigo: '970102', valor: Number(co.value.efe_md_970102) },
  { id: '6', grupo: 'D', name: 'Mov Activos Intangibles | Depreciación', codigo: '970103', valor: Number(co.value.efe_md_970103) },
])

const cuentasGrupoE = ref([
  { id: '7', grupo: 'E', name: 'Ajustes por gastos por deterioro (reversiones por deterioro) reconocidas en los resultados del periodo', codigo: '9702', valor: Number(co.value.efe_md_9702) },
])

const cuentasGrupoF = ref([
  { id: '8', grupo: 'F', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '970201', valor: Number(co.value.efe_md_970201) },
  { id: '9', grupo: 'F', name: 'Mov Pérdidas Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '970202', valor: Number(co.value.efe_md_970202) },
  { id: '10', grupo: 'F', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '970203', valor: Number(co.value.efe_md_970203) },
  { id: '11', grupo: 'F', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '970204', valor: Number(co.value.efe_md_970204) },
  { id: '12', grupo: 'F', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Bajas', codigo: '970205', valor: Number(co.value.efe_md_970205) },
  { id: '13', grupo: 'F', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Ajustes', codigo: '970206', valor: Number(co.value.efe_md_970206) },
  { id: '14', grupo: 'F', name: 'Mov Activos Financieros Largo Plazo | Provision por deterioro', codigo: '970207', valor: Number(co.value.efe_md_970207) },
])

const cuentasGrupoG = ref([
  { id: '15', grupo: 'G', name: 'Pérdida (ganancia) de moneda extranjera no realizada', codigo: '9703', valor: Number(co.value.efe_md_9703) },
])

const cuentasGrupoH = ref([
  { id: '16', grupo: 'H', name: 'Pérdidas en cambio de moneda extranjera', codigo: '9704', valor: Number(co.value.efe_md_9704) },
])

const cuentasGrupoI = ref([
  { id: '17', grupo: 'I', name: 'Ajustes por gastos en provisiones', codigo: '9705', valor: Number(co.value.efe_md_9705) },
])

const cuentasGrupoJ = ref([
  { id: '18', grupo: 'J', name: 'Ajuste por participaciones no controladoras', codigo: '9706', valor: Number(co.value.efe_md_9706) },
])

const cuentasGrupoK = ref([
  { id: '19', grupo: 'K', name: 'Ajuste por pagos basados en acciones', codigo: '9707', valor: Number(co.value.efe_md_9707) },
])

const cuentasGrupoL = ref([
  { id: '20', grupo: 'L', name: 'Ajustes por ganancias (pérdidas) en valor razonable', codigo: '9708', valor: Number(co.value.efe_md_9708) },
])

const cuentasGrupoM = ref([
  { id: '21', grupo: 'M', name: 'Mov Propiedades de Inversión | Terrenos Valor razonable', codigo: '970801', valor: Number(co.value.efe_md_970801) },
  { id: '22', grupo: 'M', name: 'Mov Propiedades de Inversión | Edificios Valor razonable', codigo: '970802', valor: Number(co.value.efe_md_970802) },
])

const cuentasGrupoN = ref([
  { id: '23', grupo: 'N', name: 'Ajustes por gasto por impuesto a la renta', codigo: '9709', valor: Number(co.value.efe_md_9709) },
])

const cuentasGrupoO = ref([
  { id: '24', grupo: 'O', name: 'Mov Otros | Impuesto a la renta', codigo: '970901', valor: Number(co.value.efe_md_970901) },
])

const cuentasGrupoP = ref([
  { id: '25', grupo: 'P', name: 'Ajustes por gasto por participación trabajadores', codigo: '9710', valor: Number(co.value.efe_md_9710) },
])

const cuentasGrupoQ = ref([
  { id: '26', grupo: 'Q', name: 'Mov Otros | Participación a trabajadores', codigo: '971001', valor: Number(co.value.efe_md_971001) },
])

const cuentasGrupoR = ref([
  { id: '27', grupo: 'R', name: 'Otros ajustes por partidas distintas al efectivo', codigo: '9711', valor: Number(co.value.efe_md_9711) },
])

const cuentasGrupoS = ref([
  { id: '28', grupo: 'S', name: 'Mov Propiedades, Planta y Equipo | Bajas', codigo: '971101', valor: Number(co.value.efe_md_971101) },
  { id: '280', grupo: 'S', name: 'Mov Propiedades, Planta y Equipo | Ajustes a PYG', codigo: '971102', valor: Number(co.value.efe_md_971102) },
  { id: '29', grupo: 'S', name: 'Mov Propiedades de Inversión | Terrenos', codigo: '971103', valor: Number(co.value.efe_md_971103) },
  { id: '30', grupo: 'S', name: 'Mov Propiedades de Inversión | Edificios', codigo: '971104', valor: Number(co.value.efe_md_971104) },
  { id: '31', grupo: 'S', name: 'Mov Propiedades de Inversión | Otros Terrenos', codigo: '971105', valor: Number(co.value.efe_md_971105) },
  { id: '32', grupo: 'S', name: 'Propiedades de Inversión | Otros Edificios', codigo: '971106', valor: Number(co.value.efe_md_971106) },
  { id: '33', grupo: 'S', name: 'Activos Intangibles | Bajas incluida la depreciación', codigo: '971107', valor: Number(co.value.efe_md_971107) },
  { id: '34', grupo: 'S', name: 'Mov Activos Intangibles | Otros', codigo: '971108', valor: Number(co.value.efe_md_971108) },
  { id: '35', grupo: 'S', name: 'Mov Activos Biológicos | Bajas o Ventas', codigo: '971109', valor: Number(co.value.efe_md_971109) },
  { id: '36', grupo: 'S', name: 'Mov Activos Biológicos | Incremento o Disminución del Valor Razonable', codigo: '971110', valor: Number(co.value.efe_md_971110) },
  { id: '37', grupo: 'S', name: 'Mov Impuesto Diferido | Activos Generación Reversión', codigo: '971111', valor: Number(co.value.efe_md_971111) },
  { id: '38', grupo: 'S', name: 'Mov Impuesto Diferido | Activos Ajustes a Resultados', codigo: '971112', valor: Number(co.value.efe_md_971112) },
  { id: '39', grupo: 'S', name: 'Mov Impuesto Diferido | Pasivos Generación Reversión', codigo: '971113', valor: Number(co.value.efe_md_971113) },
  { id: '40', grupo: 'S', name: 'Mov Impuesto Diferido | Pasivo Ajuste a Resultados', codigo: '971114', valor: Number(co.value.efe_md_971114) },
  { id: '41', grupo: 'S', name: 'Mov Jubilación Patronal | Costo por servicios actuales', codigo: '971115', valor: Number(co.value.efe_md_971115) },
  { id: '42', grupo: 'S', name: 'Mov Jubilación Patronal | Costo Financiero', codigo: '971116', valor: Number(co.value.efe_md_971116) },
  { id: '43', grupo: 'S', name: 'Mov Jubilación Patronal | Otros', codigo: '971117', valor: Number(co.value.efe_md_971117) },
  { id: '44', grupo: 'S', name: 'Mov Jubilación Patronal | Efectos de liquidaciones anticipadas', codigo: '971118', valor: Number(co.value.efe_md_971118) },
  { id: '45', grupo: 'S', name: 'Mov Desahucio | Costo por servicios actuales', codigo: '971119', valor: Number(co.value.efe_md_971119) },
  { id: '46', grupo: 'S', name: 'Mov Desahucio | Costo Financiero', codigo: '971120', valor: Number(co.value.efe_md_971120) },
  { id: '47', grupo: 'S', name: 'Mov Desahucio | Otros', codigo: '971121', valor: Number(co.value.efe_md_971121) },
  { id: '48', grupo: 'S', name: 'Mov Desahucio | Efecto de liquidaciones anticipadas', codigo: '971122', valor: Number(co.value.efe_md_971122) },
  { id: '49', grupo: 'S', name: 'Mov Activos Financieros Largo Plazo | Intereses o actualización de antiguas inversiones', codigo: '971123', valor: Number(co.value.efe_md_971123) },
  { id: '50', grupo: 'S', name: 'Mov Activos Financieros Largo Plazo | Ajustes', codigo: '971124', valor: Number(co.value.efe_md_971124) },
])

const cuentasGrupoT = ref([
  { id: '51', grupo: 'T', name: 'CAMBIOS EN ACTIVOS Y PASIVOS', codigo: '98', valor: Number(co.value.efe_md_98) },
])

const cuentasGrupoV = ref([
  { id: '52', grupo: 'V', name: '(Incremento) disminución en cuentas por cobrar clientes', codigo: '9801', valor: Number(co.value.efe_md_9801) },
])

const cuentasGrupoW = ref([
  { id: '53', grupo: 'W', name: 'ESF|ACTIVOS CORRIENTES|1010205 DEUDORES COMERCIALES Y OTRAS CUENTAS POR COBRAR NO RELACIONADOS', codigo: '980101', valor: Number(co.value.efe_md_980101) },
  { id: '54', grupo: 'W', name: 'ESF|ACTIVOS CORRIENTES|1010204 PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS', codigo: '980102', valor: Number(co.value.efe_md_980102) },
  { id: '55', grupo: 'W', name: 'ESF|ACTIVOS CORRIENTES|1010207 PROVISIÓN POR CUENTAS INCOBRABLES Y DETERIORO', codigo: '980103', valor: Number(co.value.efe_md_980103) },
  { id: '56', grupo: 'W', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Provisión del año', codigo: '980104', valor: Number(co.value.efe_md_980104) },
  { id: '57', grupo: 'W', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Bajas o reversiones', codigo: '980105', valor: Number(co.value.efe_md_980105) },
  { id: '58', grupo: 'W', name: 'Mov Pérdida Acum Cuentas Incobrables y Deterioro | Ajustes', codigo: '980106', valor: Number(co.value.efe_md_980106) },
])

const cuentasGrupoX = ref([
  { id: '59', grupo: 'X', name: '(Incremento) disminución en otras cuentas por cobrar', codigo: '9802', valor: Number(co.value.efe_md_9802) },
])

const cuentasGrupoY = ref([
  { id: '60', grupo: 'Y', name: 'ESF|ACTIVOS CORRIENTES|1010206 DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS', codigo: '980201', valor: Number(co.value.efe_md_980201) },
])

const cuentasGrupoZ = ref([
  { id: '61', grupo: 'Z', name: '(Incremento) disminución en anticipos de proveedores', codigo: '9803', valor: Number(co.value.efe_md_9803) },
])

const cuentasGrupoAA = ref([
  { id: '62', grupo: 'AA', name: 'ESF|ACTIVOS CORRIENTES|10104 SERVICIOS Y OTROS PAGOS ANTICIPADOS', codigo: '980301', valor: Number(co.value.efe_md_980301) },
])

const cuentasGrupoAB = ref([
  { id: '63', grupo: 'AB', name: '(Incremento) disminución en inventarios', codigo: '9804', valor: Number(co.value.efe_md_9804) },
])

const cuentasGrupoAC = ref([
  { id: '64', grupo: 'AC', name: 'ESF|ACTIVOS CORRIENTES|1010301 INVENTARIOS', codigo: '980401', valor: Number(co.value.efe_md_980401) },
  { id: '65', grupo: 'AC', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario | Provisión del año', codigo: '980402', valor: Number(co.value.efe_md_980402) },
  { id: '66', grupo: 'AC', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Bajas', codigo: '980403', valor: Number(co.value.efe_md_980403) },
  { id: '67', grupo: 'AC', name: 'Mov Pérdida Acum. Valor Neto de Realización y Otras Pérdidas de Inventario| Ajustes', codigo: '980404', valor: Number(co.value.efe_md_980404) },
])

const cuentasGrupoAD = ref([
  { id: '68', grupo: 'AD', name: '(Incremento) disminución en otros activos', codigo: '9805', valor: Number(co.value.efe_md_9805) },
])

const cuentasGrupoAE = ref([
  { id: '69', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|1010201 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS', codigo: '980501', valor: Number(co.value.efe_md_980501) },
  { id: '70', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|1010202 ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL', codigo: '980502', valor: Number(co.value.efe_md_980502) },
  { id: '71', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|1010203 ACTIVOS FINANCIEROS AL COSTO AMORTIZADO', codigo: '980503', valor: Number(co.value.efe_md_980503) },
  { id: '72', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|10105 ACTIVOS POR IMPUESTOS CORRIENTES', codigo: '980504', valor: Number(co.value.efe_md_980504) },
  { id: '73', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|10106 ACTIVOS CORRIENTES MANTENIDOS PARA LA VENTA Y OPERACIONES DISCONTINUADAS', codigo: '980505', valor: Number(co.value.efe_md_980505) },
  { id: '74', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|10107 CONSTRUCCIONES EN PROCESO (NIC 11 Y SECC.23 PYMES)', codigo: '980506', valor: Number(co.value.efe_md_980506) },
  { id: '75', grupo: 'AE', name: 'ESF|ACTIVOS CORRIENTES|10108 OTROS ACTIVOS CORRIENTES', codigo: '980507', valor: Number(co.value.efe_md_980507) },
])

const cuentasGrupoAF = ref([
  { id: '76', grupo: 'AF', name: 'Incremento (disminución) en cuentas por pagar comerciales', codigo: '9806', valor: Number(co.value.efe_md_9806) },
])

const cuentasGrupoAG = ref([
  { id: '77', grupo: 'AG', name: 'ESF|PASIVOS CORRIENTES|20103 CUENTAS Y DOCUMENTOS POR PAGAR', codigo: '980601', valor: Number(co.value.efe_md_980601) },
])

const cuentasGrupoAH = ref([
  { id: '78', grupo: 'AH', name: 'Incremento (disminución) en otras cuentas por pagar', codigo: '9807', valor: Number(co.value.efe_md_9807) },
])

const cuentasGrupoAI = ref([
  { id: '79', grupo: 'AI', name: 'Incremento (disminución) en beneficios empleados', codigo: '9808', valor: Number(co.value.efe_md_9808) },
])

const cuentasGrupoAJ = ref([
  { id: '80', grupo: 'AJ', name: 'ESF|PASIVOS CORRIENTES|20112 PORCION CORRIENTE DE PROVISIONES POR BENEFICIOS A EMPLEADOS', codigo: '980801', valor: Number(co.value.efe_md_980801) },
])

const cuentasGrupoAK = ref([
  { id: '81', grupo: 'AK', name: 'Incremento (disminución) en anticipos de clientes', codigo: '9809', valor: Number(co.value.efe_md_9809) },
])

const cuentasGrupoAL = ref([
  { id: '82', grupo: 'AL', name: 'Incremento (disminución) en otros pasivos', codigo: '9810', valor: Number(co.value.efe_md_9810) },
])

const cuentasGrupoAM = ref([
  { id: '83', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20101 PASIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS', codigo: '981001', valor: Number(co.value.efe_md_981001) },
  { id: '84', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20102 PASIVOS POR CONTRATOS DE ARRENDAMIENTO', codigo: '981002', valor: Number(co.value.efe_md_981002) },
  { id: '85', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20104 OBLIGACIONES CON INSTITUCIONES FINANCIERAS', codigo: '981003', valor: Number(co.value.efe_md_981003) },
  { id: '86', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20105 PROVISIONES', codigo: '981004', valor: Number(co.value.efe_md_981004) },
  { id: '87', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20106 PORCIÓN CORRIENTE DE VALORES EMITIDOS', codigo: '981005', valor: Number(co.value.efe_md_981005) },
  { id: '88', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20107 OTRAS OBLIGACIONES CORRIENTES', codigo: '981006', valor: Number(co.value.efe_md_981006) },
  { id: '881', grupo: 'AM', name: 'Mov Otros|Participación a trabajadores | Provisión del año', codigo: '981007', valor: Number(co.value.efe_md_981007) },
  { id: '882', grupo: 'AM', name: 'Mov Otros|Impuesto a la Renta|Provisión del año', codigo: '981008', valor: Number(co.value.efe_md_981008) },
  { id: '89', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20108 CUENTAS POR PAGAR A RELACIONADAS', codigo: '981009', valor: Number(co.value.efe_md_981009) },
  { id: '90', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20109 OTROS PASIVOS FINANCIEROS', codigo: '981010', valor: Number(co.value.efe_md_981010) },
  { id: '91', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20110 ANTICIPOS', codigo: '981011', valor: Number(co.value.efe_md_981011) },
  { id: '92', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20111 PASIVOS DIRECTAMENTE ASOCIADOS CON LOS ACTIVOS NO CORRIENTES Y OPERACIONES DISCONTINUADAS', codigo: '981012', valor: Number(co.value.efe_md_981012) },
  { id: '93', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20113 OTROS PASIVOS CORRIENTES', codigo: '981013', valor: Number(co.value.efe_md_981013) },
  { id: '94', grupo: 'AM', name: 'ESF|PASIVOS CORRIENTES|20114 PASIVOS FINANCIEROS AL COSTO AMORTIZADO', codigo: '981014', valor: Number(co.value.efe_md_981014) },
])

const cuentasGrupoAN = ref([
  { id: '95', grupo: 'AN', name: 'Flujos de efectivo netos procedentes de (utilizados en) actividades de operación', codigo: '9820', valor: Number(co.value.efe_md_9820) },
])

const cuentasGrupoAO = ref([
  { id: '96', grupo: 'A0', name: 'DIFERENCIA POR CUADRAR', codigo: '', valor: 0.00 },
])


// Mapeo de movimientos permitidos entre grupos
const allowedMapping = {
  D: ['D', 'F', 'M', 'O', 'Q', 'S'],
  F: ['D', 'F', 'M', 'O', 'Q', 'S'],
  M: ['D', 'F', 'M', 'O', 'Q', 'S'],
  O: ['D', 'F', 'M', 'O', 'Q', 'S'],
  Q: ['D', 'F', 'M', 'O', 'Q', 'S'],
  S: ['D', 'F', 'M', 'O', 'Q', 'S'],
  W: ['W', 'AC', 'AE', 'AM'],
  AC: ['W', 'AC', 'AE', 'AM'],
  AE: ['W', 'AC', 'AE', 'AM'],
  AM: ['W', 'AC', 'AE', 'AM'],
}

// Función que valida si la cuenta puede moverse
const checkMove = evt => {
  if (!evt.to) return false // Evitar errores si `evt.to` no existe

  const dragged = evt.draggedContext.element
  const sourceGroup = dragged.grupo
  const destinationGroup = evt.to.getAttribute('data-grupo')

  if (!destinationGroup) return false // Evitar errores

  if (sourceGroup === 'D' || sourceGroup === 'F' || sourceGroup === 'M' || sourceGroup === 'O' || sourceGroup === 'Q' || sourceGroup === 'S' || sourceGroup === 'W' || sourceGroup === 'AC' || sourceGroup === 'AE' || sourceGroup === 'AM') {
    return allowedMapping[sourceGroup].includes(destinationGroup)
  } else {
    return sourceGroup === destinationGroup
  }
}

// Función para actualizar el grupo de la cuenta después del movimiento
const onEnd = evt => {
  if (!evt.to) return // Evitar errores si `evt.to` no existe

  const destinationGroup = evt.to.getAttribute('data-grupo')
  if (!destinationGroup) return // Evitar errores

  const movedItem = evt.item.__vue__

  if (movedItem) {
    movedItem.grupo = destinationGroup
  }
  recalcularTotales()
}

const recalcularTotales = () => {
  cuentasGrupoC.value.find(c => c.codigo === '9701').valor =
    cuentasGrupoD.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoR.value.find(c => c.codigo === '9711').valor =
    cuentasGrupoS.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAL.value.find(c => c.codigo === '9810').valor =
    cuentasGrupoAM.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoE.value.find(c => c.codigo === '9702').valor =
    cuentasGrupoF.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoL.value.find(c => c.codigo === '9708').valor =
    cuentasGrupoM.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoV.value.find(c => c.codigo === '9801').valor =
    cuentasGrupoW.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAB.value.find(c => c.codigo === '9804').valor =
    cuentasGrupoAC.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAD.value.find(c => c.codigo === '9805').valor =
    cuentasGrupoAE.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAF.value.find(c => c.codigo === '9806').valor =
    cuentasGrupoAG.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAI.value.find(c => c.codigo === '9808').valor =
    cuentasGrupoAJ.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoB.value.find(c => c.codigo === '97').valor =
    cuentasGrupoC.value.find(c => c.codigo === '9701').valor +
    cuentasGrupoE.value.find(c => c.codigo === '9702').valor +
    cuentasGrupoG.value.find(c => c.codigo === '9703').valor +
    cuentasGrupoH.value.find(c => c.codigo === '9704').valor +
    cuentasGrupoI.value.find(c => c.codigo === '9705').valor +
    cuentasGrupoJ.value.find(c => c.codigo === '9706').valor +
    cuentasGrupoK.value.find(c => c.codigo === '9707').valor +
    cuentasGrupoL.value.find(c => c.codigo === '9708').valor +
    cuentasGrupoN.value.find(c => c.codigo === '9709').valor +
    cuentasGrupoP.value.find(c => c.codigo === '9710').valor +
    cuentasGrupoR.value.find(c => c.codigo === '9711').valor

  cuentasGrupoT.value.find(c => c.codigo === '98').valor =
    cuentasGrupoV.value.find(c => c.codigo === '9801').valor +
    cuentasGrupoX.value.find(c => c.codigo === '9802').valor +
    cuentasGrupoZ.value.find(c => c.codigo === '9803').valor +
    cuentasGrupoAB.value.find(c => c.codigo === '9804').valor +
    cuentasGrupoAD.value.find(c => c.codigo === '9805').valor +
    cuentasGrupoAF.value.find(c => c.codigo === '9806').valor +
    cuentasGrupoAH.value.find(c => c.codigo === '9807').valor +
    cuentasGrupoAI.value.find(c => c.codigo === '9808').valor +
    cuentasGrupoAK.value.find(c => c.codigo === '9809').valor +
    cuentasGrupoAL.value.find(c => c.codigo === '9810').valor +
    cuentasGrupoAN.value.find(c => c.codigo === '9820').valor

  reportStore.setReportData({
    ...reportStore.reportData,
    conciliacion_df_ifluc: co.value,
  })
}
</script>
