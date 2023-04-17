<template>
  <tc-section id="welcome">
    <div class="section-title">A new world</div>

    <tc-headline
      :title="$t('welcome.TITLE')"
      :subtitle="$t('welcome.SUBTITLE')"
      :text="$t('welcome.TEXT')"
      :figFile="imgCrystalElement"
    >
    </tc-headline>
  </tc-section>
</template>

<script>
import TcHeadline from "@/components/layouts/TcHeadline.vue";
import { useAssets } from "@/composables/useAssets.js";

export default {
  name: "WelcomeSection",
  components: {
    TcHeadline,
  },
  setup() {
    const { imgCrystalElement } = useAssets();
    return {
      imgCrystalElement,
    };
  },
};
</script>
