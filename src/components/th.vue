<script setup>
defineOptions({ name: 'q-th' });
defineProps({ data: Array });
</script>

<template>
  <div class="h-6 py-1 flex text-xs leading-none text-gray-400">
    <span
      v-for="(e, i) in data"
      :key="i"
      :class="{ 'flex-1': !i, 'w-[100px] justify-end ml-px': i }"
      class="h-full px-4 flex items-center bg-neutral-900/40"
    >
      {{ e }}
    </span>
  </div>
</template>
