import { ref, computed, reactive,watch } from "vue";
import Mycart from '../views/MyCart.vue'
import useProductStore from "@/stores/ProductStore";
import useCartStore from "@/stores/OrderAndCartStore";
import ShowMultiPeople from "@/components/ShowMultiPeople";
export default{
  components: {
    Mycart, ShowMultiPeople
  },
   

  setup() {

    const productStore = useProductStore();
    const cartStore = useCartStore();

    const currentProduct = computed(() => productStore.currentProduct)
    const recomRef = ref(null)


    // const get_rec_com = async (currentUserId, productId) => {

    //   const url = `http://10.20.3.163:9002/api/recommendations/${currentUserId}/friends/bought/${productId}`
    //   const res = await fetch(url)
    //   const data = await res.json();
    //   recomRef.value = data
    //   console.log("RESPONSE FROM RECOM", data)
    // }
    watch(
      () => currentProduct.value,
      (newCurrentProduct, oldCurrentProduct) => {
        console.log(oldCurrentProduct)
        // const productId = newCurrentProduct.productId;
        // get_rec_com("kjjk", productId);
      }
    );
    // get_rec_com("kjik", currentProduct.value.productId);


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
      const res = await fetch("http://10.20.3.163:9002/orders/add", head)
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
      recomRef
    };
  },
};