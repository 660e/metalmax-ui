import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: 'menu',
        name: 'app-menu',
        component: () => import('@/views/menu/index.vue')
      },
      {
        path: 'shop',
        name: 'app-shop',
        component: () => import('@/views/map/shop.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});
