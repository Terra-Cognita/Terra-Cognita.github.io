<template>

  <!-- <footer class="footer is-forest-2">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer> -->
  <section id="footer" class="hero is-forest-2">
    <div class="hero-body">
      <div class="level">
        <div class="level-left">
          <div id="footer-logo-item" class="level-item">
            <img id="footer-logo-img" src="@/assets/logos/terra-cognita_white.png" alt="Terra Cognita" draggable="false" class="not-draggable-fig">
          </div>
        </div>
        <div id="footer-links" class="level-right">
          <p class="level-item">
            <a class="footer-icon" href="https://github.com/Terra-Cognita" target="_blank">
              <o-icon pack="mdi" icon="github" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class="footer-icon" href="https://twitter.com/AimCardano" target="_blank">
              <o-icon pack="mdi" icon="twitter" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class=" footer-icon" href="https://t.me/joinchat/Ivl50eWG7r0zODI1" target="_blank">
              <o-icon pack="mdi" icon="telegram" variant="sand-3" size="medium"></o-icon>
            </a>
          </p>
        </div>
      </div>
      <hr id="divider">
      <p class="has-text-centered">© Terra Cognita 2023. The land of discovery.</p>
    </div>
  </section>

</template>

<script>

export default {
  name: "Footer",
  setup() {
    
    return {       
    }
  }
}
</script>

<style lang="scss" scoped>
#divider {
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
