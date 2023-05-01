<template>
  <div
    alt="Chatbox button"
    class="z-40 h-20 w-20 cursor-pointer object-contain duration-300 hover:animate-bounce laptop:h-28 laptop:w-28"
    @click="$emit('toggleChat')"
  >
    <img class="pointer-events-none" src="@/assets/images/chatButton.png" />
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
