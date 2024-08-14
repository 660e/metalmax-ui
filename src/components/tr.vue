<script setup lang="ts">
defineOptions({ name: 'q-tr' });
defineProps<{ cells: string[]; widths?: number[] }>();
</script>

<template>
  <div class="h-6 flex space-x-px handle">
    <span
      v-for="(cell, index) in cells"
      :key="index"
      :style="{ width: widths && widths[index] ? `${widths[index]}px` : 'auto' }"
      :class="{ 'flex-1': !widths || !widths[index], 'justify-end': index }"
      class="flex items-center px-4"
    >
      {{ cell }}
    </span>
  </div>
</template>
