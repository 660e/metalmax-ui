<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppLayout from '@/components/layout.vue';

defineOptions({ name: 'app-menu' });

interface Actor {
  id: string;
  human: {
    name: string;
    hp: number;
    mhp: number;
  };
  vehicle: {
    name: string;
    sp: number;
    msp: number;
  };
}

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
          <div>{{ actor.human?.name }}</div>
        </div>
      </div>
    </template>
  </app-layout>
</template>
