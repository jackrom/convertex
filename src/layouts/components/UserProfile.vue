<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useAbility } from '@casl/vue'
import { initKeycloak, getKeycloak, isKeycloakInitialized, stopKeycloakRefresh } from '@/plugins/keycloak/keycloak'

const router = useRouter()
const ability = useAbility()

const rawUserData = sessionStorage.getItem('userData')
const userData = rawUserData ? JSON.parse(rawUserData) : null

const userName = computed(() => {
  return (
    sessionStorage.getItem('name') ||
    userData?.profile?.name ||
    userData?.username ||
    'Usuario'
  )
})

const userRoleLabel = computed(() => 'Usuario')

const clearLocalSession = () => {
  ability.update([])

  sessionStorage.removeItem('userData')
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('email')
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('preferred_username')
  sessionStorage.removeItem('sub')
  sessionStorage.removeItem('userAbilities')
}

const openKeycloakProfile = async () => {
  try {
    if (!isKeycloakInitialized()) {
      await initKeycloak('check-sso')
    }

    const kc = getKeycloak()

    if (!kc) throw new Error('No existe instancia de Keycloak')

    await kc.accountManagement()
  } catch (err) {
    console.error('Error al abrir el perfil de Keycloak:', err)
  }
}

const buildManualLogoutUrl = () => {
  const redirectUri = encodeURIComponent(window.location.origin)

  return `https://login.facilcontabilidad.org/realms/ApiFC/protocol/openid-connect/logout?client_id=convertex-spa&post_logout_redirect_uri=${redirectUri}`
}

const logout = async () => {
  ability.update([])

  sessionStorage.removeItem('userData')
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('email')
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('preferred_username')
  sessionStorage.removeItem('sub')
  sessionStorage.removeItem('userAbilities')

  try {
    const kc = getKeycloak()

    if (kc && isKeycloakInitialized()) {
      stopKeycloakRefresh()

      await kc.logout({
        redirectUri: window.location.origin,
      })

      return
    }

    window.location.href = buildManualLogoutUrl()
  } catch (err) {
    console.error('Error en logout de Keycloak', err)
    window.location.href = buildManualLogoutUrl()
  }
}
</script>

<template>
  <VBadge
    v-if="userData"
    dot
    bordered
    location="bottom right"
    offset-x="1"
    offset-y="0"
    color="success"
  >
    <VAvatar
      size="38"
      class="cursor-pointer"
      :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
    >
      <VImg
        v-if="userData && userData.avatar"
        :src="userData.avatar"
      />
      <VIcon
        v-else
        icon="tabler-user"
      />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="240"
        location="bottom end"
        offset="12px"
      >
        <VList>
          <VListItem>
            <div class="d-flex gap-2 align-center">
              <VListItemAction>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                  bordered
                >
                  <VAvatar
                    :color="!(userData && userData.avatar) ? 'primary' : undefined"
                    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
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

              <div>
                <h6 class="text-h6 font-weight-medium">
                  {{ userData.fullName || userData.username }}
                </h6>
                <VListItemSubtitle class="text-capitalize text-disabled">
                  {{ userData.role }}
                </VListItemSubtitle>
              </div>
            </div>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                :to="item.to"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template
                  v-if="item.badgeProps"
                  #append
                >
                  <VBadge
                    rounded="sm"
                    class="me-3"
                    v-bind="item.badgeProps"
                  />
                </template>
              </VListItem>

              <VDivider
                v-else
                class="my-2"
              />
            </template>

            <div class="px-4 py-2">
              <VBtn
                block
                size="small"
                color="error"
                append-icon="tabler-logout"
                @click="logout"
              >
                Logout
              </VBtn>
            </div>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>

<style lang="scss" scoped>
.v-avatar.v-avatar--density-default {
  margin-top: 8px;
}
</style>
