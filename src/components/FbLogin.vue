<template>
  <div class="outerDiv">
    <h3 class="items">Login with facebook</h3>
    <div class="image-items" @click="signIn">
      <img src="../assets/facebook.png" alt="" />
    </div>
    <!-- <button @click="signout">signout</button> -->
  </div>
</template>

<script src="../components/js/fbLogin"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outerDiv {
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
}

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
