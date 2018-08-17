import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Route Templates

import Home from '@/components/Home'
import Sample from '@/components/Sample'

// Helper

import smoothScroll from '../helpers/smoothScroll'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    
    const transitionTime = 800;
    
    return new Promise((resolve, reject) => {
      
      // Immediately smooth scroll to top of page
      
      setTimeout(() => {
        smoothScroll(0, transitionTime);
      }, 0);
      
      // Reset scroll behavior positioning so we have a fresh reset point
      
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, transitionTime + 100);
      
    });
    
  }
  
})
