import React from 'react'
import styled from 'styled-components'



export default function Welcome() {
    return (
        <WelcomeStyled>
            <div className="msg">
                Welcome to the QuizWhiz
            </div>
            <div className="reg">
                Register
                <div className="btns">
                    {/* <button </button> */}
                    <button className='teacher'>Teacher</button>
                    <button className='student'>Student</button>
                </div>
            </div>
        </WelcomeStyled>
    )
}

const WelcomeStyled = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: larger;
   font-size: 2rem;
    margin: auto;
    margin-top: 25vh;
    .msg{
        font-family: Arial, Helvetica, sans-serif;
        font-weight:900;
        font-size: larger;
    }
    .reg{
        text-align: center;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        font-weight: 700;
    }
    .btns{
        display: flex;
        flex-direction: column;
        width: 20vw;
        margin: 3vw;
    }
    button {
  position: relative;
  display: inline-block;
  margin: 0.4rem;
  padding: 0.8rem 1.5rem;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725AC1;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #725AC1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725AC1;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #725AC1;
}

button:active {
  transform: scale(0.9);
}
`