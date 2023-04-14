<template>
  <div
    id="chatbox-display"
    class="scrollbar scrollbar-track scrollbar-thumb to-magic-sky flex flex-col-reverse gap-y-2 overflow-y-scroll rounded-md bg-gradient-to-b from-sky-800"
  >
    <chatbox-message
      v-for="message in chatHistory"
      :key="message.id"
      :id="message.id"
      :sender="message.sender"
      :messages="message.text"
    >
    </chatbox-message>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useChatStore } from "@/store/chat.js";
import ChatboxMessage from "./ChatboxMessage.vue";

export default {
  name: "ChatboxDisplay",
  components: {
    ChatboxMessage,
  },
  setup() {
    const chatStore = useChatStore();
    const { chatHistory } = storeToRefs(chatStore);

    return {
      chatHistory,
    };
  },
};
</script>

<style scoped>
/* scroll bar formatting */
.scrollbar::-webkit-scrollbar {
  width: 1vmin;
}
.scrollbar-track::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(244, 246, 246, 0.719);
  border-radius: 10px;
}
.scrollbar-thumb::-webkit-scrollbar-thumb {
  background: rgba(214, 216, 218, 0.719);
  border-radius: 10px;
}
</style>
