<template>
  <div id="tc-start">
    <tc-hero class="bg-banner-1">
      <img class="mx-auto" :src="imgCrystalBanner" />
      <div
        class="title text-center"
        v-html="$t('banners.BannerCrystal.TITLE')"
      ></div>
      <div class="text-center">
        {{ $t("banners.BannerCrystal.TEXT") }}
      </div>
    </tc-hero>
  </div>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";

export default {
  name: "StartSection",
  components: {},
  setup() {
    const { imgCrystalBanner } = useAssets();
    return {
      imgCrystalBanner,
    };
  },
};
</script>

<style scoped></style>
