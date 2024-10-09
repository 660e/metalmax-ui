<script setup>
defineOptions({ name: 'q-team' });

const url = (type, index) => new URL(`../assets/characters/${type}${index + 1}.png`, import.meta.url);
</script>

<template>
  <q-panel :size="240" lb>
    <div class="absolute top-0 right-4 h-12 flex justify-end items-center">
      <div>999999999</div>
      <q-icon class="ml-2" />
    </div>

    <div v-for="(actor, index) in ['猎人', '机械师', '士兵', '波奇']" :key="index" class="px-4 py-2 space-y-2">
      <div class="flex justify-between items-center">
        <div>{{ actor }}</div>
        <div>Lv.255</div>
      </div>
      <div class="h-0.5 flex bg-white/30"><b class="w-1/2 bg-cyan-500"></b></div>
      <div class="flex space-x-2">
        <div class="w-8 h-16 flex justify-center items-center">
          <img :src="url('a', index)" class="absolute" />
        </div>
        <div class="flex-1 flex flex-col">
          <div class="flex-1 flex flex-col">
            <div class="flex justify-between items-center"><span class="text-neutral-400 text-xs leading-none">HP</span><span>10000/99999</span></div>
            <div class="flex-1 flex items-center">
              <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/50"></div>
              <div class="flex-1 flex h-2 border-y border-neutral-900/50"><b class="bg-green-700 w-1/2"></b></div>
              <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/50"></div>
            </div>
          </div>
          <div class="flex-1 flex space-x-2">
            <div class="h-8 flex justify-center items-center">
              <img :src="url('t', index)" />
            </div>
            <div class="flex-1 flex flex-col">
              <div class="flex justify-between items-center">
                <span class="text-neutral-400 text-xs leading-none">SP</span><span>10000/99999</span>
              </div>
              <div class="flex-1 flex items-center">
                <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/50"></div>
                <div class="flex-1 flex h-2 border-y border-neutral-900/50"><b class="bg-yellow-700 w-1/2"></b></div>
                <div class="w-px h-full bg-gradient-to-b from-white/0 via-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-panel>
</template>
