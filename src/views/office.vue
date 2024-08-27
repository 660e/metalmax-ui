<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '询问情报', value: 1 },
  { label: '领取赏金', value: 2 },
  { label: '委托任务', value: 3 },
  { label: '离开', value: 'exit' }
];

onMounted(() => (active.value = 1));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="[1, 2, 3].includes(active)" class="h-full">
        <q-panel :size="600" left right>
          <q-row v-for="n in 3" :key="n" />
          <q-row class="pl-4">通缉令</q-row>
          <q-head :cells="['名字', '赏金']" />
          <q-row :cells="['碱性车蜡', 99]" hover />
          <q-row :cells="['修理工具箱', 99]" hover />
          <q-row :cells="['回复胶囊', 99]" hover />
          <q-row :cells="['能量胶囊', 99]" hover />
          <q-row v-for="n in 9" :key="n" />
          <q-head :cells="['详细情报']" />
        </q-panel>
      </div>
    </transition>

    <transition name="slide-right">
      <q-panel v-if="active" :size="300" left></q-panel>
    </transition>
  </q-layout>
</template>
