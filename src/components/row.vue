<script setup>
defineOptions({ name: 'q-row' });

const { cells } = defineProps({ cells: Array, hover: Boolean });
const cellClass = index => {
  if (cells?.length === 2 && index) {
    return 'flex-1 justify-end';
  } else if (cells?.length > 2) {
    return index ? 'w-[100px] ml-px justify-end' : 'flex-1';
  } else {
    return '';
  }
};
</script>

<template>
  <div :class="{ 'bg-gradient-to-r from-white/0': hover }" class="h-6 flex items-center hover:to-white/30">
    <template v-if="cells?.length">
      <div v-for="(cell, index) in cells" :key="index" :class="cellClass(index)" class="px-4 flex items-center">
        <q-icon v-if="!index" class="mr-2" />
        <span>{{ cell }}</span>
      </div>
    </template>
    <div v-else class="flex items-center">
      <slot />
    </div>
  </div>
</template>
