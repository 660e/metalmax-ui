<script setup lang="ts">
defineOptions({ name: 'q-team' });

const team = [
  { human: { name: '希米欧', lv: 85, exp: 85, hp: 4958 }, tank: { name: 'Leopard', sp: 1883 } },
  { human: { name: '莫利纳', lv: 76, exp: 23, hp: 4989 }, tank: { name: 'Abrams', sp: 2321 } },
  { human: { name: '塔玛', lv: 92, exp: 94, hp: 5319 }, tank: { name: 'Type', sp: 5486 } },
  { human: { name: '波奇', lv: 81, exp: 49, hp: 6256 }, tank: { name: 'Merkava', sp: 4215 } }
];

const imgSrc = (name: string) => new URL(`../assets/${name}`, import.meta.url).pathname;
</script>

<template>
  <div class="backdrop-shallow h-full flex-1 ml-20 flex flex-col border-l border-white/30">
    <div class="h-12 px-4 flex justify-end items-center">
      <span>7533422160220760</span>
      <span class="icon ml-2"></span>
    </div>

    <div v-for="(actor, index) in team" :key="index" class="handle px-4 py-2">
      <div class="flex justify-between py-1">
        <div>{{ actor.human.name }}</div>
        <div>Lv.{{ actor.human.lv }}</div>
      </div>
      <div class="h-0.5 bg-gradient-to-r from-white/30 to-white/0 flex">
        <div :style="{ width: `${(actor.human.exp / 100) * 50 + 25}%` }" class="h-0.5 bg-teal-300"></div>
      </div>
      <div class="py-1 flex">
        <div class="bg-red-500/0">
          <img :src="imgSrc(`h${index + 1}.png`)" />
        </div>
        <div class="flex-1">
          <q-bar :current="actor.human.hp" label="HP" color="bg-green-700" />
          <div class="flex">
            <img :src="imgSrc(`t${index + 1}.png`)" class="mr-2" />
            <q-bar :current="actor.tank.sp" label="SP" color="bg-sky-700" class="flex-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
