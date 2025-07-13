import { createApp } from 'vue'
import './style.css'
import './styles/variables.css'
import './styles/global.css'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

import { colors } from '@/styles/colors'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: colors.primary,
          secondary: colors.secondary,
          accent: colors.secondaryLight,
          error: colors.error,
          warning: colors.warning,
          info: colors.info,
          success: colors.success,
        },
      },
    },
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
