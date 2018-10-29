import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosTest from '@/components/AxiosTest'
import DeviceListViewer from '@/components/DeviceListViewer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'AxiosTest',
      component: AxiosTest
    },
    {
      path: '/testDevice',
      name: 'DeviceListViewer',
      component: DeviceListViewer
    }
  ]
})
