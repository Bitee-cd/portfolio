import React from 'react'
import './StyledComponents/Skills.css'
import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaReact,FaPhp} from 'react-icons/fa';
import { DiCss3, DiResponsive} from 'react-icons/di';
import { AiFillMacCommand} from 'react-icons/ai';
import { SiFirebase, SiJavascript, SiJquery, SiVisualstudiocode} from 'react-icons/si';



function Skills() {
    return (
        <div className="skills m-4">
           <div className="container">
               <div className="titleBox">
                    <h2><span>Skills</span></h2>
                   <p>The tools i use to brings my ideas to reality</p>
               </div>
                <div className="skillIcons row text-wrap text-center">
                    <div className="col" >
                        <FaHtml5/><br></br>
                    HTML-5
                    </div>
                    <div className="col">
                    <DiCss3/><br></br>
                    CSS3
                    </div>
                    <div className="col">
                    <SiJavascript/><br></br>
                    JAVASCRIPT
                    </div>
                    <div className="col">
                    <SiJquery/><br></br>
                    JQUERY
                    </div>
                    <div className="col">
                    <FaReact/><br></br>
                    REACT.JS
                    </div>
                    <div className="col">
                    <FaGitAlt/><br></br>
                    GIT
                    </div >
                    <div className="col">
                    <FaGithub/><br></br>
                    GITHUB
                    </div>
                    <div className="col">
                    <FaBootstrap/><br></br>
                    BOOTSTRAP 5
                    </div>
                    <div className="col">
                    <SiFirebase/><br></br>
                    FIREBASE
                    </div>
                    <div className="col">
                    <AiFillMacCommand/><br></br>
                    COMMAND LINE
                    </div>
                    <div className="col">
                    <SiVisualstudiocode/><br></br>
                    VISUAL STUDIO CODE
                    </div>
                    <div className="col">
                    <DiResponsive/><br></br>
                    RESPONSIVE DESIGN
                    </div>
                    <div className="col">
                    <FaPhp/><br></br>
                    PHP
                    </div>
                    
                </div>   
            </div> 
        </div>
    )
}

export default Skills
