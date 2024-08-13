<script setup lang="ts">
import { onMounted, ref } from 'vue';
import items from '@/assets/data/items.json';

defineOptions({ name: 'app-menu' });

const active = ref();
const menus = [
  { label: '地图', value: 'map' },
  { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '状态', value: 'status' },
  { label: '车库', value: 'garage' },
  { label: '选项', value: 'settings' }
];
const group = ref(1);

onMounted(() => (active.value = 'items'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 'items'" class="h-full border-r border-white/30 flex">
        <div class="backdrop-deep border-x border-white/30 pt-24 px-2 space-y-2">
          <div @click="group = 1" class="w-6 h-6 bg-red-500"></div>
          <div class="w-6 h-6 bg-red-500"></div>
          <div class="w-6 h-6 bg-red-500"></div>
          <div class="w-6 h-6 bg-red-500"></div>
        </div>
        <div class="backdrop-shallow flex-1 pt-12">
          <div class="h-6"></div>
          <div class="h-6 pl-4 flex items-center">道具</div>
          <q-thead :labels="['名称', '持有数']" :widths="[0, 100]" />
          <div v-for="item in items.filter(item => item.type === group)" :key="item.name">
            <span>{{ item.name }}</span>
            <span>1</span>
          </div>
        </div>
      </div>
    </transition>

    <template #aside>
      <transition name="slide-right">
        <q-team v-if="['menu', 'items'].includes(active)" />
      </transition>
    </template>
  </q-layout>
</template>
