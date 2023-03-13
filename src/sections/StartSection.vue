<template>
  <section id="tc-start">
    <banner-crystal></banner-crystal>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';
import BannerCrystal from "../banners/BannerCrystal.vue"

export default {
  name: "StartSection",
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