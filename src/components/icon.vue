<script setup>
defineOptions({ name: 'q-icon' });
defineProps({ size: String, name: String });

const url = (name) => new URL(`../assets/icons/${name}.png`, import.meta.url);
</script>

<template>
  <div
    :class="[size === 'large' ? 'w-8 h-8' : 'w-5 h-5', name ? 'opacity-25' : 'bg-red-500']"
    class="flex justify-center items-center relative duration-200 group hover:opacity-100"
  >
    <img v-if="name" :src="url(name)" />
    <img v-if="size === 'large'" src="../assets/cursor.png" class="absolute top-1/2 -left-6 -translate-y-1/2 hidden group-hover:block" />
  </div>
</template>
