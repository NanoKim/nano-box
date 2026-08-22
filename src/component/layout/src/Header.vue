<script setup lang="ts">
/* --- DefineOptions --- */
defineOptions({
  name: 'NanoHeader'
})

/* --- DefineProps --- */
interface Props {
  height?: string
}

/* --- DefineProps --- */
withDefaults(defineProps<Props>(), {
  height: '60px'
})
</script>

<template>
  <header class="nano-header" :style="{ height: height }">
    <slot />
  </header>
</template>