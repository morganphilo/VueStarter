import Vue from 'vue'
import Router from 'vue-router'

import dashboard from '@/components/Pages/Dashboard'
import feedback from '@/components/Pages/Feedback'
import reports from '@/components/Pages/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: feedback
    },
    {
      path: '/reports',
      name: 'Reports',
      component: reports
    }
  ],
  mode: 'history'
})
