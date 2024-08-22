<script setup>
defineOptions({ name: 'q-head' });
defineProps({ cells: Array });
</script>

<template>
  <div class="h-6 py-1 flex relative">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      :class="[index ? 'w-[100px] ml-px justify-end' : 'flex-1']"
      class="h-full px-4 text-xs leading-none flex items-center text-gray-400 bg-neutral-900/30"
    >
      <span>{{ cell }}</span>
    </div>
    <b class="absolute top-1 left-0 w-1 h-4 bg-white/30"></b>
  </div>
</template>
