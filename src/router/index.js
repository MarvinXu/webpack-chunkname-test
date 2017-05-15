import Vue from 'vue'
import Router from 'vue-router'
// const Hello = () => import( /*webpackChunkName: "hello"*/ '@/components/Hello')
const Hello = require.ensure([], function (require) {
	require('@/components/Hello')
}, 'hello')
import(/* webpackChunkName: "chunk1" */'@/components/chunk1.js')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
