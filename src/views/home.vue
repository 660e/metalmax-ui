<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'app-home' });

const routes = [
  { label: '地图菜单', value: 'app-menu' },
  { label: '装备店', value: 'equipment' }
];
const bg = ref('mm');
const grid = ref(false);

const router = useRouter();
const to = (name: string) => router.push({ name });
</script>

<template>
  <div class="h-screen bg-slate-700 text-base leading-none flex">
    <div class="text-white w-40 p-4 space-y-1 flex flex-col select-none">
      <div v-for="route in routes" :key="route.value" :class="{ active: $route.name === route.value }" @click="to(route.value)" class="route">
        {{ route.label }}
      </div>
      <div class="flex-1"></div>
      <div :class="{ active: bg === 'mm' }" @click="bg = 'mm'" class="route">传统</div>
      <div :class="{ active: bg === 'mmr' }" @click="bg = 'mmr'" class="route">现代</div>
      <div :class="{ active: grid }" @click="grid = !grid" class="route">网格</div>
    </div>

    <div class="flex-1 flex justify-center items-center">
      <div class="relative">
        <img :src="`/bg-${bg}.png`" />
        <div class="absolute inset-0" style="font-family: mm">
          <router-view />
        </div>
        <div v-if="grid" class="absolute inset-0 text-xs leading-none grid grid-cols-23">
          <div v-for="n in 299" :key="n" :class="[n % 2 ? 'bg-black/20' : 'bg-white/20']" class="w-12 h-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.route {
  @apply cursor-pointer rounded p-2 duration-200 hover:bg-black/20 hover:text-blue-500;
  &.active {
    @apply bg-black/20 text-blue-500;
  }
}
</style>
