import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/WeatherPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weather',
    component: HomeView
  },
  {
    path: '/recomendation',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/RecPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
