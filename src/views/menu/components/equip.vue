<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'menu-equip' });

const actor = ref(1);
</script>

<template>
  <div class="h-full border-r border-white/30 flex">
    <div class="backdrop-deep border-x border-white/30 pt-24 px-1 space-y-1 flex flex-col">
      <div @click="actor = 1" class="w-8 h-8 bg-red-500"></div>
      <div @click="actor = 1" class="w-8 h-8 bg-red-500"></div>
      <div @click="actor = 1" class="w-8 h-8 bg-red-500"></div>
      <img @click="actor = 2" src="@/assets/t1.png" />
      <img @click="actor = 2" src="@/assets/t2.png" />
      <img @click="actor = 2" src="@/assets/t3.png" />
      <img @click="actor = 2" src="@/assets/t4.png" />
    </div>

    <div class="backdrop-shallow flex-1 pt-12 flex flex-col"></div>
  </div>
</template>
