<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppLayout from '@/components/layout.vue';

defineOptions({ name: 'app-menu' });

const menus = [
  { label: '地图', value: 'map' },
  { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '强度', value: 'status' },
  { label: '车库', value: 'garage' },
  { label: '选项', value: 'settings' }
];
const team = ref();

onMounted(async () => {
  team.value = await (await fetch('/api/team')).json();
});
</script>

<template>
  <app-layout :menus="menus">
    <div>main</div>

    <template #aside>
      <div>
        <pre>{{ team }}</pre>
      </div>
    </template>
  </app-layout>
</template>
