import { defineComponent } from "vue";
import { signInWithFacebook, logOut } from "@/firebase/facebooklogin.js";
import AuthStore from "@/stores/authStore"

export default defineComponent({
  setup() {
    const authStore = AuthStore();
    const signIn = () => {
      signInWithFacebook();
      authStore.updateAuthStatus("saAVDFBGNHJH")
    };

    const signOut = () => {
      logOut();
    };

    return {
      signIn,
      signOut,
    };
  },
});
