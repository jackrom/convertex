<template>
  <VForm>
    <VCardText class="add-products-form">
      <div class="mt-10" style="height: 30px !important;"></div>
      <!-- CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN -->
      <div class="ma-sm-4 mt-4">
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <h4 class="ml-2">ACTIVIDADES DE INVERSIÓN</h4>
            <VCol cols="12" md="12" style="font-size:14px;">
              <!-- Grupo A -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_A "
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="A"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_A " :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo B -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_B"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="B"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_B" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo C -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_C"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="C"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_C" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo D -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_D"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="D"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_D" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_E"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="E"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_E" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo F -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_F"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="F"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_F" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo G -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_G"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="G"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_G" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo H -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_H"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="H"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_H" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo I -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_I"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="I"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_I" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo J -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_J"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="J"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_J" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo K -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_K"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="K"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_K" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo L -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_B"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="L"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_L" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo M -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_M"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="M"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_M" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_N"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="N"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_N" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo O -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_O"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="O"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_B" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_P"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="P"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_P" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo Q -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_Q"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="Q"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_Q" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_R"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="R"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_R" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo S -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_S"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="S"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_S" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_T"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="T"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_T" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo V -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_V"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="V"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_V" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo W -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_W"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="W"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_W" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_X"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="X"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_X" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo Y -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_Y"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="Y"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_Y" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAI_Z"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="Z"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_Z" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AA -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_AA"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="AA"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_AA" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AB -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_AB"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="AB"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_AB" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo AB
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAI_AC"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="AB"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAI_AC" :key="cuenta.id" class="cursor-pointer">
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
               -->

            </VCol>

            <h4 class="ml-2 mt-16 mb-5">ACTIVIDADES DE FINANCIAMIENTO</h4>


            <VCol  cols="12" md="12" style="font-size:14px;">
              <!-- Grupo A -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_A1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="A1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_A1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo B -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_B1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="B1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_B1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo C -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_C1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="C1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_C1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo D -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_D1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="D1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_D1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_E1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="E1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_E1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo F -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_F1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="F1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_F1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_G1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="G1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_G1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo H -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_H1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="H1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_H1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo I -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_I1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="I1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_I1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo J -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_J1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="J1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_J1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo K -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_K1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="K1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_K1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo L -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_L1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="L1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_L1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo M -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_M1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="M1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_M1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo N -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_N1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="N1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_N1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_O1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="O1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_O1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_P1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="P1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_P1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_Q1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="Q1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_Q1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo R -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_R1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="R1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_R1" :key="cuenta.id" class="cursor-pointer">
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
                :list="cuentasGrupoAF_S1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="S1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_S1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo T -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_T1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="T1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_T1" :key="cuenta.id" class="cursor-pointer">
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

              <!-- Grupo V -->
              <VueDraggableNext
                class="dragArea"
                :list="cuentasGrupoAF_V1"
                :group="{ name: 'cuentasinversionfinanciamiento' }"
                :move="checkMove"
                data-grupo="T1"
                @end="onEnd"
                @change="recalcularTotales"
              >
                <VRow v-for="(cuenta, index) in cuentasGrupoAF_V1" :key="cuenta.id" class="cursor-pointer">
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

let financiamiento, inversion
let reporteId = JSON.parse(localStorage.getItem('reporteId'))

superciasListStore.getReporteDynamicFlowActividadesDeFinanciamiento(reporteId)
  .then( response => {
    console.log(response)
    financiamiento = response.data
  })

superciasListStore.getReporteDynamicFlowActividadesDeInversion(reporteId)
  .then( response => {
    console.log(response)
    inversion = response.data
  })

let nv = ref((!inversion) ? reportStore.getReportData('actividadesdeinversionifluc') : inversion)
let fi = ref((!financiamiento) ? reportStore.getReportData('actividadesdefinanciamientoifluc') : financiamiento)


// ACTIVIDADES DE INVERSION
const cuentasGrupoAI_A = ref([
  { id: '1', grupo: 'A', name: 'Efectivo procedentes de la venta de acciones en subsidiarias u otros negocios', codigo: '950201', valor: Number(nv.value['efe_md_950201']) },
])

const cuentasGrupoAI_B = ref([
  { id: '2', grupo: 'B', name: 'Efectivo utilizado para adquirir acciones en subsidiarias u otros negocios para tener el control', codigo: '950202', valor: Number(nv.value['efe_md_950202']) },
])

const cuentasGrupoAI_C = ref([
  { id: '3', grupo: 'C', name: 'Efectivo utilizado en la compra de participaciones no controladoras', codigo: '950203', valor: Number(nv.value['efe_md_950203']) },
])

const cuentasGrupoAI_D = ref([
  { id: '4', grupo: 'D', name: 'Otros cobros por la venta de acciones o instrumentos de deuda de otras entidades', codigo: '950204', valor: Number(nv.value['efe_md_950204']) },
])

const cuentasGrupoAI_E = ref([
  { id: '5', grupo: 'E', name: 'Otros pagos para adquirir acciones o instrumentos de deuda de otras entidades', codigo: '950205', valor: Number(nv.value['efe_md_950205']) },
])

const cuentasGrupoAI_F = ref([
  { id: '6', grupo: 'F', name: 'Mov Activos Financieros Largo Plazo | Nuevas Inversiones', codigo: '95020501', valor: Number(nv.value['efe_md_95020501']) },
])

const cuentasGrupoAI_G = ref([
  { id: '7', grupo: 'G', name: 'Otros cobros por la venta de participaciones en negocios conjuntos', codigo: '950206', valor: Number(nv.value['efe_md_950206']) },
])

const cuentasGrupoAI_H = ref([
  { id: '8', grupo: 'H', name: 'Otros pagos para adquirir participaciones en negocios conjuntos', codigo: '950207', valor: Number(nv.value['efe_md_950207']) },
])

const cuentasGrupoAI_I = ref([
  { id: '9', grupo: 'I', name: 'Importes procedentes por la venta de propiedades, planta y equipo', codigo: '950208', valor: Number(nv.value['efe_md_950208']) },
])

const cuentasGrupoAI_J = ref([
  { id: '10', grupo: 'J', name: 'Adquisiciones de propiedades, planta y equipo', codigo: '950209', valor: Number(nv.value['efe_md_950209']) },
])

const cuentasGrupoAI_K = ref([
  { id: '11', grupo: 'K', name: 'Mov Propiedades,Planta y Equipo | Compras', codigo: '95020901', valor: Number(nv.value['efe_md_95020901']) },
])

const cuentasGrupoAI_L = ref([
  { id: '12', grupo: 'L', name: 'Importes procedentes de ventas de activos intangibles', codigo: '950210', valor: Number(nv.value['efe_md_950210']) },
])

const cuentasGrupoAI_M = ref([
  { id: '13', grupo: 'M', name: 'Compras de activos intangibles', codigo: '950211', valor: Number(nv.value['efe_md_950211']) },
])

const cuentasGrupoAI_N = ref([
  { id: '14', grupo: 'N', name: 'Mov Activos Intangibles | Compras', codigo: '95021101', valor: Number(nv.value['efe_md_95021101']) },
])

const cuentasGrupoAI_O = ref([
  { id: '15', grupo: 'O', name: 'Importes procedentes de otros activos a largo plazo', codigo: '950212', valor: Number(nv.value['efe_md_950212']) },
])

const cuentasGrupoAI_P = ref([
  { id: '16', grupo: 'P', name: 'Compras de otros activos a largo plazo', codigo: '950213', valor: Number(nv.value['efe_md_950213']) },
])

const cuentasGrupoAI_Q = ref([
  { id: '17', grupo: 'Q', name: 'Mov Propiedades de Inversión | Terrenos | Compras', codigo: '95021301', valor: Number(nv.value['efe_md_95021301']) },
  { id: '18', grupo: 'Q', name: 'Mov Propiedades de Inversión | Edificios | Compras', codigo: '95021302', valor: Number(nv.value['efe_md_95021302']) },
  { id: '19', grupo: 'Q', name: 'Mov Activos Biológicos | Compras', codigo: '95021303', valor: Number(nv.value['efe_md_95021303']) },
])

const cuentasGrupoAI_R = ref([
  { id: '20', grupo: 'R', name: 'Importes procedentes de subvenciones del gobierno', codigo: '950214', valor: Number(nv.value['efe_md_950214']) },
])

const cuentasGrupoAI_S = ref([
  { id: '21', grupo: 'S', name: 'Anticipos de efectivo efectuados a terceros', codigo: '950215', valor: Number(nv.value['efe_md_950215']) },
])

const cuentasGrupoAI_T = ref([
  { id: '22', grupo: 'T', name: 'Cobros procedentes del reembolso de anticipos y préstamos concedidos a terceros', codigo: '950216', valor: Number(nv.value['efe_md_950216']) },
])

const cuentasGrupoAI_V = ref([
  { id: '23', grupo: 'V', name: 'Pagos derivados de contratos de futuro, a término, de opciones y de permuta financiera', codigo: '950217', valor: Number(nv.value['efe_md_950217']) },
])

const cuentasGrupoAI_W = ref([
  { id: '24', grupo: 'W', name: 'Cobros procedentes de contratos de futuro, a término, de opciones y de permuta financiera', codigo: '950218', valor: Number(nv.value['efe_md_950218']) },
])

const cuentasGrupoAI_X = ref([
  { id: '25', grupo: 'X', name: 'Dividendos recibidos', codigo: '950219', valor: Number(nv.value['efe_md_950219']) },
])

const cuentasGrupoAI_Y = ref([
  { id: '26', grupo: 'Y', name: 'Intereses recibidos', codigo: '950220', valor: Number(nv.value['efe_md_950220']) },
])

const cuentasGrupoAI_Z = ref([
  { id: '27', grupo: 'Z', name: 'Otras entradas (salidas) de efectivo', codigo: '950221', valor: Number(nv.value['efe_md_950221']) },
])

const cuentasGrupoAI_AA = ref([
  { id: '28', grupo: 'AA', name: 'Derecho de Uso por Activos Arrendados', codigo: '95022101', valor: Number(nv.value['efe_md_95022101']) },
  { id: '29', grupo: 'AA', name: 'Otros Activos no Corrientes', codigo: '95022102', valor: Number(nv.value['efe_md_95022102']) },
  { id: '30', grupo: 'AA', name: 'Documentos y Cuentas por Cobrar No Relacionados', codigo: '95022103', valor: Number(nv.value['efe_md_95022103']) },
  { id: '31', grupo: 'AA', name: 'Documentos y Cuentas por Cobrar Relacionados', codigo: '95022104', valor: Number(nv.value['efe_md_95022104']) },
  { id: '32', grupo: 'AA', name: 'Cuentas y Documentos por Pagar', codigo: '95022105', valor: Number(nv.value['efe_md_95022105']) },
  { id: '33', grupo: 'AA', name: 'Cuentas por Pagar Relacionadas', codigo: '95022106', valor: Number(nv.value['efe_md_95022106']) },
  { id: '34', grupo: 'AA', name: 'Anticipos', codigo: '95022107', valor: Number(nv.value['efe_md_95022107']) },
  { id: '35', grupo: 'AA', name: 'Otras Provisiones', codigo: '95022108', valor: Number(nv.value['efe_md_95022108']) },
  { id: '36', grupo: 'AA', name: 'Pasivo Diferido', codigo: '95022109', valor: Number(nv.value['efe_md_95022109']) },
  { id: '37', grupo: 'AA', name: 'Otros Pasivos No Corrientes', codigo: '95022110', valor: Number(nv.value['efe_md_95022110']) },
])

const cuentasGrupoAI_AB = ref([
  { id: '38', grupo: 'AB', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE INVERSIÓN', codigo: '9502', valor: Number(nv.value['efe_md_9502']) },
])

const cuentasGrupoAI_AC = ref([
  { id: '39', grupo: 'AC', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO SEGÚN ESF', codigo: '', valor: 0.00 },
  { id: '40', grupo: 'AC', name: 'DIFERENCIA POR CUADRAR', codigo: '', valor: 0.00 },
])

// ACTIVIDADES DE FINANCIAMIENTO
const cuentasGrupoAF_A1 = ref([
  { id: '1', grupo: 'A1', name: 'Aporte en efectivo por aumento de capital', codigo: '950301', valor: Number(fi.value.efe_md_950301) },
])

const cuentasGrupoAF_B1 = ref([
  { id: '2', grupo: 'B1', name: 'Aumento (Disminución) de Capital Social', codigo: '95030101', valor: Number(fi.value.efe_md_95030101) },
  { id: '3', grupo: 'B1', name: 'Aumento (Disminución) de Capital Social y Aporte para Futura Capitalización', codigo: '95030102', valor: Number(fi.value.efe_md_95030102) },
  { id: '4', grupo: 'B1', name: 'Aporte para Futura Capitalizaciones', codigo: '95030103', valor: Number(fi.value.efe_md_95030103) },
  { id: '5', grupo: 'B1', name: 'Aporte para Futura Capitalizaciones', codigo: '95030104', valor: Number(fi.value.efe_md_95030104) },
])

const cuentasGrupoAF_C1 = ref([
  { id: '6', grupo: 'C1', name: 'Financiamiento por emisión de títulos valores', codigo: '950302', valor: Number(fi.value.efe_md_950302) },
])

const cuentasGrupoAF_D1 = ref([
  { id: '7', grupo: 'D1', name: 'Pagos por adquirir o rescatar las acciones de la entidad', codigo: '950303', valor: Number(fi.value.efe_md_950303) },
])

const cuentasGrupoAF_E1 = ref([
  { id: '8', grupo: 'E1', name: 'Financiación por préstamos a largo plazo', codigo: '950304', valor: Number(fi.value.efe_md_950304) },
])

const cuentasGrupoAF_F1 = ref([
  { id: '9', grupo: 'F1', name: 'Pagos de préstamos', codigo: '950305', valor: Number(fi.value.efe_md_950305) },
])

const cuentasGrupoAF_G1 = ref([
  { id: '10', grupo: 'G1', name: 'Pagos de pasivos por arrendamientos financieros', codigo: '950306', valor: Number(fi.value.efe_md_950306) },
])

const cuentasGrupoAF_H1 = ref([
  { id: '11', grupo: 'H1', name: 'Importes procedentes de subvenciones del gobierno', codigo: '950307', valor: Number(fi.value.efe_md_950307) },
])

const cuentasGrupoAF_I1 = ref([
  { id: '12', grupo: 'I1', name: 'Dividendos pagados', codigo: '950308', valor: Number(fi.value.efe_md_950308) },
])

const cuentasGrupoAF_J1 = ref([
  { id: '13', grupo: 'J1', name: 'Otros Dividendos Pagados', codigo: '95030801', valor: Number(fi.value.efe_md_95030801) },
])

const cuentasGrupoAF_K1 = ref([
  { id: '14', grupo: 'K1', name: 'Intereses recibidos', codigo: '950309', valor: Number(fi.value.efe_md_950309) },
])

const cuentasGrupoAF_L1 = ref([
  { id: '15', grupo: 'L1', name: 'Otras entradas (salidas) de efectivo', codigo: '950310', valor: Number(fi.value.efe_md_950310) },
])

const cuentasGrupoAF_M1 = ref([
  { id: '16', grupo: 'M1', name: 'Porción no Corrientes de Valores Emitidos', codigo: '95031001', valor: Number(fi.value.efe_md_95031001) },
  { id: '17', grupo: 'M1', name: 'Provisiones por Beneficios a Empleados', codigo: '95031002', valor: Number(fi.value.efe_md_95031002) },
  { id: '18', grupo: 'M1', name: 'Pasivos por Contratos de Arrendamiento', codigo: '95031003', valor: Number(fi.value.efe_md_95031003) },
  { id: '19', grupo: 'M1', name: 'Obligaciones con Instituciones Financieras', codigo: '95031004', valor: Number(fi.value.efe_md_95031004) },
  { id: '20', grupo: 'M1', name: 'Pago por Jubilación Patronal', codigo: '95031005', valor: Number(fi.value.efe_md_95031005) },
  { id: '21', grupo: 'M1', name: 'Pago por Desahucio', codigo: '95031006', valor: Number(fi.value.efe_md_95031006) },
  { id: '22', grupo: 'M1', name: 'Dividendos Pagados', codigo: '95031007', valor: Number(fi.value.efe_md_95031007) },
  { id: '23', grupo: 'M1', name: 'Transferencias a Cuentas de Activos y Pasivo', codigo: '95031008', valor: Number(fi.value.efe_md_95031008) },
])

const cuentasGrupoAF_N1 = ref([
  { id: '24', grupo: 'N1', name: 'FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE FINANCIACIÓN', codigo: '9503', valor: Number(fi.value.efe_md_9503) },
])

const cuentasGrupoAF_O1 = ref([
  { id: '25', grupo: 'O1', name: 'Efectos de la variación en la tasa de cambio sobre el efectivo y equivalentes al efectivo', codigo: '950401', valor: Number(fi.value.efe_md_950401) },
])

const cuentasGrupoAF_P1 = ref([
  { id: '26', grupo: 'P1', name: 'EFECTOS DE LA VARIACION EN LA TASA DE CAMBIO SOBRE EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO', codigo: '9504', valor: Number(fi.value.efe_md_9504) },
])

const cuentasGrupoAF_Q1 = ref([
  { id: '27', grupo: 'Q1', name: 'INCREMENTO NETO (DISMINUCIÓN) EN EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO, ANTES DEL EFECTO DE LOS CAMBIOS EN LA TASA DE CAMBIO', codigo: '95', valor: Number(fi.value.efe_md_95) },
])

const cuentasGrupoAF_R1 = ref([
  { id: '28', grupo: 'R1', name: 'INCREMENTO (DISMINUCIÓN) NETO DE EFECTIVO Y EQUIVALENTES AL EFECTIVO', codigo: '9505', valor: Number(fi.value.efe_md_9505) },
])

const cuentasGrupoAF_S1 = ref([
  { id: '29', grupo: 'S1', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO AL PRINCIPIO DEL PERIODO', codigo: '9506', valor: Number(fi.value.efe_md_9506) },
])

const cuentasGrupoAF_T1 = ref([
  { id: '30', grupo: 'T1', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO AL FINAL DEL PERIODO SEGÚN EFE', codigo: '9507', valor: Number(fi.value.efe_md_9507) },
])

const cuentasGrupoAF_V1 = ref([
  { id: '39', grupo: 'V1', name: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO SEGÚN ESF', codigo: '', valor: 0.00 },
  { id: '40', grupo: 'V1', name: 'DIFERENCIA POR CUADRAR', codigo: '', valor: 0.00 },
])



// Mapeo de movimientos permitidos entre grupos
const allowedMapping = {
  F: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  K: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  N: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  Q: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  AA: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],

  B1: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  J1: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
  M1: ['F', 'K', 'N', 'Q', 'AA', 'B1', 'J1', 'M1'],
}

// Función que valida si la cuenta puede moverse
const checkMove = evt => {
  if (!evt.to) return false // Evitar errores si `evt.to` no existe

  const dragged = evt.draggedContext.element
  const sourceGroup = dragged.grupo
  const destinationGroup = evt.to.getAttribute('data-grupo')

  if (!destinationGroup) return false // Evitar errores

  if (sourceGroup === 'F' || sourceGroup === 'K' || sourceGroup === 'N' || sourceGroup === 'Q' || sourceGroup === 'AA' || sourceGroup === 'B1' || sourceGroup === 'J1' || sourceGroup === 'M1') {
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
  cuentasGrupoAI_Z.value.find(c => c.codigo === '950221').valor =
    cuentasGrupoAI_AA.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAI_E.value.find(c => c.codigo === '950205').valor =
    cuentasGrupoAI_F.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAI_J.value.find(c => c.codigo === '950209').valor =
    cuentasGrupoAI_K.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAI_M.value.find(c => c.codigo === '950211').valor =
    cuentasGrupoAI_N.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAI_P.value.find(c => c.codigo === '950213').valor =
    cuentasGrupoAI_Q.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAF_A1.value.find(c => c.codigo === '950301').valor =
    cuentasGrupoAF_B1.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAF_L1.value.find(c => c.codigo === '950310').valor =
    cuentasGrupoAF_M1.value.reduce((sum, c) => sum + c.valor, 0)

  cuentasGrupoAF_P1.value.find(c => c.codigo === '9504').valor =
    cuentasGrupoAF_O1.value.reduce((sum, c) => sum + c.valor, 0)


  cuentasGrupoAI_AB.value.find(c => c.codigo === '9502').valor =
    cuentasGrupoAI_A.value.find(c => c.codigo === '950201').valor +
    cuentasGrupoAI_B.value.find(c => c.codigo === '950202').valor +
    cuentasGrupoAI_C.value.find(c => c.codigo === '950203').valor +
    cuentasGrupoAI_D.value.find(c => c.codigo === '950204').valor +
    cuentasGrupoAI_E.value.find(c => c.codigo === '950205').valor +
    cuentasGrupoAI_G.value.find(c => c.codigo === '950206').valor +
    cuentasGrupoAI_H.value.find(c => c.codigo === '950207').valor +
    cuentasGrupoAI_I.value.find(c => c.codigo === '950208').valor +
    cuentasGrupoAI_J.value.find(c => c.codigo === '950209').valor +
    cuentasGrupoAI_L.value.find(c => c.codigo === '950210').valor +
    cuentasGrupoAI_M.value.find(c => c.codigo === '950211').valor +
    cuentasGrupoAI_O.value.find(c => c.codigo === '950212').valor +
    cuentasGrupoAI_P.value.find(c => c.codigo === '950213').valor +
    cuentasGrupoAI_R.value.find(c => c.codigo === '950214').valor +
    cuentasGrupoAI_S.value.find(c => c.codigo === '950215').valor +
    cuentasGrupoAI_T.value.find(c => c.codigo === '950216').valor +
    cuentasGrupoAI_V.value.find(c => c.codigo === '950217').valor +
    cuentasGrupoAI_W.value.find(c => c.codigo === '950218').valor +
    cuentasGrupoAI_X.value.find(c => c.codigo === '950219').valor +
    cuentasGrupoAI_Y.value.find(c => c.codigo === '950220').valor +
    cuentasGrupoAI_Z.value.find(c => c.codigo === '950221').valor

  cuentasGrupoAF_N1.value.find(c => c.codigo === '9503').valor =
    cuentasGrupoAF_A1.value.find(c => c.codigo === '950301').valor +
    cuentasGrupoAF_C1.value.find(c => c.codigo === '950302').valor +
    cuentasGrupoAF_D1.value.find(c => c.codigo === '950303').valor +
    cuentasGrupoAF_E1.value.find(c => c.codigo === '950304').valor +
    cuentasGrupoAF_F1.value.find(c => c.codigo === '950305').valor +
    cuentasGrupoAF_G1.value.find(c => c.codigo === '950306').valor +
    cuentasGrupoAF_H1.value.find(c => c.codigo === '950307').valor +
    cuentasGrupoAF_I1.value.find(c => c.codigo === '950308').valor +
    cuentasGrupoAF_K1.value.find(c => c.codigo === '950309').valor +
    cuentasGrupoAF_L1.value.find(c => c.codigo === '950310').valor

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdefinanciamiento_df_ifluc: fi.value,
  })

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdeinversion_df_ifluc: nv.value,
  })
}
</script>
