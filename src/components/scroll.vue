<script setup>
import { computed } from 'vue';

defineOptions({ name: 'q-scroll' });

const { range } = defineProps({ range: Array });
const scrollStyle = computed(() => {
  return {
    top: `${range[0] * 24 + 64}px`,
    height: `${(range[1] - range[0]) * 24}px`
  };
});
</script>

<template>
  <div :style="scrollStyle" class="absolute right-1 w-0.5 flex flex-col bg-neutral-900/20">
    <b class="h-1/2 bg-neutral-500"></b>
  </div>
</template>
