<script setup>
defineOptions({ name: 'q-panel-40' });
defineProps({ icons: Array });
</script>

<template>
  <div class="absolute top-0 bottom-12 left-40 w-10">
    <div class="backdrop-2 h-full pt-24 flex flex-col items-center space-y-1">
      <q-icon v-for="icon in icons" :key="icon" size="large" />
    </div>
  </div>
</template>
