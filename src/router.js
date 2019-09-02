import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/seen',
      name: 'seen',
      component: () => import('./views/Seen.vue')
    },
    {
      path: '/',
      name: 'celeberty',
      component: () => import('./views/Celeberty.vue')
    }
  ]
});
