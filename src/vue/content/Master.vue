<template>
  <!-- Navigation -->
  <Navigation logo="images/logo/logo.png"
              :label="$t('text.companyNameFull')">
  </Navigation>

  <!-- Content Display -->
  <router-view />

  <!-- Footer -->
  <Footer>
    <FooterBlock :darken="false"
                 :row="true">
      <FooterColumn title="About"
                    faIcon="fa-solid fa-pen-to-square me-1 d-none d-md-inline"
                    :description="[
                              $t('text.companySlogan')
                          ]"
                    :links="[
                              {label: `Privacy Policy`, href: `/privacy-policy`, faIcon: null},
                              // {label: `License`, href: `/license`, faIcon: null}
                          ]"
                    :displayLinksAsButtons="false" />

      <FooterColumn title="Connect With Us"
                    faIcon=""
                    :description="[
                          ]"
                    :links="[
                              {label: `FaceBook`, href: `https://www.facebook.com/profile.php?id=61574274872360&mibextid=wwXIfr&mibextid=wwXIfr`, faIcon:`fa-brands fa-facebook`},
                              {label: `TikTok`, href: `https://www.tiktok.com/@shen0522?_t=ZS-8x8tTxi5eEC&_r=1`, faIcon:`fa-brands fa-tiktok`}
                          ]"
                    :displayLinksAsButtons="true" />

      <FooterColumn title="Contact Info"
                    faIcon="fa fa-fax me-2"
                    :description="[
                              `China International Standard Parts IndustryCity of Yongnian Handan`,
                              `Heibei,China`
                          ]"
                    :links="[
                              {label: `(+86)13730009551`, href: `tel:(+86)13730009551`, faIcon: 'fa-brands fa-whatsapp'},
                              {label: `gary@yihaofastener.com`, href: `gary@yihaofastener.com`, faIcon: 'fa-regular fa-envelope'},
                          ]"
                    :displayLinksAsButtons="false" />
    </FooterBlock>

    <FooterBlock :darken="true"
                 :row="false">
      <FooterCopyright holder="YiHao Fastener"
                       license="All Rights Reserved." />
    </FooterBlock>
  </Footer>
</template>

<script setup>
import Navigation from '/src/vue/components/nav/Navigation.vue'
import Footer from '/src/vue/components/footer/Footer.vue'
import FooterBlock from '/src/vue/components/footer/FooterBlock.vue'
import FooterCopyright from '/src/vue/components/footer/FooterCopyright.vue'
import FooterColumn from '/src/vue/components/footer/FooterColumn.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';
</style>