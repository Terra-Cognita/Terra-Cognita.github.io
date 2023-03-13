<template>
  <section id="introduction" class="hero is-forest-2">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-half">
          <div class="title">
            {{ $t('introduction.TITLE') }}
          </div>
          <div class="subtitle">
            {{ $t('introduction.TEXT') }}
          </div>
        </div>
        <div class="column is-half">
          <img src="@/assets/images/temp_video.png"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "IntroductionSection",
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>