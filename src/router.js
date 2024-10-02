import { createRouter, createWebHistory } from 'vue-router';

const mmRouter = {
  path: '/mm',
  name: 'mm',
  component: () => import('@/views/mm/index.vue'),
};

const mmrRouter = {
  path: '/mmr',
  name: 'mmr',
  component: () => import('@/views/mmr/index.vue'),
  children: [
    {
      path: 'menu',
      name: 'mmr-menu',
      component: () => import('@/views/mmr/menu.vue'),
    },
    {
      path: 'directive',
      name: 'mmr-directive',
      component: () => import('@/views/mmr/directive.vue'),
    },
    {
      path: 'shop',
      name: 'mmr-shop',
      component: () => import('@/views/mmr/shop.vue'),
    },
    {
      path: 'inn',
      name: 'mmr-inn',
      component: () => import('@/views/mmr/inn.vue'),
    },
    {
      path: 'office',
      name: 'mmr-office',
      component: () => import('@/views/mmr/office.vue'),
    },
    {
      path: 'supply',
      name: 'mmr-supply',
      component: () => import('@/views/mmr/supply.vue'),
    },
    {
      path: 'repair',
      name: 'mmr-repair',
      component: () => import('@/views/mmr/repair.vue'),
    },
    {
      path: 'upgrade',
      name: 'mmr-upgrade',
      component: () => import('@/views/mmr/upgrade.vue'),
    },
    {
      path: 'save',
      name: 'mmr-save',
      component: () => import('@/views/mmr/save.vue'),
    },
    {
      path: 'battle',
      name: 'mmr-battle',
      component: () => import('@/views/mmr/battle.vue'),
    },
  ],
};

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    mmRouter,
    mmrRouter,
  ],
});
