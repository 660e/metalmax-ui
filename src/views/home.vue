<script lang="ts" setup>
defineOptions({ name: 'app-home' });

const routes = [
  { label: '地图菜单', value: 'menu' },
  { label: '装备店', value: 'equipment' }
];
</script>

<template>
  <div class="h-screen text-base leading-none bg-slate-700 flex">
    <div class="text-white p-4 flex flex-col space-y-2">
      <div v-for="route in routes" :key="route.value">{{ route.label }}</div>
      <div class="flex-1"></div>
      <div>传统</div>
      <div>现代</div>
      <div>网格</div>
    </div>

    <div class="flex-1 flex justify-center items-center" style="font-family: mm">
      <div class="relative">
        <img src="@/assets/bg-mm.png" />
        <div class="absolute inset-0"></div>
      </div>
    </div>
  </div>
</template>
