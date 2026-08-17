<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'NanoScrollbar'
})

interface Props {
  height?: string | number
  maxHeight?: string | number
  width?: string | number
  maxWidth?: string | number
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div'
})

const styles = computed(() => {
  return {
    height: props.height ? (typeof props.height === 'number' ? `${props.height}px` : props.height) : undefined,
    maxHeight: props.maxHeight ? (typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight) : undefined,
    width: props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : undefined,
    maxWidth: props.maxWidth ? (typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth) : undefined
  }
})
</script>

<template>
  <div class="nano-scrollbar" :style="styles">
    <div class="nano-scrollbar__wrap">
      <component :is="tag" class="nano-scrollbar__view">
        <slot />
      </component>
    </div>
  </div>
</template>