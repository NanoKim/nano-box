<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)
const verticalActive = ref('item-1')

const horizontalActive = ref('home')

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <nano-main class="main-area">
    <div class="guide-container">
      <h1>Menu</h1>
      <p class="desc">사용자가 사이트 내부를 쉽게 탐색할 수 있도록 수직, 수평, 그리고 접기(Collapse) 기능을 지원하는 메뉴 컴포넌트입니다.</p>

      <section class="section">
        <h2>1. Horizontal Mode</h2>
        <p class="section-desc">상단 네비게이션 바 등에 주로 사용되는 가로형 메뉴입니다.</p>

        <div class="demo-box">
          <nano-menu mode="horizontal" :default-active="horizontalActive">
            <nano-menu-item index="home" icon="book">Home</nano-menu-item>
            <nano-menu-item index="products">Products</nano-menu-item>
            <nano-menu-item index="about">About</nano-menu-item>
          </nano-menu>
        </div>
      </section>

      <section class="section">
        <h2>2. Vertical & Collapse Mode</h2>
        <p class="section-desc">좌측 사이드바(Aside)에서 주로 사용되는 세로형 메뉴이며, 토글 버튼을 통해 아이콘 중심의 축소 모드로 전환할 수 있습니다.</p>

        <div class="demo-box-aside-wrap" :style="{ width: isCollapse ? '70px' : '240px', transition: 'width 0.3s' }">
          <div class="collapse-btn-wrapper">
            <button @click="toggleCollapse" class="collapse-toggle-btn">
              <nano-icon name="bars" size="18" />
            </button>
          </div>

          <nano-menu
            mode="vertical"
            :collapse="isCollapse"
            :default-active="verticalActive"
            max-height="350px"
          >
            <nano-menu-item index="item-1" icon="book">Dashboard</nano-menu-item>

            <nano-sub-menu index="sub-forms" title="Forms" icon="user">
              <nano-menu-item index="form-input">Input</nano-menu-item>
              <nano-menu-item index="form-select" disabled>Select (Disabled)</nano-menu-item>

              <nano-sub-menu index="sub-deep" title="Deep SubMenu">
                <nano-menu-item index="deep-1">Deep Item 1</nano-menu-item>
                <nano-menu-item index="deep-2">Deep Item 2</nano-menu-item>
              </nano-sub-menu>
            </nano-sub-menu>

            <nano-sub-menu index="sub-settings" title="Settings" icon="star">
              <nano-menu-item index="set-profile">Profile</nano-menu-item>
              <nano-menu-item index="set-security">Security</nano-menu-item>
            </nano-sub-menu>
          </nano-menu>
        </div>
      </section>

    </div>
  </nano-main>
</template>

<style scoped>
.main-area {
  padding: 40px;
  overflow-y: auto;
  flex: 1;
  box-sizing: border-box;
}

.guide-container {
  max-width: 900px;
}

.guide-container h1 {
  margin-top: 0;
  font-size: 32px;
  color: var(--nano-text-color-primary);
  letter-spacing: -0.02em;
}

.desc {
  color: var(--nano-text-color-secondary);
  font-size: 16px;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 48px;
}

.section h2 {
  font-size: 20px;
  color: var(--nano-text-color-primary);
  margin-bottom: 8px;
}

.section-desc {
  color: var(--nano-text-color-secondary);
  font-size: 14px;
  margin-bottom: 16px;
}

.demo-box {
  border: 1px solid var(--nano-border-color-light);
  border-radius: 8px;
  background-color: var(--nano-bg-color);
  overflow: hidden;
}

.demo-box-aside-wrap {
  border: 1px solid var(--nano-border-color-light);
  border-radius: 8px;
  background-color: var(--nano-bg-color);
  overflow: hidden;
}

.collapse-btn-wrapper {
  padding: 10px;
  border-bottom: 1px solid var(--nano-border-color-light, #eee);
  text-align: center;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.collapse-toggle-btn {
  width: 32px;
  height: 32px;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: transparent;
}

.collapse-toggle-btn:hover {
  background-color: var(--nano-bg-color);
}
</style>