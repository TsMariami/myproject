import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/signin',
      name: 'singin',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/signup2',
      name: 'signup2',
      component: () => import('../views/SignUpView2.vue')
    },    
    {
      path: '/signup3',
      name: 'signup3',
      component: () => import('../views/SignUpView3.vue')
    },
    {
      path: '/gallery',
      name: 'galery',
      component: () => import('../views/GalleryView.vue')
    },
  ]
})

export default router
