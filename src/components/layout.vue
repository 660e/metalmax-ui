<script setup lang="ts">
defineOptions({ name: 'q-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();
</script>

<template>
  <div class="h-full text-gray-200 flex">
    <div class="w-40 flex flex-col">
      <div class="h-12 pl-4 flex items-center bg-gradient-to-r from-black/70 to-black/0">
        <div class="text-lg leading-none">场景信息</div>
      </div>
      <div class="mt-12 flex-1 space-y-2">
        <div v-for="menu in menus" :key="menu.value" class="backdrop active px-4 py-2 w-28 duration-200 hover:w-32 hover:pl-8">
          {{ menu.label }}
        </div>
      </div>
    </div>

    <div class="flex-1 bg-green-500/50">
      <slot />
    </div>

    <div class="w-80 flex">
      <slot name="aside" />
    </div>
  </div>
</template>
