import {
    getAuth,
    signInWithPopup,
    FacebookAuthProvider,
    signOut,
  } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  
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
  const signInWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("resultData", result);
        // The signed-in user info.
        // const user = result.user;
        // console.log(user);
  
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("accessToken", accessToken);
        console.log("credential", credential);
  
        getFacebookFriends(accessToken);
  
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
  
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signout");
      })
      .catch((error) => {
        console.log("Error in signout", error);
      });
  };
  
  export { auth, signInWithFacebook, logOut };
  