import { defineComponent } from "vue";
import { signInWithFacebook, logOut } from "@/firebase/facebooklogin.js";

export default defineComponent({
  setup() {
    const signIn = () => {
      signInWithFacebook();
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
