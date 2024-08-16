<script setup lang="ts">
defineOptions({ name: 'q-tr' });
withDefaults(defineProps<{ icon?: boolean; data?: [string[], number[]] }>(), { icon: true });
</script>

<template>
  <div class="h-6 flex items-center">
    <template v-if="data?.length">
      <span
        v-for="(text, index) in data[0]"
        :key="index"
        :style="{ width: data[1][index] ? `${data[1][index]}px` : 'auto' }"
        :class="{ 'flex-1': data[1][index] === 0, 'justify-end': index }"
        class="flex items-center px-4"
      >
        <q-icon v-if="icon && index === 0" class="mr-2" />
        <span>{{ text }}</span>
      </span>
    </template>
  </div>
</template>
