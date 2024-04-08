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

        }
    }
</script>

<template>
    
    <section class="jumbotron d-flex" scoped>
        <!-- barra laterale -->
        <div class="aside-bar d-flex flex-column justify-content-between align-items-center position-sticky">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-book"></i>
                <i class="fa-solid fa-life-ring"></i>
                <i class="fa-solid fa-border-top-left"></i>
            </div>  
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
    .aside-bar{
        background-color: $white;
        width: 50px;
        height: 150px;
        color: $black;
        top: 150px;
        left: 100vw;
        padding: 10px 13px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 1.1rem;
        i{
            cursor: pointer;
            &:hover{
                scale: 1.2;
                transition: scale .2s;
            }
        }
    }
}


</style>