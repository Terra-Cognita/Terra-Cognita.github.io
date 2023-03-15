<template>
  <section class="hero is-fullheight">
    <div class="hero-body banner-bg" :style="backgroundStyle">
      <div class="container has-text-centered">
        <slot/>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    backgroundFile: {
      type: String,
      default: '/src/assets/images/BG-Banner1.png'
    }
  },
  setup(props) {
    const backgroundStyle = ref(`background-image: url(${props.backgroundFile})`)
    return { backgroundStyle }
  }
}
</script>

<style lang="scss" scoped>
div.hero-body {
  padding: $pad-section-top $pad-web-right $pad-section-bottom $pad-web-left;
}
.banner-bg {
  background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-size: cover;
}
</style>