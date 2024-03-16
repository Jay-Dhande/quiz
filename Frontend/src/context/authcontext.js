import { Auth } from "firebase/auth";
import { app , auth } from "../Firebase";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , 
         signOut ,signInWithPopup,GoogleAuthProvider, } from "firebase/auth";
import { useGlobalContext } from "./Globalcontext";


const AuthContext = createContext() ; 

export const AuthContextProvider = ({children}) =>{
    const { isLoggedIn , setIsLoggedIn} = useGlobalContext() ; 
    const CreateNewUser = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)

            
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage) ; 
            
        }
    }

    const LoginUser = async (email, password) => {
         try {
           await  signInWithEmailAndPassword(auth, email, password)
           console.log('marking loggin to true') ; 
           setIsLoggedIn(true) ; 
         } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage) ; 
         }
    }

    const LogOut = () => {
        signOut(auth) ; 
        setIsLoggedIn(false) ; 
    }
    
    const doSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('marking loggin to true') ; 
        setIsLoggedIn(true) ; 
      
      };

    return (
        <AuthContext.Provider 
        value={{CreateNewUser ,
                LoginUser,
                LogOut , 
                doSignInWithGoogle
        }
        }>
         { children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
      return useContext(AuthContext) ; 
}