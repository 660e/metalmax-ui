<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineOptions({ name: 'app-shop' });

const active = ref();
const menus = [
  { label: '买', value: 'buy' },
  { label: '卖', value: 'sell' },
  { label: '离开商店', value: 'exit' }
];

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="menus">
    <transition name="slide-right">
      <div v-if="active" class="absolute top-0 right-0 h-full pb-12">
        <q-team class="h-full" />
      </div>
    </transition>
  </q-layout>
</template>
