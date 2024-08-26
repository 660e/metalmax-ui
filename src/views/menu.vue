<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const quests = ref(false);

const menus = [
  { label: '地图', value: 'map' },
  { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '状态', value: 'status' },
  { label: '车库', value: 'garage' },
  { label: '选项', value: 'settings' }
];

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 'map' && !quests" class="h-full">
        <q-panel :size="40" :icons="Array(2)" @click="quests = true" />
        <q-panel :size="600">
          <div class="flex-1 pt-14 px-2 pb-2 flex">
            <div class="flex-1 bg-neutral-900"></div>
          </div>
        </q-panel>
        <q-panel :size="240">
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">犬系统</q-row>
          <q-head :cells="['地点']" />
          <q-row :cells="['明奇博士研究所']" hover />
          <q-row :cells="['地球救济中心']" hover />
        </q-panel>
      </div>

      <div v-else-if="active === 'map' && quests" class="h-full">
        <q-panel :size="40" :icons="Array(2)" @click="quests = false" />
        <q-panel :size="300" style="left: 200px">
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">冒险指南</q-row>
          <q-head :cells="['名称', '进度']" />
          <q-row :cells="['任务名称001', '完成']" hover />
          <q-row :cells="['任务名称002', '完成']" hover />
          <q-row :cells="['任务名称003', '完成']" hover />
          <q-row :cells="['任务名称004', '完成']" hover />
        </q-panel>
        <q-panel :size="600" style="left: auto; right: 0">
          <q-row v-for="n in 4" :key="n" />
          <q-head :cells="['任务']" />
          <q-row :cells="['任务步骤01']" hover />
          <q-row :cells="['任务步骤02']" hover />
          <q-row :cells="['任务步骤03']" hover />
          <q-row :cells="['任务步骤04']" hover />
          <q-row v-for="n in 7" :key="n" />
          <q-head :cells="['详情']" />
        </q-panel>
      </div>

      <div v-else-if="active === 'items'" class="h-full">
        <q-panel :size="40" :icons="Array(7)" />
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
        </q-panel>
      </div>

      <div v-else-if="active === 'equip'" class="h-full">
        <q-panel :size="40" :icons="Array(7)" />
        <q-panel :size="600">
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
        </q-panel>
        <q-panel :size="300">
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">后备箱</q-row>
          <q-head :cells="['名称', '重量']" />
          <q-row :cells="['卸下']" hover />
          <q-row :cells="['雷电加农炮', '100.00t']" hover />
          <q-row :cells="['205mm红牡丹炮', '89.00t']" hover />
          <q-row :cells="['诺伊曼', '5.00t']" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['预览']" />
        </q-panel>
      </div>

      <div v-else-if="active === 'status'" class="h-full">
        <q-panel :size="40" :icons="Array(4)" />
        <q-panel :size="600">
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">角色名称</q-row>
          <q-row class="pl-4">角色职业</q-row>
          <div class="flex">
            <div class="flex-1"></div>
            <div class="flex-1">
              <q-row :cells="['当前等级', 255]" />
              <q-row :cells="['总经验值', 999999999]" />
              <q-row :cells="['升级还需', 10000]" />
            </div>
          </div>
          <q-head :cells="['能力']" />
          <div class="flex">
            <div class="flex-1">
              <q-row :cells="['驾驶等级', 255]" />
              <q-row :cells="['修理等级', 255]" />
              <q-row :cells="['战斗等级', 255]" />
              <q-row :cells="['命中率', '50%']" />
              <q-row :cells="['闪避率', '10%']" />
            </div>
            <div class="flex-1">
              <q-row :cells="['腕力', 255]" />
              <q-row :cells="['体力', 255]" />
              <q-row :cells="['速度', 255]" />
            </div>
          </div>
          <q-head :cells="['技能']" />
          <q-row :cells="['猎人之眼']" />
        </q-panel>
      </div>

      <div v-else-if="active === 'garage'" class="h-full">
        <q-panel :size="40" :icons="Array(12)" />
        <q-panel :size="904">
          <q-row v-for="n in 3" :key="n" />
          <div class="flex">
            <div class="flex-1">
              <q-row class="pl-4">战车名称</q-row>
              <q-row class="pl-4">战车类型</q-row>
              <q-row v-for="n in 4" :key="n" />
              <q-row :cells="['底盘特性', '会心一击']" />
              <q-row :cells="['底盘抗性', '火焰']" />
              <q-row :cells="['最大载重', '255.00t']" />
              <q-row :cells="['特殊弹仓', '99/99']" />
            </div>
            <div class="w-[440px]">
              <q-head :cells="['货仓']" />
              <div class="grid grid-cols-2">
                <q-row :cells="['220mm大地女神炮']" />
                <q-row :cells="['雷暴机关枪']" />
                <q-row :cells="['烈日中子炮']" />
                <q-row :cells="['迷彩伪装']" />
                <q-row :cells="['电磁护屏']" />
                <q-row :cells="['换气装置']" />
              </div>
            </div>
            <div class="w-[220px]">
              <q-head :cells="['名称', '持有数']" />
              <q-row :cells="['火箭弹', 10]" />
              <q-row :cells="['穿甲弹', 10]" />
              <q-row :cells="['汽油弹', 10]" />
            </div>
          </div>
          <q-head :cells="['名称', '攻击', '范围', '属性', '命中', '会心', '防御', '重量']" />
          <q-row :cells="['220mm大地女神炮', 2000, '1体', '通常', '30%', '30%', 255, '99.99t']" />
          <q-row :cells="['雷暴机关枪', 1000, '1体', '通常', '30%', '30%', 255, '50.50t']" />
          <q-row :cells="['烈日中子炮', 2000, '全体', '通常', '30%', '30%', 255, '99.99t']" />
          <q-row v-for="n in 2" :key="n" />
          <q-head :cells="['名称', '芯片1', '芯片2', '芯片3', '命中', '会心', '防御', '重量']" />
          <q-row :cells="['所罗门2', '主炮连射', '迎击能力', '空', '30%', '30%', 255, '10.00t']" />
          <q-head :cells="['名称', '载重', '防御', '重量']" />
          <q-row :cells="['V100金刚', '99.99t', 255, '10.00t']" />
          <q-row />
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="['menu', 'items'].includes(active)" :size="240">
        <div class="h-12 flex justify-end items-center pr-4">
          <span>999999999</span>
          <q-icon class="ml-2" />
        </div>
      </q-panel>
    </transition>
  </q-layout>
</template>
