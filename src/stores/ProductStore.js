
import { defineStore } from "pinia"

import { reactive,ref} from "vue"

const useRootStore = defineStore('product', () => {

    // const userRole = ref('customer')
    
    const products = reactive({value:{}})
    const currentProduct = ref(null)

    const FETCH_PRODUCTS = async () => {
        const res = await fetch("http://10.20.3.163:9887/product/products")
        const parsedResponse = await res.json()
        
        products.value = { ...parsedResponse }
    }
    const FETCH_PRODUCT_BY_ID= async (productId) => {
        const res = await fetch(`http://10.20.3.163:9887/product/${productId}`)
        const parsedResponse = await res.json()
        
        currentProduct.value = parsedResponse.resultData
        console.log("productById",currentProduct.value)
    }
    const updateCurrentProduct = (productItem)=>{
        console.log("currentProduct",productItem)
        currentProduct.value = productItem;
    }



  // onMounted()
  // const FETCH_PRODUCTS = async () => {
  //     const res = await fetch("http://10.20.3.163:9887/product/products",{
  //         mode: 'no-cors',
  //         method: "GET",
  //         // body: JSON.stringify({
  //         //     userId: 1,
  //         //     title: "Fix my bugs",
  //         //     completed: false
  //         // }),
  //         headers: {
  //             "Content-type": "application/json; charset=UTF-8"
  //         }
  //     })
  //     const parsedResponse = await res.json()

  //     products.value = { ...parsedResponse }
  //     console.log("products",products.value)
  // }


    return {
        FETCH_PRODUCTS,
        // FETCH_ORDERS,
        // FETCH_CART,
        // FETCH_MERCHANTS_OF_PRODUCT,
        // productMerchants,
        // orders,
        products,
        currentProduct,
        updateCurrentProduct,
        FETCH_PRODUCT_BY_ID
        // cart
        // userRole,
        // updateRole

    }
})
export default useRootStore


 
