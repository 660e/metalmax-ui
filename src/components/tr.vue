<script setup lang="ts">
defineOptions({ name: 'q-tr' });
defineProps<{ cells: string[]; widths?: number[]; handle?: boolean; icon?: boolean }>();
</script>

<template>
  <div :class="{ handle }" class="h-6 flex space-x-px">
    <span
      v-for="(cell, index) in cells"
      :key="index"
      :style="{ width: widths && widths[index] ? `${widths[index]}px` : 'auto' }"
      :class="{ 'flex-1': (!widths || !widths[index]) && !index, 'justify-end': index }"
      class="flex items-center px-4"
    >
      <i v-if="!index && icon" class="icon mr-2"></i>
      <span>{{ cell }}</span>
    </span>
  </div>
</template>
