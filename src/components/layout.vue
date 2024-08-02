<script setup lang="ts">
defineOptions({ name: 'app-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();
</script>

<template>
  <div class="h-full text-white flex">
    <div class="w-60 flex flex-col">
      <div class="h-12">场景信息</div>
      <div class="flex-1 space-y-2">
        <div v-for="menu in menus" :key="menu.value" class="px-4 py-2 bg-black/50 backdrop-blur w-36 duration-200 hover:w-40 hover:pl-8">
          <span>{{ menu.label }}</span>
        </div>
      </div>
      <div class="h-12">金钱</div>
    </div>

    <div class="flex-1 bg-green-500/50">
      <slot />
    </div>

    <div class="w-60 bg-blue-500/50">
      <slot name="aside" />
    </div>
  </div>
</template>
