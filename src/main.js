import { createApp } from 'vue'
import App from './App.vue'
import router from './router'        // ← import router mới tạo

const app = createApp(App)
app.use(router)                      // ← dùng router
app.mount('#app')
