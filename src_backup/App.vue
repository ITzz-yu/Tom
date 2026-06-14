<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">My Website</router-link>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2026 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
.navbar {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
}
.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #409eff;
  text-decoration: none;
}
.nav-links a {
  margin-left: 2rem;
  color: #666;
  text-decoration: none;
}
.nav-links a.router-link-active {
  color: #409eff;
  font-weight: bold;
}
.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}
.footer {
  text-align: center;
  padding: 2rem;
  color: #999;
}
</style>