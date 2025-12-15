<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
  'empresa-creada',
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
const route = useRoute()
const router = useRouter()

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
    if (!valid)
      return

    const userDataSession = JSON.parse(sessionStorage.getItem('userData') || '{}')

    emit('userData', {
      id: ruc.value,             // usamos el RUC como id (coherente con IndexedDB keyPath 'id')
      nombre: nombre.value,
      ruc: ruc.value,
      email: email.value,
      gerente: gerente.value,
      direccion: direccion.value,
      telefono: telefono.value,
      ciudad: ciudad.value,
      provincia: provincia.value,
      origen: 'convertex',
      userid: userDataSession.keycloak_user_id,
    })

    emit('update:isDrawerOpen', false)

    nextTick(() => {
      refForm.value?.reset()
      refForm.value?.resetValidation()
    })

    // Avisar al padre para que refresque empresas (desde API + sincronizar IndexedDB)
    setTimeout(() => {
      emit('empresa-creada', true)
    }, 1500)
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
      </VBtn>
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
              <!-- 👉 Nombre -->
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

              <!-- 👉 RUC -->
              <VCol cols="12">
                <VTextField
                  v-model="ruc"
                  :rules="[requiredValidator]"
                  label="RUC"
                />
              </VCol>

              <!-- 👉 Gerente -->
              <VCol cols="12">
                <VTextField
                  v-model="gerente"
                  :rules="[requiredValidator]"
                  label="Gerente"
                />
              </VCol>

              <!-- 👉 Dirección -->
              <VCol cols="12">
                <VTextField
                  v-model="direccion"
                  type="text"
                  :rules="[requiredValidator]"
                  label="Dirección"
                />
              </VCol>

              <!-- 👉 Teléfono -->
              <VCol cols="12">
                <VTextField
                  v-model="telefono"
                  type="text"
                  :rules="[requiredValidator]"
                  label="Teléfono"
                />
              </VCol>

              <!-- 👉 Ciudad -->
              <VCol cols="12">
                <VTextField
                  v-model="ciudad"
                  type="text"
                  :rules="[requiredValidator]"
                  label="Ciudad"
                />
              </VCol>

              <!-- 👉 Provincia -->
              <VCol cols="12">
                <VTextField
                  v-model="provincia"
                  type="text"
                  :rules="[requiredValidator]"
                  label="Provincia"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
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
