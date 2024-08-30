<script setup>
defineOptions({ name: 'q-tr' });
defineProps({ data: Array, hover: Boolean });
</script>

<template>
  <div :class="{ 'bg-gradient-to-r from-white/0': hover }" class="h-6 px-4 flex items-center hover:to-white/20">
    <slot v-if="$slots.default" />
    <template v-else>
      <q-icon class="mr-2" />
      <span v-for="(e, i) in data" :key="i" :class="{ 'flex-1': !i, 'w-auto': i === 1, 'w-[100px] text-right ml-px': i > 1 }">{{ e }}</span>
    </template>
  </div>
</template>
