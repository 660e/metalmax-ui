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
          name: 'app-menu',
          component: () => import('@/views/menu.vue')
        },
        {
          path: 'directive',
          name: 'app-directive',
          component: () => import('@/views/directive.vue')
        },
        {
          path: 'shop',
          name: 'app-shop',
          component: () => import('@/views/shop.vue')
        },
        {
          path: 'inn',
          name: 'app-inn',
          component: () => import('@/views/inn.vue')
        },
        {
          path: 'office',
          name: 'app-office',
          component: () => import('@/views/office.vue')
        },
        {
          path: 'supply',
          name: 'app-supply',
          component: () => import('@/views/supply.vue')
        },
        {
          path: 'repair',
          name: 'app-repair',
          component: () => import('@/views/repair.vue')
        },
        {
          path: 'upgrade',
          name: 'app-upgrade',
          component: () => import('@/views/upgrade.vue')
        },
        {
          path: 'save',
          name: 'app-save',
          component: () => import('@/views/save.vue')
        }
      ]
    }
  ]
});
