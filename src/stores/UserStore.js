import { defineStore } from "pinia"
import { reactive, ref} from "vue"


const useUserStore = defineStore('user', () => {
const user = reactive({value:{}})
const isLoggedIn = ref(false)
const updateUser = (newUser)=>{
    user.value = newUser;
    isLoggedIn.value = true;
    console.log("userValue:",user.value);
}
// const updateUser(newUser){
//     user.value = newUser;
// }
// const FETCH_USER_BY_ID = async (userId) => {
//     const res = await fetch("http://localhost:8090/cart/getCartById/abc%40xyz.com")
//     const parsedResponse = await res.json()
//     user.value = { ...parsedResponse }
// }
    return{
        user,
        updateUser,

}
})
export default useUserStore