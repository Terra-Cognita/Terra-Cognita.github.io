<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="card">
    <img class="team-member_avatar" src="../assets/images/avatar.png">
    <p><b>{{member.name}}</b></p>
    <p><b>{{member.function}}</b></p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: ['member'],
  data(){
    return {
    }
  }
}
</script>



<style scoped>
</style>
