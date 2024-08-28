<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '询问情报', value: 1 },
  { label: '领取赏金', value: 2 },
  { label: '委托任务', value: 3 },
  { label: '离开', value: 'exit' }
];

onMounted(() => (active.value = 1));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 1" class="h-full">
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">通缉令</q-row>
          <q-head :cells="['名字', '赏金']" />
          <q-row :cells="['沙门菌猿一家', 1000]" hover />
          <q-row :cells="['神风鬼王', 22000]" hover />
          <q-row :cells="['隆美尔游魂战车', 160000]" hover />
          <q-row :cells="['帕鲁·巴迪斯', 200000]" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['详细情报']" />
        </q-panel>
        <q-panel v-if="active" :size="300" left></q-panel>
      </div>

      <div v-else-if="active === 2" class="h-full">
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">领取赏金</q-row>
          <q-head :cells="['信物', '赏金']" />
          <q-row :cells="['猴子的指甲泥', 1000]" hover />
          <q-row :cells="['和平之头带', 22000]" hover />
          <q-row :cells="['诺亚系统No.R', 160000]" hover />
          <q-row :cells="['战斗钉鞋', 200000]" hover />
        </q-panel>
      </div>

      <div v-else-if="active === 3" class="h-full">
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">委托任务</q-row>
          <q-head :cells="['名称']" />
          <q-row :cells="['任务001']" hover />
          <q-row :cells="['任务002']" hover />
          <q-row :cells="['任务003']" hover />
          <q-row :cells="['任务004']" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['详细信息']" />
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="['menu', 2, 'exit'].includes(active)" :size="240" left>
        <q-team />
      </q-panel>
    </transition>
  </q-layout>
</template>
