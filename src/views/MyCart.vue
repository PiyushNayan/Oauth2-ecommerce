<template>
  <!-- {{ cart }} -->
  <!-- <div>{{ }}</div> -->
  <div class="container-cart">
    <h2>Your Cart</h2>
    <div v-if="loadingCart">Loading...</div>
    <div v-else>
      <div v-for="item in cart?.resultData" :key="item.cartId">
        <!-- <div class="card"> -->
        <div class="card-body-button">
          <img :src="item.product.imageUrl" class="card-img-top" :alt="item.name" />
          <div class="card-body">
            <h3 class="card-title">{{ item.product.productName }}</h3>
            <h4 class="desc">{{ item.product.productDescription }}</h4>
            <p>Price Rs {{ item.product.price }}</p>
          </div>

          <div class="quantity-container">
          <input class="quantity-input" type="number" v-model.number="item.quantity" min="1" :max="item.product.count"
              @change="updateTotal(item)" />
            <p>Updated Price: Rs {{ calculateItemPrice(item) }}</p>
     </div>


        
          <button @click="deleteCartItem" class="remove-btn">Remove</button>
        </div>
        <hr>
      


      </div>
    </div>

    <div class="button">
      <h3 class="total"> Total Price {{ calculateTotal(cart) }}</h3>
      <button @click="placeOrder()" class="order-btn" v-if="cart && cart.resultData.length > 0">
        Place Order
      </button>
      <button @click.stop="deleteCart" class="deleteButton" v-if="cart && cart.resultData.length > 0">Delete</button>
    </div>
  </div>
</template>
 
<script>
import { computed, } from 'vue';
import useCartStore from '../stores/OrderAndCartStore.js';
import { ref } from 'vue';
export default {
  setup() {
    const quantity = ref();
    const maxQuantity = ref(10)
    // const cartItems = ref([])
    const cartStore = useCartStore();
    // const loadingCart = ref(true)
    cartStore.FETCH_CART(sessionStorage.getItem("userEmail"));

    // const cart = computed(() => {
    //   return cartStore.cart;
    // })
    const cart = ref({
      "errorCode": null,
      "resultData": [
        {
          "cartId": "piyush@gmail.com",
          "product": {
            "productId": "d49baa36-05be-4d39-a55e-857eec3444f7",
            "productName": "IPhone",
            "productDescription": "A smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
            "merchantId": "0ac22398-1a72-4c19-8417-c1622c5fd78d",
            "imageUrl": "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png",
            "productCategoryId": "{\"_id\": \"a2fcd286-0116-463a-a24e-3b52964740f4\", \"productCategoryName\": \"Phone\", \"_class\": \"com.example.product_service.entity.ProductCategory\"}",
            "price": 20000,
            "count": 10
          },
          "merchant": {
            "merchantId": "0ac22398-1a72-4c19-8417-c1622c5fd78d",
            "merchantName": "Tau Kumar",
            "sellingCount": 0,
            "merchantEmail": "tau@gmail.com"
          },
          "userId": "dsadc"
        },
        {
          "cartId": "piyush@gmail.com",
          "product": {
            "productId": "da1ca059-8a8d-49b0-8db6-f9c1513ca55b",
            "productName": "Samsung",
            "productDescription": "A smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
            "merchantId": "0ac22398-1a72-4c19-8417-c1622c5fd78d",
            "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA4kC19i4C9ZwXVvStpy4UQMHiE4VyVCjmNm7JBDOdCYFvereNU9wZWkS2Z2PAQ6Dpr2RK0QzgnLtAbIQWKIgjl9BHXVqKoA",
            "productCategoryId": "{\"_id\": \"a2fcd286-0116-463a-a24e-3b52964740f4\", \"productCategoryName\": \"Phone\", \"_class\": \"com.example.product_service.entity.ProductCategory\"}",
            "price": 30000,
            "count": 10
          },
          "merchant": {
            "merchantId": "0ac22398-1a72-4c19-8417-c1622c5fd78d",
            "merchantName": "Tau Kumar",
            "sellingCount": 0,
            "merchantEmail": "tau@gmail.com"
          },
          "userId": "dsadc"
        }
      ],
      "errorDesc": null,
      "result": true
    })
    const loadingCart = computed(() => {
      return cartStore.loadingCart;
    })

    const addToCart = (product) => {

      console.log(product)
      // cartItems.value.push(product);
    };

    const removeFromCart = (product) => {
      console.log(product)

    };
    const placeOrder = () => {
      try {
        const itemList = [];
      cart.value.resultData.forEach((item) => {

        itemList.push({
          productId: item.product.productId,
          merchantId: item.merchant.merchantId,
          count:1
        })

      });
      console.log(itemList)
      cartStore.PLACE_ORDER(itemList,false)
      window.location.reload()
      } catch (e) {
        alert(e)
      }
      

    };

    cart.value.resultData.forEach((item) => {

      item.quantity = ref(1);
    });
    const calculateItemPrice = (item) => {
      return item.product.price * item.quantity;
    };

    const calculateTotal = (cart) => {
      let totalPrice = 0;
      cart.resultData.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
      return totalPrice;
    };

    const updateTotal = (item) => {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
      // } else if (item.quantity > item.product.count) {
      //   item.quantity = item.product.count;
      // }
      else{
        item.quantity=ref(100)
      }
      item.totalPrice = calculateItemPrice(item);
    };


    const buyNow = () => {
      // Buying cart items
      console.log('Buy Now clicked!');
    };

    const addProductsToCart = () => {
      // Simulating adding products to cart
      const productsToAdd = [
        {
          id: 1,
          name: 'Product 1',
          price: 'Rs 1000',
          image: 'https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_1280.png',
          merchant_name: 'Flipkart',
          merchant_id: '1234',
          merchant_location: 'Bangalore'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 'Rs 1000',
          image: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png',
          merchant_name: 'Flipkart',
          merchant_id: '1234',
          merchant_location: 'Bangalore'
        },

      ];

      productsToAdd.forEach((product) => {
        addToCart(product);
      });
    };



    addProductsToCart();

    return {
      calculateTotal,
      buyNow,
      removeFromCart,
      loadingCart,
      placeOrder,
      calculateItemPrice,
      cart,
      maxQuantity,
      quantity,
      updateTotal

    };
  },
};
</script>

<style scoped>
.quantity-input {
  width: 100px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin: 0 5px;

}

.total {
  margin-top: 20px;
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

.container-cart {
  max-width: 960px;
  margin: 10px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.card-body-button {
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #ccc; */
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.card-img-top {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
}

.card-body {
  flex-direction: column;

}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 5px;
}

.quantity-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}

.quantity-input {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 0 10px;
}

.merchant_details {
  margin: 20px;
}

.remove-btn,
.order-btn,
.deleteButton {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.remove-btn {
  background-color: #ff6347;
  color: #fff;
}

.order-btn {
  background-color: #1e90ff;
  color: #fff;
  margin-right: 10px;
}

.deleteButton {
  background-color: #ff6347;
  color: #fff;
}

.button {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.desc {
  margin-bottom: 10px;
  text-overflow: ellipsis;
  /* height: 10px; */
}

@media only screen and (max-width: 768px) {
  .container-cart {
    display: flex;
    flex-direction: column;
  }

  .card-body-button {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .merchant_details {
    width: 100%;
    margin-left: 0;
  }

  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }

  .deleteButton {
    width: 97%;
    margin-top: 2%;
  }

}</style>