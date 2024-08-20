<script setup>
defineOptions({ name: 'q-layout' });
defineProps({ menus: Array });
</script>

<template>
  <div class="h-full relative">
    <pre>{{ menus }}</pre>
  </div>
</template>
