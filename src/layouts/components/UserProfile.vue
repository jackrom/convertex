<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useAbility } from '@casl/vue'
import { initKeycloak, getKeycloak } from '@/plugins/keycloak' // usa el barrel correcto

const router = useRouter()
const ability = useAbility()

// TODO: Get type from backend
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
  await initKeycloak()
  const kc = getKeycloak()

  try {
    await kc.accountManagement()
  } catch (err) {
    console.error('Error al abrir el perfil de Keycloak:', err)
  }
}

const logout = async () => {
  // 1) Reset CASL primero (ok)
  ability.update([])

  // 2) Limpia storage (ok)
  sessionStorage.removeItem('userData')
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('userAbilities')
  localStorage.removeItem('userAbilities')

  try {
    await initKeycloak()

    const kc = getKeycloak()

    await kc.logout({
      redirectUri: window.location.origin, // o `${window.location.origin}/login`
    })
  } catch (err) {
    console.error('Error en logout de Keycloak', err)
    await router.push('/login')
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
