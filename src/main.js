// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuejsDialog from 'vuejs-dialog'

Vue.config.productionTip = false
Vue.use(VuejsDialog)

require('../node_modules/materialize-css/dist/js/materialize.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
