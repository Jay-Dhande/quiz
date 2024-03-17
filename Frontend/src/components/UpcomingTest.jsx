import React from 'react'
import styled from 'styled-components'


export default function UpcomingTest() {
    return (
        <UpcomingStyled>
                <h2>Upcoming Test</h2>
            <div class="cards">
                {/* <div className="title">Upcoming Test</div> */}
                <div class="card">
                    <a class="card1" href="#">
                        <p className='Name'>JEE MAIN</p>
                        <div className="detail">
                            <div className="date">DATE : 17-03-2024</div>
                            <div className="Marks">MARKS : 300</div>
                            <div className="duration">DURATION : 3 hrs</div>
                        </div>
                        <p class="small"></p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a class="card1" href="#">
                        <p className='Name'>JEE MAIN</p>
                        <div className="detail">
                            <div className="date">DATE : 17-03-2024</div>
                            <div className="Marks">MARKS : 300</div>
                            <div className="duration">DURATION : 3 hrs</div>
                        </div>
                        <p class="small"></p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a class="card1" href="#">
                        <p className='Name'>JEE MAIN</p>
                        <div className="detail">
                            <div className="date">DATE : 17-03-2024</div>
                            <div className="Marks">MARKS : 300</div>
                            <div className="duration">DURATION : 3 hrs</div>
                        </div>
                        <p class="small"></p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a class="card1" href="#">
                        <p className='Name'>JEE MAIN</p>
                        <div className="detail">
                            <div className="date">DATE : 17-03-2024</div>
                            <div className="Marks">MARKS : 300</div>
                            <div className="duration">DURATION : 3 hrs</div>
                        </div>
                        <p class="small"></p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                </div>
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
    height: 60vh;
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

