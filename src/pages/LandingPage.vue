<template>
  <!-- <start-section></start-section> -->
  <!-- <intro-section></intro-section> -->
  <!-- <welcome-section></welcome-section> -->
  <!-- <gameplay-section></gameplay-section> -->
  <tc-breathing>{{ $t('breathing.TEXT_1') }}</tc-breathing>
  <!-- <team-section></team-section> -->
  <!-- <newsletter-section></newsletter-section> -->
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

import TcBreathing from "../layouts/TcBreathing.vue"
import StartSection from "../sections/StartSection.vue"
import IntroSection from "../sections/IntroductionSection.vue"
import WelcomeSection from "../sections/WelcomeSection.vue"
import GameplaySection from "../sections/GameplaySection.vue"
import TeamSection from "../sections/TeamSection.vue"
import NewsletterSection from '../sections/NewsletterSection.vue'

export default {
  name: "LandingPage",
  components: {
    TcBreathing,
    StartSection,
    IntroSection,
    WelcomeSection,
    GameplaySection,
    TeamSection,
    NewsletterSection,
  },
  setup() {
    const router = useRouter()
    router.push({ name: 'home' })

    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
