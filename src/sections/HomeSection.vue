<template>
  <section id="home-section">
    <banner-crystal></banner-crystal>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';
import BannerCrystal from "../banners/BannerCrystal.vue"

export default {
  name: "HomeSection",
  components: {
    BannerCrystal
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
</style>