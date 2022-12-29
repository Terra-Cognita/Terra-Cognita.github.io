<script setup>
import { ref } from 'vue'

</script>

<template>
  <section>
    <div class="title">{{ $t('dev.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('dev.GENERAL_MSG')"></div>
  </section>
</template>

<style scoped>
</style>