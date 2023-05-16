<template>
  <div
    id="chatbox-display"
    ref="displayEl"
    class="scrollbar scrollbar-track scrollbar-thumb flex touch-pan-y flex-col-reverse gap-y-2 overflow-y-scroll overscroll-contain rounded-tl-[60px] laptop:rounded-tl-[80px]"
    :class="{ '!touch-none': !hasScroll }"
  >
    <chatbox-message
      v-for="message in chatHistory"
      :class="{ '!touch-none': !hasScroll }"
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
import { ref, onUpdated, nextTick } from "vue";
import ChatboxMessage from "./ChatboxMessage.vue";

export default {
  name: "ChatboxDisplay",
  components: {
    ChatboxMessage,
  },
  props: {
    isActive: Boolean,
  },
  setup() {
    const chatStore = useChatStore();
    const { chatHistory } = storeToRefs(chatStore);
    const displayEl = ref(null);
    const hasScroll = ref(false);

    onUpdated(async () => {
      await nextTick();
      hasScroll.value =
        displayEl.value.scrollHeight > displayEl.value.clientHeight;
    });

    return {
      displayEl,
      hasScroll,
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
