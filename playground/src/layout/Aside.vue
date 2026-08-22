<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeMenu = ref(route.path)

const isCollapse = ref(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  }
)

const handleMenuSelect = (index: string) => {
  if (index.startsWith('/')) {
    router.push(index)
  }
}
</script>

<template>
  <nano-aside :width="isCollapse ? '70px' : '240px'" class="aside-area" style="transition: width 0.3s;">
    <div style="padding: 10px; border-bottom: 1px solid var(--nano-border-color-light, #eee); text-align: center; height: 32px">
      <button @click="toggleCollapse" style="width: 32px; height: 32px; padding: 6px; cursor: pointer; border-radius: 4px; border: 1px solid #ccc; background-color: transparent;">
        <nano-icon name="bars" size="18" />
      </button>
    </div>

    <nano-menu mode="vertical" :collapse="isCollapse" :default-active="activeMenu" @select="handleMenuSelect" style="height: calc(100% - 80px);">
      <nano-menu-item index="/component/guide" icon="book">Guide</nano-menu-item>
      <nano-sub-menu index="Forms" title="Forms" icon="user">
        <nano-menu-item index="" disabled>Checkbox</nano-menu-item>
        <nano-menu-item index="" disabled>Color Picker</nano-menu-item>
        <nano-menu-item index="" disabled>Date Picker</nano-menu-item>
        <nano-menu-item index="" disabled>Date Time Picker</nano-menu-item>
        <nano-menu-item index="" disabled>Form</nano-menu-item>
        <nano-menu-item index="/component/form/input">Input</nano-menu-item>
        <nano-menu-item index="" disabled>Radio</nano-menu-item>
        <nano-menu-item index="" disabled>Select</nano-menu-item>
        <nano-menu-item index="" disabled>Slider</nano-menu-item>
        <nano-menu-item index="" disabled>Switch</nano-menu-item>
        <nano-menu-item index="" disabled>TBU</nano-menu-item>
      </nano-sub-menu>
      <nano-sub-menu index="Generals" title="Generals">
        <nano-menu-item index="" disabled>Badge</nano-menu-item>
        <nano-menu-item index="" disabled>Button</nano-menu-item>
        <nano-menu-item index="" disabled>Card</nano-menu-item>
        <nano-menu-item index="" disabled>Collapse</nano-menu-item>
        <nano-menu-item index="" disabled>Color</nano-menu-item>
        <nano-menu-item index="" disabled>Description</nano-menu-item>
        <nano-menu-item index="" disabled>Empty</nano-menu-item>
        <nano-menu-item index="" disabled>Image</nano-menu-item>
        <nano-menu-item index="" disabled>Icon</nano-menu-item>
        <nano-menu-item index="" disabled>Link</nano-menu-item>
        <nano-menu-item index="" disabled>Pagination</nano-menu-item>
        <nano-menu-item index="" disabled>Progress</nano-menu-item>
        <nano-menu-item index="" disabled>Text</nano-menu-item>
        <nano-menu-item index="" disabled>Timeline</nano-menu-item>
        <nano-menu-item index="" disabled>Scrollbar</nano-menu-item>
        <nano-menu-item index="" disabled>TBU</nano-menu-item>
      </nano-sub-menu>
      <nano-sub-menu index="Layouts" title="Layouts">
        <nano-menu-item index="" disabled>Layouts</nano-menu-item>
        <nano-menu-item index="" disabled>TBU</nano-menu-item>
      </nano-sub-menu>
      <nano-sub-menu index="Navigations" title="Navigations">
        <nano-menu-item index="" disabled>Backtop</nano-menu-item>
        <nano-menu-item index="" disabled>Breadcrumb</nano-menu-item>
        <nano-menu-item index="/component/navigation/menu">Menu</nano-menu-item>
        <nano-menu-item index="" disabled>Step</nano-menu-item>
        <nano-menu-item index="" disabled>Tab</nano-menu-item>
        <nano-menu-item index="" disabled>TBU</nano-menu-item>
      </nano-sub-menu>
      <nano-sub-menu index="Overlays" title="Overlays">
        <nano-menu-item index="" disabled>Alert</nano-menu-item>
        <nano-menu-item index="" disabled>Confirm</nano-menu-item>
        <nano-menu-item index="" disabled>Dialog</nano-menu-item>
        <nano-menu-item index="" disabled>Drawer</nano-menu-item>
        <nano-menu-item index="" disabled>Loading</nano-menu-item>
        <nano-menu-item index="" disabled>Toast</nano-menu-item>
        <nano-menu-item index="" disabled>Tooltip</nano-menu-item>
        <nano-menu-item index="" disabled>TBU</nano-menu-item>
      </nano-sub-menu>
    </nano-menu>
  </nano-aside>
</template>