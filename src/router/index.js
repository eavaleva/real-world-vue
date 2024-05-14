import { createRouter, createWebHistory } from 'vue-router'
import EventList  from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      // Parse & set the current page from the router using Function Mode
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'EventDetails',
      props: true,
      component: EventDetails,
    },
    {
      path: '/About',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
      // component: () => import('../views/About.vue')
    },

  ];
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router
