<template>
  <div class="">
    <h2>{{formType === 'login' ? 'Login' : 'Register'}}</h2>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input v-model="email" type="email" id="email" required>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="password">Password</label>
        </div>
        <div class="col-75">
          <input v-model="password" type="password" id="password" required>
        </div>
      </div>
      <button type="submit">{{formType === 'login' ? 'Login' : 'Register'}}</button>
    </form>
  </div>
</template>
  
<script>
import {  ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '../stores/authStore.js';
export default {
  props: {
    formType: String,
  },
  setup(props) {
    const authStore = useAuthStore()
    const email = ref('');
    const password = ref('');
    const router = useRouter()
    
    const submitForm = async() => {
      
    if(props.formType=="register"){
      const registerStatus = await authStore.register({ email: email.value, password: password.value })
      if(registerStatus){
        alert("regster successfull")
        router.push("/")
      }else{
        alert('login unsuccessfull')
      }
    }else{
      const loginStatus = await authStore.LOGIN({ email: email.value, password: password.value })
      if(loginStatus){
        alert("login successfull")
        router.push("/")
      }else{
        alert('login unsuccessfull')
      }
    }     
    };

    return {
      email,
      password,
      submitForm,
      
      // login
    };
  },
};
</script>
  
<style scoped>
.row {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  padding: 12px 12px 12px 0;
  margin: 8px 0;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  width: 70%;
  padding: 12px;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  resize: vertical;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;


  background-color: cornflowerblue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  margin-left: 50%;
  margin-top: 50px;
}

button:hover {
  background-color: cornflowerblue;
}

.container {
  border-radius: 5px;


  width: 600px;
  margin: 0 auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
  margin: 8px 0;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
  margin: 8px 0;
}
</style>
  