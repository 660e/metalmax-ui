<script setup lang="ts">
import { ref } from 'vue';
import Mock from 'mockjs';

defineOptions({ name: 'menu-map' });

const active = ref('map');
</script>

<template>
  <div class="absolute inset-0 pl-40 pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
      <div @click="active = 'map'" class="w-9 h-9 bg-red-500"></div>
      <div @click="active = 'quests'" class="w-9 h-9 bg-red-500"></div>
    </div>
    <template v-if="active === 'map'">
      <div class="panel-1 w-[600px] border-r border-white/30 flex flex-col pt-14 px-2 pb-2">
        <div class="flex-1 bg-neutral-900"></div>
      </div>
      <div class="flex-1"></div>
      <div class="panel-1 w-[300px] border-l border-white/30">
        <q-tr />
        <q-tr />
        <q-tr />
        <q-tr :icon="false" :data="['犬系统', '0']" />
        <q-thead :data="['地点', '0']" />
        <div class="grid grid-cols-2">
          <q-tr v-for="n in 10" :key="n" :data="[Mock.Random.cword(2, 7), '0']" :icon="false" hover />
        </div>
      </div>
    </template>
    <template v-if="active === 'quests'">
      <div class="panel-1 w-[300px] border-r border-white/30">
        <q-tr />
        <q-tr />
        <q-tr />
        <q-tr :icon="false" :data="['冒险指南', '0']" />
        <q-thead :data="['名称,进度', '0,100']" />
        <q-tr v-for="n in 10" :key="n" :data="[`${Mock.Random.cword(4, 10)},完成`, '0,100']" :icon="false" hover />
      </div>
      <div class="flex-1"></div>
      <div class="panel-1 w-[600px] border-l border-white/30">
        <q-tr />
        <q-tr />
        <q-tr />
        <q-tr :icon="false" :data="[Mock.Random.cword(4, 10), '0']" />
        <q-thead :data="['任务,地点', '0,150']" />
        <q-tr v-for="n in 10" :key="n" :data="[`${Mock.Random.cword(4, 10)},${Mock.Random.cword(2, 7)}`, '0,150']" hover />
        <q-thead :data="['详情', '0']" />
      </div>
    </template>
  </div>
</template>
