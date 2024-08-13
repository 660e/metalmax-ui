<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
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
const group = ref([1]);
const groupName = computed(() => {
  if (group.value[0] === 1) {
    return '道具';
  } else if (group.value[0] === 2) {
    return '贵重道具';
  } else if (group.value[0] > 10 && group.value[0] < 20) {
    return '装备';
  } else {
    return '-';
  }
});

onMounted(() => (active.value = 'items'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 'items'" class="h-full border-r border-white/30 flex">
        <div class="backdrop-deep border-x border-white/30 pt-24 px-1 space-y-1 flex flex-col">
          <div @click="group = [1]" class="w-8 h-8 bg-red-500"></div>
          <div @click="group = [2]" class="w-8 h-8 bg-red-500"></div>
          <div @click="group = [11]" class="w-8 h-8 bg-red-500"></div>
          <img src="@/assets/images/v1.png" />
          <img src="@/assets/images/v2.png" />
          <img src="@/assets/images/v3.png" />
          <img src="@/assets/images/v4.png" />
        </div>
        <div class="backdrop-shallow flex-1 pt-12">
          <div class="h-6"></div>
          <div class="h-6 pl-4 flex items-center">{{ groupName }}</div>
          <q-thead :labels="['名称', '持有数']" :widths="[0, 100]" />
          <q-tr v-for="item in items.filter(item => group.includes(item.type))" :key="item.name" :cells="[item.name, 1]" :widths="[0, 100]" />
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
