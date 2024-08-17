<script setup lang="ts">
defineOptions({ name: 'menu-garage' });
</script>

<template>
  <div class="flex-1 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-1 space-y-1">
      <div v-for="item in 8" :key="item" class="w-8 h-8 bg-red-500"></div>
    </div>
    <div class="panel-1 flex-1 pt-12">
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis pariatur error maxime!</div>
    </div>
  </div>
</template>
