<template>
    <div :class="[ selected ? 'bla' : '', 'container' ]">
    
    <h2>{{ movie.title }}</h2>
    <hr>
    <p>Director: {{ movie.director }}</p>
    <img :src="movie.imageUrl">
    <p>Year: {{ movie.releaseDate }}</p>
    <p>Genre: {{ movie.genre }}</p>
    <p>Duration: {{ movie.duration }}</p>
    <!--dugme za selektovanje filmova, @click.once="selectMovie" (samo jednom moze da se klikne, i ova metoda selectMovie emituje metodu iz parent komponente-->
    <button @click.once="selectMovie" type="button" class="btn btn-outline-primary">Select</button>

    </div>
</template>


<script>
export default {
    //preko propsa smo prosledili iz parent komponente (AppMovies.vue) svaki film posebno
    // props: ['movie', 'selected'],
    props: {
        movie: { type: Object },
        selected: { type: Boolean }, //kroz props smo prosledili selected properti koji je false
    },

    // data() {
    //     return {
    //         selected: false,
    //     }
    // },

    methods: {
        selectMovie() {
            this.movie.selected = true; 
            this.$emit('selected', this.movie); //i emituje se metoda iz parent komponente na 'selected'
        },
    },
}
</script>

<style>
.container{
    width: 350px;
    height: 520px;
    border: 1px solid #007bff;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 10px;
    align-content: center;
}

.container img {
    width: 200px;
    height: 200px;
    margin: 0.5rem 0;
}

.bla {
    background-color: #cce0ff;
}
</style>
