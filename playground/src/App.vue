<script setup lang="ts">
import Header from './layout/Header.vue'
</script>

<template>
  <nano-scrollbar>
    <nano-container class="playground-layout">
      <Header />
      <router-view />
    </nano-container>
  </nano-scrollbar>
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
</style>