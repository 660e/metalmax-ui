<script setup>
import { computed } from 'vue';

defineOptions({ name: 'q-panel' });

const { size } = defineProps({ size: Number, icons: Array });
const panelClass = computed(() => {
  switch (size) {
    case 40:
      return 'left-[160px] w-[40px]';
    case 240:
      return 'left-[864px] w-[240px]';
    case 300:
      return 'left-[804px] w-[300px]';
    case 600:
      return 'left-[200px] w-[600px]';
    case 904:
      return 'left-[200px] w-[904px]';
    default:
      return '';
  }
});
</script>

<template>
  <div :class="panelClass" class="absolute top-0 bottom-12">
    <div v-if="size === 40" class="backdrop-2 h-full pt-24 flex flex-col items-center space-y-1">
      <q-icon v-for="icon in icons" :key="icon" size="large" />
    </div>
    <div v-else class="backdrop-1 h-full">
      <slot />
    </div>
  </div>
</template>
