<template>
  <div
    alt="Chatbox button"
    class="z-90 h-20 w-20 object-contain duration-300 hover:animate-bounce laptop:h-28 laptop:w-28"
    @click="$emit('toggleChat')"
  >
    <img :src="imgOrimbu" />
  </div>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";
export default {
  setup() {
    const { imgOrimbu } = useAssets();
    return {
      imgOrimbu,
    };
  },
};
</script>
