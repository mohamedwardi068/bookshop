import React, { createContext, useContext, useEffect, useState } from "react";

import { Loginn, signUp } from "../appwrite/apiappwrite";
const authContext = createContext()
export const AuthProvider = ({ children }) => {

        const [user,setuser]=useState([])

            const login=async(email,password)=>{
                try{
              const reponse=await Loginn(email,password)
               await setuser(reponse)
    
              return reponse
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        const signup = async (email, password,phonenbr) => {
            try {
                const response = await signUp(email, password,phonenbr);
               await setuser(response)
              
                return response;
            } catch (error) {
                console.error('Signup Error:', error);
                throw error; 
            }
        };
    

 
  
 

return(
<authContext.Provider value={{user,login,signup}}>
        {children}
</authContext.Provider>)
}
export const useauth=()=>{ return useContext(authContext)}
