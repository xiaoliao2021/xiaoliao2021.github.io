import { createApp } from 'vue'
import App from './App.vue'
import '@utils/global.js'
import { installPlugins } from '@utils/installer.js'

let app = createApp(App)

installPlugins(app).then(() => {
  app.mount('#app')
})