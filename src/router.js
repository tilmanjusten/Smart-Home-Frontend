import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/lights',
      alias: '/',
      name: 'lights',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "lights" */ './views/Lights.vue')
    },
    {
      path: '/climate',
      name: 'climate',
      component: () => import(/* webpackChunkName: "climate" */ './views/Climate.vue')
    },
    {
      path: '/climate-trend',
      name: 'climate-trend',
      component: () => import(/* webpackChunkName: "climate-trend" */ './views/ClimateTrend.vue')
    },
    {
      path: '/plants',
      name: 'plants',
      component: () => import(/* webpackChunkName: "plants" */ './views/Plants.vue')
    },
    {
      path: '/plants-trend',
      name: 'plants-trend',
      component: () => import(/* webpackChunkName: "plants-trend" */ './views/PlantsTrend.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    }
  ]
})
