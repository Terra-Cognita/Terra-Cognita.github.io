<template>
  <section id="banner-crystal" class="hero is-forest-3 is-fullheight banner-bg">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/Crystal-Banner.png"/>
        <div class="title" v-html="$t('banners.BannerCrystal.TITLE')"></div>
        <div class="subtitle">
          {{ $t('banners.BannerCrystal.TEXT') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, reactive } from 'vue';

export default {
  name: "BannerCrystal",
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-bg {
    background-image: url('@/assets/images/BG-Banner1.png');
    background-position: center center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
}
</style>