<script setup>
import { avatarText } from '@core/utils/formatters'

const props = defineProps({
  notifications: {
    type: Array,
    required: true,
  },
  badgeProps: {
    type: null,
    required: false,
    default: undefined,
  },
  location: {
    type: null,
    required: false,
    default: 'bottom end',
  },
})

const emit = defineEmits(['click:readAllNotifications'])

const router = useRouter()

const navigateToUserList = () => {
  // this.$router.push({ path: 'apps/user/list' })
  router.replace('/apps/user/list')
}
</script>

<template>
  <VBadge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <VBtn
      icon
      variant="text"
      color="default"
      size="small"
    >
      <VBadge
        :model-value="!!props.notifications.length"
        color="error"
        :content="props.notifications.length"
      >
        <VIcon
          icon="tabler-bell"
          size="24"
        />
      </VBadge>

      <VMenu
        activator="parent"
        width="380px"
        :location="props.location"
        offset="14px"
      >
        <VList class="py-0">
          <!-- 👉 Header -->
          <VListItem
            title="Registros del usuario"
            class="notification-section"
            height="48px"
          >
            <template #append>
              <VChip
                v-if="props.notifications.length"
                color="primary"
                size="small"
              >
                {{ props.notifications.length }} Nuevo {{ (props.notifications.length > 1) ? 's' : '' }}
              </VChip>
            </template>
          </VListItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <template
            v-for="notification in props.notifications"
            :key="notification.id"
          >
            <VListItem
              :title="`EMPRESA: ${notification.nombre}`"
              :subtitle="`RUC: ${notification.ruc} FUE ELIMINADA`"
              link
              lines="one"
              min-height="66px"
            >
              <!-- Slot: Prepend -->
              <!-- Handles Avatar: Image, Icon, Text -->
              <template #prepend>
                <VListItemAction start>
                  <VAvatar
                    color="#ff2825"
                    icon="tabler-playlist-x"
                    size="40"
                    variant="tonal"
                  >
                    <span>EMPRESA ELIMINADA</span>
                  </VAvatar>
                </VListItemAction>
              </template>
              <!-- Slot: Append -->
              <small class="whitespace-no-wrap text-medium-emphasis">el {{ notification.createdAt }}</small>
            </VListItem>
            <VDivider />
          </template>

          <!-- 👉 Footer -->
          <VListItem class="notification-section">
            <VBtn
              block
              @click="navigateToUserList"
            >
              VER TODOS LOS REGISTROS
            </VBtn>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
