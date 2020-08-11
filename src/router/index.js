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
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: '/menu',
          name: 'Menu',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
        },

      ]
      
    },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
