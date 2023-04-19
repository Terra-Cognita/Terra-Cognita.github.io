<template>
  <div id="gameplay-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-[29rem] overflow-hidden">
      <!-- Item 1 -->
      <gameplay-card
        :title="$t('gameplay.CARD_1.TITLE')"
        :text="$t('gameplay.CARD_1.TEXT')"
        class="hidden duration-700 ease-in-out"
        data-carousel-item="active"
      >
      </gameplay-card>
      <!-- Item 2 -->
      <gameplay-card
        :title="$t('gameplay.CARD_2.TITLE')"
        :text="$t('gameplay.CARD_2.TEXT')"
        class="hidden duration-700 ease-in-out"
        data-carousel-item
      >
      </gameplay-card>
      <!-- Item 3 -->
      <gameplay-card
        :title="$t('gameplay.CARD_3.TITLE')"
        :text="$t('gameplay.CARD_3.TEXT')"
        class="hidden duration-700 ease-in-out"
        data-carousel-item
      >
      </gameplay-card>
    </div>
    <!-- Slider indicators -->
    <!-- <div
      class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
    >
      <button
        type="button"
        class="h-3 w-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="h-3 w-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="h-3 w-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div> -->
    <!-- Slider controls -->
    <previous-icon></previous-icon>
    <next-icon></next-icon>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { Carousel, initCarousels } from "flowbite";
import GameplayCard from "@/components/cards/GameplayCard.vue";
import NextIcon from "@/components/icons/CarouselNextIcon.vue";
import PreviousIcon from "@/components/icons/CarouselPreviousIcon.vue";

export default {
  components: {
    GameplayCard,
    NextIcon,
    PreviousIcon,
  },
  setup(props) {
    onMounted(() => {
      initCarousels();
    });
    return {};
  },
};
</script>
