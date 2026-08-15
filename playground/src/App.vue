<script setup lang="ts">
import { ref } from 'vue'
import { useThemeTransition } from '../../src/index'

const textValue = ref('')
const activeMenu = ref('input')

const { isDark, toggleTheme } = useThemeTransition()

const handleMenuSelect = (index: string) => {
  activeMenu.value = index
}
</script>

<template>
  <nano-container class="playground-layout">

    <nano-header class="header-area">
      <div class="header-left">
        <div class="logo">❤️ NanoBox Playground</div>

        <nano-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect">
          <nano-menu-item index="guide">가이드</nano-menu-item>
          <nano-menu-item index="components">컴포넌트</nano-menu-item>
          <nano-menu-item index="github">GitHub</nano-menu-item>
        </nano-menu>
      </div>

      <!-- 다크모드 전환 버튼 -->
      <button class="theme-btn" @click="toggleTheme">
        {{ isDark ? '🌞 라이트모드' : '🌙 다크모드' }}
      </button>
    </nano-header>

    <nano-container>

      <nano-aside width="240px" class="aside-area">
        <div class="menu-title">Basic Components</div>

        <nano-menu mode="vertical" :default-active="activeMenu" max-height="600px" @select="handleMenuSelect">
          <nano-menu-item index="1">menu1</nano-menu-item>
          <nano-menu-item index="2">menu2</nano-menu-item>
          <nano-menu-item index="3" disabled>menu3 (disabled test)</nano-menu-item>
          <nano-sub-menu index="4" title="menu4">
            <nano-menu-item index="4-1">4-1 xxxxxxxxxxxxxxxxxxxxxxxxxx</nano-menu-item>
            <nano-menu-item index="4-2">4-2</nano-menu-item>
          </nano-sub-menu>
          <nano-sub-menu index="5" title="menu5">
            <nano-menu-item index="5-1">5-1 xxxxxxxxxxxxxxxxxxxxxxxxxx</nano-menu-item>
            <nano-sub-menu index="5-2" title="menu5-2">
              <nano-menu-item index="5-2-1">5-2-1</nano-menu-item>
              <nano-menu-item index="5-2-2">5-2-2</nano-menu-item>
              <nano-menu-item index="5-2-3">5-2-3</nano-menu-item>
            </nano-sub-menu>
          </nano-sub-menu>
          <nano-menu-item index="6">menu6 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="7">menu7 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="8">menu8 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="9">menu9 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="10">menu10 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="11">menu11 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="12">menu12 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="13">menu13 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="14">menu14 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="15">menu15 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="16">menu16 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="17">menu17 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="18">menu18 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="19">menu19 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="20">menu20 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="21">menu21 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="22">menu22 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="23">menu23 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="24">menu24 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="25">menu25 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="26">menu26 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (scroll test)</nano-menu-item>
          <nano-menu-item index="27" disabled>menu27 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (disabled ellipsis test)</nano-menu-item>
        </nano-menu>
      </nano-aside>

      <!-- 우측 본문 및 푸터 래퍼 영역 -->
      <nano-container>

        <!-- 본문 Main 영역 -->
        <nano-main class="main-area">
          <h2>NanoInput 컴포넌트 테스트</h2>
          <p class="desc">현재 입력된 값: <strong>{{ textValue || '(없음)' }}</strong></p>

          <div class="component-box">
            <label style="display: block; margin-bottom: 8px; font-size: 14px;">기본 입력창</label>
            <nano-input
              v-model="textValue"
              placeholder="무엇이든 입력해보세요..."
              clearable
            />
          </div>

          <div class="component-box" style="margin-top: 20px;">
            <label style="display: block; margin-bottom: 8px; font-size: 14px;">비활성화된 입력창 테스트</label>
            <nano-input
              placeholder="비활성화 상태입니다"
              disabled
            />
          </div>
        </nano-main>

        <!-- 하단 Footer 영역 -->
        <nano-footer height="50px" class="footer-area">
          <span>© 2026 NanoBox UI Library. All rights reserved.</span>
        </nano-footer>

      </nano-container>

    </nano-container>

  </nano-container>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.playground-layout {
  height: 100vh;
}

.header-area {
  justify-content: space-between;
  font-weight: bold;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 40px;
  height: 100%;
}

.logo {
  color: var(--nano-text-color-primary);
  white-space: nowrap;
}

/* 탑 메뉴 배경 투명화 및 높이 맞춤 */
.top-menu {
  background-color: transparent !important;
  border-bottom: none !important;
  height: 100% !important;
}

.theme-btn {
  padding: 6px 14px;
  background-color: var(--nano-color-primary);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: opacity 0.2s;
}

.theme-btn:hover {
  opacity: 0.9;
}

/* Aside(사이드바) 스타일 꾸미기 */
.aside-area {
  padding: 16px 0;
  border-right: 1px solid var(--nano-border-color-light);
}

.menu-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--nano-text-color-secondary);
  margin-bottom: 12px;
  padding: 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Main 본문 영역 스타일 */
.main-area h2 {
  margin-top: 0;
  color: var(--nano-text-color-primary);
}

.desc {
  color: var(--nano-text-color-secondary);
  margin-bottom: 24px;
}

.component-box {
  padding: 20px;
  border: 1px solid var(--nano-border-color-light);
  border-radius: 8px;
  background-color: var(--nano-bg-color);
}

/* Footer 영역 스타일 */
.footer-area {
  justify-content: center;
  font-size: 12px;
  color: var(--nano-text-color-secondary);
  border-top: 1px solid var(--nano-border-color-light);
}
</style>