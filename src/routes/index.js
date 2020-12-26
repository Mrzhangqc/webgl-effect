import { defineAsyncComponent } from 'vue'
import loading from 'assets/img/loading.svg'

function asyncLoader(fn) {
  return defineAsyncComponent({
    loader: fn,
    loadingComponent: {
      template: loading
    }
  })
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: asyncLoader(() => import('../views/Home'))
  }
]

export default routes