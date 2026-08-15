<script setup lang="ts">
import { inject, computed, ref, onMounted, nextTick, watch } from 'vue'

defineOptions({
  name: 'NanoMenuItem'
})

interface Props {
  index: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const menuContext = inject<any>('nanoMenu', {})
const subMenuContext = inject<any>('nanoSubMenu', null)

const isActive = computed(() => {
  return menuContext.activeindex?.value === props.index
})

const tooltipPlacement = computed(() => {
  return menuContext.mode?.value === 'horizontal' ? 'bottom' : 'right'
})

const handleClick = () => {
  if (props.disabled) return
  if (menuContext.handleSelect) {
    menuContext.handleSelect(props.index)
  }
}

const textRef = ref<HTMLElement | null>(null)
const tooltipText = ref('')

const checkEllipsis = () => {
  if (textRef.value) {
    if (textRef.value.scrollWidth > textRef.value.clientWidth) {
      tooltipText.value = textRef.value.textContent || ''
    } else {
      tooltipText.value = ''
    }
  }
}

onMounted(() => {
  nextTick(() => {
    checkEllipsis()
  })
})

if (subMenuContext?.isOpen) {
  watch(() => subMenuContext.isOpen.value, (newIsOpen) => {
    if (newIsOpen) {
      nextTick(() => {
        checkEllipsis()
      })
    }
  })
}
</script>

<template>
  <nano-tooltip :content="tooltipText" :placement="tooltipPlacement">
    <li
      class="nano-menu-item"
      :class="{
        'is-active': isActive,
        'is-disabled': disabled,
        'is-sub-item': !!subMenuContext
      }"
      @click.stop="handleClick"
    >
      <span ref="textRef" class="nano-menu-item__text">
        <slot />
      </span>
    </li>
  </nano-tooltip>
</template>