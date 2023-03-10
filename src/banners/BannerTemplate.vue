<template>
  <section id="banner-crystal" class="hero is-forest-3 is-fullheight banner-bg">
    <div class="hero-body">
      <div class="container has-text-centered">
        <!-- INSERT HERE THE CONTENT OF THE BANNER -->
        <!-- For the banner background image: insert it on the style section -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, reactive } from 'vue';

export default {
  name: "BannerTemplate",
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-bg {
    background-image: url('');
    background-position: center center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
}
</style>