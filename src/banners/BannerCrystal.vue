<template>
  <tc-banner id="banner-crystal" :backgroundFile="bgBanner1">
    <img src="@/assets/images/Crystal-Banner.png">
    <div class="tc-title title-white" v-html="$t('banners.BannerCrystal.TITLE')"></div>
    <div class="tc-text has-text-centered">
      {{ $t('banners.BannerCrystal.TEXT') }}
    </div>
  </tc-banner>
</template>

<script>
import TcBanner from '../layouts/TcBanner.vue'
import { useAssets } from '../composables/useAssets.js'

export default {
  name: "BannerCrystal",
  components: {
    TcBanner
  },
  setup() {
    const { bgBanner1 } = useAssets()
    return {
      bgBanner1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>