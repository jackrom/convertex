<script setup>
const props = defineProps({
  languages: {
    type: Array,
    required: true,
  },
  location: {
    type: String,
    required: false,
    default: 'bottom end',
  },
})

const emit = defineEmits(['change'])

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <VBtn
    icon
    variant="text"
    color="default"
    size="small"
    aria-label="Cambiar idioma"
  >
    <VIcon
      icon="tabler-language"
      size="24"
    />

    <VMenu
      activator="parent"
      :location="props.location"
      offset="14px"
    >
      <VList min-width="175px">
        <VListItem
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          :active="locale === lang.i18nLang"
          @click="locale = lang.i18nLang; emit('change', lang.i18nLang)"
        >
          <VListItemTitle>{{ lang.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
