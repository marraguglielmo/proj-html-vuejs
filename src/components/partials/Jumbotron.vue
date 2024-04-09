<script>
import {store} from '../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },
    }
</script>

<template>
    
    <section
        v-for="(item, index) in store.dBase.jumbotron"
        :key="index"
        class="jumbotron d-flex"
        :style="{backgroundImage: `url(/img/${item.img})`}"
    >
        
        <div class="container d-flex flex-column justify-content-center text-center text-white">
            <h3 class="fw-bold">{{ item.subtitle }}</h3>
            <h1 class="mb-4">{{ item.title }}</h1>
            <button class="btn fw-bold">
                <a href="#">Download free guidebook</a>
            </button>
            
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.jumbotron{
    height: 700px;
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    
    h1{
        font-size: 3rem;
    }
    button{
        background-color: white;
        color: $darkGreen;
        width: 300px;
        margin: 0 auto;
        &:hover{
            background-color: $darkGreen;
        }
        &:hover a{
            color: white;
        }
        a{
            color: $darkGreen;
            text-decoration: none;
            &::after{
                font-family: fontAwesome;
                content: '\f061';
                margin-left: 5px;
                font-size: .9rem;
            }
        }
    }
    
}


</style>