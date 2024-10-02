<script setup>
const d = [
  { l: 'Metal Max', v: 'mm' },
  { l: 'Metal Max Returns', v: 'mmr' },
];
</script>

<template>
  <div class="font-mono h-screen flex flex-col justify-center items-center space-y-4">
    <div
      v-for="e in d"
      :key="e.v"
      @click="$router.push({ name: e.v })"
      class="h-[100px] w-[500px] flex justify-center items-center text-2xl cursor-pointer duration-200 bg-neutral-200 hover:bg-blue-200"
    >
      {{ e.l }}
    </div>
  </div>
</template>
