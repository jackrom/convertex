<!-- src/views/empresas/AddEmpresaDrawer.vue -->
<script setup>
import { ref, computed, watch, nextTick } from "vue"
import { useEmpresaStore } from "@/@store/empresa.store"
import { requiredValidator, emailValidator } from "@validators"
import { validarRucEcuador } from "@/utils/ruc-validator"
import api from "@/plugins/axios/axios"

const props = defineProps({
  isDrawerOpen: Boolean,
  empresa: { type: Object, default: null },
})

const emit = defineEmits(["update:isDrawerOpen", "empresaCreada", "empresaActualizada"])

const store = useEmpresaStore()
const refForm = ref()
const saving = ref(false)

// RUC async validation state
const rucChecking = ref(false)
const rucDuplicate = ref(false)
const rucDuplicateDialog = ref(false)
const rucError = ref("")

const isEditMode = computed(() => !!props.empresa?.id)
const drawerTitle = computed(() => isEditMode.value ? "Editar Empresa" : "Nueva Empresa")
const submitLabel = computed(() => isEditMode.value ? "Guardar Cambios" : "Crear Empresa")
const submitIcon = computed(() => isEditMode.value ? "tabler-check" : "tabler-plus")

const emptyForm = () => ({
  nombre: "",
  ruc: "",
  email: "",
  gerente: "",
  direccion: "",
  telefono: "",
  ciudad: "",
  provincia: "",
  origen: "convertex",
})

const form = ref(emptyForm())

// Hydrate form when editing
watch(
  () => props.empresa,
  emp => {
    if (emp) {
      form.value = {
        nombre: emp.nombre ?? "",
        ruc: emp.ruc ?? "",
        email: emp.email ?? "",
        gerente: emp.gerente ?? "",
        direccion: emp.direccion ?? "",
        telefono: emp.telefono ?? "",
        ciudad: emp.ciudad ?? "",
        provincia: emp.provincia ?? "",
        origen: emp.origen ?? "convertex",
      }
      rucError.value = ""
      rucDuplicate.value = false
    } else {
      form.value = emptyForm()
      rucError.value = ""
      rucDuplicate.value = false
    }
  },
  { immediate: true },
)

watch(
  () => props.isDrawerOpen,
  open => {
    if (open && !props.empresa) {
      form.value = emptyForm()
      rucError.value = ""
      rucDuplicate.value = false
      nextTick(() => refForm.value?.resetValidation())
    }
  },
)

// ── RUC Validation ────────────────────────────────────────
const rucRules = computed(() => {
  if (isEditMode.value) return [] // RUC disabled in edit mode

  return [
    requiredValidator,
    rucAlgorithmValidator,
  ]
})

const rucAlgorithmValidator = value => {
  if (!value) return true
  const result = validarRucEcuador(value)

  return result.valid || result.error
}

// Check duplicate RUC on blur (only in create mode)
let rucCheckTimer = null

const checkRucDuplicate = async () => {
  if (isEditMode.value) return

  const ruc = form.value.ruc?.trim()
  if (!ruc || ruc.length !== 13) {
    rucDuplicate.value = false
    rucError.value = ""

    return
  }

  // First validate algorithm
  const algoResult = validarRucEcuador(ruc)
  if (!algoResult.valid) return

  rucChecking.value = true
  rucError.value = ""

  try {
    const { data } = await api.get(`/v1/convertex/empresasconvertex/${ruc}`)
    if (data?.ok && data?.data) {
      // RUC exists in DB
      rucDuplicate.value = true
      rucError.value = "Este RUC ya está registrado en el sistema"
      rucDuplicateDialog.value = true
    } else {
      rucDuplicate.value = false
      rucError.value = ""
    }
  } catch (err) {
    // 404 = not found = OK, RUC is available
    if (err?.response?.status === 404) {
      rucDuplicate.value = false
      rucError.value = ""
    } else {
      console.warn("[RUC check] Error:", err)
    }
  } finally {
    rucChecking.value = false
  }
}

// Debounced RUC check
watch(
  () => form.value.ruc,
  newRuc => {
    if (isEditMode.value) return
    rucDuplicate.value = false
    rucError.value = ""
    if (rucCheckTimer) clearTimeout(rucCheckTimer)
    if (newRuc?.trim().length === 13) {
      rucCheckTimer = setTimeout(checkRucDuplicate, 500)
    }
  },
)

// ── Phone validator ───────────────────────────────────────
const phoneValidator = value => {
  if (!value) return true
  const cleaned = String(value).replace(/[\s\-\(\)\.]/g, "")
  if (!/^\+?\d{7,15}$/.test(cleaned)) {
    return "Ingrese un número de teléfono válido (7-15 dígitos)"
  }

  return true
}

// ── Close ─────────────────────────────────────────────────
const close = () => {
  emit("update:isDrawerOpen", false)
  refForm.value?.resetValidation()
  rucError.value = ""
  rucDuplicate.value = false
}

// ── Submit ────────────────────────────────────────────────
const onSubmit = async () => {
  const { valid } = await refForm.value.validate()
  if (!valid) return

  // Block if RUC is duplicate
  if (!isEditMode.value && rucDuplicate.value) {
    rucDuplicateDialog.value = true

    return
  }

  saving.value = true
  try {
    if (isEditMode.value) {
      const payload = { ...form.value }

      delete payload.ruc
      await store.update(props.empresa.id, payload)
      emit("empresaActualizada")
    } else {
      await store.add(form.value)
      emit("empresaCreada")
    }
    close()
  } catch (err) {
    console.error("[AddEmpresaDrawer] Error:", err)

    // Check if the backend returned a duplicate error
    const detail = err?.response?.data?.detail ?? err?.response?.data?.error ?? ""
    if (String(detail).toLowerCase().includes("duplicate") || String(detail).toLowerCase().includes("unique")) {
      rucDuplicate.value = true
      rucError.value = "Este RUC ya está registrado"
      rucDuplicateDialog.value = true
    }
  } finally {
    saving.value = false
  }
}

const provincias = [
  "Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo",
  "Cotopaxi", "El Oro", "Esmeraldas", "Galápagos", "Guayas",
  "Imbabura", "Loja", "Los Ríos", "Manabí", "Morona Santiago",
  "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena",
  "Santo Domingo de los Tsáchilas", "Sucumbíos", "Tungurahua",
  "Zamora Chinchipe",
]
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    @update:model-value="val => emit('update:isDrawerOpen', val)"
    location="end"
    width="440"
    temporary
    class="ed"
  >
    <!-- HEADER -->
    <div class="ed-header">
      <div class="ed-header__left">
        <div class="ed-header__icon">
          <VIcon :icon="isEditMode ? 'tabler-edit' : 'tabler-building-plus'" size="20" color="#D4884A" />
        </div>
        <div>
          <div class="ed-header__title">{{ drawerTitle }}</div>
          <div class="ed-header__sub">
            {{ isEditMode ? 'Modifique los datos de la empresa' : 'Complete los datos para registrar' }}
          </div>
        </div>
      </div>
      <VBtn icon variant="text" size="small" @click="close">
        <VIcon icon="tabler-x" />
      </VBtn>
    </div>

    <VDivider />

    <!-- FORM -->
    <div class="ed-body">
      <VForm ref="refForm" @submit.prevent="onSubmit">
        <!-- Identificación -->
        <div class="ed-group">
          <div class="ed-group__title">
            <VIcon size="15" color="#D4884A" class="mr-2">tabler-id</VIcon>
            Identificación
          </div>

          <VTextField
            v-model="form.nombre"
            label="Nombre de la empresa *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-building"
            :rules="[requiredValidator]"
            class="ed-field"
          />

          <div class="ed-field ed-field--ruc">
            <VTextField
              v-model="form.ruc"
              label="RUC *"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="tabler-hash"
              :rules="rucRules"
              :disabled="isEditMode"
              :error="!!rucError"
              :error-messages="rucError ? [rucError] : []"
              :loading="rucChecking"
              :hint="isEditMode ? 'El RUC no se puede modificar' : 'Se validará automáticamente'"
              persistent-hint
              maxlength="13"
              counter
            />
            <div v-if="!isEditMode && form.ruc?.length === 13 && !rucError && !rucChecking" class="ed-ruc-ok">
              <VIcon size="16" color="success">tabler-check</VIcon>
              <span>RUC válido</span>
            </div>
          </div>

          <VTextField
            v-model="form.email"
            label="Correo electrónico *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-mail"
            :rules="[requiredValidator, emailValidator]"
            class="ed-field"
          />
        </div>

        <!-- Representante -->
        <div class="ed-group">
          <div class="ed-group__title">
            <VIcon size="15" color="#D4884A" class="mr-2">tabler-user-check</VIcon>
            Representante
          </div>

          <VTextField
            v-model="form.gerente"
            label="Gerente / Representante Legal *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-user"
            :rules="[requiredValidator]"
            class="ed-field"
          />

          <VTextField
            v-model="form.telefono"
            label="Teléfono *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-phone"
            :rules="[requiredValidator, phoneValidator]"
            placeholder="0999999999"
            class="ed-field"
          />
        </div>

        <!-- Ubicación -->
        <div class="ed-group">
          <div class="ed-group__title">
            <VIcon size="15" color="#D4884A" class="mr-2">tabler-map-pin</VIcon>
            Ubicación
          </div>

          <VTextField
            v-model="form.direccion"
            label="Dirección *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-home"
            :rules="[requiredValidator]"
            class="ed-field"
          />

          <VTextField
            v-model="form.ciudad"
            label="Ciudad *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-map-2"
            :rules="[requiredValidator]"
            class="ed-field"
          />

          <VSelect
            v-model="form.provincia"
            :items="provincias"
            label="Provincia *"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="tabler-flag"
            :rules="[requiredValidator]"
            class="ed-field"
          />
        </div>

        <!-- Submit -->
        <div class="ed-submit">
          <VBtn variant="outlined" color="default" @click="close" :disabled="saving">
            Cancelar
          </VBtn>
          <VBtn
            type="submit"
            color="#D4884A"
            variant="flat"
            :prepend-icon="submitIcon"
            :loading="saving"
            :disabled="saving || rucDuplicate || rucChecking"
          >
            {{ submitLabel }}
          </VBtn>
        </div>
      </VForm>
    </div>
  </VNavigationDrawer>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- RUC DUPLICATE DIALOG -->
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <VDialog v-model="rucDuplicateDialog" max-width="480" persistent>
    <VCard class="ed-dialog">
      <VCardText class="pt-6 pb-4 text-center">
        <div class="ed-dialog__icon">
          <VIcon icon="tabler-alert-circle" size="32" color="error" />
        </div>

        <h3 class="ed-dialog__title">RUC ya registrado</h3>

        <p class="ed-dialog__text">
          El RUC <strong>{{ form.ruc }}</strong> ya se encuentra registrado en el sistema.
        </p>

        <div class="ed-dialog__info">
          <VIcon size="16" color="primary" class="mr-2">tabler-info-circle</VIcon>
          <div>
            Si necesita registrar una empresa con este RUC, comuníquese con el
            <strong>administrador de la aplicación</strong> para que verifique y,
            de ser necesario, libere el RUC asociado.
          </div>
        </div>

        <div class="ed-dialog__contact">
          <VIcon size="14" class="mr-1">tabler-mail</VIcon>
          soporte@facilcontabilidad.com
        </div>
      </VCardText>

      <VCardActions class="justify-center pb-5">
        <VBtn variant="flat" color="primary" @click="rucDuplicateDialog = false">
          Entendido
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style scoped>
.ed { background: #FAFAF8 !important; }

.ed-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 20px 16px;
}
.ed-header__left { display: flex; align-items: center; gap: 12px; }
.ed-header__icon {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  background: rgba(212,136,74,.08); border-radius: 10px; flex-shrink: 0;
}
.ed-header__title { font-size: 16px; font-weight: 600; color: #2C3555; }
.ed-header__sub { font-size: 12px; color: rgba(44,53,85,.45); }

.ed-body {
  padding: 20px; overflow-y: auto; height: calc(100% - 80px);
}

.ed-group { margin-bottom: 24px; }
.ed-group__title {
  display: flex; align-items: center; font-size: 12.5px; font-weight: 600;
  color: rgba(44,53,85,.6); margin-bottom: 14px;
}

.ed-field { margin-bottom: 10px; }
.ed-field :deep(.v-field) { border-radius: 8px !important; font-size: 13.5px; }
.ed-field :deep(.v-field--focused) { border-color: #D4884A !important; }
.ed-field :deep(.v-field--disabled) { background: rgba(44,53,85,.03); }
.ed-field :deep(.v-field--error) { border-color: #E53935 !important; }

.ed-field--ruc { position: relative; }

.ed-ruc-ok {
  display: flex; align-items: center; gap: 4px;
  position: absolute; right: 12px; top: 18px;
  font-size: 11px; font-weight: 600; color: #477130;
  background: rgba(71,113,48,.06); padding: 2px 8px; border-radius: 4px;
}

.ed-submit {
  display: flex; gap: 10px; justify-content: flex-end;
  padding-top: 16px; border-top: 1px solid rgba(44,53,85,.06);
}

/* Dialog */
.ed-dialog { border-radius: 14px !important; }

.ed-dialog__icon {
  width: 56px; height: 56px; margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(229,57,53,.08); border-radius: 50%;
}

.ed-dialog__title { font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #2C3555; }
.ed-dialog__text { font-size: 14px; color: rgba(44,53,85,.65); margin-bottom: 16px; line-height: 1.5; }
.ed-dialog__text strong { color: #2C3555; }

.ed-dialog__info {
  display: flex; align-items: flex-start; gap: 6px; text-align: left;
  padding: 12px 14px; background: rgba(44,53,85,.03);
  border: 1px solid rgba(44,53,85,.06); border-radius: 8px;
  font-size: 12.5px; color: rgba(44,53,85,.65); line-height: 1.6;
  margin-bottom: 12px;
}

.ed-dialog__info strong { color: #2C3555; }

.ed-dialog__contact {
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: rgba(44,53,85,.4);
}
</style>
