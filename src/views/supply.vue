<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '补给', value: 1 },
  { label: '离开商店', value: 'exit' }
];

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 1" class="h-full">
        <q-panel :size="40" :icons="Array(5)" left />
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">补给车辆</q-row>
          <q-head :cells="['部位', '详情', '单价']" />
          <q-row :cells="['全部补给']" hover />
          <q-row :cells="['梅卡瓦', '12345/99999', '0.1/片']" hover />
          <q-row :cells="['220mm大地女神炮', '16/99', '20/枚']" hover />
          <q-row :cells="['烈日中子炮', '5/16', '500/枚']" hover />
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="active" :size="240" left>
        <q-team />
      </q-panel>
    </transition>
  </q-layout>
</template>
