<script>
import {store} from '../../assets/data/store';
import StatsCard from './cards/StatsCard.vue';
    export default {
        data(){
            return{
                store
            }
        },

        components:{
            StatsCard
        }
    }
</script>

<template>
    <section class="work-culture">
        <div 
            v-for="(item, index) in store.dBase.workCulture"
            :key="index"
            :itemObj="item"
            class="container row row-cols-2 m-auto"
        >
            <div class="text-box">
                <h4>EVERYTHING IN <strong>MAXCOACH</strong></h4>
                <h2 class="mt-3 mb-3">Learn about our <span class="wC fw-normal ">Work Culture</span> at MaxCoach</h2>
                <p>{{ item.description }}</p>

                <p class="questions">Have a questions? <span><a href="#">Get Free Guide</a></span></p>
            </div>
            <div class="img-box">
                <!-- img 1 -->
                <div class="position-relative">
                    <img :src="`/img/${item.img1}`" alt="work culture 1">
                    <!-- img 2 -->
                    <img :src="`/img/${item.img2}`" alt="work culture 1" class="position-absolute">
                    <!-- mg 3 -->
                    <img :src="`/img/${item.img3}`" :alt="item.img3"
                    class="position-absolute">
                </div>
            </div>

            <div class="gm_card-box d-flex m-auto">

                <StatsCard
                    v-for="(card, index) in store.dBase.statsCards"
                    :key="index"
                    :cardObj="card"
                />
                
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

.work-culture{
    margin-top: 180px;
    .gm_card-box{
        margin-top: 100px !important;
        justify-content: space-between;
        width: 70%;
    }
    .text-box{
        width: 40%;
        padding: 0 60px;
        h2{
            font-size: 2.5rem;
            font-weight: bold;
        }
        h4{
            color: darken($grey, 20%);
            font-size: 1rem;
        }
        .wC{
            color: $darkGreen;
        }
        .questions{
            margin-top: 30px;
            span{
                font-weight: bold;
                border-bottom: 1px solid lighten($grey, 10%);
                a{
                    color: $darkGreen;
                    text-decoration: none;
                    &:hover{
                        color: $black;
                        transition: color .2s;
                    }
                    &::after{
                        font-family: fontAwesome;
                        content: '\f061';
                        margin-left: 5px;
                    }
                }
            }
        }
        
    }
    .img-box{
        width: 60%;
        text-align: center;
        padding-right: 70px;
        img{
            border-radius: 5px;
        }
        img:first-child{
            z-index: 9;
        }
        img:nth-child(2){
            width: 170px;
            bottom: 250px;
            left: 450px;
            z-index: 10;
        }
        img:nth-child(3){
            width: 100px;
            top: 330px;
            left: 420px;
            z-index: 10;
        }
        & > div{
            width: fit-content;
        }
    }
    .row{
        padding: 0;
    }
    
}

</style>