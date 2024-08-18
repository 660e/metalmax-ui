<script setup lang="ts">
defineOptions({ name: 'menu-map' });
</script>

<template>
  <div class="absolute top-0 left-40 w-[944px] h-full pb-12 flex">
    <div class="panel-2 w-10 border-x border-white/30 pt-24 px-px space-y-px">
      <div v-for="item in 2" :key="item" class="w-9 h-9 bg-red-500"></div>
    </div>
    <div class="panel-1 w-[600px] border-r border-white/30"></div>
    <div class="flex-1"></div>
    <div class="panel-1 w-[300px] border-l border-white/30"></div>
  </div>
</template>
