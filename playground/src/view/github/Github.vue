<script setup lang="ts">
const githubUrl = 'https://github.com/NanoKim/nano-box'
const portfolioUrl = 'https://portfolio-nine-bay-43.vercel.app/'

const handleGoToGitHub = () => {
  window.open(githubUrl, '_blank')
}

const handleGoToProfile = () => {
  window.open(portfolioUrl, '_blank')
}
</script>

<template>
  <nano-scrollbar>
    <div class="github-container">
      <div class="github-content-wrapper">
        <div class="banner-image-box" @click="handleGoToProfile">
          <img src="/nano-github.png" alt="NanoKim GitHub Banner" />
        </div>

        <div class="info-section">
          <span class="sub-label">Open Source</span>
          <h1>GitHub Repository</h1>
          <p class="description">
            NanoBox UI 라이브러리의 소스 코드가 투명하게 공개되어 있습니다.
          </p>

          <div class="action-area">
            <button class="github-btn" @click="handleGoToGitHub">
              <span>⭐️ GitHub 저장소 방문하기</span>
            </button>
            <span class="url-text">{{ githubUrl }}</span>
          </div>
        </div>
      </div>
    </div>
  </nano-scrollbar>
</template>

<style scoped>
.github-container {
  width: 100%;
  min-height: 100%;
  background-color: var(--nano-bg-color);
  padding: 50px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow-y: auto;
}

.github-content-wrapper {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.banner-image-box {
  width: 100%;
  margin-bottom: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.banner-image-box img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-image-box img:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

.info-section h1 {
  font-size: 36px;
  font-weight: 800;
  color: var(--nano-text-color-primary);
  margin: 0 0 16px 0;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--nano-text-color-secondary);
  margin: 0 0 32px 0;
  font-weight: 400;
  max-width: 600px;
}

.action-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.github-btn {
  padding: 14px 32px;
  background-color: var(--nano-color-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: opacity 0.2s, transform 0.1s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.github-btn:hover {
  opacity: 0.92;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.url-text {
  font-size: 13px;
  color: var(--nano-text-color-secondary);
  font-family: monospace;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .github-container {
    padding: 30px 16px;
  }

  .github-content-wrapper {
    margin-bottom: 100px;
  }

  .info-section h1 {
    font-size: 28px;
  }

  .description {
    font-size: 14px;
  }
}
</style>