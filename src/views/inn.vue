<script setup>
import { onMounted, ref } from 'vue';

const active = ref();
const menus = [
  { label: '住宿', value: 1 },
  { label: '离开旅馆', value: 'exit' }
];

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <q-panel v-if="active" :size="240" left>
        <q-team />
      </q-panel>
    </transition>
  </q-layout>
</template>
