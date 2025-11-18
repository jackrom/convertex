<script setup>
import { computed } from 'vue'
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import { getKeycloak } from '@/plugins/keycloak/keycloak'

const router = useRouter()
const ability = useAppAbility()

const rawUserData = sessionStorage.getItem('userData')
const userData = rawUserData ? JSON.parse(rawUserData) : null

// ─────────────────────────────
// userData seguro
// ─────────────────────────────
const userName = computed(() => {
  // intenta tomar el nombre “bonito” del perfil,
  // si no, el username, y como último recurso el valor guardado en sessionStorage
  return (
    sessionStorage.getItem('name') ||
    userData?.profile?.name ||
    userData?.username ||
    'Usuario'
  )
})

const userRoleLabel = computed(() => 'Usuario')

const openKeycloakProfile = async () => {
  const kc = getKeycloak()

  if (!kc) {
    console.error('Keycloak no inicializado')

    return
  }

  if (typeof kc.accountManagement !== 'function') {
    console.error('kc.accountManagement no es una función. Objeto kc:', kc)

    return
  }

  try {
    // esto redirige al “Account Console” de Keycloak
    await kc.accountManagement()
  } catch (err) {
    console.error('Error al abrir el perfil de Keycloak:', err)
  }
}

// ─────────────────────────────
// Logout con Keycloak
// ─────────────────────────────
const logout = async () => {
  // 1) Limpiar storage del frontend
  sessionStorage.removeItem('userData')
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('userAbilities')
  localStorage.removeItem('userAbilities') // por si acaso

  // 2) Resetear CASL
  ability.update(initialAbility)

  // 3) Logout en Keycloak
  const kc = getKeycloak && getKeycloak()

  if (kc) {
    try {
      await kc.logout({
        redirectUri: window.location.origin, // o `${window.location.origin}/login`
      })

      // Si todo va bien, Keycloak redirige y no seguimos ejecutando código aquí
      return
    } catch (err) {
      console.error('Error en logout de Keycloak', err)
    }
  }

  // 4) Fallback: si no hay kc o falló el logout, volvemos al login del front
  router.push('/login')
}
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg
        v-if="userData && userData.avatar"
        :src="userData.avatar"
      />
      <VIcon
        v-else
        icon="tabler-user"
      />

      <!-- Menu solo si tenemos userData -->
      <VMenu
        v-if="userData"
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg
                      v-if="userData && userData.avatar"
                      :src="userData.avatar"
                    />
                    <VIcon
                      v-else
                      icon="tabler-user"
                    />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ userName }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userRoleLabel }}</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem
            link
            @click="openKeycloakProfile"
          >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user"
                size="22"
              />
            </template>

            <VListItemTitle>Perfil</VListItemTitle>
          </VListItem>

          <!-- 👉 Settings -->
          <VListItem :to="{ name: 'pages-account-settings-tab', params: { tab: 'account' } }">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-settings"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <!-- 👉 Pricing -->
          <VListItem :to="{ name: 'pages-pricing' }">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-currency-dollar"
                size="22"
              />
            </template>

            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem>

          <!-- 👉 FAQ -->
          <VListItem :to="{ name: 'pages-faq' }">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-help"
                size="22"
              />
            </template>

            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem
            link
            @click="logout"
          >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VAvatar>
  </VBadge>
</template>
