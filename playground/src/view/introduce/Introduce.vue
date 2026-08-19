<script setup lang="ts">
</script>

<template>
  <div class="introduce-container">
    <div class="hero-inner">
      <div class="hero-text">
        <span class="sub-label">Design & Components</span>
        <h1>NanoBox UI</h1>
        <p class="description">
          가장 가볍고 직관적인 인터페이스를 만듭니다.<br />
          상단의 메뉴에서 컴포넌트를 탐색해보세요.
        </p>
      </div>

      <div class="hero-image">
        <img src="/nano-box.png" alt="NanoBox Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.introduce-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: var(--nano-bg-color);
  padding: 24px;
  box-sizing: border-box;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 560px;
  width: 100%;
}

.hero-text {
  flex: 1;
  text-align: left;
}

.sub-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--nano-color-primary);
  margin-bottom: 12px;
}

.hero-text h1 {
  font-size: 48px;
  font-weight: 800;
  color: var(--nano-text-color-primary);
  margin: 0 0 16px 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--nano-text-color-secondary);
  margin: 0;
  font-weight: 400;
}

.hero-image {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 170px;
  height: 170px;
  object-fit: contain;
  filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 0.06));
}

@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }
  .hero-text {
    text-align: center;
  }
  .hero-image img {
    width: 130px;
    height: 130px;
  }
}
</style>