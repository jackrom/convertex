<script setup>
import { onMounted } from 'vue'
import { getKeycloak } from '@/plugins/keycloak/keycloak'

const keycloak = getKeycloak()

onMounted(async () => {
  // await keycloak.login({ redirectUri: window.location.origin })
})
</script>

<template>
  <div class="pa-6">Redirigiendo a Keycloak...</div>
</template>
