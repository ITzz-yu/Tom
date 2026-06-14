<template>
  <div class="about">
    <h1>关于我</h1>
    <div class="profile-card">
      <h2>个人简介</h2>
      <p>热爱技术，专注于全栈开发。</p>
      <h2>技能</h2>
      <ul>
        <li>Java / Spring Boot</li>
        <li>Vue.js / JavaScript</li>
        <li>MySQL / Redis</li>
        <li>Node.js</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about h1 { margin-bottom: 1.5rem; color: #333; }
.profile-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.profile-card h2 { color: #409eff; margin: 1rem 0 0.5rem; }
.profile-card ul { padding-left: 1.5rem; }
.profile-card li { margin: 0.5rem 0; }
</style>