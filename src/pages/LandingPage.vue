<template>
  <div id="page-landing">
    <start-section></start-section>
    <intro-section></intro-section>
    <div class="bg-bgMultipleCrystals">
      <welcome-section></welcome-section>
      <gameplay-section></gameplay-section>
    </div>
    <div id="breathing-section-1">
      <tc-breathing>{{ $t("breathing.TEXT_1") }}</tc-breathing>
    </div>
    <team-section></team-section>
    <newsletter-section></newsletter-section>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

import StartSection from "@/sections/StartSection.vue";
import IntroSection from "@/sections/IntroductionSection.vue";
import WelcomeSection from "@/sections/WelcomeSection.vue";
import GameplaySection from "@/sections/GameplaySection.vue";
import TeamSection from "@/sections/TeamSection.vue";
import NewsletterSection from "@/sections/NewsletterSection.vue";

export default {
  name: "LandingPage",
  components: {
    StartSection,
    IntroSection,
    WelcomeSection,
    GameplaySection,
    TeamSection,
    NewsletterSection,
  },
  setup() {
    const router = useRouter();
    router.push({ name: "home" });

    return {};
  },
};
</script>
