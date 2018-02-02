import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        { name: 'testworld', 'path': 'testworld', components: { 'testworld': TestWorld } }
      ]
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
