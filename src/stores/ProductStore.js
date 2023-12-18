import { defineStore } from "pinia"
import { reactive,ref} from "vue"

const useRootStore = defineStore('product', () => {

    // const userRole = ref('customer')
    
    const products = reactive({value:{}})
    const currentProduct = ref(null)
    const FETCH_PRODUCTS = async () => {
        const res = await fetch("http://localhost:9887/product/products")
        const parsedResponse = await res.json()
        
        products.value = { ...parsedResponse }
    }
    const FETCH_PRODUCT_BY_ID= async (productId) => {
        const res = await fetch(`http://localhost:9887/product/${productId}`)
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
    //     const res = await fetch("http://localhost:9887/product/products",{
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

    // const orders = reactive({value:{}})
    // const FETCH_ORDERS = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     const parsedResponse = await res.json()
    //     products.value = { ...parsedResponse }
    // }

    // const cart = reactive({value:{}})
    // const FETCH_CART = async () => {
    //     const res = await fetch("http://localhost:8090/cart/getCartById/abc%40xyz.com")
    //     const parsedResponse = await res.json()
    //     cart.value = { ...parsedResponse }
    // }

    // const productMerchants = reactive({value:{}})
    // const FETCH_MERCHANTS_OF_PRODUCT = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     const parsedResponse = await res.json()
    //     products.value = { ...parsedResponse }
    // }

//    const updateRole = (role)=>{
//     user.value = role;
//    }

  
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

