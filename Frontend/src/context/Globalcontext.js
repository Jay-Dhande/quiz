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
    const[index , setIndex ]  = useState(0); 
    const [quiz , setQuiz] = useState([]) ; 
    const [quizInstruction , setQuizInstruction] = useState({}) ; 
    const [currquestion , setcurrquestion] = useState({}) ;
    const [currquizid , setCurrQuizid] = useState() ;  
    const [showInstruction ,setShowInstruction ] = useState(false) ; 
    const [currQuiz , setcurrQuiz] = useState([]) ; 
    const [Test  , setTest] = useState(false) ; 

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

   const GetQuiz = async(data) => {
      try {
        console.log(data) ; 
        const response = await axios.get(`${BASE_URL}get-quiz` ,{params:{grade:data.grade}})  ;
        console.log("response quiz" , response) ; 
        setQuiz(response.data) ; 
      } catch (error) {
        console.log(error) ; 
      }

   }

   const getQuizData =  async(quizid) => {
    try {
        console.log(quizid) ; 
        const response = await axios.get(`${BASE_URL}get-quizinstruction` ,{params:{quizid:quizid.quizid}})  ;
        console.log("response quizinstruction" , response.data) ; 
        // setQuiz(response.data) ; 
        setQuizInstruction(response.data)
        setCurrQuizid(response.data.quizid) ; 
        setShowInstruction(true) ; 
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
   
   const getAllQuest = async(quiz) => {
    try {
        console.log("getAllQuest" , quiz) ; 
        const response = await axios.get(`${BASE_URL}get-allquest` ,{params:{quizid:quiz.quizid}})  ;
        console.log("response quest" , response.data) ; 
        setcurrQuiz(response.data) ; 
      } catch (error) {
        console.log(error) ; 
      }
   }

   const getQuest = async(quest) => {
    try {
        console.log(quest) ; 
        const response = await axios.get(`${BASE_URL}get-quest` ,{params:{questId:quest.questId}})  ;
        console.log("response quest" , response) ; 
        setcurrquestion(response.data) ; 
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
                GetQuiz,
                quiz ,
                setQuiz ,
                getQuizData , 
                quizInstruction ,
                getQuest,
                currquestion,
                getAllQuest,
                currquizid ,
                setCurrQuizid , 
                showInstruction ,
                setShowInstruction,
                setcurrQuiz , 
                currQuiz , 
                Test  , 
                setTest , 
                index,
                setIndex  , 
                }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}