<template>
  <div id="tc-start">
    <banner-crystal></banner-crystal>
  </div>
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