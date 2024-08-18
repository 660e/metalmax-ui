<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'menu-garage' });
</script>

<template>
  <div class="absolute inset-0 pl-40 pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
      <div v-for="item in 8" :key="item" class="w-9 h-9 bg-red-500"></div>
    </div>
    <div class="panel-1 flex-1 pt-12">
      <q-tr />
      <div class="flex">
        <div class="w-60">
          <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
          <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
          <q-tr />
          <q-tr />
          <q-tr />
          <q-tr />
          <q-tr :data="['底盘特性,会心一击', '0,0']" />
          <q-tr :data="['底盘抗性,火焰', '0,0']" />
          <q-tr :data="[`最大载重,${Mock.Random.integer(100, 200)}.00t`, '0,0']" />
          <q-tr :data="[`特殊弹仓,${Mock.Random.integer(10, 99)}/99`, '0,0']" />
        </div>
        <b class="vr"></b>
        <div class="w-60">
          <q-thead :data="['名称,持有数', '0,100']" />
          <q-tr v-for="n in 5" :key="n" :data="[`${Mock.Random.cword(2, 5)},${Mock.Random.integer(10, 20)}`, '0,100']" />
        </div>
        <b class="vr"></b>
        <div class="flex-1">
          <q-thead :data="['货仓', '0']" />
          <div class="grid grid-cols-2 grid-rows-9 grid-flow-col">
            <q-tr v-for="n in 12" :key="n" :data="[Mock.Random.cword(4, 9), '0']" />
          </div>
        </div>
      </div>
      <q-thead :data="['名称,攻击力,守备力,范围,属性,命中率,会心率,重量', '0,100,100,100,100,100,100,100']" />
      <q-tr
        v-for="n in 3"
        :key="n"
        :data="[
          `${Mock.Random.cword(4, 9)},${Mock.Random.integer(50, 2000)},${Mock.Random.integer(0, 255)},4连射,通常,${Mock.Random.integer(0, 30)}%,${Mock.Random.integer(0, 30)}%,${Mock.Random.integer(1, 99)}.00t`,
          '0,100,100,100,100,100,100,100'
        ]"
      />
      <q-tr />
      <q-tr />
      <q-thead :data="['名称,守备力,芯片,芯片,芯片,重量', '0,100,100,100,100,100']" />
      <q-tr
        :data="[
          `${Mock.Random.cword(4, 9)},${Mock.Random.integer(0, 255)},主炮连射,主炮齐射,迎击能力,${Mock.Random.integer(1, 99)}.00t`,
          '0,100,100,100,100,100'
        ]"
      />
      <q-thead :data="['名称,守备力,载重量,重量', '0,100,100,100']" />
      <q-tr
        v-for="n in 2"
        :key="n"
        :data="[
          `${Mock.Random.cword(4, 9)},${Mock.Random.integer(0, 255)},${Mock.Random.integer(1, 99)}.00t,${Mock.Random.integer(1, 99)}.00t`,
          '0,100,100,100,100,100'
        ]"
      />
    </div>
  </div>
</template>
