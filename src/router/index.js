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
import NotFound from '@/components/404'
import AxiosTest from '@/components/AxiosTest'
import BaseDemo from '@/components/BaseDemo'
import MountedDemo from '@/components/MountedDemo'
import NavMenu from '@/components/NavMenu'
import TableDemo from '@/components/TableDemo'
import FormDemo from '@/components/FormDemo'
import CopyDemo from '@/components/CopyDemo'
import MyFormDemo from '@/components/MyFormDemo'

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
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/axios',
    name: 'AxiosTest',
    component: AxiosTest
  },
  {
    path: '/BaseDemo',
    name: 'BaseDemo',
    component: BaseDemo
  },
  {
    path: '/MountedDemo',
    name: 'MountedDemo',
    component: MountedDemo
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: NavMenu
  },
  {
    path: '/TableDemo',
    name: 'TableDemo',
    component: TableDemo
  },
  {
    path: '/FormDemo',
    name: 'FormDemo',
    component: FormDemo
  },
  {
    path: '/CopyDemo',
    name: 'CopyDemo',
    component: CopyDemo
  },
  {
    path: '/MyFormDemo',
    name: 'MyFormDemo',
    component: MyFormDemo
  }
]

const router = new Router({
  routes
})

export default router;