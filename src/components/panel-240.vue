<script setup>
defineOptions({ name: 'q-panel-240' });
</script>

<template>
  <div class="absolute top-0 bottom-12 left-[864px] w-[240px]">
    <div class="backdrop-1 h-full">
      <slot />
    </div>
  </div>
</template>
