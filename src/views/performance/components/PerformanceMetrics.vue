<script setup>
import { computed } from "vue"
import { usePerformanceStore } from "@/@store/performance.store"

const store = usePerformanceStore()

const sortedComponents = computed(() =>
  [...(store.componentTimes ?? [])].sort((a, b) => b.duration - a.duration),
)

const sortedApi = computed(() =>
  [...(store.apiTimes ?? [])].sort((a, b) => b.duration - a.duration),
)

const sortedTxt = computed(() =>
  [...(store.txtImportTimes ?? [])].sort((a, b) => b.duration - a.duration),
)

const sortedExport = computed(() =>
  [...(store.exportTimes ?? [])].sort((a, b) => b.duration - a.duration),
)
</script>

<template>
  <VCard class="mt-4 pa-4">
    <VCardTitle>Métricas de Procesos</VCardTitle>

    <VCardSubtitle>
      Tiempos registrados por procesos internos de Convertex
    </VCardSubtitle>

    <VRow class="mt-4">
      <!-- COMPONENTES -->
      <VCol cols="12" md="6">
        <VCard class="pa-4">
          <VCardTitle>Tiempos de Render de Componentes</VCardTitle>

          <VList density="compact">
            <VListItem
              v-for="c in sortedComponents"
              :key="c.timestamp + c.component"
            >
              <VListItemTitle>
                {{ c.component }} — <strong>{{ c.duration.toFixed(1) }}ms</strong>
              </VListItemTitle>
            </VListItem>

            <VListItem v-if="sortedComponents.length === 0">
              <VListItemTitle>No hay registros de componentes aún</VListItemTitle>
            </VListItem>
          </VList>
        </VCard>
      </VCol>

      <!-- API -->
      <VCol cols="12" md="6">
        <VCard class="pa-4">
          <VCardTitle>Latencia de Llamadas API</VCardTitle>

          <VList density="compact">
            <VListItem
              v-for="a in sortedApi"
              :key="a.timestamp + a.endpoint"
            >
              <VListItemTitle>
                {{ a.endpoint }} — <strong>{{ a.duration.toFixed(1) }}ms</strong>
              </VListItemTitle>
            </VListItem>

            <VListItem v-if="sortedApi.length === 0">
              <VListItemTitle>No hay registros de API aún</VListItemTitle>
            </VListItem>
          </VList>
        </VCard>
      </VCol>

      <!-- TXT -->
      <VCol cols="12" md="6">
        <VCard class="pa-4 mt-4">
          <VCardTitle>Tiempo de Importación TXT</VCardTitle>

          <VList density="compact">
            <VListItem
              v-for="t in sortedTxt"
              :key="t.timestamp"
            >
              <VListItemTitle>
                Importación — <strong>{{ t.duration.toFixed(1) }}ms</strong>
              </VListItemTitle>
            </VListItem>

            <VListItem v-if="sortedTxt.length === 0">
              <VListItemTitle>No hay importaciones registradas</VListItemTitle>
            </VListItem>
          </VList>
        </VCard>
      </VCol>

      <!-- EXPORT -->
      <VCol cols="12" md="6">
        <VCard class="pa-4 mt-4">
          <VCardTitle>Tiempo de Exportación (PDF/Excel)</VCardTitle>

          <VList density="compact">
            <VListItem
              v-for="e in sortedExport"
              :key="e.timestamp"
            >
              <VListItemTitle>
                Exportación {{ e.type?.toUpperCase() }} —
                <strong>{{ e.duration.toFixed(1) }}ms</strong>
              </VListItemTitle>
            </VListItem>

            <VListItem v-if="sortedExport.length === 0">
              <VListItemTitle>No hay exportaciones registradas</VListItemTitle>
            </VListItem>
          </VList>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
