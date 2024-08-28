<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '修理', value: 1 },
  { label: '拖车救援', value: 2 },
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
          <q-row class="pl-4">修理车辆</q-row>
          <q-head :cells="['部位', '详情', '价格']" />
          <q-row :cells="['全部修理']" hover />
          <q-row :cells="['红狼', '破损', 2000]" hover />
          <q-row :cells="['220mm大地女神炮', '破损', 1000]" hover />
          <q-row :cells="['烈日中子炮', '大破', 5000]" hover />
        </q-panel>
      </div>

      <div v-else-if="active === 2" class="h-full">
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">选择</q-row>
          <q-head :cells="['名称']" />
          <q-row :cells="['战车1']" hover />
          <q-row :cells="['战车1']" hover />
          <q-row :cells="['战车1']" hover />
          <q-row :cells="['战车1']" hover />
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
