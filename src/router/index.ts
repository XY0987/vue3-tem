import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import noAuthRoutes from './noAuth'

const routes: Array<RouteRecordRaw> = [...noAuthRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
