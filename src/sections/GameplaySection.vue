<template>
  <tc-section id="gameplay" class="relative overflow-hidden">
    <img
      class="absolute left-0 right-0 m-auto w-[50%] rotate-180 object-fill object-top opacity-10"
      :src="imgCrystalElement"
    />

    <div class="section-title">Gameplay</div>
    <div class="title text-sand-900">{{ $t("gameplay.TITLE") }}</div>

    <div class="columns-3">
      <frame-crystal-1 class="fill-magic-sky stroke-magic-sky">
        {{ $t("gameplay.FRAME_1_TEXT") }}
      </frame-crystal-1>
      <frame-crystal-3 class="fill-magic-sky stroke-magic-sky">
        {{ $t("gameplay.FRAME_2_TEXT") }}
      </frame-crystal-3>
      <frame-crystal-4 class="fill-magic-sky stroke-magic-sky">
        {{ $t("gameplay.FRAME_3_TEXT") }}
      </frame-crystal-4>
    </div>
  </tc-section>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";
import FrameCrystal1 from "@/components/frames/FrameCrystal1.vue";
import FrameCrystal3 from "@/components/frames/FrameCrystal3.vue";
import FrameCrystal4 from "@/components/frames/FrameCrystal4.vue";

export default {
  name: "GameplaySection",
  components: {
    FrameCrystal1,
    FrameCrystal3,
    FrameCrystal4,
  },
  setup() {
    const { imgCrystalElement } = useAssets();
    return {
      imgCrystalElement,
    };
  },
};
</script>
