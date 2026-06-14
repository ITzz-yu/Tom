<!--
  根组件
  包含全局导航栏和路由视图
-->
<template>
  <div id="app">
    <!-- 全局导航栏 -->
    <nav v-if="showNav" class="global-nav">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">My Website</router-link>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </nav>
    <!-- 路由视图 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 非登录页显示导航栏
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.path !== '/login')
</script>

<style scoped>
.global-nav {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.nav-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f766e;
  text-decoration: none;
}
.nav-links a {
  margin-left: 1.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
}
.nav-links a.router-link-active {
  color: #0f766e;
  font-weight: 600;
}
.main-content {
  min-height: calc(100vh - 60px);
}
</style>