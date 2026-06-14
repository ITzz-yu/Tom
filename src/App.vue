<template>
  <div id="app">
    <nav class="global-nav">
      <div class="nav-inner">
        <div class="nav-brand">
          <router-link to="/" class="brand-logo">My Website</router-link>
        </div>

        <div class="nav-menu">
          <router-link to="/" class="menu-item" active-class="active">首页</router-link>

          <!-- 分类（带下拉） -->
          <div class="menu-dropdown" @mouseenter="openDropdown('category')" @mouseleave="closeDropdown('category')">
            <span class="menu-item">分类</span>
            <div class="dropdown-menu" :class="{ show: dropdowns.category }">
              <router-link to="/" class="dropdown-item">原创</router-link>
              <router-link to="/" class="dropdown-item">技术</router-link>
              <router-link to="/" class="dropdown-item">杂谈</router-link>
              <router-link to="/" class="dropdown-item">美化</router-link>
              <router-link to="/" class="dropdown-item">软件</router-link>
              <router-link to="/" class="dropdown-item">日记</router-link>
              <router-link to="/" class="dropdown-item">公告</router-link>
            </div>
          </div>

          <router-link to="/project" class="menu-item">项目</router-link>

          <!-- 留言（带下拉） -->
          <div class="menu-dropdown" @mouseenter="openDropdown('guestbook')" @mouseleave="closeDropdown('guestbook')">
            <span class="menu-item">留言</span>
            <div class="dropdown-menu" :class="{ show: dropdowns.guestbook }">
              <router-link to="/guestbook" class="dropdown-item">留言板</router-link>
              <router-link to="/" class="dropdown-item">碎碎念</router-link>
            </div>
          </div>

          <!-- 朋友（带下拉） -->
          <div class="menu-dropdown" @mouseenter="openDropdown('friends')" @mouseleave="closeDropdown('friends')">
            <span class="menu-item">朋友</span>
            <div class="dropdown-menu" :class="{ show: dropdowns.friends }">
              <router-link to="/" class="dropdown-item">友链申请</router-link>
              <router-link to="/" class="dropdown-item">朋友博客</router-link>
            </div>
          </div>

          <!-- 更多（带下拉） -->
          <div class="menu-dropdown" @mouseenter="openDropdown('more')" @mouseleave="closeDropdown('more')">
            <span class="menu-item">更多</span>
            <div class="dropdown-menu" :class="{ show: dropdowns.more }">
              <router-link to="/" class="dropdown-item">导航</router-link>
              <router-link to="/" class="dropdown-item">商店</router-link>
              <router-link to="/" class="dropdown-item">网盘</router-link>
              <router-link to="/" class="dropdown-item">投稿</router-link>
              <router-link to="/" class="dropdown-item">论坛</router-link>
            </div>
          </div>
        </div>

        <div class="nav-right">
          <div class="search-box">
            <input type="text" placeholder="搜索..." class="search-input" />
            <svg class="search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>

          <div class="user-avatar-wrapper" @click="showLoginPopup = !showLoginPopup" ref="avatarWrap">
            <div class="user-avatar" :class="{ 'is-hovered': showLoginPopup }">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#64748b" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <div v-if="showLoginPopup" class="login-popup">
              <div class="popup-header">
                <div class="popup-avatar">
                  <svg viewBox="0 0 120 120" width="48" height="48" fill="none">
                    <circle cx="60" cy="60" r="58" fill="#f1f5f9"/>
                    <circle cx="60" cy="48" r="16" fill="#94a3b8"/>
                    <ellipse cx="60" cy="100" rx="28" ry="18" fill="#94a3b8"/>
                  </svg>
                </div>
                <div class="popup-info">
                  <p class="popup-title">未登录</p>
                  <p class="popup-subtitle">立即注册 仅需10秒</p>
                </div>
              </div>
              <router-link to="/login" class="popup-btn">登录</router-link>
              <div class="popup-mask" @click.self="showLoginPopup = false"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <div class="chat-fab" title="聊天功能开发中...">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showLoginPopup = ref(false)
const avatarWrap = ref(null)

const dropdowns = reactive({
  category: false,
  guestbook: false,
  friends: false,
  more: false
})

function openDropdown(name) {
  dropdowns[name] = true
}
function closeDropdown(name) {
  dropdowns[name] = false
}

function handleClickOutside(e) {
  if (avatarWrap.value && !avatarWrap.value.contains(e.target)) {
    showLoginPopup.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.global-nav {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
  padding: 0 1.5rem;
}
.nav-brand { flex-shrink: 0; }
.brand-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f766e;
  text-decoration: none;
  letter-spacing: 0.5px;
}
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.menu-item {
  color: #4a5568;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
}
.menu-item:hover,
.menu-item.active {
  color: #0f766e;
  background: rgba(15, 118, 110, 0.08);
}

/* 下拉菜单 */
.menu-dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 140px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.2s ease;
  z-index: 200;
}
.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #4a5568;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.15s;
}
.dropdown-item:hover {
  color: #0f766e;
  background: rgba(15, 118, 110, 0.06);
}

/* 右侧 */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search-box { position: relative; }
.search-input {
  width: 160px;
  height: 36px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 0 2.5rem 0 1rem;
  font-size: 0.85rem;
  outline: none;
  transition: all 0.2s;
  background: #f8fafc;
}
.search-input:focus {
  width: 200px;
  border-color: #0f766e;
  background: #fff;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  pointer-events: none;
}

/* 头像 & 登录弹窗 */
.user-avatar-wrapper { position: relative; cursor: pointer; }
.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.user-avatar:hover,
.user-avatar.is-hovered { background: #d1fae5; }

.login-popup {
  position: absolute;
  top: 48px;
  right: 0;
  width: 240px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  padding: 1.25rem;
  z-index: 200;
}
.popup-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.popup-avatar { flex-shrink: 0; }
.popup-info { flex: 1; }
.popup-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}
.popup-subtitle {
  font-size: 0.8rem;
  color: #94a3b8;
  margin: 0;
}
.popup-btn {
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  transition: opacity 0.2s;
  cursor: pointer;
}
.popup-btn:hover { opacity: 0.9; }

/* 悬浮聊天按钮 */
.chat-fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
  cursor: pointer;
  transition: all 0.3s;
  z-index: 99;
}
.chat-fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(139, 92, 246, 0.5);
}
.main-content { min-height: calc(100vh - 60px); }

@media (max-width: 768px) {
  .nav-menu { display: none; }
  .search-box { display: none; }
}
</style>
