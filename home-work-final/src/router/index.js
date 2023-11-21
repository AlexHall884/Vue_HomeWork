import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPageComp from '../pages/IndexPageComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: IndexPageComp
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/BlogPageComp.vue')
  },
  {
    path: '/blogDetails',
    name: 'BlogDetails',
    component: () => import('../pages/BlogDetailsPageComp.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../pages/ProjectPageComp.vue')
  },
  {
    path: '/projectDetails',
    name: 'projectDetails',
    component: () => import('../pages/ProjectDetailsComp.vue')
  },
  {
    path: '/*',
    name: 'notFound',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
