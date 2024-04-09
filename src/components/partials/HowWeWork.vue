<script>
import {store} from '../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section class="how-we-work">
        <div
            v-for="(item, index) in store.dBase.howWeWork"
            :key="index"
            class="container row row-cols-2 m-auto"
        >
        <div class="img-box">
            <!-- TODO: IMG SHAPES -->
                <!-- img 1 -->
                <div class="position-relative">
                    <img :src="`/img/${item.img1}`" alt="work culture 1">
                    <!-- img 2 -->
                    <img :src="`/img/${item.img2}`" alt="work culture 1" class="position-absolute">
                </div>
            </div>
            <div class="text-box">
                <h4>HOW WE WORK</h4>
                <h2 class="mt-3 mb-3">Upgrade Your Skills 
                    <span class="upgr fw-normal ">Upgrade Your life</span>
                </h2>
                <p>{{ item.description }}</p>

                <p class="questions"> 
                    <span>
                        <a href="#">Download free guidebook</a>
                    </span>
                </p>
            </div>
            

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

.how-we-work{
    margin-top: 70px;
    .img-box{
        width: 60%;
        text-align: center;
        padding-right: 70px;
        img{
            border-radius: 5px;
        }
        img:last-child{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
    .questions{
            margin-top: 30px;
            span{
                font-weight: bold;
                border-bottom: 1px solid lighten($grey, 10%);
                a{
                    color: $black;
                    text-decoration: none;
                    &::after{
                        font-family: fontAwesome;
                        content: '\f061';
                        margin-left: 5px;
                    }
                }
            }
        }
}

</style>