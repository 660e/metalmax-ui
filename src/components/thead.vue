<script setup lang="ts">
defineOptions({ name: 'q-thead' });
defineProps<{ data?: [string[], number[]] }>();
</script>

<template>
  <div class="h-6 py-1">
    <div v-if="data?.length" class="h-full space-x-px flex">
      <span
        v-for="(text, index) in data[0]"
        :key="index"
        :style="{ width: data[1][index] ? `${data[1][index]}px` : 'auto' }"
        :class="{ 'flex-1': data[1][index] === 0, 'justify-end': index }"
        class="bg-neutral-900/40 text-gray-400 text-xs leading-none flex items-center px-4"
      >
        <span>{{ text }}</span>
      </span>
    </div>
  </div>
</template>
