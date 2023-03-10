<template>
  <div id="home-view">

    <home-section></home-section>
    <intro-section></intro-section>
    <welcome-section></welcome-section>
    <gameplay-section></gameplay-section>
    <breathing-text>{{ $t('breathing.TEXT_1') }}</breathing-text>
    <team-section></team-section>
    <newsletter-section></newsletter-section>

  </div>
</template>

<script>
import HomeSection from "../sections/HomeSection.vue"
import IntroSection from "../sections/IntroductionSection.vue"
import WelcomeSection from "../sections/WelcomeSection.vue"
import GameplaySection from "../sections/GameplaySection.vue"
import TeamSection from "../sections/TeamSection.vue"
import NewsletterSection from '../sections/NewsletterSection.vue'
import BreathingText from "../components/BreathingText.vue"

export default {
  name: "MainView",
  components: {
    HomeSection,
    IntroSection,
    WelcomeSection,
    GameplaySection,
    TeamSection,
    NewsletterSection,
    BreathingText
  },
  setup() {
    return { 
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
