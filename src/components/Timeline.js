import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import bike from '../assets/kyler-bike.gif';

function Timeline(props) {
return (<VerticalTimeline className='k-overflow' layout='1-columns' >
  <VerticalTimelineElement
    
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFFFF', }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Sep 2020 - Present"
    dateClassName='k-date'
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in' src="https://temperfield.com/wp-content/uploads/2017/09/Microsoft-Logo-icon-png-Transparent-Background.png" alt='University of Pennsylvania logo' height={55}/>}
    
    // icon={
    // <FontAwesomeIcon className='fas fa-2x'  icon={faMicrosoft} />}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Customer Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Microsoft</strong></h4>
    <p>Dallas, TX</p>
    
        
        <p style={{fontWeight:'300'}}>DevOps Specialist<br/>
        Azure Apps & Infrastructure<br/>
        Customer-Facing Development<br/>
        </p>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="Aug 2016 - May 2020"
    iconStyle={{ background: '#fff', color: '#fff',}}
    icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={55}/>}
    // icon={
    // <FontAwesomeIcon className='fas fa-lg'  icon={faGraduationCap} />}
  >
      
    <div class="content">
  {/* <img src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={70}/> */}
  <div class="text">
    <h3 style={{fontWeight:'lighter'}}>Class of 2020 Graduate</h3>
    <h4><strong>University of Pennsylvania</strong></h4>
    <p style={{fontWeight:'300'}}>B.S.E Electrical Engineering <br/> Computer Science minor</p>
  </div>
</div>
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jun 2019 - Sep 2019"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt='Google logo' height={55}/>}
    // icon={
    // <FontAwesomeIcon className='fas fa-lg' icon={faGoogle} />}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Hardware Engineering Intern</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>Google</strong></h4>
    <p>Mointain View, CA</p>
    
    <p style={{fontWeight:'300'}}>
      Google Pixel Team<br></br>
      Contributed 5,000+ loc to team codebase<br></br>
      Two projects with focus on Bluetooth power optimization, testing & development ahead of Pixel 4 and Android 10 rollout<br></br>
    </p>
    <div style={{position: 'relative', marginLeft:-150}}>
    <img src = {bike} height={250} alt='animation I drew of me riding a bike during the Summer of 2020. Was my main method of transportation then.'/>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2019 - May 2020"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://media-exp1.licdn.com/dms/image/C4E0BAQFGFNmrO7AKNg/company-logo_100_100/0/1553536363764?e=1619654400&v=beta&t=f0i8545Sltuqy3CBrffP-RHjHBAeWYXK1Fb9LnhIqe4" alt='Google logo' height={55}/>}
    // icon={
    // <FontAwesomeIcon className='fas fa-lg' icon={faGoogle} />}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Co-Founder</h3>
    <h4 className="vertical-timeline-element-subtitle"><strong>SilkBlu Technologies LLC</strong></h4>
    <p>Philadelphia, PA</p>
    
    <p style={{fontWeight:'300'}}>
      5 member software consulting team<br></br>
      UPenn Innovation Prize Top 6 placement<br></br>
      Wharton StartUp Challenge semi-finalists <br></br>
    </p>
    <div style={{position: 'relative', marginLeft:-150}}>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Jan 2017 - Jan 2019"
    iconStyle={{ background: '#fff', color: '#fff',  }}
    icon={<img className='vertical-timeline-element-icon bounce-in'  src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={55}/>}
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Pennsylvania</h4>
    <p style={{fontWeight:'300'}}>
      Department of Electrical & Systems Engineering<br/><br/>
      ESE 190: Silicon Garage (Spr ‘17, Spr ‘18)<br/>
      ESE 111: Atoms, Bits, Circuits & Systems (Fall ‘17, Fall ‘18)<br/>
      ESE 215: Intro to Circuits (Fall ‘18)<br/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Jan 2011 - Dec 2015"
    iconStyle={{ background: '#fff', color: '#fff'}}
    icon={<img className='vertical-timeline-element-icon' src="https://simplybook.me/uploads/ststithianscollege/image_files/preview/20cd116a436cd4b7d5ab9daa4e191cbd.png" alt='University of Pennsylvania logo' height={100}/>}
 
  >
    <h3 className="vertical-timeline-element-title" style={{fontWeight:'lighter'}}>St Stithians Boys' College</h3>
    <h4 className="vertical-timeline-element-subtitle">High School Diploma</h4>
    <p style={{fontWeight:'300'}}>
      Johannesburg, South Africa<br/>
      

    </p>
  </VerticalTimelineElement>

</VerticalTimeline>);
}

export default Timeline;