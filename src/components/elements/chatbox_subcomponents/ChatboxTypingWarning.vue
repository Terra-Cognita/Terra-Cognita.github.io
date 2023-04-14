<template>
  <div class="text-sm text-sky-900">
    <input
      v-if="isHearingBot"
      class="bg-transparent"
      type="text"
      value="Orimbu is typing..."
      readonly
    />
    <input
      v-if="!isHearingBot"
      class="bg-transparent"
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
