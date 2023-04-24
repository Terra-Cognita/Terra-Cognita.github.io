<template>
  <div id="team">
    <tc-section>
      <div class="title text-center">{{ $t("team.TITLE") }}</div>

      <div
        id="team-cards-grid"
        class="grid grid-cols-4 gap-5 max-laptop:hidden"
      >
        <member-card v-for="memberId in team" :key="memberId" :id="memberId">
        </member-card>
      </div>

      <div class="laptop:hidden">
        <team-carousel :teamKeys="team"></team-carousel>
      </div>
    </tc-section>
  </div>
</template>

<script>
import MemberCard from "@/components/cards/TeamMemberCard.vue";
import TeamCarousel from "@/components/carousels/TeamCarousel.vue";

export default {
  name: "TeamSection",
  components: {
    MemberCard,
    TeamCarousel,
  },
  setup() {
    const team = [
      "VictorCorcino",
      "LucioBaglione",
      "PhilKhoo",
      "FilipBlagojevic",
      "FelipeMarcel",
      "JulianaMattos",
      "MarieBarrau",
    ];
    return {
      team,
    };
  },
};
</script>
