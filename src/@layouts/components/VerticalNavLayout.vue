<script>
import { useLayouts } from '@layouts'
import { VerticalNav } from '@layouts/components'

export default defineComponent({
  props: {
    navItems: {
      type: Array,
      required: true,
    },
    verticalNavAttrs: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const { y: windowScrollY } = useWindowScroll()
    const { width: windowWidth } = useWindowSize()

    const {
      _layoutClasses: layoutClasses,
      isLessThanOverlayNavBreakpoint,
      isNavbarBlurEnabled,
    } = useLayouts()

    const isOverlayNavActive = ref(false)
    const isLayoutOverlayVisible = ref(false)
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive)

    // Sincronizar overlay visual con estado de nav
    syncRef(isOverlayNavActive, isLayoutOverlayVisible)

    // Ocultar overlay si crece el viewport y ya no aplica modo overlay
    watch(windowWidth, value => {
      if (!isLessThanOverlayNavBreakpoint.value(value) && isLayoutOverlayVisible.value)
        isLayoutOverlayVisible.value = false
    })

    const router = useRouter()
    const shallShowPageLoading = ref(false)

    // ⚠️ Importante: registrar hooks UNA sola vez, no en el render
    const hasContentLoadingSlot = computed(() => !!slots['content-loading'])

    if (hasContentLoadingSlot.value) {
      router.beforeEach(() => {
        // console.info('setting to true')
        shallShowPageLoading.value = true
      })

      router.afterEach(() => {
        // console.info('setting to false')
        // Le damos un pequeño delay si quieres evitar parpadeos
        // setTimeout(() => { shallShowPageLoading.value = false }, 100)
        shallShowPageLoading.value = false
      })
    }

    return () => {
      const verticalNavAttrs = toRef(props, 'verticalNavAttrs')

      const {
        wrapper: verticalNavWrapper,
        wrapperProps: verticalNavWrapperProps,
        ...additionalVerticalNavAttrs
      } = verticalNavAttrs.value

      // 👉 Vertical nav
      const verticalNav = h(
        VerticalNav,
        {
          isOverlayNavActive: isOverlayNavActive.value,
          toggleIsOverlayNavActive,
          navItems: props.navItems,
          ...additionalVerticalNavAttrs,
        },
        {
          'nav-header': slots['vertical-nav-header']?.(),
          'before-nav-items': slots['before-vertical-nav-items']?.(),
        },
      )

      // 👉 Navbar
      const navbar = h(
        'header',
        { class: ['layout-navbar', { 'navbar-blur': isNavbarBlurEnabled.value }] },
        [
          h(
            'div',
            { class: 'navbar-content-container' },
            slots.navbar?.({
              toggleVerticalOverlayNavActive: toggleIsOverlayNavActive,
            }),
          ),
        ],
      )

      // 👉 Content area
      let mainChildren

      if (hasContentLoadingSlot.value && shallShowPageLoading.value)
        mainChildren = slots['content-loading']?.()
      else
        mainChildren = slots.default?.()

      const main = h(
        'main',
        { class: 'layout-page-content' },
        h('div', { class: 'page-content-container' }, mainChildren),
      )

      // 👉 Footer
      const footer = h(
        'footer',
        { class: 'layout-footer' },
        [h('div', { class: 'footer-content-container' }, slots.footer?.())],
      )

      // 👉 Overlay
      const layoutOverlay = h('div', {
        class: ['layout-overlay', { visible: isLayoutOverlayVisible.value }],
        onClick: () => {
          isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value
        },
      })

      return h(
        'div',
        {
          class: [
            'layout-wrapper',
            ...layoutClasses.value(windowWidth.value, windowScrollY.value),
          ],
        },
        [
          verticalNavWrapper
            ? h(verticalNavWrapper, verticalNavWrapperProps, { default: () => verticalNav })
            : verticalNav,
          h('div', { class: 'layout-content-wrapper' }, [navbar, main, footer]),
          layoutOverlay,
        ],
      )
    }
  },
})
</script>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/placeholders";
@use "@layouts/styles/mixins";

.layout-wrapper.layout-nav-type-vertical {
  // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
  block-size: 100%;

  .layout-content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-block-size: calc(var(--vh, 1vh) * 100);
    transition: padding-inline-start 0.2s ease-in-out;
    will-change: padding-inline-start;
  }

  .layout-navbar {
    z-index: variables.$layout-vertical-nav-layout-navbar-z-index;

    .navbar-content-container {
      block-size: variables.$layout-vertical-nav-navbar-height;
    }

    @at-root {
      .layout-wrapper.layout-nav-type-vertical {
        .layout-navbar {
          @if variables.$layout-vertical-nav-navbar-is-contained {
            @include mixins.boxed-content;
          } @else {
            .navbar-content-container {
              @include mixins.boxed-content;
            }
          }
        }
      }
    }
  }

  &.layout-navbar-sticky .layout-navbar {
    @extend %layout-navbar-sticky;
  }

  &.layout-navbar-hidden .layout-navbar {
    @extend %layout-navbar-hidden;
  }

  // 👉 Footer
  .layout-footer {
    @include mixins.boxed-content;
  }

  // 👉 Layout overlay
  .layout-overlay {
    position: fixed;
    z-index: variables.$layout-overlay-z-index;
    background-color: rgb(0 0 0 / 60%);
    cursor: pointer;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease-in-out;
    will-change: transform;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &:not(.layout-overlay-nav) .layout-content-wrapper {
    padding-inline-start: variables.$layout-vertical-nav-width;
  }

  // Adjust right column pl when vertical nav is collapsed
  &.layout-vertical-nav-collapsed .layout-content-wrapper {
    padding-inline-start: variables.$layout-vertical-nav-collapsed-width;
  }

  // 👉 Content height fixed
  &.layout-content-height-fixed {
    .layout-content-wrapper {
      max-block-size: calc(var(--vh) * 100);
    }

    .layout-page-content {
      display: flex;
      overflow: hidden;

      .page-content-container {
        inline-size: 100%;

        > :first-child {
          max-block-size: 100%;
          overflow-y: auto;
        }
      }
    }
  }
}
</style>
