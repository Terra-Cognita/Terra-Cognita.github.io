<script setup>
import { ref } from 'vue'

</script>

<template>
  <section>
    <div class="title">{{ $t('home.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('home.GENERAL_MSG')"></div>
  </section>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data(){
    return {
    }
  },
}
</script>


<style scoped>
</style>
