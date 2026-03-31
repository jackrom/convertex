<script setup>
import { layoutConfig } from '@layouts'
import { can } from '@layouts/plugins/casl'
import { useLayoutConfigStore } from '@layouts/stores/config'
import { getDynamicI18nProps } from '@layouts/utils'

const props = defineProps({
  item: {
    type: null,
    required: true,
  },
})

const configStore = useLayoutConfigStore()
const shallRenderIcon = configStore.isVerticalNavMini()
</script>

<template>
  <li
    v-if="can(item.action, item.subject)"
    class="nav-section-title"
  >
    <div class="title-wrapper">
      <Transition name="vertical-nav-section-title" mode="out-in">
        <Component
          :is="shallRenderIcon ? layoutConfig.app.iconRenderer : layoutConfig.app.i18n.enable ? 'i18n-t' : 'span'"
          :key="shallRenderIcon"
          :class="shallRenderIcon ? 'placeholder-icon' : 'title-text'"
          v-bind="{ ...layoutConfig.icons.sectionTitlePlaceholder, ...getDynamicI18nProps(item.heading, 'span') }"
        >
          {{ !shallRenderIcon ? item.heading : null }}
        </Component>
      </Transition>
    </div>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav .nav-section-title {
  list-style: none;
  padding: 16px 22px 4px;

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: '';
      display: block;
      width: 14px;
      height: 1px;
      background: #dde1e7;
      flex-shrink: 0;
    }
  }

  .title-text {
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    // Gris claro legible sobre fondo blanco
    color: #b0b8c6;
    font-family: "DM Sans", -apple-system, sans-serif;
    white-space: nowrap;
  }

  .placeholder-icon {
    opacity: 0.2;
  }
}
</style>
