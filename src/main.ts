import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const components = import.meta.globEager('./components/*.vue')
const vueApp = createApp(App)
Object.entries(components).forEach(([path, definition]) => {
    console.log(path)
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
    vueApp.component(componentName, definition.default)
  })
  vueApp.config.globalProperties.$filters = {
    strLower(value:string) {
      return value.toLowerCase();
    },
    strUpper(value:string) {
        return value.toUpperCase();
      }
  }
vueApp.mount('#app')
