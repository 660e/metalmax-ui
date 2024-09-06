<script setup>
import { ref } from 'vue';

const active = ref();
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
        <q-th :data="['外观']" />
        <div class="flex-1"></div>
        <q-th :data="['穴']" />
        <q-tr :data="['穴-1：加农炮']" hover />
        <q-tr :data="['穴-2：机枪']" hover />
        <q-tr :data="['穴-3：特殊装备']" hover />
        <q-tr :data="['穴-4：特殊装备']" hover />
        <q-tr :data="['穴-5：特殊装备']" hover />
        <q-th :data="['改造']" />
        <q-tr :data="['型号', '梅卡瓦IV']" :upgrade="[4, 2]" hover />
        <q-tr :data="['防御', 255]" :upgrade="[5, 1]" hover />
        <q-tr :data="['弹仓', 99]" :upgrade="[6, 4]" hover />
        <q-tr :data="['货仓', 16]" :upgrade="[8, 7]" hover />
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
        <q-tr :data="['攻击', 2000]" :upgrade="[5, 1]" hover />
        <q-tr :data="['弹仓', 99]" :upgrade="[5, 1]" hover />
        <q-tr :data="['防御', 255]" :upgrade="[5, 1]" hover />
        <br />
        <q-th :data="['总结']" />
        <q-tr :data="['重量', '(+100.00t)100.00t']" down />
        <q-tr :data="['费用', 200000]" />
      </q-panel>
    </template>

    <template v-if="active === 3">
      <q-panel :size="41" :icons="Array(4)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>改造引擎</q-tr>
        <q-th :data="['名称', '改造度']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 12]" />
          <q-tr :data="['V100金刚', '75%']" hover />
          <q-tr :data="['V100金刚', '75%']" hover />
          <q-tr :data="['V100金刚', '75%']" hover />
          <q-tr :data="['V100金刚', '75%']" hover />
        </div>
        <q-th :data="['改造']" />
        <q-tr :data="['型号', 'V100金刚']" :upgrade="[5, 1]" hover />
        <q-tr :data="['防御', 255]" :upgrade="[5, 1]" hover />
        <br />
        <br />
        <q-th :data="['总结']" />
        <q-tr :data="['重量', '(+100.00t)100.00t']" down />
        <q-tr :data="['费用', 200000]" />
      </q-panel>
    </template>

    <template v-if="active === 4">
      <q-panel :size="41" :icons="Array(4)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>改造控制装置</q-tr>
        <q-th :data="['名称', '改造度']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 12]" />
          <q-tr :data="['所罗门2', '75%']" hover />
          <q-tr :data="['所罗门2', '75%']" hover />
          <q-tr :data="['所罗门2', '75%']" hover />
          <q-tr :data="['所罗门2', '75%']" hover />
        </div>
        <q-th :data="['改造']" />
        <q-tr :data="['命中', 255]" :upgrade="[5, 1]" hover />
        <q-tr :data="['回避', 255]" :upgrade="[5, 1]" hover />
        <q-tr :data="['防御', 255]" :upgrade="[5, 1]" hover />
        <br />
        <q-th :data="['总结']" />
        <q-tr :data="['重量', '(+100.00t)100.00t']" down />
        <q-tr :data="['费用', 200000]" />
      </q-panel>
    </template>
  </q-layout>
</template>
