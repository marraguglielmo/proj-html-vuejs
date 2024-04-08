<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Jumbotron from './components/partials/Jumbotron.vue';
  export default{
    components:{
      Header,
      Main,
      Footer,
      Jumbotron
    }
  }
</script>

<template>

  <Header />
  
  <div class="body">
    <Jumbotron />
    <Main />
    <Footer />
  </div>
  
</template>

<style lang="scss">
@use './assets/scss/main.scss';

.body{
  margin-top: 80px;
}

</style>
