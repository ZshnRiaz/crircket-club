import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/player-detail/:id',
      name: 'player-detail',
      component: () => import('../views/Players/PlayerDetail.vue'),
    },
    {
      path: '/player-list',
      name: 'player-list',
      component: () => import('../views/Players/PlayerList.vue'),
    },
    {
      path: '/team-statics',
      name: 'team-statics',
      component: () => import('../views/Club/Club.vue'),
    },
  ],
})

export default router
