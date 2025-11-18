<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useLayouts } from '@layouts'
import {
  HorizontalNavLink,
  HorizontalNavPopper,
} from '@layouts/components'
import { config } from '@layouts/config'
import { canViewNavMenuGroup } from '@layouts/plugins/casl'
import { isNavGroupActive } from '@layouts/utils'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  childrenAtEnd: {
    type: Boolean,
    default: false,
  },
  isSubItem: {
    type: Boolean,
    default: false,
  },
})

defineOptions({ name: 'HorizontalNavGroup' })

const route = useRoute()
const router = useRouter()
const { isAppRtl } = useLayouts()
const { t } = useI18n({ useScope: 'global' })

const isGroupActive = ref(false)

// 🔹 Texto del título (i18n opcional)
const titleText = computed(() => {
  if (config.app?.enableI18n && typeof props.item?.title === 'string')
    return t(props.item.title)

  return props.item.title
})

watch(
  () => route.path,
  () => {
    const active = isNavGroupActive(props.item.children, router)
    isGroupActive.value = active
  },
  { immediate: true },
)
</script>

<template>
  <HorizontalNavPopper
    v-if="canViewNavMenuGroup(item)"
    :is-rtl="isAppRtl"
    class="nav-group"
    tag="li"
    content-container-tag="ul"
    :class="[
      {
        active: isGroupActive,
        'children-at-end': childrenAtEnd,
        'sub-item': isSubItem,
        disabled: item.disable,
      },
    ]"
    :popper-inline-end="childrenAtEnd"
  >
    <div class="nav-group-label">
      <Component
        :is="config.app.iconRenderer || 'div'"
        class="nav-item-icon"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
      />

      <span class="nav-item-title">
        {{ titleText }}
      </span>

      <Component
        :is="config.app.iconRenderer || 'div'"
        v-bind="config.icons.chevronDown"
        class="nav-group-arrow"
      />
    </div>

    <template #content>
      <Component
        :is="'children' in child ? 'HorizontalNavGroup' : HorizontalNavLink"
        v-for="child in item.children"
        :key="child.title"
        :item="child"
        children-at-end
        is-sub-item
      />
    </template>
  </HorizontalNavPopper>
</template>

<style lang="scss">
.layout-horizontal-nav {
  .nav-group {
    .nav-group-label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .popper-content {
      z-index: 1;

      > div {
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>
