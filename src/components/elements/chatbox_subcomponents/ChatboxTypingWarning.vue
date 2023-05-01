<template>
  <div class="justify-self-start text-sm text-tc_forest-500">
    <input
      v-if="isHearingBot"
      class="pointer-events-none border-transparent bg-transparent"
      type="text"
      value="Orimbu is typing..."
      readonly
    />
    <input
      v-if="!isHearingBot"
      class="pointer-events-none border-transparent bg-transparent"
      type="text"
      value=""
      readonly
    />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useChatStore } from "@/store/chat.js";

export default {
  setup() {
    const chatStore = useChatStore();
    const { isHearingBot } = storeToRefs(chatStore);

    return {
      isHearingBot,
    };
  },
};
</script>
