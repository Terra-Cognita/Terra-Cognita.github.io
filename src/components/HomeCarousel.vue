<script setup>
  import { ref } from 'vue'

  const slideRef = ref(0);
  const carouselSettings = {
    arrow: true,
    arrowHover: true,
    hasDrag: true,
    autoplay: true,
    pauseHover: true,
    interval: 2000,
    repeat: true,
  }


</script>

<template>
  
  <o-carousel v-model="slideRef" v-bind="carouselSettings">
    <o-carousel-item>
      <img src= "../assets/home_screen/TC-Logo1.png"/>
    </o-carousel-item>

    <o-carousel-item>
      <img src= "../assets/home_screen/TC-Logo3.png"/>
    </o-carousel-item>

    <o-carousel-item>
      <img src= "../assets/home_screen/TC-Logo4.png"/>
    </o-carousel-item>

    <o-carousel-item>
      <img src= "../assets/home_screen/TC-Logo6.png"/>
    </o-carousel-item>
  </o-carousel>

</template>

<script>
export default {
  name: "HomeCarousel",
  components: {
  },
  data(){
    return {
    }
  },
}
</script>


<style lang="scss" scoped>
.slide {
  padding: 9rem 4.5rem;
  color: #ffffff;
  text-align: center;
}
</style>
