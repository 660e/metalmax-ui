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
  <div :class="{ 'backdrop-blur-sm': active }" class="h-full flex justify-center items-center">
    <div v-if="!active" class="absolute top-1/2 left-1/2 ml-8 space-y-0.5">
      <div v-for="directive in directives" :key="directive.value" @click="active = directive.value" class="w-32 p-0.5 flex items-center border border-neutral-500 bg-neutral-900/80">
        <q-icon class="mr-2" />
        <span>{{ directive.label }}</span>
      </div>
    </div>

    <div v-if="active === 'metal-detector'" class="flex space-x-4">
      <div class="w-80 py-4 border border-neutral-500 bg-neutral-900/50">
        <div class="text-center pb-1">木箱</div>
        <q-th :data="['名称', '数量/重量']" />
        <q-tr :data="['220mm大地女神炮', '10.00t']" hover />
        <q-tr :data="['雷暴机关枪', '10.00t']" hover />
      </div>
      <div class="p-1 space-y-1 border border-neutral-500 bg-neutral-900/50">
        <q-icon v-for="n in 5" :key="n" size="large" />
      </div>
    </div>

    <div @click="active = ''" class="absolute right-2 bottom-2 w-40 h-40 flex justify-center items-center bg-neutral-900/80">{{ active }}</div>
  </div>
</template>
