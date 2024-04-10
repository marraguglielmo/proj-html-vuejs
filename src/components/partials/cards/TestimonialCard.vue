<script>
import {store} from '../../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },

        props:{
            cardObj: Object
        }
    }
</script>

<template>
    <div class="col">
        <div class="gm_testimonial-card">
            <div class="t-title">
                <h3>{{cardObj.title}}</h3>
            </div>
            <div class="t-description">
                {{ cardObj.description }}
            </div>
            <div class="t-user d-flex align-items-center ">
                <img :src="`/img/${cardObj.img}`" alt="">
                <div class="t-user-details ms-4">
                    <p>{{ cardObj.name }}</p>
                    <p>/ {{ cardObj.job }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables' as *;
@use '../../../assets/scss/partials/general';

.gm_testimonial-card{
    padding: 35px 40px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 5px 16px -10px rgba(66, 68, 90, 0.48);
    h3{
        font-size: 1.1rem;
        font-weight: bold;
    }
    .t-description{
        font-size: 1.1rem;
        font-weight: 500;
        margin-top: 1.4rem;
        margin-bottom: 2.5rem;
        color: darken($grey, 25%);
    }
    .t-user-details{
        p:first-child{
            font-weight: bold;
        }
        p:last-child{
            color: darken($grey, 25%);
            font-size: .9rem;
            font-weight: 500;
        }
    }
    img{
        border-radius: 50%;
        width: 80px;
    }
}


</style>