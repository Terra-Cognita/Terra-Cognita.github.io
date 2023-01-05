<script setup>

  const teamMembers = [
    {name: 'Member1', function: 'Creator', msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat mauris vitae enim tincidunt pulvinar. Nam non turpis maximus, tincidunt purus et, varius metus. Pellentesque nec massa et nulla dignissim tempor. Suspendisse potenti. Proin quis quam auctor, posuere nulla ut, facilisis dolor. Vivamus vitae libero nisi. Nullam mattis suscipit elit."},
    {name: 'Member2', function: 'Designer', msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ullamcorper risus. Aenean enim leo, blandit facilisis tincidunt et, elementum in erat. Praesent pellentesque, nibh eget euismod consectetur, mauris magna laoreet eros, id dictum nunc velit et tortor. Cras egestas."},
    {name: 'Member3', function: 'FE Developer', msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex ex, hendrerit ut quam a, placerat porttitor justo. Donec posuere tortor nisl, a sodales turpis iaculis id. Maecenas rhoncus congue massa, ac pulvinar purus tempus"},
    {name: 'Member4', function: 'BE Developer', msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium non enim at blandit. Morbi elementum ac mauris ac semper. Phasellus vitae nisl eu eros commodo faucibus. Nam maximus ut lacus quis malesuada. Vivamus quis lorem cursus dolor bibendum gravida. Aenean consectetur neque libero, a."}
  ]
</script>

<template>
  <section>
    <div class="title">{{ $t('team.TITLE') }}</div>

    <div class="subtitle mt-5" v-html="$t('team.GENERAL_MSG')"></div>
    
    <div id="members" class="columns is-multiline">
      <div class="column is-full"
        v-for="member in teamMembers" :key="`ass-${member.name}`">
        <team-member 
          v-bind:id="`member-${member.name}`" 
          :member="member"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '../components/TeamMemberCard.vue'

export default {
  name: "TeamMember",
  components: {
    TeamMember
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>