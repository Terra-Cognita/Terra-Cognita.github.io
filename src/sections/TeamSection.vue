<template>
  <tc-section id="team">
    <div class="title text-center">{{ $t("team.TITLE") }}</div>

    <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
      <div class="team-member" v-for="memberId in team" :key="memberId">
        <card-member
          :id="memberId"
          :name="$t(`team.MEMBERS.${memberId}.NAME`)"
          :occupation="$t(`team.MEMBERS.${memberId}.OCCUPATION`)"
        >
        </card-member>
      </div>
    </div>
  </tc-section>
</template>

<script>
import CardMember from "@/components/cards/CardTeamMember.vue";

export default {
  name: "TeamSection",
  components: {
    CardMember,
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
