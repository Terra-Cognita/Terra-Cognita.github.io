<template>

  <nav id="navbar" class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <!-- Brand & Burger -->
    <div class="navbar-brand">
      <a id="nav-logo-item" class="navbar-item" href="/">
        <img id="nav-logo-img" src="@/assets/logos/terra-cognita_white.png" alt="Terra Cognita Game" draggable="false" class="not-draggable-fig">
      </a>
      <a role="button" id="burger" class="navbar-burger" @click="clickNavBurger()" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Menu Links -->
    <div id="nav-links" class="navbar-menu">
      <!-- <div class="navbar-start"></div> -->
      <div class="navbar-end">
        <a class="navbar-item" @click="goto('home')">WELCOME</a>
        <a class="navbar-item" @click="goto('team')">GAMEPLAY</a>
        <a class="navbar-item" @click="goto('lore')">TEAM</a>
        <a class="navbar-item" @click="goto('lore')">ACCESS</a>
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
    const navbarMenu = computed( () => document.querySelector('#nav-links'))

    // functions    
    function goto(routerName) {
      router.push({name: routerName})
      closeNavLinks()
    }

    function clickNavBurger() {
      navbarMenu.value.classList.toggle('is-active')
      burgerIcon.value.classList.toggle('is-active')
    }

    function closeNavLinks() {
      navbarMenu.value.classList.remove('is-active')
      burgerIcon.value.classList.remove('is-active')
    }

    return {
      goto, 
      clickNavBurger,    
    }
  }
}
</script>

<style lang="scss" scoped>
#nav-logo-item {
  width: 20rem;
  height: auto;
}

#nav-logo-img {
  max-height: 100% !important;
}
.nav-button span {
  color: black;
}
#burger {
  background-color: transparent;
}
#burger span {
  color: rgba(45, 140, 195);
}
// .navbar-item {
//   align-items: flex-start;
//   margin: 1rem;
//   width: 10rem;
// }
</style>
