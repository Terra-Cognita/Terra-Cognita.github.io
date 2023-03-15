<template>
  <section class="hero">
    <div class="hero-body">
      <slot/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
div.hero-body {
  padding: $pad-section-top $pad-web-right $pad-section-bottom $pad-web-left;
}
</style>