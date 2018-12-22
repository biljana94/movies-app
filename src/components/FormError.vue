<template>
<!-- forma za errore, koristimo slotove da mozemo da smenjujemo vise errora ako ih ima, i da baca serverske greske;
    importujemo ovu komponentu u AddMovie.vue komponentu -->
    <div class="alert alert-danger" role="alert">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
