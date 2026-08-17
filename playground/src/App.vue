<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <nano-container style="width: 100%; height: 100%; display: flex;">
    <nano-aside :width="isCollapse ? '70px' : '240px'" class="aside-area" style="transition: width 0.3s ease;">
      <nano-menu mode="vertical" :collapse="isCollapse">
        <nano-menu-item index="/component/guide" icon="nano">Guide</nano-menu-item>

        <nano-sub-menu index="Forms" title="Forms" icon="nano">
          <nano-menu-item index="" icon="nano" disabled>Checkbox</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Color Picker</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Date Picker</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Date Time Picker</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Form</nano-menu-item>
          <nano-menu-item index="/component/form/input" icon="nano">Input</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Radio</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Select</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Slider</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Switch</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU0000000000000000000000000000000</nano-menu-item>
          <nano-sub-menu index="Test" title="Test" icon="nano">
            <nano-menu-item index="" icon="nano">TBU1111111111111111111111111111111111111</nano-menu-item>
            <nano-menu-item index="" icon="nano">TBU2222222222222222222222222222222222222</nano-menu-item>
            <nano-sub-menu index="Test2" title="Test2" icon="nano">
              <nano-menu-item index="" icon="nano">TEST333333333333333333333333333333333333</nano-menu-item>
              <nano-menu-item index="" icon="nano">TEST444444444444444444444444444444444444</nano-menu-item>
            </nano-sub-menu>
          </nano-sub-menu>
        </nano-sub-menu>

        <nano-sub-menu index="Generals" title="Generals" icon="nano">
          <nano-menu-item index="" icon="nano" disabled>Badge</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Button</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Card</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Collapse</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Color</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Description</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Empty</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Image</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Icon</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Link</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Pagination</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Progress</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Text</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Timeline</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Scrollbar</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU</nano-menu-item>
        </nano-sub-menu>

        <nano-sub-menu index="Layouts" title="Layouts" icon="nano">
          <nano-menu-item index="" icon="nano" disabled>Layouts</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU</nano-menu-item>
        </nano-sub-menu>

        <nano-sub-menu index="Navigations" title="Navigations" icon="nano">
          <nano-menu-item index="" icon="nano" disabled>Backtop</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Breadcrumb</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Menu</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Step</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Tab</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU</nano-menu-item>
        </nano-sub-menu>

        <nano-sub-menu index="Overlays" title="Overlays" icon="nano">
          <nano-menu-item index="" icon="nano" disabled>Alert</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Confirm</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Dialog</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Drawer</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Loading</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Toast</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>Tooltip</nano-menu-item>
          <nano-menu-item index="" icon="nano" disabled>TBU</nano-menu-item>
        </nano-sub-menu>
      </nano-menu>
    </nano-aside>
    <div style="flex: 1; height: 100%; padding: 10px; display: flex; justify-content: flex-end;">
      <nano-icon name="nano" />
      <nano-icon name="user" />
      <nano-icon name="home" />
      <nano-icon name="chart" />
      <nano-icon name="computer" />
      <nano-icon name="search" />
      <nano-icon name="doubleLeft" />
      <nano-icon name="left" />
      <nano-icon name="right" />
      <nano-icon name="doubleRight" />

      <nano-icon name="doubleUp" />
      <nano-icon name="up" />
      <nano-icon name="down" />
      <nano-icon name="doubleDown" />
      <button @click="toggleCollapse">
        {{ isCollapse ? '>' : '<' }}
      </button>
    </div>
  </nano-container>
</template>