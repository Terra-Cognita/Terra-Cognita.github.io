<script setup>  
</script>

<template>
  <div id="app">

    <nav class="navbar is-dark is-fixed-top is-transparent" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a id="nav-logo-item" class="navbar-item" href="/">
          <img id="logo-img" src="./assets/logos/terra-cognita_white.png" alt="Terra Cognita Game">
        </a>
        <a role="button" id="burger" class="navbar-burger" @click="clickNavBurger()" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div id="nav-links" class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <a role="button" class="navbar-item" @click="goto('home')">  About TC Game </a>
          <a role="button" class="navbar-item" @click="goto('team')"> Team </a>
          <a role="button" class="navbar-item" @click="goto('lore')"> Lore </a>
          <a role="button" class="navbar-item" @click="goto('dev')">  Develop Env </a>          
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                 More #1 
              </a>
              <a class="navbar-item">
                More #2
              </a>
            </div>
          </div> -->

        </div>
      </div>

    </nav>

    <div id="main-view" class="has-navbar-fixed-top">
      <router-view ></router-view>
    </div>
    <div id="chatbox">
      <chatbot v-if="isChatOpen" @close="isChatOpen = false">></chatbot>
    </div>
    <div class="chatbox__button">
      <button @click="openChatBot()"><img id="chatbox__button-img" src="./assets/logos/terra-cognita_symbol.png" draggable="false" class="not-draggable-fig" /></button>
    </div>

    <!-- FOOTER -->
    <footer id="footer" class="footer has-background-grey">
      <div class="mx-4 columns is-multiline">

          <div class="column is-one-quarter has-text-left p-0">
            <p>Powered by</p>
            <img id="logo-cardano-img" src="./assets/logos/Cardano-RGB_Logo-Full-White.svg" alt="Cardano">
          </div>

          <div class="column is-three-quarters has-text-right-tablet p-0">
            <p>Withdrawl Policy Privacy Terms of Conditions Imprint</p>
            <div id="social-media-icons" class="my-3">
              <a class="icon mr-5" href="https://github.com/Project-Catalyst/ca-tool" target="_blank">
                <o-icon pack="mdi" icon="github" size="large" variant="dark"></o-icon>
              </a>
              <a class="icon mr-4" href="https://twitter.com/AimCardano" target="_blank">
                <o-icon pack="mdi" icon="twitter" size="large" variant="dark"></o-icon>
              </a>
              <a class="icon" href="https://t.me/joinchat/Ivl50eWG7r0zODI1" target="_blank">
                <o-icon pack="mdi" icon="telegram" size="large" variant="dark"></o-icon>
              </a>
            </div>
          </div>

          <div class="column is-full p-0"> 
            <p class="has-text-left">AdaQuest PolicyID:</p>
          </div> 
      </div>
    </footer>
  </div>
</template>

<script>
import Chatbot from "./components/Chatbot.vue"

export default {
  name: "App",
  components: {
    Chatbot
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
    }
  },
  methods: {
    openChatBot() {
      this.isChatOpen = !this.isChatOpen
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
#nav-logo-item {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 2 !important;
  padding-right: 0;
}
#logo-cardano-img {
  width:15em;
  height:auto;
  opacity: 0.3;
}
#chatbox {
  position: sticky;
  height: 40em;
  width: 30em;
  bottom: 7%;
  margin-left: calc(97vw - 30em);
}
.chatbox__button {
  text-align: center;
  position: sticky;
  bottom: 3%;
  margin-top: 0.7em;
  margin-left: calc(97vw - 3em);
  width: 3em;
  height: 3em;
}
.chatbox__button button,
.chatbox__button button:focus,
.chatbox__button button:visited {
  padding: 10px;
  background: whitesmoke;
  border: none;
  outline: none;
  opacity: 0.8;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 1);
  cursor: pointer;
}
#chatbox__button-img {
  max-width:100%;
  height:auto;
}

</style>
