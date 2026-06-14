<template>
  <div class="home-page">
    <!-- 顶部 Banner -->
    <section class="hero-banner">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h1>倦意博客</h1>
        <p>生命不息 折腾不止</p>
      </div>
    </section>

    <!-- 文章列表 -->
    <section class="article-section">
      <div class="article-grid">
        <div v-for="post in articles" :key="post.id" class="article-card">
          <div class="card-cover">
            <img :src="post.cover" :alt="post.title" />
            <div class="card-category">{{ post.category }}</div>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-excerpt">{{ post.excerpt }}</p>
            <div class="card-meta">
              <span class="meta-date">{{ post.date }}</span>
              <span class="meta-views">{{ post.views }} 阅读</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    title: 'Vue 3 + Vite 搭建个人博客前端',
    excerpt: '使用 Vue 3 Composition API + Vite 搭建高性能个人博客前端，配合 GSAP 实现流畅动画效果...',
    cover: 'https://picsum.photos/400/240?random=1',
    category: '技术',
    date: '2026-06-14',
    views: 128
  },
  {
    id: 2,
    title: 'Spring Boot + MyBatis-Plus 后端架构实践',
    excerpt: '基于 Spring Boot 2.7 和 MyBatis-Plus 构建 RESTful API，实现用户认证、数据管理等核心功能...',
    cover: 'https://picsum.photos/400/240?random=2',
    category: '技术',
    date: '2026-06-13',
    views: 96
  },
  {
    id: 3,
    title: 'CSS 渐变与动画设计灵感分享',
    excerpt: '收集了一些精美的 CSS 渐变方案和微交互动画，提升网页视觉体验的技巧总结...',
    cover: 'https://picsum.photos/400/240?random=3',
    category: '美化',
    date: '2026-06-12',
    views: 256
  },
  {
    id: 4,
    title: '个人网站设计思路与用户体验优化',
    excerpt: '从用户角度出发，探讨个人网站的设计原则、导航布局和交互细节的优化方向...',
    cover: 'https://picsum.photos/400/240?random=4',
    category: '杂谈',
    date: '2026-06-11',
    views: 184
  },
  {
    id: 5,
    title: 'Git 版本控制最佳实践指南',
    excerpt: '分享团队协作中的 Git 工作流、分支策略和常见问题的解决方案...',
    cover: 'https://picsum.photos/400/240?random=5',
    category: '技术',
    date: '2026-06-10',
    views: 312
  },
  {
    id: 6,
    title: '夏日编程随笔：工具链与效率提升',
    excerpt: '记录近期使用的开发工具和效率技巧，从编辑器配置到自动化流程...',
    cover: 'https://picsum.photos/400/240?random=6',
    category: '日记',
    date: '2026-06-09',
    views: 145
  }
])
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
}

/* Banner */
.hero-banner {
  position: relative;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #0f766e 0%, #06b6d4 50%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect fill="url(%23g)" width="100" height="100"/></svg>');
}
.banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}
.banner-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}
.banner-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 文章网格 */
.article-section {
  padding-top: 1rem;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}
.article-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.3s;
  cursor: pointer;
}
.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
}
.card-cover {
  position: relative;
  height: 180px;
  overflow: hidden;
}
.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}
.article-card:hover .card-cover img {
  transform: scale(1.08);
}
.card-category {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  background: rgba(15, 118, 110, 0.85);
  color: #fff;
  font-size: 0.75rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}
.card-body {
  padding: 1.25rem;
}
.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-excerpt {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 0.75rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #94a3b8;
}
.meta-views {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 768px) {
  .hero-banner { height: 200px; }
  .banner-content h1 { font-size: 1.75rem; }
  .article-grid { grid-template-columns: 1fr; }
}
</style>
