import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons (Material Design Icons)
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#3f51b5',
          secondary: '#03a9f4',
          success: '#4caf50',
          danger: '#f44336',
        },
      },
      dark: {
        colors: {
          primary: '#90caf9',
        },
      },
    },
  },
})
