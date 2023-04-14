import { computed, ref, reactive, watch, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useChatHistoryStore } from "./chat_history.js";
import bot from "@/api/bot.js";

const BOT_ID = String(import.meta.env.VITE_BOT_ID);

export const useChatStore = defineStore("chat", () => {
  const chatHistoryStore = useChatHistoryStore();
  const chatHistory = ref([]); // reactive chat history
  chatHistory.value = chatHistoryStore.history;

  const isHearingBot = ref(false);
  const lastMessage = reactive(chatHistoryStore.getLatestMessage);

  // watchers
  watch(
    chatHistoryStore.history,
    () => {
      chatHistory.value = chatHistoryStore.history;
    },
    { immediate: true }
  );

  watch(
    lastMessage,
    async () => {
      if (lastMessage.sender !== BOT_ID) {
        await callBot(lastMessage.text);
      }
    },
    { immediate: true }
  );

  // functions: chat dynamics
  function sendNewMessage(sender, text) {
    let pushedMsg = chatHistoryStore.pushToHistory(sender, text);
    updateLastMessage(pushedMsg);
  }
  async function callBot(textArray) {
    textArray.forEach(async (text) => {
      isHearingBot.value = true;
      let answer = await bot.requestAnswer(text);
      sendNewMessage(BOT_ID, answer);
      isHearingBot.value = false;
    });
  }
  function updateLastMessage(message) {
    lastMessage.id = message.id;
    lastMessage.text = message.text;
    lastMessage.sender = message.sender;
  }

  // === REMOVE ===================
  function reset() {
    chatHistoryStore.resetState();
  }
  // ==============================

  return {
    isHearingBot,
    chatHistory,
    sendNewMessage,
    reset,
  };
});
