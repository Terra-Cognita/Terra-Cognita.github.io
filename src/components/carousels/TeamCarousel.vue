<template>
  <div id="team-carousel">
    <div
      id="carousel-snap"
      ref="snapEl"
      class="flex w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-scroll overscroll-none"
      @scroll="snapScroll"
    >
      <member-card
        class="shrink-0 snap-center snap-always scroll-mx-2"
        v-for="(memberId, index) in teamKeys"
        :ref="
          (el) => {
            cardsEl[index] = el;
          }
        "
        :key="memberId"
        :id="memberId"
      >
      </member-card>
    </div>

    <div id="carousel-buttons" class="mt-4 flex flex-row">
      <avatar-card
        v-for="memberId in teamKeys"
        :key="memberId"
        :id="memberId"
        :active="activeCardId === memberId"
      ></avatar-card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import MemberCard from "@/components/cards/TeamMemberCard.vue";
import AvatarCard from "@/components/cards/TeamAvatarCard.vue";

export default {
  name: "TeamCarousel",
  components: {
    MemberCard,
    AvatarCard,
  },
  props: {
    teamKeys: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const cardsEl = ref([]);
    const snapEl = ref(null);

    const activeCardId = ref(props.teamKeys[0]);
    const cardCentersX = ref({});
    const snapGrid = ref([]);
    const prevScroll = ref(null);

    onMounted(() => {
      let delta = snapEl.value.offsetWidth / 4;
      snapGrid.value = [0 * delta, 1 * delta, 2 * delta, 3 * delta, 4 * delta];
      cardCentersX.value = getCardsCenters();
      prevScroll.value = snapEl.scrollLeft;
    });

    function getCardsCenters() {
      let centers = {};
      cardsEl.value.forEach((card) => {
        centers[card.id] = card.centerX;
      });
      return centers;
    }

    function getActiveCardId(grid, scrollPos) {
      let choiceCenter = Object.keys(cardCentersX.value).filter((key) => {
        return (
          cardCentersX.value[key] >= grid[1] &&
          cardCentersX.value[key] <= grid[3]
        );
      });

      if (choiceCenter.length !== 0) {
        return choiceCenter[0];
      }
      // no central choice
      else {
        // ascending scrolling
        if (scrollPos > prevScroll.value) {
          let choiceAscending = Object.keys(cardCentersX.value).filter(
            (key) => {
              return (
                cardCentersX.value[key] >= grid[3] &&
                cardCentersX.value[key] <= grid[4]
              );
            }
          );
          return choiceAscending[0];
        }
        // descending scrolling
        else {
          // case last card: avoid returning scroll movement
          if (activeCardId.value === props.teamKeys.at(-1)) {
            return activeCardId.value;
          }
          let choiceDescending = Object.keys(cardCentersX.value).filter(
            (key) => {
              return (
                cardCentersX.value[key] >= grid[0] &&
                cardCentersX.value[key] <= grid[1]
              );
            }
          );
          return choiceDescending[0];
        }
      }
    }

    function snapScroll(event) {
      let dynamicGrid = snapGrid.value.map(
        (pos) => pos + event.target.scrollLeft
      );
      activeCardId.value = getActiveCardId(
        dynamicGrid,
        event.target.scrollLeft
      );
      prevScroll.value = event.target.scrollLeft;
    }

    return {
      snapEl,
      cardsEl,
      activeCardId,
      snapScroll,
    };
  },
};
</script>
