<script setup>
const data = [
  { label: 'Metal Max', value: 'mm' },
  { label: 'Metal Max Returns', value: 'mmr' },
];
</script>

<template>
  <div class="font-mono h-screen flex flex-col justify-center items-center space-y-4">
    <div
      v-for="e in data"
      :key="e.value"
      @click="$router.push({ name: e.value })"
      class="h-[100px] w-[500px] flex justify-center items-center text-2xl cursor-pointer duration-200 bg-neutral-200 hover:bg-blue-200"
    >
      {{ e.label }}
    </div>
  </div>
</template>
