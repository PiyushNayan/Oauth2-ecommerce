<template>
  <div class="container">
    <div class="col-20">
      <div class="custom-select">
        <select v-model="userType">
          <option value="customer">Customer</option>
          <option value="merchant">Merchant</option>
        </select>
      </div>
    </div>

    <div class="col-80">
      <LoginForm :formType="formType" />
      <button v-if="showRegistrationButton" @click="toggleFormType">
        {{ formType === 'login' ? 'Register' : 'Login' }}
      </button>
    </div>
  </div>
</template>
  
<script>
import LoginForm from '@/components/LoginForm.vue';
import { ref, computed } from 'vue';
import useUserStore from '@/stores/UserStore';

export default {
  components: {
    LoginForm,
  },
  setup() {
    const userStore = useUserStore()
    const userType = ref('customer');
    const formType = ref('login');
  
    const showRegistrationButton = computed(() => {
      return true;
    });

    const toggleFormType = () => {
      formType.value = formType.value === 'login' ? 'register' : 'login';

    };

    return {
      userType,
      formType,
      showRegistrationButton,
      toggleFormType,
      userStore
    };
  },
};

</script>
 
<style scoped>
.container {
  border-radius: 5px;
  padding: 20px;
  width: 90%;
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
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
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
  width: 100px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 25px;
}

button:hover {
  background-color: cornflowerblue;
}
</style>