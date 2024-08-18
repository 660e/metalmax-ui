<script setup lang="ts">
import { onMounted, ref } from 'vue';

import MenuMap from './components/map.vue';
import MenuItems from './components/items.vue';
import MenuEquip from './components/equip.vue';
import MenuStatus from './components/status.vue';
import MenuGarage from './components/garage.vue';

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

onMounted(() => (active.value = 'map'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <menu-map v-if="active === 'map'" />
      <menu-items v-else-if="active === 'items'" />
      <menu-equip v-else-if="active === 'equip'" />
      <menu-status v-else-if="active === 'status'" />
      <menu-garage v-else-if="active === 'garage'" />
    </transition>
  </q-layout>
</template>
