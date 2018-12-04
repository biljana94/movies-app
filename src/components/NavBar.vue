<template>
    <!-- Image and text -->
    <nav class="navbar navbar-dark bg-primary">

        <router-link class="navbar-brand" :to="{ name: 'movies' }">
            Movies
        </router-link>
    </nav>
</template>


<script>
export default {
    
}
</script>

<style>
.navbar {
    border-radius: 0.5rem;
    margin: 0, auto;
}
</style>
