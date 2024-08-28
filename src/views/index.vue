<script setup>
import { ref } from 'vue';

const visible = ref(false);
const routes = [
  { label: '地图菜单', value: 'app-menu' },
  { label: '装备店/道具店', value: 'app-shop' },
  { label: '旅馆', value: 'app-inn' },
  { label: '猎人办事处', value: 'app-office' },
  { label: '补给店', value: 'app-supply' },
  { label: '修理店', value: 'app-repair' },
  { label: '旅馆', value: 'app-shop' },
  { label: '旅馆', value: 'app-shop' },
  { label: '旅馆', value: 'app-shop' }
];
</script>

<template>
  <div class="h-screen font-mono text-sm leading-none select-none relative flex justify-center items-center bg-gray-800 text-neutral-100">
    <div @click="visible = !visible" class="absolute top-2 left-2 p-2 rounded cursor-pointer bg-neutral-600">Menu</div>
    <div :class="[visible ? 'left-0' : '-left-40']" class="absolute z-50 top-0 w-40 p-4 space-y-4 rounded-br duration-200 bg-neutral-600">
      <div
        v-for="route in routes"
        :key="route.value"
        :class="{ 'text-blue-500': route.value === $route.name }"
        @click="
          () => {
            $router.push({ name: route.value });
            visible = false;
          }
        "
        class="cursor-pointer hover:text-blue-500"
      >
        {{ route.label }}
      </div>
    </div>
    <div class="relative">
      <img src="@/assets/bg.png" />
      <div class="absolute inset-0 overflow-hidden">
        <router-view />
      </div>
    </div>
  </div>
</template>
