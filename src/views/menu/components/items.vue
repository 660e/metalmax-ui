<template>
  <div class="h-full">
    <q-panel-40 :icons="[1, 2, 3, 4, 5, 6, 7]" />
    <q-panel-600>
      <q-row />
      <q-row>道具</q-row>
      <q-head :cells="['名称', '持有数']" />
      <q-row :cells="['碱性车蜡', 1]" hover />
    </q-panel-600>
  </div>
</template>
