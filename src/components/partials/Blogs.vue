<script>
import {store} from '../../assets/data/store';
import GeneralCard from './cards/GeneralCard.vue';
    export default {
        components:{
            GeneralCard
        },
        
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section class="blogs">
        <div class="container text-center">
            <h4>READ FOR MORE JOYMENT</h4>
            <h2>Latest From <span>Our Blogs</span></h2>
            <div class="card-box row row-cols-3">
                <GeneralCard
                    v-for="(card, index) in store.dBase.blogs"
                    :key="index"
                    :cardObj="card"
                    class="blogsCard"
                />
            </div> 
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';


.blogs{
    background-color: $bgBlogs;
    padding-top: 100px;
    padding-bottom: 100px;
    h4{
        color: darken($grey, 20%);
        font-size: 1rem;
    }
    h2{
        font-size: 2.5rem;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 40px;
        span{
            color: $darkGreen;
            font-weight: normal;
        }
    }
    .card-box{
        .card-text{
            background-color: $bgBlogs !important;
        }

    }
}

</style>