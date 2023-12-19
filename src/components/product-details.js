import { ref, computed, reactive, watch } from "vue";
import Mycart from '../views/MyCart.vue'
import useProductStore from "@/stores/ProductStore";
import useCartStore from "@/stores/OrderAndCartStore";
import ShowMultiPeople from "@/components/ShowMultiPeople";
export default {
  components: {
    Mycart, ShowMultiPeople
  },

  setup() {

    const productStore = useProductStore();
    const cartStore = useCartStore();
    const recomRef = ref(null)

    const currentProduct = computed(() => productStore.currentProduct)
    // productStore.FETCH_PRODUCT_BY_ID();
    // const currentProduct = computed(() => {
    //   console.log("received", productStore.currentProduct.value)
    //   return productStore.currentProduct
    // })

    // watch(
    //   () => currentProduct.value,
    //   (newCurrentProduct, oldCurrentProduct) => {
    //     console.log(oldCurrentProduct)
    //     const productId = newCurrentProduct.productId;
    //     if (sessionStorage.getItem("userId")) {
    //       get_suggestion("kjjk", productId);
    //     }

    //   }
    // );

    watch(
      () => currentProduct.value,
      async (newCurrentProduct, oldCurrentProduct) => {
        try {
          console.log(oldCurrentProduct);
          const productId = newCurrentProduct.productId;

          if (sessionStorage.getItem("userId")) {
            await get_suggestion("kjjk", productId);
          }
        } catch (error) {
          console.error("Error in watch function:", error.message);
          // Handle the error or log it as needed
        }
      }
    );

    const get_suggestion = async (currentUserId, productId) => {
      try {
        const url = `http://172.20.10.5:9002/api/recommendations/${currentUserId}/friends/bought/${productId}`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const data = await res.json();
        recomRef.value = data;
        console.log("RESPONSE FROM RECOM", data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error or log it as needed
      }
    };

    // get_suggestion("kjik", currentProduct.value.productId);

    const merchants = ref([
      {
        name: 'karan',
        id: 1,
        location: 'kota',
        price: '200'
      },
      {
        name: 'kunal',
        id: 2,
        location: 'bundi',
        price: '400'
      },
      {
        name: 'raj',
        id: 3,
        location: 'pune',
        price: '200'
      },
      {
        name: 'rajiu',
        id: 4,
        location: 'pune',
        price: '200'
      }
    ])
    const addToCart = () => {
      cartStore.ADD_TO_CART(currentProduct.value, 1)
      alert("product has been added to cart")
      console.log(currentProduct.value)

    };
    const quantity = ref(1);
    const increase = () => {
      if (quantity.value < 50) {
        quantity.value += 1;
      }
    };
    const selectedMerchant = reactive({ value: { name: 'karan', id: 1, location: 'kota', price: '200' } })
    const selectMerchant = (merchant) => {
      console.log("Hello")
      selectedMerchant.value = merchant;
      console.log(selectedMerchant.value)

    };
    const decrease = () => {
      if (quantity.value > 1) {
        quantity.value -= 1;
      }
    }



    const buyNow = async () => {
      // const 
      const orderDto = {
        orderId: "afslhda",
        product: currentProduct.value,
        // userId: sessionStorage.getItem("userId")
        userId: "aaaalllllfasdga"
      }
      const head = {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(orderDto),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      console.log(orderDto)
      const res = await fetch("http://172.20.10.5:9002/orders/add", head)
      console.log(res)
    }
    return {

      addToCart,
      buyNow,
      merchants,
      currentProduct,
      increase,
      decrease, selectMerchant, quantity,
      selectedMerchant,

    };
  },
};