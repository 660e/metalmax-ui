<script setup lang="ts">
import { onMounted, ref } from 'vue';

import MenuItems from './views/items.vue';
// import MenuEquip from './views/equip.vue';
// import MenuStatus from './views/status.vue';
// import MenuGarage from './views/garage.vue';

// import TrunkComponent from './components/trunk.vue';

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

onMounted(() => (active.value = 'items'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <menu-items v-if="active === 'items'" />
    </transition>

    <transition name="slide-right">
      <q-team v-if="['menu', 'items'].includes(active)" />
    </transition>
    <!-- <transition name="slide-right" mode="out-in">
      <div v-if="active === 'menu'"></div>
      
      <menu-equip v-else-if="active === 'equip'" />
      <menu-status v-else-if="active === 'status'" />
      <menu-garage v-else-if="active === 'garage'" />
      <div v-else></div>
    </transition>

    <template #aside>
      <transition name="slide-right" mode="out-in">
        
        <trunk-component v-else-if="['equip'].includes(active)" />
        <div v-else></div>
      </transition>
    </template> -->
  </q-layout>
</template>
