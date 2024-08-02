<script setup lang="ts">
import AppLayout from '@/components/layout.vue';

defineOptions({ name: 'app-map' });
</script>

<template>
  <app-layout>
    <div>main</div>

    <template #aside>
      <div>aside</div>
    </template>
  </app-layout>
</template>
