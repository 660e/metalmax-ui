<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '买', value: 'buy' },
  { label: '卖', value: 'sell' },
  { label: '离开商店', value: 'exit' }
];

onMounted(() => (active.value = 'buy'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="['buy', 'sell'].includes(active)" class="h-full">
        <q-panel :size="40" :icons="Array(4)" />
        <q-panel :size="600">
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">道具</q-row>
          <q-head :cells="['名称', '持有数']" />
          <q-row :cells="['碱性车蜡', 99]" hover />
          <q-row :cells="['修理工具箱', 99]" hover />
          <q-row :cells="['回复胶囊', 99]" hover />
          <q-row :cells="['能量胶囊', 99]" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['说明']" />
          <div class="flex">
            <div class="flex-1">
              <q-row :cells="['攻击', '(-150)2000']" />
              <q-row :cells="['防御', '(-10)255']" />
              <q-row :cells="['命中', '(-10)30%']" />
              <q-row :cells="['会心', '(-10)30%']" />
              <q-row :cells="['重量', '(+99.99)99.99t']" />
            </div>
            <div class="flex-1">
              <q-row :cells="['弹仓', '(-12)99/99']" />
              <q-row :cells="['射击', '(-2)4次']" />
              <q-row :cells="['范围', '(圆形)1体']" />
              <q-row :cells="['属性', '(电气)通常']" />
              <q-row :cells="['状态', '(破损)正常']" />
            </div>
          </div>
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="active" :size="240">
        <div class="h-12 flex justify-end items-center pr-4">
          <span>999999999</span>
          <q-icon class="ml-2" />
        </div>
      </q-panel>
    </transition>
  </q-layout>
</template>
