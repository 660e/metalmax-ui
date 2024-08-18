<script setup lang="ts">
defineOptions({ name: 'q-thead' });

const props = defineProps<{ data?: [string, string] }>();
const texts = props.data ? props.data[0].split(',') : [];
const widths = props.data ? props.data[1].split(',') : [];
</script>

<template>
  <div class="h-6 py-1">
    <div v-if="data?.length" class="h-full space-x-px flex">
      <span
        v-for="(text, index) in texts"
        :key="index"
        :style="{ width: `${widths[index]}px` }"
        :class="{ 'flex-1': widths[index] === '0', 'justify-end': index }"
        class="bg-neutral-900/40 text-gray-400 text-xs leading-none flex items-center px-4"
      >
        <span>{{ text }}</span>
      </span>
    </div>
  </div>
</template>
