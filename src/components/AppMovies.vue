<template>
    <div class="container">

    </div>
</template>


<script>

import { moviesService } from '../services/MoviesService.js';

export default {
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
