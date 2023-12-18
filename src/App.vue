<template>

  <Header> </Header>
  
  <router-view/>

  <FooterHome>
  </FooterHome>


</template>

<script>

import Header from './components/HeaderHome.vue';

import userAuthStore from "./stores/authStore.js"
import FooterHome from './components/FooterHome.vue';


export default {
  name: 'App',
  components: {
    Header,
    FooterHome
  },
  setup(){
    const authStore = userAuthStore()
    const userEmail = sessionStorage.getItem("userEmail")
    
    authStore.updateAuthStatus(userEmail)
  
    // return{
      
    // }
  
  },
  
}





</script>



<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}



/* .product{
  display: flex;
justify-content: space-around;

} */
</style>
