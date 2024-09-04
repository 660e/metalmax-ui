<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '修理', value: 1 },
  { label: '拖车救援', value: 2 },
  { label: '离开商店', value: 0 }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="修理店">
    <template v-if="active === 1">
      <q-panel :size="41" :icons="Array(5)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>修理</q-tr>
        <q-th :data="['部位', '详情', '价格']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 19]" />
          <q-tr :data="['全部修理', 15000]" hover />
          <q-tr :data="['梅卡瓦', '破损', 2000]" hover />
          <q-tr :data="['220mm大地女神炮', '破损', 2000]" hover />
          <q-tr :data="['雷暴机关枪', '破损', 2000]" hover />
          <q-tr :data="['S龙卷风炮', '破损', 2000]" hover />
        </div>
      </q-panel>
    </template>

    <template v-if="active === 2">
      <q-panel :size="600" lb rb>
        <q-tr>拖车救援</q-tr>
        <q-th :data="['名称']" />
        <q-tr :data="['战车-01']" hover />
        <q-tr :data="['战车-02']" hover />
        <q-tr :data="['战车-03']" hover />
        <q-tr :data="['战车-04']" hover />
        <q-tr :data="['战车-05']" hover />
        <q-tr :data="['战车-06']" hover />
        <q-tr :data="['战车-07']" hover />
        <q-tr :data="['战车-08']" hover />
        <q-tr :data="['战车-09']" hover />
        <q-tr :data="['战车-10']" hover />
        <q-tr :data="['战车-11']" hover />
        <q-tr :data="['战车-12']" hover />
      </q-panel>
    </template>
  </q-layout>
</template>
