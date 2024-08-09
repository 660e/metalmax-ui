<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'q-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();
defineEmits<{ handle: [value: string] }>();

const active = ref();
</script>

<template>
  <div class="h-full text-gray-200 flex relative">
    <div class="absolute top-0 left-0 w-[500px] h-12 flex flex-col">
      <div class="flex-1 flex items-center bg-gradient-to-r from-black/70 to-black/0">
        <span class="pl-4 text-lg leading-none">场景信息</span>
      </div>
      <b class="h-px bg-gradient-to-r from-white/30 to-white/0"></b>
    </div>

    <div class="w-40 pt-24 flex flex-col">
      <div class="flex-1 space-y-2">
        <div
          v-for="menu in menus"
          :key="menu.value"
          :class="{ 'active w-32 pl-8': active === menu.value }"
          @click="
            $emit('handle', menu.value);
            active = menu.value;
          "
          class="backdrop handle px-4 py-2 w-28 border border-l-0 border-white/30 duration-200 hover:w-32 hover:pl-8"
        >
          {{ menu.label }}
        </div>
      </div>
    </div>

    <div class="flex-1">
      <slot />
    </div>

    <div class="w-80 flex">
      <slot name="aside" />
    </div>
  </div>
</template>
