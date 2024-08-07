<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Actor } from '@/interface';
import AppLayout from '@/components/layout.vue';

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
              <div>
                <div class="flex justify-between">
                  <span>HP</span>
                  <span>{{ actor.human.hp }}/{{ actor.human.mhp }}</span>
                </div>
                <div class="flex items-center h-4">
                  <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0"></div>
                  <div class="flex-1 h-2 border-y border-black/30 flex">
                    <b :style="{ width: `${(actor.human.hp / actor.human.mhp) * 100}%` }" class="bg-green-500"></b>
                  </div>
                  <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>
