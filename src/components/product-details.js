import { ref, computed,reactive } from "vue";
import Mycart from '../views/MyCart.vue'
import useProductStore from "@/stores/ProductStore";
import useCartStore from "@/stores/OrderAndCartStore";
export default {
  components: {
    Mycart
  },

  setup() {

    const productStore = useProductStore();
    const cartStore = useCartStore();
    
    const currentProduct = computed(()=>productStore.currentProduct)
    // productStore.FETCH_PRODUCT_BY_ID();
    // const currentProduct = computed(() => {
    //   console.log("received", productStore.currentProduct.value)
    //   return productStore.currentProduct
    // })


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
      cartStore.ADD_TO_CART(currentProduct.value,1)
      alert("product has been added to cart")
      console.log(currentProduct.value)
      
    };
    const quantity = ref( 1 );
  const increase = () => {
    if (quantity.value < 50){
      quantity.value += 1;
    }
  };
  const selectedMerchant = reactive({value:{name: 'karan', id: 1, location: 'kota', price: '200'}})
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
    return {

      addToCart,
      // buyNow,
      merchants,
      currentProduct,
      increase,
      decrease,selectMerchant,quantity,
      selectedMerchant,
      
    };
  },
};