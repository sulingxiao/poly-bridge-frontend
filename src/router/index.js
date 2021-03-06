import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('@/views/transactions'),
  },
];

const router = new VueRouter({
  base: process.env.VUE_APP_PUBLIC_PATH,
  mode: 'history',
  routes: routes.filter(route => route),
});

router.beforeEach((to, from, next) => {
  return next();
});

export default router;
