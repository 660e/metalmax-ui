<script setup>
defineOptions({ name: 'q-pagination' });
</script>

<template>
  <div class="h-6 pb-1 flex items-end justify-center space-x-1">
    <b v-for="n in 4" :key="n" :class="[n === 2 ? 'bg-blue-500' : 'bg-neutral-500']" class="h-1 w-1 rounded-full"></b>
  </div>
</template>
