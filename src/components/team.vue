<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Actor } from '@/interface';
import QBar from '@/components/bar.vue';

defineOptions({ name: 'q-team' });

const team = ref<Actor[]>();
const gold = ref<number>();

onMounted(async () => {
  team.value = await (await fetch('/api/team')).json();
  gold.value = (await (await fetch('/api/gold')).json()).gold;
});

const imgSrc = (name: string) => new URL(`../assets/${name}`, import.meta.url).pathname;
</script>

<template>
  <div class="backdrop h-full flex-1 ml-20 flex flex-col border-l border-white/30">
    <div class="h-12 px-4 flex justify-end items-center">
      <span>{{ gold }}</span>
      <span class="icon ml-2"></span>
    </div>

    <div v-for="(actor, index) in team" :key="index" class="handle px-4 py-2">
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
          <q-bar :current="actor.human.hp" :max="actor.human.mhp" label="HP" color="bg-green-700" />
          <div class="flex">
            <img :src="imgSrc(`v${index + 1}.png`)" class="mr-2" />
            <q-bar :current="actor.vehicle.sp" :max="actor.vehicle.msp" label="SP" color="bg-sky-700" class="flex-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
