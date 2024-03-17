import { createContext, useState ,useContext } from "react";
import axios from 'axios'
const GlobalContext = createContext() ; 
const BASE_URL = "http://localhost:3000/" ; 


export const GlobalContextProvider =({children}) => {
    const [isLoggedIn  , setIsLoggedIn] = useState(false) ; 
    let quizId = 1000 ; 
    let questId = 1000 ; 
    let studId = 1000 ; 
    let teachId = 1000 ; 
    let optid = 1000 ; 

    const genquizId =() => {
        quizId++ ; 
        return quizId ; 
    }
    const genquestId =() => {
        questId = questId+1 ; 
        return questId ; 
    }
    const genstudId =() => {
        studId = studId+1 ; 
        return studId ; 
    }
    const genteachId =() => {
        teachId = teachId+1 ; 
        return teachId ; 
    }
    const genoptId =() => {
        optid = optid+1 ; 
        return optid ; 
    }


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


   const addQuiz =  async (Quiz) => {
    try {
        console.log(Quiz) ; 
        const response = await axios.post(`${BASE_URL}add-quiz` , Quiz)
        
    } catch (error) {
        console.log(error) ; 
    }
   }

   const addQuest = async(Quest) => {
    try {
        console.log(Quest) ; 
        const response = await axios.post(`${BASE_URL}add-quest` , Quest)
        
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
                addQuiz ,
                genquizId,
                genquestId,
                genstudId,
                genteachId , 
                genoptId ,
                addQuest ,

                }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}