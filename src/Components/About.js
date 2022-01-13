
import {  Link } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Icons from './Icons';
import './StyledComponents/About.css'
import football from "../images/football.png"
import dance from "../images/dance.png"
import music from "../images/music.png"
import game from "../images/game.png"
import movie from "../images/movie.png"
import Typewriter from 'typewriter-effect';

function About() {
  const [page, setPage] = useState(1)
  useEffect(()=>{
      setTimeout(function() {
        setPage((page%5)+1);
      }, 2000);
    });
  return (
      <div className="about">
          <div className="container">
              <div className="row">
                  <div className=" col-12">
                    
                     <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('A Little Bit About Me!')
                                .start();
                            }}
                            />
                      
                      <div className="text-wrap" >
                            <p >I am Caleb Bitiyong Duniya, a self-taught 
                          front-end developer currently based in Kaduna Nigeria.<br></br>
                      </p>
                      </div>
                      
                      <p>I initially began to code during my third year in the university although i have taken programming courses prior to this as it was part of my syllabus.
                          As someone who is curious and likes to learn new things, i jumped straight in, learning was an interesting and challenging experience.
                          I had to go on break for a while to focus on my studies.<br></br>
                          Fast forward to July 2021 after my graduation(first class honors B.Eng Mechanical Engineering 😉), I participated in KodeCamp internship which ended in December 2021 and also SideHustle internship which
                          lasted for just 6 weeks, specialising in frontend track(HTML,CSS, JavaScript and ReactJs). I Collaborated with product team members to implement new
                            feature developments,worked in groups to build and deliver highly functional web
                            applications,worked as Team Leader; delegated, assigned and supervised
                            tasks amongst members and engaged in debugging activities with other interns during my internship  

                      </p>
                      <p>I am now seeking the opportunity to advance my career as a Frontend Developer,  with learning and developing my career by working with seasoned professionals while being productive in any given capacity</p>
                      
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="row">
                          <div className="title">
                              <h4>Things I enjoy doing</h4>
                          </div>
                                  {page===1? <img src={football} class="img-fluid circle "></img>
                                  :page===2?<img src={dance} class="img-fluid circle "></img>
                                  :page===3?<img src={music} class="img-fluid circle "></img>
                                  :page===4?<img src={game} class="img-fluid circle "></img>
                                  :<img src={movie} class="img-fluid circle "></img>}
                          
                              <div className="contentBox">
                                  {page===1? <h4>Playing football</h4>
                                  :page===2?<h4>Dancing</h4>
                                  :page===3?<h4>Listening to music</h4>
                                  :page===4?<h4>playing Video games</h4>
                                  :<h4>watching movies</h4>}
                              </div>   
                      </div>        
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About
