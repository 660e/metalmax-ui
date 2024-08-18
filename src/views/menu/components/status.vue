<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'menu-status' });
</script>

<template>
  <div class="absolute inset-0 pl-40 pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
      <div v-for="item in 3" :key="item" class="w-9 h-9 bg-red-500"></div>
    </div>
    <div class="panel-1 w-[600px] border-r border-white/30 pt-12 flex flex-col">
      <q-tr />
      <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
      <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
      <div class="flex">
        <div class="flex-1"></div>
        <b class="vr"></b>
        <div class="flex-1">
          <q-tr :data="[`当前等级,${Mock.Random.integer(1, 255)}`, '0,0']" />
          <q-tr :data="[`总经验值,${Mock.Random.integer(1, 100000000)}`, '0,0']" />
          <q-tr :data="[`升级还需,${Mock.Random.integer(1, 10000)}`, '0,0']" />
        </div>
      </div>
      <q-thead :data="['能力', '0']" />
      <div class="flex">
        <div class="flex-1">
          <q-tr :data="[`驾驶等级,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`修理等级,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`战斗等级,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`命中率,${Mock.Random.integer(0, 100)}%`, '0,0']" />
          <q-tr :data="[`闪避率,${Mock.Random.integer(0, 100)}%`, '0,0']" />
        </div>
        <b class="vr"></b>
        <div class="flex-1">
          <q-tr :data="[`腕力,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`体力,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`速度,${Mock.Random.integer(0, 255)}`, '0,0']" />
        </div>
      </div>
      <q-thead :data="['技能', '0']" />
      <q-tr v-for="n in 5" :key="n" :data="[Mock.Random.cword(2, 10), '0']" hover />
    </div>
  </div>
</template>
