<script setup lang="ts">
defineOptions({ name: 'q-thead' });
defineProps<{ labels: string[]; widths: number[] }>();
</script>

<template>
  <div class="h-6 py-1">
    <div class="h-full space-x-px flex">
      <span
        v-for="(label, index) in labels"
        :key="index"
        :style="{ width: widths[index] ? `${widths[index]}px` : 'auto' }"
        :class="{ 'flex-1': widths[index] === 0, 'justify-end': index }"
        class="bg-neutral-900/40 text-gray-400 text-xs leading-none flex items-center px-4"
      >
        {{ label }}
      </span>
    </div>
  </div>
</template>
