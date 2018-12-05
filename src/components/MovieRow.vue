<template>
    <div class="container">
    
    <h5>{{ movie.title }}</h5>
    <p>Director: {{ movie.director }}</p>
    <img class="img-thumbnail" :src="movie.imageUrl">
    <p>Year: {{ movie.releaseDate }}</p>
    <p>Genre: {{ movie.genre }}</p>
    <p>Duration: {{ movie.duration }}</p>

    </div>
</template>


<script>
export default {
    //preko propsa smo prosledili iz parent komponente (AppMovies.vue) svaki film posebno
    props: ['movie'],
}
</script>

<style>
.container{
    width: 350px;
    height: 400px;
    border: 1px solid #007bff;
    border-radius: 0.5rem;
    margin: 1rem;
}

.container img {
    width: 200px;
    height: 200px;
}
</style>
