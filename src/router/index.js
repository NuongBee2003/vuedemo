import { createRouter, createWebHashHistory } from 'vue-router'
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
