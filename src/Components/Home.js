import React from 'react'
import './StyledComponents/Home.css'
import profile from "../images/profile icon.png"
import Icons from './Icons'
import { FaCloudDownloadAlt} from 'react-icons/fa';
import resume from "../resume/resume.pdf"
import Typewriter from 'typewriter-effect';


function Home() {
    return (
        <div className="home ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 leftBox my-auto">
                       <h6>Hello! I am</h6>
                       <Typewriter
                            options={{
                                strings: ['Caleb Bitiyong Duniya', 'a.k.a Bitee'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                       <br></br>
                     
                       <p>a</p><h6>FRONT-END WEB DEVELOPER</h6>
                       
                       <a
                       className="btn btn-outline-dark"
                        href={resume}
                         download>
                           <FaCloudDownloadAlt/>  Download CV
                           </a>
                       <Icons/>
      
                    </div>
                    <div className="col-12 col-md-4 rightBox">
                    <img src={profile} class="img-fluid circle "></img>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
