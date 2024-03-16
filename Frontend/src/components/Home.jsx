import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import Welcome from './Welcome';
import TeacherForm from './TeacherForm';
import StudentForm from './StudentForm';

export default function Home() {
    const {LogOut } = useAuthContext() ; 

    const handlelogout = () => {
         LogOut() ; 

    }
  return (
    <>
      {/* <Welcome/> */}
      {/* <TeacherForm/> */}
      <StudentForm/>
    {/* <button onClick={handlelogout}>LogOut</button> */}
    </>
  
  )
}
