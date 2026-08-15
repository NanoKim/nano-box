<script setup lang="ts">
/* --- DefineOptions --- */
defineOptions({
  name: 'NanoAside'
})

/* --- DefineProps --- */
interface Props {
  width?: string
}

/* --- DefineProps --- */
withDefaults(defineProps<Props>(), {
  width: '300px'
})
</script>

<template>
  <aside class="nano-aside" :style="{ width: width }">
    <slot />
  </aside>
</template>