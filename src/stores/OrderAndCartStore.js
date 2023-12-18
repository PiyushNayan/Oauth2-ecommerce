import { defineStore } from "pinia"
import { ref } from "vue"


const useCartStore = defineStore('orderCart', () => {
    const orders = ref(null)
    
    const loadingCart = ref(false)
    const cartError = ref(null)
    const cart = ref(null);

    

    const FETCH_ORDERS = async (cartId) => {
        try {
            const apiUrl = 'http://localhost:8090/order/getAllOrdersById';
            const queryParams = new URLSearchParams();
            queryParams.set('cartId', cartId);

            const response = await fetch(`${apiUrl}?${queryParams.toString()}`);
            const data = await response.json();

            orders.value = data
            console.log("orders from store", orders.value)
        } catch (err) {
            console.log(err)

        } finally {
            loadingCart.value = false;
        }
    };

    const FETCH_CART = async (cartId) => {
        try {
            loadingCart.value = true;
            const apiUrl = 'http://localhost:8090/cart/getCartById';
            const queryParams = new URLSearchParams();
            queryParams.set('cartId', cartId);

            // Make the Fetch API call
            const response = await fetch(`${apiUrl}?${queryParams.toString()}`);
            const data = await response.json();

            // Handle the response
            cart.value = data
            console.log("cart from store", cart.value)
        } catch (err) {
            // console.log(err)
            // Handle errors
            cartError.value = err.message;

        } finally {
            loadingCart.value = false;
        }
    };

    const PLACE_ORDER = async (itemList) => {
        const head = {
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({

                cartId: sessionStorage.getItem("userEmail"),
                orderItemDtos: itemList,
                userId: "dsadc"
            }),

            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(head)
        const res = await fetch("http://localhost:8090/order/placeOrder", head)

        const parsedResponse = await res.json()
        console.log('order placed', parsedResponse)
    }


    const ADD_TO_CART = async (product, count) => {
        console.log("received",product)
        const head = {
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
                count: count,
                emailId: "piyush@gmail.com",
                merchantId: product.merchantId,
                productId: product.productId,
                userId: "dsadc"
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        // console.log(head)
        const res = await fetch("http://localhost:8090/cart/addToCart", head)
        // console.log(res)
        const parsedResponse = await res.json()
        console.log('add to cart', parsedResponse)

    }

    return {
        FETCH_CART,
        cart,
        FETCH_ORDERS,
        ADD_TO_CART,
        PLACE_ORDER,
        orders
    }
})
export default useCartStore