<template>
  <div id="chatbox-input" class="space-x-2">
    <!-- input message -->
    <input
      type="text"
      placeholder="Write your message!"
      class="w-8/12 rounded-md bg-gray-200 p-2 text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none"
      v-model="userInputMsg"
      :disabled="isHearingBot"
      v-focus="!isHearingBot"
      @keyup.enter="onEnterMessage()"
    />
    <!-- send button -->
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-lg bg-sky-600 p-2 text-white transition duration-500 ease-in-out hover:bg-sky-700 focus:outline-none"
    >
      <span class="font-bold max-laptop:hidden">Send</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="ml-2 h-6 w-6 rotate-90 transform"
      >
        <path
          d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { ref, computed, watchEffect } from "vue";
import { useChatStore } from "@/store/chat.js";

export default {
  name: "ChatboxInput",
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
