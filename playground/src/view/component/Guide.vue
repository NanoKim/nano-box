<script setup lang="ts">
</script>

<template>
  <nano-main class="main-area">
    <div class="guide-container">
      <h1>Guide & Getting Started</h1>
      <p class="desc">NanoBox UI 라이브러리를 프로젝트에 빠르고 쉽게 적용하는 방법입니다.</p>

      <section class="section">
        <h2>1. Installation</h2>
        <p class="section-desc">현재 GitHub 저장소를 통해 프로젝트에 NanoBox를 설치합니다.</p>
        <div class="code-box">
          <code>npm install git+https://github.com/NanoKim/nano-box.git</code>
        </div>
      </section>

      <section class="section">
        <h2>2. Quick Start</h2>
        <p class="section-desc">main.ts 파일에 스타일과 라이브러리를 등록하여 바로 사용할 수 있습니다.</p>
        <div class="code-box">
          <pre><code>import { createApp } from 'vue'
import App from './App.vue'
import NanoBox from 'nano-box'
import 'nano-box/style.css'

const app = createApp(App)
app.use(NanoBox)
app.mount('#app')</code></pre>
        </div>
      </section>

      <section class="section">
        <h2>3. Explore Components</h2>
        <p class="section-desc">좌측 메뉴에서 다양한 컴포넌트들의 인터랙션과 상세 옵션을 직접 테스트해 보세요.</p>
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
  max-width: 800px;
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
  margin-bottom: 36px;
}

.section h2 {
  font-size: 20px;
  color: var(--nano-text-color-primary);
  margin-bottom: 8px;
}

.section-desc {
  color: var(--nano-text-color-secondary);
  font-size: 14px;
  margin-bottom: 12px;
}

.code-box {
  background-color: var(--nano-bg-color);
  border: 1px solid var(--nano-border-color-light);
  border-radius: 8px;
  padding: 16px 20px;
  font-family: monospace;
  font-size: 14px;
  color: var(--nano-text-color-primary);
  overflow-x: auto;
}

.code-box pre {
  margin: 0;
}
</style>