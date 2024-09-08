<script setup>
import { computed } from 'vue';

defineOptions({ name: 'q-panel' });

const { size } = defineProps({ size: Number, icons: Array, lb: Boolean, rb: Boolean });
const panelClass = computed(() => {
  switch (size) {
    case 41:
      return 'left-[159px] w-[41px]';
    case 240:
      return 'left-[864px] w-[240px]';
    case 300:
      return 'left-[804px] w-[300px]';
    case 600:
      return 'left-[200px] w-[600px]';
    case 904:
      return 'left-[200px] w-[904px]';
    default:
      return 'left-0 w-full';
  }
});
</script>

<template>
  <div :class="[panelClass, lb ? 'border-l' : '', rb ? 'border-r' : '']" class="absolute top-0 bottom-12 border-neutral-500">
    <div v-if="size === 41" class="h-full pt-[98px] flex flex-col items-center space-y-1 bg-neutral-900/70">
      <q-icon v-for="icon in icons" :key="icon" size="large" />
    </div>
    <div v-else class="h-full flex flex-col pt-16 pb-2 bg-neutral-900/40">
      <slot />
    </div>
  </div>
</template>
