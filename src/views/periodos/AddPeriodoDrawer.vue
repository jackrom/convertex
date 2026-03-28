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
  set: v => {
    // ✅ FIX: bloquear cierre del drawer mientras se está guardando
    if (guardando.value) return
    emit("update:isDrawerOpen", v)
  },
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
// Derivar tiporeporte (compatibilidad legacy)
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
// Años disponibles
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
// ✅ FIX: helper con reintento ante 429
// Espera `delay` ms y reintenta hasta `retries` veces
// ══════════════════════════════════════════════
const withRetry = async (fn, retries = 3, delay = 1200) => {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      const is429 = err?.response?.status === 429
      if (is429 && attempt < retries) {
        // backoff exponencial: 1.2s → 2.4s → 4.8s
        await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt)))
        continue
      }
      throw err
    }
  }
}

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

// ══════════════════════════════════════════════
// ✅ FIX: solo carga si realmente no está cargado,
// para no disparar peticiones duplicadas con el padre
// ══════════════════════════════════════════════
onMounted(() => {
  if (!empresaStore.loaded && !empresaStore.loading) empresaStore.load({ force: false })
  if (!periodoStore.loaded && !periodoStore.loading) periodoStore.load({ force: false })
})

// ══════════════════════════════════════════════
// Submit con reintentos y guards mejorados
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

    // ✅ FIX: envolver add() con reintento para manejar 429
    const nuevoPeriodo = await withRetry(() => periodoStore.add(baseData))

    // ✅ FIX: guard explícito antes de usar .id en el siguiente paso
    if (!nuevoPeriodo?.id) {
      errorMsg.value = "No se pudo crear el periodo. Intente nuevamente."

      return
    }

    try {
      // ✅ FIX: también envolver obtenerDatosReporte con reintento
      const periodoData = await withRetry(() =>
        obtenerDatosReporte(userId, nuevoPeriodo.id, baseData.empresaid)
      )

      periodoData.reporte.tiporeporte = baseData.tiporeporte

      await withRetry(() => reportesStore.addReporteConvertex(periodoData))
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

    if (status === 429) {
      errorMsg.value =
        "El servidor está procesando muchas solicitudes. Espere unos segundos e intente de nuevo."
    } else if (status === 409) {
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
  if (guardando.value) return "Espere mientras se crea el reporte…"
  if (!tipoSelect.value) return "Crear Periodo"
  if (tipoSelect.value === TIPOS.INICIAL) return "Crear Periodo Inicial"
  if (tipoSelect.value === TIPOS.CONSOLIDADO) return "Crear Periodo Consolidado"

  return "Crear Periodo Individual"
})
</script>

<template>
  <!-- ✅ FIX: persistent mientras guardando evita cierre accidental -->
  <VNavigationDrawer
    v-model="drawer"
    width="440"
    location="end"
    temporary
    :persistent="guardando"
  >
    <!-- ══════════════════════════════════════════
         HEADER
    ══════════════════════════════════════════ -->
    <div class="pd-header">
      <div class="pd-header__icon-wrap" :class="`pd-header__icon-wrap--${tipoColor}`">
        <VIcon :icon="tipoIcon" size="22" color="white" />
      </div>
      <div class="pd-header__text">
        <span class="pd-header__title">Nuevo Periodo</span>
        <span class="pd-header__subtitle">
          {{
            tipoSelect === TIPOS.INICIAL ? 'Saldos de apertura' :
            tipoSelect === TIPOS.CONSOLIDADO ? 'Estados financieros consolidado' :
            tipoSelect === TIPOS.INDIVIDUAL ? 'Estados financieros individual' :
            'Seleccione empresa, año y tipo'
          }}
        </span>
      </div>
      <VSpacer />
      <VBtn
        icon
        variant="text"
        size="small"
        :disabled="guardando"
        @click="drawer = false"
      >
        <VIcon icon="tabler-x" size="18" />
      </VBtn>
    </div>

    <VDivider />

    <!-- ══════════════════════════════════════════
         OVERLAY DE CARGA — cubre el drawer mientras guarda
    ══════════════════════════════════════════ -->
    <Transition name="pd-fade">
      <div
        v-if="guardando"
        class="pd-loading-overlay"
      >
        <div class="pd-loading-card">
          <VProgressCircular
            indeterminate
            :color="tipoColor"
            size="52"
            width="4"
          />
          <p class="pd-loading-card__title">Creando periodo y reporte</p>
          <p class="pd-loading-card__sub">Este proceso puede tomar unos segundos.<br>Por favor no cierre esta ventana.</p>
        </div>
      </div>
    </Transition>

    <!-- ══════════════════════════════════════════
         STEPS — indicador visual del progreso del form
    ══════════════════════════════════════════ -->
    <div class="pd-steps">
      <div class="pd-step" :class="{ 'pd-step--done': empresaSelect }">
        <span class="pd-step__dot" />
        <span class="pd-step__label">Empresa</span>
      </div>
      <div class="pd-step__line" />
      <div class="pd-step" :class="{ 'pd-step--done': periodoSelect }">
        <span class="pd-step__dot" />
        <span class="pd-step__label">Año</span>
      </div>
      <div class="pd-step__line" />
      <div class="pd-step" :class="{ 'pd-step--done': tipoSelect }">
        <span class="pd-step__dot" />
        <span class="pd-step__label">Tipo</span>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         FORMULARIO
    ══════════════════════════════════════════ -->
    <VForm
      ref="refForm"
      class="pd-form"
      @submit.prevent="onSubmit"
    >
      <div class="pd-field-group">
        <!-- 1. Empresa -->
        <div class="pd-field">
          <div class="pd-field__label">
            <VIcon icon="tabler-building" size="15" class="pd-field__label-icon" />
            Empresa
          </div>
          <VSelect
            v-model="empresaSelect"
            :items="empresaStore.empresas.map(e => ({ title: e.nombre, value: e.id }))"
            placeholder="Seleccione una empresa"
            :rules="[requiredValidator]"
            return-object
            variant="outlined"
            density="comfortable"
            hide-details="auto"
            :disabled="guardando"
            class="pd-select"
          />
        </div>

        <!-- 2. Año -->
        <div class="pd-field">
          <div class="pd-field__label" :class="{ 'pd-field__label--disabled': !empresaSelect }">
            <VIcon icon="tabler-calendar" size="15" class="pd-field__label-icon" />
            Año fiscal
          </div>
          <VSelect
            v-model="periodoSelect"
            placeholder="Seleccione un año"
            :items="aniosDisponibles"
            :rules="[requiredValidator]"
            :disabled="!empresaSelect || guardando"
            no-data-text="Todos los años ya tienen los 3 tipos de periodo"
            variant="outlined"
            density="comfortable"
            hide-details="auto"
            class="pd-select"
          />
        </div>

        <!-- 3. Tipo de periodo -->
        <div class="pd-field">
          <div class="pd-field__label" :class="{ 'pd-field__label--disabled': !periodoSelect }">
            <VIcon icon="tabler-category" size="15" class="pd-field__label-icon" />
            Tipo de periodo
          </div>
          <VSelect
            v-model="tipoSelect"
            placeholder="Seleccione el tipo"
            :items="tipoItems"
            :rules="[requiredValidator]"
            :disabled="!periodoSelect || guardando"
            variant="outlined"
            density="comfortable"
            hide-details="auto"
            class="pd-select"
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
        </div>
      </div>

      <!-- ══ TARJETA de tipo seleccionado ══ -->
      <Transition name="pd-slide">
        <div
          v-if="tipoSelect"
          class="pd-tipo-card"
          :class="`pd-tipo-card--${tipoColor}`"
        >
          <VIcon :icon="tipoIcon" size="20" class="pd-tipo-card__icon" />
          <div class="pd-tipo-card__body">
            <span class="pd-tipo-card__name">
              {{
                tipoSelect === TIPOS.INICIAL ? 'Periodo Inicial' :
                  tipoSelect === TIPOS.CONSOLIDADO ? 'Periodo Consolidado' :
                    'Periodo Individual'
              }}
            </span>
            <span class="pd-tipo-card__desc">
              {{
                tipoSelect === TIPOS.INICIAL
                  ? 'Solo puede existir uno por año/empresa. No puede duplicarse.'
                  : 'El reporte se generará automáticamente al crear el periodo.'
              }}
            </span>
          </div>
        </div>
      </Transition>

      <!-- ══ Error ══ -->
      <Transition name="pd-slide">
        <VAlert
          v-if="errorMsg"
          type="error"
          variant="tonal"
          density="compact"
          closable
          class="pd-alert"
          @click:close="errorMsg = ''"
        >
          {{ errorMsg }}
        </VAlert>
      </Transition>

      <!-- ══ Submit ══ -->
      <div class="pd-submit-wrap">
        <VBtn
          type="submit"
          block
          size="large"
          :color="tipoColor"
          :loading="guardando"
          :disabled="guardando"
          :prepend-icon="guardando ? undefined : tipoIcon"
          class="pd-submit-btn"
        >
          {{ submitLabel }}
        </VBtn>

        <VBtn
          v-if="!guardando"
          variant="text"
          block
          class="pd-cancel-btn"
          @click="drawer = false"
        >
          Cancelar
        </VBtn>
      </div>
    </VForm>
  </VNavigationDrawer>
</template>

<style scoped>
/* ══════════════════════════════════════════════
   HEADER
══════════════════════════════════════════════ */
.pd-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px 18px;
}

.pd-header__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.pd-header__icon-wrap--primary  { background: rgb(var(--v-theme-primary)); }
.pd-header__icon-wrap--secondary { background: rgb(var(--v-theme-secondary)); }
.pd-header__icon-wrap--info     { background: rgb(var(--v-theme-info)); }

.pd-header__text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.pd-header__title {
  font-size: 15px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.92);
  line-height: 1.2;
}

.pd-header__subtitle {
  font-size: 11.5px;
  color: rgba(var(--v-theme-on-surface), 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  transition: color 0.2s;
}

/* ══════════════════════════════════════════════
   STEPS
══════════════════════════════════════════════ */
.pd-steps {
  display: flex;
  align-items: center;
  padding: 14px 24px 10px;
  gap: 0;
}

.pd-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.pd-step__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(var(--v-theme-on-surface), 0.2);
  background: transparent;
  transition: all 0.25s ease;
}

.pd-step--done .pd-step__dot {
  border-color: rgb(var(--v-theme-primary));
  background: rgb(var(--v-theme-primary));
}

.pd-step__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(var(--v-theme-on-surface), 0.35);
  transition: color 0.25s;
}

.pd-step--done .pd-step__label {
  color: rgb(var(--v-theme-primary));
}

.pd-step__line {
  flex: 1;
  height: 1.5px;
  background: rgba(var(--v-theme-on-surface), 0.1);
  margin-bottom: 14px;
}

/* ══════════════════════════════════════════════
   FORM
══════════════════════════════════════════════ */
.pd-form {
  display: flex;
  flex-direction: column;
  height: calc(100% - 125px);
  overflow-y: auto;
}

.pd-field-group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px 20px 4px;
}

.pd-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pd-field__label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(var(--v-theme-on-surface), 0.6);
  transition: color 0.2s;
}

.pd-field__label--disabled {
  color: rgba(var(--v-theme-on-surface), 0.28);
}

.pd-field__label-icon {
  opacity: 0.6;
}

/* ══════════════════════════════════════════════
   TARJETA TIPO
══════════════════════════════════════════════ */
.pd-tipo-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 16px 20px 0;
  padding: 14px 16px;
  border-radius: 10px;
  border-left: 3px solid;
}

.pd-tipo-card--primary  {
  background: rgba(var(--v-theme-primary), 0.07);
  border-color: rgb(var(--v-theme-primary));
}
.pd-tipo-card--secondary {
  background: rgba(var(--v-theme-secondary), 0.07);
  border-color: rgb(var(--v-theme-secondary));
}
.pd-tipo-card--info {
  background: rgba(var(--v-theme-info), 0.07);
  border-color: rgb(var(--v-theme-info));
}

.pd-tipo-card__icon {
  margin-top: 1px;
  flex-shrink: 0;
}

.pd-tipo-card__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.pd-tipo-card__name {
  font-size: 13px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.85);
}

.pd-tipo-card__desc {
  font-size: 12px;
  color: rgba(var(--v-theme-on-surface), 0.55);
  line-height: 1.4;
}

/* ══════════════════════════════════════════════
   ALERT
══════════════════════════════════════════════ */
.pd-alert {
  margin: 14px 20px 0;
  font-size: 12.5px;
}

/* ══════════════════════════════════════════════
   SUBMIT
══════════════════════════════════════════════ */
.pd-submit-wrap {
  margin-top: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.pd-submit-btn {
  font-weight: 700;
  letter-spacing: 0.03em;
  font-size: 13.5px;
  min-height: 46px;
}

.pd-cancel-btn {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.45);
}

/* ══════════════════════════════════════════════
   OVERLAY DE CARGA
══════════════════════════════════════════════ */
.pd-loading-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(var(--v-theme-surface), 0.88);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 24px;
  text-align: center;
}

.pd-loading-card__title {
  font-size: 15px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.88);
  margin: 0;
}

.pd-loading-card__sub {
  font-size: 12.5px;
  color: rgba(var(--v-theme-on-surface), 0.5);
  line-height: 1.5;
  margin: 0;
}

/* ══════════════════════════════════════════════
   TRANSICIONES
══════════════════════════════════════════════ */
.pd-fade-enter-active,
.pd-fade-leave-active {
  transition: opacity 0.22s ease;
}

.pd-fade-enter-from,
.pd-fade-leave-to {
  opacity: 0;
}

.pd-slide-enter-active,
.pd-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.pd-slide-enter-from,
.pd-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
