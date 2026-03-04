<script setup>
import { useAlertStore } from "@/@store/alert.store"

const alert = useAlertStore()
</script>

<template>
  <VSnackbar
    v-model="alert.show"
    :color="alert.color"
    :timeout="alert.timeout"
    rounded="lg"
    location="top"
  >
    {{ alert.message }}
  </VSnackbar>
</template>
