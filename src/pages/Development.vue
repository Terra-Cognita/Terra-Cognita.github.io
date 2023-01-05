<template>
  <section>
    <div class="title">{{ $t('dev.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('dev.GENERAL_MSG')"></div>
  </section>
</template>

<script>

export default {
  name: "Development",
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>