import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'

import { createWebHistory } from 'vue-router'
import createRouter from './router/index.js'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createI18n } from 'vue-i18n'
import messages from './locales/messages/index.js'

// TC layouts
import TcHero from './components/globalLayouts/TcHero.vue'
import TcSection from './components/globalLayouts/TcSection.vue'
import TcBreathing from './components/globalLayouts/TcBreathing.vue'

import './style.css'

const router = createRouter(createWebHistory())

const store = createPinia()
store.use(piniaPluginPersistedstate)

const i18n = createI18n({
  locale: 'en',
  messages: messages,
  allowComposition: true,
  warnHtmlInMessage: "off",
  // silentTranslationWarn: true,
  // missingWarn: false, 
  // fallbackWarn: false,
})

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  
app.component('TcHero', TcHero)
app.component('TcSection', TcSection)
app.component('TcBreathing', TcBreathing)

app.mount('#app')