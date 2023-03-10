<template>
  <section class="hero is-medium is-forest-2">
    <div class="hero-body">
      <div id="breathing-message" class="title">
        <slot/>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "BreathingText",
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#breathing-message {
  color: $magic-sand;
}
</style>