<script setup>
import { onMounted, ref } from 'vue';

const active = ref();

onMounted(() => (active.value = 'menu'));
</script>

<template>
  <q-layout v-model="active" :menus="[]">
    <div class="absolute inset-0 flex flex-col space-y-2 justify-center items-center">
      <div class="w-[500px] flex backdrop-1">
        <div class="text-4xl">1</div>
        <div class="flex-1">
          <div>2024-01-01 12:00:00</div>
          <div>罪恶郊野</div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-end space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
          <div class="flex space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
        </div>
      </div>
      <div class="w-[500px] flex backdrop-1">
        <div class="text-4xl">1</div>
        <div class="flex-1">
          <div>2024-01-01 12:00:00</div>
          <div>罪恶郊野</div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-end space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
          <div class="flex space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
        </div>
      </div>
      <div class="w-[500px] flex backdrop-1">
        <div class="text-4xl">1</div>
        <div class="flex-1">
          <div>2024-01-01 12:00:00</div>
          <div>罪恶郊野</div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-end space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
          <div class="flex space-x-2">
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
            <q-icon></q-icon>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>
