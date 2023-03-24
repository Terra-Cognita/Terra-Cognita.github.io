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
import { useAssets } from '../composables/useAssets.js'

export default {
  props: {
    backgroundFile: String,
  },
  setup(props) {
    let bgFile;
    if (props.backgroundFile === undefined) {
      const { bgBanner1 } = useAssets()
      bgFile = bgBanner1
    } else {
      bgFile = props.backgroundFile
    }

    const backgroundStyle = ref(`background-image: url(${bgFile})`)
    return { 
      backgroundStyle 
    }
  }
}
</script>

<style scoped>
/* div.hero-body {
  padding: $pad-section-top $pad-web-right $pad-section-bottom $pad-web-left;
}
.banner-bg {
  background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-size: cover;
} */
</style>