<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Actor } from '@/interface';
import AppLayout from '@/components/layout.vue';
import BarComponent from '@/components/bar.vue';

defineOptions({ name: 'app-menu' });

const imgSrc = (name: string) => {
  return new URL(`../../assets/${name}`, import.meta.url).pathname;
};

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
      <div class="backdrop h-full">
        <div v-for="(actor, index) in team" :key="index" class="active px-4">
          <div class="flex justify-between py-1">
            <div>{{ actor.human.name }}</div>
            <div>Lv.{{ actor.human.lv }}</div>
          </div>
          <div class="h-0.5 bg-gradient-to-r from-white/30 to-white/0 flex">
            <div :style="{ width: `${(actor.human.exp / actor.human.mexp) * 50 + 25}%` }" class="h-0.5 bg-teal-300"></div>
          </div>
          <div class="py-1 flex">
            <div class="bg-red-500/0">
              <img :src="imgSrc(`h${index + 1}.png`)" />
            </div>
            <div class="flex-1">
              <bar-component :current="actor.human.hp" :max="actor.human.mhp" label="HP" color="bg-green-700" />
              <div class="flex">
                <div class="w-8 bg-red-500/50 mr-2"></div>
                <bar-component :current="actor.vehicle.sp" :max="actor.vehicle.msp" label="SP" color="bg-sky-700" class="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>
