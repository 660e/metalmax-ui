<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '询问情报', value: 1 },
  { label: '领取赏金', value: 2 },
  { label: '委托任务', value: 3 },
  { label: '离开', value: 0 }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="猎人办事处">
    <template v-if="active === 1">
      <q-panel :size="600" lb rb>
        <q-tr class="pl-4">情报</q-tr>
        <q-th :data="['通缉犯', '赏金']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 13]" />
          <q-tr :data="['沙门菌猿一家', 1000]" hover />
          <q-tr :data="['神风鬼王', 22000]" hover />
          <q-tr :data="['隆美尔游魂战车', 160000]" hover />
          <q-tr :data="['帕鲁·巴迪斯', 200000]" hover />
        </div>
        <q-th :data="['说明']" />
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
      </q-panel>
    </template>

    <template v-if="active === 2">
      <q-panel :size="600" lb rb>
        <q-tr class="pl-4">领取赏金</q-tr>
        <q-th :data="['信物', '赏金']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 19]" />
          <q-tr :data="['猴子的指甲泥', 1000]" hover />
          <q-tr :data="['和平之头带', 22000]" hover />
          <q-tr :data="['诺亚系统No.R', 160000]" hover />
          <q-tr :data="['战斗钉鞋', 200000]" hover />
        </div>
      </q-panel>
    </template>

    <template v-if="active === 3">
      <q-panel :size="600" lb rb>
        <q-tr class="pl-4">委托任务</q-tr>
        <q-th :data="['名称']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 13]" />
          <q-tr :data="['任务名称-001']" hover />
          <q-tr :data="['任务名称-002']" hover />
          <q-tr :data="['任务名称-003']" hover />
          <q-tr :data="['任务名称-004']" hover />
        </div>
        <q-th :data="['说明']" />
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
        <div class="h-6"></div>
      </q-panel>
    </template>
  </q-layout>
</template>
