<script setup lang="ts">
/* --- DefineOptions --- */
defineOptions({
  name: 'NanoFooter'
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
  <footer class="nano-footer" :style="{ height: height }">
    <slot />
  </footer>
</template>