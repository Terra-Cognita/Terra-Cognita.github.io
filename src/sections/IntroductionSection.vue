<template>
  <tc-section id="introduction" class="is-forest-2">
      <div class="columns is-variable is-8">
        <div class="column is-half">
          <div class="tc-title">
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
  </tc-section>
</template>

<script>
import TcSection from '../layouts/TcSection.vue'

export default {
  name: "IntroductionSection",
  components: {
    TcSection
  },
  setup() {
    return { }
  }
}
</script>

<style scoped>
</style>