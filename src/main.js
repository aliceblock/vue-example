import Vue from 'vue'
import VueRouter from 'vue-router'

import '!script!jquery'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import Following from './components/Following'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/following', component: Following },
    { path: '*', component: '/' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
  }
})
