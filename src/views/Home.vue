<template>
  <div class="home">
    <section class="hero">
      <h1>欢迎来到我的个人网站</h1>
      <p>探索技术与创意的交汇点</p>
    </section>
    <section class="features">
      <div class="card" v-for="item in features" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const features = ref([
  { title: '作品展示', desc: '精选项目与创意设计' },
  { title: '技术博客', desc: '分享学习心得与技术感悟' },
  { title: '联系我', desc: '欢迎交流合作机会' }
])
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
.hero p { font-size: 1.2rem; opacity: 0.9; }
.features { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
.card h3 { color: #409eff; margin-bottom: 0.5rem; }
</style>