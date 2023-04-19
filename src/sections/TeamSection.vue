<template>
  <tc-section id="team">
    <div class="title text-center">{{ $t("team.TITLE") }}</div>

    <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
      <div class="team-member" v-for="memberId in team" :key="memberId">
        <member-card :id="memberId"> </member-card>
      </div>
    </div>
  </tc-section>
</template>

<script>
import MemberCard from "@/components/cards/TeamMemberCard.vue";

export default {
  name: "TeamSection",
  components: {
    MemberCard,
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
