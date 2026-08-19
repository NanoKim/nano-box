<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref('')
</script>

<template>
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
</template>

<style scoped>
.main-area {
  padding: 30px;
  overflow-y: auto;
  flex: 1;
  box-sizing: border-box;
}

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
</style>