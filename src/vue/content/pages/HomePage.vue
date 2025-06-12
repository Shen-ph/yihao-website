<template>
    <PageWrapper 
    :key="t.code"
    id="foxy-home-page"
                 :no-padding="true"
                 :sections="sections"/>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import AboutSection from "/src/vue/content/sections/AboutSection.vue"
import ContactSection from "/src/vue/content/sections/ContactSection.vue"
import HeroSection from "/src/vue/content/sections/HeroSection.vue"
import IndustriesSection from "/src/vue/content/sections/IndustriesSection.vue"
import ProductSection from "/src/vue/content/sections/ProductSection.vue"
import { computed } from "vue"
// import FaqSection from "/src/vue/content/sections/FaqSection.vue"
// import FeaturedProjectSection from "/src/vue/content/sections/FeaturedProjectSection.vue"
// import ReviewsSection from "/src/vue/content/sections/ReviewsSection.vue"
// import ServicesSection from "/src/vue/content/sections/ServicesSection.vue"
// import TeamSection from "/src/vue/content/sections/TeamSection.vue"

const { t } = useI18n()

const sections = computed(() => [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('product',    ProductSection,       t('button.product'),    'fa-solid fa-camera'),
    new SectionInfo('industries',      IndustriesSection,         t('button.industries'),      'fa-solid fa-clock'),
    new SectionInfo('about',        AboutSection,           t('button.about'),        'fa-solid fa-file'),
    new SectionInfo('contact',      ContactSection,         t('button.contact'),      'fa-solid fa-envelope'),
    
    // new SectionInfo('services',     ServicesSection,        'Services',     'fa-solid fa-wrench'),
    // new SectionInfo('featured',     FeaturedProjectSection, 'Zork',         'fa-solid fa-bolt'),
    // new SectionInfo('team',         TeamSection,            'Team',         'fa-solid fa-users'),
    // new SectionInfo('faq',          FaqSection,             'Q&A',          'fa-solid fa-question-circle'),
    // new SectionInfo('reviews',      ReviewsSection,         'Reviews',      'fa-solid fa-comment')
])
</script>

<style lang="scss" scoped>
</style>