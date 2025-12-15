<script setup>
import { ref } from "vue"
import { useEmpresaStore } from "@/@store/empresa.store"
import { requiredValidator, emailValidator } from "@validators"

const props = defineProps({
  isDrawerOpen: Boolean,
})

const emit = defineEmits(["update:isDrawerOpen",
  "empresaCreada"])

const store = useEmpresaStore()
const refForm = ref()

const form = ref({
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

const close = () => {
  emit("update:isDrawerOpen", false)
  refForm.value?.reset()
}

const onSubmit = async () => {
  const valid = await refForm.value.validate()

  if (!valid) return

  await store.add(form.value)
  emit("empresaCreada")
  close()
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    @update:model-value="val => emit('update:isDrawerOpen', val)"
    location="end"
    width="400"
    temporary
  >
    <div class="d-flex align-center pa-6">
      <h6 class="text-h6">Nueva Empresa</h6>
      <VSpacer />
      <VBtn icon variant="text" @click="close">
        <VIcon icon="tabler-x"/>
      </VBtn>
    </div>

    <VForm ref="refForm" @submit.prevent="onSubmit">
      <VContainer>
        <VRow>
          <VCol cols="12">
            <VTextField v-model="form.nombre" label="Nombre" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.email" label="Email" :rules="[requiredValidator, emailValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.ruc" label="RUC" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.gerente" label="Gerente" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.direccion" label="Dirección" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.telefono" label="Teléfono" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.ciudad" label="Ciudad" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VTextField v-model="form.provincia" label="Provincia" :rules="[requiredValidator]" />
          </VCol>

          <VCol cols="12">
            <VBtn type="submit" class="w-100">Crear Empresa</VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </VForm>
  </VNavigationDrawer>
</template>
