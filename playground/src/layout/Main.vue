<script setup lang="ts">
import Aside from '../layout/Aside.vue'
import Footer from '../layout/Footer.vue'
</script>

<template>
  <nano-container class="component-layout">
    <Aside />
    <nano-main class="content-wrapper">
      <nano-scrollbar>
        <router-view />
      </nano-scrollbar>
      <Footer />
    </nano-main>
  </nano-container>
</template>

<style scoped>
.component-layout {
  display: flex !important;
  flex-direction: row !important;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  box-sizing: border-box;
}

.content-wrapper {
  display: flex !important;
  flex-direction: column !important;
  flex: 1;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
}
</style>