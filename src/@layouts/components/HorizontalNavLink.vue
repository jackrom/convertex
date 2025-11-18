<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'
import {
  getComputedNavLinkToProp,
  isNavLinkActive,
} from '@layouts/utils'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isSubItem: {
    type: Boolean,
    default: false,
  },
})

useLayouts() // se mantiene por si más adelante quieres usar algo, ahora no necesitamos dynamicI18nProps

const { t } = useI18n({ useScope: 'global' })

// 🔹 Texto del título (i18n opcional)
const titleText = computed(() => {
  if (config.app?.enableI18n && typeof props.item?.title === 'string')
    return t(props.item.title)

  return props.item.title
})
</script>

<template>
  <li
    v-if="can(item.action, item.subject) ?? true"
    class="nav-link"
    :class="[
      {
        'sub-item': props.isSubItem,
        disabled: item.disable,
      },
    ]"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
      :class="{
        'router-link-active router-link-exact-active': isNavLinkActive(item, $router),
      }"
    >
      <Component
        :is="config.app.iconRenderer || 'div'"
        class="nav-item-icon"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
      />

      <span class="nav-item-title">
        {{ titleText }}
      </span>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-horizontal-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
