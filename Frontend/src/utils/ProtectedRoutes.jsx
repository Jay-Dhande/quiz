import React from 'react'
import { Navigate, Outlet  } from 'react-router-dom'
import { useGlobalContext } from '../context/Globalcontext'



export default function ProtectedRoutes() {
    const {isLoggedIn } = useGlobalContext() ; 
  return (
    
        isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    
  )
}
