<template>
  <nav class="foxy-navbar"
       :class="shouldExpand ? `foxy-navbar-expanded` : `foxy-navbar-compressed`">
    <div class="foxy-navbar-container container-xxl">
      <Link :url="brandUrl">
      <NavbarBrand :logo="brandLogo"
                   :label="brandLabel"
                   :expand="shouldExpand" />
      </Link>

      <NavbarLinks :items="props.linkList"
                   :collapsed="isCollapsed"
                   @link-clicked="_onLinkClicked" />

      <NavbarToggleButton :collapsed="isCollapsed"
                          @click="_onToggleClicked" />

      <!-- <div class="change-language"
           :class="`${isCollapsed ? 'collapsed' : ''}`"
           style="color: aquamarine;">

        <select v-model="selectedLanguage"
                @change="changeLanguage"
                title="English">
          <option v-for="item in languages"
                  :key="item.code"
                  :value="item.code">{{item.label}}</option>
        </select>
      </div> -->
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import Link from '/src/vue/components/generic/Link.vue'
import NavbarBrand from '/src/vue/components/nav/navbar/NavbarBrand.vue'
import NavbarLinks from '/src/vue/components/nav/navbar/NavbarLinks.vue'
import NavbarToggleButton from '/src/vue/components/nav/navbar/NavbarToggleButton.vue'
import { useRoute } from 'vue-router'
import { useUtils } from '/src/composables/utils.js'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const utils = useUtils()

const props = defineProps({
  brandLogo: String,
  brandLabel: String,
  brandUrl: String,
  linkList: Array,
  expandable: Boolean,
})

const isCollapsed = ref(true)
const shouldExpand = ref(false)

const { locale } = useI18n()
const selectedLanguage = ref(locale.value)

onMounted(() => {
  window.addEventListener('scroll', _onWindowEvent)
  window.addEventListener('resize', _onWindowEvent)
  _onWindowEvent()
})

onUnmounted(() => {
  window.removeEventListener('scroll', _onWindowEvent)
  window.removeEventListener('resize', _onWindowEvent)
})

watch(
  () => route.path,
  () => {
    isCollapsed.value = true
  }
)

//切换语言的功能
// const languages = ref([
//   { code: 'zh-CN', label: '简体中文' },
//   { code: 'en-US', label: 'English' },
// ])

// const changeLanguage = () => {
//   locale.value = selectedLanguage.value
// }
  // const
const _onWindowEvent = () => {
  shouldExpand.value =
    props.expandable &&
    window.scrollY === 0 &&
    window.innerWidth >= utils.BOOTSTRAP_BREAKPOINTS.lg
}

const _onToggleClicked = () => {
  isCollapsed.value = !isCollapsed.value
}

const _onLinkClicked = () => {
  isCollapsed.value = true
}
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';

nav.foxy-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: $navbar-height;
  z-index: 10;
  background-color: $nav-background-color;
  transition: 0.3s ease-in-out padding;

  @include media-breakpoint-down(lg) {
    transition: none;
  }

  @media (max-height: 400px) {
    min-height: calc($navbar-height - 20px);
  }
}

nav.foxy-navbar-expanded {
  @include media-breakpoint-up(lg) {
    background-color: rgba(black, 0.01);
    padding: 15px 0;
  }
  @include media-breakpoint-up(xl) {
    padding: 15px;
  }
}

div.foxy-navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: $navbar-height;
  height: 100%;

  @include media-breakpoint-down(lg) {
    flex-direction: column;
    align-items: start;
  }

  @media (max-height: 400px) {
    min-height: calc($navbar-height - 20px);
  }
}

div.change-language.collapsed {
  @include media-breakpoint-down(lg) {
    display: none;
  }
}
</style>