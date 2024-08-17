<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MenuItems from './components/items.vue';
// import MenuEquip from './components/equip.vue';

defineOptions({ name: 'app-menu' });

const active = ref();
const menus = [
  { label: '地图', value: 'map' },
  { label: '任务', value: 'quests' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '乘降', value: 'in-out' },
  { label: '状态', value: 'status' },
  { label: '车库', value: 'garage' },
  { label: '选项', value: 'settings' }
];

onMounted(() => (active.value = 'equip'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right" mode="out-in">
      <div v-if="active === 'menu'"></div>
      <menu-items v-else-if="active === 'items'" />
    </transition>

    <template #aside>
      <transition name="slide-right">
        <q-team v-if="['menu', 'items', 'equip'].includes(active)" />
      </transition>
    </template>
  </q-layout>
</template>
