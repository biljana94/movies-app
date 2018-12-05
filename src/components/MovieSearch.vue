<template>
    <form class="form-inline my-2 my-lg-0">
        <!--@input="handleSearch" - osluskujemo input polje i emitujemo search polje cija fnc je u AppMovies.vue,,
        sve komponente su povezane preko window.EventHub (na njega kacimo sve fnc iz ostalih komponenti)-->
        <input @input="handleSearch" class="form-control mr-sm-2" type="search" placeholder="Search">
    </form>
</template>

<script>
export default {
    methods: {
        //emitujemo unos u search polje
        handleSearch(event) {
            window.EventHub.$emit('search', event.target.value);
        }
    },
}
</script>


<style>

</style>
