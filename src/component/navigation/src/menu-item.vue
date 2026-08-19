<script setup lang="ts">
import { inject, computed, ref, onMounted, nextTick } from 'vue'
import { NanoIcon } from '../../general'

defineOptions({
  name: 'NanoMenuItem'
})

interface Props {
  index: string
  disabled?: boolean
  icon?: string
  showTooltip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  icon: '',
  showTooltip: true
})

const menuContext = inject<any>('nanoMenu', {})
const subMenuContext = inject<any>('nanoSubMenu', null)

const isActive = computed(() => {
  return menuContext.activeindex?.value === props.index
})

const isCollapse = computed(() => {
  const menuCollapse = menuContext.collapse
  const collapseVal: boolean = typeof menuCollapse === 'object' && menuCollapse !== null && 'value' in menuCollapse
    ? !!menuCollapse.value
    : !!menuCollapse

  const modeVal = typeof menuContext.mode?.value !== 'undefined' ? menuContext.mode.value : menuContext.mode
  const isVertical = modeVal === 'vertical' || !modeVal

  return (collapseVal && isVertical && !subMenuContext)
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
const defaultSlotText = ref('')

onMounted(() => {
  nextTick(() => {
    if (textRef.value) {
      defaultSlotText.value = textRef.value.textContent?.trim() || ''
    }
  })
})

const tooltipText = computed(() => {
  if (!props.showTooltip || menuContext.mode?.value === 'horizontal' || !isCollapse.value) {
    return ''
  }
  return defaultSlotText.value
})
</script>

<template>
  <component
    :is="tooltipText ? 'nano-tooltip' : 'div'"
    :content="tooltipText"
    :placement="tooltipPlacement"
    :style="!tooltipText ? 'display: contents;' : ''"
  >
    <li
      class="nano-menu-item"
      :class="{
        'is-active': isActive,
        'is-disabled': disabled,
        'is-sub-item': !!subMenuContext,
        'is-collapse': isCollapse
      }"
      @click.stop="handleClick"
    >
      <span v-if="Boolean(props.icon) || isCollapse" class="nano-menu-item__icon-wrapper">
        <nano-icon v-if="Boolean(props.icon)" :name="props.icon" />
        <span v-else-if="isCollapse" class="nano-menu-item__empty-icon"></span>
      </span>

      <span ref="textRef" class="nano-menu-item__text" :style="isCollapse ? 'display: none;' : ''">
        <slot />
      </span>
    </li>
  </component>
</template>