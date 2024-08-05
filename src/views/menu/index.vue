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
  { label: '状态', value: 'status' },
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
          <div class="flex justify-between py-1">
            <div>{{ actor.human.name }}</div>
            <div>Lv.{{ actor.human.lv }}</div>
          </div>
          <div class="h-0.5 bg-gradient-to-r from-white/30 relative">
            <div :style="{ width: `${(actor.human.exp / actor.human.mexp) * 100}%` }" class="absolute top-0 left-0 h-0.5 bg-teal-300"></div>
          </div>
          <div class="flex">
            <div class="bg-red-500/50 w-8 h-8"></div>
            <div class="flex-1">
              <div class="flex justify-between">
                <span>HP</span>
                <span>{{ actor.human.hp }}/{{ actor.human.mhp }}</span>
              </div>
              <div>
                <b></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>
