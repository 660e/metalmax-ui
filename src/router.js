import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: 'menu',
          name: 'mmr-menu',
          component: () => import('@/views/menu.vue'),
        },
        {
          path: 'directive',
          name: 'mmr-directive',
          component: () => import('@/views/directive.vue'),
        },
        {
          path: 'shop',
          name: 'mmr-shop',
          component: () => import('@/views/shop.vue'),
        },
        {
          path: 'inn',
          name: 'mmr-inn',
          component: () => import('@/views/inn.vue'),
        },
        {
          path: 'office',
          name: 'mmr-office',
          component: () => import('@/views/office.vue'),
        },
        {
          path: 'supply',
          name: 'mmr-supply',
          component: () => import('@/views/supply.vue'),
        },
        {
          path: 'repair',
          name: 'mmr-repair',
          component: () => import('@/views/repair.vue'),
        },
        {
          path: 'upgrade',
          name: 'mmr-upgrade',
          component: () => import('@/views/upgrade.vue'),
        },
        {
          path: 'save',
          name: 'mmr-save',
          component: () => import('@/views/save.vue'),
        },
        {
          path: 'battle',
          name: 'mmr-battle',
          component: () => import('@/views/battle.vue'),
        },
      ],
    },
  ],
});
