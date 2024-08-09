<script setup lang="ts">
import { ref } from 'vue';

import QLayout from '@/components/layout.vue';
import QTeam from '@/components/team.vue';

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
</script>

<template>
  <q-layout :menus="menus" @handle="value => (active = value)">
    <div v-if="active === 'items'" class="h-full"></div>

    <template #aside>
      <q-team v-if="[undefined, 'items'].includes(active)" />
    </template>
  </q-layout>
</template>
