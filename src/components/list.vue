<script setup>
import { ref } from 'vue';

defineOptions({ name: 'q-list' });
defineProps({ data: Array });

const active = ref();
</script>

<template>
  <div class="absolute z-10 top-0 left-0">
    <div v-for="(item, index) in data" :key="index" @click="active = active ? null : item.value" class="w-32">
      <div v-if="index" class="h-px bg-neutral-500"></div>
      <div :class="{ 'opacity-50': active }" class="h-6 pl-4 flex items-center backdrop-blur-sm duration-200 bg-neutral-900/70 hover:pl-2">{{ item.label }}</div>
      <div v-if="active === item.value && item.children?.length" class="absolute z-20 top-2 left-2">
        <div v-for="(e, i) in item.children" :key="i" class="w-64">
          <div v-if="i" class="h-px bg-neutral-500"></div>
          <div class="h-6 pl-4 flex items-center backdrop-blur-sm duration-200 bg-neutral-900/70 hover:pl-2">{{ e.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
