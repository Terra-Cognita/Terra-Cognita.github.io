import { defineStore } from 'pinia'
import { useChatHistoryStore } from './chat_history.js'
import { useChatBotStore } from './chat_bot.js'
import { computed, ref, watch, watchEffect } from 'vue'


export const useChatStore = defineStore(
  'chat',
  () => {
    
    // stores
    const chatHistoryStore = useChatHistoryStore();
    const chatBotStore = useChatBotStore();

    // binding data
    const isHearingBot = computed(() => chatBotStore.isHearingBot);
    const chatHistory = ref([])   // reactive chat history
    chatHistory.value = chatHistoryStore.history
    
    watch(chatHistoryStore.history, ()=> {
      chatHistory.value = chatHistoryStore.history
    }, { immediate: true })
    
    // functions: chat dynamics
    function sendNewMessage(text) {
      chatHistoryStore.pushToHistory( 'user', text )
      callChatBot(text)
    }
    function callChatBot(text) {
      chatBotStore.requestAnswer(text)
    }
    
    // === REMOVE ===================
    function reset() {
      chatHistoryStore.resetState();
    }
    function log() {
      console.log('chatHistory: ', chatHistory.value)
      console.log('storeHistory: ', chatHistoryStore.history)
    }
    // ==============================

    return { isHearingBot, chatHistory, sendNewMessage, reset, log }
  },
)