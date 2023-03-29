<template>
  <nav id="navbar"
       class="bg-forest-500 shadow fixed w-full z-10 transition-colors duration-500"
       :class="{ 'bg-transparent shadow-none': !showBackground }">
    <tc-section class="py-2 md:py-4">

      <div class="flex flex-col sm:flex-row items-center justify-between">
        
        <div class="w-full flex flex-row items-center justify-between">
          
          <!-- logo -->
          <router-link id="navbar-logo" class="shrink-0" :to="{ name: 'home' }">
            <img class="logo-img" :src="logoWhite" alt="Terra Cognita Logo">
          </router-link>     

          <!-- mobile controlers -->
          <div>
            <button v-show="!isVisible"
                    class="sm:hidden"
                    @click="toggle">
              <svg class="w-6 h-6 stroke-sand-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <button v-show="isVisible"
                    class="sm:hidden"
                    @click="toggle">
              <svg class="w-6 h-6 stroke-sand-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- navbar links -->
        <div class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block text-sand-100"
            :class="{ 'hidden': !isVisible }">
          <navbar-link :to="navlinkProps.WELCOME.to"
                       :label="navlinkProps.WELCOME.label" 
                       @close-menu="hide"/>
          <navbar-link :to="navlinkProps.GAMEPLAY.to"
                       :label="navlinkProps.GAMEPLAY.label" 
                       @close-menu="hide"/>
          <navbar-link :to="navlinkProps.TEAM.to"
                       :label="navlinkProps.TEAM.label" 
                       @close-menu="hide"/>
          <navbar-link :to="navlinkProps.LOGIN.to"
                       :label="navlinkProps.LOGIN.label" 
                       @close-menu="hide"/>
        </div>

      </div>

    </tc-section>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import { useToggle } from "@/composables/useToggle";
import { useAssets } from '@/composables/useAssets.js'
import { ref, computed, watchEffect } from 'vue';

export default {
  name: "Navbar",
  components: {
    NavbarLink,
  },
  props: {},
  setup() {
    const { logoWhite } = useAssets()
    let { isVisible, toggle, hide } = useToggle();

    const navlinkProps = {
      WELCOME: {
        to: { name: 'home', hash: '#welcome' },
        label: "Welcome"
      },
      GAMEPLAY: {
        to: { name: 'home', hash: '#gameplay' },
        label: "Gameplay"
      },
      TEAM: {
        to: { name: 'home', hash: '#team' },
        label: "Team"
      },
      LOGIN: {
        to: { name: 'login', hash: '' },
        label: "Access"
      }
    }
    
    let scrollBackgroundActive = ref(false);
    let menuBackgroundActive = ref(false);

    watchEffect(() => {
      if(isVisible.value) { 
        menuBackgroundActive.value = true 
      }
      else { 
        menuBackgroundActive.value = false 
      }
    })

    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;
      if (bodyTopPosition < -150) {
        scrollBackgroundActive.value = true;
      } else {
        scrollBackgroundActive.value = false;
      }
    });

    const showBackground = computed(() => {
      return scrollBackgroundActive.value || menuBackgroundActive.value
    })
    
    return {
      logoWhite,
      isVisible,
      toggle,
      hide,
      showBackground,
      navlinkProps
    };
  },
};
</script>