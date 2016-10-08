/* eslint-disable*/

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource) // Web requests, Vue plugin

new Vue({
  el: '#app',
  components: {
    App
  }
})
