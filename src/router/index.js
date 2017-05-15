import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Critique from '@/components/Critique'
import Invisible from '@/components/Invisible'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/critique',
      name: 'Critique',
      component: Critique
    },
    {
      path: '/invisible',
      name: 'Invisible',
      component: Invisible
    }
  ]
})
