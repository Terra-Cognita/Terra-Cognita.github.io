<template>
  <tc-banner id="banner-crystal" :backgroundFile="'./src/assets/images/BG-Banner1.png'">
    <img src="@/assets/images/Crystal-Banner.png">
    <div class="tc-title title-white" v-html="$t('banners.BannerCrystal.TITLE')"></div>
    <div class="tc-text has-text-centered">
      {{ $t('banners.BannerCrystal.TEXT') }}
    </div>
  </tc-banner>
</template>

<script>
import TcBanner from '../layouts/TcBanner.vue'

export default {
  name: "BannerCrystal",
  components: {
    TcBanner
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>