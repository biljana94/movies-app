<template>
    <div class="container">
        <div class="d-flex align-items-stretch" v-for="(movie, index) in movies" :key="index">
            <movie-row :movie="movie"></movie-row>
        </div>
    </div>
</template>


<script>

import { moviesService } from '../services/MoviesService.js';
import MovieRow from './MovieRow.vue';

export default {
    components: {
        MovieRow,
    },

    data () {
        return {
            movies: [],
        }
    },

    //hook - Filmovi treba da se dobavljaju u `beforeRouteEnter
    beforeRouteEnter(to, from, next) {
        moviesService.getAll()
            .then(response => {
                next(vm => {
                    vm.movies = response.data;
                })
            });
    },
}
</script>

<style>

</style>
