<script setup>
defineOptions({ name: 'q-layout' });
defineProps({ menus: Array, title: String });

const active = defineModel();
</script>

<template>
  <div class="h-full relative">
    <div @click="active = 'menu'" class="absolute z-20 top-0 left-0 w-[500px] h-12 flex flex-col">
      <div class="flex-1 flex items-center bg-gradient-to-r from-40% from-neutral-900">
        <div class="pl-4 text-xl leading-none">{{ title || menus.find(menu => menu.value === active)?.label || '场景信息' }}</div>
      </div>
      <b class="h-px bg-gradient-to-r from-40% from-neutral-500"></b>
    </div>

    <div class="absolute top-[98px] left-0 w-32 space-y-1">
      <div
        v-for="menu in menus"
        :key="menu.value"
        :class="[active === menu.value ? 'w-32 pl-8 bg-neutral-900/70' : 'w-28 pl-4']"
        @click="active = menu.value"
        class="py-2 backdrop-blur-sm border border-l-0 border-neutral-500 bg-neutral-900/40 duration-200 hover:w-32 hover:pl-8 hover:bg-neutral-900/70"
      >
        {{ menu.label }}
      </div>
    </div>

    <slot />

    <div class="absolute bottom-0 left-0 backdrop-blur-sm w-full h-12 border-t border-neutral-500 bg-neutral-900/90"></div>
  </div>
</template>
