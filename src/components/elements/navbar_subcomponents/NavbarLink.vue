<template>
  <router-link
    class="block py-1 font-black uppercase transition-colors duration-300 hover:text-tc_magic-sky laptop:inline-block laptop:flex-auto laptop:truncate laptop:py-0"
    :to="{ name: `${to.name}`, hash: `${to.hash}` }"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
};
</script>
