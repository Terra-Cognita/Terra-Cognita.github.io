<template>
  <tc-section id="welcome">
    <div class="section-title">A new world</div>

    <div class="flex flex-col gap-10 laptop:flex-row">
      <div class="basis-2/3">
        <div class="title" v-html="$t('welcome.TITLE')"></div>
        <img
          class="mx-auto mb-8 h-60 object-contain laptop:hidden"
          :src="imgCrystalElement"
        />
        <div class="subtitle">{{ $t("welcome.SUBTITLE") }}</div>
        <div>{{ $t("welcome.TEXT") }}</div>

        <tc-button>{{ $t("welcome.BUTTON") }}</tc-button>
      </div>

      <img
        class="mx-auto basis-1/3 object-contain max-laptop:hidden"
        :src="imgCrystalElement"
      />
    </div>
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
