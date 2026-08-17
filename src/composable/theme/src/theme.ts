import { ref } from 'vue'

export function useThemeTransition(initialDark = false) {
  const isDark = ref(initialDark)

  const toggleTheme = async () => {
    if (!document.startViewTransition) {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
      return
    }

    const dpr = window.devicePixelRatio || 1
    const x = (window.innerWidth / 2) * dpr
    const y = (window.innerHeight / 2) * dpr

    const maxX = Math.max(x, window.innerWidth * dpr - x)
    const maxY = Math.max(y, window.innerHeight * dpr - y)
    const endRadius = Math.hypot(maxX, maxY) + Math.max(window.innerWidth, window.innerHeight) * 0.5

    const transition = document.startViewTransition(() => {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
    })

    await transition.ready

    document.documentElement.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` }
      ],
      {
        duration: 750,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  }

  return {
    isDark,
    toggleTheme
  }
}