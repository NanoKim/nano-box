<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <nano-footer height="50px" class="footer-area">
    <span>© {{ currentYear }} NanoBox UI Library. All rights reserved.</span>
  </nano-footer>
</template>

<style scoped>
.footer-area {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--nano-border-color-light);
  color: var(--nano-text-color-secondary);
  font-size: 13px;
}
</style>