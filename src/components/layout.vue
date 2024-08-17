<script setup lang="ts">
defineOptions({ name: 'q-layout' });
defineProps<{ menus: { label: string; value: string }[]; full: boolean }>();

const active = defineModel<string>();
</script>

<template>
  <div class="h-full flex flex-col relative">
    <transition name="slide-top">
      <div v-if="active" class="absolute z-20 top-0 left-0 w-[500px] h-12 flex flex-col">
        <div class="flex-1 flex items-center pl-4 bg-gradient-to-r from-neutral-900 from-40%">
          <span class="text-xl leading-none">{{ menus.find(menu => menu.value === active)?.label || '场景信息' }}</span>
        </div>
        <b class="h-px bg-gradient-to-r from-white/30"></b>
      </div>
    </transition>

    <div class="flex-1 flex">
      <transition name="slide-left">
        <div v-if="active" class="w-40 pt-24 space-y-1">
          <div
            v-for="menu in menus"
            :key="menu.value"
            :class="[active === menu.value ? 'w-32 pl-8' : 'w-28 pl-4']"
            @click="active = menu.value"
            class="panel-1 py-2 border border-white/30 border-l-0 duration-200 hover:w-32 hover:pl-8"
          >
            {{ menu.label }}
          </div>
        </div>
      </transition>

      <div class="flex-1 flex">
        <slot />
      </div>

      <div :class="[full ? 'w-0' : 'w-80']" class="flex delay-100">
        <slot name="aside" />
      </div>
    </div>

    <transition name="slide-bottom">
      <div v-if="active" class="panel-2 h-12 border-t border-white/30"></div>
    </transition>
  </div>
</template>
