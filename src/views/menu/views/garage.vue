<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'menu-garage' });
</script>

<template>
  <div class="absolute top-0 left-40 w-[944px] h-full pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-1 space-y-1">
      <div v-for="item in 8" :key="item" class="w-8 h-8 bg-red-500"></div>
    </div>
    <div class="panel-1 flex-1 flex flex-col pt-12">
      <q-tr />
      <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
      <q-tr :icon="false" :data="[Mock.Random.cword(2, 5), '0']" />
    </div>
  </div>
</template>
