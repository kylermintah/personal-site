import React, { useState } from "react";
// import Carousel from '../components/Carousel';
import SocialLinks from "../components/SocialLinks";
import Spotlight from "../components/Spotlight";
import ParticlesBg from "particles-bg";

function HomePage(props) {
  var spiderverse = props.spiderverse;
  return (
    <div
      className="grid-container"
      style={{
        height: "42rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {spiderverse ? <ParticlesBg type="square" bg={true} /> : <div />}
      {/* Particle Types
              "color"
              "ball"
              "lines"
              "thick"
              "circle"
              "cobweb"
              "polygon"
              "square"
              "tadpole"
              "fountain"
              "random"
              "custom" */}
      <div className="grid-child" style={{paddingBottom:'3rem'}}>
        <Spotlight
          title={props.title}
          subtitle={props.subtitle}
          text={props.text}
        />
        
      </div>
      <SocialLinks />
    </div>
  );
}

export default HomePage;
