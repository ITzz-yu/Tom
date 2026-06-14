<template>
  <div class="home-page">
    <!-- 背景层 -->
    <div class="bg-layer">
      <div v-for="(bg, idx) in bgImages" :key="idx" class="bg-slide" :class="{ active: idx === currentBgIndex }"
           :style="{ backgroundImage: `url(${bg})` }">
      </div>
    </div>

    <!-- 主内容区 -->
    <main class="main-content">
      <!-- 标题区域 -->
      <div class="hero-overlay">
        <h1 class="hero-title">倦意博客</h1>
        <p class="hero-subtitle">生命不息 折腾不止</p>
      </div>

      <!-- 文章列表 -->
      <section class="article-section">
        <!-- 骨架屏 loading 状态 -->
        <div v-if="loadingArticles" class="article-grid skeleton-grid">
          <div v-for="i in 6" :key="i" class="skeleton-card">
            <div class="skeleton-cover"></div>
            <div class="skeleton-body">
              <div class="skeleton-title"></div>
              <div class="skeleton-excerpt line-1"></div>
              <div class="skeleton-excerpt line-2"></div>
              <div class="skeleton-meta">
                <div class="skeleton-meta-date"></div>
                <div class="skeleton-meta-views"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 实际文章列表 -->
        <div v-else class="article-grid">
          <div v-for="post in articles" :key="post.id" class="article-card" :data-index="post.id">
            <div class="card-cover">
              <img :src="post.cover" :alt="post.title" loading="lazy" />
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

      <!-- 底部波浪 -->
      <div class="wave-container">
        <svg class="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.3" />
              <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.3" />
            </linearGradient>
          </defs>
          <!-- 后层波浪 - CSS animation -->
          <path class="wave-path wave-back" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,234.7C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          <!-- 前层波浪 - CSS animation -->
          <path class="wave-path wave-mid" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,261.3C672,277,768,299,864,298.7C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <!-- 最前层波浪 - CSS animation -->
          <path class="wave-path wave-front" d="M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,282.7C672,288,768,288,864,282.7C960,277,1056,267,1152,272C1248,277,1344,299,1392,309.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,768,320,672,320C576,320,480,320,384,320C288,320,192,320,96,320L0,320Z" />
        </svg>
      </div>

    <!-- 毛玻璃面板（放在页面右下角，不遮挡内容） -->
    <aside class="glass-panel">
      <!-- 标签栏 -->
      <div class="panel-tabs">
        <span class="panel-tab active">博主</span>
        <span class="panel-tab">置顶</span>
        <span class="panel-tab">片刻</span>
        <span class="panel-tab">评论</span>
        <span class="panel-tab">友人帐</span>
        <span class="panel-tab">画展</span>
        <span class="panel-tab">网站公告</span>
      </div>

      <!-- 博主信息 -->
      <div class="panel-profile">
        <div class="profile-avatar">
          <svg viewBox="0 0 120 120" width="48" height="48" fill="none">
            <circle cx="60" cy="60" r="58" fill="#334155"/>
            <circle cx="60" cy="45" r="18" fill="#94a3b8"/>
            <ellipse cx="60" cy="100" rx="32" ry="20" fill="#94a3b8"/>
          </svg>
        </div>
        <div class="profile-info">
          <p class="profile-name">倦意</p>
          <p class="profile-bio">生命不息 折腾不止</p>
        </div>
      </div>

      <!-- 社交图标 -->
      <div class="social-icons">
        <a href="#" class="social-icon" title="交流群">
          <svg viewBox="0 0 1024 1024" width="16" height="16"><path fill="#fff" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm135.6 576H376.4c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h271.2c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zm-45.1-102.4H421.5c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h181c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8z"/></svg>
        </a>
        <a href="https://github.com/ITzz-yu" class="social-icon" title="GitHub" target="_blank">
          <svg viewBox="0 0 1024 1024" width="16" height="16"><path fill="#fff" d="M512 96C281.8 96 96 281.8 96 512c0 181.3 117.3 335.1 280.6 390.5 20.6 3.8 27.9-8.9 27.9-19.8v-69.5c-114.3 24.9-138.3-48.4-138.3-48.4-18.7-47.5-45.6-60.1-45.6-60.1-37.2-25.4 2.8-24.9 2.8-24.9 41.1 2.9 62.7 42.1 62.7 42.1 36.5 62.7 96 44.6 119.2 34.1 3.7-26.5 14.2-44.6 25.9-54.9-90.6-10.2-185.8-45.2-185.8-201.1 0-44.4 15.9-80.8 42.1-109.4-4.3-10.3-18.2-51.7 3.9-107.8 0 0 34.2-10.9 112 41.7 32.5-9 67.3-13.6 101.9-13.8 34.6.2 69.4 4.8 101.9 13.8 77.8-52.6 112-41.7 112-41.7 22.1 56.1 8.2 97.5 3.9 107.8 26.2 28.6 42.1 65 42.1 109.4 0 156.3-95.4 190.8-186.2 200.8 14.6 12.6 27.7 37.4 27.7 75.4v111.7c0 10.4 7 23.7 28.1 19.7C810.8 847.1 928 693.4 928 512c0-230.2-185.8-416-416-416z"/></svg>
        </a>
        <a href="#" class="social-icon" title="B站">
          <svg viewBox="0 0 1024 1024" width="16" height="16"><path fill="#fff" d="M784.5 240.5h-39c-16 0-29 13-29 29v271c0 83-67 150-150 150h-213c-83 0-150-67-150-150v-271c0-16-13-29-29-29h-39c-16 0-29 13-29 29v271c0 116 94 210 210 210h213c116 0 210-94 210-210v-271c0-16-13-29-29-29zM383 403l103 103 103-103c11-11 11-29 0-40s-29-11-40 0L486 424V276c0-16-13-29-29-29s-29 13-29 29v148L343 363c-11-11-29-11-40 0s-11 29 0 40z"/></svg>
        </a>
        <a href="#" class="social-icon red" title="小红书">红</a>
        <a href="#" class="social-icon" title="抖音">
          <svg viewBox="0 0 1024 1024" width="16" height="16"><path fill="#fff" d="M768 544v128H512V288h256v128h-128V416L768 544z"/></svg>
        </a>
        <a href="#" class="social-icon orange" title="微博">@</a>
        <a href="#" class="social-icon blue" title="知乎">知</a>
      </div>
    </aside>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bgImages = ref([
  'https://jyblog.cn/wp-content/themes/oyiso/assets/images/default-cover.jpg',
  'https://jyblog.cn/image/bg_2025.jpg',
  'https://jyblog.cn/image/bg_2026_2.jpg'
])
const currentBgIndex = ref(0)

onMounted(() => {
  currentBgIndex.value = Math.floor(Math.random() * bgImages.value.length)

  // 模拟数据加载，延迟后显示卡片入场动画
  setTimeout(() => {
    loadingArticles.value = false
    const cards = document.querySelectorAll('.article-card')
    gsap.fromTo(cards,
      { y: 30, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    )
  }, 600)
})

const loadingArticles = ref(true)

const articles = ref([
  {
    id: 1,
    title: 'Vue 3 + Vite 搭建个人博客前端',
    excerpt: '使用 Vue 3 Composition API + Vite 搭建高性能个人博客前端，配合 GSAP 实现流畅动画效果，打造沉浸式用户体验...',
    cover: 'https://picsum.photos/400/240?random=1',
    category: '技术',
    date: '2026-06-14',
    views: 128
  },
  {
    id: 2,
    title: 'Spring Boot + MyBatis-Plus 后端架构实践',
    excerpt: '基于 Spring Boot 2.7 和 MyBatis-Plus 构建 RESTful API，实现用户认证、数据管理等核心功能模块...',
    cover: 'https://picsum.photos/400/240?random=2',
    category: '技术',
    date: '2026-06-13',
    views: 96
  },
  {
    id: 3,
    title: 'CSS 渐变与动画设计灵感分享',
    excerpt: '收集了一些精美的 CSS 渐变方案和微交互动画，提升网页视觉体验的技巧总结，让设计更加生动有趣...',
    cover: 'https://picsum.photos/400/240?random=3',
    category: '美化',
    date: '2026-06-12',
    views: 256
  },
  {
    id: 4,
    title: '个人网站设计思路与用户体验优化',
    excerpt: '从用户角度出发，探讨个人网站的设计原则、导航布局和交互细节的优化方向，提升整体浏览体验...',
    cover: 'https://picsum.photos/400/240?random=4',
    category: '杂谈',
    date: '2026-06-11',
    views: 184
  },
  {
    id: 5,
    title: 'Git 版本控制最佳实践指南',
    excerpt: '分享团队协作中的 Git 工作流、分支策略和常见问题的解决方案，提高开发效率和代码质量...',
    cover: 'https://picsum.photos/400/240?random=5',
    category: '技术',
    date: '2026-06-10',
    views: 312
  },
  {
    id: 6,
    title: '夏日编程随笔：工具链与效率提升',
    excerpt: '记录近期使用的开发工具和效率技巧，从编辑器配置到自动化流程，全面提升日常开发幸福感...',
    cover: 'https://picsum.photos/400/240?random=6',
    category: '日记',
    date: '2026-06-09',
    views: 145
  }
])
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 背景层 */
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
}
.bg-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease;
}
.bg-slide.active {
  opacity: 1;
}

/* 主内容区 */
.main-content {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 4rem;
}
.hero-overlay {
  text-align: center;
  padding: 6rem 0 3rem;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  letter-spacing: 4px;
}
.hero-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* 文章网格 */
.article-section {
  padding-bottom: 2rem;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}
.article-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  cursor: pointer;
}
.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #94a3b8;
}

/* 骨架屏 loading 样式 */
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}
.skeleton-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}
.skeleton-cover {
  height: 180px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
.skeleton-body {
  padding: 1.25rem;
}
.skeleton-title {
  height: 16px;
  width: 80%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  animation: shimmer 1.5s infinite;
}
.skeleton-excerpt {
  height: 12px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  animation: shimmer 1.5s infinite;
}
.skeleton-excerpt.line-1 { width: 100%; }
.skeleton-excerpt.line-2 { width: 70%; }
.skeleton-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
}
.skeleton-meta-date,
.skeleton-meta-views {
  height: 12px;
  width: 80px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* 波浪容器 - 底部 1/6 高度 */
.wave-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 16.66vh; /* 约 1/6 视口高度 */
  min-height: 180px;
  z-index: 1;
  pointer-events: none;
}
.wave-svg {
  width: 100%;
  height: 100%;
}
.wave-path {
  transition: none;
}
.wave-back {
  animation: wave-drift-back 12s ease-in-out infinite;
}
.wave-mid {
  animation: wave-drift-mid 9s ease-in-out infinite;
}
.wave-front {
  animation: wave-drift-front 6s ease-in-out infinite;
}
@keyframes wave-drift-back {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
}
@keyframes wave-drift-mid {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
}
@keyframes wave-drift-front {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
}

/* 简化版液态玻璃面板 - 左侧（无 SVG 滤镜） */
.glass-panel {
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  width: 347px;
  border-radius: 24px;
  padding: 1.25rem;
  z-index: 10;
  overflow-y: auto;
  max-height: 525px;
  /* 基础层 - 半透明毛玻璃 */
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px) saturate(1.6);
  -webkit-backdrop-filter: blur(8px) saturate(1.6);
  /* 边框 - 上左亮、下右暗（模拟光线折射） */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.35);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  border-right-color: rgba(255, 255, 255, 0.08);
  /* 内高光 - 模拟玻璃边缘反光 */
  box-shadow:
    inset 2px 2px 2px 0 rgba(255, 255, 255, 0.4),
    inset -1px -2px 2px 1px rgba(255, 255, 255, 0.12),
    0 8px 32px rgba(0, 0, 0, 0.25),
    0 2px 8px rgba(255, 255, 255, 0.06);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.glass-panel:hover {
  box-shadow:
    inset 2px 2px 2px 0 rgba(255, 255, 255, 0.5),
    inset -1px -2px 2px 1px rgba(255, 255, 255, 0.18),
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(255, 255, 255, 0.08);
  border-top-color: rgba(255, 255, 255, 0.55);
}
.panel-tabs {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
  flex-wrap: nowrap;
}
.panel-tabs::-webkit-scrollbar { display: none; }
.panel-tab {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  transition: all 0.2s;
  flex-shrink: 0;
}
.panel-tab:hover {
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.1);
}
.panel-tab.active {
  color: #fff;
  background: rgba(99, 102, 241, 0.55);
}
.panel-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.profile-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.15);
}
.profile-avatar svg {
  width: 100%;
  height: 100%;
}
.profile-info {
  flex: 1;
  min-width: 0;
}
.profile-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}
.profile-bio {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.3;
}
.social-icons {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
}
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.12);
}
.social-icon:hover {
  transform: scale(1.15);
  background: rgba(255, 255, 255, 0.25);
}
.social-icon.red { background: #FE2C55; }
.social-icon.orange { background: #F24E1E; }
.social-icon.blue { background: #0066FF; }

@media (max-width: 1200px) {
  .glass-panel { display: none; }
}
@media (max-width: 768px) {
  .hero-title { font-size: 2rem; }
  .hero-overlay { padding: 4rem 0 2rem; }
  .article-grid { grid-template-columns: 1fr; }
  .main-content { padding-bottom: 200px; }
}
</style>
