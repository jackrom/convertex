<script setup>
import { layoutConfig } from '@layouts'
import { can } from '@layouts/plugins/casl'
import { useLayoutConfigStore } from '@layouts/stores/config'
import {
  getComputedNavLinkToProp,
  getDynamicI18nProps,
  isNavLinkActive,
} from '@layouts/utils'

const props = defineProps({
  item: {
    type: null,
    required: true,
  },
})

const configStore = useLayoutConfigStore()
const hideTitleAndBadge = configStore.isVerticalNavMini()
</script>

<template>
  <li
    v-if="can(item.action, item.subject)"
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
      :class="{
        'router-link-active router-link-exact-active': isNavLinkActive(item, $router),
      }"
    >
      <Component
        :is="layoutConfig.app.iconRenderer || 'div'"
        v-bind="
          item.icon && typeof item.icon === 'object' && item.icon !== null
            ? item.icon
            : layoutConfig.verticalNav.defaultNavItemIconProps || {}
        "
        class="nav-item-icon"
      />
      <TransitionGroup name="transition-slide-x">
        <Component
          :is="layoutConfig.app.i18n.enable ? 'i18n-t' : 'span'"
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
          v-bind="getDynamicI18nProps(item.title, 'span')"
        >
          {{ item.title }}
        </Component>
        <Component
          :is="layoutConfig.app.i18n.enable ? 'i18n-t' : 'span'"
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
          v-bind="getDynamicI18nProps(item.badgeContent, 'span')"
        >
          {{ item.badgeContent }}
        </Component>
      </TransitionGroup>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav .nav-link {
  list-style: none;
  padding: 1px 10px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13.5px;
    font-weight: 500;
    font-family: "DM Sans", -apple-system, sans-serif;
    // Texto oscuro legible sobre fondo claro
    color: #4a5568;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
    position: relative;

    // Quitar pseudo-elementos del tema (círculos de ripple/hover)
    &::before,
    &::after {
      content: none !important;
      display: none !important;
    }

    // Hover — fondo gris muy suave
    &:hover {
      background: #f0f2f5;
      color: #1a202c;

      .nav-item-icon {
        color: #2C3555 !important;
      }
    }

    // Activo — borde amber, sin fondo
    &.router-link-active,
    &.router-link-exact-active {
      background: transparent;
      color: #c97a3a;
      font-weight: 600;
      border: 1.5px solid rgba(212, 136, 74, 0.5);

      // Sin barra lateral (ya tenemos el borde)
      &::before,
      &::after {
        content: none !important;
        display: none !important;
      }

      .nav-item-icon {
        color: #D4884A !important;
      }
    }
  }

  // Ícono — gris medio sobre fondo claro
  .nav-item-icon {
    flex-shrink: 0;
    width: 19px !important;
    height: 19px !important;
    font-size: 17px !important;
    color: #94a3b8 !important;
    transition: color 0.15s ease;
  }

  .nav-item-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nav-item-badge {
    margin-left: auto;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 20px;
    background: rgba(212, 136, 74, 0.12);
    color: #D4884A;
    flex-shrink: 0;
  }

  &.disabled a {
    opacity: 0.35;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
