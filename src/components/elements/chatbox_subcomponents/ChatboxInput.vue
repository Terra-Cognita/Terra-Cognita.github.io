<template>
  <div
    id="chatbox-input"
    class="space-x-2 bg-bgChatText bg-contain bg-no-repeat"
  >
    <!-- input message -->
    <input
      type="text"
      placeholder="Write your message!"
      class="w-8/12 rounded-md border-transparent bg-transparent p-2 text-tc_earth-500 placeholder-tc_earth-100 focus:border-transparent focus:placeholder-tc_sand-900 focus:ring-0"
      v-model="userInputMsg"
      :disabled="isHearingBot"
      v-focus="!isHearingBot"
      @keyup.enter="onEnterMessage()"
    />
    <!-- send button -->
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 transition duration-500 ease-in-out hover:bg-sky-700 focus:outline-none"
    >
      <send-icon class="h-5 w-5 fill-tc_earth-100"></send-icon>
    </button>
  </div>
</template>

<script>
import SendIcon from "@/components/icons/SendIcon.vue";
import { storeToRefs } from "pinia";
import { ref, computed, watchEffect } from "vue";
import { useChatStore } from "@/store/chat.js";

export default {
  name: "ChatboxInput",
  components: {
    SendIcon,
  },
  setup() {
    const chatStore = useChatStore();
    const { isHearingBot } = storeToRefs(chatStore);

    const userInputMsg = ref("");

    function onEnterMessage() {
      if (userInputMsg.value === "") {
        return;
      }
      chatStore.sendNewMessage("user", userInputMsg.value);
      userInputMsg.value = "";
    }

    return {
      isHearingBot,
      userInputMsg,
      onEnterMessage,
    };
  },
};
</script>
