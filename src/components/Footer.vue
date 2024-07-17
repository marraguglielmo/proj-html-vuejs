<script>
import {store} from '../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <footer class="d-flex flex-column justify-content-between ">
        <div class="container row row-cols-2 m-auto">
            <!-- address box -->
            <div class="info-box">
                <ul>
                    <h4>Address</h4>
                    <li
                        v-for="(item, index) in store.dBase.address"
                        :key="index"
                        
                        >{{ item.text }}</li>
                </ul>
                <div class="icons">
                    <span
                        v-for="(icon, index) in store.dBase.socialIcons"
                        :key="index"
                    >
                    <a :href="icon.url" target="_blank">
                        <i :class="icon.icon"></i>
                    </a>
                    </span>
                </div>
            </div>
            <!-- informations box -->
            <div class="info-box d-flex justify-content-around">
                <!-- explore -->
                <ul>
                    <h4>Explore</h4>
                    <li
                        v-for="(item, index) in store.dBase.explore"
                        :key="index"
                    >
                    <a :href="item.url">
                        {{ item.text }}
                    </a>
                    </li>
                </ul>
                <!-- information -->
                <ul class="d-flex flex-column flex-wrap">
                    <h4>Information</h4>
                    <li
                        v-for="(item, index) in store.dBase.information"
                        :key="index"
                    >
                    <a :href="item.url">
                        {{ item.text }}
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright container text-center">&copy; 2020 Maxcoach. All Rights Reserved</div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer{
    background-color: $black;
    color: darken($white, 40%);
    padding-top: 60px;
    padding-bottom: 25px;
    padding-top: 70px;
    h4{
    color: $white;
    margin-bottom: 20px;
    font-size: 1.3rem;
    font-weight: bold;
    }
    ul{
        padding-left: 0;
        li{
            font-size: 1rem;
            margin-bottom: 10px;
        }
    } 
    .info-box{
        .icons{
            display: flex;
            justify-content: space-between;
            width: 30%;
            margin-top: 30px;
            
        }
        a{
            color: darken($white, 40%);
            &:hover{
                color: darken($white, 10%);
                scale: 1.2;;
            }
            i{
                font-size: 25px;
                &:hover{
                    scale: 1.2;
                    transition: scale .2s
                }
                &:not(:hover){
                    transition: scale .2s
                }
            }
        }
    }
    .copyright{
        margin-top: 70px;
    }
}

</style>