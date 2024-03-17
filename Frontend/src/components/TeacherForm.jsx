import React , {useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Globalcontext'


export default function TeacherForm() {
    const subjects = ['MATHS', 'PHYSICS', 'CHEMISTRY']
    const {addTeacher , genteachId} = useGlobalContext() ; 

    const [inputState, setInputState] = useState({
        email:'',
        name: '',
        PhoneNo: '',
        subject: '',
        classes: ['11' , '12'],
        teachId:'',
    })
    
    const {email ,name, PhoneNo,subject ,classes,teachId } = inputState ; 
    
    const handleInput = name => e => {
        setInputState({...inputState , [name]:e.target.value})
    
    }

    const handleSubmit = e => {
        e.preventDefault() ; 
        console.log("teacher add req")
        try {
            const id = genteachId() ; 
            inputState.teachId = id ; 
            console.log("teacher add req start")
            addTeacher(inputState) ;
            console.log("teacher added") 
             setInputState({
                email:'',
                name: '',
                PhoneNo: '',
                subject: '',
                classes: ['11' , '12'], 
                teachId:'',
             })
          
        } catch (error) {
            console.log(error) ;  
    
        }
    }
    return (
        <TeacherStyled>
            <form class="form">
                <p class="title">Register </p>
                <label>
                    <input className="input" type="text" value={name} placeholder="" required="" onChange={handleInput('name')} />
                    <span>Name</span>
                </label>


                <label>
                    <input className="input" type="text" value={email} placeholder="" required="" onChange={handleInput('email')} />
                    <span>Email</span>
                </label>

                <label>
                    <input className="input" type="text" value={PhoneNo} placeholder="" required="" onChange={handleInput('PhoneNo')} />
                    <span>PhoneNo</span>
                </label>
                <label>
                    <select
                        className="input"
                        name="subject"
                        value={subject}
                        onChange={handleInput('subject')}
                        required
                    >
                        <option value="">Select Subject</option>
                        {subjects.map((subject, index) => (
                            <option key={index} >
                                {subject}
                            </option>
                        ))}
                    </select>
                    <span>Subject</span>
                </label>
                
                <button class="submit" onClick={handleSubmit}>Submit</button>

            </form>
        </TeacherStyled>
    )
}

const TeacherStyled = styled.div`
margin: auto;
font-size: larger;
width: 35vw;
/* align-items: center; */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message, 
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 95%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}
.form label select{
    width: 100%;
}

.form label .input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
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
}

.submit:hover {
  background-color: #00bfff96;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
.class-btns{
    display: flex;
}
.class{
    background-color: #333;
    color: white;
}
#active{
    background-color: #333;
    color: #00bfff;
}
`

