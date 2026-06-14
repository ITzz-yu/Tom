import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: '首页' } },
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' } },
  { path: '/blog', name: 'Blog', component: () => import('../views/Home/Home.vue'), meta: { title: '博客' } },
  { path: '/project', name: 'Project', component: () => import('../views/Home/Home.vue'), meta: { title: '项目' } },
  { path: '/guestbook', name: 'Guestbook', component: () => import('../views/Home/Home.vue'), meta: { title: '留言' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - My Website'
  }
})

export default router
