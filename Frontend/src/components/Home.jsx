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


export default function Home() {
    const {LogOut } = useAuthContext() ; 

    const handlelogout = () => {
         LogOut() ; 
    }

    
  return (
    <HomeStyled>
      {/* <Welcome/> */}
      {/* <TeacherForm/> */}
      {/* <StudentForm/> */}
      {/* <ActiveTest/>
      <UpcomingTest/>
      <Announcements/> */}
      {/* <QuizForm/> */}
      <QuestionForm/>
    {/* <button onClick={handlelogout}>LogOut</button> */}
    </HomeStyled>
  
  )
}

const HomeStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

`