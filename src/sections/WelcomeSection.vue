<template>
  <section id="welcome" class="hero is-forest-3">
    <div class="hero-body">
      <section-naming>A new world</section-naming>
      <welcome-tc></welcome-tc>
    </div>
  </section>
</template>

<script>
import SectionNaming from "../components/SectionNaming.vue"
import WelcomeTc from "../headlines/WelcomeTc.vue"

export default {
  name: "WelcomeSection",
  components: {
    SectionNaming,
    WelcomeTc
  },
  setup() {
    return {}
  }
}
</script>


<style scoped>
</style>
