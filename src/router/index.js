import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../containers/container1/Layout.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children: [
            {
              path: 'hello',
              name: 'Hello',
              component: () => import('../components/HelloWorld.vue')
            }
          ]
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/About.vue')
        },
        {
          path: '/menu',
          name: 'Menu',
          component: () => import('../views/Menu.vue')
        },

      ]
      
    },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
