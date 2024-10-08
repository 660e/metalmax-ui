<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '补给', value: 1 },
  { label: '离开商店', value: 0 },
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="补给店">
    <template v-if="active === 1">
      <q-panel :size="41" :icons="['', 't1', 't2', 't3', 't4']" lb />
      <q-panel :size="600" lb rb>
        <q-tr>补给</q-tr>
        <q-th :data="['部位', '详情', '单价']" :width="[150, 100]" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 19]" />
          <q-tr :data="['全部补给']" hover />
          <q-tr :data="['Merkava', '12345/99999', '0.1/片']" hover />
          <q-tr :data="['220mm大地女神炮', '16/99', '20/枚']" hover />
          <q-tr :data="['S龙卷风炮', '5/16', '1000/枚']" hover />
        </div>
      </q-panel>
      <q-number style="top: 159px; left: 799px" />
    </template>
  </q-layout>
</template>
