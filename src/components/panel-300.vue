<script setup>
defineOptions({ name: 'q-panel-300' });
</script>

<template>
  <div class="absolute top-0 left-[804px] w-[300px] h-full pb-12">
    <div class="backdrop-1 h-full">
      <slot />
    </div>
  </div>
</template>
