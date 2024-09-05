<script setup>
import { ref } from 'vue';

const active = ref();
const directives = [
  { label: '乘降', value: 'in-out' },
  { label: '金属探测器', value: 'metal-detector' },
  { label: '热探测器', value: 'thermal-detector' }
];
</script>

<template>
  <div v-if="!active" class="absolute top-1/2 left-1/2 space-y-1 ml-8">
    <div v-for="(directive, index) in directives" :key="directive.value" :style="{ marginLeft: `${index * 8}px` }" @click="active = directive.value" class="w-40">
      <div class="h-px bg-gradient-to-r from-white/0 via-white/50"></div>
      <q-tr :data="[directive.label]" class="backdrop-blur-sm via-neutral-900/70" hover />
      <div class="h-px bg-gradient-to-r from-white/0 via-white/50"></div>
    </div>
  </div>

  <div @click="active = ''" class="absolute right-2 bottom-2 w-40 h-40 flex justify-center items-center bg-neutral-900/70">{{ active }}</div>
</template>
