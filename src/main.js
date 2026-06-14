// ==========================================
// 应用入口文件
// 配置全局依赖：Ant Design Vue、路由、全局样式
// ==========================================

import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'
import './assets/style/global.css'

const app = createApp(App)

// 注册 Ant Design Vue 全局组件
app.use(Antd)
app.use(router)
app.mount('#app')