<template>
  <div class="h-full">
    <q-panel-40 :icons="[1, 2, 3, 4, 5, 6, 7]" />
    <q-panel-600>
      <q-row />
      <q-row>道具</q-row>
      <q-head :cells="['名称', '持有数']" />
      <q-row :cells="['碱性车蜡', 1]" hover />
      <q-row :cells="['修理工具箱', 1]" hover />
      <q-row :cells="['回复胶囊', 1]" hover />
      <q-row :cells="['能量胶囊', 1]" hover />
    </q-panel-600>
    <q-panel-300></q-panel-300>
  </div>
</template>
