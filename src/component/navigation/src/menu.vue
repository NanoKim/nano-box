<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { NanoScrollbar } from '../../general'

defineOptions({
  name: 'NanoMenu'
})

interface Props {
  mode?: 'vertical' | 'horizontal'
  defaultActive?: string
  maxHeight?: string | number
  maxWidth?: string | number
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
  defaultActive: '',
  maxHeight: '',
  maxWidth: '',
  collapse: false
})

const emit = defineEmits<{
  (e: 'select', index: string): void
}>()

const popoverRegistry = new Map<string, () => void>()

const registerPopover = (index: string, closeFn: () => void) => {
  popoverRegistry.set(index, closeFn)
}

const unregisterPopover = (index: string) => {
  popoverRegistry.delete(index)
}

const closeAllPopovers = (exceptIndex?: string) => {
  popoverRegistry.forEach((closeFn, index) => {
    if (index !== exceptIndex) {
      closeFn()
    }
  })
}

provide('nanoMenu', {
  activeindex: computed(() => props.defaultActive),
  mode: props.mode,
  collapse: computed(() => props.collapse),
  handleSelect: (index: string) => {
    emit('select', index)
  },
  registerPopover,
  unregisterPopover,
  closeAllPopovers
})
</script>

<template>
  <NanoScrollbar :max-height="props.maxHeight" :max-width="props.maxWidth">
    <ul :class="['nano-menu', `nano-menu-${props.mode}`, { 'is-collapse': props.collapse }]">
      <slot />
    </ul>
  </NanoScrollbar>
</template>