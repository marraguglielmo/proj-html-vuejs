<script>
import {store} from '../assets/data/store';
import NavBar from './partials/NavBar.vue';
    export default {
        components:{
            NavBar
        },
        
        data(){
            return{
                store
            }
        },

    }
</script>

<template>
    <header class="d-flex">
        <div class="main-container container-fluid d-flex justify-content-between align-items-center px-5">
            <div class="d-flex align-items-center">
                <NavBar />
            </div>
            
            <!-- logo -->
            <div class="logo text-center">
                <img src="/dark-logo.png" alt="">
            </div>
            
            <div class="search-bar d-flex justify-content-end">
                <!-- icone -->
                <div class="icons me-2 ">
                    <span class="cart position-relative">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="position-absolute ">0</span>
                    </span>
                    <span>
                        <i class="fa-regular fa-circle-user"></i>
                    </span>
                </div>
                <!-- input search -->
                <div class="input-search">
                    <span>
                        <input type="text" placeholder="Search...">
                    </span>
                    <span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/general' as *;

    header{
        position: fixed;
        top: 0;
        width: 100%;
        min-height: 80px;
        background-color: $white;
        z-index: 999;
        .logo img{
            width: 160px;
        }
        .main-container .search-bar{
            .icons{
                width: 75px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                i{
                    font-size: 1.1rem;
                    cursor: pointer;
                    &:hover{
                        color: grey;
                    }
                }
                .cart span{
                    bottom: 18px;
                    left: 13px;
                    background: $darkGreen;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5px;
                    border-radius: 50%;
                    width: 16px;
                    height: 16px;
                    color: $white;
                    font-size: .7rem;
                    font-weight: bold;
                }
            }
        }
        .main-container > div{
            width: calc(100% / 3);
            .input-search{
                background-color: lighten($grey, 25%);
                border-radius: 5px;
                padding: 7px 10px;
                overflow: hidden;
                input[type="text"]{
                    border: none;
                    background-color: transparent;
                    outline: none;
                }
                span:last-child{
                    width: auto;
                    cursor: pointer;
                    i{
                        padding: 5px;
                        color: $darkGreen;
                    }
                }
            }
        }
    }

</style>