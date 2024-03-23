import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext';
import { useNavigate } from 'react-router-dom';

export default function QuizInstruction(props) {
    const {getQuest , getAllQuest ,  quizInstruction ,currquizid ,setShowInstruction , setTest , index } = useGlobalContext() ; 
   
   
    const navigate = useNavigate() ; 
    const handleSubmit = async(e) => {
       e.preventDefault() ; 
       await getAllQuest(quizInstruction[0]);
       setTest(true) ; 
    //    index = 0 ; 
       navigate('/test') ; 
       
    }

    const handleBack = (e) => {
     e.preventDefault()  ; 
     setShowInstruction(false) ; 
    }

    return (
    <InstructStyled>
        <h2>Test Details </h2>
        <div className="card">
        <div className="instructions">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla ex ipsam sed sapiente eligendi culpa in ea. Autem optio harum tenetur veniam consectetur, accusamus deserunt temporibus enim consequuntur exercitationem libero quos inventore reprehenderit, quas quis atque sapiente perferendis recusandae iusto quaerat nulla! Quibusdam consequuntur nesciunt blanditiis ullam modi quos ipsum? Distinctio soluta perspiciatis eligendi debitis saepe obcaecati repellendus suscipit, quod totam eaque. Unde qui culpa voluptate quam, velit sunt esse nobis soluta distinctio temporibus doloribus perspiciatis corporis dignissimos laborum saepe aliquam. Veniam eos repellat a! Dolor autem optio vel, fuga, ut ducimus assumenda quisquam pariatur odit recusandae architecto quia voluptates maxime earum nihil aspernatur sit magni magnam, tenetur inventore omnis accusamus tempore sunt. Architecto iusto debitis nemo, exercitationem sit ducimus cumque dicta in necessitatibus mollitia at ex repudiandae reiciendis praesentium, sapiente rem illum sequi, perferendis voluptates. Ducimus ratione numquam voluptate fugiat, neque quam provident accusamus, reprehenderit quia rem odio. Veniam delectus, maxime at, fuga impedit porro inventore possimus, cumque sint dolore sed tempora aliquam pariatur earum nam dolor consectetur ipsum libero corrupti iusto explicabo. Ducimus sit odit dignissimos deserunt ratione nesciunt temporibus fugit rerum. Iure, explicabo cupiditate quaerat, non obcaecati corrupti ut nam eius asperiores cum pariatur quis unde?
        </div>
        <div className="quiz-card">
        <h2>Quiz Name</h2>
        <div className="details">
            {/* <div className="name">Quiz Name</div> */}
            
            <div className="score">
            <div className="grade item">Quiz Grade</div>
            <div className="subjects item">Quiz Subjects</div>
            <div className="pattern item">Quiz Pattern</div>
            <div className="questions item">Total Questions</div>
            </div>
           
            <div className="timing">
            <div className="date item">Quiz Date </div>
            <div className="time item">Quiz Starting Time</div>
            <div className="duration item">Quiz Duration</div>
            <div className="marks item">Total Marks</div>
            </div>
            
        </div>
        </div>
           
        </div>
        <button className="submit" onClick={handleSubmit} >Start Test</button>
        <button className="back" onClick={handleBack} >Back to Home</button>
    </InstructStyled>
  )
}


const InstructStyled  = styled.div`
    width: 91vw;
    margin-left: 5vw;
    
    h2{
        text-align: center;
    }
    .card{
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        /* overflow-x: initial; */
    }
    .instructions{
        border: 2px solid black;
        padding: 2rem;
        margin-bottom: 1rem;
    }
    .details{
        display: flex;
        justify-content: space-evenly;
    }
    .quiz-card{
        border: 2px solid black;
        width: 85vw;
        /* padding: 1.5rem; */
        background-color: #7ff4ff;
        border-radius: 1rem;
    }
    .score{
        /* border: 2px solid black; */
        flex: 1;
        /* justify-content: center; */
    }
    .timing{
        flex: 1;
        /* border: 2px solid black; */
        margin-left: 1rem;
    }
    .item{
        margin: 1rem;
        margin-left: 2rem;
    }
    
    .submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #00bfff;
  width: 15vw;
  margin-left:38vw;
}

.submit:hover {
  background-color: #00bfff96;
}

.back{  
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #ff5e00;
  width: 15vw;
  margin-left:38vw;
  margin-top: 1vw;

}

.back:hover {
  background-color: #ff000095;
}
`