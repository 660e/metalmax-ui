<script setup>
defineOptions({ name: 'q-panel-600' });
</script>

<template>
  <div class="absolute top-0 left-[200px] w-[600px] h-full pb-12">
    <div class="backdrop-30 h-full pt-12">
      <slot />
    </div>
  </div>
</template>
