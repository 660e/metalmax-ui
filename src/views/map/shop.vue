<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Mock from 'mockjs';

defineOptions({ name: 'app-shop' });

const active = ref();
const menus = [
  { label: '买', value: 'buy' },
  { label: '卖', value: 'sell' },
  { label: '离开商店', value: 'exit' }
];

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="['buy', 'sell'].includes(active)" class="absolute top-0 left-40 h-full pb-12 flex">
        <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
          <div v-for="item in 4" :key="item" class="w-9 h-9 bg-red-500"></div>
        </div>
        <div class="panel-1 w-[600px] border-r border-white/30 pt-12 flex flex-col">
          <q-tr />
          <q-tr :icon="false" :data="['全部商品', '0']" />
          <q-thead :data="['名称,贩卖价格', '0,100']" />
          <q-tr v-for="n in 10" :key="n" :data="[`${Mock.Random.cword(2, 10)},${Mock.Random.integer(1, 1000000)}G`, '0,100']" hover />
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
      </div>
    </transition>
    <transition name="slide-right">
      <div v-if="active" class="absolute top-0 right-0 h-full pb-12">
        <q-team class="h-full" />
      </div>
    </transition>
  </q-layout>
</template>
