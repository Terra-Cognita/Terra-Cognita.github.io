<template>
  <router-link :to="{ name: `${to.name}`, hash: `${to.hash}` }">
    <UserIcon class="h-12 w-12 hover:text-magic-sky" />
  </router-link>
</template>

<script>
import { UserIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    UserIcon,
  },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
