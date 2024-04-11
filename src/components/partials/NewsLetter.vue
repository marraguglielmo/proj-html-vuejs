<script>
    export default {

    }
</script>

<template>
    <section class="newsletter">
        <div class="container m-auto text-center">
            <h2>Subscribe <span>Newsletters</span></h2>
            <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>

            <div class="input-newsletter">
                <input type="text" placeholder="Enter your email">
                <button>Subscribe</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/general';

.newsletter{
    background-color: white;
    padding-top: 80px;
    padding-bottom: 90px;
    h2{
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 15px;
        span{
            color: $darkGreen;
        }
    }
    p{
        width: 40%;
        margin: 0 auto;
    }
    .input-newsletter{
        width: fit-content;
        margin: 40px auto 0 auto;
        height: 50px;
        border-radius: 5px;
        overflow: hidden;
        & > *{
            padding: 0 20px;
        }
        input[type="text"]{
            background-color: lighten($grey, 25%);
            width: 400px;
            height: 100%;
            border: none;
            &:focus{
                outline: none;
            }
            
        }
        button{
            background-color: darken($darkGreen, 5%);
            color: white;
            font-weight: bold;
            height: 100%;
            border: none;
            &:hover{
                background-color: darken($darkGreen, 15%);
            }
        }
    }
}

</style>