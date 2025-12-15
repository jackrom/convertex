<script setup>
import { useLogsDashboard } from "@/composables/useLogsDashboard"

const { selectedLog, detailOpen } = useLogsDashboard()
</script>

<template>
  <VNavigationDrawer
    v-model="detailOpen"
    location="right"
    width="450"
    temporary
  >
    <VCard flat>
      <VCardTitle>Detalle del Log</VCardTitle>
      <VCardText>
        <p><strong>Fecha:</strong> {{ selectedLog?.timestamp }}</p>
        <p><strong>Nivel:</strong> {{ selectedLog?.level }}</p>
        <p><strong>Mensaje:</strong> {{ selectedLog?.message }}</p>

        <p><strong>Meta:</strong></p>
        <pre>{{ selectedLog?.meta }}</pre>
      </VCardText>
    </VCard>
  </VNavigationDrawer>
</template>
