<template>
  <div
    alt="Chatbox button"
    class="z-50 h-20 w-20 cursor-pointer object-contain duration-300 hover:animate-bounce laptop:h-28 laptop:w-28"
    :class="{ 'h-24': isTouched, 'w-24': isTouched }"
    @click="$emit('toggleChat')"
    @touchstart="isTouched = true"
    @touchend="isTouched = false"
    @touchcancel="isTouched = false"
  >
    <img class="pointer-events-none" src="@/assets/images/chatButton.png" />
  </div>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";
import { ref } from "vue";

export default {
  setup() {
    const { imgOrimbu } = useAssets();
    const isTouched = ref(false);

    return {
      imgOrimbu,
      isTouched,
    };
  },
};
</script>
