<template>
  <div class="container">
    <!-- <div class="col-20">
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
    </div> -->

    <div class="image-container">
      <img src="../assets/facebook.png" alt="facebook-image" />
    </div>
    <div class="button-container">
      <button class="facebook-btn">Login with facebook</button>
    </div>
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue';
import { ref, computed } from "vue";
import useUserStore from "@/stores/UserStore";

export default {
  // components: {
  //   LoginForm,
  // },
  setup() {
    const userStore = useUserStore();
    const userType = ref("customer");
    const formType = ref("login");

    const showRegistrationButton = computed(() => {
      return true;
    });

    const toggleFormType = () => {
      formType.value = formType.value === "login" ? "register" : "login";
    };

    return {
      userType,
      formType,
      showRegistrationButton,
      toggleFormType,
      userStore,
    };
  },
};
</script>

<style scoped>
.container {
  height: 350px;
  border-radius: 5px;
  width: 50%;
  margin: 50px auto;
  margin-bottom: 100px;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.image-container {
  height: 100px;
  width: 100px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  /* padding: 10px;
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
  width: 200px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 25px; */

  padding: 5px 10px;
  margin-top: 20px;
}

button:hover {
  background-color: cornflowerblue;
  color: white;
}
</style>
