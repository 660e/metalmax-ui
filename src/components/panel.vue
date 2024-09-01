<script setup>
import { computed } from 'vue';

defineOptions({ name: 'q-panel' });

const { size, vs } = defineProps({ size: Number, icons: Array, vs: Array, lb: Boolean, rb: Boolean });
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
      return '';
  }
});
const scrollStyle = computed(() => {
  return {
    top: `${vs[0] * 24 + 64}px`,
    height: `${(vs[1] - vs[0]) * 24}px`
  };
});
</script>

<template>
  <div :class="[panelClass, lb ? 'border-l' : '', rb ? 'border-r' : '']" class="absolute top-0 bottom-12 border-neutral-500">
    <div v-if="size === 41" class="h-full pt-24 flex flex-col items-center space-y-1 backdrop-blur-sm bg-neutral-900/70">
      <q-icon v-for="icon in icons" :key="icon" size="large" />
    </div>
    <div v-else :class="{ relative: vs?.length }" class="h-full flex flex-col pt-16 pb-2 backdrop-blur-sm bg-neutral-900/40">
      <div v-if="vs?.length" :style="scrollStyle" class="absolute right-1 w-1 rounded-sm flex flex-col bg-neutral-900/20">
        <b class="h-1/2 rounded-sm bg-neutral-500"></b>
      </div>
      <slot />
    </div>
  </div>
</template>
