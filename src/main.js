import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.less'

import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.errorHandler = (err, _vm, info) => {
  if (err) {
    console.error(`${info}`)
  }
}