// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Ensure you import the CSS for nProgress
import EventList from '@/views/EventList.vue';
import EventLayout from '@/views/event/Layout.vue';
import EventDetails from '@/views/event/Details.vue';
import EventRegister from '@/views/event/Register.vue';
import EventEdit from '@/views/event/Edit.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';
import { GStore } from '@/stores/store.js'

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
        meta: { requireAuth: true }
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: "/about-us",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route 
    // which is lazy-loaded when the route is visited.

    component: () => import(/* webpackChunkName:"about" */ '@/views/About.vue'),
  },
  {
    path: '/about',
    redirect: { name: 'About' }
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ top: 0 });
        }
      }, 3000);
    });
  }
});

router.beforeEach((to, from, next) => {
  nProgress.start();

   const notAuthorized = true; // Replace with actual authorization logic
  if (to.meta.requireAuth && notAuthorized) {
    GStore.flashMessage = "You are not authorized to access this page";
    setTimeout(() => {
      GStore.flashMessage = "";
    }, 3000);
    next({ name: 'EventList' }); // Redirect to EventList route
  } else {
    next();
  }
});

router.afterEach(() => {
  nProgress.done();
});


export default router;
