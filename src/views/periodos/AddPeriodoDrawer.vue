<script setup>
import { ref, onMounted } from "vue"
import { usePeriodoStore } from "@/@store/periodo.store"
import { useEmpresaStore } from "@/@store/empresa.store"
import { requiredValidator } from "@validators"
import { usePeriodoLogic } from "@/composables/usePeriodoLogic"

import { useReportesStore } from "@/@store/reportes.store"
import { useRouter } from "vue-router"
import { obtenerDatosReporte } from "@core/utils/reportes"
import { useSessionUser } from "@/composables/useSessionUser"

const props = defineProps({
  isDrawerOpen: Boolean,
})

const emit = defineEmits(["update:isDrawerOpen", "periodo-creado"])

const periodoStore = usePeriodoStore()
const empresaStore = useEmpresaStore()
const reportesStore = useReportesStore()
const logic = usePeriodoLogic()
const router = useRouter()

const refForm = ref()
const empresaSelect = ref(null)
const periodoSelect = ref(null)
const guardando = ref(false)

const ANIOS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
const aniosDisponibles = ref([])

const { userId, storage } = useSessionUser()

async function cargarAnios() {
  const periodosEmpresa = periodoStore.activos.filter(
    p => p.empresaid === empresaSelect.value?.value,
  )

  aniosDisponibles.value = logic.aniosDisponibles(periodosEmpresa, ANIOS)
}

onMounted(() => {
  if (!empresaStore.loaded) empresaStore.load({ force: true })
  if (!periodoStore.loaded) periodoStore.load({ force: true })
})

const onSubmit = async () => {
  const { valid } = await refForm.value.validate()
  if (!valid || guardando.value) return

  guardando.value = true

  try {
    console.log('empresaSelect', empresaSelect.value)
    console.log('periodoSelect', periodoSelect.value)

    const baseData = {
      periodo: periodoSelect.value,
      empresaid: empresaSelect.value.value,
      userid: sessionStorage.getItem("sub"),
    }

    // 1) Crear periodo y recuperar el objeto creado
    const nuevoPeriodo = await periodoStore.add(baseData)

    console.log('periodo', nuevoPeriodo)

    emit("periodo-creado")

    if (!nuevoPeriodo || !nuevoPeriodo.id) {
      console.warn("[AddPeriodoDrawer] No se pudo identificar el periodo recién creado")
    } else {
      try {
        const periodoData = await obtenerDatosReporte(userId, nuevoPeriodo.id, baseData.empresaid)

        console.log("periodoData", periodoData)

        // 3) Crear reporte + valores + cache en IndexedDB
        await reportesStore.addReporteConvertex(periodoData)
      } catch (err) {
        console.error("[AddPeriodoDrawer] Error creando reporte asociado con valores", err)
      }
    }

    // 3) Cerrar drawer
    emit("update:isDrawerOpen", false)

    // 4) Redirigir a la lista de reportes
    // 👉 Ajusta el name o path según tu router:
    // router.push({ name: "reportes-list" })
    await router.push("/reportes/reportlist") // por ejemplo, si tu ruta es /reportes
  } finally {
    guardando.value = false
  }
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    width="400"
    location="end"
    temporary
    @update:model-value="val => emit('update:isDrawerOpen', val)"
  >
    <div class="d-flex align-center pa-6">
      <h6 class="text-h6">Nuevo Periodo</h6>
      <VSpacer />
      <VBtn
        icon
        variant="text"
        @click="emit('update:isDrawerOpen', false)">
        <VIcon icon="tabler-x"/>
      </VBtn>
    </div>

    <VForm
      ref="refForm"
      @submit.prevent="onSubmit">
      <VContainer>
        <VRow>
          <VCol cols="12">
            <VSelect
              v-model="empresaSelect"
              :items="empresaStore.empresas.map(e => ({ title: e.nombre, value: e.id }))"
              label="Empresa"
              :rules="[requiredValidator]"
              return-object
              @update:modelValue="cargarAnios"
            />
          </VCol>

          <VCol cols="12">
            <VSelect
              v-model="periodoSelect"
              label="Periodo"
              :items="aniosDisponibles"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12">
            <VBtn
              type="submit"
              class="w-100"
              :loading="guardando"
              :disabled="guardando"
            >
              Crear Periodo
            </VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </VForm>
  </VNavigationDrawer>
</template>
