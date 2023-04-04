<template>
  <router-link
    class="block py-2 font-black uppercase transition-colors duration-300 sm:inline-block sm:px-4"
    :to="{ name: `${to.name}`, hash: `${to.hash}` }"
    @click="$emit('closeMenu')"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
