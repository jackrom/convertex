<script setup>
import { computed } from "vue"
import { useLogStore } from "@/@store/log.store"

const store = useLogStore()

const data = computed(() => {
  const counts = {}
  for (const log of store.logs) {
    const date = log.timestamp.split("T")[0]

    counts[date] = (counts[date] || 0) + 1
  }

  return Object.entries(counts).map(([date, count]) => ({ date, count }))
})
</script>

<template>
  <VCard class="mt-4">
    <VCardTitle>Actividad por Fecha</VCardTitle>
    <VCardText>
      <VChart
        type="line"
        :data="{
          labels: data.map(i => i.date),
          datasets: [{ label: 'Logs', data: data.map(i => i.count) }]
        }"
      />
    </VCardText>
  </VCard>
</template>
