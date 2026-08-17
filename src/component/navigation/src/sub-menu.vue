<script setup lang="ts">
import { ref, inject, computed, provide, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { NanoIcon } from '../../general'

defineOptions({
  name: 'NanoSubMenu'
})

interface Props {
  index: string
  title: string
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
const parentSubMenu = inject<any>('nanoSubMenu', null)

const isOpen = ref(false)
const isPopoverOpen = ref(false)
const popoverTop = ref(0)
const popoverLeft = ref(0)

let leaveTimer: number | null = null
const subMenuRef = ref<HTMLElement | null>(null)

const isCollapse = computed(() => {
  const menuCollapse = menuContext.collapse
  const collapseVal: boolean = typeof menuCollapse === 'object' && menuCollapse !== null && 'value' in menuCollapse
    ? !!menuCollapse.value
    : !!menuCollapse

  const isVertical = menuContext.mode?.value === 'vertical' || menuContext.mode === 'vertical' || !menuContext.mode
  return !!(collapseVal && isVertical)
})

watch(isCollapse, (val) => {
  if (val && !parentSubMenu) {
    isOpen.value = false
    isPopoverOpen.value = false
    clearLeaveTimer()
  }
})

const updatePopoverPosition = () => {
  if (!subMenuRef.value) return
  const rect = subMenuRef.value.getBoundingClientRect()
  popoverTop.value = rect.top
  popoverLeft.value = rect.right + 10
}

const handleTitleClick = () => {
  if (props.disabled) return

  if (isCollapse.value) {
    isPopoverOpen.value = !isPopoverOpen.value
    if (isPopoverOpen.value) {
      if (!parentSubMenu && menuContext.closeAllPopovers) {
        menuContext.closeAllPopovers(props.index)
      }
      nextTick(updatePopoverPosition)
    }
    return
  }

  isOpen.value = !isOpen.value

  if (menuContext.handleSelect) {
    menuContext.handleSelect(props.index)
  }
}

const closePopover = () => {
  clearLeaveTimer()
  isPopoverOpen.value = false
}

// ★ 타이머를 완전히 박멸하고 재설정하는 전용 함수
const clearLeaveTimer = () => {
  if (leaveTimer !== null) {
    clearTimeout(leaveTimer)
    leaveTimer = null
  }
  if (parentSubMenu && typeof parentSubMenu.clearLeaveTimer === 'function') {
    parentSubMenu.clearLeaveTimer()
  }
}

const cancelLeaveTimer = () => {
  clearLeaveTimer()
}

onMounted(() => {
  if (!parentSubMenu && menuContext.registerPopover) {
    menuContext.registerPopover(props.index, closePopover)
  }
})

onUnmounted(() => {
  clearLeaveTimer()
  if (!parentSubMenu && menuContext.unregisterPopover) {
    menuContext.unregisterPopover(props.index)
  }
})

provide('nanoSubMenu', {
  parentIndex: props.index,
  isOpen: isOpen,
  isPopoverOpen: isPopoverOpen,
  closePopover,
  clearLeaveTimer
})

const isActive = computed(() => {
  return menuContext.activeindex?.value === props.index
})

const tooltipPlacement = computed(() => {
  const modeVal = menuContext.mode?.value || menuContext.mode
  return modeVal === 'horizontal' ? 'bottom' : 'right'
})

const tooltipText = computed(() => {
  if (!props.showTooltip || isCollapse.value) return ''
  return props.title
})

const onMouseEnter = () => {
  // ★ 진입하는 순간 잔류 타이머를 무조건 초기화하여 떴다 사라지는 버그 원천 차단
  clearLeaveTimer()

  if (isCollapse.value) {
    if (!parentSubMenu && menuContext.closeAllPopovers) {
      menuContext.closeAllPopovers(props.index)
    }
    isPopoverOpen.value = true
    nextTick(updatePopoverPosition)
  }
}

const onMouseLeave = () => {
  if (isCollapse.value) {
    clearLeaveTimer()
    leaveTimer = window.setTimeout(() => {
      isPopoverOpen.value = false
      if (!parentSubMenu && menuContext.closeAllPopovers) {
        menuContext.closeAllPopovers()
      }
      leaveTimer = null
    }, 300)
  }
}

const onPopoverMouseEnter = () => {
  clearLeaveTimer()
  isPopoverOpen.value = true
}

const onPopoverMouseLeave = () => {
  if (isCollapse.value) {
    clearLeaveTimer()
    leaveTimer = window.setTimeout(() => {
      isPopoverOpen.value = false
      if (!parentSubMenu && menuContext.closeAllPopovers) {
        menuContext.closeAllPopovers()
      }
      leaveTimer = null
    }, 300)
  }
}

const onBeforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.style.overflow = 'hidden'
}

const onEnter = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.transition = 'height 0.3s ease, opacity 0.3s ease'
  htmlEl.style.height = `${htmlEl.scrollHeight}px`
  htmlEl.style.opacity = '1'
  htmlEl.addEventListener('transitionend', done, { once: true })
}

const onAfterEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.transition = ''
  htmlEl.style.height = 'auto'
  htmlEl.style.overflow = ''
}

const onBeforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = `${htmlEl.scrollHeight}px`
  htmlEl.style.opacity = '1'
  htmlEl.style.overflow = 'hidden'
}

const onLeave = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement
  htmlEl.offsetHeight
  htmlEl.style.transition = 'height 0.3s ease, opacity 0.3s ease'
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.addEventListener('transitionend', done, { once: true })
}

const onAfterLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.transition = ''
  htmlEl.style.height = ''
  htmlEl.style.overflow = ''
}
</script>

<template>
  <li
    ref="subMenuRef"
    class="nano-submenu"
    :class="{
      'is-opened': isOpen && !isCollapse,
      'is-active': isActive,
      'is-disabled': disabled,
      'is-nested': !!parentSubMenu,
      'is-collapse': isCollapse && !parentSubMenu
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <nano-tooltip :content="tooltipText" :placement="tooltipPlacement">
      <div class="nano-submenu__title" @click.stop="handleTitleClick">
        <span class="nano-submenu__icon-wrapper">
          <nano-icon v-if="props.icon" :name="props.icon" />
          <span v-else-if="isCollapse && !parentSubMenu" class="nano-submenu__empty-icon"></span>
        </span>
        <span ref="textRef" class="nano-submenu__title-text" :style="isCollapse && !parentSubMenu ? 'display: none;' : ''">
          {{ title }}
        </span>
        <span class="nano-submenu__arrow" :class="{ 'is-open': isOpen && !isCollapse }" :style="isCollapse && !parentSubMenu ? 'display: none;' : ''">
          {{ isCollapse ? '▶' : '▼' }}
        </span>
      </div>
    </nano-tooltip>

    <Teleport to="body">
      <Transition name="nano-popover">
        <div
          v-if="isCollapse && isPopoverOpen"
          class="nano-submenu__popover"
          :style="{ top: `${popoverTop}px`, left: `${popoverLeft}px` }"
          @mouseenter="onPopoverMouseEnter"
          @mouseleave="onPopoverMouseLeave"
        >
          <div v-if="!parentSubMenu" class="nano-submenu__popover-title">{{ title }}</div>
          <ul class="nano-submenu__popover-list">
            <slot />
          </ul>
        </div>
      </Transition>
    </Teleport>

    <Transition
      v-if="!isCollapse"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <ul v-show="isOpen" class="nano-submenu__list">
        <slot />
      </ul>
    </Transition>
  </li>
</template>