<script setup lang="ts">
import Mock from 'mockjs';

defineOptions({ name: 'menu-equip' });
</script>

<template>
  <div class="absolute inset-0 pl-40 pb-12 flex">
    <div class="panel-2 border-x border-white/30 pt-24 px-px space-y-px">
      <div v-for="item in 8" :key="item" class="w-9 h-9 bg-red-500"></div>
    </div>
    <div class="panel-1 w-[600px] border-r border-white/30 pt-12 flex flex-col">
      <q-tr />
      <q-tr :icon="false" :data="['角色名称', '0']" />
      <q-thead :data="['装备部位', '0']" />
      <q-tr hover>
        <q-tr :data="['加农炮', '0']" class="w-40" />
        <q-tr :data="[Mock.Random.cword(4, 9), '0']" class="flex-1" />
      </q-tr>
      <q-tr hover>
        <q-tr :data="['机枪', '0']" class="w-40" />
        <q-tr :data="[Mock.Random.cword(4, 9), '0']" class="flex-1" />
      </q-tr>
      <q-tr hover>
        <q-tr :data="['特殊装备', '0']" class="w-40" />
        <q-tr :data="[Mock.Random.cword(4, 9), '0']" class="flex-1" />
      </q-tr>
      <q-tr />
      <q-tr />
      <q-tr hover>
        <q-tr :data="['控制装置', '0']" class="w-40" />
        <q-tr :data="[Mock.Random.cword(4, 9), '0']" class="flex-1" />
      </q-tr>
      <q-tr hover>
        <q-tr :data="['引擎', '0']" class="w-40" />
        <q-tr :data="[Mock.Random.cword(4, 9), '0']" class="flex-1" />
      </q-tr>
      <div class="flex-1"></div>
      <q-thead :data="['说明', '0']" />
      <div class="flex">
        <div class="flex-1">
          <q-tr :data="[`攻击力,(+${Mock.Random.integer(50, 200)})${Mock.Random.integer(50, 2000)}`, '0,0']" />
          <q-tr :data="[`守备力,${Mock.Random.integer(0, 255)}`, '0,0']" />
          <q-tr :data="[`命中率,(${Mock.Random.integer(-30, 0)}%)${Mock.Random.integer(0, 30)}%`, '0,0']" />
          <q-tr :data="[`会心率,${Mock.Random.integer(0, 30)}%`, '0,0']" />
          <q-tr :data="[`重量,(+${Mock.Random.integer(1, 99)}.00t)${Mock.Random.integer(1, 99)}.00t`, '0,0']" />
        </div>
        <b class="vr"></b>
        <div class="flex-1">
          <q-tr :data="['类型,加农炮', '0,0']" />
          <q-tr :data="['范围,(3连射)4连射', '0,0']" />
          <q-tr :data="['属性,通常', '0,0']" />
          <q-tr :data="['状态,正常', '0,0']" />
          <q-tr :data="[`弹仓,(${Mock.Random.integer(0, 99)}/99)${Mock.Random.integer(0, 99)}/99`, '0,0']" />
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
    <div class="panel-1 w-[300px] border-l border-white/30 flex flex-col">
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr :icon="false" :data="['后备箱', '0']" />
      <q-thead :data="['名称,重量', '0,100']" />
      <q-tr :data="['卸下', '0']" hover />
      <q-tr v-for="n in 5" :key="n" :data="[`${Mock.Random.cword(4, 9)},${Mock.Random.integer(1, 99)}.00t`, '0,100']" hover />
      <div class="flex-1"></div>
      <q-thead :data="['预览', '0']" />
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr />
      <q-tr />
    </div>
  </div>
</template>
