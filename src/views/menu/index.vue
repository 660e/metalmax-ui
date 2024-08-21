<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '地图', value: 'map' },
  { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '状态', value: 'status' },
  { label: '车库', value: 'garage' },
  { label: '选项', value: 'settings' }
];

onMounted(() => (active.value = 'items'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 'items'" class="h-full">
        <q-panel-40 :icons="[1, 2, 3, 4, 5, 6, 7]" />
        <q-panel-600>
          <q-row v-for="n in 3" :key="n" />
          <q-row>道具</q-row>
          <q-head :cells="['名称', '持有数']" />
          <q-row :cells="['碱性车蜡', 99]" hover />
          <q-row :cells="['修理工具箱', 99]" hover />
          <q-row :cells="['回复胶囊', 99]" hover />
          <q-row :cells="['能量胶囊', 99]" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['说明']" />
          <div class="grid grid-rows-5 grid-flow-col">
            <q-row :cells="['攻击', 2000]" />
            <q-row :cells="['防御', 255]" />
            <q-row :cells="['命中', '30%']" />
            <q-row :cells="['会心', '30%']" />
            <q-row :cells="['重量', '99.99t']" />
            <q-row :cells="['弹仓', '99/99']" />
            <q-row :cells="['射击', '4次']" />
            <q-row :cells="['范围', '1体']" />
            <q-row :cells="['属性', '通常']" />
            <q-row :cells="['状态', '正常']" />
          </div>
        </q-panel-600>
        <q-panel-240>
          <div class="h-12 flex justify-end items-center pr-4">
            <span>999999999</span>
            <q-icon class="ml-2" />
          </div>
        </q-panel-240>
      </div>
    </transition>
  </q-layout>
</template>
