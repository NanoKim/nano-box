<script setup lang="ts">
import { computed, useAttrs } from 'vue'

/* --- DefineOptions --- */
defineOptions({
  name: 'NanoInput',
  inheritAttrs: false
})

/* --- DefineProps --- */
interface Props {
  modelValue?: string | number
  type?: string
  clearable?: boolean
  disabled?: boolean
}

/* --- DefineProps --- */
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  clearable: false,
  disabled: false
})

/* --- DefineEmits --- */
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'clear'): void
  (e: 'blur', event: FocusEvent): void
  (e: 'focus', event: FocusEvent): void
}>()

const attrs = useAttrs()

/* --- v-model 양방향 바인딩 처리 --- */
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

/* --- X 버튼 클릭 시 초기화 --- */
const clear = () => {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<template>
  <div
    class="nano-input"
    :class="{ 'is-disabled': props.disabled }"
  >
    <input
      v-bind="attrs"
      :type="props.type"
      :value="value"
      :disabled="props.disabled"
      @input="value = ($event.target as HTMLInputElement).value"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      class="nano-input__inner"
    />

    <span
      v-if="props.clearable && value && !props.disabled"
      class="nano-input__clear"
      @click="clear"
    >
      ✕
    </span>
  </div>
</template>