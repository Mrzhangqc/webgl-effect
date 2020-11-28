import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.less'

const app = createApp(App)
app.mount('#app')

app.config.errorHandler = (err, _vm, info) => {
  if (err) {
    console.error(`${info}`)
  }
}