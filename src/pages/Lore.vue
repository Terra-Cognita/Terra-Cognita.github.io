<template>
  <section>
    <div class="title">{{ $t('lore.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('lore.GENERAL_MSG')"></div>
  </section>
</template>

<script>

export default {
  name: "Lore",
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>
