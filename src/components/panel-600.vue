<script setup>
defineOptions({ name: 'q-panel-600' });
</script>

<template>
  <div class="absolute top-0 bottom-12 left-[200px] w-[600px]">
    <div class="backdrop-1 h-full">
      <slot />
    </div>
  </div>
</template>
