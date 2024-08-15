<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'menu-items' });

const category = ref(1);
const extra = ref(1);
</script>

<template>
  <div class="h-full border-r border-white/30 flex">
    <div class="backdrop-deep border-x border-white/30 pt-24 px-1 space-y-1 flex flex-col">
      <div @click="category = 1" class="w-8 h-8 bg-red-500"></div>
      <div @click="category = 2" class="w-8 h-8 bg-red-500"></div>
      <img @click="category = 3" src="@/assets/t1.png" />
      <img @click="category = 3" src="@/assets/t2.png" />
      <img @click="category = 3" src="@/assets/t3.png" />
      <img @click="category = 3" src="@/assets/t4.png" />
    </div>
    <div class="backdrop-shallow flex-1 pt-12 flex flex-col">
      <div class="h-6"></div>
      <div class="h-6 pl-4 flex items-center">{{ category === 1 ? '道具' : category === 2 ? '贵重物品' : 'Merkava' }}</div>

      <template v-if="category === 1">
        <q-thead :labels="['名称', '持有数']" :widths="[0, 100]" />
        <q-tr :cells="['碱性车蜡', 99]" :widths="[0, 100]" handle icon />
        <q-tr :cells="['回复胶囊', 99]" :widths="[0, 100]" handle icon />
        <q-tr :cells="['能量胶囊', 99]" :widths="[0, 100]" handle icon />
        <q-tr :cells="['火箭礼花', 99]" :widths="[0, 100]" handle icon />
      </template>
      <template v-if="category === 2">
        <q-thead :labels="['名称']" :widths="[0]" />
        <q-tr :cells="['万能钥匙']" :widths="[0]" handle icon />
      </template>
      <template v-if="category === 3">
        <q-thead :labels="['名称', '重量']" :widths="[0, 100]" />
        <q-tr :cells="['220mm大地女神炮', '999.99t']" :widths="[0, 100]" handle icon />
        <q-tr :cells="['V100金刚', '999.99t']" :widths="[0, 100]" handle icon />
        <q-tr :cells="['所罗门2', '999.99t']" :widths="[0, 100]" handle icon />
      </template>

      <div class="flex-1"></div>

      <template v-if="category === 3 && extra">
        <q-thead :labels="['参数']" :widths="[0]" />
        <div class="flex">
          <div class="flex-1">
            <q-tr :cells="['攻击', 9999]" icon />
            <q-tr :cells="['守备', 999]" icon />
            <q-tr :cells="['弹仓', 99]" icon />
            <q-tr :cells="['命中', '30%']" icon />
            <q-tr :cells="['会心', '30%']" icon />
          </div>
          <div class="w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0"></div>
          <div class="flex-1">
            <q-tr :cells="['重量', '99.99t-100.00t']" icon />
            <q-tr :cells="['范围', '单体']" icon />
            <q-tr :cells="['属性', '普通']" icon />
            <q-tr :cells="['状态', '正常']" icon />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
