import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import clc from '../assets/clc.png';
import tito from '../assets/tito-mockup.png';


function Projects(props) {
return (<VerticalTimeline className='k-overflow' layout='2-columns' >
   
  <VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
    date="Aug 2019 - May 2020"
    dateClassName='k-date'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src={tito}alt='University of Pennsylvania logo' height={55}/>}
    
    // icon={
    // <FontAwesomeIcon className='fas fa-2x'  icon={faMicrosoft} />}
  >
   
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>TITO</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Tune In, Tune Out</strong></h4>
    <p>University of Pennsylvania</p>
        <p style={{fontWeight:'300'}}>ESE Senior Design<br/>
        Ketterer Memorial Prize Winning Project<br/>
        A snap-on wearable solution for selective noise filtering <br/>
        <hr class="solid" color='#7B7D82'></hr>
        <strong>Kotlin, Python, Embedded Systems, Singal Processing</strong> <br/>
        <hr class="solid" color='#7B7D82'></hr>
        <div class="iframe-container">
        <iframe src='https://player.vimeo.com/video/406106876?byline=0&portrait=0'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /></div>
        <br/><br/>
        Teammate(s):<strong>
          <a className='link' href='https://celine-lee.github.io/index.html#about' target='_blank' rel='noreferrer'> Celine Lee</a>, 
        <a className='link' href='https://aj-geers.github.io/' target='_blank' rel='noreferrer'> A.J. Geers</a>,
        <a className='link' href='https://www.ransfordantwi.com/' target='_blank' rel='noreferrer'> Ransford Antwi</a></strong> <br/>
        </p>
        
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#FFFFFF', }}
    contentArrowStyle={{ borderRight: '7px solid  #2D364F' }}
    date="Jan 2019 - May 2019"
    dateClassName='k-date'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src={clc}alt='University of Pennsylania logo' height={55}/>}
    
    
    // icon={
    // <FontAwesomeIcon className='fas fa-2x'  icon={faMicrosoft} />}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Calorie Life Cam</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Embedded Systems Project</strong></h4>
    <p>University of Pennsylvania</p>
    
        
        <p style={{fontWeight:'300'}}>Wearble dietary documentation device<br/>
        <hr class="solid" color='#7B7D82'></hr>
          <strong>IBM Watson , Python, C/C++, Embedded Systems</strong><br/>
          <hr class="solid" color='#7B7D82'></hr>
          <br/>
          <div class="iframe-container">
          <iframe src='https://player.vimeo.com/video/335656889?byline=0&portrait=0'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /></div>
        <br/><br/>
          Teammate(s): <strong><a className='link' href='https://www.ransfordantwi.com/' target='_blank' rel='noreferrer'> Ransford Antwi</a></strong> <br/>
        </p>
  
  </VerticalTimelineElement>

 

</VerticalTimeline>
);

}

export default Projects;