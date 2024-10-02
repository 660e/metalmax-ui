<script setup>
defineOptions({ name: 'q-icon' });
defineProps({ size: String });
</script>

<template>
  <div :class="[size === 'large' ? 'w-8 h-8' : 'w-5 h-5']" class="bg-red-500"></div>
</template>
