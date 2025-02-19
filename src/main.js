import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.less'

import { createRouter, createMemoryHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.errorHandler = (err) => {
  if (err) {
    console.error(`${err}`)
  }
}