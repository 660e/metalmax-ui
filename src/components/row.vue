<script setup>
defineOptions({ name: 'q-row' });
defineProps({ cells: Array });
</script>

<template>
  <div class="h-6 flex items-center">
    <template v-if="cells?.length">
      <div v-for="(cell, index) in cells" :key="index" :class="[index ? 'w-[100px] ml-px justify-end' : 'flex-1']" class="px-4 flex items-center">
        <q-icon v-if="!index" class="mr-2" />
        <span>{{ cell }}</span>
      </div>
    </template>
    <div v-else class="px-4">
      <slot />
    </div>
  </div>
</template>
