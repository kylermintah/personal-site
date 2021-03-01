import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import clc from '../assets/clc.png';
import tito from '../assets/tito-mockup.png';


export function Projects(props) {
return (<VerticalTimeline className='k-overflow' layout='2-columns' >
   <VerticalTimelineElement
   icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={55}/>}
   contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
  >
     <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>University of Pennsylania</h3>
     {/* <h5 className="vertical-timeline-element-subtitle"><strong>B.S.E Electrical Engineering w/CS minor</strong></h5><br/> */}
     <lighter>Projects undertaken during college</lighter>
   </VerticalTimelineElement>
  <VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
    date="Fall'19 - Spring'20"
    dateClassName='k-date-2'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src={tito}alt='University of Pennsylvania logo' height={55}/>}

  >
   
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>TITO</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Tune In, Tune Out</strong></h4>
    <p>ESE Senior Project</p>
        <p style={{fontWeight:'300', WebkitTextFillColor:'#FFBC00'}}>
          Ketterer Memorial Prize Winning Project 🎉<br/>
        </p>
        <p style={{fontWeight:'300'}}>
        A snap-on wearable solution for selective noise filtering <br/>
        <hr className="solid" color='#7B7D82'></hr>
        <strong>Kotlin, Python, Embedded Systems, Singal Processing</strong> <br/>
        <hr className="solid" color='#7B7D82'></hr>
        <div className="iframe-container">
        <iframe src='https://player.vimeo.com/video/406106876?byline=0&portrait=0'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /></div>
        <strong><a className='link' href='https://penntoday.upenn.edu/news/home-still-engaged-stem-classes#content:~:text=Celebrating%20seniors' target='_blank' rel='noreferrer'> Read More</a></strong> <br/>
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
    date="Spring'19"
    dateClassName='k-date-2'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src={clc}alt='University of Pennsylania logo' height={55}/>}

  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Calorie Life Cam</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Embedded Systems Project</strong></h4>
    <p>ESE 350</p>
    
        
        <p style={{fontWeight:'300'}}>Wearble dietary documentation device<br/>
        <hr className="solid" color='#7B7D82'></hr>
          <strong>IBM Watson , Python, C/C++, Embedded Systems</strong><br/>
          <hr className="solid" color='#7B7D82'></hr>
          <br/>
          <div className="iframe-container">
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

  <VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#FFFFFF', }}
    contentArrowStyle={{ borderRight: '7px solid  #2D364F' }}
    date="Fall'18"
    dateClassName='k-date-2'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src={'https://cdn11.bigcommerce.com/s-e3wpevzfi1/images/stencil/960w/products/1982/35541/Taylor-GSmini-Rosewood-2__13131.1606329435.jpg?c=2'}alt='University of Pennsylania logo' height={55}/>}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Automatic Guitar Tuner</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Signal Processing Project</strong></h4>
    
        
        <p style={{fontWeight:'300'}}>Developed automated guitar tuning software & handheld knob-turning device<br/>
        <hr className="solid" color='#7B7D82'></hr>
          <strong>Matlab, Arduino, Signal Processing</strong><br/>
          <hr className="solid" color='#7B7D82'></hr>
          <br/>
          <div className="iframe-container">
          <iframe src='https://player.vimeo.com/video/306698121?byline=0&portrait=0'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /></div>
        <br/><br/>
          Teammate(s): <strong><a className='link' href='https://www.linkedin.com/in/andrew-adallah-a58876136/' target='_blank' rel='noreferrer'> Andrew Adallah</a></strong> <br/>
        </p>
  
  </VerticalTimelineElement>

 

</VerticalTimeline>
);

}

export default Projects;