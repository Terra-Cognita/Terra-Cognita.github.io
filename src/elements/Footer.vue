<template>
  <section id="footer" class="hero is-forest-2">
    <div class="hero-body">
      <div class="level">
        <div class="level-left">
          <div id="footer-logo-item" class="level-item">
            <img id="footer-logo-img" src="@/assets/logos/terra-cognita_white.svg" alt="Terra Cognita" draggable="false" class="not-draggable-fig">
          </div>
        </div>
        <div id="footer-links" class="level-right">
          <p class="level-item footer-icon mr-5">
            <a href="" target="_blank">
              <o-icon pack="mdi" icon="email-outline" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item footer-icon mr-5">
            <a href="https://twitter.com/TCog1576" target="_blank">
              <o-icon pack="mdi" icon="twitter" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item footer-icon mr-5">
            <a href="" target="_blank">
              <o-icon pack="mdi" icon="linkedin" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item footer-icon">
            <a href="https://github.com/Terra-Cognita" target="_blank">
              <o-icon pack="mdi" icon="github" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
        </div>
      </div>
      <hr class="is-divider">
      <p class="has-text-centered">© Terra Cognita 2023. The land of discovery.</p>
    </div>
  </section>

</template>

<script>

export default {
  name: "Footer",
  setup() {
    return { }
  }
}
</script>

<style lang="scss" scoped>
div.hero-body {
  padding-left: 0;
  padding-right: 0;
}
div.level {
  padding-left: $pad-web-left;
  padding-right: $pad-web-right;
}
.is-divider {
  margin-left: calc($pad-web-left / 2);
  margin-right: calc($pad-web-right / 2);
  background-color: $sand-3;
}
#footer-logo-item {
  width: 20rem;
  height: auto;
}
#footer-logo-img {
  max-height: 100% !important;
}
</style>
