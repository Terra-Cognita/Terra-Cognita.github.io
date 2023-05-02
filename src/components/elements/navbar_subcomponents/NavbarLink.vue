<template>
  <router-link
    class="group block py-1 font-black uppercase hover:text-tc_magic-sky laptop:inline-block laptop:flex-auto laptop:truncate laptop:py-0"
    @touchstart="isTouched = true"
    @touchend="isTouched = false"
    @touchcancel="isTouched = false"
    :class="{
      'text-tc_magic-sky': isTouched,
    }"
    :to="{ name: `${to.name}`, hash: `${to.hash}` }"
  >
    <slot />
    <underline-icon
      class="hidden fill-tc_magic-sky stroke-tc_magic-sky"
      :class="{ 'laptop:group-hover:block': hasUnderline }"
    ></underline-icon>
  </router-link>
</template>

<script>
import UnderlineIcon from "@/components/icons/UnderlineIcon.vue";
import { ref } from "vue";

export default {
  components: {
    UnderlineIcon,
  },
  props: {
    to: {
      type: Object,
      required: true,
    },
    hasUnderline: {
      type: Boolean,
      default: true,
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
