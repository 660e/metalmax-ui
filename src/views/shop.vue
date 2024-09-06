<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '买', value: 1 },
  { label: '卖', value: 2 },
  { label: '变更装备', value: 3 },
  { label: '离开商店', value: 0 }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="装备店/道具店">
    <template v-if="[1, 2].includes(active)">
      <q-panel :size="41" :icons="Array(5)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>全部商品</q-tr>
        <q-th :data="['名称', '持有数/重量', '价格']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 13]" />
          <q-tr :data="['激光炮', 1, 100000]" hover />
          <q-tr :data="['等离子暴雨枪', 1, 100000]" hover />
          <q-tr :data="['最终风暴枪', 1, 100000]" hover />
          <q-tr :data="['雷电加农炮', '6.00t', 100000]" hover />
          <q-tr :data="['225mm多头蛇炮', '7.50t', 100000]" hover />
          <q-tr :data="['205mm红牡丹炮', '15.00t', 100000]" hover />
        </div>
        <q-th :data="['说明']" />
        <div class="flex">
          <div class="flex-1">
            <q-tr :data="['攻击', 2000]" />
            <q-tr :data="['防御', 255]" />
            <q-tr :data="['命中', 255]" />
            <q-tr :data="['会心', 255]" />
            <q-tr :data="['重量', '255.00t']" />
          </div>
          <div class="flex-1">
            <q-tr :data="['弹仓', '99/99']" />
            <q-tr :data="['射击', '4次']" />
            <q-tr :data="['范围', '1体']" />
            <q-tr :data="['属性', '通常']" />
            <q-tr :data="['状态', '正常']" />
          </div>
        </div>
      </q-panel>
      <q-number style="top: 160px; left: 799px" />
    </template>
  </q-layout>
</template>
