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
        <div class="column is-half v-centered">
          <iframe id="yt-video"
            src="https://www.youtube.com/embed/HY2I8T0BlVQ" 
            title="TC intro video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
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

<style lang="scss" scoped>
#yt-video {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.v-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>