<script setup lang="ts">
import { provide, computed } from 'vue'
import { NanoScrollbar } from '../../generals'

defineOptions({
  name: 'NanoMenu'
})

interface Props {
  mode?: 'vertical' | 'horizontal'
  defaultActive?: string
  maxHeight?: string | number
  maxWidth?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
  defaultActive: '',
  maxHeight: '',
  maxWidth: ''
})

const emit = defineEmits<{
  (e: 'select', index: string): void
}>()

provide('nanoMenu', {
  activeindex: computed(() => props.defaultActive),
  mode: props.mode,
  handleSelect: (index: string) => {
    emit('select', index)
  }
})
</script>

<template>
  <NanoScrollbar :max-height="props.maxHeight" :max-width="props.maxWidth">
    <ul :class="['nano-menu', `nano-menu-${props.mode}`]">
      <slot />
    </ul>
  </NanoScrollbar>
</template>
