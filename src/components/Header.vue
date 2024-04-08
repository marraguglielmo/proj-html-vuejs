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

        mounted(){
            console.log(this.store.dBase.header);
        }
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
                    <span>
                        <i class="fa-solid fa-cart-shopping"></i>
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

    header{
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 80px;
        background: rgba(255, 0, 0, 0.562);
        .logo img{
            width: 60%;
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
            }
        }
        .main-container > div{
            width: calc(100% / 3);
            .input-search{
                background-color: rgba(128, 128, 128, 0.589);
                border-radius: 5px;
                padding: 7px 10px;
                input[type="text"]{
                    border: none;
                    background-color: transparent;
                    &:focus{
                        border: none;
                        box-shadow: none;
                    }
                }
                span:last-child{
                    padding: 10px;
                }
            }
        }
    }

</style>