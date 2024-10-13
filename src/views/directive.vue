<script setup>
import { ref } from 'vue';

const active = ref(0);
const data = [
  { label: '导航', value: 1 },
  {
    label: '乘降',
    value: 2,
    children: [
      { label: '全员上车', value: 21 },
      { label: '全员下车', value: 22 },
      { label: '猎人', value: 23, side: 'Merkava', icon: 'icon' },
      { label: '机械师', value: 24, side: 'Leopard', icon: 'icon' },
      { label: '士兵', value: 25, side: 'Abrams', icon: 'icon' },
      { label: '', value: 26, side: 'Type', icon: 'icon' },
    ],
  },
  { label: '金属探测器', value: 3 },
  { label: '热探测器', value: 4 },
];
</script>

<template>
  <q-list v-if="[0, 2].includes(active)" :data="data" @active="(value) => (active = value)" class="top-1/2 left-1/2 ml-8" />

  <div v-if="active === 0" class="absolute right-2 bottom-2 w-40 h-40 flex justify-center items-center bg-neutral-900/80"></div>

  <div
    v-if="[1, 3, 4].includes(active)"
    :class="{ 'backdrop-blur-sm bg-neutral-900/50': active }"
    @click="active = 0"
    class="h-full flex justify-center items-center"
  >
    <div v-if="active === 1">
      <div class="flex space-x-4">
        <div class="space-y-2">
          <div v-for="n in 14" :key="n" class="group relative">
            <div class="clip h-6 w-40 px-4 flex items-center duration-200 bg-neutral-900/70 hover:bg-neutral-900">地球救济中心</div>
            <img src="../assets/cursor.png" class="absolute top-1/2 -left-4 -translate-y-1/2 hidden group-hover:block" />
          </div>
        </div>
        <div class="w-[520px] bg-neutral-900"></div>
        <div class="space-y-2">
          <div v-for="n in 14" :key="n" class="group relative">
            <div class="clip h-6 w-40 px-4 flex items-center backdrop-blur-sm duration-200 bg-neutral-900/70 hover:bg-neutral-900">地球救济中心</div>
            <img src="../assets/cursor.png" class="absolute top-1/2 -left-4 -translate-y-1/2 hidden group-hover:block" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="active === 3" class="flex space-x-4">
      <div class="w-72 flex flex-col pb-1 backdrop-blur-sm border border-neutral-500 bg-neutral-900/50">
        <div class="flex-1"></div>
        <div class="text-center">木箱</div>
        <q-th :data="['名称', '数量/重量']" />
        <q-tr :data="['220mm大地女神炮', '10.00t']" hover />
        <q-tr :data="['雷暴机关枪', '10.00t']" hover />
        <div class="h-6"></div>
        <div class="h-6"></div>
      </div>
      <div class="w-72 p-1 space-y-1 backdrop-blur-sm border border-neutral-500 bg-neutral-900/50">
        <div v-for="n in 4" :key="n" class="flex items-center space-x-2 duration-200 hover:bg-white/30">
          <q-icon size="large" />
          <div class="flex-1">10/16</div>
          <div class="pr-1">(-100.00t)255.00t 剩余</div>
        </div>
      </div>
    </div>

    <div v-if="active === 4" class="h-2/3 w-1/2 flex flex-col">
      <div class="h-px bg-gradient-to-r from-white/0 via-white/50"></div>
      <div class="flex-1 leading-6 space-y-4 p-8">
        <div class="flex justify-center">-<span class="px-2 text-yellow-500">员工日记</span>-</div>
        <div>说明：Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequatur?</div>
        <div>说明：Corrupti quo enim sunt illo tempore <span class="text-yellow-500">eveniet</span> et? Neque, debitis!</div>
        <div>说明：Aliquam esse animi numquam <span class="text-yellow-500">repellendus</span> id error vel aut! Repudiandae.</div>
      </div>
      <div class="h-px bg-gradient-to-r from-white/0 via-white/50"></div>
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}
</style>
