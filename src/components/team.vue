<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import type { Actor } from '@/interface';
import humans from '@/assets/data/humans.json';
import vehicles from '@/assets/data/vehicles.json';

defineOptions({ name: 'q-team' });

const team = reactive<{ gold: number; actors: Actor[] }>({
  gold: 7533422160220760,
  actors: [{}, {}, {}, {}] as Actor[]
});

onMounted(() => {
  team.actors.forEach((actor, index) => {
    actor.human = humans[index];
    actor.vehicle = vehicles[index];
  });
});

const imgSrc = (name: string) => new URL(`../assets/images/${name}`, import.meta.url).pathname;
</script>

<template>
  <div class="backdrop-shallow h-full flex-1 ml-20 flex flex-col border-l border-white/30">
    <div class="h-12 px-4 flex justify-end items-center">
      <span>{{ team.gold }}</span>
      <span class="icon ml-2"></span>
    </div>

    <div v-for="(actor, index) in team.actors" :key="index" class="handle px-4 py-2">
      <div class="flex justify-between py-1">
        <div>{{ actor.human?.name }}</div>
        <div>Lv.{{ actor.human?.lv }}</div>
      </div>
      <div class="h-0.5 bg-gradient-to-r from-white/30 to-white/0 flex">
        <div :style="{ width: `${(actor.human?.exp / actor.human?.mexp) * 50 + 25}%` }" class="h-0.5 bg-teal-300"></div>
      </div>
      <div class="py-1 flex">
        <div class="bg-red-500/0">
          <img :src="imgSrc(`h${index + 1}.png`)" />
        </div>
        <div class="flex-1">
          <q-bar :current="actor.human?.hp" :max="actor.human?.mhp" label="HP" color="bg-green-700" />
          <div class="flex">
            <img :src="imgSrc(`v${index + 1}.png`)" class="mr-2" />
            <q-bar :current="actor.vehicle?.sp" :max="actor.vehicle?.msp" label="SP" color="bg-sky-700" class="flex-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
