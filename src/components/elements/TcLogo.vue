<template>
  <router-link :to="{ name: 'home' }">
    <logo-vertical
      class="logo-small fill-white stroke-white"
      :class="{ 'laptop:hidden': shrink, hidden: !shrink }"
      @click="$emit('closeMenu')"
    ></logo-vertical>
    <logo-horizontal
      class="logo-small fill-white stroke-white"
      :class="{ 'max-laptop:hidden': shrink }"
      @click="$emit('closeMenu')"
    ></logo-horizontal>
  </router-link>
</template>

<script>
import LogoVertical from "@/components/logos/LogoVertical.vue";
import LogoHorizontal from "@/components/logos/LogoHorizontal.vue";

export default {
  name: "Logo",
  components: {
    LogoVertical,
    LogoHorizontal,
  },
  props: {
    shrink: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
