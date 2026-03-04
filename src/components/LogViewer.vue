<script setup>
import { onMounted } from "vue"
import { useLogStore } from "@/@store/log.store"

const store = useLogStore()

onMounted(() => {
  store.load()
})
</script>

<template>
  <VCard class="mt-6">
    <VCardTitle>Registros del Sistema (Logs)</VCardTitle>

    <VContainer>
      <VRow>
        <VCol cols="12" v-for="l in store.logs" :key="l.id">
          <VCard class="my-2" :color="l.level === 'error' ? 'red-lighten-4' : ''">
            <VCardText>
              <strong>[{{ l.level.toUpperCase() }}]</strong>
              {{ l.timestamp }}
              <br/>
              <strong>Mensaje:</strong> {{ l.message }}
              <br/>
              <strong>Meta:</strong>
              <pre>{{ JSON.stringify(l.meta, null, 2) }}</pre>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <VCardActions>
      <VBtn color="red" @click="store.clear()">Limpiar Logs</VBtn>
    </VCardActions>
  </VCard>
</template>
