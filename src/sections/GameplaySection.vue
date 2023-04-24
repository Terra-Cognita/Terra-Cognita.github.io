<template>
  <div id="gameplay">
    <tc-section>
      <div class="section-title">Gameplay</div>
      <div class="title text-sand-900">{{ $t("gameplay.TITLE") }}</div>

      <div class="columns-3 max-laptop:hidden">
        <gameplay-card
          :title="$t('gameplay.CARD_1.TITLE')"
          :text="$t('gameplay.CARD_1.TEXT')"
        >
        </gameplay-card>
        <gameplay-card
          :title="$t('gameplay.CARD_2.TITLE')"
          :text="$t('gameplay.CARD_2.TEXT')"
        >
        </gameplay-card>
        <gameplay-card
          :title="$t('gameplay.CARD_3.TITLE')"
          :text="$t('gameplay.CARD_3.TEXT')"
        >
        </gameplay-card>
      </div>

      <div class="h-fit laptop:hidden">
        <gameplay-carousel></gameplay-carousel>
      </div>
    </tc-section>
  </div>
</template>

<script>
import GameplayCard from "@/components/cards/GameplayCard.vue";
import GameplayCarousel from "@/components/carousels/GameplayCarousel.vue";

export default {
  name: "GameplaySection",
  components: {
    GameplayCard,
    GameplayCarousel,
  },
  setup() {
    return {};
  },
};
</script>
