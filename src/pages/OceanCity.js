import React from "react";
// import Carousel from '../components/Carousel';
import TripTimeline from "../components/TripTimeline";
import Spotlight from "../components/Spotlight";
import ParticlesBg from 'particles-bg';
import { Content } from "../components/Content";

function HomePage(props) {
  return (

<div>
      <Spotlight title={props.title}
          text={props.text} />
      <div style={{ background: "#fff" }}>
        <Content>
          <p>{props.subtitle}</p>
          <TripTimeline></TripTimeline>
        </Content>
      </div>
    </div>
  );
}

export default HomePage;
