import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext';



export default function QuizCard(props) {
  const {getQuizData } = useGlobalContext() ; 
  const {getAllQuest , currquestion ,currquizid , setCurrQuizid  , showInstruction ,setShowInstruction} = useGlobalContext() ; 
    
  // const handleSubmit = (e) => {
  //    e.preventDefault() ; 
  //    console.log(props) ; 
  //    getQuest(props) ;
  //   if(currquestion){
  //     console.log(currquestion) ; 
  //   }
  // }

  const handleClick = e => {
    e.preventDefault() ; 
    console.log("quiz id is " , props) ; 
    getQuizData(props)    ; 
    setShowInstruction(false) ; 
    // console.log("quizdata" , quizdata) ; 
    // getAllQuest(props) ;
    // if(currquestion){
    //   console.log(currquestion) ; 
    // } 
    // else{
    //   console.log("curr quest is empty");
    // }
  }


  return (

    <QuizCardStyled>
        <div class="card">
          {/* <a  className='card1' href=""> */}
            <div className="card1" onClick={handleClick}>
                        <p className='Name' >{props.name} </p>
                        <div className="detail">
                            <div className="date">DATE : {props.date}</div>
                            <div className="Marks">MARKS : {props.marks}</div>
                            <div className="time">TIME : {props.time}</div>
                            <div className="duration">DURATION : {props.duration}minutes</div>
                        </div>
                        <p class="small"></p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                        </div>
                    {/* </a> */}
                </div>
    </QuizCardStyled>
  )
}

const QuizCardStyled = styled.div`
 .card p {
  font-size: larger;
  font-weight: 400;
  line-height: 20px;
  color:black;
}

.card p.small {
  font-size: 14px;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #7257fa;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  width: 30vw;
  background-color: #f2f8f9;
  border-radius: 1rem;
  padding: 1rem 0.8rem;
  margin: 1rem;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border:1px solid darkgray;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #7257fa;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: black;
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}
`
