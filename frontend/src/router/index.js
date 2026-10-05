import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gamification from '../views/Gamification.vue'
import AiAdvisor from '../views/AiAdvisor.vue'
import Reports from '../views/Reports.vue'
import Bank from '../views/Bank.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gamification', component: Gamification },
  { path: '/ai-advisor', component: AiAdvisor },
  { path: '/reports', component: Reports },
  { path: '/bank', component: Bank },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
