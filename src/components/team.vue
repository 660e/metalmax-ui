<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'q-team' });
</script>

<template>
  <div class="panel-1 w-60 border-l border-white/30">
    <div class="h-12 pr-4 flex justify-end items-center">
      <span>{{ Mock.Random.integer(0) }}</span>
      <q-icon class="ml-2" />
    </div>
  </div>
</template>
