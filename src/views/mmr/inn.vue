<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '住宿', value: 1 },
  { label: '离开旅馆', value: 0 },
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="旅馆" class="flex justify-center items-center">
    <div v-if="active === 1" class="w-80 p-4 flex flex-col items-center border border-neutral-500 bg-neutral-900/50">
      <div class="pb-4">文字提示信息</div>
      <div class="space-y-1">
        <div class="w-20 h-8 flex justify-center items-center bg-neutral-900/50 hover:bg-white/30">是</div>
        <div class="w-20 h-8 flex justify-center items-center bg-neutral-900/50 hover:bg-white/30">否</div>
      </div>
    </div>
  </q-layout>
</template>
