<template>
 
  <div class="site-name">
    <router-link to="/">
      <img src="https://cdn.dribbble.com/users/559871/screenshots/4751426/media/a718d259d901389d0072523655d96624.jpg?resize=800x600&vertical=center" class="headImg">    
    </router-link>
 
    <h2>BAZAARBLEND</h2>
    <div class="search">
    <input type="text" class="search-input" placeholder="Search..." @keyup.enter="handleSearch">
    <button class="search-button" @click="handleSearch">&#128269;</button>
    </div>
    
    <nav class="nav-links">
    <router-link to="/myorder" class="order-cart1"><img src="https://cdn-icons-png.flaticon.com/128/9422/9422789.png"></router-link>
    <router-link to="/mycart" class="order-cart2"> <img src="https://cdn-icons-png.flaticon.com/128/1040/1040254.png"></router-link>
    <router-link to="/about" class="order-cart2"> About</router-link>
    <router-link to="/offers" class="order-cart2"> Offers</router-link>
    <!-- <div class="dropdown"> -->
    <!-- <router-link to="/category" > -->
    <!-- <button class="dropbtn">Category</button> -->
    <!-- </router-link> -->
     <!-- <div class="dropdown-content">
       <div v-for="category in categories" :key="category.id" class="category_details">
         <img :src="category.category_img" class="category-img" />
         <p>{{ category.category_name }}</p>
      </div>
    </div> -->
 
  <!-- </div> -->
 
    
 
  </nav>
  
    <router-link to = "/login"  class="login-button">
     
      <button  @click="authChange">{{  authStatus?"LOGOUT":"LOGIN" }}</button>
  
    </router-link>     
  
  </div>
 
 
 
 
  
    <!-- <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">login</button> -->
  
 
 
 
</template>
<script src="../components/HeaderHome.js">
 
 
</script>
 
<style scoped>
 
 
.site-name {
display: flex;
align-items: center;
/* justify-content: space-evenly; */
background-color: #f2f2f2;
padding: 20px;
}
 
.headImg {
width: 100px;
height: auto;
}
 
.search {
display: flex;
align-items: center;
margin-left: 20px;
}
 
.search-input {
padding: 10px;
border: 1px solid #ccc;
outline: none;
}
 
.search-button {
cursor: pointer;
background-color: #007bff;
color: white;
padding: 10px;
border: none;
outline: none;
border-radius: 5px;
}
 
.nav-links {
display: flex;
align-items: center;
/* margin-right: 20px; */
}
 
.order-cart1, .order-cart2 {
margin-left: 20px;
cursor: pointer;
}
 
.order-cart1 img, .order-cart2 img {
width: 30px;
height: 30px;
}
 
.login-button button {
padding: 8px 16px;
border: none;
background-color: #333;
color: #fff;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease, color 0.3s ease;  
}
 
.login-button button:hover {
background-color: #555;
color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
 
 
 
.site-name {
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: #fff;
padding: 15px 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 96%;
}
 
.site-name img {
width: 70px;
height: auto;
transition: transform 0.3s ease;
}
 
.site-name img:hover {
transform: scale(1.1);
}
 
.search-bar {
display: flex;
align-items: center;
}
 
.search-input {
padding: 12px;
border-radius: 25px;
border: 1px solid #ccc;
background-color: #f9f9f9;
margin-right: 15px;
width: 90%;
transition: box-shadow 0.3s ease;
}
 
.search-input:focus {
outline: none;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
 
.search-button {
padding: 12px 20px;
border-radius: 25px;
background-color: #333;
color: #fff;
border: none;
cursor: pointer;
margin-left: -50px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease, transform 0.2s ease;
}
 
.search-button:hover {
background-color: #555;
transform: scale(1.05);
}
 
.nav-links {
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
}
 
.nav-links a {
text-decoration: none;
/* margin-right: 15px; */
color: #333333;
}
 
.nav-links a:hover {
color: #555;
}
 
.order-cart1 img,
.order-cart2 img {
width: 30px;
height: 30px;
transition: transform 0.3s ease;
}
 
.order-cart1 img:hover,
.order-cart2 img:hover {
transform: scale(1.1);
}

 
 
@media screen and  (max-width: 768px) {
.site-name {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}
 
.search-bar {
  margin-top: 20px;
  margin-bottom: 20px;
}
 
 
.search-input {
  padding: 8px;
  width: 70%; 
  max-width: 300px; 
  margin-right: 10px; 
}
 
.search-button {
  margin-left: 0;
}
 
.nav-links {
  flex-direction: column;
  align-items: center;
  margin-right: 0;
}
 
.nav-links a {
  margin: 10px 0;
}
}
 
 
 
</style>  