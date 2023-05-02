<template>
  <div id="navbar-burger">
    <button
      id="burger-symbol"
      v-show="!isBurger"
      @click="$emit('openMenu')"
      @touchstart="isTouched = true"
      @touchend="isTouched = false"
      @touchcancel="isTouched = false"
    >
      <burger-icon
        class="h-6 w-6 fill-tc_sand-100 stroke-tc_sand-100"
        :class="{
          'stroke-tc_magic-sky': isTouched,
          'fill-tc_magic-sky': isTouched,
        }"
      ></burger-icon>
    </button>
    <button
      id="close-symbol"
      v-show="isBurger"
      @click="$emit('closeMenu')"
      @touchstart="isTouched = true"
      @touchend="isTouched = false"
      @touchcancel="isTouched = false"
    >
      <close-icon
        class="h-6 w-6 fill-tc_sand-100 stroke-tc_sand-100"
        :class="{
          'stroke-tc_magic-sky': isTouched,
          'fill-tc_magic-sky': isTouched,
        }"
      ></close-icon>
    </button>
  </div>
</template>

<script>
import BurgerIcon from "@/components/icons/BurgerIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import { ref } from "vue";

export default {
  components: {
    BurgerIcon,
    CloseIcon,
  },
  props: {
    isBurger: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isTouched = ref(false);

    return {
      isTouched,
    };
  },
};
</script>
