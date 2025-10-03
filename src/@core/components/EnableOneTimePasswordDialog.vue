<script setup>
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"

const props = defineProps({
  mobileNumber: {
    type: Number,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'submit',
])

const route = useRoute()
const router = useRouter()

const periodoListStore = usePeriodoListStore()

const periodo = ref(structuredClone(toRaw(props.mobileNumber)))

const formSubmit = () => {
  console.log(periodo.value)
  if (periodo.value) {
    emit('submit', periodo.value)
    emit('update:isDialogVisible', false)
    deletePeriodoDB(periodo.value)
  }
}

const deletePeriodoDB = id => {
  periodoListStore.eliminarPeriodoSeleccionado(id).then(res => {
    console.log(res)

    router.replace('/pages/periodos/list')
  })
}

const resetPeriodoIdNumber = () => {
  periodo.value = structuredClone(toRaw(props.mobileNumber))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    max-width="600"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-15">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 font-weight-medium ">
          Eliminar Periodo
        </VCardTitle>
        <VCardSubtitle class="mt-3">
          Sepa que esta acción no es reversible
        </VCardSubtitle>
      </VCardItem>

      <VCardText class="pt-6">
        <p class="mb-6">
          Esta seguro de querer eliminar el periodo y todo lo asociado a este?
        </p>

        <VForm @submit.prevent="() => {}">
          <VTextField
            v-model="periodo"
            dirty
            name="periodo"
            type="number"
            label="Periodo ID"
            placeholder=""
            class="mb-5"
            disabled
          />

          <VBtn
            type="submit"
            class="me-3"
            @click="formSubmit"
          >
            Confirmar
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
