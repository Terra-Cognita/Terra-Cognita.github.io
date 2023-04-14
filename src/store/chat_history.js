import { defineStore } from "pinia";

function generateMessageFromText(id, sender, text) {
  return {
    id: id,
    sender: sender,
    text: [text],
  };
}

export const useChatHistoryStore = defineStore("chatHistory", {
  persist: true, // persistedState does not support reactivity
  state: () => ({
    messages_history: [],
  }),
  getters: {
    history() {
      return this.messages_history;
    },
    hasHistory() {
      return this.history.length > 0;
    },
    getNewId() {
      return this.history.length;
    },
    getLatestMessage() {
      if (!this.hasHistory) {
        return generateMessageFromText(undefined, undefined, "init");
      } else {
        return { ...this.history[0] };
      }
    },
  },
  actions: {
    pushToHistory(sender, text) {
      let newMessage = generateMessageFromText(this.getNewId, sender, text);
      this.messages_history.unshift(newMessage);
      return newMessage;
    },
    resetState() {
      this.messages_history.length = 0;
    },
  },
});
