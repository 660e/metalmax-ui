<script setup>
import { ref } from 'vue';

const active = ref();
const menus = [
  { label: '住宿', value: 1 },
  { label: '离开旅馆', value: 0 }
];
</script>

<template>
  <q-layout v-model="active" :menus="menus" title="旅馆"></q-layout>
</template>
