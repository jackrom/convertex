<script setup>
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { width: windowWidth } = useWindowSize()
const { isVerticalNavMini } = useLayouts()

// Mini-nav => solo icono
const shallRenderIcon = isVerticalNavMini(windowWidth)
</script>

<template>
  <li
    v-if="can(item.action, item.subject) ?? true"
    class="nav-section-title"
  >
    <div class="title-wrapper">
      <Transition
        name="vertical-nav-section-title"
        mode="out-in"
      >
        <!-- eslint-disable vue/no-v-text-v-html-on-component -->
        <Component
          :is="shallRenderIcon ? config.app.iconRenderer : 'span'"
          :key="shallRenderIcon"
          :class="shallRenderIcon ? 'placeholder-icon' : 'title-text'"
          v-bind="shallRenderIcon ? config.icons.sectionTitlePlaceholder : {}"
          v-text="!shallRenderIcon ? item.heading : null"
        />
        <!-- eslint-enable vue/no-v-text-v-html-on-component -->
      </Transition>
    </div>
  </li>
</template>
