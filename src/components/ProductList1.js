import { ref ,computed} from 'vue';
import { useRouter } from 'vue-router';
import useProductStore  from '../stores/ProductStore.js';
import useCartStore  from '../stores/OrderAndCartStore.js';

  export default {
    // component:{
    //   ProductDetail
    // },


    setup() {
        const router = useRouter()
        // const products = ref([])
        //    console.log(products)
        const productStore = useProductStore();
        const cartStore = useCartStore() 
        productStore.FETCH_PRODUCTS();
        
        const products = computed(()=> {
            // console.log(rootStore.products);
            return productStore.products;
        })
        
        // console.log(rootStore.products);
           
          const categories=ref([
            {
                id:1,
                category_name:'ELectronics',
                category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
            },
            {
                id:2,
                category_name:'Fashion',
                category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
            },
            {
                id:3,
                category_name:'Mobile',
                category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
            },
            {
                id:4,
                category_name:'Apple',
                category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
            },
            {
                id:5,
                category_name:'Apple',
                category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
            }   

          ])
      const addToCart = (product)=>{
        console.log("product Details",product)
       cartStore.ADD_TO_CART(product,1)
       alert("your order has been added to cart")
      } 
      const isLoading = ref(true);
      const onItemClicked = (product)=>{
        console.log("This is clicked")
        productStore.FETCH_PRODUCT_BY_ID(product.productId)
        // productStore.updateCurrentProduct(product);
        router.push("/productDetail")
      }
      const loadProducts = () => {
        isLoading.value = true; 
        setTimeout(() => {
        //   localProducts.value = [...allProducts.value];
          isLoading.value = false; 
        }, 1500); 
      };
      
      loadProducts();
  
      return {
        isLoading,
        products,
        onItemClicked,
        categories,
        addToCart
      };
    },
  };