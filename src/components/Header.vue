<script>
import {store} from '../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },

        computed(){
            
        },

        mounted(){
            console.log(this.store.dBase.header);
        }
    }
</script>

<template>
    <header class="">
        <h1>{{  }}</h1>
    </header>
</template>

<style lang="scss" scoped>

    header{
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 80px;
        background: rgba(255, 0, 0, 0.562);
    }

</style>