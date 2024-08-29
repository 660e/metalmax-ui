<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '改造底盘', value: 1 },
  { label: '改造武器', value: 2 },
  { label: '改造控制装置', value: 3 },
  { label: '改造引擎', value: 4 },
  { label: '离开商店', value: 'exit' }
];

onMounted(() => (active.value = 2));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active === 1" class="h-full">
        <q-panel :size="40" :icons="Array(4)" left />
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">选项</q-row>
          <q-head :cells="['改造']" />
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>型号</div>
              <div class="flex-1"></div>
              <div>IV</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>弹仓</div>
              <div class="flex-1"></div>
              <div>IV</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>货仓</div>
              <div class="flex-1"></div>
              <div>IV</div>
            </div>
          </q-row>
          <q-head :cells="['改造']" />
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>穴-1：加农炮</div>
              <div class="flex-1"></div>
              <div>[机枪]、[特殊装备]</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>穴-2：加农炮</div>
              <div class="flex-1"></div>
              <div>[机枪]、[特殊装备]</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>穴-3：加农炮</div>
              <div class="flex-1"></div>
              <div>[机枪]、[特殊装备]</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>穴-4：加农炮</div>
              <div class="flex-1"></div>
              <div>二连加农炮、[特殊装备]</div>
            </div>
          </q-row>
          <q-row hover>
            <div class="px-4 flex-1 flex items-center space-x-2">
              <q-icon />
              <div>穴-5：加农炮</div>
              <div class="flex-1"></div>
              <div>恶狼火花炮、[特殊装备]</div>
            </div>
          </q-row>
          <q-head :cells="['外观']" />
          <q-row v-for="n in 6" :key="n" />
          <q-head :cells="['总结']" />
          <q-row :cells="['重量', '(-99.00t)190.00t']" />
          <q-row :cells="['费用', 10000000]" />
        </q-panel>
      </div>

      <div v-else-if="active === 2" class="h-full">
        <q-panel :size="40" :icons="Array(4)" left />
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">选项</q-row>
          <q-head :cells="['名称', '改造度']" />
          <q-row :cells="['220mm大地女神炮', '90%']" />
          <q-row :cells="['220mm大地女神炮', '90%']" />
          <q-row :cells="['220mm大地女神炮', '90%']" />
          <q-row :cells="['220mm大地女神炮', '90%']" />
          <q-row v-for="n in 8" :key="n" />
          <q-head :cells="['改造']" />
          <q-row :cells="['攻击', '(+1000)1000']" hover />
          <q-row :cells="['守备', '(+1000)1000']" hover />
          <q-row :cells="['弹仓', '(+1000)1000']" hover />
          <q-head :cells="['总结']" />
          <q-row :cells="['重量', '(-99.00t)190.00t']" />
          <q-row :cells="['费用', 10000000]" />
        </q-panel>
      </div>

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
    </transition>
  </q-layout>
</template>
