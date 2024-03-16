import { createContext, useState ,useContext } from "react";
import axios from 'axios'
const GlobalContext = createContext() ; 
const BASE_URL = "http://localhost:3000/" ; 


export const GlobalContextProvider =({children}) => {
    const [isLoggedIn  , setIsLoggedIn] = useState(false) ; 

    const addTeacher = async (Teacher) => {
        try {
            console.log(Teacher) ; 
            const response = await axios.post(`${BASE_URL}add-teacher` , Teacher)
            
        } catch (error) {
            console.log(error) ; 
        }
    }

   const addStudent = async (Student) => {
    try {
        console.log(Student) ; 
        const response = await axios.post(`${BASE_URL}add-student` , Student)
        
    } catch (error) {
        console.log(error) ; 
    }
   }
    return (
        <GlobalContext.Provider 
        value={{isLoggedIn  ,
                setIsLoggedIn , 
                addTeacher ,
                addStudent ,
                }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}