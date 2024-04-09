<script>
import {store} from '../../assets/data/store';
    export default {
        data(){
            return{
                store
            }
        },
        
        props:{
            cardObj: Object
        },

    }
</script>

<template>
    <div class="gm_card">
        <div class="value text-center fw-bold">
            {{ cardObj.value }}
        </div>
        <div class="text text-center fw-bold">
            {{ cardObj.text }}
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables'as *;

.gm_card{
    width: calc(100% / 3);
    padding: 25px 25px;
    .value{
        font-size: 3rem;
        color: $darkGreen;
    }
    .text{
        font-size: 1rem;
        color: darken($grey, 20%);
    }
}

</style>