<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'q-team' });
</script>

<template>
  <div class="absolute top-0 right-0 w-60 h-full pb-12">
    <div class="panel-1 h-full border-l border-white/30">
      <div class="h-12 pr-4 flex justify-end items-center">
        <span>{{ Mock.Random.integer(0) }}</span>
        <q-icon class="ml-2" />
      </div>
    </div>
  </div>
</template>
