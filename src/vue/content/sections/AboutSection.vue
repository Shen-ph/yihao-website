<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader :title="$t('title.about')"
                           :subtitle="$t('subtitle.about')"/>

        <!-- Content -->
        <PageSectionContent>
            <!-- About Template -->
            <ArticleInfoBlock image="images/about/about.jpg"
                              :paragraphs="$t('about.paragraphs')"/>
        </PageSectionContent>

        <!-- Footer -->
        <!-- <PageSectionFooter title="Get it for *free!*"
                           description="Do you want to use and/or customize this template? Feel free to clone it from the official Github repo!"
                           :include-divider="true"
                           button-label="Download Now!"
                           button-fa-icon="fa-solid fa-download"
                           button-url="https://github.com/ryanbalieiro/vue-agency-landing-page-template"/> -->
    </PageSection>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import PageSectionFooter from "/src/vue/components/layout/PageSectionFooter.vue"
import ArticleInfoBlock from "/src/vue/components/articles/ArticleInfoBlock.vue"

const { t } = useI18n()

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>