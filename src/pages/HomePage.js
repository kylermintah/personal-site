import React from 'react';
import Carousel from '../components/Carousel';
import Spotlight from '../components/Spotlight';
import ParticlesBg from "particles-bg";

function HomePage(props) {

    return (
        <div>
            <ParticlesBg type="ball" bg={true}>
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
            </ParticlesBg>
            <Spotlight title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
        </div>
    )

}

export default HomePage;