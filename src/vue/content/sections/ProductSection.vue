<template>
  <!-- About Section -->
  <PageSection variant="default"
               :id="props.id">
    <!-- Title -->
    <PageSectionHeader :title="$t('title.product')"
                       :subtitle="$t('subtitle.product')" />

    <!-- Content -->
    <PageSectionContent>
      <ArticleProductGrid>
        <ItemProductGrid :title="$t('product.carbonSteelBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.carbonSteelBoltDes')"
                         image="images/product/carbon-steel-bolt.png" />

        <ItemProductGrid :title="$t('product.highStrengthBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.highStrengthBoltDes')"
                         image="images/product/high-strength-bolt.png" />

        <ItemProductGrid :title="$t('product.hexagonSocketHeadCapScrews')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.hexagonSocketHeadCapScrewsDes')"
                         image="images/product/hexagon-socket-head-cap-screws.png" />

        <ItemProductGrid :title="$t('product.stainlessSteelBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.stainlessSteelBoltDes')"
                         image="images/product/stainless-steel-bolt.png" />

        <ItemProductGrid :title="$t('product.automotiveBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.automotiveBoltDes')"
                         image="images/product/automotive-bolt.png" />

        <ItemProductGrid :title="$t('product.hotDipGalvanizedBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.hotDipGalvanizedBoltDes')"
                         image="images/product/hot-dip-galvanized-bolt.png" />

        <ItemProductGrid :title="$t('product.steelStructureBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.steelStructureBoltDes')"
                         image="images/product/steel-structure-bolt.png" />

        <ItemProductGrid :title="$t('product.flangeBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.flangeBoltDes')"
                         image="images/product/flange-bolt.png" />

        <ItemProductGrid :title="$t('product.wingBolt')"
                         :category="$t('productClassify.bolt')"
                         :description="$t('product.wingBoltDes')"
                         image="images/product/wing-bolt.png" />

        <ItemProductGrid :title="$t('product.carbonSteelNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/carbon-steel-nut.png" />

        <ItemProductGrid :title="$t('product.highStrengthNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/high-strength-nut.png" />

        <ItemProductGrid :title="$t('product.stainlessSteelNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/stainless-steel-nut.png" />

        <ItemProductGrid :title="$t('product.zpNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/zp-nut.png" />

        <ItemProductGrid :title="$t('product.hotDipGalvanizedNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/hot-dip-galvanized-nut.png" />

        <ItemProductGrid :title="$t('product.flangeNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/flange-nut.png" />

        <ItemProductGrid :title="$t('product.lockNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/lock-nut.png" />

        <ItemProductGrid :title="$t('product.wingNut')"
                         :category="$t('productClassify.nut')"
                         image="images/product/wing-nut.png" />

        <ItemProductGrid :title="$t('product.washer')"
                         :category="$t('productClassify.washer')"
                         image="images/product/washer.png" />

        <ItemProductGrid :title="$t('product.springWasher')"
                         :category="$t('productClassify.washer')"
                         image="images/product/spring-washer.png" />

        <ItemProductGrid :title="$t('product.largedWasher')"
                         :category="$t('productClassify.washer')"
                         image="images/product/larged-washer.png" />

        <ItemProductGrid :title="$t('product.drillTailScrew')"
                         :category="$t('productClassify.others')"
                         :description="$t('product.drillTailScrewDes')"
                         image="images/product/drill-tail-screw.png" />

        <ItemProductGrid :title="$t('product.drywallScrew')"
                         :category="$t('productClassify.others')"
                         :description="$t('product.drywallScrewDes')"
                         image="images/product/drywall-screw.png" />

        <ItemProductGrid :title="$t('product.screwRod')"
                         :category="$t('productClassify.others')"
                         :description="$t('product.screwRodDes')"
                         image="images/product/screw-rod.png" />

        <ItemProductGrid :title="$t('product.plasticExpansionScrew')"
                         :category="$t('productClassify.others')"
                         :description="$t('product.plasticExpansionScrewDes')"
                         image="images/product/plastic-expansion-screw.png" />

        <ItemProductGrid :title="$t('product.expansionBolt')"
                         :category="$t('productClassify.others')"
                         :description="$t('product.expansionBoltDes')"
                         image="images/product/expansion-bolt.png" />

      </ArticleProductGrid>
    </PageSectionContent>

    <!-- <ItemProductGrid title="LiveScore Pro"
                         category="Utilities"
                         :description="`Stay ahead of the game with <b>LiveScore Pro</b>! Get real-time football scores, goal updates, and match results from leagues worldwide. Never miss a moment of the action!`"
                         image="images/product/project-logo-4.png"
                         :tags="['soccer', 'scores', 'sports', 'results']"
                         :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]" />

        <ItemProductGrid title="Sweet Scoops"
                         category="Social"
                         :description="`<b>Sweet Scoops</b> is your delightful companion for exploring the world of ice creams. With its mouthwatering interface, SweetScoops offers a wide selection of ice cream flavors, recipes, and unique combinations to tickle your taste buds. Whether you're an ice cream enthusiast or a connoisseur, SweetScoops allows you to discover new flavors, find nearby ice cream parlors, and even create your personalized ice cream masterpieces.`"
                         image="images/product/project-logo-5.png"
                         :tags="['app', 'food', 'ice cream', 'dessert']"
                         :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]" />

        <ItemProductGrid title="MailM8"
                         category="Productivity"
                         :description="`<b>MailM8</b> is your reliable mailing app, empowering you to manage your emails efficiently. With its sleek and user-friendly interface, MailM8 offers features like intuitive organization, smart filters, and seamless integration with other productivity tools. Stay on top of your inbox, draft emails effortlessly, and boost your productivity with MailM8 as your trusty email companion.`"
                         image="images/product/project-logo-7.png"
                         :tags="['app', 'mail', 'email', 'productivity']"
                         :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' },
                                    { faIcon: 'fa-brands fa-chrome', href: 'https://chrome.com' }
                                 ]" />

        <ItemProductGrid title="RockVerse"
                         category="Social"
                         :description="`<b>RockVerse</b> is your gateway to a mesmerizing world of rock'n roll, empowering you to immerse yourself in the essence of rock effortlessly. With its dynamic and immersive interface, RockVerse offers an extensive library of iconic rock songs, legendary albums, and captivating rock artists. Unearth rare footage, delve into the history of rock, and experience mind-blowing live performances of your favorite bands. Connect with a vibrant community of rock enthusiasts, share your playlists, and embark on a legendary musical journey with RockVerse as your ultimate rock music haven.`"
                         image="images/product/project-logo-9.png"
                         :tags="['app', 'rock', 'music', 'bands']"
                         :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' }
                                 ]" /> -->

    <!-- Footer -->
    <PageSectionFooter :title="$t('product.footerTitle')"
                       :description="$t('product.footerDes')"
                       :include-divider="true"
                       :button-label="$t('product.footerBtnLabel')"
                       button-fa-icon="fa-solid fa-message"
                       button-url="#contact" />
  </PageSection>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import PageSection from '/src/vue/components/layout/PageSection.vue'
import PageSectionHeader from '/src/vue/components/layout/PageSectionHeader.vue'
import PageSectionContent from '/src/vue/components/layout/PageSectionContent.vue'
import PageSectionFooter from '/src/vue/components/layout/PageSectionFooter.vue'
import ArticleProductGrid from '/src/vue/components/articles/ArticleProductGrid.vue'
import ItemProductGrid from '/src/vue/components/articles/items/ItemProductGrid.vue'

const { t } = useI18n()

const props = defineProps({
  id: String,
})
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';
</style>