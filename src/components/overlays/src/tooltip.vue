<script setup lang="ts">
import { ref, nextTick } from 'vue'

/* --- DefineOptions --- */
defineOptions({
  name: 'NanoTooltip'
})

/* --- DefineProps --- */
interface Props {
  content?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

/* --- DefineProps --- */
const props = withDefaults(defineProps<Props>(), {
  placement: 'top'
})

const isVisible = ref(false)
const tooltipStyle = ref<{ top?: string; left?: string; transform?: string }>({})
const wrapperRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)

const handleMouseEnter = async () => {
  if (!wrapperRef.value) return

  const rect = wrapperRef.value.getBoundingClientRect()
  isVisible.value = true

  await nextTick()

  let top = 0
  let left = 0
  let transform = 'none'

  switch (props.placement) {
    case 'right':
      top = rect.top + rect.height / 2
      left = rect.right + 8
      transform = 'translateY(-50%)'
      break
    case 'bottom':
      top = rect.bottom + 8
      left = rect.left + rect.width / 2
      transform = 'translateX(-50%)'
      break
    case 'left':
      top = rect.top + rect.height / 2
      left = rect.left - 8
      transform = 'translate(-100%, -50%)'
      break
    case 'top':
    default:
      top = rect.top - 8
      left = rect.left + rect.width / 2
      transform = 'translate(-50%, -100%)'
      break
  }

  tooltipStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    transform
  }
}

const handleMouseLeave = () => {
  isVisible.value = false
}
</script>

<template>
  <div
    ref="wrapperRef"
    class="nano-tooltip-wrapper"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />

    <teleport to="body">
      <transition name="nano-fade">
        <div
          v-if="isVisible && content"
          ref="tooltipRef"
          class="nano-tooltip-content"
          :style="tooltipStyle"
        >
          {{ content }}
        </div>
      </transition>
    </teleport>
  </div>
</template>