<script setup lang="ts">
defineOptions({ name: 'bar-component' });
defineProps<{ label: string; current: number; max: number; color: string }>();
</script>

<template>
  <div>
    <div class="flex items-end space-x-1">
      <span class="text-xs leading-none text-gray-400">{{ label }}</span>
      <span class="flex-1"></span>
      <span class="text-lg leading-none">{{ current }}</span>
      <span class="text-gray-300">/</span>
      <span class="text-gray-300">{{ max }}</span>
    </div>
    <div class="flex items-center h-4 -mt-0.5">
      <span class="w-px h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0"></span>
      <span class="flex-1 h-2 border-y border-black/30 flex">
        <b :style="{ width: `${(current / max) * 100}%` }" :class="[color]"></b>
      </span>
      <span class="w-px h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0"></span>
    </div>
  </div>
</template>
