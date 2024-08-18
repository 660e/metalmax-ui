<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'trunk-component' });
</script>

<template>
  <div class="absolute top-0 right-0 w-[300px] h-full pb-12">
    <div class="panel-1 h-full border-l border-white/30 flex flex-col">
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr :icon="false" :data="['后备箱', '0']" />
      <q-thead :data="['名称,重量', '0,100']" />
      <q-tr :data="['卸下', '0']" hover />
      <q-tr v-for="n in 5" :key="n" :data="[`${Mock.Random.cword(4, 9)},${Mock.Random.integer(1, 99)}.00t`, '0,100']" hover />
      <div class="flex-1"></div>
      <q-thead :data="['预览', '0']" />
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr />
    </div>
  </div>
</template>
