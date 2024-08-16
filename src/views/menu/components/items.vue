<script setup lang="ts">
defineOptions({ name: 'menu-items' });
</script>

<template>
  <div class="flex-1 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-1">
      <div v-for="item in 7" :key="item" class="w-8 h-8 bg-red-500"></div>
    </div>
    <div class="panel-1 flex-1 border-r border-white/30 pt-12">
      <q-tr :icon="false" />
      <q-tr :icon="false" :data="['道具', '']" />
      <q-thead :data="['名称,持有数', '0,100']" />
      <q-tr :data="['万能钥匙,1', '0,100']" />
    </div>
  </div>
</template>
