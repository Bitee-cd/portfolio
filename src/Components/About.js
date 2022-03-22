

import React, {useState, useEffect} from 'react'
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
              <div className="row mt-3">
              <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('A Little Bit About Me!')
                                .start();
                            }}
                            />
                  <div className="col-6 imageBox">
                      <img src="https://image.freepik.com/free-vector/programmer-concept-illustration_114360-2923.jpg"alt=""className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-6">
                      
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
                      <div className="title">
                              
                              <div className="row">
                                    <p className="col-3">Hobbies :</p>   
                                    <div className="contentBox col-6">
                                        {page===1? <p>Playing football</p>
                                        :page===2?<p>Dancing</p>
                                        :page===3?<p>Listening to music</p>
                                        :page===4?<p>playing Video games</p>
                                        :<p>watching movies</p>}
                                    </div>
                                    <div className="col-3">
                                    {page===1? <img src={football} class="img-fluid circle " alt="nil"></img>
                                        :page===2?<img src={dance} class="img-fluid circle " alt="nil"></img>
                                        :page===3?<img src={music} class="img-fluid circle " alt="nil"></img>
                                        :page===4?<img src={game} class="img-fluid circle " alt="nil"></img>
                                        :<img src={movie} class="img-fluid circle " alt="nil"></img>}
                                    </div>
                              </div>
                              
                          </div>
                          <p>I am now seeking the opportunity to advance and develop my career by working with seasoned professionals while being productive in any given capacity</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About
