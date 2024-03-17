import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext';

export default function QuizForm() {

    const {addQuiz , genquizId } = useGlobalContext() ; 
    const classes = ['11', '12'];
    const patterns = ['MAINS', 'ADVANCE']
    const types = ['SINGLE CORRECT MCQ', 'MULTIPLE CORRECT MCQ', 'SUBJECTIVE']
    const subjects = ['PHYSICS', 'CHEMISTRY', 'MATHS', 'ALL']
    const [inputState, setInputState] = useState({
        quizId: '',
        name: '',
        grade: '',
        date: '',
        time: '',
        duration: '',
        subject: [],
        type: '',
        pattern: '',
        marks: '',
        questions: '',
        instructions: '',
    })
    const { quizId, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions } = inputState;
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })

    }
    
    const handlesubInput = name => e => {
            const { value } = e.target;
            if (value === 'ALL') {
                setInputState({ ...inputState, [name]: ['PHYSICS', 'CHEMISTRY', 'MATHS'] });
            } else {
                setInputState({ ...inputState, [name]: [value] });
            }    
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("quiz add req")
        try {
            console.log("quiz add req start")
            const id  =  genquizId() ; 
            // console.log(id) ; 
            inputState.quizId = id ; 
            addQuiz(inputState);
            console.log("quiz added")
            setInputState({
                quizId: '',
                name: '',
                grade: '',
                date: '',
                time: '',
                duration: '',
                subject: [],
                type: '',
                pattern: '',
                marks: '',
                questions: '',
                instructions: '',
            })

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <QuizStyled>

            <form className="form">
                <p className="form-title">START MAKING QUIZ</p>
                <div className="input-container">
                    <input type="text" value={name} onChange={handleInput('name')} placeholder="Enter Quiz Name" />

                </div>
                {/* <div className="input-container">
                    <input type="text" placeholder="Enter Quiz id" value={quizid} onChange={handleInput('quizid')} />
                </div> */}
                <div className="input-container">
                    {/* <input type="password" placeholder="Enter Grade"/> */}

                    <select
                        className="input"
                        name="grade"
                        value={grade}
                        onChange={handleInput('grade')}
                        required

                    >
                        <option value="">Select Grade</option>
                        {classes.map((subject, index) => (
                            <option key={index} >
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <input type="date" placeholder="Enter Date" value={date} onChange={handleInput('date')} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Enter time " value={time} onChange={handleInput('time')} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Enter Duration in Minutes" value={duration} onChange={handleInput('duration')} />
                </div>
                <div className="input-container">
                    <select
                        className="input"
                        name="subject"
                        value={subject}
                        onChange={handlesubInput('subject')}
                        required
                    >
                        <option value="">Select subject</option>
                        {subjects.map((subject, index) => (
                            <option key={index} >
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <select
                        className="input"
                        name="type"
                        value={type}
                        onChange={handleInput('type')}
                        required
                    >
                        <option value="">Select Type</option>
                        {types.map((subject, index) => (
                            <option key={index} >
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <select
                        className="input"
                        name="pattern"
                        value={pattern}
                        onChange={handleInput('pattern')}
                        required
                    >
                        <option value="">Select Pattern</option>
                        {patterns.map((subject, index) => (
                            <option key={index} >
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Total Marks" value={marks} onChange={handleInput('marks')} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Total Questions" value={questions} onChange={handleInput('questions')} />
                </div>
                <div className="input-container">
                    <textarea name="instructions"

                        placeholder='Add Instructions for the test'
                        cols="60" rows="10"
                        value={instructions} onChange={handleInput('instructions')}></textarea>
                </div>
                <button type="submit" className="submit" onClick={handleSubmit}>
                    PROCCED TO ADD QUESTIONS
                </button>

            </form>

        </QuizStyled>
    )
}
const QuizStyled = styled.div`
.form {
    margin-left: 25vw;
  /* margin: auto; */
  background-color: #fff;
  display: block;
  padding: 1rem;
  width: 47vw;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
  padding: 0.5rem;
}
.input-container input:focus{
    border: 2px solid #4F46E5;
}

.input-container input , .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 40vw;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
.input-container select {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 45vw;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container select:focus {
  border: 2px solid #4F46E5;
}
.input-container textarea {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
  background-color: #fff;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 40vw;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container textarea:focus {
  border: 2px solid #4F46E5;
}

`