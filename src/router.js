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
