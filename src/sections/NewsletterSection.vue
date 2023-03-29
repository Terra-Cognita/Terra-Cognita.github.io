<template>
  <tc-section id="newsletter" class="relative">
    <img class="absolute opacity-10 -rotate-90 h-[150%] w-auto
                left-0 right-0 top-0 bottom-0 m-auto" 
         :src="imgCrystalElement">
    
    <div class="text-center">
      <div class="title"> {{ $t('newsletter.TITLE') }} </div>
      <div v-html="$t('newsletter.TEXT')"></div>
      <tc-button> {{ $t('newsletter.BUTTON') }} </tc-button>
    </div>
    
  </tc-section>
</template>

<script>
import { useAssets } from '@/composables/useAssets.js'

export default {
  name: "NewsletterSection",
  components: { },
  setup() {
    const { imgCrystalElement } = useAssets()
    return {
      imgCrystalElement
    }
  }
}
</script>