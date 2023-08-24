import { createRouter, createWebHistory } from 'vue-router'
import {HomeView,AboutView,SkillView} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:HomeView
    },
    {
      path:'/about',
      name:'about',
      component:AboutView
    },
    {
      path:'/skill',
      name:'skill',
      component:SkillView
    }
  ]
})

export default router
