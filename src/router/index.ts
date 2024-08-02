import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: 'map/menu',
        name: 'map-menu',
        component: () => import('@/views/map/index.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
