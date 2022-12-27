<script setup>
import { ref } from 'vue'

</script>

<template>

  <carousel></carousel>

  <div class="card">
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    <p> Edit <code>components/HelloWorld.vue</code> to test HMR</p>
  </div>
</template>

<script>
import Carousel from "../components/HomeCarousel.vue"

export default {
  name: "Home",
  components: {
    Carousel
  },
  data(){
    return {
    }
  },
}
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
