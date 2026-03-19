<script setup>
import { ref, onMounted, watch, computed } from "vue"
import { usePeriodoStore } from "@/@store/periodo.store"
import { useEmpresaStore } from "@/@store/empresa.store"
import { requiredValidator } from "@validators"
import { useReportesStore } from "@/@store/reportes.store"
import { useRouter } from "vue-router"
import { obtenerDatosReporte } from "@core/utils/reportes"
import { useSessionUser } from "@/composables/useSessionUser"

const props = defineProps({
  isDrawerOpen: Boolean,
})

const emit = defineEmits(["update:isDrawerOpen", "periodo-creado"])

const drawer = computed({
  get: () => props.isDrawerOpen,
  set: v => emit("update:isDrawerOpen", v),
})

const periodoStore = usePeriodoStore()
const empresaStore = useEmpresaStore()
const reportesStore = useReportesStore()
const router = useRouter()
const { userId } = useSessionUser()

// ══════════════════════════════════════════════
// Estado del formulario
// ══════════════════════════════════════════════
const refForm = ref()
const empresaSelect = ref(null)
const periodoSelect = ref(null)
const tipoSelect = ref(null)
const guardando = ref(false)
const errorMsg = ref("")

// ══════════════════════════════════════════════
// Constantes
// ══════════════════════════════════════════════
const TIPOS = {
  INICIAL: "inicial",
  INDIVIDUAL: "individual",
  CONSOLIDADO: "consolidado",
}

const BASE_YEAR = 2017

const ANIOS = computed(() => {
  const y = new Date().getFullYear()
  const years = []

  for (let i = BASE_YEAR; i <= y + 1; i++) years.push(i)

  return years
})

// ══════════════════════════════════════════════
// Derivar tiporeporte (compatibilidad con datos legacy
// que solo tienen esconsolidado y no tiporeporte)
// ══════════════════════════════════════════════
const derivarTipo = periodo => {
  if (periodo.tiporeporte) return periodo.tiporeporte
  if (periodo.esconsolidado) return TIPOS.CONSOLIDADO

  return TIPOS.INDIVIDUAL
}

// ══════════════════════════════════════════════
// Periodos existentes por empresa
// ══════════════════════════════════════════════
const periodosEmpresa = computed(() => {
  const empId = empresaSelect.value?.value
  if (!empId) return []

  return periodoStore.activos.filter(p => p.empresaid === empId)
})

// ══════════════════════════════════════════════
// Años disponibles: solo donde quede al menos 1 tipo libre
// ══════════════════════════════════════════════
const aniosDisponibles = computed(() => {
  const periodos = periodosEmpresa.value

  return ANIOS.value.filter(anio => {
    const delAnio = periodos.filter(p => Number(p.periodo) === anio)
    const tipos = new Set(delAnio.map(p => derivarTipo(p)))

    return tipos.size < 3
  })
})

// ══════════════════════════════════════════════
// Tipos ya creados para el año seleccionado
// ══════════════════════════════════════════════
const tiposExistentesParaAnio = computed(() => {
  if (!periodoSelect.value) return new Set()

  const delAnio = periodosEmpresa.value.filter(
    p => Number(p.periodo) === Number(periodoSelect.value),
  )

  return new Set(delAnio.map(p => derivarTipo(p)))
})

// ══════════════════════════════════════════════
// Items del select con disabled dinámico
// ══════════════════════════════════════════════
const tipoItems = computed(() => {
  const existentes = tiposExistentesParaAnio.value

  return [
    {
      title: "Periodo Inicial (Saldos de Apertura)",
      value: TIPOS.INICIAL,
      props: {
        disabled: existentes.has(TIPOS.INICIAL),
        subtitle: existentes.has(TIPOS.INICIAL)
          ? "Ya existe para este año"
          : "Registra los saldos de apertura",
      },
    },
    {
      title: "Individual",
      value: TIPOS.INDIVIDUAL,
      props: {
        disabled: existentes.has(TIPOS.INDIVIDUAL),
        subtitle: existentes.has(TIPOS.INDIVIDUAL)
          ? "Ya existe para este año"
          : "Reporte de estados financieros individual",
      },
    },
    {
      title: "Consolidado",
      value: TIPOS.CONSOLIDADO,
      props: {
        disabled: existentes.has(TIPOS.CONSOLIDADO),
        subtitle: existentes.has(TIPOS.CONSOLIDADO)
          ? "Ya existe para este año"
          : "Reporte de estados financieros consolidado",
      },
    },
  ]
})

// ══════════════════════════════════════════════
// Watchers — reseteo en cascada
// ══════════════════════════════════════════════
watch(empresaSelect, () => {
  periodoSelect.value = null
  tipoSelect.value = null
  errorMsg.value = ""
})

watch(periodoSelect, () => {
  tipoSelect.value = null
  errorMsg.value = ""
})

watch(tipoSelect, () => {
  errorMsg.value = ""
})

watch(drawer, open => {
  if (open) {
    empresaSelect.value = null
    periodoSelect.value = null
    tipoSelect.value = null
    errorMsg.value = ""
    guardando.value = false
  }
})

onMounted(() => {
  if (!empresaStore.loaded) empresaStore.load({ force: true })
  if (!periodoStore.loaded) periodoStore.load({ force: true })
})

// ══════════════════════════════════════════════
// Submit
// ══════════════════════════════════════════════
const onSubmit = async () => {
  const { valid } = await refForm.value.validate()
  if (!valid || guardando.value) return

  errorMsg.value = ""

  if (tiposExistentesParaAnio.value.has(tipoSelect.value)) {
    errorMsg.value = `Ya existe un periodo "${tipoSelect.value}" para el año ${periodoSelect.value}.`

    return
  }

  guardando.value = true

  try {
    const baseData = {
      periodo: periodoSelect.value,
      empresaid: empresaSelect.value.value,
      userid: userId,
      tiporeporte: tipoSelect.value,
    }

    const nuevoPeriodo = await periodoStore.add(baseData)

    if (!nuevoPeriodo?.id) {
      errorMsg.value = "No se pudo crear el periodo. Intente nuevamente."

      return
    }

    try {
      const periodoData = await obtenerDatosReporte(
        userId,
        nuevoPeriodo.id,
        baseData.empresaid,
      )

      periodoData.reporte.tiporeporte = baseData.tiporeporte

      console.log('periodoData.reporte ANTES de enviar:', JSON.stringify(periodoData.reporte))

      await reportesStore.addReporteConvertex(periodoData)
    } catch (reporteErr) {
      console.error("[PeriodoDrawer] Error creando reporte:", reporteErr)
      errorMsg.value =
        "El periodo se creó pero hubo un error generando el reporte. " +
        "Puede regenerarlo desde la lista de reportes."
    }

    emit("periodo-creado")
    drawer.value = false
    await router.push({ path: "/reportes" })
  } catch (err) {
    console.error("[PeriodoDrawer] Error en onSubmit:", err)

    const status = err?.response?.status

    if (status === 409) {
      errorMsg.value = "Este periodo ya existe. Seleccione otro año o tipo."
    } else if (status >= 500) {
      errorMsg.value = "Error del servidor. Intente nuevamente en unos minutos."
    } else {
      errorMsg.value =
        err?.response?.data?.message || "Error inesperado al crear el periodo."
    }
  } finally {
    guardando.value = false
  }
}

// ══════════════════════════════════════════════
// Helpers de UI
// ══════════════════════════════════════════════
const tipoIcon = computed(() => {
  if (tipoSelect.value === TIPOS.INICIAL) return "tabler-calendar-check"
  if (tipoSelect.value === TIPOS.CONSOLIDADO) return "tabler-building-bank"
  if (tipoSelect.value === TIPOS.INDIVIDUAL) return "tabler-user"

  return "tabler-file-plus"
})

const tipoColor = computed(() => {
  if (tipoSelect.value === TIPOS.INICIAL) return "info"
  if (tipoSelect.value === TIPOS.CONSOLIDADO) return "primary"
  if (tipoSelect.value === TIPOS.INDIVIDUAL) return "secondary"

  return "primary"
})

const submitLabel = computed(() => {
  if (!tipoSelect.value) return "Crear Periodo"
  if (tipoSelect.value === TIPOS.INICIAL) return "Crear Periodo Inicial"
  if (tipoSelect.value === TIPOS.CONSOLIDADO) return "Crear Periodo Consolidado"

  return "Crear Periodo Individual"
})
</script>

<template>
  <VNavigationDrawer
    v-model="drawer"
    width="420"
    location="end"
    temporary
  >
    <div class="d-flex align-center pa-6 pb-4">
      <div class="d-flex align-center gap-2">
        <VIcon
          :icon="tipoIcon"
          :color="tipoColor"
          size="24"
        />
        <h6 class="text-h6">
          Nuevo Periodo
        </h6>
      </div>
      <VSpacer />
      <VBtn
        icon
        variant="text"
        size="small"
        @click="drawer = false"
      >
        <VIcon icon="tabler-x" />
      </VBtn>
    </div>

    <VDivider />

    <VForm
      ref="refForm"
      @submit.prevent="onSubmit"
    >
      <VContainer class="pt-6">
        <VRow>
          <!-- 1. Empresa -->
          <VCol cols="12">
            <VSelect
              v-model="empresaSelect"
              :items="empresaStore.empresas.map(e => ({ title: e.nombre, value: e.id }))"
              label="Empresa"
              :rules="[requiredValidator]"
              return-object
              prepend-inner-icon="tabler-building"
            />
          </VCol>

          <!-- 2. Año -->
          <VCol cols="12">
            <VSelect
              v-model="periodoSelect"
              label="Año"
              :items="aniosDisponibles"
              :rules="[requiredValidator]"
              :disabled="!empresaSelect"
              no-data-text="Todos los años ya tienen los 3 tipos de periodo"
              prepend-inner-icon="tabler-calendar"
            />
          </VCol>

          <!-- 3. Tipo de periodo -->
          <VCol cols="12">
            <VSelect
              v-model="tipoSelect"
              label="Tipo de Periodo"
              :items="tipoItems"
              :rules="[requiredValidator]"
              :disabled="!periodoSelect"
              prepend-inner-icon="tabler-category"
            >
              <template #item="{ item, props: itemProps }">
                <VListItem
                  v-bind="itemProps"
                  :disabled="item.props?.disabled"
                >
                  <template #prepend>
                    <VIcon
                      :icon="
                        item.value === TIPOS.INICIAL ? 'tabler-calendar-check' :
                        item.value === TIPOS.CONSOLIDADO ? 'tabler-building-bank' :
                        'tabler-user'
                      "
                      :color="item.props?.disabled ? 'grey' : 'primary'"
                      size="20"
                      class="me-2"
                    />
                  </template>
                  <template #append>
                    <VIcon
                      v-if="item.props?.disabled"
                      icon="tabler-lock"
                      color="grey"
                      size="16"
                    />
                  </template>
                </VListItem>
              </template>
            </VSelect>
          </VCol>

          <!-- Alertas contextuales -->
          <VCol
            v-if="tipoSelect === TIPOS.INICIAL"
            cols="12"
          >
            <VAlert
              type="info"
              variant="tonal"
              density="compact"
              class="text-body-2"
            >
              El <strong>Periodo Inicial</strong> registra los saldos de apertura.
              Solo puede existir uno por año/empresa y <strong>no puede duplicarse</strong>.
            </VAlert>
          </VCol>

          <VCol
            v-if="tipoSelect === TIPOS.INDIVIDUAL"
            cols="12"
          >
            <VAlert
              type="warning"
              variant="tonal"
              density="compact"
              class="text-body-2"
            >
              El periodo <strong>Individual</strong> no puede duplicarse una vez creado.
            </VAlert>
          </VCol>

          <!-- Error -->
          <VCol
            v-if="errorMsg"
            cols="12"
          >
            <VAlert
              type="error"
              variant="tonal"
              density="compact"
              closable
              class="text-body-2"
              @click:close="errorMsg = ''"
            >
              {{ errorMsg }}
            </VAlert>
          </VCol>

          <!-- Submit -->
          <VCol cols="12">
            <VBtn
              type="submit"
              class="w-100"
              :color="tipoColor"
              :loading="guardando"
              :disabled="guardando"
              :prepend-icon="tipoIcon"
            >
              {{ submitLabel }}
            </VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </VForm>
  </VNavigationDrawer>
</template>
