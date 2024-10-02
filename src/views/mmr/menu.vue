<script setup>
import { ref } from 'vue';

const a = ref();
const m = [
  { l: '冒险指南', v: 'quests' },
  { l: '道具', v: 'items' },
  { l: '装备', v: 'equip' },
  { l: '状态', v: 'status' },
  { l: '车库', v: 'garage' },
  { l: '选项', v: 'settings' },
];
</script>

<template>
  <q-layout v-model="a" :m="m"></q-layout>
</template>
