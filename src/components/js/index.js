import useRootStore from "@/stores/ProductStore";
import { computed } from "vue";
export default{
    setup() {
        const rootStore = useRootStore();
        rootStore.FETCH_PRODUCTS();
        
        const products = computed(()=> rootStore.products)
        console.log(rootStore.products);

        // rootStore.FETCH_POSTS();
        // const posts = computed(()=> rootStore.posts)

        return{
            products
            // posts
        }
        
    }
}