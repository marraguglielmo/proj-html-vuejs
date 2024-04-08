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
@use '../../assets/scss/partials/variables' as *;

    ul{
        padding-left: 0;
        margin-bottom: 0;
        li{
            font-family: $font;
            &:hover a{
                color: lighten($black, 40%);
            }
            a{
                font-weight: bold;
                padding: 5px 10px;
                &::after{
                    font-family: FontAwesome;
                    content: "\f078";
                    font-weight: normal;
                    font-size: .6rem;
                    vertical-align: middle;
                    text-decoration: none;
                    margin-left: 5px;
                }
            }
        }
    }
</style>