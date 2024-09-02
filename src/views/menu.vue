<script setup>
import { onMounted, ref } from 'vue';

const active = ref();

const menus = [
  // { label: '地图', value: 'map' },
  // { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '状态', value: 'status' }
  // { label: '车库', value: 'garage' }
  // { label: '选项', value: 'settings' }
];

onMounted(() => (active.value = 'status'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <template v-if="active === 'items'">
      <q-panel :size="41" :icons="Array(6)" lb />
      <q-panel :size="600" :vs="[2, 15]" lb rb>
        <q-tr>人类道具/战车道具</q-tr>
        <q-th :data="['名称', '持有数/重量']" />
        <q-tr :data="['回复胶囊', 99]" hover />
        <q-tr :data="['能量胶囊', 99]" hover />
        <q-tr :data="['碱性车蜡', 99]" hover />
        <q-tr :data="['传送装置', '1.00t']" hover />
        <q-tr :data="['医疗装置', '1.00t']" hover />
        <q-tr :data="['猛犸象的象牙', '99.99t']" hover />
        <br class="flex-1" />
        <q-th :data="['说明']" />
        <div class="flex">
          <div class="flex-1">
            <q-tr :data="['攻击', 2000]" />
            <q-tr :data="['防御', 255]" />
            <q-tr :data="['命中', 255]" />
            <q-tr :data="['会心', 255]" />
            <q-tr :data="['重量', '255.00t']" />
          </div>
          <div class="flex-1">
            <q-tr :data="['弹仓', '99/99']" />
            <q-tr :data="['射击', '4次']" />
            <q-tr :data="['范围', '1体']" />
            <q-tr :data="['属性', '通常']" />
            <q-tr :data="['状态', '正常']" />
          </div>
        </div>
      </q-panel>
    </template>

    <template v-if="active === 'equip'">
      <q-panel :size="41" :icons="Array(7)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>角色名称</q-tr>
        <q-th :data="['装备部位', '弹仓', '重量']" />
        <q-tr style="padding: 0" hover><q-tr :data="['加农炮']" class="w-40" /><q-tr :data="['220mm大地女神炮', '16/32', '10.00t']" class="flex-1" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['机枪']" class="w-40" /><q-tr :data="['雷暴机关枪', '∞', '3.00t']" class="flex-1" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['特殊装备']" class="w-40" /><q-tr :data="['S龙卷风炮', '8/16', '11.00t']" class="flex-1" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['特殊装备']" class="w-40" /><q-tr /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['特殊装备']" class="w-40" /><q-tr /></q-tr>
        <br />
        <q-tr style="padding: 0" hover><q-tr :data="['主引擎']" class="w-40" /><q-tr :data="['V100金刚', '', '1.00t']" class="flex-1" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['副引擎']" class="w-40" /><q-tr /></q-tr>
        <br />
        <q-tr style="padding: 0" hover><q-tr :data="['控制装置']" class="w-40" /><q-tr :data="['所罗门2', '', '2.00t']" class="flex-1" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['芯片1']" class="w-40" /><q-tr :data="['主炮连射']" /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['芯片2']" class="w-40" /><q-tr /></q-tr>
        <q-tr style="padding: 0" hover><q-tr :data="['芯片3']" class="w-40" /><q-tr /></q-tr>
        <q-th :data="['说明']" />
        <div class="flex">
          <div class="flex-1">
            <q-tr :data="['攻击', '(-1000)2000']" down />
            <q-tr :data="['防御', 255]" />
            <q-tr :data="['命中', '(+100)100']" up />
            <q-tr :data="['会心', 255]" />
            <q-tr :data="['重量', '(-100.00t)255.00t']" up />
          </div>
          <div class="flex-1">
            <q-tr :data="['弹仓', '(16/32)99/99']" down />
            <q-tr :data="['射击', '(4次)3次']" up />
            <q-tr :data="['范围', '(贯穿)1体']" />
            <q-tr :data="['属性', '(电气)通常']" />
            <q-tr :data="['状态', '正常']" />
          </div>
        </div>
      </q-panel>
      <q-panel :size="300" :vs="[2, 15]" lb>
        <q-tr>加农炮</q-tr>
        <q-th :data="['名称', '持有数/重量']" />
        <q-tr :data="['卸下']" hover />
        <q-tr :data="['激光炮', 1]" hover />
        <q-tr :data="['等离子暴雨枪', 1]" hover />
        <q-tr :data="['最终风暴枪', 1]" hover />
        <q-tr :data="['雷电加农炮', '6.00t']" hover />
        <q-tr :data="['225mm多头蛇炮', '7.50t']" hover />
        <q-tr :data="['205mm红牡丹炮', '15.00t']" hover />
        <br class="flex-1" />
        <q-th :data="['预览']" />
        <br />
        <br />
        <br />
        <br />
        <br />
      </q-panel>
    </template>

    <template v-if="active === 'status'">
      <q-panel :size="41" :icons="Array(4)" lb />
      <q-panel :size="600" lb rb>
        <div class="flex">
          <div class="w-52">
            <br />
            <br />
            <br />
          </div>
          <div class="flex-1">
            <q-tr>角色名称</q-tr>
            <q-tr :data="['职业', '赏金猎人']" />
            <q-tr :data="['等级', 85]" />
            <q-tr :data="['距下一次升级还有', '10000EXP']" />
          </div>
        </div>
        <q-th :data="['能力']" />
        <div class="flex">
          <div class="flex-1">
            <q-tr :data="['驾驶等级', 255]" />
            <q-tr :data="['修理等级', 255]" />
            <q-tr :data="['战斗等级', 255]" />
            <q-tr :data="['命中', 255]" />
            <q-tr :data="['闪避', 255]" />
          </div>
          <div class="flex-1">
            <q-tr :data="['腕力', 255]" />
            <q-tr :data="['体力', 255]" />
            <q-tr :data="['速度', 255]" />
          </div>
        </div>
        <q-th :data="['特性']" />
        <q-tr :data="['猎人之眼', '战斗中可以看到敌人的弱点']" />
        <q-tr :data="['医护能力', '使用回复类物品时，效果提升50%']" />
        <q-tr :data="['迎击能力', '可以使用手中的武器拦截敌人的炮弹']" />
      </q-panel>
    </template>

    <!--
    <transition name="slide-right">
      <div v-if="active === 'map' && !quests" class="h-full">
        <q-panel :size="40" :icons="Array(2)" @click="quests = true" left />
        <q-panel :size="600" left right>
          <div class="flex-1 pt-14 px-2 pb-2 flex">
            <div class="flex-1 bg-neutral-900"></div>
          </div>
        </q-panel>
        <q-panel :size="240" left>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">犬系统</q-row>
          <q-head :cells="['地点']" />
          <q-row :cells="['明奇博士研究所']" hover />
          <q-row :cells="['地球救济中心']" hover />
        </q-panel>
      </div>

      <div v-else-if="active === 'map' && quests" class="h-full">
        <q-panel :size="40" :icons="Array(2)" @click="quests = false" left />
        <q-panel :size="300" style="left: 200px" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">冒险指南</q-row>
          <q-head :cells="['名称', '进度']" />
          <q-row :cells="['任务名称001', '完成']" hover />
          <q-row :cells="['任务名称002', '完成']" hover />
          <q-row :cells="['任务名称003', '完成']" hover />
          <q-row :cells="['任务名称004', '完成']" hover />
        </q-panel>
        <q-panel :size="600" style="left: auto; right: 0" left>
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

      <div v-else-if="active === 'garage'" class="h-full">
        <q-panel :size="40" :icons="Array(12)" left />
        <q-panel :size="904" left>
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
      <q-panel v-if="['menu', 'items'].includes(active)" :size="240" left>
        <q-team />
      </q-panel>
    </transition>
    -->
  </q-layout>
</template>
