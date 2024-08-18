<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'menu-items' });
</script>

<template>
  <div class="absolute inset-0 pl-40 pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
      <div v-for="item in 7" :key="item" class="w-9 h-9 bg-red-500"></div>
    </div>
    <div class="panel-1 w-[600px] border-r border-white/30 pt-12 flex flex-col">
      <q-tr />
      <q-tr :icon="false" :data="['道具', '0']" />
      <q-thead :data="['名称,持有数', '0,100']" />
      <q-tr v-for="n in 10" :key="n" :data="[`${Mock.Random.cword(2, 10)},${Mock.Random.integer(1, 99)}`, '0,100']" hover />
      <div class="flex-1"></div>
      <q-thead :data="['说明', '0']" />
      <div class="flex">
        <div class="flex-1">
          <q-tr :data="[`攻击力,${Mock.Random.integer(50, 2000)}`, '0,0']" />
          <q-tr :data="[`守备力,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`命中率,${Mock.Random.integer(0, 30)}%`, '0,0']" />
          <q-tr :data="[`会心率,${Mock.Random.integer(0, 30)}%`, '0,0']" />
          <q-tr :data="[`重量,${Mock.Random.integer(1, 99)}.00t`, '0,0']" />
        </div>
        <b class="vr"></b>
        <div class="flex-1">
          <q-tr :data="['类型,加农炮', '0,0']" />
          <q-tr :data="['范围,4连射', '0,0']" />
          <q-tr :data="['属性,通常', '0,0']" />
          <q-tr :data="['状态,正常', '0,0']" />
          <q-tr :data="[`弹仓,${Mock.Random.integer(0, 99)}/99`, '0,0']" />
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
    <q-team />
  </div>
</template>
