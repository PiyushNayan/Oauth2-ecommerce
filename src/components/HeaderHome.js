import { computed,} from 'vue';
import svg from '../assets/cart.svg' 
import useAuthStore  from '../stores/authStore';
export default {
  components:{
  svg
},
  setup(){
    const authStore = useAuthStore();
    // const authStatus = ref(false)

    // const getAuthStatus = ()=>{
      
    // }
    // getAuthStatus()
  //  const authStatus = computed(()=>{
  //   if(sessionStorage.getItem("userEmail")){

  //     return true;
      
  //   }else{
  //     return false;
  //   }
    
  //  })
  
  const authStatus = computed(()=>authStore.authStatus)
  
  
   const authChange = ()=>{
    if(authStatus.value){
      authStore.LOGOUT()
    }
    
    // authStore.LOGOUT()
  }
      
    
    

    const user = computed(()=>authStore.user)
    const email=computed(()=>authStore.email)
    return {
      authChange,
      email,user,
      // getAuthStatus,
      authStatus
    };
    
  },
  
  }

