<script>
import {store} from '../../assets/data/store'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section class="transform">
        <div
            v-for="(item, index) in store.dBase.transformYou"
            :key="index"
            class="container row row-cols-2 m-auto"
        >
            <div class="img-box position-relative">
                <!-- img 1 -->
                <img class="position-relative" :src="`/img/${item.img1}`" alt="work culture 1">
                <!-- shapes img 2-->
                <img class="position-absolute" src="/img/maxcoach-shape-07.png" alt="">
                <!-- shapes img 3-->
                <img class="position-absolute" src="/img/maxcoach-shape-05.png" alt="">
                <!-- shapes img 4-->
                <img class="position-absolute" src="/img/maxcoach-shape-01.png" alt="">
            </div>
            <div class="text-box">
                <h4>EVERYTHING IN <strong>MAXCOACH</strong></h4>
                <h2 class="mt-3 mb-3">We're Here To
                    <span class="upgr fw-normal ">Transform</span> You
                </h2>
                <p>{{ item.description }}</p>

                <p class="download"> 
                    <button class="btn fw-bold">
                <a href="#">Download free guidebook</a>
            </button>
                </p>
            </div>
            

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

.transform{
    background-color: $white;
    padding-top: 200px;
    padding-bottom: 200px;
    .img-box{
        width: 60%;
        text-align: center;
        padding-right: 70px;
        img{
            border-radius: 5px;
        }
        img:first-child{
            z-index: 1;
        }
        img:nth-child(2){
            bottom: -120px;
            right: 295px;
            z-index: 0;
        }
        img:nth-child(3){
            width: 160px;
            top: 130px;
            left: -50px;
            z-index: 0;
        }
        img:nth-child(4){
            width: 160px;
            bottom: 20px;
            left: -110px;
            z-index: 0;
        }
    }
    .text-box{
        width: 40%;
        padding-right: 150px;
        h2{
            font-size: 2.5rem;
            font-weight: bold;
            .upgr{
                color: $darkGreen;
            }
        }
        h4{
            color: darken($grey, 20%);
            font-size: 1rem;
        }
    }
    .download{
            margin-top: 30px;
            button{
                background-color: $darkGreen;
                color: $darkGreen;
                width: 300px;
                margin: 0 auto;
                padding: 20px 35px;
                &:hover{
                    background-color: black;
                }
                &:hover a{
                    color: $darkGreen;
                }
                a{
                    color: white;
                    text-decoration: none;
                }
        }
        }
}

</style>