<template>
  <!-- {{ currentProduct }} -->
  <div class="details">
    <div class="section-details">
      <div class="product-image">
        <img :src="currentProduct?.imageUrl">
      </div>
      <div class="product-info">
        <div class="pname">
        {{ currentProduct?.productName }}
      </div>
      <br>
       <p> {{ currentProduct?.productDescription}}</p>
       <br>
       <div class="merchantDetailsDp" >
    <div v-if="selectedMerchant" class="btnn1">
      Selected Merchant: <b>{{ selectedMerchant.value.name }}</b>
      <br>
      <br>

      Price: <b> Rs {{ selectedMerchant.value.price }} </b>
      <br>
      <br>
      <div class="quantity-container">Qty:   <button class="quantity-btn" @click="decrease">-</button>
          <input class="quantity-input" type="text" v-model="quantity" id="quantity" readonly>
          <button class="quantity-btn" @click="increase">+</button>
        </div>
 
    </div>
    </div>
        <!-- <p>Color: {{ product.color }}</p> -->
        
        <!-- <div class="dropdown">
          <label for="Qty : "> Qty : </label>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div> -->
       
        <div class="buttons">
          <button @click="addToCart">Add to Cart</button>
          <button @click="buyNow">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="select-mrchnt">
    <h3>Select Merchant:</h3>
  </div>
  <div class="merchant-details">
    <div v-for="merchant in merchants" :key="merchant.id" class="merchant-item">
      <div class="btnn" @click="selectMerchant(merchant)">Name : {{ merchant.name }}<br><br>
      Location : {{ merchant.location }}<br><br>
      Price : {{ merchant.price }} $</div>
    </div>
  </div>
  </div>
</template>
 
<script src="@/components/product-details.js"></script>
 
 
<style scoped>
 
 
* {
  box-sizing: border-box;
  margin: 0 auto;
}
 
.quantity-container {
display: flex;
align-items: center;
font-size: 16px;
margin-top: 20px;
}

.quantity-btn {
display: inline-block;
width: 30px;
height: 30px;
background-color: #333;
color: #fff;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;
margin: 0 5px;
}

.quantity-btn:hover {
background-color: #555;
}

.quantity-input {
width: 50px;
height: 30px;
border: 1px solid #ccc;
border-radius: 5px;
padding: 0 5px;
text-align: center;
margin: 0 5px;
}
.btnn {
  background-color: #333;;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 10px;
}
 
.btnn:hover {
  background-color: #555;;
}
 
/* @media only screen and (max-width: 480px){
.section-details {
  padding: 20px;
  /* background-color: aqua; */
  /* flex-direction: column;
  justify-content: space-evenly;
  height: 500px; */
  /* width: 100%; */
/* } */
/* }  */
 
.section-details {
  padding: 20px;
  /* background-color: aqua; */
  display: flex;
  ;
  justify-content: space-evenly;
  height: 500px;
  /* width: 100%; */
}
.pname{
  font-size: 40px;
  font-weight: 800;
}
 
 
.details {
  display: flex;
  flex-direction: column;
}
 
.product-image img {
 
  padding: 15px;
  margin-left: 10%;
  height: 100%;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}
.product-image img:hover {
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
 
 
 
.hover-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}
 
.product-image:hover {
  transform: scale(1.01);
}
 
.product-info {
  padding: 30px;
  font-size: 20px;
  font-weight: 300;
  width: 40%;
}
 
 
.buttons button{
  background-color: #333;
  color: white;
  padding: 12px 12px;
  border: none;
  width: 300px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 8%;
}
 
.buttons button:hover {
  background-color: #2980b9;
}
 
.merchant-item {
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
}
 
.select-mrchnt{
  margin: 3% ;
}
.merchant-details {
  padding: 15px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 85%;
  height: 40%;
}
 
@media only screen and (max-width: 768px) {
 
  .details{
    margin: 35% 20%;
    /* display: flex;
    flex-direction: column; */
  }
  .select-mrchnt{
  margin-top: 90% ;
  margin-right: 20px;
  display: none;
  /* overflow: hidden; */
}
.section-details{
  display: flex;
  flex-direction: column;
  /* padding-right: 40px; */
}
.buttons button{
/* color: white; */
/* padding-bottom: 20%; */
width: 100%;
/* background-color: #333; */
margin-top: 20%;
padding-right: 10%;
/* margin-left: 10%; */
/* margin-bottom:10% ; */
}
 
  .product-image img {
  width: 100%;
  justify-content: center;
  border-radius: 10px;
}
 
  .section-details {
    flex-direction: column;
  }
 
  .product-info{
    width: 100%;
    height: 100%;
  }
 
  .merchant-details {
    margin-top: 180%;
    width: 100%;
    padding: 20px;
    margin-left: 13%;
  }
  /* .merchantDetailsDp{ */
    /* margin-right: 10%; */
    /* align-content: left; */
    /* padding-right:30%; */
  /* } */
}
 
</style>
