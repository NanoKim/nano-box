<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'NanoIcon'
})

interface Props {
  name: string
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 30
})

const images = import.meta.glob('../../../assets/*.{png,ico,svg}', { eager: true, import: 'default' }) as Record<string, string>

const iconSrc = computed(() => {
  if (!props.name) return ''

  if (props.name.startsWith('/') || props.name.startsWith('http')) {
    return props.name
  }

  const possibleKeys = [
    `../../../assets/${props.name}.png`,
    `../../../assets/${props.name}.ico`,
    `../../../assets/${props.name}.svg`
  ]

  for (const key of possibleKeys) {
    if (images[key]) {
      return images[key]
    }
  }

  console.warn(`[NanoIcon] 아이콘을 찾을 수 없습니다: ${props.name}`)
  return ''
})

const computedSize = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>

<template>
  <i
    class="nano-icon"
    :style="{
      width: computedSize,
      height: computedSize,
      color: color
    }"
  >
    <img v-if="iconSrc" :src="iconSrc" :alt="name" class="nano-icon__image" />
  </i>
</template>