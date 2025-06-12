<template>
  <!-- Services Section -->
  <PageSection variant="default"
               :id="props.id">
    <!-- Title -->
    <PageSectionHeader :title="$t('title.industries')" />

    <!-- Content -->
    <PageSectionContent>
      <ArticleTimeline>
        <ItemTimelineEntry :title="$t('industries.industries1Title')"
                           image="images/industries/industries-1.jpg"
                           :description="$t('industries.industries1Des')"
                           :inverted="true" />

        <ItemTimelineEntry :title="$t('industries.industries2Title')"
                           image="images/industries/industries-2.jpg"
                           :description="$t('industries.industries2Des')"
                           :inverted="false" />

        <ItemTimelineEntry :title="$t('industries.industries3Title')"
                           image="images/industries/industries-3.jpg"
                           :description="$t('industries.industries3Des')"
                           :inverted="true" />

        <ItemTimelineEntry :title="$t('industries.industries4Title')"
                           image="images/industries/industries-4.jpg"
                           :description="$t('industries.industries4Des')"
                           :inverted="false" />

        <ItemTimelineEntry :title="$t('industries.industries5Title')"
                           image="images/industries/industries-5.jpg"
                           :description="$t('industries.industries5Des')"
                           :inverted="true" />

        <ItemTimelineEntry :title="$t('industries.industries6Title')"
                           image="images/industries/industries-6.jpg"
                           :description="$t('industries.industries6Des')"
                           :inverted="false" />
      </ArticleTimeline>
    </PageSectionContent>
  </PageSection>
</template>

<!-- <ItemTimelineEntry title="Diversification and Specialization"
                                   dateStart="2013"
                                   dateEnd="2019"
                                   image="images/industries/history-3.png"
                                   description="In 2017, we diversified our offerings, adding web design, SEO, social media management, and branding services, positioning ourselves as a comprehensive digital solutions provider. We became a one-stop-shop for clients."
                                   :inverted="true"/> -->


<script setup>
import { useI18n } from 'vue-i18n'
import PageSection from '/src/vue/components/layout/PageSection.vue'
import PageSectionHeader from '/src/vue/components/layout/PageSectionHeader.vue'
import PageSectionContent from '/src/vue/components/layout/PageSectionContent.vue'
import ArticleTimeline from '/src/vue/components/articles/ArticleTimeline.vue'
import ItemTimelineEntry from '/src/vue/components/articles/items/ItemTimelineEntry.vue'

const { t } = useI18n()

const props = defineProps({
  id: String,
})
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';
</style>