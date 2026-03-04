<script setup>
import { onErrorCaptured } from "vue"
import { useErrorBoundary } from "@/composables/useErrorBoundary"

const props = defineProps({
  componentName: { type: String, required: true },
})

const { hasError, errorInfo, captureError, reset } = useErrorBoundary(props.componentName)

// Captura errores usando Composition API
onErrorCaptured(err => {
  captureError(err)

  return false
})
</script>

<template>
  <div
    v-if="hasError"
    class="pa-4"
  >
    <VAlert
      type="error"
      title="Error en Componente"
    >
      <p>Ocurrió un problema cargando <strong>{{ props.componentName }}</strong>.</p>
      <p class="text-caption">
        {{ errorInfo?.toString() }}
      </p>

      <VBtn
        color="primary"
        class="mt-4"
        @click="reset"
      >
        Reintentar
      </VBtn>
    </VAlert>
  </div>

  <div v-else>
    <slot />
  </div>
</template>
