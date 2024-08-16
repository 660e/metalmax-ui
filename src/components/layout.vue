<script setup lang="ts">
defineOptions({ name: 'q-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();

const active = defineModel<string>();
</script>

<template>
  <div class="h-full flex flex-col relative">
    <transition name="slide-top">
      <div v-if="active" class="absolute z-20 top-0 left-0 w-[500px] h-12 flex flex-col">
        <div class="flex-1 flex items-center pl-4 bg-gradient-to-r from-neutral-900 from-40%">
          <span class="text-xl leading-none">场景信息</span>
        </div>
        <b class="h-px bg-gradient-to-r from-white/30"></b>
      </div>
    </transition>
  </div>
</template>
