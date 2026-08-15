<script setup lang="ts">
import { computed, useSlots } from 'vue'

/* --- DefineOptions --- */
defineOptions({
  name: 'NanoContainer'
})

const slots = useSlots()

/* --- Vertical 여부 --- */
const isVertical = computed(() => {
  if (!slots.default) return false
  const vNodes = slots.default()
  return vNodes.some((vNode: any) => {
    const type: any = vNode.type
    return type?.name === 'NanoAside' || (vNode.props && 'aside' in vNode.props)
  })
})
</script>

<template>
  <section class="nano-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>