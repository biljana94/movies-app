<template>
    <!-- Image and text -->
    <nav class="navbar sticky-top navbar-dark bg-primary">
        <router-link class="navbar-brand" :to="{ name: 'movies' }">
            Movies
        </router-link>
        <movie-search></movie-search>
    </nav>
</template>


<script>
import MovieSearch from './MovieSearch.vue';

export default {
    components: {
        MovieSearch,
    },
    
}
</script>

<style>
.navbar {
    border-radius: 0 0 0.5rem 0.5rem;
}
</style>
