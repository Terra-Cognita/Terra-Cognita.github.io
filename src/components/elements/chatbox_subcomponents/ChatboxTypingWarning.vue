<template>
  <div class="pointer-events-none h-7 justify-self-start text-tc_forest-500">
    <input
      v-if="isHearingBot"
      class="border-transparent bg-transparent py-0 text-sm"
      type="text"
      value="Orimbu is typing..."
      readonly
    />
    <input
      v-if="!isHearingBot"
      class="border-transparent bg-transparent"
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
