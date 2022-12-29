<script setup>
import { ref } from 'vue'

</script>

<template>
  <section>
    <div class="title">{{ $t('lore.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('lore.GENERAL_MSG')"></div>
  </section>
</template>

<style scoped>
</style>
