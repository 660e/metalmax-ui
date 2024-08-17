<script setup lang="ts">
defineOptions({ name: 'q-tr' });

const props = withDefaults(defineProps<{ icon?: boolean; hover?: boolean; data?: [string, string] }>(), { icon: true });
const texts = props.data ? props.data[0].split(',') : [];
const widths = props.data ? props.data[1].split(',') : [];
</script>

<template>
  <div :class="{ 'bg-gradient-to-r': hover }" class="h-6 flex items-center hover:from-white/0 hover:to-white/30">
    <template v-if="data?.length">
      <span
        v-for="(text, index) in texts"
        :key="index"
        :style="{ width: widths[index] ? `${widths[index]}px` : 'auto' }"
        :class="{ 'flex-1': widths[index] === '0', 'justify-end': index }"
        class="flex items-center px-4"
      >
        <q-icon v-if="icon && index === 0" class="mr-2" />
        <span>{{ text }}</span>
      </span>
    </template>
    <slot />
  </div>
</template>
