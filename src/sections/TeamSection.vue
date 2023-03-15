<template>
  <tc-section id="team" class="">
      <div class="tc-title has-text-centered">
        {{ $t('team.TITLE') }}
      </div>

      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="memberId in team" :key="memberId">
          <frame-member
            :name="$t(`team.MEMBERS.${memberId}.NAME`)"
            :occupation="$t(`team.MEMBERS.${memberId}.OCCUPATION`)"
            :briefing="$t(`team.MEMBERS.${memberId}.BRIEF`)">
          </frame-member>
        </div>
      </div>
  </tc-section>
</template>

<script>
import TcSection from '../layouts/TcSection.vue'
import FrameMember from "../components/FrameTeamMember.vue"

export default {
  name: "TeamSection",
  components: {
    TcSection,
    FrameMember
  },
  setup() {
    const team = [
      'VictorCorcino',
      'TeamMember2',
      'TeamMember3',
      'TeamMember4',
      'TeamMember5',
      'TeamMember6',
      'TeamMember7',
      'TeamMember8',
      ]
    return {
      team
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
