<script setup>
import { ref, onMounted, watch, computed } from "vue"
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

// ✅ Proxy para que el drawer trabaje SIEMPRE con v-model
const drawer = computed({
  get: () => props.isDrawerOpen,
  set: v => emit("update:isDrawerOpen", v),
})

const periodoStore = usePeriodoStore()
const empresaStore = useEmpresaStore()
const reportesStore = useReportesStore()
const logic = usePeriodoLogic()
const router = useRouter()

const refForm = ref()
const empresaSelect = ref(null)
const periodoSelect = ref(null)
const guardando = ref(false)

const esconsolidado = ref(false)
const switchLocked = ref(false)

const ANIOS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
const aniosDisponibles = ref([])

const { userId } = useSessionUser()

const periodosEmpresa = computed(() => {
  const empId = empresaSelect.value?.value
  if (!empId) return []
  return periodoStore.activos.filter(p => p.empresaid === empId)
})

function refrescarAniosYReglas() {
  aniosDisponibles.value = logic.aniosDisponibles(periodosEmpresa.value, ANIOS)

  if (periodoSelect.value != null) {
    const rules = logic.variantRulesForYear(periodosEmpresa.value, periodoSelect.value)

    if (rules.forcedEsconsolidado === true || rules.forcedEsconsolidado === false) {
      esconsolidado.value = rules.forcedEsconsolidado
      switchLocked.value = true
    } else {
      switchLocked.value = false
    }
  } else {
    switchLocked.value = false
  }
}

watch(empresaSelect, () => {
  periodoSelect.value = null
  esconsolidado.value = false
  switchLocked.value = false
  refrescarAniosYReglas()
})

watch(periodoSelect, () => refrescarAniosYReglas())

onMounted(() => {
  if (!empresaStore.loaded) empresaStore.load({ force: true })
  if (!periodoStore.loaded) periodoStore.load({ force: true })
})

const onSubmit = async () => {
  const { valid } = await refForm.value.validate()
  if (!valid || guardando.value) return

  const rules = logic.variantRulesForYear(periodosEmpresa.value, periodoSelect.value)
  if (rules.forcedEsconsolidado === "blocked") return

  guardando.value = true
  try {
    const baseData = {
      periodo: periodoSelect.value,
      empresaid: empresaSelect.value.value,
      userid: sessionStorage.getItem("sub"),
      esconsolidado: Boolean(esconsolidado.value),
    }

    const nuevoPeriodo = await periodoStore.add(baseData)
    emit("periodo-creado")

    if (nuevoPeriodo?.id) {
      const periodoData = await obtenerDatosReporte(userId, nuevoPeriodo.id, baseData.empresaid)

      periodoData.reporte.esconsolidado = baseData.esconsolidado
      await reportesStore.addReporteConvertex(periodoData)
    }

    drawer.value = false
    // await router.push("/reportes/reportlist")

    await router.push({
      path: '/reportes',
    })
  } finally {
    guardando.value = false
  }
}
</script>

<template>
  <!-- ✅ aquí el cambio clave: v-model="drawer" -->
  <VNavigationDrawer
    v-model="drawer"
    width="400"
    location="end"
    temporary
  >
    <div class="d-flex align-center pa-6">
      <h6 class="text-h6">Nuevo Periodo</h6>
      <VSpacer />
      <VBtn icon variant="text" @click="drawer = false">
        <VIcon icon="tabler-x" />
      </VBtn>
    </div>

    <VForm ref="refForm" @submit.prevent="onSubmit">
      <VContainer>
        <VRow>
          <VCol cols="12">
            <VSelect
              v-model="empresaSelect"
              :items="empresaStore.empresas.map(e => ({ title: e.nombre, value: e.id }))"
              label="Empresa"
              :rules="[requiredValidator]"
              return-object
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
            <VSwitch
              v-model="esconsolidado"
              :disabled="switchLocked"
              inset
              color="primary"
              label="Es consolidado"
              hint="Si está activo, este período creará un reporte consolidado."
              persistent-hint
            />
          </VCol>

          <VCol cols="12">
            <VBtn type="submit" class="w-100" :loading="guardando" :disabled="guardando">
              Crear Periodo
            </VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </VForm>
  </VNavigationDrawer>
</template>
