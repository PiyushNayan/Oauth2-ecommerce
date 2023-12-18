<template>
  <div class="products">
      <h2>Products</h2>
      <hr />
      <div class="product-list">
        <div v-for="product in products.value.resultData" :key="product.id" class="product-item">
          <div class="product-card" @click="onItemClicked(product)">
            <img :src="product.imageUrl" :alt="product.name" class="product-image" />
            <div class="details">
              <h3>{{ product.productName }}</h3>
              <p class="price">Price: Rs {{ product.price }}</p>
              <button @click="addToCart(product)" class="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    
  </template>
   
  <script src="./ProductList1" />
   
  <style scoped>
   
   
   
   
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
  }
   
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* padding: 20px; */
    max-width: 1200px;
    margin: 0 auto;
  }
   
   
   
  .products {
    flex: 0 0 100%; /* Occupy full width */
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-left: 20px; /* Add some space between the categories and products */
    margin-top: 30px;
  }
   
  .products h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
   
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
   
  .product-item {
    width: calc(25% - 20px); 
    margin: 10px;
  }
   
   
  .product-card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    overflow: hidden;
  }
   
  .product-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
   
  .product-image {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
   
   
  .details {
    padding: 15px;
  }
   
  .details h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }
   
  .price {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
   
  .add-to-cart {
    padding: 8px 16px;
    border: none;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
   
  .add-to-cart:hover {
    background-color: #555;
  }
  @media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .products {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }

  .product-item {
    width: calc(50% - 20px);
  }
}

   
  </style>
   