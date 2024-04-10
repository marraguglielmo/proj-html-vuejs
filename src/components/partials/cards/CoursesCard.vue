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
        <div class="gm_course-card">
            <div class="card-img">
                <img :src="`/img/${cardObj.img}`" alt="">
            </div>
            <div class="card-text">
                <span class="price">
                    {{ cardObj.price }}
                    <span class="decimals">00</span>
                </span>
                <h3>{{ cardObj.title }}</h3>
                <div class="info-card">
                    <span class="lessons">
                        {{ cardObj.lessons }} Lessons
                    </span>
                    <span class="students">
                        {{ cardObj.students }} Students
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partials/variables' as *;
@use '../../../assets/scss/partials/general';

.col{
    padding: 20px 30px;
    .gm_course-card{
        // width: 350px;
        background-color: white;
        overflow: hidden;
        border-radius: 5px;
        &:hover{
            transition: box-shadow .4s;
            box-shadow: 0px 17px 17px -8px rgba(66, 68, 90, 0.589);
        }
        .card-text{
            padding: 15px;
            .price{
                color: $darkGreen;
                font-size: 1.4rem;
                font-weight: bold;
                &::before{
                    content: '$';
                }
                .decimals{
                    font-size: 1.1rem;
                    padding: 0;
                    margin: 0;
                }
            }
            h3{
                font-size: 1.3rem;
                font-weight: bold;
                margin-bottom: 25px;
                margin-top: 7px;
            }
            .info-card{
                color: lighten($grey, 4%);
                font-weight: 600;
                margin-bottom: 12px;
                span{
                    font-size: .9rem;
                    margin-right: 15px;
                    &.lessons::before{
                        font-family: fontAwesome;
                        content: '\f406';
                        margin-right: 7px;
                    }
                    &.students::before{
                        font-family: fontAwesome;
                        color: lighten($grey, 5%);
                        content: '\f15c';
                        margin-right: 7px;
                    }
                }
            }
        }
    }
}

</style>