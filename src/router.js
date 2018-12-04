import VueRouter from 'vue-router';
import Vue from 'vue';

import AppMovies from './components/AppMovies.vue';



Vue.use(VueRouter);


const routes = [
    { path: '/', redirect: '/movies' },
    { path: '/movies', component: AppMovies, name: 'movies' },
];


export const router = new VueRouter({ //importujemo ga: import {router} from...
    mode: 'history',
    routes
});
