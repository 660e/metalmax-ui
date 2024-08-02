<script setup lang="ts">
defineOptions({ name: 'app-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();
</script>

<template>
  <div class="h-full flex">
    <div class="w-60 bg-red-500/50">
      <div>
        <div v-for="menu in menus" :key="menu.value">{{ menu.label }}</div>
      </div>
    </div>

    <div class="flex-1 bg-green-500/50">
      <slot />
    </div>

    <div class="w-60 bg-blue-500/50">
      <slot name="aside" />
    </div>
  </div>
</template>
