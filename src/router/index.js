import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/main-view'
    },
    {
      path: '/main-view',
      name: 'main-view',
      component: resolve => require(['../views/main-view.vue'], resolve)
    }
  ]
});
