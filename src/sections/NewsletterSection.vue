<template>
  <tc-section id="newsletter" class="">
    <img class="image-bg" background-image src="@/assets/images/Crystal-Elements.png">
    
    <div class="container has-text-centered">
      <div class="tc-title text-white">
        {{ $t('newsletter.TITLE') }}
      </div>
      <div class="tc-text" v-html="$t('newsletter.TEXT')"></div>
      <o-button class="tc-button">{{ $t('newsletter.BUTTON') }}</o-button>
    </div>
    
  </tc-section>
</template>

<script>
import TcSection from '../layouts/TcSection.vue'

export default {
  name: "NewsletterSection",
  components: {
    TcSection,
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
#newsletter {
  position: relative;
}
.image-bg {
  width: auto;
  height: 150%;
  opacity: 0.1;
  position: absolute;
  left:0;
  right:0;
  top: 0;
  bottom:0;
  margin:auto;
  -webkit-transform: rotate(-90deg); /* Safari and Chrome */
  -moz-transform: rotate(-90deg);   /* Firefox */
  -ms-transform: rotate(-90deg);   /* IE 9 */
  -o-transform: rotate(-90deg);   /* Opera */
  transform: rotate(-90deg);
}
</style>
