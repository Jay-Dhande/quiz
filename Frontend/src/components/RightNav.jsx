import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext';
import { useNavigate } from 'react-router-dom';

export default function RightNav({ submitted  , reviewed}) {
    const {currQuiz ,  index ,setIndex } = useGlobalContext() ; 
    const  size =currQuiz .length;
    // console.log(submitted) ; 
    function getClass(i) {
        if (i === index) return 'active btn';
        if (submitted[i]) return 'submitted btn';
        if (reviewed[i]) return 'reviewed btn';
        return 'btn';
    }

    const navigate = useNavigate();
    // const numbers = Array.from({ length: size  }, (_, index) => index + 1);
    const handleClick = (e) => {
        e.preventDefault() ; 
        // console.log(e.target.value) ;
        // index = e.target.value-1 ; 
        setIndex(e.target.value-1) ; 
    }
    const handleQuit = (e) => {
        e.preventDefault();
        setIndex(0);
        navigate('/Home');
    };
  return (
    <RightStyled>
        <h2>Navigate</h2>
        <div className="questionNo">
        {currQuiz.map((_, i) => (
        <button  key={i} className={getClass(i)} onClick={handleClick} value={i+1}>{i+1}</button>
      ))}
        </div>
        <button className='Quit' onClick={handleQuit}>Quit Test</button>
    </RightStyled>
  )
}

const RightStyled = styled.div`
    width: 35vw;
    .questionNo{
        display: flex;
        width: 95%;
        border: 2px solid black;
        height: fit-content;
        flex-wrap: wrap;

    }
    .btn{
        margin: 0.3rem;
        padding: 0.2rem;
        font-size: large;
        width: 2.5vw;
    }
    .Quit{
        width: 9vw;
        padding: 0.7rem;
        margin: 1rem;
    }
    .active{
        background-color: orange;
    }
    .submitted{
        background-color: green;
    }
    .reviewed{
        background-color: purple;
    }
`
