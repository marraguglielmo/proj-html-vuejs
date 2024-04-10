<script>
import {store} from '../../assets/data/store';
import TestimonialCard from './cards/TestimonialCard.vue';
    export default {
        components:{
            TestimonialCard
        },  
        
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section class="testimonials">

        <div 
            v-for="(item, index) in store.dBase.testimonials"
            :key="index"
            :itemObj="item"
            class="container row row-cols-2 m-auto"
        >
            <div class="text-box">
                <h4>TESTIMONIALS</h4>
                <h2 class="mt-3 mb-3">Why Do People <span class="wC fw-normal ">*Hearts*</span> Us?</h2>
                <p>{{ item.description }}</p>

                <p class="v-all">
                    <span>
                        <a href="#">View all</a>
                    </span>
                </p>
            </div>
            <div class="card-box">
                
                <TestimonialCard
                    v-for="(card, index) in store.dBase.testimonials.TestimonialCard"
                    :key="index"
                />
                
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

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
        .v-all{
            margin-top: 30px;
            span{
                font-weight: bold;
                border-bottom: 1px solid lighten($grey, 10%);
                a{
                    color: $black;
                    text-decoration: none;
                    &:hover{
                        color: $darkGreen;
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
    .card-box{
        width: 60%;
        text-align: center;
        padding-right: 0px;
        img{
            border-radius: 50%;
        }
        
    }

</style>