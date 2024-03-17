import React  , {useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext'



export default function QuestionForm() {

    const {addQuest , genquestId} = useGlobalContext() ; 

    const types = ['SINGLE CORRECT MCQ', 'MULTIPLE CORRECT MCQ', 'SUBJECTIVE']
    const subjects = ['PHYSICS', 'CHEMISTRY', 'MATHS']

    const [inputState, setInputState] = useState({
        quizId: 1001,
        questId:'',
        subject: '',
        type: '',
        marks: '',
        question: '',
        optA:'',
        optB:'',
        optC:'',
        optD:'',
        correctOpt:'',
    })
    const { quizId, questId,subject,type,marks,question,optA,optB,optC,optD,correctOpt, } = inputState;
   
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })

    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("quest add req")
        try {
            console.log("quest add req start")
            const id  =  genquestId() ; 
            // console.log(id) ; 
            inputState.questId = id ; 
            addQuest(inputState);
            console.log("quest added")
            setInputState({
                quizId: 1001,
                questId:'',
                subject: '',
                type: '',
                marks: '',
                question: '',
                optA:'',
                optB:'',
                optC:'',
                optD:'',
                correctOpt:'',
            })

        } catch (error) {
            console.log(error);

        }
    }


  return (
    <QuestStyled>

    <form class="form">
       <p class="form-title">You are at Question No 1</p>
       <div className="input-container">
                    <select
                        className="input"
                        name="subject"
                        value={subject}
                        onChange={handleInput('subject')}
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
                    <input type="text" placeholder="Enter Marks" 
                    value={marks} onChange={handleInput('marks')} 
                    />
                </div>
                <div className="input-container">
                    <textarea name="question"

                        placeholder='Add question'
                        cols="60" rows="10"
                        value={question} onChange={handleInput('question')}
                        ></textarea>
                </div>
                <div className="input-container">
                    <textarea name="OptA"

                        placeholder='Add OptA'
                        cols="40" rows="8"
                        value={optA} onChange={handleInput('optA')}
                        ></textarea>
                </div>
                <div className="input-container">
                    <textarea name="OptB"

                        placeholder='Add OptB'
                        cols="40" rows="8"
                        value={optB} onChange={handleInput('optB')}
                        ></textarea>
                </div>
                <div className="input-container">
                    <textarea name="OptC"

                        placeholder='Add OptC'
                        cols="40" rows="8"
                        value={optC} onChange={handleInput('optC')}
                        ></textarea>
                </div>
                <div className="input-container">
                    <textarea name="OptD"

                        placeholder='Add OptD'
                        cols="40" rows="8"
                        value={optD} onChange={handleInput('optD')}
                        ></textarea>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Enter Correct Opt" 
                    value={correctOpt} onChange={handleInput('correctOpt')} 
                    />
                </div>

                
         <button type="submit" class="submit" onClick={handleSubmit}>Add Next Question</button>

   </form>

    </QuestStyled>
  )
}

const QuestStyled = styled.div`
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
