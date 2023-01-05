<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="card member-card columns p-1 m-1">
    <div class="column is-2"> 
      <img class="team-member_avatar" src="../assets/images/avatar.png">
    </div>
    <div class="column is-10"> 
      <p><b>{{member.name}}</b></p>
      <p><b>{{member.function}}</b></p>
      <p><small><em>{{member.msg}}</em></small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: ['member'],
  setup() {
    return {}
  }
}
</script>



<style lang="scss" scoped>
  .member-card {
    background-color: rgba(29, 98, 138, 0.692);
  }
</style>
