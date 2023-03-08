import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import EleTest2 from '@/components/EleTest2'
import EleTest3 from '@/components/EleTest3'
import EleTest4 from '@/components/EleTest4'
import EleTest5 from '@/components/EleTest5'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import VueLink from '@/components/VueLink'
import MulDiv from '@/components/MulDiv'
import AllEle from '@/components/AllEle'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'AllEle',
    component: AllEle
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/EleTest2',
    name: 'EleTest2',
    component: EleTest2
  },
  {
    path: '/EleTest3',
    name: 'EleTest3',
    component: EleTest3
  },
  {
    path: '/EleTest4',
    name: 'EleTest4',
    component: EleTest4
  },
  {
    path: '/EleTest5',
    name: 'EleTest5',
    component: EleTest5
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: Icon
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button
  },
  {
    path: '/VueLink',
    name: 'VueLink',
    component: VueLink
  },
  {
    path: '/MulDiv',
    name: 'MulDiv',
    component: MulDiv
  }
]

const router = new Router({
  routes
})

export default router;