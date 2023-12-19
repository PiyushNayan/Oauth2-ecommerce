import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import router from "@/router";
import { ref } from "vue";

const authStatus = ref(false);

const firebaseConfig = {
  // Your Firebase configuration object goes here
  apiKey: "AIzaSyBtX7IV8wHIes6AO8K6nHwpeYsLTtmc6Sk",
  authDomain: "social-e-commerce-2ce49.firebaseapp.com",
  projectId: "social-e-commerce-2ce49",
  storageBucket: "social-e-commerce-2ce49.appspot.com",
  messagingSenderId: "699654074857",
  appId: "1:699654074857:web:60f930e1cd9b41f1c2db78",
  measurementId: "G-VTWBN16CDX",
};

const app = initializeApp(firebaseConfig, "second");
const provider = new FacebookAuthProvider();
provider.addScope("email");
provider.addScope("user_friends");
const auth = getAuth(app);
function getFacebookFriends(token) {
  var url = `https://graph.facebook.com/v14.0/me/friends?access_token=${token}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Error retrieving friends:", data.error);
      } else {
        var friends = data.data;
        // Process the list of friends
        console.log("friends", friends);
      }
    })
    .catch((error) => console.error("Error fetching friends:", error));
}
function getFacebookProfileImage(userId) {
  var url = `https://graph.facebook.com/${userId}/picture`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Error retrieving friends:", data.error);
      } else {
        var friends = data.data;
        // Process the list of friends
        console.log("profile", friends);
      }
    })
    .catch((error) => console.error("Error fetching friends:", error));
}
const signInWithFacebook = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("resultData", result.user);
      // The signed-in user info.
      // const user = result.user;
      // console.log(user);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log("accessToken", accessToken);
      console.log("credential", credential);

      getFacebookFriends(accessToken);
      getFacebookProfileImage(result.user.uid);

      
      const userDto = {
        friendList: [],
        url: result.user.photoURL,
        userId: result.user.uid,
        userName: result.user.displayName
      };

       addUser(userDto);
      router.push("/");

      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("userId", result.user.uid);
      authStatus.value = true;

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, credential);

      // ...
    });
};
const addUser = async (userDto) => {
  const head = {
    method: "POST",
    body: JSON.stringify(userDto),
    headers: {
      "Content-Type": "application/json",
    }
  }

  const url = "http://172.20.10.5:9002/api/users/add"
  const res = await fetch(url, head)
  const data = await res.json();
  console.log(data)
}
const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Signout");
      authStatus.value = false;
      sessionStorage.clear();
    })
    .catch((error) => {
      console.log("Error in signout", error);
    });
};

export { auth, signInWithFacebook, logOut, authStatus };
