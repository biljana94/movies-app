<template>
    <div class="container card">
        

    <div class="card" style="width: 18rem;">
        <h3>{{ movie.title }}</h3>
        <p>Director: {{ movie.director }}</p>
        <img class="card-img-top" :src="movie.imageUrl">

        <div class="card-body">
            <p class="card-text">{{ movie.releaseDate }}</p>
            <p class="card-text">{{ movie.genre }}</p>
            <p class="card-text">{{ movie.duration }}</p>
        </div>
    </div>

    </div>
</template>


<script>
export default {
    props: ['movie'],
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
}

/* .container img {
    width: 100px;
    height: 100px;
} */
</style>
