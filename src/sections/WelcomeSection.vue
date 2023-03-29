<template>
  <tc-section id="welcome">
      <div class="section-title">A new world</div>
      
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
import TcHeadline from '@/components/layouts/TcHeadline.vue'
import { useAssets } from '@/composables/useAssets.js'

export default {
  name: "WelcomeSection",
  components: {
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