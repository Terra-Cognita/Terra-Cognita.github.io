<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="title"  v-html="$t('headlines.WelcomeTc.TITLE')"></div>
        <div class="subtitle">
          {{ $t('headlines.WelcomeTc.SUBTITLE') }}
        </div>
        <div>
          {{ $t('headlines.WelcomeTc.TEXT') }}
        </div>
        <o-button class="is-sand-2" rounded>DISCOVER</o-button>
      </div>
      <div class="column is-narrow">
        <img src="@/assets/images/Crystal-Elements.png"/>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "WelcomeTc",
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>