<script setup lang="ts">
defineOptions({ name: 'app-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();
</script>

<template>
  <div class="h-full text-white flex">
    <div class="w-60 flex flex-col">
      <div class="h-12 pl-4 flex items-center bg-gradient-to-r from-black/50 backdrop-blur-sm">
        <div class="text-xl leading-none">场景信息</div>
      </div>
      <div class="mt-12 flex-1 space-y-2">
        <div v-for="menu in menus" :key="menu.value" class="px-4 py-2 bg-black/50 backdrop-blur-sm w-36 duration-200 hover:w-40 hover:pl-8">
          <span>{{ menu.label }}</span>
        </div>
      </div>
      <div class="h-12 pl-4 flex items-center bg-gradient-to-r from-black/50 backdrop-blur-sm">
        <div>G: 1234567890</div>
      </div>
    </div>

    <div class="flex-1 bg-green-500/50 backdrop-blur-sm">
      <slot />
    </div>

    <div class="w-60">
      <slot name="aside" />
    </div>
  </div>
</template>
