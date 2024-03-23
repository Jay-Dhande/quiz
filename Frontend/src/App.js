import React, { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./components/Home";
import { GlobalContextProvider } from "./context/Globalcontext";
import { useGlobalContext } from "./context/Globalcontext";
import Testpage from "./components/Testpage";

export default function App() {
  // const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  // const [isLoggedIn  , setIsLoggedIn] = useState(false) ;

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <AppStyled>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/Home" element={<Home />} />
                <Route path="/test" element={<Testpage/>} />
              </Route>
            </Routes>
          </AppStyled>
        </AuthContextProvider>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

const AppStyled = styled.div`
  display: flex;
`;
