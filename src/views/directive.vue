<script setup>
import { ref } from 'vue';

const active = ref(0);
const data = [
  { label: '导航', value: 1 },
  {
    label: '乘降',
    value: 2,
    children: [
      { label: '全员上车', value: 21 },
      { label: '全员下车', value: 22 },
      { label: '猎人', value: 23, side: 'Merkava', icon: 'icon' },
      { label: '机械师', value: 24, side: 'Leopard', icon: 'icon' },
      { label: '士兵', value: 25, side: 'Abrams', icon: 'icon' },
      { label: '-', value: 26, side: 'Type', icon: 'icon' },
    ],
  },
  { label: '金属探测器', value: 3 },
  { label: '热探测器', value: 4 },
];
</script>

<template>
  <q-list v-if="active !== 3" :data="data" @active="(value) => (active = value)" class="top-1/2 left-1/2 ml-8" />

  <div v-if="active === 3" :class="{ 'backdrop-blur-sm': active }" @click="active = 0" class="h-full flex justify-center items-center">
    <div class="flex space-x-4">
      <div class="w-72 flex flex-col pb-1 border border-neutral-500 bg-neutral-900/50">
        <div class="flex-1"></div>
        <div class="text-center">木箱</div>
        <q-th :data="['名称', '数量/重量']" />
        <q-tr :data="['220mm大地女神炮', '10.00t']" hover />
        <q-tr :data="['雷暴机关枪', '10.00t']" hover />
        <div class="h-6"></div>
        <div class="h-6"></div>
      </div>
      <div class="w-72 p-1 space-y-1 border border-neutral-500 bg-neutral-900/50">
        <div v-for="n in 4" :key="n" class="flex items-center space-x-2 duration-200 hover:bg-white/30">
          <q-icon size="large" />
          <div class="flex-1">10/16</div>
          <div class="pr-1">(-100.00t)255.00t 剩余</div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="active === 0" class="absolute right-2 bottom-2 w-40 h-40 flex justify-center items-center bg-neutral-900/80"></div>
</template>
