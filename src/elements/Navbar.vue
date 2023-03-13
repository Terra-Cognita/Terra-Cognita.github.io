<template>

  <nav id="navbar" class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    
    <!-- Brand & Burger -->
    <div class="navbar-brand">

      <router-link id="navbar-logo" class="navbar-item" :to="{ name: 'home' }">
        <img id="navbar-logo-img" src="@/assets/logos/terra-cognita_white.svg" alt="Terra Cognita Game" draggable="false" class="not-draggable-fig">
      </router-link>

      <a id="burger" class="navbar-burger" role="button" @click="clickNavBurger()" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Menu Links -->
    <div id="navbar-links" class="navbar-menu">
      <!-- <div class="navbar-start"></div> -->

      <div class="navbar-end">
        <router-link class="navbar-item" @click="closeNavLinks()" :to="{ name: 'home', hash: '#welcome' }">WELCOME</router-link>
        <router-link class="navbar-item" @click="closeNavLinks()" :to="{ name: 'home', hash: '#gameplay' }">GAMEPLAY</router-link>
        <router-link class="navbar-item" @click="closeNavLinks()" :to="{ name: 'home', hash: '#team' }">TEAM</router-link>
        <router-link class="navbar-item" @click="closeNavLinks()" :to="{ name: 'login'}">ACCESS</router-link >
      </div>
    </div>
  </nav>

</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: "Navbar",
  setup() {
    
    const router = useRouter()
    const route = useRoute()

    // computed
    const burgerIcon = computed( () => document.querySelector('#burger'))
    const navbarMenu = computed( () => document.querySelector('#navbar-links'))

    // functions    
    function clickNavBurger() {
      navbarMenu.value.classList.toggle('is-active')
      burgerIcon.value.classList.toggle('is-active')
    }
    function closeNavLinks() {
      navbarMenu.value.classList.remove('is-active')
      burgerIcon.value.classList.remove('is-active')
    }

    return {
      clickNavBurger,
      closeNavLinks   
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-item {
  color: $sand-1;
}
.navbar-item:hover {
  color: $sand-3;
  background-color: transparent;
}
.navbar-item:focus-within {
  color: $sand-1;
  background-color: transparent;
}
.navbar-burger {
  color: $sand-1
}
.navbar-menu {
  background-color: transparent;
}

#navbar-logo {
  width: 15rem;
  height: auto;
}
#navbar-logo-img {
  max-height: 100% !important;
}

</style>
