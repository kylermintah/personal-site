import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Row } from 'react-bootstrap';
import {Chip} from '@material-ui/core';
import clc from '../assets/clc.png';
import tito from '../assets/tito-mockup.png';


export function Projects(props) {
return (<VerticalTimeline className='k-overflow' layout='2-columns' >

<VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
    date="Summer 2020 - Present"
    dateClassName='k-date-2'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src='https://user-images.githubusercontent.com/24496327/119273543-6c0caf00-bbd9-11eb-8193-8c666ef741f2.png' alt='University of Pennsylvania logo' height={55}/>}

  >
   
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>WEDOO</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Real-Time Group ToDo List 📱✏</strong></h4>
    <p>Android/iOS App</p>

        <p style={{fontWeight:'300'}}>
        I grew tired of using our groupchat to keep track of groceries and errand planning.
        I thought it would be fun to build a mobile app that makes it easy to collaborate on tasks in real-time. 
        Has been helpful so far on group trips to the supermarket!
        Currently being used by some family & friends. <br/>
        <hr className="solid" color='#7B7D82'></hr>
     
        <Row style={{ padding: "0%", justifyContent: 'space-evenly',}}>
                   

        <Chip label='Flutter'></Chip>
        <Chip label='Firebase'></Chip>
        <Chip label='NodeJS'></Chip>
        <Chip label='GitHub API'></Chip>
        <Chip label='Stream Processing'></Chip>
  
        </Row>
  
        <hr className="solid" color='#7B7D82'></hr>
        <div >
        <img style={{maxWidth:'20em',}} src = 'https://user-images.githubusercontent.com/24496327/119276109-00314300-bbe7-11eb-85f7-8415cc059807.gif' alt='wedoo screen recordings'></img>
        </div>
        <br></br>
        <strong>Reach out if you're interested in developing Wedoo further!</strong>
        <br></br>
        <br></br>
       <a className='link' href='https://www.wedoo.app' target='_blank' rel='noreferrer'> <Chip label={<strong>Learn more about Wedoo</strong>} color="primary"></Chip></a><br/><br/>
      </p>
        
  </VerticalTimelineElement>




<VerticalTimelineElement
    
    contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
    date="Summmer 2021 - Present"
    dateClassName='k-date-2'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src='https://i.redd.it/o5wgkhoqkem31.png' alt='University of Pennsylvania logo' height={55}/>}

  >
   
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Project MForge</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Game Development Project 🕹</strong></h4>
    <p>Blender & Unity Engine</p>

        <p style={{fontWeight:'300'}}>
        Since 2018 I have spent time writing, illustrating and animating a story inspired by African folklore. 
        This year I have chosen a medium through which I would like to share this story - a video game!
        Over the Summer I have been slowly building up experience in 3D Modeling, 3D Animation and Unity. Stay tuned! <br/>
        <hr className="solid" color='#7B7D82'></hr>
     
        <Row style={{ padding: "0%", justifyContent: 'space-evenly',}}>
                   

        <Chip label='Blender'></Chip>
        <Chip label='Unity'></Chip>
        <Chip label='C#'></Chip>
        <Chip label='Game Development'></Chip>
        <Chip label='Multimedia Design'></Chip>
  
        </Row>
  
        <hr className="solid" color='#7B7D82'></hr>
        <div className="iframe-container">
                <iframe src='https://player.vimeo.com/video/554077071?byline=0&portrait=0&loop=1&autoplay=1'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
        />        
        </div>
        <br></br>
        <br></br>
      <Chip label={<strong>More on this soon</strong>} color="primary"></Chip>
        <br/><br/>
      </p>
        
  </VerticalTimelineElement>





   <VerticalTimelineElement
   icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={55}/>}
   contentStyle={{ background: '#2D364F', color: '#fff', }}
    contentArrowStyle={{ borderRight: '7px solid #3A465C' }}
  >
     <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>University of Pennsylania</h3>
     {/* <h5 className="vertical-timeline-element-subtitle"><strong>B.S.E Electrical Engineering w/CS minor</strong></h5><br/> */}
     <lighter>Some projects undertaken during college</lighter>
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
        <Row style={{ padding: "0%", justifyContent: 'space-evenly' }}>

        <Chip label='Kotlin'></Chip>
        <Chip label='Python'></Chip>
        <Chip label='Firebase'></Chip>
        <Chip label='Embedded Systems'></Chip>
        <Chip label='Signal Processing'></Chip>
  
        </Row>
        
        <hr className="solid" color='#7B7D82'></hr>
        <div className="iframe-container">
        <iframe src='https://player.vimeo.com/video/406106876?byline=0&portrait=0'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /></div>
        <br></br>
        <br></br>
        <a className='link' href='https://devpost.com/software/tune-in-tune-out' target='_blank' rel='noreferrer'> <Chip label={<strong>Visit Project Site</strong>} color="primary"></Chip></a><br/>
        <br></br>
        <a className='link' href='https://penntoday.upenn.edu/news/home-still-engaged-stem-classes#content:~:text=Celebrating%20seniors' target='_blank' rel='noreferrer'> <Chip label={<strong>Read Penn Today Article</strong>} color="primary"></Chip></a><br/>
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
          <Row style={{ padding: "0%", justifyContent: 'space-evenly' }}>
                    

          <Chip label='C/C++'></Chip>
          <Chip label='Python'></Chip>
          <Chip label='IBM Watson API'></Chip>
          <Chip label='Circuits'></Chip>
          <Chip label='Embedded Systems'></Chip>
    
          </Row>
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
        <Row style={{ padding: "0%", justifyContent: 'space-evenly' }}>
                   

          <Chip label='Matlab'></Chip>
          <Chip label='SolidWorks CAD'></Chip>
          <Chip label='Arduino'></Chip>
          <Chip label='Signal Processing'></Chip>
        </Row>
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