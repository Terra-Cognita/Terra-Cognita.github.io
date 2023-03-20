<template>
  <tc-section id="welcome" class="">
      <div class="tc-smalltitle">A new world</div>
      <tc-headline
        :title="$t('headlines.WelcomeTc.TITLE')"
        :subtitle="$t('headlines.WelcomeTc.SUBTITLE')"
        :text="$t('headlines.WelcomeTc.TEXT')"
        :figFile="imgCrystalElement"
      >
      </tc-headline>
  </tc-section>
</template>

<script>
import TcSection from '../layouts/TcSection.vue'
import TcHeadline from '../layouts/TcHeadline.vue'
import { useAssets } from '../composables/useAssets.js'

export default {
  name: "WelcomeSection",
  components: {
    TcSection,
    TcHeadline
  },
  setup() {
    const { imgCrystalElement } = useAssets()
    return {
      imgCrystalElement
    }
  }
}
</script>


<style scoped>
</style>
