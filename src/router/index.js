import Vue from 'vue';
import Router from 'vue-router'

const Home = () => import('../view/home/Home')
const New = () => import('../view/new/New')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/new'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/new',
    component: New
  },
]

export default new Router({
  routes,
  mode: 'history'
})