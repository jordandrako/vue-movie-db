import Vue from 'vue';
import VueRouter from 'vue-router';
import MoviesList from '@/views/MoviesList.vue';
import MovieDetails from '@/views/MovieDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Movies List',
    // component: () => import('@/views/MoviesList'),
    component: MoviesList,
  },
  {
    path: '/movie/:id',
    name: 'Movie Details',
    // component: () => import('@/views/MovieDetails'),
    component: MovieDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
