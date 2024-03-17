import React from 'react'
import styled from 'styled-components'


export default function ActiveTest() {
    return (
        <ActiveStyled>
            <h2>Active Test</h2>
            <div class="card">
                <div className="title">Quiz Name</div>
                <div className="details">
                <div className="det1">
                     <div className="duration">Duration</div>
                    <div className="marks">Marks</div>
                    <div className="pattern">Mains</div>
                </div>
                <div className="det2">
                    <div className="subjects">PCM</div>
                    </div>   
                  

                </div>
                <div className="start">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        <div class="text">
                            Start
                        </div>
                    </button>
                </div>
            </div>

        </ActiveStyled>
    )
}

const ActiveStyled = styled.div`
h2{
    text-align: center;
}
.card {
  box-sizing: border-box;
  width: 30vw;
  height: 35vh;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  font-weight: bolder;
  color: black;
  margin: 1rem;
  margin-top: 1.5rem;
}
.title{
    flex: 1;
    justify-content:center;
    align-items: center;
    padding-top: 2rem;
    font-size: larger;
}
.details{
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.start{
    flex: 1;
    padding: 1rem;
}
.card:hover {
  border: 1px solid #3654ff;
  transform: scale(1.05);
}
.button {
  background-color: #ffffff00;
  color: black;
  width: 8.5em;
  height: 2.9em;
  border: #3654ff 0.2em solid;
  border-radius: 11px;
  text-align: right;
  transition: all 0.6s ease;
  /* padding: 1rem; */
}

.button:hover {
  background-color: #3654ff;
  cursor: pointer;
}
.det1{
    display: flex;
    justify-content: space-evenly;
}
.button svg {
  width: 1.6em;
  margin: -0.2em 0.8em 1em;
  position: absolute;
  display: flex;
  transition: all 0.6s ease;
}

.button:hover svg {
  transform: translateX(5px);
}

.text {
  margin: 0 1.5em
}

`