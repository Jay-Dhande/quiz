import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate   } from 'react-router-dom';
import { useGlobalContext } from '../context/Globalcontext';

export default function Login() {
    const { LoginUser,doSignInWithGoogle} = useAuthContext() ; 
    const {isLoggedIn  ,setIsLoggedIn } = useGlobalContext() ; 
    const [email , setEmail] = useState('') ; 
    const [password , setPassword]  = useState('') ; 
    const navigate= useNavigate() ; 
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await LoginUser(email, password); 
            console.log("go to home");
            navigate('/Home');
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleGoogleClick = async(e) => {
        e.preventDefault() ;
        try {
            await doSignInWithGoogle() ;  
            console.log("go to home");
            navigate('/Home');
        } catch (error) {
            console.log(error)
        }
        
        
   }

    return (
        <LoginStyled>
            <div className="form-container">
                <p className="title">Login</p>
                <form className="form">
                <div className="input-group">
                        <label for="email">email</label>
                        <input type="email" name="email" id="email" value={email} placeholder="" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" value={password} placeholder="" onChange={(e)=>setPassword(e.target.value)}/>
                            {/* <div class="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div> */}
                    </div>
                    <button className="sign" onClick={handleSubmit}>Log in</button>
                    <p> Don't have account ? <Link to='/signup'>SignUp</Link></p>
                </form>
                <div className="social-message">
                    <div className="line"></div>
                    <p className="message">Login with social accounts</p>
                    <div className="line"></div>
                </div>
                <div className="social-icons">
                    <button aria-label="Log in with Google" className="icon" onClick={handleGoogleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
              
            </div>
        </LoginStyled>
    )
}


const LoginStyled = styled.div`
margin: auto;
    .form-container {
  width: 25vw;
  height: 70vh;
  margin: auto;
  margin-top:12vh;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
}
p{
    text-align: center;
}
.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.3rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 90%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
}

.sign {
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.5rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  /* margin: 0.5rem; */
  margin: auto;
  margin-top: 20px;
}

.social-message {
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.social-message .message {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

.social-icons {
  display: flex;
  justify-content: center;
  /* border-radius: 100%; */
}

.social-icons .icon {
    border: 1px solid white;
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin-left: 8px;
}

.social-icons .icon svg {
  height: 1.25rem;
  width: 1.25rem;
  fill: #fff;
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

`
