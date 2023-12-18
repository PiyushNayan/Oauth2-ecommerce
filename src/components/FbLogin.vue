<template>
  <!-- <div class="outerDiv">
    <h3 class="items">Login with facebook</h3>
    <div class="image-items" @click="signIn">
      <img src="../assets/facebook.png" alt="" />
    </div>
    <button @click="signout">signout</button> -->
  <!-- </div> -->
  <div class="container">
    <div class="image-container" @click="signIn">
      <img src="../assets/facebook.png" alt="facebook-image" />
    </div>
    <div class="button-container">
      <button class="facebook-btn" @click="signIn">Login with facebook</button>
    </div>
  </div>
</template>

<script src="../components/js/fbLogin"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 350px;
  border-radius: 5px;
  width: 50%;
  margin: 50px auto;
  margin-bottom: 50px;
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
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  cursor: pointer;
}
button:hover {
  background-color: cornflowerblue;
  color: white;
}
/* .outerDiv {
  margin-bottom: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-items {
  display: inline;
  width: 5%;
  height: 10%;
}

img {
  width: 80%;
} */

/* .items {
  margin-bottom: 3%;
} */

/* img {
  width: 10%;
}

h1 {
  align-content: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
