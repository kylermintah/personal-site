import React from 'react';
// import Carousel from '../components/Carousel';
import SocialLinks from '../components/SocialLinks';
import Spotlight from '../components/Spotlight';
// import ParticlesBg from 'particles-bg';


function HomePage(props) {

    return (
        <div className="grid-container ">
            {/* <ParticlesBg type="fountain" bg={true}/> */}
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
            <div  className="grid-child">
            <Spotlight title={props.title} subtitle={props.subtitle} text={props.text} />
            </div>

           <div  className="grid-child">
            {/* <img  src={kyler} height="140px" alt="Kyler"/> */}
            </div>
            
            
            <SocialLinks />
        </div>
    )

}

export default HomePage;