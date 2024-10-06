<script setup>
import { ref } from 'vue';

defineOptions({ name: 'q-list' });
defineProps({ data: Array });

const emit = defineEmits({ active: (value) => typeof value === 'number' });
const active = ref(0);
const select = (value) => {
  active.value = value === active.value ? 0 : value;
  emit('active', active.value);
};
</script>

<template>
  <div class="absolute z-10 top-0 left-0">
    <div v-for="(item, index) in data" :key="index" @click="select(item.value)" class="w-32">
      <div v-if="index" class="h-px bg-neutral-500"></div>
      <div class="group relative">
        <div
          :class="{ 'opacity-50': active }"
          class="clip h-6 pl-4 flex items-center backdrop-blur-sm duration-200 bg-neutral-900/70 hover:bg-neutral-900"
        >
          {{ item.label }}
        </div>
        <img src="../assets/cursor.png" class="absolute top-1/2 -left-4 -translate-y-1/2 hidden group-hover:block" />
      </div>
      <div v-if="active === item.value && item.children?.length" class="absolute z-20 top-2 left-2">
        <div v-for="(e, i) in item.children" :key="i" class="w-64">
          <div v-if="i" class="h-px bg-neutral-500"></div>
          <div class="group relative">
            <div class="clip h-6 px-4 flex items-center space-x-2 backdrop-blur-sm duration-200 bg-neutral-900/70 hover:bg-neutral-900">
              <div>{{ e.label }}</div>
              <div class="flex-1"></div>
              <div>{{ e.side }}</div>
              <q-icon v-if="e.icon" />
            </div>
            <img src="../assets/cursor.png" class="absolute top-1/2 -left-4 -translate-y-1/2 hidden group-hover:block" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}
</style>
