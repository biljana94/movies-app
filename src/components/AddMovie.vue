<template>

    <div class="row justify-content-md-center">
        <form @submit.prevent="addMovie">
            <br>
            <h4>Add New Movie</h4>
            <br>
            <div class="form-group row">
                <label>Title</label>
                <input v-model="movie.title" class="form-control" type="text" placeholder="Enter title" minlength="2" required>

                <!--pomocu slotova menjamo errore u zavisnosti koji je-->
                <form-error v-if="errors.title">
                    {{ errors.title[0] }}
                </form-error>
            </div>

            <div class="form-group row">
                <label>Director</label>
                <input v-model="movie.director" class="form-control" type="text" placeholder="Enter director" minlength="2" required>

                <form-error v-if="errors.director">
                    {{ errors.director[0] }}
                </form-error>
            </div>

            <div class="form-group row">
                <label>Image Url</label>
                <input v-model="movie.imageUrl" class="form-control" type="url" placeholder="Enter image url" required>

                <form-error v-if="errors.imageUrl">
                    {{ errors.imageUrl[0] }}
                </form-error>
            </div>

            <div class="form-group row">
                <label>Release Date</label>
                <input v-model="movie.releaseDate" class="form-control" type="text" placeholder="Y-m-d" required>

                <form-error v-if="errors.releaseDate">
                    {{ errors.releaseDate[0] }}
                </form-error>
            </div>

            <div class="form-group row">
                <label>Genre</label>
                <input v-model="movie.genre" class="form-control" type="text" placeholder="Enter genre" required>

                <form-error v-if="errors.genre">
                    {{ errors.genre[0] }}
                </form-error>
            </div>

            <div class="form-group row">
                <label>Duration</label>
                <input v-model="movie.duration" class="form-control" type="number" placeholder="Enter duration" required>

                <form-error v-if="errors.duration">
                    {{ errors.duration[0] }}
                </form-error>
            </div>
            
            <button type="submit" class="btn btn-primary">Add Movie</button>
        </form>
    </div>

</template>

<script>

import { moviesService } from '../services/MoviesService.js';
import FormError from './FormError.vue';

export default {
    components: {
        FormError,
    },

    data() {
        return {
            movie: {},
            errors: [], //errore smestamo u niz errors
        }
    },

    methods: {
        addMovie() {
            moviesService.add(this.movie)
                .then(() => {
                    this.$router.push({ name: 'movies' });
                })
                .catch(err => { //u catch bloku uzimamo error
                    // console.log(error)
                    this.errors = err.response.data.errors; //i stavljamo u niz this.errors iz data(){return{}}
                }) 
        },
    },
}
</script>

<style>

</style>
