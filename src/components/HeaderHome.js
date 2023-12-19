import { computed } from "vue";
import svg from "../assets/cart.svg";
import {  logOut } from "@/firebase/facebooklogin.js";
import AuthStore from "@/stores/authStore"

export default {
  components: {
    svg,
  },
  setup() {

    // const token = ref(sessionStorage.getItem("accessToken"));
    // const isLoggedIn = ref(false);
    const authStore = AuthStore();
    const isLoggedIn = computed(() => {
      const token = sessionStorage.getItem("accessToken");
      console.log("token val", token);
      return token != null && token.length != 0;
    });

    // watch(token, (newToken) => {
    //   isLoggedIn.value = newToken !== null && newToken.length !== 0;
    //   console.log("isloggedin", isLoggedIn.value);
    // });
    const authStatus = computed(()=>authStore.authStatus)
    const signOut = () => {
      logOut();
    };

    const authChange = async()=>{
      sessionStorage.clear()
      authStore.updateAuthStatus()
    }

    return {
      isLoggedIn,
      signOut,
      authStatus,
      authChange
    };
  },
};
