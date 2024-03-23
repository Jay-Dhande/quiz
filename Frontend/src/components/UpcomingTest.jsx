import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext'
import QuizCard from './QuizCard';


export default function UpcomingTest() {
  const { GetQuiz, quiz } = useGlobalContext();

  // student: {
  //     name:"stud one",
  //     email:"stud@skj",
  //     PhoneNo:152,
  //     RollNo:"9283766",
  //     grade:"12",
  //     subjects:["MATHS","PHYSICS", "CHEMISTRY"],
  //     studId:"1001",
  // }

  useEffect(() => {
    GetQuiz({ grade: "12" });
  }, [])
  console.log("quiz", quiz);
  // Assuming quizzes is an array of objects containing quiz information
  const today = new Date();
  const upQuiz = quiz.filter(quiz => {
    const quizDate = new Date(quiz.date);
    return quizDate >= today;
  });


  return (
    <UpcomingStyled>
      <h2>Upcoming Test</h2>
      <div class="cards">
        {upQuiz.map(element => {
          const { quizid, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions } = element;
          console.log("element ", element)
          return (
            <QuizCard
              quizid={element.quizid}
              name={element.name}
              grade={element.grade}
              date={element.date}
              time={element.time}
              duration={element.duration}
              subject={element.subject}
              type={element.type}
              pattern={element.pattern}
              marks={element.marks}
              questions={element.questions}
              instructions={element.instructions}
            />
          )
        })
        }
      </div>
    </UpcomingStyled>
  )
}


const UpcomingStyled = styled.div`
/* width: 50vw; */
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 2px solid black; */
padding: 1rem;
   .cards{
    height: 34vh;
    overflow-y: scroll;
    /* scroll-margin: 1rem; */
    scroll-padding: 1rem;
    scroll-behavior: smooth;
   }
  
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

//     <div class="card">
//     <a class="card1" href="#">
//         <p className='Name'>{element.name}</p>
//         <div className="detail">
//             <div className="date">DATE : {element.date}</div>
//             <div className="Marks">MARKS : {element.marks}</div>
//             <div className="time">TIME : {element.time}</div>
//             <div className="duration">DURATION : {element.duration}minutes</div>
//         </div>
//         <p class="small"></p>
//         <div class="go-corner" href="#">
//             <div class="go-arrow">
//                 →
//             </div>
//         </div>
//     </a>
// </div>