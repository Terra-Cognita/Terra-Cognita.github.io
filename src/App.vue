<script setup>  
</script>

<template>
  <div id="app" class="hero">
    
    <!-- NAVBAR -->
    <div class="hero-head">
      <nav id="navbar" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <!-- Brand & Burger -->
        <div class="navbar-brand">
          <a id="nav-logo-item" class="navbar-item" href="/">
            <img id="nav-logo-img" src="./assets/logos/terra-cognita_Logo2_Tela-5K.png" alt="Terra Cognita Game" draggable="false" class="not-draggable-fig">
          </a>
          <a role="button" id="burger" class="navbar-burger" @click="clickNavBurger()" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <!-- Menu Links -->
        <div id="nav-links" class="navbar-menu">
          <div class="navbar-end">
            <o-button class="navbar-item nav-button" variant="primary" size="large" @click="goto('home')">About</o-button>
            <o-button class="navbar-item nav-button" variant="primary" size="large" @click="goto('team')">Team</o-button>
            <o-button class="navbar-item nav-button" variant="primary" size="large" @click="goto('lore')">Lore</o-button>
            <div id="nav-player" class="navbar-item"><player></player></div>
          </div>
        </div>
      </nav>
    </div>

    <!-- MAIN VIEW -->
    <div id="main-view" class="hero-body">
      <div class="columns"> 
        <div id="router-view" class="column is-6">
          <router-view></router-view>
        </div>
        <div id="chatbox-view" class="column">
          <chatbox v-if="isChatOpen"></chatbox>
        </div>
      </div>

      <div id="chatbox__button" class="button is-floating" @click="openChatBot()">
        <p>Ask<br/>Orimbu</p>
      </div>
    </div>
    
    <!-- FOOTER -->
    <div class="hero-foot">
      <nav id="footer" class="level is-mobile is-fixed-bottom">
        <div class="level-left">
          <div class="level-item m-0">
            <p><strong>Powered by &nbsp;</strong></p>
          </div>
          <div class="level-item">
            <img id="footer-logo-cardano-img" src="./assets/logos/Cardano-RGB_Logo-Full-White.svg" alt="Cardano" draggable="false" class="not-draggable-fig">
          </div>
        </div>
        <!-- Right side: Default -->
        <div id="footer-links" class="level-right is-hidden-mobile">
          <p class="level-item">
            <a class="footer-icon" href="https://github.com/Terra-Cognita" target="_blank">
              <o-icon pack="mdi" icon="github" variant="primary" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class="footer-icon" href="https://twitter.com/AimCardano" target="_blank">
              <o-icon pack="mdi" icon="twitter" variant="primary" size="medium"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class=" footer-icon" href="https://t.me/joinchat/Ivl50eWG7r0zODI1" target="_blank">
              <o-icon pack="mdi" icon="telegram" variant="primary" size="medium"></o-icon>
            </a>
          </p>
        </div>
        <!-- Right side: Mobile -->
        <div id="footer-links-mobile" class="level-right is-hidden-tablet">
          <p class="level-item">
            <a class="footer-icon" href="https://github.com/Project-Catalyst/ca-tool" target="_blank">
              <o-icon pack="mdi" icon="github" variant="primary"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class="footer-icon" href="https://twitter.com/AimCardano" target="_blank">
              <o-icon pack="mdi" icon="twitter" variant="primary"></o-icon>
            </a>
          </p>
          <p class="level-item">
            <a class="footer-icon" href="https://t.me/joinchat/Ivl50eWG7r0zODI1" target="_blank">
              <o-icon pack="mdi" icon="telegram" variant="primary"></o-icon>
            </a>
          </p>
        </div>
      </nav> 
    </div>
    
  </div>
</template>

<script>
import Chatbox from "./components/Chatbox.vue"
import Player from "./components/Player.vue"

export default {
  name: "App",
  components: {
    Chatbox,
    Player
  },
  data(){
    return {
      isChatOpen: false
    }
  },
  computed: {
    burgerIcon() {
      return document.querySelector('#burger')
    },
    navbarMenu() {
      return document.querySelector('#nav-links')
    }, 
    routerView() {
      return document.querySelector('#router-view')
    }
  },
  methods: {
    openChatBot() {
      this.isChatOpen = !this.isChatOpen
      this.routerView.classList.toggle('is-hidden-mobile')
    },
    goto(routerName) {
      this.$router.push({name: routerName})
      this.closeNavLinks()
    },
    clickNavBurger() {
      this.navbarMenu.classList.toggle('is-active')
      this.burgerIcon.classList.toggle('is-active')
    },
    closeNavLinks() {
      this.navbarMenu.classList.remove('is-active')
      this.burgerIcon.classList.remove('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>

#chatbox__button.button.is-floating {
  font-size: 1rem;
  width: 5em;
  height: 3em;
  margin: 0.5em;
  line-height: 1em;
  color: black;
  background: rgba(74, 179, 238, 1);
  opacity: 0.85;
  border: none;
  outline: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 1);
  cursor: pointer;
  bottom: 4rem;
  right: 3rem;
}

#nav-logo-item {
  width: 20rem;
  height: auto;
}

.navbar-item {
  align-items: flex-start;
  margin: 1rem;
  width: 10rem;
}
</style>
