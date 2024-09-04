<script setup>
import { ref } from 'vue';

const active = ref(2);
const menus = [
  { label: '改造底盘', value: 1 },
  { label: '改造武器', value: 2 },
  { label: '改造引擎', value: 3 },
  { label: '改造控制装置', value: 4 },
  { label: '离开商店', value: 0 }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="改造店">
    <template v-if="active === 1">
      <q-panel :size="41" :icons="Array(4)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>改造底盘</q-tr>
        <q-th :data="['穴']" />
        <q-tr :data="['穴-1：加农炮']" hover />
        <q-tr :data="['穴-2：机枪']" hover />
        <q-tr :data="['穴-3：特殊装备']" hover />
        <q-tr :data="['穴-4：特殊装备']" hover />
        <q-tr :data="['穴-5：特殊装备']" hover />
        <q-th :data="['底盘']" />
        <q-tr :data="['型号', '梅卡瓦IV']" hover />
        <q-tr :data="['防御', 255]" hover />
        <q-tr :data="['弹仓', 99]" hover />
        <q-tr :data="['货仓', 16]" hover />
        <q-th :data="['外观']" />
        <div class="flex-1"></div>
        <q-th :data="['总结']" />
        <q-tr :data="['重量', '(+100.00t)100.00t']" down />
        <q-tr :data="['费用', 200000]" />
      </q-panel>
    </template>

    <template v-if="active === 2">
      <q-panel :size="41" :icons="Array(4)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>改造武器</q-tr>
        <q-th :data="['名称', '改造度']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 12]" />
          <q-tr :data="['220mm大地女神炮', '75%']" hover />
          <q-tr :data="['220mm大地女神炮', '75%']" hover />
          <q-tr :data="['220mm大地女神炮', '75%']" hover />
          <q-tr :data="['220mm大地女神炮', '75%']" hover />
        </div>
        <q-th :data="['改造']" />
        <q-tr :data="['攻击', 2000]" hover />
        <q-tr :data="['防御', 255]" hover />
        <q-tr :data="['弹仓', 99]" hover />
        <q-th :data="['总结']" />
        <q-tr :data="['重量', '(+100.00t)100.00t']" down />
        <q-tr :data="['费用', 200000]" />
      </q-panel>
    </template>

    <!--


      <div v-else-if="active === 4" class="h-full">
        <q-panel :size="40" :icons="Array(4)" left />
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">选项</q-row>
          <q-head :cells="['名称', '改造度']" />
          <q-row :cells="['V100金刚', '90%']" />
          <q-row v-for="n in 12" :key="n" />
          <q-head :cells="['改造']" />
          <q-row :cells="['型号']" hover />
          <q-row :cells="['守备', '(+1000)1000']" hover />
          <q-head :cells="['总结']" />
          <q-row :cells="['重量', '(-99.00t)190.00t']" />
          <q-row :cells="['费用', 10000000]" />
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="active" :size="240" left>
        <q-team />
      </q-panel>
    </transition> -->
  </q-layout>
</template>
