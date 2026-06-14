<!--
  首页组件
  展示网站主要内容
-->
<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>欢迎来到我的个人网站</h1>
        <p>探索技术与创意的交汇点</p>
        <div class="hero-actions">
          <router-link to="/login" class="btn-primary">进入工作台</router-link>
          <router-link to="/" class="btn-secondary">了解更多</router-link>
        </div>
      </div>
    </section>

    <section class="features-section">
      <h2 class="section-title">核心功能</h2>
      <div class="features-grid">
        <div v-for="item in features" :key="item.title" class="feature-card">
          <div class="feature-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  { icon: '\u{1F3A8}', title: '作品展示', desc: '精选项目与创意设计' },
  { icon: '\u{1F4D6}', title: '技术博客', desc: '分享学习心得与技术感悟' },
  { icon: '\u{1F4E1}', title: '联系我', desc: '欢迎交流合作机会' }
])
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 3rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.hero-content p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: #fff;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.btn-secondary {
  background: rgba(255,255,255,0.2);
  color: #fff;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.3);
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #1e293b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #0f766e;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>