<script setup>
import { ref } from 'vue';

const visible = ref(false);
const routes = [
  { label: '地图菜单', value: 'mmr-menu' },
  { label: '地图指令', value: 'mmr-directive' },
  { label: '装备店/道具店', value: 'mmr-shop' },
  { label: '旅馆', value: 'mmr-inn' },
  { label: '猎人办事处', value: 'mmr-office' },
  { label: '补给店', value: 'mmr-supply' },
  { label: '修理店', value: 'mmr-repair' },
  { label: '改造店', value: 'mmr-upgrade' },
  { label: '记录中心', value: 'mmr-save' },
  { label: '战斗场景', value: 'mmr-battle' },
];
</script>

<template>
  <div
    @click="visible = !visible"
    class="h-screen font-mono text-sm leading-none select-none flex justify-center items-center bg-gray-800 text-neutral-200"
  >
    <div :class="[visible ? 'left-0' : '-left-40']" class="fixed z-50 top-0 h-full w-40 p-4 space-y-4 duration-200 bg-neutral-600">
      <div
        v-for="route in routes"
        :key="route.value"
        :class="{ 'text-blue-400': route.value === $route.name }"
        @click.stop="
          () => {
            $router.push({ name: route.value });
            visible = false;
          }
        "
        class="cursor-pointer duration-200 hover:text-blue-400"
      >
        {{ route.label }}
      </div>
    </div>
    <div @click.stop class="relative">
      <img src="./assets/map.png" />
      <div class="absolute inset-0 overflow-hidden">
        <router-view />
      </div>
    </div>
  </div>
</template>
