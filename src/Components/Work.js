import React from "react";
import "./StyledComponents/Work.css";
import netflixImage from "../images/netflix.jpg";
import portfolioImage from "../images/portfolio.png";
import pigGameImage from "../images/pigGame.png";
import contactAppImage from "../images/contactApp.png";
import voxclipsImage from "../images/voxclips.png";
import simCheckerImage from "../images/sim-checker.png";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div className="work">
      <div className="container">
        <h2>
          <span>Works</span>
        </h2>
        <div className="row">
          <WorkCard
            title="Sim Checker"
            text="a react app that helps you find thr mobile operator of your nigerian phone number"
            image={simCheckerImage}
            gitLink={"https://github.com/Bitee-cd/Sim_checker_frontend"}
            liveLink={"https://sim-checker-app.vercel.app"}
          />
          <WorkCard
            title="Voxclips"
            text="an application that converts audio podcasts to animated videos"
            image={voxclipsImage}
            gitLink={"https://github.com/Bitee-cd/contactApp"}
            liveLink={"https://voxclips.io/"}
          />
          <WorkCard
            title="Netflex"
            text="a netflix clone created using react"
            image={netflixImage}
            gitLink={"https://github.com/Bitee-cd/netflixClone"}
            liveLink={"https://netflex-bitee.netlify.app/"}
          />
          <WorkCard
            title="Piggy Game"
            text="a dice game of 2 players which winner is the first to reach 40 points"
            image={pigGameImage}
            liveLink={"https://bitee-cd.github.io/pigGame/"}
            gitLink={"https://github.com/Bitee-cd/pigGame"}
          />
          <WorkCard
            title="Portfolio"
            text="a react app which shows the works i have done"
            image={portfolioImage}
            liveLink={"https://calebduniya.netlify.app/"}
          />
          <WorkCard
            title="Contact App"
            text="a basic react-redux app which performs the CRUD operation"
            image={contactAppImage}
            gitLink={"https://github.com/Bitee-cd/contactApp"}
            liveLink={"https://reduxcontact-app.netlify.app"}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
