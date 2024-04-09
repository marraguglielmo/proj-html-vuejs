<script>
import Jumbotron from './partials/Jumbotron.vue';
import WorkCulture from './partials/WorkCulture.vue';
import HowWeWork from './partials/HowWeWork.vue';
    export default {
        components:{
            Jumbotron,
            WorkCulture,
            HowWeWork
        }
    }
</script>

<template>

    <!-- barra laterale -->
    <div class="aside-bar d-flex flex-column justify-content-between align-items-center position-fixed">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-book"></i>
                    <i class="fa-solid fa-life-ring"></i>
                    <i class="fa-solid fa-border-top-left"></i>
    </div> 
    <Jumbotron />
    <WorkCulture />
    <HowWeWork />

    
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.aside-bar{
        background-color: $white;
        width: 50px;
        height: 150px;
        color: $black;
        top: 170px;
        right: 0;
        padding: 10px 13px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 1.1rem;
        i{
            cursor: pointer;
            &:hover{
                scale: 1.2;
                transition: scale .2s;
            }
        }
}

</style>