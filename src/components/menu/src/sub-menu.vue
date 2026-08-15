<script setup lang="ts">
import { ref, inject, computed, provide, onMounted } from 'vue'

defineOptions({
  name: 'NanoSubMenu'
})

interface Props {
  index: string
  title: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

/* --- Provide / Inject --- */
const menuContext = inject<any>('nanoMenu', {})
const parentSubMenu = inject<any>('nanoSubMenu', null)

/* --- State & Computed --- */
const isOpen = ref(false)

const handleTitleClick = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value

  if (menuContext.handleSelect) {
    menuContext.handleSelect(props.index)
  }
}

provide('nanoSubMenu', {
  parentIndex: props.index,
  isOpen: isOpen
})

const isActive = computed(() => {
  return menuContext.activeindex?.value === props.index
})

const tooltipPlacement = computed(() => {
  return menuContext.mode?.value === 'horizontal' ? 'bottom' : 'right'
})

const textRef = ref<HTMLElement | null>(null)
const tooltipText = ref('')

onMounted(() => {
  if (textRef.value) {
    if (textRef.value.scrollWidth > textRef.value.clientWidth) {
      tooltipText.value = props.title
    }
  }
})

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
    class="nano-submenu"
    :class="{
      'is-opened': isOpen,
      'is-active': isActive,
      'is-disabled': disabled,
      'is-nested': !!parentSubMenu
    }"
  >
    <nano-tooltip :content="tooltipText" :placement="tooltipPlacement">
      <div class="nano-submenu__title" @click.stop="handleTitleClick">
        <span ref="textRef" class="nano-submenu__title-text">
          {{ title }}
        </span>
        <span class="nano-submenu__arrow" :class="{ 'is-open': isOpen }">▼</span>
      </div>
    </nano-tooltip>

    <Transition
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