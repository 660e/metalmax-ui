<script setup>
import { ref } from 'vue';

const active = ref();
const directives = [
  { label: '乘降', value: 'in-out' },
  { label: '导航', value: 'navigation' },
  { label: '金属探测器', value: 'metal-detector' },
  { label: '热探测器', value: 'thermal-detector' }
];
</script>

<template>
  <div v-if="!active" class="absolute top-1/2 left-1/2 ml-8 w-40 backdrop-blur-sm bg-neutral-900/40">
    <template v-for="(directive, index) in directives" :key="directive.value">
      <div v-if="index" class="h-px bg-gradient-to-r from-white/0 via-white/50"></div>
      <q-tr :data="[directive.label]" @click="active = directive.value" hover />
    </template>
  </div>

  <div @click="active = ''" class="absolute right-2 bottom-2 w-40 h-40 flex justify-center items-center bg-neutral-900/70">{{ active }}</div>
</template>
