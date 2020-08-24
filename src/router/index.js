/*
 * @Author: SHEN
 * @Date: 2020-08-24 09:04:07
 * @LastEditors: SHEN
 * @LastEditTime: 2020-08-24 14:56:22
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'loading',
        name: 'loading',
        component: resolve => require(["@/views/Loading.vue"], resolve)
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
