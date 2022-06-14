import type { Plugin } from 'vue'

import QCComponentsInner from './components'


// register all compontents
export const qcui: Plugin = {
  install(app) {
    Object.entries(QCComponentsInner).forEach(([key, value]: [string, any]) => {
      app.component(key, value)
    })
  },
}

// export plugin
//export { default as QCButton } from './components/button/QCButton.vue'
//export { default as InputText } from './components/input/InputText.vue'