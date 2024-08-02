<script setup lang="ts">
import AppLayout from '@/components/layout.vue';

defineOptions({ name: 'app-menu' });

const menus = [
  { label: '地图', value: '1' },
  { label: '乘降', value: '2' }
];
</script>

<template>
  <app-layout :menus="menus">
    <div>main</div>

    <template #aside>
      <div>aside</div>
    </template>
  </app-layout>
</template>
