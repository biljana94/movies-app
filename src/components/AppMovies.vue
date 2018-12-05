<template>
    <div class="default">
        <!--ako ima filmova u nizu (v-if="filteredMovies.length"), 
        filteredMovies je computed properti koji pozivamo kao svaki drugi properti ako treba da ga pozovemo --> 
        <template v-if="filteredMovies.length">
            <!--uzimamo filmo iz filteredMovies-->
            <div class="" v-for="(movie, index) in filteredMovies" :key="index">
                <!--ispisujemo filmove ciji je ispis u MovieRow.vue komponenti, 
                zato moramo bind-ovati movie *:movie(ono sto smo prosledili kroz props)="movie(movie iz v-for petlje)"*-->
                <movie-row :movie="movie"></movie-row>
            </div>
        </template>

        <!--ako nema filmova-->
        <template v-else>
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4">Notice</h1>
                <p class="lead">The movie you are searching for does not exist in our database.</p>
            </div>
        </template>
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

            term: '',

        }
    },

    //hook - Filmovi treba da se dobavljaju u `beforeRouteEnter`
    //`beforeRouteEnter` nema 'this' pa zato u next() pisemo 'vm' - to nam je kao this
    beforeRouteEnter(to, from, next) {
        moviesService.getAll()
            .then(response => {
                next(vm => {
                    vm.movies = response.data;
                })
            });
    },

    //
    created() {
        //nad window pozivamo EventHub koji osluskuje input polje iz MovieSearch.vue
        window.EventHub.$on('search', (term) => {//search-ujemo(parametar) termin(term) i imamo callback fnc
            this.term = term; //term koji korisnik unese stavljamo u nas this.term iz data(){return{term: ''}} da mozemo da izbacimo rezultate
        })
    },

    computed: {
        //filtrirali smo niz 'movies' i svaki film koji korisnik unese u search polje uziamo pomocu this.term
        filteredMovies() {
            return this.movies.filter(movie =>  movie.title.toLowerCase().includes(this.term.toLowerCase()));
        }
    },
}
</script>

<style>
.default {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 2rem;
}

.jumbotron {
    width: 80%;
    display: block;
    margin: 0 auto;
    border: none;
}
</style>
