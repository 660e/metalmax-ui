<script setup>
defineOptions({ name: 'q-tr' });
defineProps({ data: Array, hover: Boolean, icon: String, up: Boolean, down: Boolean });
</script>

<template>
  <div :class="{ 'bg-gradient-to-r from-white/0': hover }" class="h-6 pl-4 flex items-center relative via-95% hover:via-white/20">
    <slot v-if="$slots.default" />
    <template v-else>
      <q-icon v-if="icon !== ''" class="mr-2" />
      <span
        v-for="(e, i) in data"
        :key="i"
        :class="{ 'flex-1': !i, 'w-auto pr-4': i === 1, 'text-neutral-400': i === 1 && down, 'text-sky-400': i === 1 && up, 'w-[100px] text-right ml-px pr-4': i > 1 }"
      >
        {{ e }}
      </span>
    </template>
  </div>
</template>
