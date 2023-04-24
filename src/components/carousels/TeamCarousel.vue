<template>
  <div id="team-carousel">
    <div
      id="carousel-snap"
      class="flex w-full snap-x snap-mandatory scroll-px-6 overflow-scroll"
      @scroll="snapScroll"
    >
      <member-card
        class="shrink-0 snap-center snap-always"
        v-for="memberId in teamKeys"
        :key="memberId"
        ref="memberCard"
        :id="memberId"
      >
      </member-card>
    </div>

    <div id="carousel-buttons" class="mt-4 flex flex-row">
      <avatar-card
        v-for="memberId in teamKeys"
        :key="memberId"
        :id="memberId"
      ></avatar-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MemberCard from "@/components/cards/TeamMemberCard.vue";
import AvatarCard from "@/components/cards/AvatarCard.vue";

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
  setup() {
    const memberCard = ref(null);

    function snapScroll(e) {
      // memberCard.value.forEach((card) => {
      //   console.log(">> CARD: ", card.id);
      //   console.log(card);
      //   console.log(card.target.offsetWidth);
      // });
      // console.log(memberCard);
      // console.log(e.target);
      // console.log(e.target.scrollLeft);
      // let centerX = e.target.offsetLeft + e.target.offsetWidth / 2;
    }

    return {
      memberCard,
      snapScroll,
    };
  },
};
</script>
