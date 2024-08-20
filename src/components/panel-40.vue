<script setup>
defineOptions({ name: 'q-panel-40' });
defineProps({ icons: Array });
</script>

<template>
  <div class="absolute top-0 left-40 h-full pb-12">
    <div class="panel-2 h-full border-x border-white/30 pt-24 px-1 space-y-1">
      <q-icon v-for="icon in icons" :key="icon" :size="30" />
    </div>
  </div>
</template>
