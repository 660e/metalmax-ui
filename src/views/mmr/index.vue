<script setup>
import { ref } from 'vue';

const v = ref(false);
const m = [
  { l: '地图菜单', v: 'mmr-menu' },
  { l: '地图指令', v: 'mmr-directive' },
  { l: '装备店/道具店', v: 'mmr-shop' },
  { l: '旅馆', v: 'mmr-inn' },
  { l: '猎人办事处', v: 'mmr-office' },
  { l: '补给店', v: 'mmr-supply' },
  { l: '修理店', v: 'mmr-repair' },
  { l: '改造店', v: 'mmr-upgrade' },
  { l: '记录中心', v: 'mmr-save' },
  { l: '战斗场景', v: 'mmr-battle' },
];
</script>

<template>
  <div @click="v = !v" class="h-screen font-mono text-sm leading-none select-none flex justify-center items-center bg-gray-800 text-neutral-200">
    <div :class="[v ? 'left-0' : '-left-40']" class="fixed z-50 top-0 h-full w-40 p-4 space-y-4 duration-200 bg-neutral-600">
      <div
        v-for="e in m"
        :key="e.v"
        :class="{ 'text-blue-400': e.v === $route.name }"
        @click="
          () => {
            $router.push({ name: e.v });
            v = false;
          }
        "
        class="cursor-pointer duration-200 hover:text-blue-400"
      >
        {{ e.l }}
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
