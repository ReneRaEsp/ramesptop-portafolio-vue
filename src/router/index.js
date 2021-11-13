import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from './../views/inicio/Index.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /*'../views/About.vue')
  }*/
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
