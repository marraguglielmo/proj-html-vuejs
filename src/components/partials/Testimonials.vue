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
            <div class="card-box position-relative">
                
                <TestimonialCard
                    v-for="(card, index) in store.dBase.testimonials[index].testimonialCards"
                    :key="index"
                    :cardObj="card"
                    class="card-component"
                />
                
            </div>
            
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

.testimonials{
    background-color: $white;
    margin-top: 150px;
    padding: 120px 0;
    .card-component:first-child{
        position: absolute;
        z-index: 10;
    }
    .card-component:nth-child(2){
        position: absolute;
        top: 110px;
        z-index: 9;
        scale: .83;
        opacity: .4;
    }
    .card-component:nth-child(3){
        position: absolute;
        bottom: 40px;
        z-index: 8;
        scale: .8;
        opacity: .4;
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
}
</style>