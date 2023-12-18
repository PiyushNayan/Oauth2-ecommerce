<template>
  <div class="container">
    <h2>Your Orders</h2>
    <div v-if="orders?.length === 0">
      <p>You have no orders.</p>
    </div>
    <div v-else>
    
          <!-- <p>Order-id:{{ order.orderId }}</p> -->
          <div class="cart-order-items">
            <div v-for="order in orders?.resultData" :key="order.orderId" class="loop">
              <hr>
              <p>OrderId: {{ order.orderId }}</p>
 
              <!-- <div class="card">
               <div class="card-body">
               <p>Order-id:{{ order.orderId }}</p>
                <div class="cart-order-items"></div>
               -->
               <div class="card-body">
              <div v-for="orderItem in order.orderItemResponseDtos" :key="orderItem.orderItemId" class="order-item">
                <div class="cart-order">
                <!-- <p>Order-id:{{ orderItem.orderId}}</p> -->
                <div class="card">
                 <img :src = orderItem.product.imageUrl class="orderImage">
                  <h3>{{ orderItem.product.productName }}</h3>
                  <p> {{ orderItem.product.productDescription }}</p>
                  <p><b> Price: Rs </b> {{ orderItem.product.price }}</p>
                  <p> <b>Quantity : </b>{{ orderItem.product.count }}</p>
                  <p><b>Seller Name:</b>{{ orderItem.merchant.merchantName }}</p>
              
                
                </div>
               
                <!-- <div v-for="orderItemProduct in orderItem.orderItemResponseDtos" :key="orderItemProduct.orderItemId" class="order-item">
                  <img :src="orderItemProduct.product.imageUrl" :alt="orderItem.itemName" class="order-item-img">
                  <h3>{{ orderItemProduct.product.productName }}</h3>
                  <p> {{ orderItemProduct.product.productDescription }}</p>
                  <p> Price: Rs{{ orderItemProduct.product.price }}</p>
                  <h4>Seller Name:{{ orderItemProduct.merchant.merchantName }}</h4>
                 
                  
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>
 
 
<script>
// import { computed } from 'vue';
 
import { ref } from 'vue';
import useOrderStore from '../stores/OrderAndCartStore.js';
export default {
  setup() {
    const orderStore = useOrderStore();
    orderStore.FETCH_ORDERS(sessionStorage.getItem("userEmail"));
 
    // const orders = computed(() => {
    //   console.log("here", orderStore.orders)
    //   return orderStore.orders;
    // })
    const orders = ref({
   "errorCode":null,
   "resultData":[
      {
         "orderId":"3dd19c58-5c7d-4164-8887-6b821ecc3511",
         "userId":"dsadc",
         "cartId":"piyush@gmail.com",
         "orderItemResponseDtos":[
            {
               "orderItemId":"1f138598-a10a-42d2-b098-52c730a3512a",
               "product":{
                  "productId":"73171bee-0f2d-41b7-b2ae-fcb350844959",
                  "productName":"Iphone",
                  "productDescription":"This is an Iphone akfbafgaifafabfjafjbafgiqgbfAFKifgaiubfcif,HKFCGfiaBfiBB",
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "imageUrl":"https://www.pngmart.com/files/7/IPhone-PNG-Transparent.png",
                  "productCategoryId":null,
                  "price":20,
                  "count":20
               },
               "merchant":{
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "merchantName":"Tau Kumar",
                  "sellingCount":0,
                  "merchantEmail":"tau@gmail.com"
               }
            },
            {
               "orderItemId":"8022c599-493c-4888-badd-91da07d4971c",
               "product":{
                  "productId":"64e39282-efac-4061-a0f4-3e294e379747",
                  "productName":"Iphone",
                  "productDescription":"This is an Iphone",
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "imageUrl":"https://www.pngmart.com/files/7/IPhone-PNG-Transparent.png",
                  "productCategoryId":null,
                  "price":20,
                  "count":20
               },
               "merchant":{
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "merchantName":"Tau Kumar",
                  "sellingCount":0,
                  "merchantEmail":"tau@gmail.com"
               }
            },
            {
               "orderItemId":"3ae2b8fe-95d1-496f-8340-5f28d96b950e",
               "product":{
                  "productId":"64e39282-efac-4061-a0f4-3e294e379747",
                  "productName":"Iphone",
                  "productDescription":"This is an Iphone",
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "imageUrl":"https://www.pngmart.com/files/7/IPhone-PNG-Transparent.png",
                  "productCategoryId":null,
                  "price":20,
                  "count":20
               },
               "merchant":{
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "merchantName":"Tau Kumar",
                  "sellingCount":0,
                  "merchantEmail":"tau@gmail.com"
               }
            }
         ]
      },
      {
         "orderId":"fca3330b-923e-4ab0-acb2-b16ee153eaab",
         "userId":"dsadc",
         "cartId":"piyush@gmail.com",
         "orderItemResponseDtos":[
            {
               "orderItemId":"7728c736-5cf0-44ec-a8a8-c4c8dd0671cc",
               "product":{
                  "productId":"64e39282-efac-4061-a0f4-3e294e379747",
                  "productName":"Iphone",
                  "productDescription":"This is an Iphone",
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "imageUrl":"https://www.pngmart.com/files/7/IPhone-PNG-Transparent.png",
                  "productCategoryId":null,
                  "price":20,
                  "count":20
               },
               "merchant":{
                  "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
                  "merchantName":"Tau Kumar",
                  "sellingCount":0,
                  "merchantEmail":"tau@gmail.com"
               }
            }
         ]
      }
   ],
   "errorDesc":null,
   "result":true
})
 
 
    return {
      orders,
    };
  },
};
</script>
 
 
<style scoped>
.orderImage{
  width:30%;
  height:20%;
}
 
/* .card-body{ */
  /* display: flex; */
  /* flex-direction: row; */
  
  
 
/* } */
.container {
  border-radius: 5px;
  padding: 20px;
  width: 93%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  
}
 
.cart-order-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* width: 25%;  */
  
}
 
 
.order-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  */
  padding: 10px;
}
.loop{
  overflow: auto;
}
.card{
  overflow-x: auto;
}
.card-body{
  display: flex;
  flex-direction: row;
  overflow: auto;
}
 
 
@media (max-width: 1024px) {
  .order-item {
    width: 250px;
  }
}
 
@media (max-width: 768px) {
 
  .order-item {
    margin-right: 0;
    max-width: 30%;
  }
  .container{
    overflow: auto;
  }
  /* .loop{
    overflow: auto;
  } */
  .card-body{
  display: flex;
  flex-direction: row;
  overflow: auto;
}
}
 
 
/* @media (max-width: 480px) {
  .order-item {
    width: 90%;
    max-width: 90%;
  }
} */
 
 
@media (max-width: 480px) {
  .cart-order-items{
    display: flex;
    flex-direction: column;
  }
  .loop{
    display: flex;
    flex-direction: column;
  }
  .order-item {
    max-width: 600px;
    margin-right: 0;
  }
  .card-body{
  display: flex;
  flex-direction: column;
}
}
 
</style>
