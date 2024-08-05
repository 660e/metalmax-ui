<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Actor } from '@/interface';
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
const team = ref<Actor[]>();

onMounted(async () => {
  team.value = await (await fetch('/api/team')).json();
});
</script>

<template>
  <app-layout :menus="menus">
    <div>main</div>

    <template #aside>
      <div class="h-full bg-black/50 backdrop-blur-sm">
        <div v-for="actor in team" :key="actor.id">
          <div class="flex justify-between">
            <div>{{ actor.human.name }}</div>
            <div>Lv.{{ actor.human.lv }}</div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>
