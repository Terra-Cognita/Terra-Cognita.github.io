<template>

  <nav class="bg-forest-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" :src="logoWhite" alt="Terra Cognita Logo">
            <img class="hidden h-8 w-auto lg:block" :src="logoWhite" alt="Terra Cognita Logo">
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">

              <router-link class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#welcome' }">WELCOME</router-link>
              <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#gameplay' }">GAMEPLAY</router-link>
              <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#team' }">TEAM</router-link>
              <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="closeNavLinks()" :to="{ name: 'login'}">ACCESS</router-link >

              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">

        <router-link class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#welcome' }">WELCOME</router-link>
        <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#gameplay' }">GAMEPLAY</router-link>
        <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" @click="closeNavLinks()" :to="{ name: 'home', hash: '#team' }">TEAM</router-link>
        <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" @click="closeNavLinks()" :to="{ name: 'login'}">ACCESS</router-link >

        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      </div>
    </div>
  </nav>

</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAssets } from '../composables/useAssets.js'

export default {
  name: "Navbar",
  setup() {
    
    window.addEventListener('scroll', graduateBackgroundOpacity);

    const router = useRouter()
    const route = useRoute()

    // computed: DOM elements
    const navbar = computed( () => document.getElementById('navbar'))
    const burgerIcon = computed( () => document.querySelector('#burger'))
    const navbarMenu = computed( () => document.querySelector('#navbar-links'))

    // Scrolling event to change navbar bg opacity
    const windowHeight = ref(window.innerHeight);
    const topPagePosition = ref(document.documentElement.scrollTop)
    const bgOpacity = ref(0)

    function graduateBackgroundOpacity(event) {
      windowHeight.value = window.innerHeight;
      topPagePosition.value = document.documentElement.scrollTop

      let newOpacity = topPagePosition.value / windowHeight.value
      if(newOpacity > 1) { 
        bgOpacity.value = 1 
      } else { 
        bgOpacity.value = Math.round (newOpacity * 10) / 10 
      }
    }

    const { logoWhite } = useAssets()

    // functions: navlinks logic    
    function clickNavBurger() {
      navbarMenu.value.classList.toggle('is-active')
      burgerIcon.value.classList.toggle('is-active')
    }
    function closeNavLinks() {
      navbarMenu.value.classList.remove('is-active')
      burgerIcon.value.classList.remove('is-active')
    }

    return {
      logoWhite,
      bgOpacity,
      clickNavBurger,
      closeNavLinks   
    }
  }
}
</script>

<style scoped>
/* 
#navbar {
  --bg-color: 109, 102, 45; // rgb equivalent to < $forest-2 > color defined in assets/sass/variables
}
nav {
  padding: 0 $pad-web-right 0 $pad-web-left;
}
.navbar-item {
  color: $sand-1;
  font-weight: 900;
  text-shadow: 0.05em 0 0.05em $sand-1;
}
.navbar-item:hover {
  color: $sand-3;
  text-shadow: 0.05em 0 0.05em $sand-3;
  background-color: transparent;
}
.navbar-item:focus-within {
  color: $sand-1;
  background-color: transparent;
}
.login-item{
  margin-left: 5vw;
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
} */

</style>
