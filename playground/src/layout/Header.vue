<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useThemeTransition } from 'nano-box'

const router = useRouter()
const route = useRoute()
const activeMenu = ref('introduce')
const { isDark, toggleTheme } = useThemeTransition()

const updateActiveMenuByPath = (path: string) => {
  if (path.startsWith('/component')) {
    activeMenu.value = 'component'
  } else if (path.startsWith('/github')) {
    activeMenu.value = 'github'
  } else {
    activeMenu.value = 'introduce'
  }
}

onMounted(() => {
  updateActiveMenuByPath(route.path)
})

watch(
  () => route.path,
  (newPath) => {
    updateActiveMenuByPath(newPath)
  }
)

const handleMenuSelect = (index: string) => {
  if (index === 'introduce') {
    router.push('/')
  } else if (index === 'component') {
    router.push('/component/guide')
  } else if (index === 'github') {
    router.push('/github')
  }
}

const handleLogoClick = () => {
  router.push('/')
}
</script>

<template>
  <nano-header class="header-area">
    <div class="header-left">
      <div class="logo" @click="handleLogoClick">
        <img src="/nano-box.png" alt="NanoBox Logo" class="logo-img" />
        <span class="logo-text">NanoBox</span>
      </div>

      <nano-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" class="header-menu">
        <nano-menu-item index="introduce">Introduce</nano-menu-item>
        <nano-menu-item index="component">Components</nano-menu-item>
        <nano-menu-item index="github">GitHub</nano-menu-item>
      </nano-menu>
    </div>

    <button class="theme-btn" @click="toggleTheme" aria-label="Toggle Theme">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </nano-header>
</template>

<style scoped>
.header-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 0 24px;
  box-sizing: border-box;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--nano-text-color-primary);
  white-space: nowrap;
  cursor: pointer;
  width: 240px;
}

.logo-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.logo-text {
  font-size: 16px;
}

.header-menu {
  padding-left: 30px;
  border-bottom: none !important;
  background: transparent !important;
}

.theme-btn {
  padding: 8px;
  background-color: var(--nano-color-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 13px;
  transition: opacity 0.2s;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn:hover {
  opacity: 0.9;
}
</style>