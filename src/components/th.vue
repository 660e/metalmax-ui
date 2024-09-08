<script setup>
defineOptions({ name: 'q-th' });
defineProps({ data: Array, width: Array });
</script>

<template>
  <div class="h-6 py-1 flex text-xs leading-none text-neutral-400">
    <span
      v-for="(e, i) in data"
      :key="i"
      :style="{ width: i ? `${width ? width[i - 1] : 100}px` : '' }"
      :class="{ 'flex-1 pl-4': !i, 'justify-end ml-px pr-4': i }"
      class="h-full flex items-center bg-neutral-900/50"
    >
      {{ e }}
    </span>
  </div>
</template>
