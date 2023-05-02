<template>
  <div
    id="gameplay-carousel"
    class="relative z-0 w-full"
    v-touch:swipe.left="nextItem"
    v-touch:swipe.right="previousItem"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-[29rem] overflow-hidden">
      <gameplay-card
        :ref="
          (el) => {
            carouselItemsEl[0] = el;
          }
        "
        :title="$t('gameplay.CARD_1.TITLE')"
        :text="$t('gameplay.CARD_1.TEXT')"
        class="hidden duration-700 ease-in-out"
      >
      </gameplay-card>
      <gameplay-card
        :ref="
          (el) => {
            carouselItemsEl[1] = el;
          }
        "
        :title="$t('gameplay.CARD_2.TITLE')"
        :text="$t('gameplay.CARD_2.TEXT')"
        class="hidden duration-700 ease-in-out"
      >
      </gameplay-card>
      <gameplay-card
        :ref="
          (el) => {
            carouselItemsEl[2] = el;
          }
        "
        :title="$t('gameplay.CARD_3.TITLE')"
        :text="$t('gameplay.CARD_3.TEXT')"
        class="hidden duration-700 ease-in-out"
      >
      </gameplay-card>
    </div>

    <!-- Slider indicators -->
    <!-- <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
      <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
      <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
      <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
    </div> -->

    <!-- Slider controls -->
    <button
      type="button"
      class="group absolute top-0 left-0 z-30 flex h-full items-center justify-center focus:outline-none"
      @click="previousItem"
    >
      <span
        class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tc_magic-sky/30 group-hover:bg-tc_magic-sky/30 group-focus:outline-none group-focus:ring-1 group-focus:ring-tc_magic-sky"
      >
        <previous-icon></previous-icon>
        <span class="sr-only">Previous</span>
      </span>
    </button>

    <button
      type="button"
      class="group absolute right-0 top-0 z-30 flex h-full items-center justify-center focus:outline-none"
      @click="nextItem"
    >
      <span
        class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tc_magic-sky/30 group-hover:bg-tc_magic-sky/30 group-focus:outline-none group-focus:ring-1 group-focus:ring-tc_magic-sky"
      >
        <next-icon></next-icon>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Carousel } from "flowbite";
import GameplayCard from "@/components/cards/GameplayCard.vue";
import NextIcon from "@/components/icons/NextIcon.vue";
import PreviousIcon from "@/components/icons/PreviousIcon.vue";

export default {
  components: {
    GameplayCard,
    NextIcon,
    PreviousIcon,
  },
  setup() {
    const carouselItemsEl = ref([]);
    const carousel = ref(null);

    onMounted(() => {
      const carouselItems = [
        {
          position: 0,
          el: carouselItemsEl.value[0].$el,
        },
        {
          position: 1,
          el: carouselItemsEl.value[1].$el,
        },
        {
          position: 2,
          el: carouselItemsEl.value[2].$el,
        },
      ];

      const carouselOptions = {
        activeItemPosition: 0,
        interval: 3000,
        // indicators: {
        //   activeClasses: "bg-white dark:bg-gray-800",
        //   inactiveClasses:
        //     "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        //   items: [
        //     {
        //       position: 0,
        //       el: document.getElementById("carousel-indicator-1"),
        //     },
        //     {
        //       position: 1,
        //       el: document.getElementById("carousel-indicator-2"),
        //     },
        //     {
        //       position: 2,
        //       el: document.getElementById("carousel-indicator-3"),
        //     },
        //   ],
        // },
        // callback functions
        onNext: () => {},
        onPrev: () => {},
        onChange: () => {},
      };
      carousel.value = new Carousel(carouselItems, carouselOptions);
    });

    function nextItem() {
      carousel.value.next();
    }
    function previousItem() {
      carousel.value.prev();
    }

    return {
      carouselItemsEl,
      nextItem,
      previousItem,
    };
  },
};
</script>
