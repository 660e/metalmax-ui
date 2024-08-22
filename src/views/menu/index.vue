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

onMounted(() => (active.value = 'equip'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 'items'" class="h-full">
        <q-panel-40 :icons="[1, 2, 3, 4, 5, 6, 7]" />
        <q-panel-600>
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
              <q-row :cells="['攻击', 2000]" />
              <q-row :cells="['防御', 255]" />
              <q-row :cells="['命中', '30%']" />
              <q-row :cells="['会心', '30%']" />
              <q-row :cells="['重量', '99.99t']" />
            </div>
            <div class="flex-1">
              <q-row :cells="['弹仓', '99/99']" />
              <q-row :cells="['射击', '4次']" />
              <q-row :cells="['范围', '1体']" />
              <q-row :cells="['属性', '通常']" />
              <q-row :cells="['状态', '正常']" />
            </div>
          </div>
        </q-panel-600>
      </div>

      <div v-else-if="active === 'equip'" class="h-full">
        <q-panel-40 :icons="[1, 2, 3, 4, 5, 6, 7]" />
        <q-panel-600>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">角色名称</q-row>
          <q-head :cells="['装备部位']" />
          <q-row hover><q-row :cells="['加农炮']" class="w-48" /><q-row :cells="['220mm大地女神炮']" /></q-row>
          <q-row hover><q-row :cells="['机枪']" class="w-48" /><q-row :cells="['雷暴机关枪']" /></q-row>
          <q-row hover><q-row :cells="['特殊装备']" class="w-48" /><q-row :cells="['烈日中子炮']" /></q-row>
          <q-row hover><q-row :cells="['特殊装备']" class="w-48" /><q-row :cells="['']" /></q-row>
          <q-row hover><q-row :cells="['特殊装备']" class="w-48" /><q-row :cells="['']" /></q-row>
          <q-row />
          <q-row hover><q-row :cells="['控制装置']" class="w-48" /><q-row :cells="['所罗门2']" /></q-row>
          <q-row hover><q-row :cells="['芯片']" class="w-48" /><q-row :cells="['主炮连射']" /></q-row>
          <q-row hover><q-row :cells="['芯片']" class="w-48" /><q-row :cells="['迎击能力']" /></q-row>
          <q-row hover><q-row :cells="['芯片']" class="w-48" /><q-row :cells="['']" /></q-row>
          <q-row />
          <q-row hover><q-row :cells="['引擎']" class="w-48" /><q-row :cells="['V100金刚']" /></q-row>
          <q-row hover><q-row :cells="['引擎']" class="w-48" /><q-row :cells="['']" /></q-row>
          <q-head :cells="['说明']" />
          <div class="flex">
            <div class="flex-1">
              <q-row :cells="['攻击', '(-200)2000']" />
              <q-row :cells="['防御', 255]" />
              <q-row :cells="['命中', '(-15%)30%']" />
              <q-row :cells="['会心', '30%']" />
              <q-row :cells="['重量', '(-100.00t)199.00t']" />
            </div>
            <div class="flex-1">
              <q-row :cells="['弹仓', '(12/64)99/99']" />
              <q-row :cells="['射击', '(1次)4次']" />
              <q-row :cells="['范围', '(圆范围)1体']" />
              <q-row :cells="['属性', '通常']" />
              <q-row :cells="['状态', '正常']" />
            </div>
          </div>
        </q-panel-600>
        <q-panel-300>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">后备箱</q-row>
          <q-head :cells="['名称', '重量']" />
          <q-row :cells="['卸下']" hover />
          <q-row :cells="['雷电加农炮', '100.00t']" hover />
          <q-row :cells="['205mm红牡丹炮', '89.00t']" hover />
          <q-row :cells="['诺伊曼', '5.00t']" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['预览']" />
        </q-panel-300>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel-240 v-if="['menu', 'items'].includes(active)">
        <div class="h-12 flex justify-end items-center pr-4">
          <span>999999999</span>
          <q-icon class="ml-2" />
        </div>
      </q-panel-240>
    </transition>
  </q-layout>
</template>
