<script>
import {store} from '../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },

        computed:{
            headerNavBar(){
                return this.store.dBase.header[0]
            }
        },
    }
</script>

<template>
    <ul class="d-flex">
        <li
            v-for="(item, index) in headerNavBar"
            :key="index"
        ><a href="#">{{ item }}</a></li>
        
    </ul>
</template>


<style lang="scss" scoped>
    ul{
        padding-left: 0;
        margin-bottom: 0;
        li{
            border: 1px solid black;
            &:hover{
                background-color: yellow;
            }
            a{
                padding: 5px 10px;
                
            }
        }
    }
</style>