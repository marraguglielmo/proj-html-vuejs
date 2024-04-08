<script>
import {store} from '../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },

        computed:{
            jumbo(){
                return this.store.dBase.jumbotron[0]
            }
        },
        mounted(){
            console.log(this.jumbo);
        }
    }
</script>

<template>

    <section class="jumbotron d-flex" scoped>
        <div class="container d-flex flex-column justify-content-center text-center text-white">
            <h3 class="fw-bold">Commence Business</h3>
            <h1 class="mb-4">Distant Mentoring Program</h1>
            <button class="btn btn-white bg-white fw-bold">Download free guidebook</button>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.jumbotron{
    height: 550px;
    background-image: url('/img/home-3-hero-bg.jpg');
    background-size: cover;
    background-position: center;
    h1{
        font-size: 3rem;
    }
    button{
        color: $darkGreen;
        width: 300px;
        margin: 0 auto;
    }
}


</style>