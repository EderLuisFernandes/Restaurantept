"use client"

import { useRouter } from "next/navigation"


const UseBackPage = () => {
     const router = useRouter()
     const backPage = ()=> {
            if(window.history.length > 1){
                router.back();
            }else{
                router.push("/")
            }
        };

        return backPage
}
 
export default UseBackPage;
   
    


