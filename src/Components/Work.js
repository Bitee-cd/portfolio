import React from 'react'
import './StyledComponents/Work.css'
import netflixImage from "../images/netflix.jpg"
import portfolioImage from "../images/portfolio.png"
import pigGameImage from "../images/pigGame.png"
import WorkCard from './WorkCard'


function Work() {
    return (
        <div className="work">
            <div className="container">
                <h2><span>Works</span></h2>
                <div className="row">
                    <WorkCard  title='Netflex' text='a netflix clone created using react' image={netflixImage} gitLink={"https://github.com/Bitee-cd/netflixClone"} liveLink={"https://netflex-bitee.netlify.app/"}/>
                    <WorkCard  title='Piggy Game' text='a dice game of 2 players which winner is the first to reach 40 points'image={pigGameImage} liveLink={"https://bitee-cd.github.io/pigGame/"} gitLink={"https://github.com/Bitee-cd/pigGame"}/>
                    <WorkCard  title='Portfolio' text='a react app which shows the works i have done' image={portfolioImage}/>
                </div>
            </div>
        </div>
    )
}

export default Work
