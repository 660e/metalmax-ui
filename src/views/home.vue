<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'app-home' });

const routes = [
  { label: '地图菜单', value: 'menu' },
  { label: '装备店', value: 'equipment' }
];
const bg = ref('mm');
const grid = ref(false);
</script>

<template>
  <div class="h-screen bg-slate-700 text-base leading-none flex">
    <div class="text-white p-8 flex flex-col space-y-4 select-none">
      <div v-for="route in routes" :key="route.value">{{ route.label }}</div>
      <div class="flex-1"></div>
      <div :class="{ 'text-blue-500': bg === 'mm' }" @click="bg = 'mm'" class="cursor-pointer">传统</div>
      <div :class="{ 'text-blue-500': bg === 'mmr' }" @click="bg = 'mmr'" class="cursor-pointer">现代</div>
      <div :class="{ 'text-blue-500': grid }" @click="grid = !grid" class="cursor-pointer">网格</div>
    </div>

    <div class="flex-1 flex justify-center items-center">
      <div class="relative">
        <img :src="`/bg-${bg}.png`" />
        <div class="absolute inset-0" style="font-family: mm"></div>
        <div v-if="grid" class="absolute inset-0 text-xs leading-none grid grid-cols-23">
          <div v-for="n in 299" :key="n" :class="[n % 2 ? 'bg-black/20' : 'bg-white/20']" class="w-12 h-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>
