<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '冒险指南', value: 'quests' },
  // { label: '乘降', value: 'in-out' },
  { label: '道具', value: 'items' },
  { label: '装备', value: 'equip' },
  { label: '状态', value: 'status' },
  { label: '车库', value: 'garage' }
  // { label: '选项', value: 'settings' }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <template v-if="active === 'quests'">
      <q-panel :size="300" style="left: 200px" lb rb>
        <q-tr>冒险指南</q-tr>
        <q-th :data="['名称']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 19]" />
          <q-tr :data="['任务名称-001']" hover />
          <q-tr :data="['任务名称-002']" hover />
          <q-tr :data="['任务名称-003']" hover />
          <q-tr :data="['任务名称-004']" hover />
        </div>
      </q-panel>
      <q-panel :size="600" style="left: 504px" lb>
        <div class="flex-1 relative">
          <q-scroll :range="[2, 13]" />
          <q-tr>委托人：NPC姓名</q-tr>
          <div class="absolute top-0 right-4 w-8 h-12 bg-red-500/50"></div>
          <q-th :data="['任务']" />
          <q-tr :data="['任务步骤-01']" hover />
          <q-tr :data="['任务步骤-02']" hover />
          <q-tr :data="['任务步骤-03']" hover />
          <q-tr :data="['任务步骤-04']" hover />
        </div>
        <q-th :data="['说明']" />
        <br />
        <br />
        <br />
        <br />
        <br />
      </q-panel>
    </template>

    <template v-if="active === 'items'">
      <q-panel :size="41" :icons="Array(6)" lb />
      <q-panel :size="600" lb rb>
        <q-tr>人类道具/战车道具</q-tr>
        <q-th :data="['名称', '持有数/重量']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 13]" />
          <q-tr :data="['回复胶囊', 99]" hover />
          <q-tr :data="['能量胶囊', 99]" hover />
          <q-tr :data="['碱性车蜡', 99]" hover />
          <q-tr :data="['传送装置', '1.00t']" hover />
          <q-tr :data="['医疗装置', '1.00t']" hover />
          <q-tr :data="['猛犸象的象牙', '99.99t']" hover />
        </div>
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
      <q-panel :size="300" lb>
        <q-tr>加农炮</q-tr>
        <q-th :data="['名称', '持有数/重量']" />
        <div class="flex-1 relative">
          <q-scroll :range="[0, 13]" />
          <q-tr :data="['卸下']" hover />
          <q-tr :data="['激光炮', 1]" hover />
          <q-tr :data="['等离子暴雨枪', 1]" hover />
          <q-tr :data="['最终风暴枪', 1]" hover />
          <q-tr :data="['雷电加农炮', '6.00t']" hover />
          <q-tr :data="['225mm多头蛇炮', '7.50t']" hover />
          <q-tr :data="['205mm红牡丹炮', '15.00t']" hover />
        </div>
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
          <div class="flex-1">
            <br />
            <br />
            <br />
          </div>
          <div class="flex-1">
            <q-tr>角色姓名</q-tr>
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

    <template v-if="active === 'garage'">
      <q-panel :size="41" :icons="Array(12)" lb />
      <q-panel :size="904" lb>
        <div class="flex">
          <div class="flex-1">
            <br />
            <br />
            <br />
            <br />
            <br />
            <q-tr>战车名称</q-tr>
            <q-tr :data="['型号', '梅卡瓦']" />
            <q-tr :data="['底盘特性', '会心一击']" />
            <q-tr :data="['底盘抗性', '火焰']" />
            <q-tr :data="['最大载重', '255.00t']" />
          </div>
          <div class="flex-1">
            <q-tr :data="['特殊弹仓', '40/99']" />
            <q-th :data="['名称', '持有数']" />
            <div class="relative">
              <q-scroll :range="[0, 8]" />
              <q-tr :data="['火箭弹', 10]" hover />
              <q-tr :data="['穿甲弹', 10]" hover />
              <q-tr :data="['冲锋炸药弹', 10]" hover />
              <q-tr :data="['固体汽油弹', 10]" hover />
            </div>
          </div>
          <div class="flex-1">
            <q-tr :data="['后备箱', '3/16']" />
            <q-th :data="['名称', '重量']" />
            <div class="relative">
              <q-scroll :range="[0, 8]" />
              <q-tr :data="['传送装置', '1.00t']" hover />
              <q-tr :data="['医疗装置', '1.00t']" hover />
              <q-tr :data="['猛犸象的象牙', '99.00t']" hover />
            </div>
          </div>
        </div>
        <q-th :data="['名称', '弹仓', '攻击/属性', '范围/射击', '命中/会心', '防御/状态', '重量']" />
        <q-tr :data="['220mm大地女神炮', '99/99', '2000通常', '1体3次', '255/255', '255/正常', '10.00t']" />
        <q-tr :data="['雷暴机关枪', '∞', '500电气', '范围1次', '255/255', '255/正常', '3.00t']" />
        <q-tr :data="['S龙卷风炮', '8/16', '1000通常', '范围5次', '255/255', '255/正常', '11.00t']" />
        <q-tr />
        <q-tr />
        <q-th :data="['名称', '载重', '奖励', '特性', '防御/状态', '重量']" />
        <q-tr :data="['V100金刚', '100.00t', '0.00t', '双子奖励', '255/正常', '1.00t']" />
        <q-tr />
        <q-th :data="['名称', '芯片1', '芯片2', '芯片3', '命中/回避', '防御/状态', '重量']" />
        <q-tr :data="['所罗门2', '主炮连射', '', '', '255/255', '255/正常', '2.00t']" />
      </q-panel>
    </template>
  </q-layout>
</template>
