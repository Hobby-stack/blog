/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from '@/router'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import AppFooter from './components/FooterPage.vue'

const app = createApp(App)

registerPlugins(app)
//app.component('app-footer', FooterPage)

app.use(router)
app.mount('#app')
