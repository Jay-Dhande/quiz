import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import Welcome from './Welcome';
import TeacherForm from './TeacherForm';
import StudentForm from './StudentForm';
import Announcements from './Announcements';
import UpcomingTest from './UpcomingTest';
import styled from 'styled-components';
import ActiveTest from './ActiveTest';
import QuizForm from './QuizForm';
import QuestionForm from './QuestionForm';
import QuizInstruction from './QuizInstruction';
import Testpage from './Testpage';
import { useGlobalContext } from '../context/Globalcontext';


export default function Home() {
    const {LogOut } = useAuthContext() ; 
    const {showInstruction ,setShowInstruction ,Test} =useGlobalContext() ; 

    const handlelogout = () => {
         LogOut() ; 
    }


  return (
    <HomeStyled>
      {/* <Welcome/> */}
      {/* <TeacherForm/> */}
      {/* <StudentForm/> */}
 

     {!showInstruction ? 
      <>
      <ActiveTest/>
      <UpcomingTest/>
      <Announcements/>
      </>
       : <QuizInstruction/> }
    
       
      {/* <QuizInstruction/> */}
      {/* <QuizForm/> */}
      {/* <QuestionForm/> */}
    {/* <button onClick={handlelogout}>LogOut</button> */}
    </HomeStyled>
  
  )
}

const HomeStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

`