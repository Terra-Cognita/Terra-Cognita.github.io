<template>
  <div id="navbar-burger">
    <button id="burger-symbol" v-show="!isMenuOpen" @click="$emit('openMenu')">
      <burger-icon
        class="h-6 w-6 fill-tc_sand-100 stroke-tc_sand-100"
      ></burger-icon>
    </button>
    <button id="close-symbol" v-show="isMenuOpen" @click="$emit('closeMenu')">
      <close-icon class="h-6 w-6 fill-tc_sand-100 stroke-tc_sand-100">
      </close-icon>
    </button>
  </div>
</template>

<script>
import BurgerIcon from "@/components/icons/BurgerIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

export default {
  components: {
    BurgerIcon,
    CloseIcon,
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
