import Vue from 'vue'
import Router from 'vue-router'
// const Hello = () => import( /*webpackChunkName: "hello"*/ '@/components/Hello')

// require.ensure naming works fine
const Hello = require.ensure([], function (require) {
	require('@/components/Hello')
}, 'hello')


// import naming doesn't work
// I removed alias '@' for test
import(/* webpackChunkName: "chunk1" */'../components/chunk1.js')

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
