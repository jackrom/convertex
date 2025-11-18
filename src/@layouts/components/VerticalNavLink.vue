<script setup>
import { useWindowSize } from '@vueuse/core'
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
})

const { width: windowWidth } = useWindowSize()
const { isVerticalNavMini } = useLayouts()

// En modo mini ocultamos texto y badge
const hideTitleAndBadge = isVerticalNavMini(windowWidth)
</script>

<template>
  <li
    v-if="can(item.action, item.subject) ?? true"
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
      :class="{ 'router-link-active router-link-exact-active': isNavLinkActive(item, $router) }"
    >
      <!-- Icono -->
      <Component
        :is="config.app.iconRenderer || 'div'"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
        class="nav-item-icon"
      />

      <!-- Texto del link (sin i18n) -->
      <TransitionGroup name="transition-slide-x">
        <span
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
        >
          {{ item.title }}
        </span>

        <!-- Si algún día quieres badge -->
        <span
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ item.badgeContent }}
        </span>
      </TransitionGroup>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
