<script setup>
defineOptions({ name: 'q-layout' });
defineProps({ menus: Array });

const active = defineModel();
</script>

<template>
  <div class="h-full relative">
    <transition name="slide-top">
      <div
        v-if="active"
        @click="active = 'menu'"
        class="absolute z-20 top-0 left-0 w-[500px] h-12 flex items-center bg-gradient-to-r from-40% from-neutral-900"
      >
        <div class="pl-4 text-xl leading-none">
          {{ menus.find(menu => menu.value === active)?.label || '场景信息' }}
        </div>
      </div>
    </transition>

    <transition name="slide-left">
      <div v-if="active" class="absolute top-24 left-0 w-32 space-y-1">
        <div
          v-for="menu in menus"
          :key="menu.value"
          :class="[active === menu.value ? 'w-32 pl-8' : 'w-28 pl-4']"
          @click="active = menu.value"
          class="backdrop-30 py-2 duration-200 hover:w-32 hover:pl-8"
        >
          {{ menu.label }}
        </div>
      </div>
    </transition>

    <slot />

    <transition name="slide-bottom">
      <div v-if="active" class="absolute bottom-0 left-0 backdrop-90 w-full h-12"></div>
    </transition>
  </div>
</template>
