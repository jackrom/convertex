<script setup>
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"

const props = defineProps({
  confirmationMsg: {
    type: String,
    required: true,
  },
  idEmpresa: {
    type: String,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'confirm',
])

const route = useRoute()
const router = useRouter()
const empresaListStore = useEmpresaListStore()

const updateModelValue = val => {
  emit('update:isDialogVisible', val)
}

const onConfirmation = () => {
  console.log('props.idEmpresa', props.idEmpresa)
  emit('confirm', true)
  updateModelValue(false)

  const dataEmpresa = {
    id: props.idEmpresa,
    userId: JSON.parse(sessionStorage.getItem('userData')).id,
  }

  addCompanyToDeleteTable(dataEmpresa)
  deleteEmpresaDB(props.idEmpresa)
}

const onCancel = () => {
  emit('confirm', false)
  emit('update:isDialogVisible', false)
}

const deleteEmpresaDB = id => {
  empresaListStore.eliminarEmpresaSeleccionada(id).then(res => {
    console.log(res)

    setTimeout(() => {
      emit('empresa-creada', true)
    }, 1000)

    // router.replace('/pages/periodos/list')
  })
}

const addCompanyToDeleteTable = data => {
  empresaListStore.agregarEmpresaEliminadaToDB(data).then(res => {
    console.log(res)
  })
}
</script>

<template>
  <VDialog
    max-width="500"
    :model-value="props.isDialogVisible"
    @update:model-value="updateModelValue"
  >
    <VCard class="text-center px-10 py-6">
      <VCardText>
        <VBtn
          icon
          variant="outlined"
          color="warning"
          class="mb-4"
          style="width: 88px; height: 88px; pointer-events: none;"
        >
          <span class="text-5xl">!</span>
        </VBtn>

        <h6 class="text-lg font-weight-medium">
          {{ props.confirmationMsg }}
        </h6>
      </VCardText>

      <VCardActions class="align-center justify-center gap-2">
        <VBtn
          variant="elevated"
          @click="onConfirmation"
        >
          Confirmar
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          Cancelar
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
