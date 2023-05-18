<template>
  <div
    id="chatbox-display"
    ref="displayEl"
    class="scrollbar scrollbar-track scrollbar-thumb flex touch-pan-y flex-col-reverse gap-y-2 overflow-y-scroll overscroll-contain rounded-tl-[60px] laptop:rounded-tl-[80px]"
    :class="{ '!touch-none': !hasHistoryOverflow }"
  >
    <chatbox-message
      v-for="(message, index) in chatHistory"
      :ref="
        (el) => {
          messagesComponents[index] = el;
        }
      "
      :class="{ '!touch-none': !hasHistoryOverflow }"
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
import { ref, computed, onUpdated, nextTick } from "vue";
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
    const hasHistoryOverflow = ref(false);

    // DOM elements
    const displayEl = ref(null);
    const messagesComponents = ref([]);
    const latestMsgEl = computed(() =>
      messagesComponents.value.length === 0
        ? null
        : messagesComponents.value[0].$el
    );

    function scrollChildIntoView() {
      if (displayEl.value && latestMsgEl.value) {
        latestMsgEl.value.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }

    async function updateHistoryOverflow() {
      await nextTick();
      hasHistoryOverflow.value =
        displayEl.value.scrollHeight > displayEl.value.clientHeight;
    }

    onUpdated(async () => {
      await updateHistoryOverflow();
      scrollChildIntoView();
    });

    return {
      displayEl,
      messagesComponents,
      hasHistoryOverflow,
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
