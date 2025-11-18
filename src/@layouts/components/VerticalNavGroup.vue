<script setup>
import { computed, inject, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import {
  injectionKeyIsVerticalNavHovered,
  useLayouts,
} from '@layouts'
import {
  TransitionExpand,
  VerticalNavLink,
} from '@layouts/components'
import { config } from '@layouts/config'
import { canViewNavMenuGroup } from '@layouts/plugins/casl'
import {
  isNavGroupActive,
  openGroups,
} from '@layouts/utils'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineOptions({ name: 'VerticalNavGroup' })

const route = useRoute()
const router = useRouter()
const { width: windowWidth } = useWindowSize()
const { isVerticalNavMini } = useLayouts()
const { t } = useI18n({ useScope: 'global' })

const hideTitleAndBadge = isVerticalNavMini(windowWidth)
const isVerticalNavHovered = inject(injectionKeyIsVerticalNavHovered, ref(false))

const isGroupActive = ref(false)
const isGroupOpen = ref(false)

// --- helpers i18n para título y badge ---

const isTitleI18nKey = computed(
  () => config.app?.enableI18n && typeof props.item?.title === 'string' && props.item.title.includes('.'),
)

const titleText = computed(() => {
  if (isTitleI18nKey.value)
    return t(props.item.title)

  return props.item.title
})

const isBadgeI18nKey = computed(
  () => config.app?.enableI18n && typeof props.item?.badgeContent === 'string' && props.item.badgeContent.includes('.'),
)

const badgeText = computed(() => {
  if (!props.item?.badgeContent)
    return ''

  if (isBadgeI18nKey.value)
    return t(props.item.badgeContent)

  return props.item.badgeContent
})

// --- lógica de grupos ---

const isAnyChildOpen = children =>
  children.some(child => {
    let result = openGroups.value.includes(child.title)

    if ('children' in child)
      result = isAnyChildOpen(child.children) || result

    return result
  })

const collapseChildren = children => {
  children.forEach(child => {
    if ('children' in child)
      collapseChildren(child.children)

    openGroups.value = openGroups.value.filter(group => group !== child.title)
  })
}

watch(
  () => route.path,
  () => {
    const active = isNavGroupActive(props.item.children, router)

    isGroupOpen.value = active && !isVerticalNavMini(windowWidth, isVerticalNavHovered).value
    isGroupActive.value = active
  },
  { immediate: true },
)

watch(
  isGroupOpen,
  val => {
    const idx = openGroups.value.indexOf(props.item.title)

    if (val && idx === -1) {
      openGroups.value.push(props.item.title)
    } else if (!val && idx !== -1) {
      openGroups.value.splice(idx, 1)
      collapseChildren(props.item.children)
    }
  },
  { immediate: true },
)

watch(
  openGroups,
  val => {
    const lastOpenedGroup = val[val.length - 1]

    if (lastOpenedGroup === props.item.title)
      return

    const active = isNavGroupActive(props.item.children, router)

    if (active)
      return

    if (isAnyChildOpen(props.item.children))
      return

    isGroupOpen.value = active
    isGroupActive.value = active
  },
  { deep: true },
)

watch(
  isVerticalNavMini(windowWidth, isVerticalNavHovered),
  val => {
    isGroupOpen.value = val ? false : isGroupActive.value
  },
)
</script>

<template>
  <li
    v-if="canViewNavMenuGroup(item)"
    class="nav-group"
    :class="[
      {
        active: isGroupActive,
        open: isGroupOpen,
        disabled: item.disable,
      },
    ]"
  >
    <div
      class="nav-group-label"
      @click="isGroupOpen = !isGroupOpen"
    >
      <Component
        :is="config.app.iconRenderer || 'div'"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
        class="nav-item-icon"
      />

      <TransitionGroup name="transition-slide-x">
        <!-- 👉 Título -->
        <span
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
        >
          {{ titleText }}
        </span>

        <!-- 👉 Badge -->
        <span
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ badgeText }}
        </span>

        <!-- 👉 Flecha -->
        <Component
          :is="config.app.iconRenderer || 'div'"
          v-show="!hideTitleAndBadge"
          v-bind="config.icons.chevronRight"
          key="arrow"
          class="nav-group-arrow"
        />
      </TransitionGroup>
    </div>

    <TransitionExpand>
      <ul
        v-show="isGroupOpen"
        class="nav-group-children"
      >
        <Component
          :is="'children' in child ? 'VerticalNavGroup' : VerticalNavLink"
          v-for="child in item.children"
          :key="child.title"
          :item="child"
        />
      </ul>
    </TransitionExpand>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-group {
    &-label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
