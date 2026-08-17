<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <nano-container style="width: 100%; height: 100%; display: flex;">

  </nano-container>
</template>