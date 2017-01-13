/* eslint-disable*/

import Vue from 'vue'
import App from './App.vue'

// Axios doesn't include Promise polyfill (e.g. 'es6-promise'), if you need one, here is a good place to initiate it

new Vue({
  el: '#app',
  components: {
    App
  }
})
