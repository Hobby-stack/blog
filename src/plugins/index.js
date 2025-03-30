/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light'
  }
})


export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
}
