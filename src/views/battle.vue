<script setup></script>

<template>
  <div class="absolute top-0 right-0 flex backdrop-blur-sm bg-neutral-900/50">
    <template v-for="(actor, index) in ['猎人', '机械师', '士兵', '波奇']" :key="index">
      <div v-if="index" class="w-px bg-gradient-to-b from-white/50"></div>
      <div :class="{ 'bg-gradient-to-b': index === 1 }" class="w-36 p-2 space-y-1 from-neutral-900/50">
        <div class="flex justify-between items-center">
          <span>{{ actor }}</span>
          <span class="flex space-x-0.5"><b v-for="n in 5" :key="n" :class="{ 'box-shadow': n < 3 }" class="h-1 w-1 rounded-full bg-neutral-500"></b></span>
        </div>
        <div class="h-px bg-gradient-to-r from-white/50"></div>
        <div class="flex justify-between items-center"><span class="text-neutral-400 text-xs leading-none">HP</span><span>10000/99999</span></div>
        <div class="flex-1 flex h-2 border border-neutral-900/50"><b class="bg-green-700 w-1/2"></b></div>
        <div v-if="index !== 3" class="flex-1 flex h-2 border border-neutral-900/50"><b class="bg-yellow-700 w-1/2"></b></div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.box-shadow {
  background-color: theme('colors.orange.400');
  box-shadow: 0 0 5px theme('colors.orange.400');
}
</style>
