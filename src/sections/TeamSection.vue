<template>
  <tc-section id="team">
    <div class="title text-center text-sand-900">{{ $t("team.TITLE") }}</div>

    <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
      <div class="" v-for="memberId in team" :key="memberId">
        <frame-member
          class="fill-magic-earth stroke-magic-earth"
          :name="$t(`team.MEMBERS.${memberId}.NAME`)"
          :occupation="$t(`team.MEMBERS.${memberId}.OCCUPATION`)"
          :briefing="$t(`team.MEMBERS.${memberId}.BRIEF`)"
        >
        </frame-member>
      </div>
    </div>
  </tc-section>
</template>

<script>
import FrameMember from "@/components/layouts/FrameTeamMember.vue";

export default {
  name: "TeamSection",
  components: {
    FrameMember,
  },
  setup() {
    const team = [
      "VictorCorcino",
      "TeamMember2",
      "TeamMember3",
      "TeamMember4",
      "TeamMember5",
      "TeamMember6",
      "TeamMember7",
      "TeamMember8",
    ];
    return {
      team,
    };
  },
};
</script>
