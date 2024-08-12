<script setup lang="ts">
defineOptions({ name: 'q-layout' });
defineProps<{ menus: { label: string; value: string }[] }>();

const active = defineModel<string>();
</script>

<template>
  <div class="h-full text-gray-200 flex flex-col relative">
    <transition name="slide-top">
      <div v-if="active" class="absolute z-20 top-0 left-0 w-[500px] h-12 flex flex-col">
        <div class="flex-1 flex items-center bg-gradient-to-r from-neutral-900 from-40%">
          <span class="pl-4 text-xl leading-none">场景信息</span>
        </div>
        <b class="h-px bg-gradient-to-r from-white/30 to-white/0"></b>
      </div>
    </transition>

    <div class="flex-1 flex">
      <transition name="slide-left">
        <div v-if="active" class="w-40 pt-24 flex flex-col">
          <div class="flex-1 space-y-2">
            <div
              v-for="menu in menus"
              :key="menu.value"
              :class="{ 'active w-32 pl-8': active === menu.value }"
              @click="active = menu.value"
              class="backdrop-shallow handle px-4 py-2 w-28 border border-l-0 border-white/30 duration-200 hover:w-32 hover:pl-8"
            >
              {{ menu.label }}
            </div>
          </div>
        </div>
      </transition>

      <div class="flex-1">
        <slot />
      </div>

      <div class="w-80 flex">
        <slot name="aside" />
      </div>
    </div>

    <transition name="slide-bottom">
      <div v-if="active">
        <div class="backdrop-deep h-12 border-t border-white/30 flex items-center px-40">Lorem ipsum dolor sit amet.</div>
      </div>
    </transition>
  </div>
</template>
