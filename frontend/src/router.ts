import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipe',
      name: 'recipe',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "recipe" */ './views/recipe.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import(/* webpackChunkName: "delivery" */ './views/delivery.vue')
    },
    {
      path: '/workout',
      name: 'workout',
      component: () => import(/* webpackChunkName: "workout" */ './views/workout.vue')
    },
    {
      path: '/fitness',
      name: 'fitness',
      component: () => import(/* webpackChunkName: "fitness" */ './views/fitness.vue')
    },
    {
      path: '/iot',
      name: 'iot',
      component: () => import(/* webpackChunkName: "iot" */ './views/iot.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "info" */ './views/info.vue')
    },
  ]
})
