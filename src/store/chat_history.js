import { defineStore } from 'pinia';
import { ref, computed } from "vue";

function generateMessageFromText(id, sender, text) {
  return {
    id: id,
    sender: sender,
    text: text
  }
}

export const useChatHistoryStore = defineStore( 'chatHistory', {
  persist: true,
  state: () => ({
    messages_history: [],
  }),
  getters: {
    history() {
      return this.messages_history
    }
  },
  actions: {
    pushToHistory(sender, text) {
      this.messages_history.push( generateMessageFromText(this.messages_history.length, sender, text) )
    },
    resetState() {
      this.messages_history.length = 0;
      console.log('reseted chatHistory')
    }
  },
})

//   () => {
//     let messages_history = ref([]);
//     const history = computed(() => messages_history);
  
//     console.log('>> CHAT_HISTORY.JS BEGIN')
//     // console.log('- messages_history: ', messages_history)
//     // console.log('- history: ', history)

//     function pushToHistory(sender, text) {
//       messages_history.push( generateMessageFromText(sender, text) )
//     }

//     function generateMessageFromText(sender, text) {
//       return {
//         id: messages_history.length,
//         sender: sender,
//         text: text
//       }
//     }

//     function resetState() {
//       messages_history = [];
//       console.log('reseted chatHistory')
//     }

//     return { history, messages_history, pushToHistory, resetState }
//   },
//   { persist: true }, // persistedState does not support reactivity
// )