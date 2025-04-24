import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'

const routes = [
  { path: '/',      name: 'Home',  component: Home },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),  // ← CHÚ Ý: hash history
  routes,
})

export default router
// const router = createRouter({
//       // chú ý import.meta.env.BASE_URL sẽ tương ứng với `base` trong vite.config.js
//      history: createWebHistory(import.meta.env.BASE_URL),
//       routes,
//     })
    
// export default router
