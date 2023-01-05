<template>
  <section>
    <div class="title">{{ $t('home.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('home.GENERAL_MSG')"></div>
  </section>
</template>

<script>

export default {
  name: "Home",
  setup() {
    return {}
  }
}
</script>


<style scoped>
</style>
