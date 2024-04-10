<script>
import {store} from '../../assets/data/store';
import CoursesCard from './cards/CoursesCard.vue';
    export default {
        components:{
            CoursesCard
        },
        
        data(){

            return{
                store
            }
        }
            
    }
</script>

<template>
    <section class="courses p-3">
        <!-- TODO: CAROUSEL -->
        <!-- title -->
        <div class="container text-center">
            <h4>JOIN MAXCOACH AT BEST</h4>
            <h2>Latest Online <span>Courses</span></h2>
        </div>
        <!-- carousel -->
        <div class="container main-wrapper d-flex justify-content-between">
            <CoursesCard
                v-for="(card, index) in store.dBase.courses"
                :key="index"
                :cardObj="card"
            />
        </div>
        <div class="container text-center mt-5">
            <p>Control your personal preference setting to get notified about appropriate courses.
                <span class="all-courses">
                    <a href="#">View all courses</a>
                </span>
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

    .courses{
        margin-top: 180px;
        h4{
            color: darken($grey, 20%);
            font-size: 1rem;
        }
        h2{
            font-size: 2.8rem;
            font-weight: bold;
            margin-bottom: 2.2rem;
            span{
                color: $darkGreen;
                font-weight: normal;
            }
        }
        .container:last-child{
            color: $black;
            font-weight: 500;
            width: 490px;
            .all-courses{
                border-bottom: 1px solid lighten($grey, 10%);;
                a{
                    color: darken($black, 50%);
                    font-weight: bold;
                    text-decoration: none;
                    &:hover{
                        color: $darkGreen;
                    }
                    &::after{
                        font-family: fontAwesome;
                        content: '\f061';
                        margin-left: 5px;
                        font-size: .9rem;
                    }
                }
            }
        }
    }
</style>