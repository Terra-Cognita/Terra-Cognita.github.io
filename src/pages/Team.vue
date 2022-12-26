<script setup>
  import { ref } from 'vue'

  const teamMembers = [
    {name: 'Member1', function: 'Creator'},
    {name: 'Member2', function: 'Designer'},
    {name: 'Member3', function: 'FE Developer'},
    {name: 'Member4', function: 'BE Developer'}
  ]
</script>

<template>
  <h1>ABOUT US</h1>

  <div class="my-5" v-html="$t('team.GENERAL_MSG')"></div>

  <div id="members" class="columns is-multiline">
    <div class="column is-one-quarter"
      v-for="member in teamMembers" :key="`ass-${member.name}`">
      <team-member 
        v-bind:id="`member-${member.name}`" 
        :member="member"
      />
    </div>
  </div>

</template>

<script>
import TeamMember from '../components/TeamMemberCard.vue'

export default {
  name: "TeamMember",
  props: ['member'],
  components: {
    TeamMember
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
</style>