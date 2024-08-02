import { createRouter, createWebHistory } from 'vue-router';

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
      }
    ]
  }
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
