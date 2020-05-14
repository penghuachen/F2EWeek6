import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home-page',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
