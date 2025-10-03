<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const nombre = ref('')
const ruc = ref('')
const email = ref('')
const gerente = ref('')
const direccion = ref('')
const telefono = ref('')
const ciudad = ref('')
const provincia = ref('')

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: ruc.value,
        nombre: nombre.value,
        ruc: ruc.value,
        email: email.value,
        gerente: gerente.value,
        direccion: direccion.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
        provincia: provincia.value,
        origen: 'txtsupercias',
        userId: JSON.parse(sessionStorage.getItem('userData')).id,
        activo: 1,
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <div class="d-flex align-center pa-6 pb-1">
      <h6 class="text-h6">
        Nueva Empresa
      </h6>

      <VSpacer />

      <!-- 👉 Close btn -->
      <VBtn
        variant="tonal"
        color="default"
        icon
        size="32"
        class="rounded"
        @click="closeNavigationDrawer"
      >
        <VIcon
          size="18"
          icon="tabler-x"
        />
      </VBTn>
    </div>

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <VTextField
                  v-model="nombre"
                  :rules="[requiredValidator]"
                  label="Nombre"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <VTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <!-- 👉 company -->
              <VCol cols="12">
                <VTextField
                  v-model="ruc"
                  :rules="[requiredValidator]"
                  label="ruc"
                />
              </VCol>

              <!-- 👉 Country -->
              <VCol cols="12">
                <VTextField
                  v-model="gerente"
                  :rules="[requiredValidator]"
                  label="gerente"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="12">
                <VTextField
                  v-model="direccion"
                  type="text"
                  :rules="[requiredValidator]"
                  label="direccion"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="12">
                <VTextField
                  v-model="telefono"
                  type="text"
                  :rules="[requiredValidator]"
                  label="telefono"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="12">
                <VTextField
                  v-model="ciudad"
                  type="text"
                  :rules="[requiredValidator]"
                  label="ciudad"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="12">
                <VTextField
                  v-model="provincia"
                  type="text"
                  :rules="[requiredValidator]"
                  label="provincia"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Crear Empresa
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  Cancelar
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
