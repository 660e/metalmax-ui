<script setup>
defineOptions({ name: 'q-panel-240' });
</script>

<template>
  <div class="absolute top-0 left-[864px] w-[240px] h-full pb-12">
    <div class="backdrop-1 h-full">
      <slot />
    </div>
  </div>
</template>
