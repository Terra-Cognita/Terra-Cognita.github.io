import { defineStore } from 'pinia'
import { useChatHistoryStore } from './chat_history.js'
import { ref } from 'vue'

const DEFAULT_BOT_MSG = "Hello! I'm Orimbu and this is \
                        a default message to test my development :) \
                        I hope we can have a real chat soon. See ya!"

export const useChatBotStore = defineStore(
  'chatBot',  // asynchronicity is not supported on persistentState
  () => {
    const chatStore = useChatHistoryStore();

    const isHearingBot = ref(false);

    async function requestAnswer(text) {      
      isHearingBot.value = true;
      let answer = await new Promise(resolve => { 
        setTimeout(() => 
          resolve(DEFAULT_BOT_MSG), 2000
        );
      })
      chatStore.pushToHistory( 'bot', answer )
      isHearingBot.value = false;
      return answer
    }

    return { isHearingBot, requestAnswer }
  },
)