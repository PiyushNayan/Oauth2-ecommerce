import { computed } from "vue";
import svg from "../assets/cart.svg";
import { logOut } from "@/firebase/facebooklogin.js";

export default {
  components: {
    svg,
  },
  setup() {
    // const token = ref(sessionStorage.getItem("accessToken"));
    // const isLoggedIn = ref(false);

    const isLoggedIn = computed(() => {
      const token = sessionStorage.getItem("accessToken");
      console.log("token val", token.value);
      return token.value != null && token.value.length != 0;
    });

    // watch(token, (newToken) => {
    //   isLoggedIn.value = newToken !== null && newToken.length !== 0;
    //   console.log("isloggedin", isLoggedIn.value);
    // });

    const signOut = () => {
      logOut();
    };

    return {
      isLoggedIn,
      signOut,
    };
  },
};
