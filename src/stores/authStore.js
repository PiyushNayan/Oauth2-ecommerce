import { defineStore } from "pinia"
import { ref} from "vue"

const useRootStore = defineStore('auth', () => {

    const user = ref(null)
    const email = ref(null);
    // const userToken = ref(sessionStorage.getItem('userEmail') || '')
    const authStatus = ref(false)
    
    const LOGIN = async (loginData) => {
        try {
            const res = await fetch("http://localhost:8020/user/login",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        userEmail: loginData.email,
                        userPassword: loginData.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            const parsedResponse = await res.json()

            user.value = { ...parsedResponse }
            // user.value = user.value['resultData']
            console.log("userDetails", user.value);
            // email.value = user.value.userEmail; 
            
            sessionStorage.setItem("userEmail", user.value.resultData.userEmail)
            sessionStorage.setItem("userToken", user.value.resultData.userToken)
            authStatus.value = true
            return true;
        } catch (e) {
            console.log("error", e)
        }
       return false;
    }
    const LOGOUT = ()=>{
      sessionStorage.removeItem("userEmail")
      sessionStorage.removeItem("userToken")
      authStatus.value = false
    }
    const register = async (loginData) => {
        try {
            const res = await fetch("http://localhost:8020/user/addUser",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        userEmail: loginData.email,
                        userPassword: loginData.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            const parsedResponse = await res.json()

            user.value = { ...parsedResponse }
            // user.value = user.value['resultData']
            console.log("userDetails", user.value);
            // email.value = user.value.userEmail; 
            
            sessionStorage.setItem("userEmail", user.value.resultData.userEmail)
            sessionStorage.setItem("userToken", user.value.resultData.userToken)
            authStatus.value = true
            return true;
        } catch (e) {
            console.log("error", e)
        }
       return false;
    }
    const updateAuthStatus= (userEmail)=>{
        if(userEmail){
            authStatus.value = true;
        }else{
            authStatus.value = false;
        }
    }


    


    return {
        LOGIN,
        user,
        LOGOUT,email,
        authStatus,
        register,
        updateAuthStatus
        // userToken
    }
})
export default useRootStore

