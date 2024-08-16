<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'app-home' });

const routes = [{ label: '地图菜单', value: 'app-menu' }];
const grid = ref(false);
const router = useRouter();
const to = (name: string) => router.push({ name });
</script>

<template>
  <div class="h-screen bg-gray-800 font-mono select-none text-sm leading-none text-white flex">
    <div class="w-40 p-4 space-y-1 flex flex-col">
      <div
        v-for="route in routes"
        :key="route.value"
        :class="{ 'bg-neutral-900/20 text-blue-500': $route.name === route.value }"
        @click="to(route.value)"
        class="cursor-pointer p-2 rounded duration-200 hover:bg-neutral-900/20 hover:text-blue-500"
      >
        {{ route.label }}
      </div>
      <div class="flex-1"></div>
      <div
        :class="{ 'bg-neutral-900/20 text-blue-500': grid }"
        @click="grid = !grid"
        class="cursor-pointer p-2 rounded duration-200 hover:bg-neutral-900/20 hover:text-blue-500"
      >
        网格
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center">
      <div class="relative">
        <img src="@/assets/bg.png" />
        <div class="absolute inset-0 overflow-hidden text-gray-200">
          <router-view />
        </div>
        <div v-if="grid" class="absolute z-30 inset-0 grid">
          <div v-for="n in 26" :key="n" :class="{ 'bg-white/20': n % 2 }" class="h-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>
