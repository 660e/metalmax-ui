<template>
  <q-layout title="记录中心">
    <q-panel />
    <div class="absolute inset-0 flex flex-col justify-center items-center space-y-4">
      <div
        v-for="i in 3"
        :key="i"
        class="h-auto w-[750px] px-4 relative bg-gradient-to-r from-neutral-900/0 group text-neutral-400 via-neutral-900/50 hover:via-neutral-900/80 hover:text-neutral-200"
        hover
      >
        <i class="absolute -top-1 left-44 text-9xl blur-sm text-white/20 group-hover:blur-none">{{ i }}</i>
        <div class="h-px w-full bg-gradient-to-r from-white/0 via-white/50"></div>
        <div class="w-full p-2 flex">
          <div class="p-2 space-y-4">
            <div>2025-01-01 00:00:00</div>
            <div class="pl-4 text-lg leading-none">罪恶郊野</div>
          </div>
          <div class="flex-1 space-y-2">
            <div class="flex justify-end space-x-2">
              <div v-for="n in 4" :key="n" class="w-8 h-16 bg-red-500"></div>
            </div>
            <div class="flex justify-end space-x-2">
              <q-icon v-for="n in 12" :key="n" size="large" />
            </div>
          </div>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-white/0 via-white/50"></div>
      </div>
    </div>
  </q-layout>
</template>
