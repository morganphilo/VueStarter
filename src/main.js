// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VStepper,
  VCard,
  VDivider
} from 'vuetify'

import injector from 'vue-inject'

import MultiLanguage from 'vue-multilanguage'
import './stylus/main.styl'

import App from './App'
import router from './router'
import translations from './language/MultiLanguage'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VStepper,
    VCard,
    VDivider
  }
})

Vue.use(injector)
Vue.use(MultiLanguage, translations)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
