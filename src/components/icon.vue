<script setup>
defineOptions({ name: 'q-icon' });
defineProps({ size: Number });
</script>

<template>
  <div :class="{ 'w-5 h-5': size === 20, 'w-[30px] h-[30px]': size === 30 }" class="bg-red-500"></div>
</template>
