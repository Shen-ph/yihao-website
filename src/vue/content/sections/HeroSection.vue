<template>
  <!-- Heading Section -->
  <PageHeader :id="props.id"
              :title="$t('text.companyNameFull')"
              :subtitle="$t('text.companySlogan')"
              logo-url="images/logo/logo.png"
              :show-button="false"
              button-icon="fa-solid fa-search"
              button-label="Find Out More"
              button-url="#about" />
</template>

<script setup>
import PageHeader from '/src/vue/components/layout/PageHeader.vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  id: String,
})

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';
</style>