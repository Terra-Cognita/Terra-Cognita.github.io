<template>
  <div
    id="chatbox-input"
    class="mx-5 flex touch-none flex-row space-x-2 bg-bgChatText bg-contain bg-no-repeat"
  >
    <!-- input message -->
    <input
      type="text"
      placeholder="Write your message!"
      class="w-11/12 border-transparent bg-transparent p-2 pl-6 text-tc_earth-500 placeholder-tc_earth-100 caret-tc_earth-500 focus:border-transparent focus:placeholder-tc_sand-900 focus:ring-0 disabled:placeholder-tc_sky-300"
      v-model="userInputMsg"
      :disabled="isHearingBot"
      v-focus="!isHearingBot"
      @keyup.enter="onEnterMessage()"
    />
    <!-- send button -->
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 transition duration-500 ease-in-out hover:bg-transparent hover:bg-sky-700 focus:outline-none"
      @click="onEnterMessage()"
    >
      <send-icon class="h-5 w-5 fill-tc_earth-100"></send-icon>
    </button>
  </div>
</template>

<script>
import SendIcon from "@/components/icons/SendIcon.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
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
      if (userInputMsg.value.toLowerCase() === "clear") {
        chatStore.clearHistory();
        userInputMsg.value = "";
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
